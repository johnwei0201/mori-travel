import styleAutumn from '../assets/images_縮小/destination-japan.jpg'
import styleSnow from '../assets/images_縮小/trip-hokkaido-winter.jpg'
import styleIsland from '../assets/images_縮小/destination-southeast-asia.jpg'
import styleCity from '../assets/images_縮小/destination-europe.jpg'
import styleFood from '../assets/images_縮小/destination-korea.jpg'
import styleHoneymoon from '../assets/images_縮小/trip-italy-classic.jpg'

/*
 * note 的月份與地點要跟 tripCatalog.js 裡真的有的行程對得上 ——
 * 寫了「加拿大」卻點不出加拿大的行程,等於在說明文字裡說謊。
 */
export const travelStyles = [
  { id: 'autumn', name: '賞楓紅葉', note: '10–11 月・東京、釜山', img: styleAutumn },
  { id: 'snow', name: '雪季溫泉', note: '2 月・北海道', img: styleSnow },
  { id: 'island', name: '海島度假', note: '5–12 月・峇里島、普吉島、沖繩', img: styleIsland },
  { id: 'city', name: '古城藝術', note: '4–10 月・義大利、法國、捷克', img: styleCity },
  { id: 'food', name: '美食購物', note: '3–12 月・首爾、大阪、峴港', img: styleFood },
  { id: 'honeymoon', name: '浪漫蜜月', note: '5–11 月・義大利、紐西蘭、峇里島', img: styleHoneymoon },
]

export const months = [
  { m: 1, season: '北國雪季', where: '北海道・首爾' },
  { m: 2, season: '札幌雪祭', where: '北海道' },
  { m: 3, season: '櫻花前線', where: '東京・首爾' },
  { m: 4, season: '櫻花滿開', where: '京都・釜山' },
  { m: 5, season: '新綠花季', where: '北歐・紐西蘭' },
  { m: 6, season: '薰衣草田', where: '北海道・普羅旺斯' },
  { m: 7, season: '海島避暑', where: '峇里島・沖繩' },
  { m: 8, season: '南半球滑雪', where: '紐西蘭' },
  { m: 9, season: '秋色初現', where: '加拿大・歐洲' },
  { m: 10, season: '歐洲金秋', where: '義大利・法國' },
  { m: 11, season: '楓紅盛季', where: '東京・京都' },
  { m: 12, season: '耶誕市集', where: '德國・奧地利' },
]

/**
 * 熱門搜尋:按下去直接帶入一組條件,而不是把按鈕上的字塞進目的地欄位。
 * 以前用文字比對,「義大利十日」對不上標題「義大利經典 10 日」,一按就是 0 筆。
 * keyword 必須是 tripCatalog 的 region,duration 必須是 durationOptions 的 label。
 */
export const hotSearches = [
  { label: '東京賞楓', filters: { keyword: '日本', month: 11, style: 'autumn' } },
  { label: '北海道雪祭', filters: { keyword: '日本', month: 2, style: 'snow' } },
  { label: '義大利十日', filters: { keyword: '歐洲', month: 10, duration: '9 天以上' } },
  { label: '首爾自由行', filters: { keyword: '韓國', month: 3, style: 'food' } },
  { label: '峇里島海島度假', filters: { keyword: '東南亞', month: 7, style: 'island' } },
]

export const consultPath = {
  icon: 'message',
  title: '交給顧問安排',
  text: '把想法直接說給我們聽,由專屬顧問替您比對行程、回覆建議。',
  action: '聯絡旅遊顧問',
  to: '/consult',
}
