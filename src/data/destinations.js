import heroJapan from '../assets/images_縮小/hero-japan-fuji.jpg'
import destJapan from '../assets/images_縮小/destination-japan.jpg'
import heroKorea from '../assets/images_縮小/hero-korea.jpg'
import destKorea from '../assets/images_縮小/destination-korea.jpg'
import heroOceania from '../assets/images_縮小/hero-oceania.jpg'
import destOceania from '../assets/images_縮小/destination-oceania.jpg'
import heroSea from '../assets/images_縮小/hero-southeast-asia.jpg'
import destSea from '../assets/images_縮小/destination-southeast-asia.jpg'
import heroEurope from '../assets/images_縮小/hero-europe.jpg'
import destEurope from '../assets/images_縮小/destination-europe.jpg'
import heroAmerica from '../assets/images_縮小/hero-america.jpg'

// ───────── 國外六區:精選景點 ─────────
import spotFuji from '../assets/images_縮小/Selected-attractions-Mt.jpg'
import spotKyoto from '../assets/images_縮小/Featured-Attractions---Kyoto.jpg'
import spotHokkaido from '../assets/images_縮小/Featured-Attractions---Hokkaido.jpg'
import spotOsaka from '../assets/images_縮小/Featured-Attractions---Osaka.jpg'

import spotGyeongbokgung from '../assets/images_縮小/Featured-Attractions---Gyeongbokgung-Palace.jpg'
import spotGamcheon from '../assets/images_縮小/Featured-Attractions---Gamcheon-Culture-Village.jpg'
import spotJeju from '../assets/images_縮小/Featured-Attractions---Jeju-Island.jpg'
import spotNami from '../assets/images_縮小/Featured-Attractions---Nami-Island.jpg'

import spotBangkok from '../assets/images_縮小/Featured-Attractions---Bangkok.jpg'
import spotBali from '../assets/images_縮小/Selected-Attractions---Bali.jpg'
import spotHalong from '../assets/images_縮小/Selected-attractions---Ha-Long-Bay.jpg'
import spotPhuket from '../assets/images_縮小/Featured-Attractions---Phuket.jpg'

import spotEiffel from '../assets/images_縮小/Featured-Attractions---Eiffel-Tower.jpg'
import spotColosseum from '../assets/images_縮小/Featured-Attractions---Roman-Colosseum.jpg'
import spotSantorini from '../assets/images_縮小/Selected-Attractions---Santorini.jpg'
import spotJungfrau from '../assets/images_縮小/Featured-Attractions---Jungfraujoch.jpg'

import spotLiberty from '../assets/images_縮小/Featured-Attractions---Statue-of-Liberty.jpg'
import spotGrandCanyon from '../assets/images_縮小/Featured-Attractions---Grand-Canyon.jpg'
import spotBanff from '../assets/images_縮小/Featured-Attractions---Banff-National-Park.jpg'
import spotVegas from '../assets/images_縮小/Featured-Attractions---Las-Vegas.jpg'

import spotOperaHouse from '../assets/images_縮小/Featured-Attractions---Sydney-Opera-House.jpg'
import spotReef from '../assets/images_縮小/Featured-Attractions---Great-Barrier-Reef.jpg'
import spotQueenstown from '../assets/images_縮小/Featured-Attractions---Queenstown.jpg'
import spotMelbourne from '../assets/images_縮小/Featured-Attractions---Melbourne.jpg'

// ───────── 國內六區:主視覺 ─────────
import heroTaipei from '../assets/images_縮小/hero-Taipei-North-Coast.jpg'
import heroYilanHualien from '../assets/images_縮小/hero-Yilan-Hualien.jpg'
import heroTaichungNantou from '../assets/images_縮小/hero-Taichung-Nantou.jpg'
import heroTainanKaohsiung from '../assets/images_縮小/hero-Kaohsiung.jpg'
import heroKenting from '../assets/images_縮小/hero-Pingtung.jpg'
import heroPenghu from '../assets/images_縮小/hero-outlying-islands.jpg'

// ───────── 國內六區:精選景點 ─────────
import spotJiufen from '../assets/images_縮小/Jiufen-Old-Street.jpg'
import spotYehliu from '../assets/images_縮小/Yehliu-Geopark.jpg'
import spotYangmingshan from '../assets/images_縮小/Yangmingshan.jpg'
import spotTamsui from "../assets/images_縮小/Tamsui-Fisherman's-Wharf.jpg"

