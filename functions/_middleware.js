import { routes, defaultLang, languages } from '../seo-config.js';

/**
 * Cloudflare Pages Function Middleware
 * Intercepts requests and injects SEO metadata for crawlers/social bots
 */
export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';

    // Define bot patterns
    const botPattern = /bot|crawler|spider|crawling|facebookexternalhit|twitterbot|whatsapp|telegram|discord/i;
    const isBot = botPattern.test(userAgent);

    // If not a bot, pass through (let Client Side Rendering handle it)
    // However, for social sharing cards (Open Graph), they act like bots, 
    // so this logic covers them.
    // OPTIONAL: You might want to do this for ALL requests to avoid "flash of untilted content"
    // But user specifically asked "When crawler visits..."
    if (!isBot) {
        return next();
    }

    // Determine language from URL (e.g., /zh-CN/vision or just /vision for default?)
    // Assuming structure: domain.com/zh-CN/page OR domain.com/page (default lang)
    // BUT: Current router seems to be client-side only (no /zh-CN/ prefix in paths in seo-config).
    // Let's assume query param ?lang=xx OR Accept-Language header if strict path not used.
    // WAIT, for SEO, we usually need specific URLs like /ja/vision. 
    // The user's seo-config has paths like '/vision'. 
    // If the app doesn't have lang prefixes in URL, we need strategies.
    // Strategy: Check if URL starts with a supported language code.

    let lang = defaultLang;
    let path = url.pathname;

    // Check if path starts with a language code (e.g., /ja/vision)
    for (const l of languages) {
        if (path.startsWith(`/${l}/`) || path === `/${l}`) {
            lang = l;
            path = path.replace(`/${l}`, '') || '/';
            break;
        }
    }

    // Find matching route config
    // We match exact path or usually React Router paths are transparent
    const route = routes.find(r => r.path === path);

    if (!route) {
        return next();
    }

    const metadata = route.i18n[lang] || route.i18n[defaultLang];

    // Get the original response (index.html)
    const response = await next();

    // Use HTMLRewriter to inject metadata
    return new HTMLRewriter()
        .on('title', {
            element(element) {
                element.setInnerContent(metadata.title);
            }
        })
        .on('meta[name="description"]', {
            element(element) {
                element.setAttribute('content', metadata.description);
            }
        })
        .on('meta[property="og:title"]', {
            element(element) {
                element.setAttribute('content', metadata.title);
            }
        })
        .on('meta[property="og:description"]', {
            element(element) {
                element.setAttribute('content', metadata.description);
            }
        })
        .on('meta[name="twitter:title"]', {
            element(element) {
                element.setAttribute('content', metadata.title);
            }
        })
        .on('meta[name="twitter:description"]', {
            element(element) {
                element.setAttribute('content', metadata.description);
            }
        })
        .on('html', {
            element(element) {
                element.setAttribute('lang', lang);
            }
        })
        .transform(response);
}
