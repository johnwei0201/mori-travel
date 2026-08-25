# MORI TRAVEL Vue 專案 — 對話過程摘要

> 記錄從零開始學 Vue、到做出 MORI TRAVEL 旅遊網站的完整過程。日期範圍:2026/08/21 ~ 2026/08/24。

---

## 1. 起點與目標

使用者是 Vue 完全新手,因工作需求要學會 Vue,希望**從無到有、邊做邊學**,以一份既有的「MORI TRAVEL」旅遊網站設計稿(`mori-travel-assets/mori-travel-design-draft.png`)跟一組先前生成好的圖片素材(富士山首圖、6 個目的地圖、3 張行程照片等)作為實作專案。

學習風格演進:
- **初期**:堅持要自己動手打指令、自己寫程式碼,AI 只負責講解、不能代勞(「你先不要動作」)。
- **中期**:對設計稿/文件生成類工作(Artifact 設計稿、截圖、git commit)開始直接請 AI 代為執行。
- **後期**:雙軌並行——教學型改動(新元件、新觀念)AI 給程式碼與講解;修正/優化型改動(RWD、hover 效果、bug 修正)直接請 AI 動手做並驗證。

---

## 2. 環境建置(Vue 從零開始)

1. 確認 Node.js / npm 版本(`node -v` / `npm -v`)。
2. 比較 `npm create vite@latest` 與 `npm create vue@latest`(= `npm init vue@latest`,兩者其實是同一個 `create-vue` 套件的別名),決定採用官方 `create-vue`,因為之後會需要多頁面與 Vue Router。
3. 互動式問答選項:TypeScript 否、Router 是、Pinia 否、Linter(ESLint)是、Prettier 是,試驗特性(Oxfmt、Vue 3.6 RC)一律不選。
4. 專案建置在 `mori-travel-vue/`(與素材資料夾 `mori-travel-assets/` 平行放置)。
5. 中途遇到 `npm install` 因 `oxlint` 與 `eslint-plugin-oxlint` 版本卡到時間差而失敗,改用 `npm install --legacy-peer-deps` 解決(純屬套件生態系版本不同步,與操作無關)。
6. `npm run dev` 成功啟動,瀏覽器看到 create-vue 極簡版歡迎畫面「You did it!」。

---

## 3. Vue 核心觀念(教學重點整理)

依提問順序,逐一釐清的觀念:

