import heroJapan from '../assets/images/hero-japan-fuji.png'
import destJapan from '../assets/images/destination-japan.png'
import heroKorea from '../assets/images/hero-korea.png'
import destKorea from '../assets/images/destination-korea.png'
import heroOceania from '../assets/images/hero-oceania.png'
import destOceania from '../assets/images/destination-oceania.png'
import heroSea from '../assets/images/hero-southeast-asia.png'
import destSea from '../assets/images/destination-southeast-asia.png'
import heroEurope from '../assets/images/hero-europe.png'
import destEurope from '../assets/images/destination-europe.png'
import heroAmerica from '../assets/images/hero-america.png'
import destAmerica from '../assets/images/destination-america.png'

export const destinations = {
  japan: {
    name: '日本',
    heroImg: heroJapan,
    eyebrow: 'DESTINATION — JAPAN',
    tagline: '楓紅、雪國,與恰到好處的旅行步調',
    facts: [
      { icon: '🍂', label: '最佳季節', value: '10月—2月' },
      { icon: '✈️', label: '飛行時間', value: '約 2.5–4 小時' },
      { icon: '🕐', label: '時差', value: '快台灣 1 小時' },
      { icon: '💴', label: '當地貨幣', value: '日圓 JPY' },
    ],
    introEyebrow: 'ABOUT JAPAN',
    introHeading: '四季分明,剛剛好的旅行節奏',
    introText:
      '從富士山下的湖畔倒影,到京都街巷裡的百年町屋,日本用四季分明的節奏,把每一趟旅程都安排得恰到好處。無論是東京的繁華街景、北海道的粉雪山林,還是大阪的庶民美食,總有一段旅程,剛好適合現在的你。',
    highlights: [
      { name: '富士山', desc: '湖畔倒影與四季更迭,日本最具代表性的風景。', img: destJapan },
      { name: '京都', desc: '百年古寺與町屋交織而成的千年古都風景。', img: destJapan },
      { name: '北海道', desc: '粉雪山林與溫泉並存的冬季夢幻秘境。', img: destJapan },
      { name: '大阪', desc: '庶民美食與不夜城交織的活力街景。', img: destJapan },
    ],
    ctaHeading: '準備好前往日本了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的日本旅程。',
  },
  korea: {
    name: '韓國',
    heroImg: heroKorea,
    eyebrow: 'DESTINATION — KOREA',
    tagline: '櫻花街道,與韓劇般的浪漫日常',
    facts: [
      { icon: '🌸', label: '最佳季節', value: '3–4月、9–11月' },
      { icon: '✈️', label: '飛行時間', value: '約 2.5 小時' },
      { icon: '🕐', label: '時差', value: '快台灣 1 小時' },
      { icon: '💰', label: '當地貨幣', value: '韓元 KRW' },
    ],
    introEyebrow: 'ABOUT KOREA',
    introHeading: '街角巷弄,都藏著一場浪漫',
    introText:
      '從景福宮的傳統韓服體驗,到弘大街頭的青春氣息,韓國把復古與潮流揉合得恰到好處。櫻花盛開的春天、楓紅滿山的秋天,每個季節都有屬於韓國的浪漫理由。',
    highlights: [
      { name: '景福宮', desc: '韓服體驗與六百年古宮的日常浪漫', img: destKorea },
      { name: '甘川洞文化村', desc: '依山而建的釜山彩色階梯藝術村', img: destKorea },
      { name: '濟州島', desc: '火山地形與海岸線交織的度假島嶼', img: destKorea },
      { name: '南怡島', desc: '韓劇取景地,四季皆美的水杉步道', img: destKorea },
    ],
    ctaHeading: '準備好前往韓國了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的韓國旅程。',
  },
  oceania: {
    name: '紐澳',
    heroImg: heroOceania,
    eyebrow: 'DESTINATION — OCEANIA',
    tagline: '純淨海岸線,與反季節的夏日假期',
    facts: [
      { icon: '☀️', label: '最佳季節', value: '12月–2月(當地夏季)' },
      { icon: '✈️', label: '飛行時間', value: '約 9–10 小時' },
      { icon: '🕐', label: '時差', value: '快台灣 2–3 小時' },
      { icon: '💵', label: '當地貨幣', value: '澳幣/紐幣' },
    ],
    introEyebrow: 'ABOUT OCEANIA',
    introHeading: '當台灣入冬,這裡正值仲夏',
    introText:
      '雪梨歌劇院的白色風帆,大堡礁的繽紛珊瑚礁,皇后鎮的雪山與湖泊——紐澳用南半球的陽光,提供一趟反季節的度假選擇。當台灣正冷,這裡卻是艷陽高照的夏天,剛好是逃離冬天的最佳理由。',
    highlights: [
      { name: '雪梨歌劇院', desc: '澳洲最具代表性的建築地標', img: destOceania },
      { name: '大堡礁', desc: '世界最大珊瑚礁生態系', img: destOceania },
      { name: '皇后鎮', desc: '紐西蘭南島的極限運動天堂', img: destOceania },
      { name: '墨爾本', desc: '咖啡文化與塗鴉藝術交織的城市', img: destOceania },
    ],
    ctaHeading: '準備好前往紐澳了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的紐澳旅程。',
  },
  'southeast-asia': {
    name: '東南亞',
    heroImg: heroSea,
    eyebrow: 'DESTINATION — SOUTHEAST ASIA',
    tagline: '碧海藍天,與慢下來的度假時光',
    facts: [
      { icon: '☀️', label: '最佳季節', value: '11月–4月(乾季)' },
      { icon: '✈️', label: '飛行時間', value: '約 3–5 小時' },
      { icon: '🕐', label: '時差', value: '台灣時間 ±1 小時內' },
      { icon: '💰', label: '當地貨幣', value: '依國家而定' },
    ],
    introEyebrow: 'ABOUT SOUTHEAST ASIA',
    introHeading: '把時間調慢,讓海浪替你數日子',
    introText:
      '長尾船划過翡翠色海水,夕陽把整片天空染成橘紅色——東南亞的美,從來不急著被看完。無論是泰國的市集煙火氣、峇里島的靜謐海灘,還是越南的百年老城,這裡總有一種讓人放慢腳步的魔力。',
    highlights: [
      { name: '曼谷', desc: '金碧輝煌的寺廟與熱鬧夜市交織的城市', img: destSea },
      { name: '峇里島', desc: '火山、梯田與海灘並存的度假天堂', img: destSea },
      { name: '下龍灣', desc: '兩千座石灰岩島嶼的海上奇景', img: destSea },
      { name: '普吉島', desc: '東南亞最經典的白沙海岸線', img: destSea },
    ],
    ctaHeading: '準備好前往東南亞了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的東南亞旅程。',
  },
  europe: {
    name: '歐洲',
    heroImg: heroEurope,
    eyebrow: 'DESTINATION — EUROPE',
    tagline: '石板路古城,與跨越世紀的浪漫',
    facts: [
      { icon: '🌤️', label: '最佳季節', value: '5月–9月(氣候宜人)' },
      { icon: '✈️', label: '飛行時間', value: '約 13–14 小時' },
      { icon: '🕐', label: '時差', value: '慢台灣 6–7 小時' },
      { icon: '💶', label: '當地貨幣', value: '歐元 EUR' },
    ],
    introEyebrow: 'ABOUT EUROPE',
    introHeading: '走過的每一條街,都是一段歷史',
    introText:
      '艾菲爾鐵塔下的塞納河畔,羅馬競技場裡兩千年前的迴響,聖托里尼藍白相間的懸崖小鎮——歐洲把藝術、歷史與生活,揉進了每一條石板路裡。這裡的每一趟旅程,都值得放慢腳步細細品味。',
    highlights: [
      { name: '艾菲爾鐵塔', desc: '巴黎的浪漫地標與塞納河夜景', img: destEurope },
      { name: '羅馬競技場', desc: '兩千年歷史的古羅馬帝國遺跡', img: destEurope },
      { name: '聖托里尼', desc: '愛琴海上藍白相間的懸崖美景', img: destEurope },
      { name: '少女峰', desc: '瑞士阿爾卑斯山的雪白絕景', img: destEurope },
    ],
    ctaHeading: '準備好前往歐洲了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的歐洲旅程。',
  },
  america: {
    name: '美加',
    heroImg: heroAmerica,
    eyebrow: 'DESTINATION — AMERICA',
    tagline: '壯闊天際線,與無邊無際的自由感',
    facts: [
      { icon: '🍁', label: '最佳季節', value: '6–9月、9–10月賞楓' },
      { icon: '✈️', label: '飛行時間', value: '約 12–14 小時' },
      { icon: '🕐', label: '時差', value: '慢台灣 12–16 小時' },
      { icon: '💵', label: '當地貨幣', value: '美金/加幣' },
    ],
    introEyebrow: 'ABOUT AMERICA',
    introHeading: '從摩天大樓到壯闊國家公園',
    introText:
      '紐約的摩天大樓與自由女神,大峽谷的壯闊地貌,洛磯山脈的湖泊倒影——美加用它的遼闊,裝下了城市的繁華與自然的野性。無論想感受都市脈動,還是逃進山林湖泊,這裡都能找到屬於你的自由。',
    highlights: [
      { name: '自由女神像', desc: '紐約港的自由象徵與城市天際線', img: destAmerica },
      { name: '大峽谷', desc: '億萬年地質雕刻出的壯闊奇景', img: destAmerica },
      { name: '班夫國家公園', desc: '洛磯山脈的湖泊與雪山秘境', img: destAmerica },
      { name: '拉斯維加斯', desc: '沙漠中永不熄燈的不夜城', img: destAmerica },
    ],
    ctaHeading: '準備好前往美加了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的美加旅程。',
  },
}