import spotTaroko from '../assets/images_縮小/Taroko-Gorge.jpg'
import spotQingshui from '../assets/images_縮小/Qingshui-Cliff.jpg'
import spotQixingtan from '../assets/images_縮小/Seven-Star-Pool.jpg'
import spotJiaoxi from '../assets/images_縮小/Jiaoxi-Hot-Spring.jpg'

import spotSunMoonLake from '../assets/images_縮小/Sun-Moon-Lake.jpg'
import spotHehuan from '../assets/images_縮小/Hehuan-Mountain.jpg'
import spotCingjing from '../assets/images_縮小/Cingjing-Farm.jpg'
import spotGaomei from '../assets/images_縮小/Gaomei-Wetlands.jpg'

import spotAnping from '../assets/images_縮小/Anping-Old-Street.jpg'
import spotChimei from '../assets/images_縮小/Chimei-Museum.jpg'
import spotLotusPond from '../assets/images_縮小/Lotus-Pond.jpg'
import spotPier2 from '../assets/images_縮小/Pier-2-Art-Center.jpg'

import spotBaisha from '../assets/images_縮小/Baisha-Bay.jpg'
import spotEluanbi from '../assets/images_縮小/Eluanbi-Lighthouse.jpg'
import spotLongpan from '../assets/images_縮小/Longpan-Grassland.jpg'
import spotXiaoliuqiu from '../assets/images_縮小/Xiaoliuqiu.jpg'

import spotDoubleHeart from '../assets/images_縮小/Double-Heart-Stone-Weir.jpg'
import spotQimei from '../assets/images_縮小/Qimeiyu.jpg'
import spotJibei from '../assets/images_縮小/jibe-sand-tail.jpg'
import spotPenghuBridge from '../assets/images_縮小/Penghu-Cross-Sea-Bridge.jpg'