- **渲染鏈**:`index.html`(空殼,只認得 `main.js`)→ `main.js`(建立 app、掛載)→ `App.vue`(根元件,畫面實際內容)。三者是「接力賽」,不是互相都認識。
- **`import` 的本質**:`import App from './App.vue'` 是「幫檔案內容取一個接下來要用的代號」,`App`(代號)本身可以自由命名,和檔名沒有強制關聯;`createApp(App)` 用的就是這個代號。
- **為什麼根元件叫 `App`**:純粹慣例(對應「Application」),不是 Vue 語法規定,React 圈也是同樣習慣。
- **`id="app"` 與 `App.vue` 為何長得像**:兩者沒有直接關聯,只是巧合地都圍繞「這是應用程式核心」命名;真正連結靠 `main.js` 裡 `createApp(App)` 與 `app.mount('#app')` 兩行分開的邏輯。
- **`.vue` 副檔名**:讓 Vite 的 `@vitejs/plugin-vue` 認得要用特殊方式編譯,瀏覽器本身看不懂 `.vue`,必須先被建置工具轉換。
- **`<script setup>` / `<style scoped>`**:都是 Vue 編譯器在背後做「翻譯」的語法糖,不是瀏覽器原生語法;`scoped` 靠自動加上隱藏屬性(如 `data-v-xxx`)讓 CSS 只作用在該元件範圍。
- **CSS 語法本身不變**:純 CSS 寫法可以直接搬進 `<style>`,差別只在於「放在哪裡」(元件內 vs 獨立檔)與「作用範圍」(`scoped` 與否)。
- **`v-bind`(`:attr`)**:有冒號 = 讀取變數;沒冒號 = 純文字字串。是圖片、props 綁定的基礎。
- **`v-for` + `:key`**:資料驅動渲染的核心,「畫面結構重複、只有內容不同」時該用陣列 + 迴圈,不該複製貼上。`:key` 建議用唯一 id,不是名稱。
- **Props(`defineProps`)**:父層元件把資料往下傳給子元件的方式,子元件只負責「拿到資料、畫出來」。
- **元件階層**:`App.vue`(總經理,只管直接使用的元件)不需要知道子元件底下還藏了哪些孫元件(例如 `Destinations.vue` 內部 import `DestinationCard.vue`,`App.vue` 不用管)。
- **`src/` vs 專案根目錄**:`src/` 是會被 Vite 打包處理的原始碼;`index.html`、設定檔留在外層,是「進入點/不常變動的設定」。
- **開發階段 vs 上線**:`npm run dev` 期間一定要有終端機在跑(`localhost:port` 只在自己電腦有效);`npm run build` 後產生純 HTML/CSS/JS,不再需要 Node/Vue 環境。
- **CSS Reset**:Vue 不會自動歸零瀏覽器預設樣式,需自建 `reset.css` 並在 `main.js` 最先 import。
- **`transform` vs 會觸發版面重排的屬性**(`font-size`/`font-weight`):hover 效果若用 `font-size`/`font-weight` 改變元素大小,會讓整排/整頁內容跟著推擠跳動;改用 `transform: scale()`、`text-shadow`(模擬粗體)才不會影響版面排版,這個原則在 nav 選單跟目的地卡片的 hover 效果上重複驗證過兩次。

---

## 4. 首頁開發(逐區塊)

依設計稿順序,一區一區刻出來,每個新元件都會教一個新觀念:

| 元件 | 路徑 | 教學重點 |
|---|---|---|
| `Header.vue` | `components/layout/` | 第一個元件,基本 template/style 結構 |
| `Hero.vue` | `components/home/` | 圖片 `import` + `:src` 綁定、`position: absolute` 疊加卡片 |
| `Destinations.vue` + `DestinationCard.vue` | `components/home/` | `v-for` + props(6 個目的地圓形圖示) |
| `Promo.vue` | `components/home/` | 疊層技巧(`position:absolute` + 漸層遮罩);後來發現這張圖其實整組文案已經畫進圖片裡,簡化成純顯示圖片 |
| `Trips.vue` + `TripCard.vue` | `components/home/` | 巢狀 `v-for`(卡片內的 features 標籤陣列)、CSS Grid 3 欄 |
| `Features.vue` + `FeatureItem.vue` | `components/home/` | 重複 `v-for` + props 練習 |
| `Footer.vue` | `components/layout/` | 同上 |

過程中的除錯與修正:
- `App.vue` 曾發生「import 進來但沒寫進 `<template>`」的錯誤(兩次,Header 跟 Hero 都發生過),藉此強調「import = 聘僱,寫進 template = 排班」。
- `DestinationCard.vue`/`Destinations.vue` 內容互相貼反過(檔名對不上內容),協助抓出並對調修正。

---

## 5. 資料夾架構決策

- `components/layout/`(全站共用:Header、Footer)vs `components/home/`(僅首頁使用的區塊)。
- `styles/variables.css`(全域顏色變數 `--color-primary` `--color-accent` `--color-bg`)+ `styles/reset.css`。
- 圖片素材從外層 `mori-travel-assets/` 搬進 `src/assets/images/`(Vite 才會處理);原始設計稿截圖移到 `docs/`(不屬於網站原始碼,只是參考文件)。
- 後期新增 `src/data/`(`destinations.js`、`trips.js`)與 `src/views/`(頁面層元件),對應 Vue Router 導入後的架構調整。

---

## 6. Git 版本控制

