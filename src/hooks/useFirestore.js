import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    onSnapshot,
    query,
    where
} from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export function useFirestore(collectionName) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { currentUser } = useAuth();

    // Context-aware subscription
    useEffect(() => {
        if (!currentUser) {
            setData([]);
            setLoading(false);
            return;
        }

        const q = query(
            collection(db, collectionName),
            where("userId", "==", currentUser.uid)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(documents);
            setLoading(false);
        }, (err) => {
            setError(err);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [collectionName, currentUser]);

    // CRUD Operations
    const add = async (docData) => {
        if (!currentUser) throw new Error("Must be logged in to add data");
        return await addDoc(collection(db, collectionName), {
            ...docData,
            userId: currentUser.uid,
            createdAt: new Date()
        });
    };

    const remove = async (id) => {
        if (!currentUser) throw new Error("Must be logged in to delete data");
        return await deleteDoc(doc(db, collectionName, id));
    };

    const update = async (id, docData) => {
        if (!currentUser) throw new Error("Must be logged in to update data");
        return await updateDoc(doc(db, collectionName, id), {
            ...docData,
            updatedAt: new Date()
        });
    };

    return { data, loading, error, add, remove, update };
}