export const destinations = {
  japan: {
    name: '日本',
    mapCenter: '36.5,138',
    mapZoom: 5,
    heroImg: heroJapan,
    eyebrow: 'DESTINATION — JAPAN',
    tagline: '楓紅、雪國,與恰到好處的旅行步調',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '10月—2月' },
      { icon: 'plane', label: '飛行時間', value: '約 2.5–4 小時' },
      { icon: 'clock', label: '時差', value: '快台灣 1 小時' },
      { icon: 'wallet', label: '當地貨幣', value: '日圓 JPY' },
    ],
    introEyebrow: 'ABOUT JAPAN',
    introHeading: '四季分明,剛剛好的旅行節奏',
    introText:
      '從富士山下的湖畔倒影,到京都街巷裡的百年町屋,日本用四季分明的節奏,把每一趟旅程都安排得恰到好處。無論是東京的繁華街景、北海道的粉雪山林,還是大阪的庶民美食,總有一段旅程,剛好適合現在的你。從台灣出發,東京、大阪都在三小時上下,是說走就走的距離。春天的櫻花與秋天的紅葉是兩個高峰,機位與住宿往往提前半年就開始緊繃;想避開人潮,五月的新綠與十一月底的初冬反而更從容。鐵路系統綿密,即使不自駕也能把行程接得很順。',
    highlights: [
      { name: '富士山', desc: '湖畔倒影與四季更迭,日本最具代表性的風景。', img: spotFuji },
      { name: '京都', desc: '百年古寺與町屋交織而成的千年古都風景。', img: spotKyoto },
      { name: '北海道', desc: '粉雪山林與溫泉並存的冬季夢幻秘境。', img: spotHokkaido },
      { name: '大阪', desc: '庶民美食與不夜城交織的活力街景。', img: spotOsaka },
    ],
    ctaHeading: '準備好前往日本了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的日本旅程。',
  },
  korea: {
    name: '韓國',
    mapCenter: '36.5,127.8',
    mapZoom: 6,
    heroImg: heroKorea,
    eyebrow: 'DESTINATION — KOREA',
    tagline: '櫻花街道,與韓劇般的浪漫日常',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '3–4月、9–11月' },
      { icon: 'plane', label: '飛行時間', value: '約 2.5 小時' },
      { icon: 'clock', label: '時差', value: '快台灣 1 小時' },
      { icon: 'wallet', label: '當地貨幣', value: '韓元 KRW' },
    ],
    introEyebrow: 'ABOUT KOREA',
    introHeading: '街角巷弄,都藏著一場浪漫',
    introText:
      '從景福宮的傳統韓服體驗,到弘大街頭的青春氣息,韓國把復古與潮流揉合得恰到好處。櫻花盛開的春天、楓紅滿山的秋天,每個季節都有屬於韓國的浪漫理由。飛行時間約兩個半小時,是最容易安排的短程旅行之一。首爾適合把城市走透,釜山有海,江原道則是滑雪與山景。四月的櫻花與十月的楓紅是旺季,七、八月的梅雨與酷暑相對冷門。市區交通以地鐵為主,一張交通卡幾乎可以走遍全國。',
    highlights: [
      { name: '景福宮', desc: '韓服體驗與六百年古宮的日常浪漫', img: spotGyeongbokgung },
      { name: '甘川洞文化村', desc: '依山而建的釜山彩色階梯藝術村', img: spotGamcheon },
      { name: '濟州島', desc: '火山地形與海岸線交織的度假島嶼', img: spotJeju },
      { name: '南怡島', desc: '韓劇取景地,四季皆美的水杉步道', img: spotNami },
    ],
    ctaHeading: '準備好前往韓國了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的韓國旅程。',
  },
  oceania: {
    name: '紐澳',
    mapCenter: '-27,140',
    mapZoom: 3,
    heroImg: heroOceania,
    eyebrow: 'DESTINATION — OCEANIA',
    tagline: '純淨海岸線,與反季節的夏日假期',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '12月–2月(當地夏季)' },
      { icon: 'plane', label: '飛行時間', value: '約 9–10 小時' },
      { icon: 'clock', label: '時差', value: '快台灣 2–3 小時' },
      { icon: 'wallet', label: '當地貨幣', value: '澳幣/紐幣' },
    ],
    introEyebrow: 'ABOUT OCEANIA',
    introHeading: '當台灣入冬,這裡正值仲夏',
    introText:
      '雪梨歌劇院的白色風帆,大堡礁的繽紛珊瑚礁,皇后鎮的雪山與湖泊——紐澳用南半球的陽光,提供一趟反季節的度假選擇。當台灣正冷,這裡卻是艷陽高照的夏天,剛好是逃離冬天的最佳理由。航程較長,通常建議至少安排八到十天,才不會把時間都花在移動上。澳洲東岸的城市與大堡礁適合第一次前往,紐西蘭南島則是自駕與自然風景的天下。南半球季節相反,台灣的冬天正是這裡最舒服的時候,也因此成了農曆春節最熱門的長程選擇之一。',
    highlights: [
      { name: '雪梨歌劇院', desc: '澳洲最具代表性的建築地標', img: spotOperaHouse },
      { name: '大堡礁', desc: '世界最大珊瑚礁生態系', img: spotReef },
      { name: '皇后鎮', desc: '紐西蘭南島的極限運動天堂', img: spotQueenstown },
      { name: '墨爾本', desc: '咖啡文化與塗鴉藝術交織的城市', img: spotMelbourne },
    ],
    ctaHeading: '準備好前往紐澳了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的紐澳旅程。',
  },
  'southeast-asia': {
    name: '東南亞',
    mapCenter: '8,113',
    mapZoom: 4,
    heroImg: heroSea,
    eyebrow: 'DESTINATION — SOUTHEAST ASIA',
    tagline: '碧海藍天,與慢下來的度假時光',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '11月–4月(乾季)' },
      { icon: 'plane', label: '飛行時間', value: '約 3–5 小時' },
      { icon: 'clock', label: '時差', value: '台灣時間 ±1 小時內' },
      { icon: 'wallet', label: '當地貨幣', value: '依國家而定' },
    ],
    introEyebrow: 'ABOUT SOUTHEAST ASIA',
    introHeading: '把時間調慢,讓海浪替你數日子',
    introText:
      '長尾船划過翡翠色海水,夕陽把整片天空染成橘紅色——東南亞的美,從來不急著被看完。無論是泰國的市集煙火氣、峇里島的靜謐海灘,還是越南的百年老城,這裡總有一種讓人放慢腳步的魔力。飛行時間多在三到五小時,物價相對友善,是最容易成行的長假選擇。乾季與雨季的差別比溫度更值得注意,同一個目的地在不同月份可以完全不同。海島行程建議把移動日與活動日分開排,留一點空白給那些突然想多待一會兒的下午。',
    highlights: [
      { name: '曼谷', desc: '金碧輝煌的寺廟與熱鬧夜市交織的城市', img: spotBangkok },
      { name: '峇里島', desc: '火山、梯田與海灘並存的度假天堂', img: spotBali },
      { name: '下龍灣', desc: '兩千座石灰岩島嶼的海上奇景', img: spotHalong },
      { name: '普吉島', desc: '東南亞最經典的白沙海岸線', img: spotPhuket },
    ],
    ctaHeading: '準備好前往東南亞了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的東南亞旅程。',
  },
  europe: {
    name: '歐洲',
    mapCenter: '50,10',
    mapZoom: 4,
    heroImg: heroEurope,
    // 艾菲爾鐵塔塔尖偏高,置中裁切會切掉
    heroPosition: '50% 25%',
    eyebrow: 'DESTINATION — EUROPE',
    tagline: '石板路古城,與跨越世紀的浪漫',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '5月–9月(氣候宜人)' },
      { icon: 'plane', label: '飛行時間', value: '約 13–14 小時' },
      { icon: 'clock', label: '時差', value: '慢台灣 6–7 小時' },
      { icon: 'wallet', label: '當地貨幣', value: '歐元 EUR' },
    ],
    introEyebrow: 'ABOUT EUROPE',
    introHeading: '走過的每一條街,都是一段歷史',
    introText:
      '艾菲爾鐵塔下的塞納河畔,羅馬競技場裡兩千年前的迴響,聖托里尼藍白相間的懸崖小鎮——歐洲把藝術、歷史與生活,揉進了每一條石板路裡。這裡的每一趟旅程,都值得放慢腳步細細品味。航程長、時差大,行程建議至少十天以上,城市不要排太多。申根區內的移動以高鐵與廉航為主,跨國其實比想像中簡單。五到九月日照長、天氣穩定,但也是人最多、價格最高的時候;春秋兩季的肩期,往往能用更少的預算換到更從容的旅程。',
    highlights: [
      { name: '艾菲爾鐵塔', desc: '巴黎的浪漫地標與塞納河夜景', img: spotEiffel },
      { name: '羅馬競技場', desc: '兩千年歷史的古羅馬帝國遺跡', img: spotColosseum },
      { name: '聖托里尼', desc: '愛琴海上藍白相間的懸崖美景', img: spotSantorini },
      { name: '少女峰', desc: '瑞士阿爾卑斯山的雪白絕景', img: spotJungfrau },
    ],
    ctaHeading: '準備好前往歐洲了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的歐洲旅程。',
  },
  america: {
    name: '美加',
    mapCenter: '48,-100',
    mapZoom: 3,
    heroImg: heroAmerica,
    // 自由女神像位置偏高,置中裁切會切掉頭頂
    heroPosition: '50% 25%',
    eyebrow: 'DESTINATION — AMERICA',
    tagline: '壯闊天際線,與無邊無際的自由感',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '6–9月、9–10月賞楓' },
      { icon: 'plane', label: '飛行時間', value: '約 12–14 小時' },
      { icon: 'clock', label: '時差', value: '慢台灣 12–16 小時' },
      { icon: 'wallet', label: '當地貨幣', value: '美金/加幣' },
    ],
    introEyebrow: 'ABOUT AMERICA',
    introHeading: '從摩天大樓到壯闊國家公園',
    introText:
      '紐約的摩天大樓與自由女神,大峽谷的壯闊地貌,洛磯山脈的湖泊倒影——美加用它的遼闊,裝下了城市的繁華與自然的野性。無論想感受都市脈動,還是逃進山林湖泊,這裡都能找到屬於你的自由。美加幅員遼闊,一趟行程建議專注在一個區域——東岸的城市線、西岸的國家公園線,或加拿大洛磯山脈,不要混在一起排。國內段航班與自駕通常都少不了。入境前需要先申請電子旅行許可,美國的 ESTA 與加拿大的 eTA 是兩套不同的系統,別弄混了。',
    highlights: [
      { name: '自由女神像', desc: '紐約港的自由象徵與城市天際線', img: spotLiberty },
      { name: '大峽谷', desc: '億萬年地質雕刻出的壯闊奇景', img: spotGrandCanyon },
      { name: '班夫國家公園', desc: '洛磯山脈的湖泊與雪山秘境', img: spotBanff },
      { name: '拉斯維加斯', desc: '沙漠中永不熄燈的不夜城', img: spotVegas },
    ],
    ctaHeading: '準備好前往美加了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的美加旅程。',
  },

  // ───────── 國內旅遊 ─────────
  // 台灣實景照片尚未取得,heroImg 與 highlights 的 img 先留 null,
  // 頁面會自動顯示佔位區塊;補圖時只要把 null 換成 import 進來的變數即可。
  taipei: {
    name: '台北・北海岸',
    mapQuery: '台北市',
    breadcrumb: '國內旅遊',
    heroImg: heroTaipei,
    eyebrow: 'DOMESTIC — TAIPEI',
    tagline: '城市步調與海岸線,只隔一段車程',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '10月—4月' },
      { icon: 'car', label: '車程時間', value: '市區即達' },
      { icon: 'calendar', label: '建議天數', value: '2—3 天' },
      { icon: 'train', label: '交通方式', value: '捷運・客運' },
    ],
    introEyebrow: 'ABOUT TAIPEI',
    introHeading: '一天之內,從街區走到海邊',
    introText:
      '台北的迷人之處,在於它把城市與自然放得很近。早上還在大稻埕的老街喝茶,中午搭捷運轉客運,下午就能站在野柳的海蝕地形前吹風。往北一小時是九份的山城燈火,往東是東北角的岩岸線,不用長假,也能走出一趟完整的旅程。交通是這一區最大的優勢,捷運、客運與台鐵幾乎能涵蓋所有景點,不開車也玩得起來。冬天東北季風強、北海岸多雨,行程最好準備一個室內的備案。想一天走完山與海,建議上午往陽明山、下午再轉北海岸,避免來回折返。',
    highlights: [
      { name: '九份老街', desc: '山城階梯與紅燈籠交織的懷舊街景。', img: spotJiufen },
      { name: '野柳地質公園', desc: '海蝕風化雕出的奇岩地貌。', img: spotYehliu },
      { name: '陽明山', desc: '硫磺谷、擎天崗與季節限定的花季。', img: spotYangmingshan },
      { name: '淡水漁人碼頭', desc: '情人橋與河口日落的經典畫面。', img: spotTamsui },
    ],
    ctaHeading: '準備好走一趟台北了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的北台灣旅程。',
  },

  'yilan-hualien': {
    name: '宜蘭・花蓮',
    mapQuery: '宜蘭縣',
    breadcrumb: '國內旅遊',
    heroImg: heroYilanHualien,
    eyebrow: 'DOMESTIC — YILAN & HUALIEN',
    tagline: '太平洋的藍,與後山的慢',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '3月—11月' },
      { icon: 'car', label: '車程時間', value: '約 1—3 小時' },
      { icon: 'calendar', label: '建議天數', value: '3—4 天' },
      { icon: 'train', label: '交通方式', value: '台鐵・自駕' },
    ],
    introEyebrow: 'ABOUT YILAN & HUALIEN',
    introHeading: '一邊是山壁,一邊是太平洋',
    introText:
      '從雪隧鑽出來的那一刻,空氣就變了。宜蘭有溫泉與平原的悠緩,再往南走,花蓮把中央山脈與太平洋壓縮在同一條公路上——立霧溪切出太魯閣的峽谷,清水斷崖直接落進海裡。這是台灣風景最有張力的一段路。台北到宜蘭走雪隧約一小時,往花蓮則建議搭火車,沿途本身就是風景。蘇花公路受天候影響大,雨天或颱風過後容易封閉,自駕前務必查路況。這一帶的步道近年常因地震調整開放範圍,出發前以官方公告為準。留兩天以上,才走得完山與海。',
    highlights: [
      { name: '太魯閣峽谷', desc: '立霧溪切穿大理岩的千仞峽谷。', img: spotTaroko },
      { name: '清水斷崖', desc: '公路貼著海崖而行的壯闊視野。', img: spotQingshui },
      { name: '七星潭', desc: '弧線優美的礫石海灣與遠山。', img: spotQixingtan },
      { name: '礁溪溫泉', desc: '平原上的碳酸氫鈉泉,泡湯首選。', img: spotJiaoxi },
    ],
    ctaHeading: '準備好走一趟東海岸了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的宜花旅程。',
  },

  'taichung-nantou': {
    name: '台中・南投',
    mapQuery: '台中市',
    breadcrumb: '國內旅遊',
    heroImg: heroTaichungNantou,
    eyebrow: 'DOMESTIC — TAICHUNG & NANTOU',
    tagline: '高山湖泊與城市綠意的中台灣',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '全年皆宜' },
      { icon: 'car', label: '車程時間', value: '約 2 小時' },
      { icon: 'calendar', label: '建議天數', value: '2—3 天' },
      { icon: 'train', label: '交通方式', value: '高鐵・自駕' },
    ],
    introEyebrow: 'ABOUT TAICHUNG & NANTOU',
    introHeading: '往山裡走一點,天氣就變好了',
    introText:
      '台中是台灣少數氣候穩定到讓人放心排行程的城市,綠園道、歌劇院、老宅咖啡構成它的城市節奏。再往南投走,海拔一路拉高——日月潭的晨霧、清境的草原、合歡山的日出與冬季霧凇,把中台灣的層次拉得很開。台中市區平坦好走,南投則是一路往上的山路,兩種節奏建議分開安排。高鐵到台中站後轉客運,是前往日月潭與清境最常見的方式。山區日夜溫差大,即使夏天也要帶外套。合歡山冬季可能有雪鏈管制,春秋兩季是路況最穩定的時候。',
    highlights: [
      { name: '日月潭', desc: '環湖步道與晨霧中的水社碼頭。', img: spotSunMoonLake },
      { name: '合歡山', desc: '公路可達的三千公尺高山雲海。', img: spotHehuan },
      { name: '清境農場', desc: '青青草原與綿羊放牧的高山牧場。', img: spotCingjing },
      { name: '高美濕地', desc: '木棧道盡頭的潮間帶落日。', img: spotGaomei },
    ],
    ctaHeading: '準備好走一趟中台灣了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的中台灣旅程。',
  },

  'tainan-kaohsiung': {
    name: '台南・高雄',
    mapQuery: '台南市',
    breadcrumb: '國內旅遊',
    heroImg: heroTainanKaohsiung,
    eyebrow: 'DOMESTIC — TAINAN & KAOHSIUNG',
    tagline: '古都巷弄,與港都的日落',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '10月—3月' },
      { icon: 'car', label: '車程時間', value: '約 2—2.5 小時' },
      { icon: 'calendar', label: '建議天數', value: '2—3 天' },
      { icon: 'train', label: '交通方式', value: '高鐵・台鐵' },
    ],
    introEyebrow: 'ABOUT TAINAN & KAOHSIUNG',
    introHeading: '台灣最會吃的兩座城市',
    introText:
      '台南把四百年的歷史藏在巷弄裡,一間廟、一碗牛肉湯、一條安平老街,慢慢走才有味道。往南四十分鐘的高雄則完全相反——港灣、駁二的倉庫群、輕軌沿線的城市更新,傍晚在西子灣看夕陽沉進台灣海峽。一趟行程,兩種節奏。兩地之間搭台鐵只要半小時,安排成一趟行程非常自然。台南的巷弄適合步行與共享機車,高雄則有捷運與輕軌串連主要區域。夏天正午相當炎熱,把室內景點排在中間時段會舒服很多。許多老店只開白天、週間還可能公休,想吃什麼最好先查清楚。',
    highlights: [
      { name: '安平老街', desc: '樹屋、古堡與蜜餞香的府城起點。', img: spotAnping },
      { name: '奇美博物館', desc: '西洋古典建築與大量館藏典藏。', img: spotChimei },
      { name: '蓮池潭', desc: '龍虎塔與湖畔廟宇群的南國地標。', img: spotLotusPond },
      { name: '駁二藝術特區', desc: '港邊倉庫改造的藝文與市集場域。', img: spotPier2 },
    ],
    ctaHeading: '準備好走一趟南台灣了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的南台灣旅程。',
  },

  kenting: {
    name: '墾丁・屏東',
    mapQuery: '墾丁國家公園',
    breadcrumb: '國內旅遊',
    heroImg: heroKenting,
    eyebrow: 'DOMESTIC — KENTING',
    tagline: '國境之南,一整年的夏天',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '4月—10月' },
      { icon: 'car', label: '車程時間', value: '約 4—5 小時' },
      { icon: 'calendar', label: '建議天數', value: '3—4 天' },
      { icon: 'bus', label: '交通方式', value: '高鐵+客運' },
    ],
    introEyebrow: 'ABOUT KENTING',
    introHeading: '台灣唯一的熱帶海岸線',
    introText:
      '恆春半島是台灣少數全年都像夏天的地方。西岸有白沙灣的細砂與浮潛,東岸是龍磐草原被落山風吹出的遼闊草坡,南端的鵝鑾鼻燈塔則守著兩片海的交界。夜裡回到恆春老城,吃碗綠豆蒜,慢慢把一天收尾。高鐵左營站轉墾丁快線約兩小時,島內交通以租機車最普遍。十月到隔年三月的落山風強勁,水上活動會受限,但也是人少、住宿便宜的時候。夏季紫外線極強,防曬與補水不能省。行程建議以恆春或墾丁大街為據點,再分東西兩線出發。',
    highlights: [
      { name: '白沙灣', desc: '細白砂灘與清透海水的浮潛勝地。', img: spotBaisha },
      { name: '鵝鑾鼻燈塔', desc: '台灣最南端的白色燈塔與海景。', img: spotEluanbi },
      { name: '龍磐草原', desc: '崖上草坡與太平洋的無敵視野。', img: spotLongpan },
      { name: '小琉球', desc: '船程半小時可達的珊瑚礁離島。', img: spotXiaoliuqiu },
    ],
    ctaHeading: '準備好走一趟墾丁了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的恆春半島旅程。',
  },

  penghu: {
    name: '澎湖・離島',
    mapQuery: '澎湖縣',
    breadcrumb: '國內旅遊',
    heroImg: heroPenghu,
    eyebrow: 'DOMESTIC — PENGHU',
    tagline: '玄武岩與跳島,夏天最遠的那片藍',
    facts: [
      { icon: 'sun', label: '最佳季節', value: '4月—9月' },
      { icon: 'plane', label: '飛行時間', value: '約 50 分鐘' },
      { icon: 'calendar', label: '建議天數', value: '3—4 天' },
      { icon: 'ship', label: '交通方式', value: '飛機・客輪' },
    ],
    introEyebrow: 'ABOUT PENGHU',
    introHeading: '九十座島嶼,一片透明的海',
    introText:
      '澎湖由九十幾座島嶼組成,夏天是它最好的季節。柱狀玄武岩是火山留下的紀念,雙心石滬是先民捕魚的智慧,而跳島行程能一次走過七美、吉貝、望安——每座島的海都藍得不太一樣,這是本島看不到的顏色。夏季航班與船班密集,冬季則因東北季風大幅減少,四月到九月是最適合前往的區間。跳島行程多為一日往返,船班時間固定,建議把離島與本島的行程分天安排。島上以租機車為主,防曬與防風外套都要帶。花火節期間住宿最搶手,通常要提前兩三個月訂。',
    highlights: [
      { name: '雙心石滬', desc: '七美島上的心形古老捕魚石滬。', img: spotDoubleHeart },
      { name: '七美嶼', desc: '海崖草原與環島公路的南方離島。', img: spotQimei },
      { name: '吉貝沙尾', desc: '延伸入海的細白沙嘴與水上活動。', img: spotJibei },
      { name: '澎湖跨海大橋', desc: '連接白沙與西嶼的經典地標。', img: spotPenghuBridge },
    ],
    ctaHeading: '準備好跳島去澎湖了嗎?',
    ctaText: '專屬旅遊顧問一對一協助,為你規劃剛剛好的離島旅程。',
  },
}