- 在 `mori-travel-vue/` 內執行 `git init`,確認 `.gitignore` 已排除 `node_modules`。
- 全程採「使用者要求才 commit」原則,共完成多次 commit,涵蓋:首頁骨架、首頁完整區塊、目的地/行程路由與 RWD、nav 四個新頁面、行前清單與機票/訂房分頁切換等。
- 曾協助確認「做設計稿的過程完全沒有動到 `src/` 原始碼」,用 `git status` 實際證明給使用者看。

---

## 7. 設計稿與素材決策(Artifact 流程)

因為使用者想要「先看設計稿、確認方向再實作」,大量使用 **Artifact + Headless Chrome 截圖** 的流程:

1. 用 HTML 自建設計稿(套用跟首頁一致的配色/字體系統),發布成 Artifact 供互動預覽。
2. 用 `chrome.exe --headless=new --screenshot` 截圖成 PNG,存進 `docs/`(因為 Claude Browser 內建截圖工具在此環境有已知限制,改用系統瀏覽器的無頭模式截圖)。
3. 大型 base64 圖片曾經因為塞進 CSS 自訂變數(`--dest-photo: url(...)`)導致瀏覽器讀取失敗(整區塊空白),改為用 PowerShell/`System.Drawing` 產生縮圖(JPEG、480~600px 寬)後改用一般 `<img>` 標籤,問題排除。

依此流程完成的設計稿:
- **6 個目的地頁**(日本、韓國、東南亞、歐洲、美加、紐澳):主視覺 + 快速資訊卡(季節/飛行時間/時差/貨幣)+ 簡介 + 精選景點(4 張)+ CTA。
- **3 個行程頁**(東京賞楓、北海道雪祭、義大利經典):主視覺 + 每日行程(Day 1~N)+ 費用包含/不含 + 右側固定訂購欄。
- **4 個 nav 項目頁**(國內旅遊、國外旅遊、機票訂房、旅遊指南):因無對應實景照片,依素材有無分別採用「SVG 插畫」「重用既有目的地照片」「OTA 風格 UI」「文章卡片」等不同設計手法呈現,並誠實告知使用者素材限制。

---

## 8. Vue Router 導入(從靜態首頁到多頁應用)

這是整個專案架構最大的一次轉變:

1. **`views/` vs `components/`**:`components/` 是被組裝的積木,`views/` 是對應網址的頁面本身。
2. **`HomeView.vue`**:把原本直接寫死在 `App.vue` 裡的首頁內容搬過去。
3. **`App.vue` 改造**:從「寫死全部區塊」改成 `<Header /><router-view /><Footer />`。
4. **動態路由 + 資料驅動頁面**(核心觀念,反覆強調):
   - 不是每個目的地/行程各做一個 `.vue` 檔案(例如 `JapanView.vue`、`KoreaView.vue`),而是**一個 `DestinationView.vue` + 一份 `data/destinations.js`**,靠網址參數 `route.params.slug` 決定顯示哪一筆資料。
   - 同樣邏輯做出 `TripView.vue` + `data/trips.js`。
   - 好處:之後新增目的地/行程,只要在資料檔案加一筆資料,完全不用碰 `.vue` 檔案——這個特性讓使用者實際體驗到「改一次全部生效」。
5. **`RouterLink`**:首頁的目的地圓形、行程卡片都改用 `<RouterLink :to="...">` 包起來(先移除、確認理解後才重新加回,並加上 `target="_blank"` 開新分頁)。
6. **`scrollBehavior`**:加在 `router/index.js`,解決換頁後捲動位置沒有重置到頂端的問題。
7. **nav 四個項目**:因內容彼此差異大(不像目的地/行程結構相同),各自建立獨立的 `DomesticView.vue`、`InternationalView.vue`、`BookingView.vue`、`GuideView.vue`,並各自加入對應路由。

---

## 9. RWD(響應式設計)

全站統一採用兩個斷點:**平板 `max-width: 1024px`**、**手機 `max-width: 640px`**。

