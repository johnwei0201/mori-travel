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

  // ───────── 國內旅遊 ─────────
  // 台灣實景照片尚未取得,heroImg 與 highlights 的 img 先留 null,
  // 頁面會自動顯示佔位區塊;補圖時只要把 null 換成 import 進來的變數即可。
  taipei: {
    name: '台北・北海岸',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — TAIPEI',
    tagline: '城市步調與海岸線,只隔一段車程',
    facts: [
      { icon: '🌤️', label: '最佳季節', value: '10月—4月' },
      { icon: '🚗', label: '車程時間', value: '市區即達' },
      { icon: '📅', label: '建議天數', value: '2—3 天' },
      { icon: '🚇', label: '交通方式', value: '捷運・客運' },
    ],
    introEyebrow: 'ABOUT TAIPEI',
    introHeading: '一天之內,從街區走到海邊',
    introText:
      '台北的迷人之處,在於它把城市與自然放得很近。早上還在大稻埕的老街喝茶,中午搭捷運轉客運,下午就能站在野柳的海蝕地形前吹風。往北一小時是九份的山城燈火,往東是東北角的岩岸線,不用長假,也能走出一趟完整的旅程。',
    highlights: [
      { name: '九份老街', desc: '山城階梯與紅燈籠交織的懷舊街景。', img: null },
      { name: '野柳地質公園', desc: '海蝕風化雕出的奇岩地貌。', img: null },
      { name: '陽明山', desc: '硫磺谷、擎天崗與季節限定的花季。', img: null },
      { name: '淡水漁人碼頭', desc: '情人橋與河口日落的經典畫面。', img: null },
    ],
    ctaHeading: '準備好走一趟台北了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的北台灣旅程。',
  },

  'yilan-hualien': {
    name: '宜蘭・花蓮',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — YILAN & HUALIEN',
    tagline: '太平洋的藍,與後山的慢',
    facts: [
      { icon: '🌊', label: '最佳季節', value: '3月—11月' },
      { icon: '🚗', label: '車程時間', value: '約 1—3 小時' },
      { icon: '📅', label: '建議天數', value: '3—4 天' },
      { icon: '🚆', label: '交通方式', value: '台鐵・自駕' },
    ],
    introEyebrow: 'ABOUT YILAN & HUALIEN',
    introHeading: '一邊是山壁,一邊是太平洋',
    introText:
      '從雪隧鑽出來的那一刻,空氣就變了。宜蘭有溫泉與平原的悠緩,再往南走,花蓮把中央山脈與太平洋壓縮在同一條公路上——立霧溪切出太魯閣的峽谷,清水斷崖直接落進海裡。這是台灣風景最有張力的一段路。',
    highlights: [
      { name: '太魯閣峽谷', desc: '立霧溪切穿大理岩的千仞峽谷。', img: null },
      { name: '清水斷崖', desc: '公路貼著海崖而行的壯闊視野。', img: null },
      { name: '七星潭', desc: '弧線優美的礫石海灣與遠山。', img: null },
      { name: '礁溪溫泉', desc: '平原上的碳酸氫鈉泉,泡湯首選。', img: null },
    ],
    ctaHeading: '準備好走一趟東海岸了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的宜花旅程。',
  },

  'taichung-nantou': {
    name: '台中・南投',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — TAICHUNG & NANTOU',
    tagline: '高山湖泊與城市綠意的中台灣',
    facts: [
      { icon: '🍃', label: '最佳季節', value: '全年皆宜' },
      { icon: '🚗', label: '車程時間', value: '約 2 小時' },
      { icon: '📅', label: '建議天數', value: '2—3 天' },
      { icon: '🚄', label: '交通方式', value: '高鐵・自駕' },
    ],
    introEyebrow: 'ABOUT TAICHUNG & NANTOU',
    introHeading: '往山裡走一點,天氣就變好了',
    introText:
      '台中是台灣少數氣候穩定到讓人放心排行程的城市,綠園道、歌劇院、老宅咖啡構成它的城市節奏。再往南投走,海拔一路拉高——日月潭的晨霧、清境的草原、合歡山的日出與冬季霧凇,把中台灣的層次拉得很開。',
    highlights: [
      { name: '日月潭', desc: '環湖步道與晨霧中的水社碼頭。', img: null },
      { name: '合歡山', desc: '公路可達的三千公尺高山雲海。', img: null },
      { name: '清境農場', desc: '青青草原與綿羊放牧的高山牧場。', img: null },
      { name: '高美濕地', desc: '木棧道盡頭的潮間帶落日。', img: null },
    ],
    ctaHeading: '準備好走一趟中台灣了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的中台灣旅程。',
  },

  'tainan-kaohsiung': {
    name: '台南・高雄',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — TAINAN & KAOHSIUNG',
    tagline: '古都巷弄,與港都的日落',
    facts: [
      { icon: '☀️', label: '最佳季節', value: '10月—3月' },
      { icon: '🚗', label: '車程時間', value: '約 2—2.5 小時' },
      { icon: '📅', label: '建議天數', value: '2—3 天' },
      { icon: '🚄', label: '交通方式', value: '高鐵・台鐵' },
    ],
    introEyebrow: 'ABOUT TAINAN & KAOHSIUNG',
    introHeading: '台灣最會吃的兩座城市',
    introText:
      '台南把四百年的歷史藏在巷弄裡,一間廟、一碗牛肉湯、一條安平老街,慢慢走才有味道。往南四十分鐘的高雄則完全相反——港灣、駁二的倉庫群、輕軌沿線的城市更新,傍晚在西子灣看夕陽沉進台灣海峽。一趟行程,兩種節奏。',
    highlights: [
      { name: '安平老街', desc: '樹屋、古堡與蜜餞香的府城起點。', img: null },
      { name: '奇美博物館', desc: '西洋古典建築與大量館藏典藏。', img: null },
      { name: '蓮池潭', desc: '龍虎塔與湖畔廟宇群的南國地標。', img: null },
      { name: '駁二藝術特區', desc: '港邊倉庫改造的藝文與市集場域。', img: null },
    ],
    ctaHeading: '準備好走一趟南台灣了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的南台灣旅程。',
  },

  kenting: {
    name: '墾丁・屏東',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — KENTING',
    tagline: '國境之南,一整年的夏天',
    facts: [
      { icon: '🏖️', label: '最佳季節', value: '4月—10月' },
      { icon: '🚗', label: '車程時間', value: '約 4—5 小時' },
      { icon: '📅', label: '建議天數', value: '3—4 天' },
      { icon: '🚌', label: '交通方式', value: '高鐵+客運' },
    ],
    introEyebrow: 'ABOUT KENTING',
    introHeading: '台灣唯一的熱帶海岸線',
    introText:
      '恆春半島是台灣少數全年都像夏天的地方。西岸有白沙灣的細砂與浮潛,東岸是龍磐草原被落山風吹出的遼闊草坡,南端的鵝鑾鼻燈塔則守著兩片海的交界。夜裡回到恆春老城,吃碗綠豆蒜,慢慢把一天收尾。',
    highlights: [
      { name: '白沙灣', desc: '細白砂灘與清透海水的浮潛勝地。', img: null },
      { name: '鵝鑾鼻燈塔', desc: '台灣最南端的白色燈塔與海景。', img: null },
      { name: '龍磐草原', desc: '崖上草坡與太平洋的無敵視野。', img: null },
      { name: '小琉球', desc: '船程半小時可達的珊瑚礁離島。', img: null },
    ],
    ctaHeading: '準備好走一趟墾丁了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的恆春半島旅程。',
  },

  penghu: {
    name: '澎湖・離島',
    breadcrumb: '國內旅遊',
    heroImg: null,
    eyebrow: 'DOMESTIC — PENGHU',
    tagline: '玄武岩與跳島,夏天最遠的那片藍',
    facts: [
      { icon: '🐚', label: '最佳季節', value: '4月—9月' },
      { icon: '✈️', label: '飛行時間', value: '約 50 分鐘' },
      { icon: '📅', label: '建議天數', value: '3—4 天' },
      { icon: '⛴️', label: '交通方式', value: '飛機・客輪' },
    ],
    introEyebrow: 'ABOUT PENGHU',
    introHeading: '九十座島嶼,一片透明的海',
    introText:
      '澎湖由九十幾座島嶼組成,夏天是它最好的季節。柱狀玄武岩是火山留下的紀念,雙心石滬是先民捕魚的智慧,而跳島行程能一次走過七美、吉貝、望安——每座島的海都藍得不太一樣,這是本島看不到的顏色。',
    highlights: [
      { name: '雙心石滬', desc: '七美島上的心形古老捕魚石滬。', img: null },
      { name: '七美嶼', desc: '海崖草原與環島公路的南方離島。', img: null },
      { name: '吉貝沙尾', desc: '延伸入海的細白沙嘴與水上活動。', img: null },
      { name: '澎湖跨海大橋', desc: '連接白沙與西嶼的經典地標。', img: null },
    ],
    ctaHeading: '準備好跳島去澎湖了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的離島旅程。',
  },
}
