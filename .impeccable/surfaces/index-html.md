---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/style.css", "src/main.ts", "src/breathing.ts", "src/rabbit-renderer.ts", "DESIGN.md"]
---

# ল্যান্ডিং পেজ

Mode: Experience। relaxedrabbit.com-এ English সফটওয়্যার স্টুডিওর পরিচয়। পাবলিক ইমেইল, বানানো প্রজেক্ট, ক্লায়েন্ট বা সংখ্যা নয়। 2026-10-10-এ ইউজার মাঝখানে সাজানো মূল meadow composition A পছন্দ করেছেন। মকআপ: .impeccable/mocks/meadow-original.png।

## ডিজাইনের ঠিক করা দিক

THESIS: র‍্যাবিটের ধীরেসুস্থে কাটানো দিন স্টুডিওর যত্নের ভাব দেখাবে। সাধারণ product-card ল্যান্ডিং পেজ নয়।

OWN-WORLD: রোদেলা oat রঙের মাটি, গাঢ় সবুজ মোটা নরম সেরিফ, শ্যাওলাভরা ছোট মাঠ ও ক্রিম ভাস্কর্যের মতো র‍্যাবিট। সরু হালকা লাইন ও গোল arrow কন্ট্রোল।

STORY: আগের সকালের মাঠে র‍্যাবিটের সঙ্গে পরিচয়। গাছ-ফুলের disclosure-এ স্টুডিওর ভাবনা, বিকেলে ছোট ব্রিদিং বিরতি, তারপর সূর্যাস্তে ঘুমানো র‍্যাবিট। দৃশ্যের শেষে ছোট ব্র্যান্ড পরিচয়।

FIRST VIEWPORT: সরু ওয়ার্ডমার্ক/নেভিগেশন সারি; মাঝে বিশাল দুই লাইনের হেডিং; ছোট মাঝখানে রাখা সাবটাইটেল; নিচের অর্ধেকে র‍্যাবিটের মাঠের প্যানোরামা; নিচে বামে স্ক্রল লিংক, ডানে ছোট care label। স্ক্রলে ছবি ও লেখা আলাদা গতিতে নড়ে, তারপর গাঢ় সবুজ লেখার অংশ আসে।

FORM: Illustrated meadow, grounded candidate 1 (ইউজারের পছন্দ), seed b262369c। মূল composition A বাছা হয়েছে। Static Vite/TypeScript/GSAP, native semantic কনটেন্ট ও reduced-motion fallback।

FINISH: রিভিউ ও ডক ছাড়া কাজ শেষ নয়। শেষে finish review, রায়, DESIGN.md এবং ব্যবহৃত প্রতিটি raster-এর উৎসের তথ্য থাকবে।

## নিচের সেকশনগুলোতে যা আছে

তিনটি আলাদা native disclosure খুললে উচ্চতা ও লেখা অ্যানিমেট হয়। সঙ্গে বীজ, ভারসাম্য বা ফুলের ছবি বাছা হয়। বিকেলের দৃশ্যে একই ফুল ধরা র‍্যাবিট সরাসরি হালকা সবুজ জায়গায় বসে। Native WebGL mesh-এ পা স্থির রেখে বুক-পেট ফুলে ওঠে ও ওপরের শরীর একটু ওঠে। বর্গাকার ছবি জুম হয় না। Opaque magenta টেক্সচার fragment shader-এ chroma-key করে canvas ট্রান্সপারেন্ট হয়।

Start দিলে বোঝানো একটি রাউন্ড চলে: ৪ সেকেন্ড শ্বাস নেওয়া ও ৬ সেকেন্ড ছাড়া। Stop, replay, সরু meter ও polite ধাপ/সময়ের লেখা আছে। WebGL ব্যর্থ হলে আগের rabbit silhouette ও সময় ধরে লেখা থাকে। নতুন rendering dependency নেই। পুরো চওড়া সূর্যাস্তে বিদায়ের লেখা, মাঠে ফেরার লিংক ও ছোট ফুটার ব্র্যান্ডিং আছে।

ফোনের hero-তে কনটেন্ট অনুযায়ী grid row, `object-fit: cover` দিয়ে কাছের মাঠ, 32% horizontal focus ও পড়ার মতো fluid type আছে। শুধু ছবি হালকা সরে; ডেস্কটপের text parallax নয়। সব viewport-এ র‍্যাবিট/status-এর পরে ব্রিদিং কন্ট্রোল। শরীরের mesh নড়াচড়া প্রায় তিনগুণ, সঙ্গে তাল মিলিয়ে মাটির shadow। OS reduced motion-এ সব কনটেন্ট ও সময় ধরে ব্রিদিং লেখা থাকে; র‍্যাবিট স্থির ও স্ক্রল মোশন বন্ধ। আলাদা motion UI বা storage নেই।

ব্যবহৃত meadow ও sunset WebP ভ্যারিয়েন্ট এবং একমাত্র `rabbit-breath-key.webp` টেক্সচারের পাশে উৎসের sidecar আছে। পুরোনো বিকেলের WebP শুধু রেফারেন্স, বিল্ডের বাইরে। ব্যর্থ true-alpha ছবি দেওয়া হয়নি।