| 元件 | 平板 | 手機 |
|---|---|---|
| Header | 縮小 padding/間距 | 隱藏導覽選單、縮小 Logo/按鈕 |
| Hero | 圖片變矮、欄位換行 | 欄位改兩欄網格(非整排直排,避免卡片過高蓋住圖片)、卡片維持疊加在圖片上(不要改成「貼在圖片下方」的做法,因為會讓標題文字卡在交界處難以閱讀) |
| Destinations / DestinationCard | 圓縮小、間距變小 | 圓再縮小、允許換行 |
| Trips | 3 欄→2 欄 | 2 欄→1 欄 |
| Features | 縮小間距 | 直排堆疊 |
| Footer | 縮小間距 | 雙欄→單欄堆疊 |
| DestinationView / TripView | 主視覺變矮、卡片邊界內縮 | 4 欄→2 欄、右側訂購欄取消 `sticky` |

過程中一次重要修正:手機版 Hero 搜尋卡片一開始改成「貼在圖片下方、只疊 40px」的做法,導致標題文字剛好卡在圖片與白色卡片交界處、可讀性變差;後來改回跟桌機版一致的「整張卡片完整疊在圖片上」做法,並用「圖片加高 + 欄位改兩欄」讓比例更接近使用者想要的效果(圖片露出約 54%)。

---

## 10. 互動與細節優化

- **導覽列 hover**:文字變粗(用 `text-shadow` 模擬,避免 `font-weight` 造成推擠)+ 顏色變深橘色(`#c2410c`)。
- **熱門目的地 hover**:一開始做了圓形放大 3%、文字放大,後來使用者要求拿掉「放大」效果,只保留顏色變化;文字放大曾造成下方區塊被連帶推動,改用 `transform: scale()` 才解決。
- **Logo 可點擊回首頁**(`RouterLink to="/"`,全站共用生效)。
- **nav 文字調整**:「國外跟團/自由行」改成「國內旅遊/國外旅遊」。
- **機票訂房頁分頁切換**:專案裡第一次真正用到 `ref` 響應式狀態(`const activeTab = ref('flight')`),搭配 `@click`、`:class`、`v-if/v-else` 做出「機票」「訂房」兩種表單欄位真的能切換的互動效果。
- **旅遊指南頁新增「行前必備清單」區塊**:證件財務、衣物穿搭、個人清潔、3C 用品,4 張打勾清單卡片。

---

## 11. 目前專案結構(重點檔案)

```
mori-travel-vue/
├─ docs/                          參考文件(設計稿 PNG、本摘要)
├─ src/
│  ├─ assets/images/              所有圖片素材
│  ├─ components/
│  │  ├─ layout/                  Header.vue, Footer.vue
│  │  └─ home/                    Hero, Destinations(+Card), Promo, Trips(+Card), Features(+Item)
│  ├─ data/                       destinations.js, trips.js(資料驅動頁面用)
│  ├─ views/                      HomeView, DestinationView, TripView,
│  │                              DomesticView, InternationalView, BookingView, GuideView
│  ├─ router/index.js             所有路由規則 + scrollBehavior
│  ├─ styles/                     reset.css, variables.css
│  ├─ App.vue                     <Header /><router-view /><Footer />
│  └─ main.js
```

**已完成的路由清單**:
- `/` 首頁
- `/destinations/:slug`(japan / korea / southeast-asia / europe / america / oceania)
- `/trips/:slug`(tokyo / hokkaido / italy)
- `/domestic`、`/international`、`/booking`、`/guide`

---

## 12. 尚未完成 / 可能的下一步

- 首頁「熱門目的地」「精選國外行程」的連結目前**已經接上**(點擊會開新分頁跳轉);nav 四個項目也已接上路由。
- `國內旅遊`(Domestic)頁面目前用 SVG 插畫 + 色塊卡片呈現,使用者表示之後會補上真實台灣景點照片。
- 尚未實作真正的「訂房系統」串接(機票訂房頁的搜尋/預訂按鈕目前是靜態展示)。
- 尚未部署上線(`npm run build` + GitHub/Vercel 等發布流程,先前談過概念但還沒實際執行)。
