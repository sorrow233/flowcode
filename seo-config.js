export const languages = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'];
export const defaultLang = 'zh-CN';
export const siteUrl = 'https://flowcode.pages.dev'; // Replace with actual production URL if different

export const routes = [
    {
        path: '/',
        i18n: {
            'zh-CN': {
                title: 'FlowCode - AI 辅助网站开发教程 | 零基础建站',
                description: '让零基础用户也能借助 AI 开发并上线自己的网站。用自然语言创造无限可能。Google Antigravity IDE 官方推荐教程。'
            },
            'zh-TW': {
                title: 'FlowCode - AI 輔助網站開發教學 | 零基礎建站',
                description: '讓零基礎用戶也能借助 AI 開發並上線自己的網站。用自然語言創造無限可能。Google Antigravity IDE 官方推薦教學。'
            },
            'en': {
                title: 'FlowCode - AI-Powered Website Development Tutorial for Beginners',
                description: 'Enable beginners to develop and launch websites with AI assistance. Create infinite possibilities with natural language. Recommended guide for Google Antigravity IDE.'
            },
            'ja': {
                title: 'FlowCode - 初心者のためのAIウェブサイト開発チュートリアル',
                description: '初心者でもAIの力を借りてウェブサイトを開発・公開できます。自然言語で無限の可能性を創造。Google Antigravity IDE 公式推奨ガイド。'
            },
            'ko': {
                title: 'FlowCode - 초보자를 위한 AI 웹사이트 개발 튜토리얼',
                description: '초보자도 AI의 도움으로 웹사이트를 개발하고 출시할 수 있습니다. 자연어로 무한한 가능성을 창조하세요. Google Antigravity IDE 공식 추천 가이드.'
            }
        }
    },
    {
        path: '/download',
        i18n: {
            'zh-CN': { title: '下载工具 - FlowCode AI 开发概论', description: '第一步：下载 Google Antigravity IDE，开启你的 AI 编程之旅。确保使用官方渠道以获得最新 Gemini 2.0 模型支持。' },
            'zh-TW': { title: '下載工具 - FlowCode AI 開發概論', description: '第一步：下載 Google Antigravity IDE，開啟你的 AI 編程之旅。確保使用官方渠道以獲得最新 Gemini 2.0 模型支持。' },
            'en': { title: 'Get Tools - FlowCode AI Development Guide', description: 'Step 1: Download Google Antigravity IDE and start your AI programming journey. Ensure you use official channels for Gemini 2.0 support.' },
            'ja': { title: 'ツール入手 - FlowCode AI開発ガイド', description: 'ステップ1：Google Antigravity IDEをダウンロードして、AIプログラミングの旅を始めましょう。公式サイトからGemini 2.0モデルを入手してください。' },
            'ko': { title: '도구 다운로드 - FlowCode AI 개발 가이드', description: '1단계: Google Antigravity IDE를 다운로드하고 AI 프로그래밍 여정을 시작하세요. Gemini 2.0 지원을 위해 공식 채널을 이용하세요.' }
        }
    },
    {
        path: '/vision',
        i18n: {
            'zh-CN': { title: '描绘愿景 - FlowCode', description: '第二步：告诉 AI 你想要什么。学习如何用自然语言清晰描述你的应用想法，这是高效创造的起点。' },
            'zh-TW': { title: '描繪願景 - FlowCode', description: '第二步：告訴 AI 你想要什麼。學習如何用自然語言清晰描述你的應用想法，這是高效創造的起點。' },
            'en': { title: 'Define Vision - FlowCode', description: 'Step 2: Tell AI what you want. Learn how to clearly describe your app ideas using natural language.' },
            'ja': { title: 'ビジョンを描く - FlowCode', description: 'ステップ2：AIに何が欲しいか伝えましょう。自然言語でアイデアを明確に説明する方法を学びます。' },
            'ko': { title: '비전 설계 - FlowCode', description: '2단계: AI에게 원하는 것을 말하세요. 자연어로 앱 아이디어를 명확하게 설명하는 방법을 배우세요.' }
        }
    },
    {
        path: '/generation',
        i18n: {
            'zh-CN': { title: '代码生成 - FlowCode', description: '第三步：见证 AI 将你的想法转化为可运行的代码。自动规划文件结构并编写程序。' },
            'zh-TW': { title: '代碼生成 - FlowCode', description: '第三步：見證 AI 將你的想法轉化為可運行的代碼。自動規劃文件結構並編寫程式。' },
            'en': { title: 'Code Synthesis - FlowCode', description: 'Step 3: Witness AI turning your thoughts into runnable code. Automatic file structure planning and coding.' },
            'ja': { title: 'コード生成 - FlowCode', description: 'ステップ3：AIがあなたのアイデアを実行可能なコードに変える瞬間を目撃しましょう。自動ファイル構造計画とコーディング。' },
            'ko': { title: '코드 생성 - FlowCode', description: '3단계: AI가 당신의 아이디어를 실행 가능한 코드로 변환하는 순간을 목격하세요. 자동 파일 구조 계획 및 코딩.' }
        }
    },
    {
        path: '/cloudflare',
        i18n: {
            'zh-CN': { title: '全球部署 - FlowCode', description: '第四步：使用 Cloudflare Pages 免费托管你的网站，享受企业级全球边缘网络速度。' },
            'zh-TW': { title: '全球部署 - FlowCode', description: '第四步：使用 Cloudflare Pages 免費託管你的網站，享受企業級全球邊緣網絡速度。' },
            'en': { title: 'Global Deploy - FlowCode', description: 'Step 4: Host your site for free with Cloudflare Pages and enjoy enterprise-grade global edge network speeds.' },
            'ja': { title: 'グローバル展開 - FlowCode', description: 'ステップ4：Cloudflare Pagesを使用してサイトを無料でホストし、エンタープライズグレードの速度を享受しましょう。' },
            'ko': { title: '글로벌 배포 - FlowCode', description: '4단계: Cloudflare Pages를 사용하여 사이트를 무료로 호스팅하고 엔터프라이즈급 속도를 누리세요.' }
        }
    },
    {
        path: '/firebase',
        i18n: {
            'zh-CN': { title: '无限存储 - FlowCode', description: '第五步：连接 Google Firebase，实现即用型实时数据库和身份验证服务。' },
            'zh-TW': { title: '無限存儲 - FlowCode', description: '第五步：連接 Google Firebase，實現即用型實時數據庫和身份驗證服務。' },
            'en': { title: 'Infinite Storage - FlowCode', description: 'Step 5: Connect Google Firebase for ready-to-use real-time database and authentication services.' },
            'ja': { title: '無限ストレージ - FlowCode', description: 'ステップ5：Google Firebaseに接続して、すぐに使えるリアルタイムデータベースと認証を実現します。' },
            'ko': { title: '무한 스토리지 - FlowCode', description: '5단계: Google Firebase에 연결하여 즉시 사용 가능한 실시간 데이터베이스와 인증 서비스를 구현하세요.' }
        }
    },
    {
        path: '/domain',
        i18n: {
            'zh-CN': { title: '定制域名 - FlowCode', description: '第六步：注册并绑定你的专属域名。这是你的数字资产和互联网身份。' },
            'zh-TW': { title: '定制域名 - FlowCode', description: '第六步：註冊並綁定你的專屬域名。這是你的數字資產和互聯網身份。' },
            'en': { title: 'Custom Domain - FlowCode', description: 'Step 6: Register and connect your custom domain. This is your digital asset and internet identity.' },
            'ja': { title: 'カスタムドメイン - FlowCode', description: 'ステップ6：独自のドメインを登録して接続します。これはあなたのデジタル資産であり、アイデンティティです。' },
            'ko': { title: '커스텀 도메인 - FlowCode', description: '6단계: 나만의 도메인을 등록하고 연결하세요. 이것은 당신의 디지털 자산이자 정체성입니다.' }
        }
    },
    {
        path: '/success',
        i18n: {
            'zh-CN': { title: '准备就绪 - FlowCode', description: '第七步：恭喜！你已完成所有准备工作。世界是你的画布，开始创造吧。' },
            'zh-TW': { title: '準備就緒 - FlowCode', description: '第七步：恭喜！你已完成所有準備工作。世界是你的畫布，開始創造吧。' },
            'en': { title: 'Ready for Takeoff - FlowCode', description: 'Step 7: Congratulations! You are ready. The world is your canvas, start creating.' },
            'ja': { title: '準備完了 - FlowCode', description: 'ステップ7：おめでとうございます！準備が整いました。世界はあなたのキャンバスです。' },
            'ko': { title: '준비 완료 - FlowCode', description: '7단계: 축하합니다! 모든 준비가 완료되었습니다. 세상은 당신의 캔버스입니다.' }
        }
    }
];
