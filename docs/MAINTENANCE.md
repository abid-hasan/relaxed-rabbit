# মেইনটেন্যান্স ও রিলিজ গাইড

## এডিটের আগে

1. `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` ও `docs/PROJECT-CONTEXT.md` পড়ুন।
2. `git status` দেখুন ও অন্য কাজ অক্ষত রাখুন। এটি Relaxed Rabbit রিপোজিটরি, Flutter প্রজেক্ট নয়।
3. ডিপেন্ডেন্সি না থাকলে `npm ci` দিন। Vite-এর জন্য Node 22.12+ লাগে। `npm run dev` দিয়ে দেখানো URL খুলুন।
4. আগের ছবি ও ব্র্যান্ডের রং ব্যবহার করুন। নতুন তথ্য দাবি করতে বা মূল ব্র্যান্ড বদলাতে মালিকের সিদ্ধান্ত নিন।

## কোন ফাইলে কী আছে

| ফাইল | কাজ |
| --- | --- |
| `index.html` | English লেখা, semantic সেকশন, SVG চিহ্ন, SEO/social metadata |
| `src/style.css` | লেআউট, কম্পোনেন্ট, রেসপন্সিভ নিয়ম, ফোকাস/reduced-motion স্টাইল |
| `brand/palette.css` | শেয়ার করা ব্র্যান্ডের মূল রং |
| `src/main.ts` | GSAP স্ক্রল দৃশ্য, রেসপন্সিভ মোশন ও native disclosure অ্যানিমেশন |
| `src/breathing.ts` | ৪ সেকেন্ড শ্বাস নেওয়া + ৬ সেকেন্ড ছাড়া, কন্ট্রোল, ফোকাস, বাতিল ও fallback |
| `src/rabbit-renderer.ts` | WebGL টেক্সচার, শরীরের mesh নড়ানো ও resize-এ render |
| `assets/plates/` | ছবি ও পাশে উৎসের JSON |
| `public/` | ডিপ্লয় সাইটে সরাসরি কপি হওয়া ফাইল |
| `.github/workflows/pages.yml` | main-এ বিল্ড ও Pages ডিপ্লয় |

## নিজে যাচাই করা

অটোমেটেড টেস্ট ফাইল লাগবে না, অনুমতিও নেই। `npm run build` (TypeScript + Vite) ও `git diff --check` চালান। সম্ভব হলে `npm run preview` দিয়ে প্রোডাকশন আউটপুট দেখুন।

ব্রাউজারে 320, 390, 768, 1024 ও 1440 CSS পিক্সেলে একসঙ্গে চেক করুন। ফোনের landscape সাইজও রাখুন। স্ক্রিনশটের আগে লেআউট ও ফন্ট লোড হতে দিন। ব্রাউজার emulation মানে আসল ফোন বা Safari টেস্ট নয়।

- পাশে কনটেন্ট বেরিয়ে যাবে না, লেখা কাটবে না। জুম করলে লেখা নতুন লাইনে যাবে; pinch zoom বন্ধ করবেন না।
- Hero-র র‍্যাবিট চেনা যাবে। লেখা ও ছবি চাপা পড়বে না। ছবির অনুপাত ঠিক থাকবে।
- লিংক, summary ও বাটনে ট্যাপ করা যাবে। মাউস, Enter/Space ও ফোকাস কাজ করবে।
- Disclosure খুলুন ও বন্ধ করুন। দ্রুত উল্টো অ্যাকশন ও খোলা অবস্থায় resize করুন।
- ব্রিদিং: Start → শ্বাস নেওয়া → ছাড়া → শেষ → replay। মাঝপথে Stop দিন। ধাপ, র‍্যাবিট ও মিটার মিলবে। ফোনে কন্ট্রোল র‍্যাবিটের কাছে থাকবে।
- সেকশন স্ক্রিনের বাইরে গেলে বা ট্যাব আড়াল হলে ব্রিদিং বন্ধ হবে। Reduced motion-এ ছবি স্থির, সময় ধরে লেখা চলবে। WebGL না চললে সিলুয়েট ও লেখা থাকবে।
- ফুল-পেজ স্ক্রিনশটের আগে ফুটারে স্ক্রল করুন, যেন lazy ছবি লোড হয়।
- কনসোলে অ্যাপের error দেখুন; অপ্রাসঙ্গিক extension error নয়।
- বিল্ডে social metadata ও `dist/assets/`-এ তার ছবি আছে কি না দেখুন।

## পাবলিশ

মালিক স্পষ্ট করে বললেই কমিট/পুশ করুন। পুরো diff দেখে শুধু এই কাজের ফাইল stage করুন। কী বদলেছে তা দিয়ে ছোট মেসেজ লিখুন; অ্যাসিস্ট্যান্টের কৃতিত্ব নয়। `main`-এ push হলে `.github/workflows/pages.yml` চলে। সাধারণ ডিপ্লয়ে DNS বা অন্য অ্যাকাউন্ট সেটিংস বদলাবেন না।

পুশ করা SHA-র Actions run দেখুন। Push সফল মানেই deploy সফল নয়। ডিপ্লয়ের পর https://relaxedrabbit.com/ ও দরকারি অ্যাসেট চেক করুন। রিমোট আপডেট এড়াতে force-push নয়; দেখে দুই পক্ষের history রাখুন।

## SEO ও সোশ্যাল প্রিভিউ

Canonical ও sitemap URL: `https://relaxedrabbit.com/`। Open Graph/Twitter ছবির URL পুরো HTTPS লিংক হবে। `public/robots.txt` crawl করতে দেয় ও sitemap দেখায়। ইচ্ছা করে রাখা HTTP/www redirect থাকবে। প্রিভিউ সার্ভিস card cache করে; metadata বদলালেই সঙ্গে সঙ্গে দেখাবে এমন নয়। কোড দিয়ে Google indexing নিশ্চিত করা যায় না।

## ডক আপডেট

ব্র্যান্ডের রং `brand/palette.css`-এ রাখুন। বদলালে JSON/GPL/SVG-ও মেলান। UI আচরণে `DESIGN.md`, কাজের সীমায় `PRODUCT.md`, মালিকের পছন্দে `docs/PROJECT-CONTEXT.md` আপডেট করুন। `CLAUDE.md` থেকে `AGENTS.md`-এর লিংক রাখুন, যেন নিয়ম আলাদা না হয়। পুরোনো `.impeccable/design.json` টুলের তৈরি metadata। সেটি পুরোনো হলে কোড, মূল ব্র্যান্ড রং ও DESIGN.md অনুসরণ করুন।
