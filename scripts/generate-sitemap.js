import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes, languages, siteUrl, defaultLang } from '../seo-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

    routes.forEach(route => {
        // For each route, we generate entries for all languages
        // We assume URL structure: 
        // Default (zh-CN): domain.com/page
        // Others: domain.com/lang/page
        // Or if strictly prefixed: domain.com/zh-CN/page

        // Let's assume a strategy where we list ALL explicit language links

        languages.forEach(currentLang => {
            // Construct URL
            // If default lang, maybe keep clean URL? Or strictly prefix?
            // "seo-config.js" has path "/". 
            // Let's assume non-default langs get prefix.

            let urlPath = route.path === '/' ? '' : route.path;

            // Logic: 
            // zh-CN (default) -> https://flowcode.pages.dev/vision
            // en -> https://flowcode.pages.dev/en/vision

            let pageUrl = '';
            if (currentLang === defaultLang) {
                pageUrl = `${siteUrl}${urlPath}`;
            } else {
                pageUrl = `${siteUrl}/${currentLang}${urlPath}`; // Handle leading slash in urlPath carefully
            }
            // Fix double slash if urlPath is empty or /
            pageUrl = pageUrl.replace(/([^:]\/)\/+/g, "$1");
            if (pageUrl.endsWith('/')) pageUrl = pageUrl.slice(0, -1); // remove trailing slash for consistency (unless root)
            if (pageUrl === '') pageUrl = siteUrl; // Root
            if (path === '/' && currentLang !== defaultLang) pageUrl = `${siteUrl}/${currentLang}`;
            if (path === '/' && currentLang === defaultLang) pageUrl = `${siteUrl}/`;


            sitemap += `  <url>
    <loc>${pageUrl}</loc>
`;

            // Add hreflang entries for this URL
            languages.forEach(lang => {
                let hrefPath = route.path === '/' ? '' : route.path;
                let hrefUrl = '';
                if (lang === defaultLang) {
                    hrefUrl = `${siteUrl}${hrefPath}`;
                } else {
                    hrefUrl = `${siteUrl}/${lang}${hrefPath}`;
                }

                // Formatting cleanups
                hrefUrl = hrefUrl.replace(/([^:]\/)\/+/g, "$1");
                if (hrefUrl.endsWith('/') && hrefUrl.length > siteUrl.length + 1) hrefUrl = hrefUrl.slice(0, -1);
                if (route.path === '/' && lang !== defaultLang) hrefUrl = `${siteUrl}/${lang}`;
                if (route.path === '/' && lang === defaultLang) hrefUrl = `${siteUrl}/`;

                sitemap += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${hrefUrl}"/>
`;
            });

            sitemap += `  </url>
`;
        });
    });

    sitemap += `</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`✅ Sitemap with hreflang generated at ${outputPath}`);
};

generateSitemap();
