# সর্বশেষ যাচাই

## 2026-10-26 — মোবাইল লেআউট ও ব্র্যান্ডের ডক

- `npm run build`: পাস (TypeScript ও Vite প্রোডাকশন আউটপুট)।
- `git diff --check`: পাস।
- Chrome emulation-এ 320, 390, 768, 844 (landscape), 1024 ও 1440 চওড়ায় document scroll width ও viewport width মিলেছে।
- 390px লেআউট ও 1440px ডেস্কটপ hero দেখে চেক করা হয়েছে। ফোনে কাছের rabbit crop ও কনটেন্ট অনুযায়ী hero row আছে। ডেস্কটপের ভাব রাখা হয়েছে।
- শ্বাস নেওয়া, ছাড়া ও শেষ হওয়া দেখা হয়েছে। Replay, Stop ও reduced-motion লেখা কাজ করেছে। Reduced-motion pose শূন্য ছিল।
- কিবোর্ডে দ্বিতীয় native disclosure খোলা/বন্ধ হয়েছে ও আসল কনটেন্ট দেখা গেছে।
- মাঠ ও lazy sunset ছবি লোড হয়েছে। অ্যাপের console error পাওয়া যায়নি।
- Outlined SVG ওয়ার্ডমার্কে র‍্যাবিট ও লেখা render হয়েছে।
- Design detector একবার চালানো হয়েছে। Vite-imported stylesheet না পাওয়ায় খালি HTML চেকে সব লেখা 16px দেখিয়েছে। ব্রাউজারে আসল সাইজের পার্থক্য ঠিক ছিল। বাকি size/color advisory-তে ইচ্ছা করে রাখা স্টাইল ও পুরোনো sidecar-এর পার্থক্য আছে। শুধু ওই পুরোনো স্কেল মেলাতে স্টাইল বদলানো হয়নি।

সীমা: এগুলো browser emulation চেক; আসল iPhone/Android বা Safari-তে নয়। অটোমেটেড টেস্ট ফাইল যোগ হয়নি। `.impeccable/design.json` পুরোনো টুল metadata। বর্তমান DESIGN.md, মূল ব্র্যান্ড রং ও কোড অনুসরণ করতে হবে।
