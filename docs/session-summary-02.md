# MORI TRAVEL 開發紀錄(第二階段)

> 承接 `docs/session-summary.md`。本篇整理從「Vue 觀念問答」到「48 個景點內頁上線」這一整段的工作內容。
>
> - 專案路徑:`D:\設計\claude專區\mori-travel\mori-travel-vue`
> - 正式站:https://mori-travel.vercel.app
> - 累計 commit 數:63

---

## 目錄

1. [Vue 觀念問答整理](#一vue-觀念問答整理)
2. [部署到 Vercel](#二部署到-vercel)
3. [本地預覽(開發流程)](#三本地預覽開發流程)
4. [新增的頁面](#四新增的頁面)
5. [資料驅動架構](#五資料驅動架構重要觀念)
6. [旅遊指南的四個工具](#六旅遊指南的四個工具)
7. [首頁搜尋功能串接](#七首頁搜尋功能串接)
8. [圖片作業](#八圖片作業)
9. [UI 微調清單](#九ui-微調清單)
10. [除錯紀錄](#十除錯紀錄)
11. [目前檔案結構](#十一目前檔案結構)
12. [待辦事項](#十二待辦事項)

---

## 一、Vue 觀念問答整理

### 1. `index.html` 裡的 `<script src="/src/main.js">` 是什麼?

是整個網站的**入口點**。瀏覽器讀 `index.html` → 看到這行 → 去載入 `main.js` → Vue 才開始運作。

### 2. 「串」這個字合適嗎?

口語上聽得懂,但**業界標準說法是「載入」**(load)或「引入」(import)。

「串」通常專指「串接 API」(把前端跟後端資料接起來),用在檔案關係上容易混淆。

### 3. `main.js` 在做什麼?

```js
import { createApp } from 'vue'   // 從 vue 套件拿建立 App 的工具
import App from './App.vue'       // 拿最外層的根元件
import router from './router'     // 拿路由設定

createApp(App)      // 用 App.vue 當根,建立一個 Vue 應用程式
  .use(router)      // 掛上路由(讓網址切換可以換頁)
  .mount('#app')    // 塞進 index.html 裡 id="app" 的那個空 div
```

### 4. 為什麼 `router/index.js` 要獨立,不寫在 `main.js` 裡?

**職責分離**。`main.js` 只負責「啟動」,而路由表會越長越大(現在已經 12 條)。

拆開之後,要加新頁面只改 `router/index.js`,不用動到啟動流程。這是 Vue 官方 scaffold 的標準做法。

### 5. `data/` 資料夾的檔案是什麼?

**純資料,不含畫面**。例如 `destinations.js` 只是一個大物件,裡面存 12 個目的地的名字、圖片、文案。

把資料抽出來的好處:改文案不用碰 `.vue` 檔,而且同一份資料可以被多個頁面共用。

### 6. 四個核心檔案的關係(依運作順序)

```
① index.html      瀏覽器最先讀到的 HTML 空殼,裡面有 <div id="app">
        ↓ 載入
② main.js         建立 Vue App、掛上 router、塞進 #app
        ↓ 使用
③ router/index.js 依照網址決定要顯示哪一個 View
        ↓ 渲染
④ App.vue         最外層版型(Header + <RouterView/> + Footer)
        ↓ RouterView 的位置換成
   views/XXX.vue  實際頁面內容
```

### 7. `.vue` 檔裡的 `<script>` 跟 HTML 的 `<script>` 一樣嗎?

**概念相同,執行時機不同**。

- HTML 的 `<script>`:瀏覽器讀到就執行一次。
- Vue 的 `<script setup>`:每次這個元件被建立時都會執行一次,而且裡面宣告的變數會自動變成 template 可以用的資料。

### 8. 這個網站有串 API 嗎?

**沒有**。所有資料都是靜態的,寫在 `src/data/*.js` 裡。

業界說的「串 API」是指前端向後端伺服器要資料,例如:

```js
const res = await fetch('https://api.example.com/trips')
const trips = await res.json()
```

這個作品集網站不需要後端,所以資料直接寫在檔案裡就好 —— **這是作品集的正常做法**,不是缺點。

---

## 二、部署到 Vercel

### 流程

1. 專案 push 到 GitHub(`johnwei0201/mori-travel`)
2. Vercel 用 GitHub 帳號登入 → Import Project
3. 方案選 **Hobby(免費)**
4. Repository 權限選 **All repositories**
5. **Root Directory 保持根目錄** —— 這個 repo 的根目錄本身就是 Vue 專案,不要再指到 `mori-travel-vue`
6. 加上 `vercel.json` 的 rewrite 規則,讓 Vue Router 的 history mode 能正常運作

### 兩種網址的差別(重要)

| 類型 | 範例 | 特性 |
|---|---|---|
| **Production(正式)** | `mori-travel.vercel.app` | 公開,任何人都能開,**放作品集用這個** |
| **Preview(預覽)** | `mori-travel-git-master-xxx.vercel.app` | 每次 push 產生一組,**預設有 SSO 保護**,別人(包含你自己的手機)打不開 |

> 手機打不開預覽網址就是這個原因,不是你設定錯。
> 用 curl 測會看到 preview 回 **302** 轉到 `vercel.com/sso-api`,production 回 **200**。

### 部署要等多久

push 之後 Vercel 大約需要 **2~3 分鐘**建置,實測約 140 秒。

「push 成功但畫面沒變」通常不是沒推成功,而是還在建置中 —— 等一下再 `Ctrl + Shift + R` 硬重整。

---

## 三、本地預覽(開發流程)

不用每次都推上線才能看效果:

```bash
npm run dev
```

會啟動本地伺服器,網址通常是 `http://localhost:5173`。

### 常見狀況

| 狀況 | 原因 / 解法 |
|---|---|
| 輸入 `npm run dev` 沒反應 | **目錄錯了**。要在有 `package.json` 的那一層(`mori-travel-vue`)執行,外層資料夾沒有 |
| 想輸入 git 指令但終端機被佔住 | `npm run dev` 是常駐程式。按 `Ctrl + C` 停掉,或**開第二個終端機分頁** |
| 網址變成 `5174` 卻打不開 | 5173 被前一個沒關掉的程序佔用,Vite 自動換 port。把舊的關乾淨再重跑 |

---

## 四、新增的頁面

| 路由 | 檔案 | 說明 |
|---|---|---|
| `/plan` | `PlanTripView.vue` | 「開始找旅行」一頁式規劃頁:選風格 → 選月份 → 選天數 → 選預算 → 出結果 |
| `/consult` | `ConsultView.vue` | 諮詢行程表單頁,各頁 CTA 都導到這裡並帶 `?topic=` 參數 |
| `/service` | `ServiceView.vue` | 專人服務介紹頁 |
| `/search` | `SearchView.vue` | 首頁搜尋列的結果頁,吃 `?keyword=&month=&duration=` 等 query |
| `/attractions/:slug` | `AttractionView.vue` | **48 個景點內頁**,每一個都有獨立撰寫的文案 |
| `/destinations/:slug` | `DestinationView.vue` | 12 個目的地頁(6 國外 + 6 國內) |

### 48 個景點內頁怎麼做的(關鍵設計)

**不是做 48 個 `.vue` 檔**,而是:

```
1 個 AttractionView.vue  +  1 份 attractions.js  +  1 條動態路由
```

`attractions.js` 的資料結構:

```js
'mt-fuji': {
  name: '富士山', region: '日本', regionSlug: 'japan', parent: '日本',
  img, eyebrow, tagline,
  facts:  [{ icon, label, value } × 4],   // 頂部四格速覽
  intro,                                   // 介紹段落
  points: [{ title, text } × 3],           // 三個看點
  tips:   ['...', '...', '...'],           // 三則實用提醒
}
```

新增景點時只要在 `attractions.js` 加一筆,頁面自動就有了。

### 同區域景點互相推薦

```js
const siblings = computed(() => {
  if (!spot.value) return []
  return Object.entries(attractions)
    .filter(([slug, a]) => a.regionSlug === spot.value.regionSlug && slug !== route.params.slug)
    .map(([slug, a]) => ({ slug, ...a }))
})
```

### 目的地頁「精選景點」卡片怎麼連到景點頁

用**反查表**,避免在 `destinations.js` 再抄一份 slug(讓資料只有一個來源):

```js
const slugByRegionAndName = Object.fromEntries(
  Object.entries(attractions).map(([slug, a]) => [`${a.regionSlug}|${a.name}`, slug]),
)
const slugFor = (name) => slugByRegionAndName[`${route.params.slug}|${name}`]
```

還沒建內頁的景點查不到 slug,卡片就維持**不可點**:

```vue
<component :is="slugFor(h.name) ? 'RouterLink' : 'div'" ...>
```

---

## 五、資料驅動架構(重要觀念)

| 檔案 | 內容 |
|---|---|
| `data/destinations.js` | 12 個目的地(6 國外 + 6 國內),含主視覺、四格速覽、精選景點 |
| `data/attractions.js` | 48 個景點,約 1900 行 |
| `data/tripCatalog.js` | 18 筆行程 + **共用的篩選/排序函式** |
| `data/countryInfo.js` | 13 國實用資訊 + 15 種貨幣 + 飯店價位級距 |
| `data/planTrip.js` | 規劃頁的選項(風格、月份、天數、預算) |
| `data/trips.js` | 行程詳細頁資料 |

### 共用函式的價值

`/plan`、`/search`、首頁搜尋列 **三個地方都要篩選行程**。與其各寫一套(規則遲早會走鐘),不如抽成一份:

```js
export function filterTrips({ keyword = '', month = null, duration = '', budget = '', style = null } = {})
export function sortTrips(list, by = 'date')
export const regions = [...new Set(tripCatalog.map((t) => t.region))]
```

`regions` 用 `Set` 去重,所以**下拉選單裡的國家永遠等於網站實際有的國家**,不會出現「選了卻沒結果」的情況。

---

## 六、旅遊指南的四個工具

原本 `/guide` 頁面內容偏空泛,加入四個**真的能操作**的工具:

### 1. 各國實用資訊速查表

簽證、時差、電壓、貨幣、小費文化、緊急電話、消費水準,共 13 國。

### 2. 時差換算(含即時時鐘)

關鍵:**不能用使用者的當地時間去推算**,否則在不同時區的人看到的結果會錯。改用 UTC 為基準:

```js
function wallClock(utcMs, offsetFromUtc) {
  const d = new Date(utcMs + offsetFromUtc * 3600000)
  return { h: d.getUTCHours(), ... }
}

onMounted(() => { ticker = setInterval(() => (now.value = new Date()), 1000) })
onUnmounted(() => clearInterval(ticker))   // 離開頁面要清掉,否則會一直跑
```

> `onUnmounted` 清除 `setInterval` 是 Vue 的基本功,忘了會造成記憶體洩漏。

### 3. 費用試算

機票 + 住宿(三種價位)+ 餐飲 + 交通,依天數與該國消費水準估算。

### 4. 貨幣換算

浮點數運算會有誤差(例如 `0.1 + 0.2 = 0.30000000000000004`),所以要處理:

```js
const rounded = Math.round(n * 100) / 100
return Number.isInteger(rounded) ? rounded.toLocaleString() : rounded.toFixed(2)
```

日圓、韓元等**沒有小數的貨幣**另外用 `WHOLE_UNIT_CODES` 標記,顯示時不補小數點。

---

## 七、首頁搜尋功能串接

原本首頁的搜尋列只是裝飾,現在真的能用:

1. **DESTINATION** 改成下拉選單,選項來自 `regions`(只列網站實際有的國家)
2. **MONTH** 只留「1月、2月…」,拿掉後面的季節描述
3. 送出後帶 query 跳到 `/search`,結果頁用同一套 `filterTrips()` 篩選

---

## 八、圖片作業

- 補上 **30 張國內攝影**(六大區域 + 各區精選景點)
- 補上 **23 張國外景點照**
- 國內旅遊封面改用**九份**那一張

### 裁切位置的處理

hero 版位是寬扁的(1440×420),正方形原圖塞進去只看得到約 29% 的高度,自由女神像、艾菲爾鐵塔的**頂端會被切掉**。

解法:在資料裡加 `heroPosition`,讓個別照片微調裁切位置:

```js
heroPosition: '50% 25%'   // 水平置中,垂直往上取 25% 處
```

```vue
<img :style="{ objectPosition: dest.heroPosition || '50% 50%' }" />
```

> 實際比較過 0% / 15% / 25% / 35% 四種,最後選 25%。

### 圖片路徑規範(你指定的)

所有圖片一律連到:

```
src/assets/images/
```

`生成圖/` 資料夾要刪除,不可再被引用。

> **曾經踩過的坑**:自由女神像的圖只存在於 `生成圖/`,而那個資料夾被 `.gitignore` 排除。
> 結果**本地跑得動、上線就壞掉**(Vercel 拿不到那個檔案)。
> 後來把圖複製到 `src/assets/images/`,並直接**移除 .gitignore 那條規則**,避免再發生。

---

## 九、UI 微調清單

- Footer 電子報輸入框改**白底黑字**
- 卡片 hover 從「文字變色」改成「**外框變橘色**」
  - 用 `outline` 不用 `border`,因為 `outline` 不佔版面、不會讓內容跳動
- 國內旅遊版面改成與國外旅遊一致
- Nav 改 **sticky**,並新增「回首頁」
- Nav hover 改成**整塊從頭到底的白色**(不是圓角長方形)
- Nav 文字加粗,讓 hover 前後的落差不要太大
- 手機版加上**漢堡選單**(`ref` 控制開關 + `watch` + Esc 鍵關閉)
- 首頁 hero 加標語「你有多久沒旅行了。」(黑體、白字、加陰影)
- 手機版 banner 加大、搜尋欄位寬度拉滿
- 說明文字尺寸調整為「至少比內文大一點」
  - **例外(你指定不動的兩處)**:必填 badge(11.5px)、英文 eyebrow 標籤(12~13px)
- Header 底色改成 `#f3ece1`
- 箭頭符號 `→` 改用 `➤`
- 文案修正:「換方向」→「**對調**」、「時差換算器」→「**時差換算**」、「多少」→「**多久**」、「怎麼稱呼你」→「**如何稱呼您**」

---

## 十、除錯紀錄

### 1. Vercel Root Directory 設錯

一開始說要設成 `mori-travel-vue`,看到資料夾選單才發現 **repo 根目錄本身就是 Vue 專案**,在你操作前更正。

### 2. `--header-h` 量錯

一開始在手機尺寸下量到 60px 就寫死,實際桌機是 **73px**。重新量了三個斷點:

```css
--header-h: 73px;   /* 桌機   */
--header-h: 69px;   /* ≤1024 */
--header-h: 61px;   /* ≤640  */
```

### 3. 漢堡選單 `max-height` 動畫打不開

`.mobile-nav.open` 的 `max-height` 沒有生效。與其硬追 CSS,**改用 `v-show`** —— 更簡單,而且拿掉了「400px」這個猜出來的魔術數字。

> **觀念**:`v-if` 是真的刪掉元素,`v-show` 只是 `display: none`。
> **頻繁開關的選單用 `v-show`**(不用一直重建 DOM),很少出現的內容用 `v-if`。

### 4. Vue 報 `does not provide an export named 'otherPaths'`

**假警報**。這是 HMR(熱更新)在檔案改到一半時的暫態,用 curl 直接抓那支模組確認內容是好的。重整就沒事。

### 5. `/plan` 風格卡片圖片上方有白邊(最後修的那個)

**現象**:有些卡片圖片上方浮出約 10px 白邊,有些沒有。

**量測**:

| 卡片 | 說明文字 | 圖片距頂端 |
|---|---|---|
| 賞楓紅葉 | 兩行 | 0px |
| 雪季溫泉 | 一行 | **10px** |

**根本原因**:`<button>` **預設會把內容垂直置中**。grid 又把六張卡片拉成等高(222px),說明只有一行的卡片就把多出來的 20px 平分成上下各 10px。

**修法**(`PlanTripView.vue`):

```css
.style {
  /* button 預設會把內容垂直置中,說明只有一行的卡片就會在圖片上方留白;
     改成直向 flex,再讓文字區塊吃掉剩餘高度,圖片才會貼齊頂端 */
  display: flex;
  flex-direction: column;
}
.style img  { flex-shrink: 0; }   /* 圖片不被壓縮 */
.style-body { flex: 1; }          /* 文字區塊吃掉剩餘高度 */
```

**驗證**:六張卡片圖片距頂端皆為 `0px`,高度一致 222px。

### 6. 勾勾沒變橘色 —— 又一個假警報

修完後量到選取狀態的勾勾是白底、文字透明,但外框有正確變成橘色。

**原因**:預覽分頁當時是隱藏狀態(`document.hidden === true`),**CSS transition 被瀏覽器凍結在起始值**。

`border-color` 不在 transition 清單裡,所以立刻套用;`background` 和 `color` 在清單裡,就被凍住了。

把 transition 暫時關掉重新量,立刻變成 `rgb(232, 98, 44)` + 白色 ✓ —— 規則本身完全正確。

> **教訓**:在背景分頁量 transition 中的屬性,會得到起始值而不是最終值。

---

## 十一、目前檔案結構

```
mori-travel-vue/
├── index.html                    ← 入口 HTML
├── vercel.json                   ← history mode 的 rewrite 規則
├── src/
│   ├── main.js                   ← 啟動 Vue
│   ├── App.vue                   ← 最外層版型
│   ├── router/index.js           ← 12 條路由
│   ├── views/                    ← 12 個頁面
│   │   ├── HomeView.vue
│   │   ├── DestinationView.vue   ← 動態:12 個目的地
│   │   ├── AttractionView.vue    ← 動態:48 個景點
│   │   ├── TripView.vue
│   │   ├── DomesticView.vue
│   │   ├── InternationalView.vue
│   │   ├── BookingView.vue
│   │   ├── GuideView.vue         ← 四個工具
│   │   ├── PlanTripView.vue
│   │   ├── ConsultView.vue
│   │   ├── ServiceView.vue
│   │   └── SearchView.vue
│   ├── data/                     ← 6 份資料檔
│   ├── components/
│   │   ├── layout/Header.vue     ← sticky + 漢堡選單
│   │   └── ui/AppIcon.vue
│   ├── styles/variables.css      ← CSS 變數
│   └── assets/images/            ← 所有圖片(唯一來源)
└── docs/                         ← 設計稿與紀錄
```

---

## 十二、待辦事項

### 1.(建議優先)圖片最佳化

目前 build 產出約 **181MB**,其中 99.9% 是圖片:

- 單一目的地頁約 **13MB**
- 首頁約 **33MB**

手機用 4G 開會非常慢,作品集被人點開的第一印象會受影響。

**建議做法**:把 PNG 轉成 WebP,通常能砍掉 70~90% 的體積,肉眼看不出差別。

> ⚠️ 動手前請先把原圖備份到專案外的地方(`生成圖` 刪掉之前先複製一份出來)。

### 2. 你 / 您 的用字不一致

`/consult` 頁面有一處改成「您」,其餘還是「你」。需要決定統一用哪一個,再一次改完。

---

## 附:這一階段的 commit 紀錄(新到舊)

```
b5ef974  fix(plan): 旅遊風格卡片圖片貼齊卡片頂端
3c0e29f  Use the Jiufen photo for the domestic cover
3cb2a27  Give every attraction its own page              ← 48 個景點內頁
a9572b8  Stop the hero crop cutting off tall landmarks
5b7e10b  Stop ignoring the 生成圖 backup folder
749c2ea  Use the dedicated Statue of Liberty photo
b5e2a42  Give each international highlight its own photo
d86dcc9  Add the domestic photography
c7afbd9  Align the phone search fields and the time input
dfd979c  Turn the hero destination field into a select too
036df4d  Turn the results-page destination filter into a select
496cfa0  Drop the season note from the hero month options
95a10d5  Make the hero search work and land on a results page
0eef138  Span the duration field across the phone layout
8ea637b  Widen the promo banner on phones
8cd0661  Fix the hero headline wording to 你有多久沒旅行了。
2975cb4  Add a headline across the hero image
571f51d  Move the packing list below the tools and retitle it 行前提醒您
12005a8  Name both currencies wherever the converter shows a figure
0d559cb  Update the office address
a2ecf0c  Add a currency converter to the travel guide
c0526ba  Use the solid arrow on the empty-result link too
250b09b  Trim the timezone heading and match the banner arrow
1d620aa  Add the tree mark to the footer wordmark
5913b10  Put the tree mark in front of the wordmark
bbfe6b9  Give the checklist room above the next section's rule
6afb5fb  Enlarge the manual conversion line and use a solid arrow
7f43411  Make the timezone tool show a live local clock
f091516  Add three working tools to the travel guide
030f20d  Reduce the planner's fallback to a single consultant banner
be86ef3  Pin the header and add a home link to the nav
93f3832  Add the trip consultation page and wire every CTA to it
ceaf949  Add the six domestic destination pages
a532100  Rebuild the domestic page on the international page's layout
1ce8ef2  Use an accent outline on card hover instead of recoloring text
e561ebf  Link the international region cards to their destination pages
1dbb676  Give the newsletter input a white background
b27f1c2  Add trip planner page at /plan
79804c4  Add Vercel rewrite rule for Vue Router history mode
```
