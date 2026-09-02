import styleAutumn from '../assets/images/destination-japan.png'
import styleSnow from '../assets/images/trip-hokkaido-winter.png'
import styleIsland from '../assets/images/destination-southeast-asia.png'
import styleCity from '../assets/images/destination-europe.png'
import styleFood from '../assets/images/destination-korea.png'
import styleHoneymoon from '../assets/images/trip-italy-classic.png'

export const travelStyles = [
  { id: 'autumn', name: '賞楓紅葉', note: '10–12 月・日本、韓國、加拿大', img: styleAutumn },
  { id: 'snow', name: '雪季溫泉', note: '12–2 月・北海道、首爾', img: styleSnow },
  { id: 'island', name: '海島度假', note: '全年・峇里島、普吉島、沖繩', img: styleIsland },
  { id: 'city', name: '古城藝術', note: '4–10 月・義大利、法國、捷克', img: styleCity },
  { id: 'food', name: '美食購物', note: '全年・首爾、大阪、香港', img: styleFood },
  { id: 'honeymoon', name: '浪漫蜜月', note: '全年・義大利、紐西蘭、大溪地', img: styleHoneymoon },
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

export const hotSearches = ['東京賞楓', '北海道雪祭', '義大利十日', '首爾自由行', '峇里島海島度假']

export const consultPath = {
  icon: 'message',
  title: '交給顧問安排',
  text: '把想法直接說給我們聽,由專屬顧問替你比對行程、回覆建議。',
  action: '聯絡旅遊顧問',
  to: '/consult',
}
