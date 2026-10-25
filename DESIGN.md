---
name: Relaxed Rabbit
description: একটি স্বাধীন সফটওয়্যার স্টুডিওর রোদেলা মাঠ ও নরম সেরিফ থিম।
colors:
  cream: "#f4eedc"
  ink: "#1c3825"
  moss: "#526645"
  sage: "#c2d09c"
  sun: "#edd47c"
  line: "#879478"
typography:
  display:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "10.4vw"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 144, "SOFT" 100, "WONK" 1'
  statement:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(72px, 9.3vw, 150px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 144, "SOFT" 100, "WONK" 1'
  headline:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(50px, 5.2vw, 88px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Linden Hill", Georgia, serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  principle:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(25px, 2.65vw, 42px)"
    lineHeight: 1.18
    letterSpacing: "-0.025em"
rounded:
  pill: "999px"
  circle: "50%"
spacing:
  page: "clamp(24px, 4vw, 72px)"
  column-gap: "60px"
components:
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 27px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  button-breath:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  circle-arrow:
    rounded: "{rounded.circle}"
    width: "3.3vw"
    height: "3.3vw"
---

# Relaxed Rabbit ডিজাইন সিস্টেম

আপডেট: 2026-10-26। ব্র্যান্ড ও ফাইলের জন্য [ব্র্যান্ড গাইড](docs/BRAND.md), মালিকের পছন্দের জন্য [প্রজেক্টের তথ্য](docs/PROJECT-CONTEXT.md) পড়ুন। এটি ওয়েবসাইটের নিজস্ব থিম, Lulu অ্যাপের থিম নয়।

## মূল ভাব

**A Rabbit’s Day Off.** উষ্ণ ক্রিম, গাঢ় সবুজ নরম সেরিফ, নরম ভাস্কর্যের মতো র‍্যাবিট ও ছোট মাঠ। মালিক বর্তমান কিউট ভাব পছন্দ করেন। এই জগৎ ও গল্প রাখুন: সকাল → স্টুডিওর ভাবনা → গাছ-ফুলে সাজানো নীতি → বিকেলের ব্রিদিং → সূর্যাস্তে বিদায়। সাধারণ কার্ডের গ্রিড বা করপোরেট টেমপ্লেট নয়।

## টোকেন ও ফন্ট

`brand/palette.css`-এ মূল `--rr-*` রং আছে। `src/style.css` সাইটের কম্পোনেন্টে সেগুলোর alias ব্যবহার করে। JSON/GPL/SVG প্যালেট `brand/`-এ। টোকেন বদলালে এক্সপোর্টও মেলান।

Fraunces Variable দিয়ে নরম, মোটা হেডিং হয়: optical size 144, softness 100, wonk 1। বডি ও ওয়ার্ডমার্কে Linden Hill। Fontsource দিয়ে ফন্ট লোকালে রাখা। Fallback Georgia/serif। পছন্দ করা ডেস্কটপ দৃশ্যে ইচ্ছা করেই বড় হেডিং আছে। পুরো পেজ ছোট করে ওই স্কেল মোবাইলে আনবেন না।

Cream বা afternoon sage-এ forest ink; forest-এ cream ও sunshine দিন। হালকা অংশে focus outline moss, ফুটারে sunshine। হালকা line রং বিভাজকের জন্য, ছোট লেখায় নয়। গোল বাটন ও বৃত্তাকার arrow কন্ট্রোল flat ও সহজ থাকবে।

## রেসপন্সিভ লেআউট

### ডেস্কটপ (800px-এর বেশি)

চওড়া সিনেমাটিক hero রাখুন: 66.6667vw, বড় স্ক্রিনে সর্বোচ্চ 1200px। সরু হেডার, মাঝে বড় হেডিং, মাঠের প্যানোরামা ও নিচে স্ক্রল ইঙ্গিত থাকবে। মাঠ শুরু হয় hero-র 32%-এ, জায়গা নেয় 59%। আগের ডেস্কটপ ছবির সাজ ইচ্ছা করেই রাখা।

Forest অংশে চওড়া রঙের জায়গা, বড় লেখা ও outline করা কক্ষপথের সাজ। Approach-এ disclosure-এর পাশে sticky গাছ-ফুলের ভিজ্যুয়াল। ব্রিদিংয়ে দুই কলাম: বামে পরিচয়, ডানে র‍্যাবিট/status/control। সূর্যাস্তের ছবিতে বিদায়ের লেখা, তারপর ছোট forest রঙের ব্র্যান্ড পরিচয়।

801–1100px-এ ছোট viewport unit-এর বদলে পড়ার মতো নির্দিষ্ট ব্র্যান্ড ও কন্ট্রোল সাইজ থাকবে। গাছ-ফুলের কলাম একটু ছোট হবে; লম্বা লিংক নতুন লাইনে যেতে পারবে।

### ফোন ও portrait ট্যাবলেট (800px বা কম)

Hero হবে document flow-তে CSS grid: হেডার → হেডিং ও সাবটাইটেল → মাঠ → স্ক্রল ইঙ্গিত → পরের অংশের সংযোগ। কনটেন্ট অনুযায়ী মোট উচ্চতা হবে। আগের fixed 780/850/970px hero বা absolute text percentage ফেরাবেন না। লেখা ভাঙলে এগুলোতে ফাঁক ও চাপাচাপি হতো।

- পাশের ফাঁকা জায়গা: `clamp(20px, 5.5vw, 40px)`।
- Hero হেডিং প্রায় 48–88px। দ্বিতীয় বাক্যাংশ 10ch-এ ভাঙে। সাবটাইটেল 21px, লাইনের চওড়া সীমিত।
- মাঠের row: `clamp(280px, 42svh, 400px)`। অনুপাত রেখে `object-fit: cover`, horizontal focus 32%। র‍্যাবিট কাছ থেকে স্পষ্ট দেখা যাবে। চওড়া মাঠ crop করা ইচ্ছাকৃত।
- হেডারে ওয়ার্ডমার্ক ও Explore থাকবে। বাড়তি Our spirit লিংক বাদ; স্ক্রল লিংক ওই সেকশনে যায়। বাটন/লিংকের ট্যাপ জায়গা অন্তত 44px।
- মোবাইল hero-তে শুধু হালকা মাঠের drift: 3% translation, 1.035 scale। ফোনে হেডিং পাশে সরা বা সাবটাইটেল fade নয়।
- Forest ও approach-এ ওপর-নিচে প্রায় 64px padding, বডি 20–21px ও স্ক্রিন অনুযায়ী হেডিং। লেখা পড়া যাবে; ছোট করা স্ক্রিনশট মনে হবে না।
- Native disclosure লিস্টের ওপরে গাছ-ফুলের 80px চিহ্ন ও ক্যাপশন থাকবে। Summary-তে বৃত্তাকার state কন্ট্রোল ও বড় ট্যাপ জায়গা।
- ব্রিদিংয়ে ওপর থেকে পরিচয়, র‍্যাবিট, status, meter ও কন্ট্রোল। পরিচয় মাঝখানে, নির্দেশনা 32ch-এর মধ্যে। Rabbit stage সর্বোচ্চ 340px, সেকশনে ওপর-নিচে 56px padding। বড় টেক্সট ব্লক দিয়ে Start/Stop-কে র‍্যাবিট থেকে দূরে রাখবেন না।
- সূর্যাস্ত হবে ছবিতে সুন্দর শেষ, অন্তত 660px উঁচু। ছবি ডানদিকে ফোকাসড; কনটেন্ট বাড়তে পারবে। ফেরার লিংক flow-তে থাকবে, শেষের পরিচয় wrap করবে।
- 360px-এর নিচে হেডার ছোট করুন। Explore-এর শুধু সাজের arrow বাদ দিন। ফোন landscape-এ hero লেখা 58px ও মাঠের row 330px।

Zoom বন্ধ করবেন না। ভুল লেআউট লুকাতে overflow লুকাবেন না বা body-তে ডেস্কটপের minimum width দেবেন না। 320px থেকে ডেস্কটপ, portrait ও landscape দেখুন। ফোনের পেজ ছোট করা ডেস্কটপ নয়।

## মোশন ও ইন্টারঅ্যাকশন

GSAP স্ক্রল দৃশ্য ও disclosure transition চালায়। 800px media query বদলালে মোবাইল/ডেস্কটপ মোশন আবার সেট হয়। ফন্ট প্রস্তুত হলে প্রথম সেটআপ চলে। OS reduced motion-এ স্ক্রল অ্যানিমেশন ফিরিয়ে নেওয়া হয়; CSS transition ও smooth scrolling বন্ধ থাকে।

Native details-এ semantic summary থাকবে। খুলতে 0.42 সেকেন্ড, বন্ধে 0.3 সেকেন্ড। সঙ্গে লেখা fade/সরে আসে ও plus/minus circle ঘোরে। দ্রুত উল্টো অ্যাকশন দিলে আগের tween বন্ধ হয়। Resize বা motion preference বদলালে panel চাওয়া অবস্থায় যায়। খোলা panel অনুযায়ী গাছ-ফুলের ভিজ্যুয়াল বদলায়। কোনো কাজেই hover বাধ্যতামূলক নয়।

### ব্রিদিং

একটি ঐচ্ছিক রাউন্ড: **Start breathing → Breathe in (৪ সেকেন্ড) → Breathe out (৬ সেকেন্ড) → All done / Breathe again**। সবসময় Stop থাকবে। কিবোর্ড ফোকাস চালু বাটনে যাবে। Polite atomic live region ধাপ ও সময় জানায়। এটি মজার ছোট বিরতি; চিকিৎসার দাবি নেই।

`src/rabbit-renderer.ts` একই ফুল ধরা র‍্যাবিটকে transparent canvas-এ দেখায়। Opaque magenta টেক্সচার chroma-key করা হয়। 36×42 mesh-এ পা স্থির রেখে বুক-পেট ফুলে ওঠে ও হাত/মাথা/কান ওঠে। 2026-10-26-এ ফোনেও বোঝাতে নড়াচড়া প্রায় তিনগুণ করা হয়েছে: torso horizontal coefficient .48, vertical .060, hands .032, head .025, ears .008। মুখ ও ফুলের আকার ঠিক রাখুন। পুরো ছবি জুম দিয়ে বদলাবেন না। শ্বাসের সঙ্গে মাটির নরম shadow সামান্য সরু হয় ও 180×5px মিটার ভরে/খালি হয়।

`src/breathing.ts` sine easing দিয়ে pose ও meter চালায়। চালু থাকলে বা resize-এ renderer আঁকে; idle অবস্থায় endless loop নয়। ট্যাব লুকালে, সেকশন ছাড়লে বা motion preference বদলালে রাউন্ড বন্ধ হয়। Reduced motion-এ র‍্যাবিট, shadow ও meter স্থির, সময় ধরে লেখা চলে। WebGL/টেক্সচার ব্যর্থ হলে বা context হারালে সিলুয়েট ও লেখা দেখায়। শুধু লোডিংয়ের সময় কন্ট্রোল disabled।

## সবার ব্যবহার ও fallback

Semantic landmark, একটি h1, native link/details/button, skip link, স্পষ্ট focus, লোকাল ফন্ট ও আসল alt text রাখুন। কিবোর্ড ও টাচে কাজ করবে। অ্যানিমেশন ছাড়াও কনটেন্ট বোঝা যাবে। বাদ দেওয়া ফুটারের “Pause animations” ফেরাবেন না; OS preference ব্যবহার করুন।

## ছবি ও এক্সপোর্ট

মাঠ ও সূর্যাস্তের প্রোডাকশন ছবিতে WebP ভ্যারিয়েন্ট ও উৎসের sidecar আছে। ব্রিদিং টেক্সচারে আসল alpha নেই; shader ট্রান্সপারেন্সি বানায়। পুরোনো বর্গাকার ব্রিদিং ছবি শুধু রেফারেন্স; ফেরাবেন না। আলাদা লোগো আগের SVG সিলুয়েট, জেনারেট করা র‍্যাবিট ছবি নয়। দেখুন [ASSETS.md](docs/ASSETS.md)।

## কোন তথ্য কোথায় মানবেন

- প্রোডাক্ট: `PRODUCT.md` ও `docs/PROJECT-CONTEXT.md`-এর অনুমোদিত সিদ্ধান্ত।
- ব্র্যান্ড: `docs/BRAND.md`, `brand/palette.css` ও reusable SVG।
- কোড: `index.html`, `src/style.css`, `src/main.ts` ও ব্রিদিং মডিউল।
- এই ডক বর্তমান আচরণ বর্ণনা করে। `.impeccable/design.json` পুরোনো generated sidecar; আপডেট নাও থাকতে পারে। সেটি আলাদা ডিজাইন নির্দেশনা নয়।
