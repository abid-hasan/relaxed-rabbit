# অ্যাসেটের উৎস

মালিক composition A হিসেবে `.impeccable/mocks/meadow-original.png` পছন্দ করেছেন।

ওই ছবি রেফারেন্স দিয়ে বিল্ট-ইন image-generation টুলে প্রোডাকশনের মাঠের ছবি বানানো হয়েছে। পুরো প্রম্পট `.impeccable/build/meadow-production.prompt.txt` ও `assets/plates/meadow.png`-এর ভেতরে আছে। WebP ফাইলের পাশে উৎসের sidecar আছে। এগুলো জেনারেট করা মূল ছবি থেকে নেওয়া, ওয়েবসাইটের স্ক্রিনশট কেটে নয়।

প্রথম ট্রান্সপারেন্ট চেষ্টায় ছবির ভেতর checkerboard আঁকা ছিল, তাই বাদ গেছে। প্রজেক্টে সেটি নেই। ব্যবহৃত ছবি opaque; পছন্দ করা ক্রিম ব্যাকগ্রাউন্ডে নরমভাবে মেশানো। ছবিটি একসঙ্গে নড়ে; লেখা ও অন্য অংশ আলাদা নড়ে।

র‍্যাবিট লোগো: index.html ও public/favicon.svg-তে ছোট মূল SVG চিহ্ন।

ফন্ট: Fontsource থেকে লোকালে রাখা Fraunces ও Linden Hill। দুটোই SIL Open Font License। মূল লাইসেন্স ইনস্টল করা প্যাকেজে আছে; public/licenses/-এও কপি করা।

## এখন ব্যবহৃত ফাইল ও ব্র্যান্ড কিট

- সকালের মাঠ: `assets/plates/meadow.webp` (2172px) ও `meadow-small.webp` (1200px)। পাশে উৎসের JSON আছে। মোবাইলে CSS দিয়ে কাছের crop দেখায়; ছবি টেনে বা নতুন করে বানানো নয়।
- সূর্যাস্ত: `assets/plates/sunset.webp` (1536px) ও `sunset-small.webp` (900px)। পাশে উৎসের তথ্য আছে। স্থির ছবিতে স্ক্রল মোশন চলে; ঘুমানো র‍্যাবিট আলাদা অ্যানিমেটেড নয়।
- ব্রিদিং: `assets/plates/rabbit-breath-key.webp` (1000px বর্গাকার), পাশে উৎসের তথ্য। মূল ছবি opaque magenta; WebGL fragment shader রং বাদ দিয়ে ট্রান্সপারেন্ট করে। Mesh দিয়ে বুক-পেট ও ওপরের শরীর নড়ে। সোর্সকে transparent PNG/WebP বলবেন না।
- `breath.webp` ও `breath-small.webp` শুধু রেফারেন্স; বিল্ডে ইমপোর্ট হয় না। ব্যর্থ checkerboard cutout দেওয়া হয়নি।
- সোশ্যাল ছবি: `public/assets/relaxed-rabbit-preview.png`। আগের মাঠের PNG স্থায়ী URL-এ Open Graph/Twitter metadata-র জন্য রাখা।
- লোগো: `brand/`-এ আগের rabbit path-এর forest/cream/black ভার্সন, outline করা Linden Hill Regular-সহ আড়াআড়ি ওয়ার্ডমার্ক ও favicon টাইল আছে। SVG ওয়ার্ডমার্কে বাইরের ফন্ট লাগে না। দেখুন `brand/README.md` ও `docs/BRAND.md`।
- লাইভ সাইট `brand/palette.css` ব্যবহার করে। JSON/GPL/SVG-তেও একই sRGB রং।

সোর্স বা জেনারেট করা ছবি থাকলেই একক ট্রেডমার্ক অধিকার বা নতুন লাইসেন্স পাওয়া যায় না। ফন্ট ফাইল শেয়ার করলে লাইসেন্সও রাখুন। `public/` দিয়ে সোর্স প্রম্পট, ভেতরের নোট বা ইউজারের কম্পিউটারের path পাবলিশ করবেন না।
