// 國外景點
import spotFuji from '../assets/images/Selected attractions-Mt. Fuji.png'
import spotKyoto from '../assets/images/Featured Attractions - Kyoto.png'
import spotHokkaido from '../assets/images/Featured Attractions - Hokkaido.png'
import spotOsaka from '../assets/images/Featured Attractions - Osaka.png'
import spotGyeongbokgung from '../assets/images/Featured Attractions - Gyeongbokgung Palace.png'
import spotGamcheon from '../assets/images/Featured Attractions - Gamcheon Culture Village.png'
import spotJeju from '../assets/images/Featured Attractions - Jeju Island.png'
import spotNami from '../assets/images/Featured Attractions - Nami Island.png'
import spotBangkok from '../assets/images/Featured Attractions - Bangkok.png'
import spotBali from '../assets/images/Selected Attractions - Bali.png'
import spotHalong from '../assets/images/Selected attractions - Ha Long Bay.png'
import spotPhuket from '../assets/images/Featured Attractions - Phuket.png'
import spotEiffel from '../assets/images/Featured Attractions - Eiffel Tower.png'
import spotColosseum from '../assets/images/Featured Attractions - Roman Colosseum.png'
import spotSantorini from '../assets/images/Selected Attractions - Santorini.png'
import spotJungfrau from '../assets/images/Featured Attractions - Jungfraujoch.png'
import spotLiberty from '../assets/images/Featured Attractions - Statue of Liberty.png'
import spotGrandCanyon from '../assets/images/Featured Attractions - Grand Canyon.png'
import spotBanff from '../assets/images/Featured Attractions - Banff National Park.png'
import spotVegas from '../assets/images/Featured Attractions - Las Vegas.png'
import spotOperaHouse from '../assets/images/Featured Attractions - Sydney Opera House.png'
import spotReef from '../assets/images/Featured Attractions - Great Barrier Reef.png'
import spotQueenstown from '../assets/images/Featured Attractions - Queenstown.png'
import spotMelbourne from '../assets/images/Featured Attractions - Melbourne.png'

// 國內景點
import spotJiufen from '../assets/images/Jiufen Old Street.png'
import spotYehliu from '../assets/images/Yehliu Geopark.png'
import spotYangmingshan from '../assets/images/Yangmingshan.png'
import spotTamsui from "../assets/images/Tamsui Fisherman's Wharf.png"
import spotTaroko from '../assets/images/Taroko Gorge.png'
import spotQingshui from '../assets/images/Qingshui Cliff.png'
import spotQixingtan from '../assets/images/Seven Star Pool.png'
import spotJiaoxi from '../assets/images/Jiaoxi Hot Spring.png'
import spotSunMoonLake from '../assets/images/Sun Moon Lake.png'
import spotHehuan from '../assets/images/Hehuan Mountain.png'
import spotCingjing from '../assets/images/Cingjing Farm.png'
import spotGaomei from '../assets/images/Gaomei Wetlands.png'
import spotAnping from '../assets/images/Anping Old Street.png'
import spotChimei from '../assets/images/Chimei Museum.png'
import spotLotusPond from '../assets/images/Lotus Pond.png'
import spotPier2 from '../assets/images/Pier-2 Art Center.png'
import spotBaisha from '../assets/images/Baisha Bay.png'
import spotEluanbi from '../assets/images/Eluanbi Lighthouse.png'
import spotLongpan from '../assets/images/Longpan Grassland.png'
import spotXiaoliuqiu from '../assets/images/Xiaoliuqiu.png'
import spotDoubleHeart from '../assets/images/Double Heart Stone Weir.png'
import spotQimei from '../assets/images/Qimeiyu.png'
import spotJibei from '../assets/images/jibe sand tail.png'
import spotPenghuBridge from '../assets/images/Penghu Cross-Sea Bridge.png'

/**
 * 各景點的內頁內容,由 /attractions/:slug 讀取。
 *
 * region / regionSlug 用來做麵包屑與「回到這個地區」的連結,
 * parent 則是最上層分類(國內旅遊 / 熱門目的地)。
 * facts 固定四項,對應內頁上方那張快速資訊卡。
 */
export const attractions = {
  /* ───────── 日本 ───────── */
  'mt-fuji': {
    name: '富士山',
    mapQuery: '富士山',
    region: '日本',
    regionSlug: 'japan',
    parent: '熱門目的地',
    img: spotFuji,
    eyebrow: 'ATTRACTION — MT. FUJI',
    tagline: '湖面倒影裡的那座山,日本人心中的原點',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天至一天' },
      { icon: 'sun', label: '最佳季節', value: '10月—2月最清晰' },
      { icon: 'train', label: '交通方式', value: '新宿搭巴士約 2 小時' },
      { icon: 'wallet', label: '門票', value: '免費(纜車另計)' },
    ],
    intro:
      '富士山不是走近才好看,而是要退遠一點。河口湖、山中湖、忍野八海這幾個經典觀景點,把山體、湖面倒影與四季植被一次收進同一個畫面裡。冬天空氣乾冷,是一年中山頭最清楚的季節;春天有櫻花前景,秋天則是紅葉環繞。真正登頂只在七、八月開放,多數旅人來這裡是為了看它,而不是爬它。',
    points: [
      { title: '河口湖畔', text: '最經典的倒影角度,清晨無風時湖面像鏡子。北岸的大石公園視野最開闊。' },
      { title: '新倉山淺間公園', text: '五重塔、櫻花與富士山同框,是日本觀光海報最常出現的那個畫面。' },
      { title: '忍野八海', text: '富士山伏流水形成的八個池子,水色清透,適合安排在湖區行程之間。' },
    ],
    tips: [
      '山頂常被雲遮住,清晨到中午前的機率明顯較高',
      '湖區風大體感偏冷,即使夏天也建議帶一件薄外套',
      '若要登頂需在 7—9 月初的開山期,並提前預約山屋',
    ],
  },

  kyoto: {
    name: '京都',
    mapQuery: '日本京都市',
    region: '日本',
    regionSlug: 'japan',
    parent: '熱門目的地',
    img: spotKyoto,
    eyebrow: 'ATTRACTION — KYOTO',
    tagline: '千年古都,把時間留在了町屋的木格窗後',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 天' },
      { icon: 'sun', label: '最佳季節', value: '3—4月櫻花、11月楓紅' },
      { icon: 'train', label: '交通方式', value: '大阪搭電車約 30 分鐘' },
      { icon: 'wallet', label: '門票', value: '各寺院約 300—600 日圓' },
    ],
    intro:
      '京都的魅力不在單一景點,而在整座城市保留下來的尺度感——低矮的町屋、窄窄的石板巷、隨處可見的神社鳥居。清水寺、伏見稻荷、嵐山竹林是必訪的三個代表,但真正讓人記得的往往是走錯路時撞見的某條小巷。建議至少留兩天,一天走東山、一天走嵐山與金閣寺一帶。',
    points: [
      { title: '清水寺與二年坂', text: '從清水舞台俯瞰市景,再沿石板坡道慢慢走下來,沿途都是老鋪與甜點店。' },
      { title: '伏見稻荷大社', text: '上萬座朱紅鳥居連成的千本鳥居,清晨六點前人最少,拍照也最從容。' },
      { title: '嵐山竹林小徑', text: '竹影高聳、光線篩落,配合渡月橋與保津川的river景,適合安排半天。' },
    ],
    tips: [
      '賞櫻與賞楓季住宿極搶手,建議提早三個月訂房',
      '寺院多半下午四、五點就關門,行程要往前排',
      '市區巴士一日券比想像中好用,但尖峰時段容易塞車',
    ],
  },

  hokkaido: {
    name: '北海道',
    mapQuery: '日本北海道',
    region: '日本',
    regionSlug: 'japan',
    parent: '熱門目的地',
    img: spotHokkaido,
    eyebrow: 'ATTRACTION — HOKKAIDO',
    tagline: '夏天是花田,冬天是粉雪,一年兩種極端',
    facts: [
      { icon: 'clock', label: '建議停留', value: '5—6 天' },
      { icon: 'sun', label: '最佳季節', value: '7月花季、1—2月雪季' },
      { icon: 'plane', label: '交通方式', value: '直飛新千歲約 3.5 小時' },
      { icon: 'car', label: '島內交通', value: '建議自駕或包車' },
    ],
    intro:
      '北海道的面積接近台灣的兩倍半,一次玩不完是正常的。夏天的富良野是薰衣草與彩虹花田,秋天有大雪山的紅葉,冬天則是札幌雪祭、小樽運河的雪景與二世谷的粉雪。因為景點之間距離遠,自駕或包車幾乎是必要的,行程也建議以「一個區域待久一點」為原則,而不是每天換城市。',
    points: [
      { title: '富良野與美瑛', text: '七月的薰衣草田與拼布之路,是北海道夏季的代表畫面。' },
      { title: '小樽運河', text: '煤氣燈與石造倉庫沿運河排開,傍晚點燈後最有味道,冬天積雪更美。' },
      { title: '登別・洞爺溫泉', text: '硫磺地形與湖景溫泉,是行程中放慢步調的一站。' },
    ],
    tips: [
      '冬季自駕需要雪胎與雪地駕駛經驗,沒把握建議選包車行程',
      '城市之間動輒兩三小時車程,一天排兩個大景點就夠了',
      '花田有明確花期,七月中下旬才是薰衣草最盛的時候',
    ],
  },

  osaka: {
    name: '大阪',
    mapQuery: '日本大阪市',
    region: '日本',
    regionSlug: 'japan',
    parent: '熱門目的地',
    img: spotOsaka,
    eyebrow: 'ATTRACTION — OSAKA',
    tagline: '把「吃倒」當成城市個性的地方',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 天' },
      { icon: 'sun', label: '最佳季節', value: '全年皆宜' },
      { icon: 'plane', label: '交通方式', value: '直飛關西約 2.5 小時' },
      { icon: 'train', label: '市區交通', value: '地鐵與 JR 環狀線' },
    ],
    intro:
      '如果京都是安靜的,大阪就是吵鬧而好客的那一面。道頓堀的巨大招牌、心齋橋的購物人潮、新世界的串炸老店,構成這座城市最直接的印象。大阪城的天守閣與周邊公園提供了另一種節奏,春天更是市內最好的賞櫻地之一。它也是關西的交通樞紐,適合當作京都、奈良、神戶的住宿基地。',
    points: [
      { title: '道頓堀', text: '固力果跑跑人招牌所在地,運河兩側全是餐廳,晚上最熱鬧。' },
      { title: '大阪城公園', text: '天守閣登頂可俯瞰市區,護城河與西之丸庭園在櫻花季特別漂亮。' },
      { title: '黑門市場', text: '早市為主的美食市場,海鮮、和牛串與水果都能站著現吃。' },
    ],
    tips: [
      '大阪周遊卡涵蓋多數景點與地鐵,行程密集時很划算',
      '道頓堀晚間人潮極多,拍招牌建議白天或深夜',
      '以大阪為基地往返京都、奈良都在一小時內,能省下換住宿的時間',
    ],
  },

  /* ───────── 韓國 ───────── */
  gyeongbokgung: {
    name: '景福宮',
    mapQuery: '首爾景福宮',
    region: '韓國',
    regionSlug: 'korea',
    parent: '熱門目的地',
    img: spotGyeongbokgung,
    eyebrow: 'ATTRACTION — GYEONGBOKGUNG',
    tagline: '穿上韓服走進去,六百年像是還沒過完',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '4—6月、9—11月' },
      { icon: 'train', label: '交通方式', value: '地鐵景福宮站 5 號出口' },
      { icon: 'wallet', label: '門票', value: '3,000 韓元(著韓服免費)' },
    ],
    intro:
      '景福宮是朝鮮王朝的正宮,也是首爾最完整的宮殿建築群。從光化門進入後,勤政殿、慶會樓一路展開,背景是北岳山的稜線,建築與山勢的關係是它最好看的地方。穿韓服可以免票入場,因此宮內經常能看到成群的韓服身影——這已經成為景福宮體驗的一部分,而不只是觀光噱頭。',
    points: [
      { title: '守門將換崗儀式', text: '每天上下午各一場,傳統服飾與鼓樂重現古代宮門交接。' },
      { title: '慶會樓', text: '池上的宴會樓閣,水面倒影是全宮最經典的一幕。' },
      { title: '國立民俗博物館', text: '就在宮內,下雨天或想深入了解朝鮮生活時可以順道走一趟。' },
    ],
    tips: [
      '週二公休,排行程時特別注意',
      '韓服租借店集中在三清洞一帶,半日約 15,000—25,000 韓元',
      '宮內遮蔽少,夏天正午偏曬,建議上午或傍晚前往',
    ],
  },

  gamcheon: {
    name: '甘川洞文化村',
    mapQuery: '甘川洞文化村',
    region: '韓國',
    regionSlug: 'korea',
    parent: '熱門目的地',
    img: spotGamcheon,
    eyebrow: 'ATTRACTION — GAMCHEON',
    tagline: '依山而建的彩色階梯,釜山最上鏡的一面',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '春秋兩季' },
      { icon: 'bus', label: '交通方式', value: '土城站轉小巴約 15 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費(地圖 2,000 韓元)' },
    ],
    intro:
      '甘川洞原本是戰後難民聚落,層層疊疊的房子沿山坡而建。1990 年代後由藝術家與居民共同改造,牆面刷上彩色油漆、巷弄裡藏進壁畫與裝置藝術,成了釜山最具代表性的文化village。這裡仍是有人居住的社區,走訪時的音量與拍照分寸,是這個景點特別需要注意的部分。',
    points: [
      { title: '小王子觀景台', text: '小王子與狐狸的雕塑背對山城,是排隊也要拍的一張。' },
      { title: '彩繪巷弄', text: '主街之外的小巷才是精華,壁畫、書店與咖啡館藏在轉角。' },
      { title: '甘內咖啡館', text: '幾間位置好的咖啡店可以坐下來俯瞰整片彩色屋頂。' },
    ],
    tips: [
      '整區都是坡道與階梯,務必穿好走的鞋',
      '居民仍在此生活,請勿進入私人住宅或大聲喧嘩',
      '傍晚光線最柔和,但天黑後巷弄照明不足,不建議太晚停留',
    ],
  },

  jeju: {
    name: '濟州島',
    mapQuery: '濟州島',
    region: '韓國',
    regionSlug: 'korea',
    parent: '熱門目的地',
    img: spotJeju,
    eyebrow: 'ATTRACTION — JEJU',
    tagline: '火山、海岸線與油菜花田,韓國人的度假首選',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '3—5月、9—11月' },
      { icon: 'plane', label: '交通方式', value: '首爾飛濟州約 1 小時' },
      { icon: 'car', label: '島內交通', value: '建議租車環島' },
    ],
    intro:
      '濟州是火山噴發形成的島嶼,漢拏山立在中央,海岸線則遍布黑色玄武岩。城山日出峰的火山口、萬丈窟的熔岩洞穴都是世界自然遺產。春天的油菜花與櫻花同時盛開,是島上最漂亮的季節。整座島環一圈約 200 公里,租車兩三天就能玩得相當完整。',
    points: [
      { title: '城山日出峰', text: '海邊隆起的火山口,登頂約 25 分鐘,日出時分最壯觀。' },
      { title: '牛島', text: '搭船 15 分鐘可達的離島,租電動車環島剛好半天。' },
      { title: '漢拏山國立公園', text: '登頂需一整天,若時間有限可走御里牧等短程步道。' },
    ],
    tips: [
      '島上大眾運輸班次少,沒有租車會很不方便',
      '海風強勁,春秋兩季日夜溫差大',
      '城山日出峰看日出需摸黑出發,記得前一晚早點休息',
    ],
  },

  nami: {
    name: '南怡島',
    mapQuery: '南怡島',
    region: '韓國',
    regionSlug: 'korea',
    parent: '熱門目的地',
    img: spotNami,
    eyebrow: 'ATTRACTION — NAMI ISLAND',
    tagline: '水杉步道四季換裝,韓劇取景的原點',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天' },
      { icon: 'sun', label: '最佳季節', value: '10—11月銀杏與楓紅' },
      { icon: 'train', label: '交通方式', value: '首爾搭 ITX 約 1 小時' },
      { icon: 'ship', label: '進島方式', value: '渡輪約 5 分鐘' },
    ],
    intro:
      '南怡島是漢江上的一座半月形小島,因《冬季戀歌》而廣為人知。島上最著名的是那條筆直的水杉步道,春綠、夏蔭、秋黃、冬雪,一年四季完全不同。島不大,租腳踏車繞一圈約一小時,也可以純步行慢慢走。多數人會與小法國村、晨靜樹木園排在同一天。',
    points: [
      { title: '水杉步道', text: '筆直延伸數百公尺的林蔭道,秋天金黃時最有名。' },
      { title: '銀杏大道', text: '十一月初滿地落葉,比水杉步道人少一些。' },
      { title: '高空滑索進島', text: '從對岸滑索直接飛進島上,是渡輪之外的另一種進場方式。' },
    ],
    tips: [
      '從首爾當天來回可行,但建議早上出發才有充裕時間',
      '秋季週末人潮極多,平日前往體驗差很多',
      '島上餐飲選擇有限,可考慮先在春川吃辣炒雞排',
    ],
  },

  /* ───────── 東南亞 ───────── */
  bangkok: {
    name: '曼谷',
    mapQuery: '泰國曼谷',
    region: '東南亞',
    regionSlug: 'southeast-asia',
    parent: '熱門目的地',
    img: spotBangkok,
    eyebrow: 'ATTRACTION — BANGKOK',
    tagline: '金色寺廟與深夜市集,永遠醒著的城市',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '11—2月涼季' },
      { icon: 'plane', label: '交通方式', value: '直飛約 3.5 小時' },
      { icon: 'train', label: '市區交通', value: 'BTS 空鐵與昭披耶河船' },
    ],
    intro:
      '曼谷把極端的兩面放在同一座城市裡:大皇宮與臥佛寺的金碧輝煌,和考山路、恰圖恰週末市集的喧鬧市井。昭披耶河貫穿其中,搭交通船遊河是避開塞車又能看見城市樣貌的方式。這裡的按摩、街邊小吃與購物商場價格都相對友善,是東南亞行程中最容易安排的一站。',
    points: [
      { title: '大皇宮與玉佛寺', text: '泰國最重要的皇家建築群,服裝需過膝、不露肩。' },
      { title: '臥佛寺', text: '46 公尺長的臥佛與正統泰式按摩發源地,可以順道體驗。' },
      { title: '恰圖恰週末市集', text: '超過一萬個攤位,只在週末營業,建議上午前往。' },
    ],
    tips: [
      '進寺廟需著長褲長裙,現場租借要另外排隊',
      '尖峰時段地面交通極塞,能搭 BTS 或船就別搭車',
      '路邊攤生水與冰塊建議留意,腸胃敏感者選人多的攤位',
    ],
  },

  bali: {
    name: '峇里島',
    mapQuery: '印尼峇里島',
    region: '東南亞',
    regionSlug: 'southeast-asia',
    parent: '熱門目的地',
    img: spotBali,
    eyebrow: 'ATTRACTION — BALI',
    tagline: '火山、梯田與海灘,一座島把三種假期都給你',
    facts: [
      { icon: 'clock', label: '建議停留', value: '5—6 天' },
      { icon: 'sun', label: '最佳季節', value: '4—10月乾季' },
      { icon: 'plane', label: '交通方式', value: '直飛約 5.5 小時' },
      { icon: 'car', label: '島內交通', value: '包車或機車' },
    ],
    intro:
      '峇里島的分區很清楚:烏布在山裡,是梯田、瑜伽與手工藝;水明漾與庫塔在海邊,是衝浪與夕陽;努沙杜瓦則以度假村為主。多數人會安排前半段住烏布、後半段移到海邊,一趟旅程同時擁有山與海。島上寺廟眾多,宗教仍深深嵌在日常生活裡,清晨常能看到門口的祭品小盤。',
    points: [
      { title: '德格拉朗梯田', text: '烏布近郊的層層水稻梯田,清晨薄霧時最漂亮。' },
      { title: '烏魯瓦圖斷崖廟', text: '建在海崖上的廟宇,傍晚的火舞表演配上落日。' },
      { title: '聖泉寺', text: '當地人沐浴淨身的聖地,參與需著沙龍並遵守儀式順序。' },
    ],
    tips: [
      '島上道路窄、車速慢,兩個景點之間常要一小時以上',
      '進寺廟需圍沙龍,多數景點入口有提供',
      '雨季(11—3月)午後常有陣雨,行程建議排在上午',
    ],
  },

  'halong-bay': {
    name: '下龍灣',
    mapQuery: '下龍灣',
    region: '東南亞',
    regionSlug: 'southeast-asia',
    parent: '熱門目的地',
    img: spotHalong,
    eyebrow: 'ATTRACTION — HA LONG BAY',
    tagline: '兩千座石灰岩島嶼,從海面直直長出來',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 天' },
      { icon: 'sun', label: '最佳季節', value: '10—4月' },
      { icon: 'car', label: '交通方式', value: '河內車程約 2.5 小時' },
      { icon: 'ship', label: '遊覽方式', value: '過夜遊船最完整' },
    ],
    intro:
      '下龍灣是聯合國世界自然遺產,一千九百多座石灰岩島嶼散布在海面上,晨霧未散時像水墨畫。最好的體驗方式是搭乘過夜遊船——白天划獨木舟穿過岩洞、參觀水上人家,傍晚在甲板看日落,隔天清晨的海面通常最平靜。當天來回雖然可行,但幾乎只能看到最外圍的部分。',
    points: [
      { title: '驚訝洞', text: '灣區最大的鐘乳石洞,燈光打過的岩層層次分明。' },
      { title: '獨木舟穿洞', text: '划進被岩壁圍住的潟湖,是遊船行程的招牌活動。' },
      { title: '吉婆島', text: '灣內最大的島,有國家公園步道與較安靜的海灘。' },
    ],
    tips: [
      '夏季颱風可能導致遊船停航,行前留意天氣',
      '過夜遊船價差極大,建議確認船艙、餐食與活動內容',
      '灣區日夜溫差明顯,甲板風大記得帶外套',
    ],
  },

  phuket: {
    name: '普吉島',
    mapQuery: '泰國普吉島',
    region: '東南亞',
    regionSlug: 'southeast-asia',
    parent: '熱門目的地',
    img: spotPhuket,
    eyebrow: 'ATTRACTION — PHUKET',
    tagline: '安達曼海的白沙與跳島,泰國最經典的海岸線',
    facts: [
      { icon: 'clock', label: '建議停留', value: '4—5 天' },
      { icon: 'sun', label: '最佳季節', value: '11—4月乾季' },
      { icon: 'plane', label: '交通方式', value: '直飛約 4 小時' },
      { icon: 'ship', label: '跳島', value: '快艇一日遊為主' },
    ],
    intro:
      '普吉島是泰國最大的島,西岸一整排海灘各有個性:芭東熱鬧、卡塔卡倫適合家庭、奈漢則安靜許多。真正的重頭戲通常在跳島——皮皮島、蛋島、甲米的攀牙灣都能當天往返。島上還保留了葡萄牙殖民風格的普吉老鎮,彩色街屋與咖啡館適合安排半天避開烈日。',
    points: [
      { title: '皮皮島一日遊', text: '瑪雅灣與維京洞,快艇約一小時可達。' },
      { title: '攀牙灣', text: '石灰岩島嶼與《007》取景地詹姆士龐德島。' },
      { title: '普吉老鎮', text: '中葡混血的街屋建築,壁畫與老咖啡館集中在塔郎路一帶。' },
    ],
    tips: [
      '雨季(5—10月)西岸浪大,部分跳島行程會停開',
      '海灘紅旗代表禁止下水,務必遵守',
      '快艇一日遊晃動明顯,容易暈船者建議選大船行程',
    ],
  },

  /* ───────── 歐洲 ───────── */
  'eiffel-tower': {
    name: '艾菲爾鐵塔',
    mapQuery: '艾菲爾鐵塔',
    region: '歐洲',
    regionSlug: 'europe',
    parent: '熱門目的地',
    img: spotEiffel,
    eyebrow: 'ATTRACTION — EIFFEL TOWER',
    tagline: '一座本來要拆掉的鐵塔,成了巴黎的代名詞',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '4—6月、9—10月' },
      { icon: 'train', label: '交通方式', value: '地鐵 Bir-Hakeim 站' },
      { icon: 'wallet', label: '門票', value: '登頂約 29 歐元' },
    ],
    intro:
      '鐵塔是 1889 年萬國博覽會的臨時建築,原訂二十年後拆除,卻因為無線電天線的用途保留下來,最後成了巴黎最不可取代的輪廓。登塔分三層,第二層的視野其實最好——能清楚看見塞納河的彎道與街區紋理;頂層則勝在高度。若不打算登塔,夏佑宮平台與戰神廣場是兩個最經典的拍攝點。',
    points: [
      { title: '夏佑宮平台', text: '正對鐵塔的高處,是明信片角度,清晨人最少。' },
      { title: '戰神廣場', text: '草地上野餐、把整座塔收進畫面,傍晚氣氛最好。' },
      { title: '整點閃燈', text: '天黑後每個整點閃爍五分鐘,最後一場通常是凌晨一點。' },
    ],
    tips: [
      '現場排隊動輒一小時以上,強烈建議線上預約時段票',
      '塔下與周邊扒手較多,隨身物品請貼身收好',
      '想拍夜間閃燈需查當日日落時間,夏天要等到晚上十點後',
    ],
  },

  colosseum: {
    name: '羅馬競技場',
    mapQuery: '羅馬競技場',
    region: '歐洲',
    regionSlug: 'europe',
    parent: '熱門目的地',
    img: spotColosseum,
    eyebrow: 'ATTRACTION — COLOSSEUM',
    tagline: '兩千年前能容納五萬人的地方,現在還站在市中心',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '4—6月、9—10月' },
      { icon: 'train', label: '交通方式', value: '地鐵 B 線 Colosseo 站' },
      { icon: 'wallet', label: '門票', value: '聯票約 18 歐元' },
    ],
    intro:
      '競技場建於西元 80 年,是古羅馬帝國最具代表性的建築。今天看到的殘缺外牆並非戰爭所致,而是中世紀被當成採石場拆走了大量石材。門票通常與古羅馬廣場、帕拉丁丘綁在一起,三個景點相連,是理解羅馬城市起源最完整的一條路線。地下層與競技場地面層需另外預約導覽。',
    points: [
      { title: '地下層導覽', text: '角鬥士與猛獸等待出場的通道,需另外預約,名額有限。' },
      { title: '古羅馬廣場', text: '帝國時期的政治中心,神殿與凱旋門遺跡連成一片。' },
      { title: '帕拉丁丘', text: '俯瞰廣場全景的高地,遊客明顯較少,適合最後走。' },
    ],
    tips: [
      '門票採時段制且經常售罄,務必提前線上購買',
      '遺跡區幾乎沒有遮蔭,夏天避開中午時段',
      '地面多為碎石與不平的古道,建議穿包鞋',
    ],
  },

  santorini: {
    name: '聖托里尼',
    mapQuery: '聖托里尼',
    region: '歐洲',
    regionSlug: 'europe',
    parent: '熱門目的地',
    img: spotSantorini,
    eyebrow: 'ATTRACTION — SANTORINI',
    tagline: '火山口邊緣的藍白小鎮,愛琴海最有名的一幕',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '5—6月、9—10月' },
      { icon: 'ship', label: '交通方式', value: '雅典飛機或渡輪' },
      { icon: 'car', label: '島內交通', value: '巴士或租車' },
    ],
    intro:
      '聖托里尼其實是一座火山島的殘骸——三千多年前的大噴發把島中央炸成海灣,剩下的懸崖邊緣就是今天伊亞與費拉小鎮的所在。房子刷成白色是為了反射陽光,藍色圓頂則多半是教堂。伊亞的日落名聞遐邇,但要有心理準備:那是全島最擁擠的一小時。',
    points: [
      { title: '伊亞小鎮', text: '藍頂教堂與白色階梯層層疊疊,日落前兩小時就要卡位。' },
      { title: '費拉至伊亞健行', text: '沿火山口邊緣約 10 公里,一路都是海景,需三至四小時。' },
      { title: '紅沙灘與黑沙灘', text: '火山地質造就的特殊海灘顏色,適合安排在下午。' },
    ],
    tips: [
      '小鎮全是階梯與坡道,行李箱拖行不易,建議輕裝',
      '七、八月旺季房價可達淡季三倍,且人潮極多',
      '島上水資源珍貴,多數住宿供應的是淡化海水',
    ],
  },

  jungfraujoch: {
    name: '少女峰',
    mapQuery: '少女峰',
    region: '歐洲',
    regionSlug: 'europe',
    parent: '熱門目的地',
    img: spotJungfrau,
    eyebrow: 'ATTRACTION — JUNGFRAUJOCH',
    tagline: '搭火車直達 3,454 公尺,歐洲最高的車站',
    facts: [
      { icon: 'clock', label: '建議停留', value: '一整天' },
      { icon: 'sun', label: '最佳季節', value: '6—9月' },
      { icon: 'train', label: '交通方式', value: '茵特拉肯轉山區鐵路' },
      { icon: 'wallet', label: '門票', value: '來回車票約 210 瑞郎' },
    ],
    intro:
      '少女峰車站海拔 3,454 公尺,被稱為「歐洲屋脊」,是全歐洲最高的火車站。列車從茵特拉肯出發,經過格林德瓦或勞特布龍嫩,最後一段鑽進艾格峰山體內部,是百年前的工程奇蹟。山頂終年積雪,設有觀景台、冰宮與通往阿萊奇冰河的雪地步道——那是阿爾卑斯山最長的冰河。',
    points: [
      { title: '斯芬克斯觀景台', text: '透過電梯直上,能俯瞰阿萊奇冰河與周邊群峰。' },
      { title: '冰宮', text: '在冰河內部開鑿的通道與冰雕,全年維持零下溫度。' },
      { title: '高原雪地', text: '出站後的雪原可以踏雪、玩雪,夏天也一樣。' },
    ],
    tips: [
      '山頂含氧量低,上山後動作放慢,避免劇烈活動',
      '車票昂貴且天氣影響視野極大,出發前務必查看山頂即時影像',
      '山下是夏天、山頂是冬天,厚外套與太陽眼鏡都要帶',
    ],
  },

  /* ───────── 美加 ───────── */
  'statue-of-liberty': {
    name: '自由女神像',
    mapQuery: '自由女神像',
    region: '美加',
    regionSlug: 'america',
    parent: '熱門目的地',
    img: spotLiberty,
    eyebrow: 'ATTRACTION — STATUE OF LIBERTY',
    tagline: '法國送的禮物,成了紐約港最先看見的身影',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天' },
      { icon: 'sun', label: '最佳季節', value: '5—6月、9—10月' },
      { icon: 'ship', label: '交通方式', value: '砲台公園搭渡輪' },
      { icon: 'wallet', label: '門票', value: '渡輪含入島約 25 美元' },
    ],
    intro:
      '自由女神像是 1886 年法國贈送給美國的獨立百年賀禮,雕像內部的鋼骨結構由建造艾菲爾鐵塔的艾菲爾設計。對當年搭船抵達的移民來說,她是新生活的第一個畫面。今天從砲台公園搭渡輪上自由島,可以繞行雕像一圈,行程通常會一併停靠愛利斯島——那裡是移民檢查站舊址,現在改為博物館。',
    points: [
      { title: '基座觀景台', text: '需另外預約,可從雕像腳下俯瞰紐約港與曼哈頓天際線。' },
      { title: '皇冠登頂', text: '名額極少且需提前數月預約,要爬 162 階螺旋梯。' },
      { title: '愛利斯島移民博物館', text: '一千兩百萬名移民入境美國的第一站,展覽相當完整。' },
    ],
    tips: [
      '皇冠票常在三個月前就售罄,想登頂務必及早訂',
      '渡輪需通過安檢,建議預留排隊時間',
      '海上風大體感偏冷,秋冬前往記得加件外套',
    ],
  },

  'grand-canyon': {
    name: '大峽谷',
    mapQuery: '大峽谷國家公園',
    region: '美加',
    regionSlug: 'america',
    parent: '熱門目的地',
    img: spotGrandCanyon,
    eyebrow: 'ATTRACTION — GRAND CANYON',
    tagline: '科羅拉多河花了六百萬年,切出這道傷口',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 天' },
      { icon: 'sun', label: '最佳季節', value: '4—5月、9—10月' },
      { icon: 'car', label: '交通方式', value: '拉斯維加斯車程約 4.5 小時' },
      { icon: 'wallet', label: '門票', value: '每車 35 美元(7 日有效)' },
    ],
    intro:
      '大峽谷長 446 公里、最深處超過 1,800 公尺,裸露的岩層記錄了將近二十億年的地質史。南緣全年開放、設施完整,是九成遊客的選擇;北緣海拔更高、冬季封閉,但人少而幽靜。真正震撼的時刻通常在日出與日落——側光讓岩層的層次與顏色全部浮現出來,正午反而最平淡。',
    points: [
      { title: 'Mather Point', text: '南緣最方便抵達的觀景點,第一眼的震撼多半在這裡。' },
      { title: '光明天使步道', text: '往峽谷內下切的經典步道,量力而為,下去容易上來難。' },
      { title: '沙漠景觀瞭望塔', text: '南緣東端的石塔,可同時看見峽谷與科羅拉多河的彎道。' },
    ],
    tips: [
      '峽谷內外溫差極大,谷底可能比邊緣高出 10 度以上',
      '步道無遮蔽且乾燥,每人每天至少準備 3 公升水',
      '園區手機訊號不穩,行前先下載離線地圖',
    ],
  },

  banff: {
    name: '班夫國家公園',
    mapQuery: '班夫國家公園',
    region: '美加',
    regionSlug: 'america',
    parent: '熱門目的地',
    img: spotBanff,
    eyebrow: 'ATTRACTION — BANFF',
    tagline: '洛磯山脈的湖水,藍得不太真實',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '6—9月' },
      { icon: 'car', label: '交通方式', value: '卡加利車程約 1.5 小時' },
      { icon: 'wallet', label: '門票', value: '每人每日約 11 加幣' },
    ],
    intro:
      '班夫是加拿大第一座國家公園。露易絲湖與夢蓮湖那種近乎螢光的藍綠色,來自冰河磨蝕岩石產生的極細粉末懸浮在水中,陽光下才會顯色——所以陰天去,顏色會差很多。冰原大道連接班夫與傑士伯,沿途 230 公里幾乎每個轉彎都是風景,是北美公認最美的公路之一。',
    points: [
      { title: '露易絲湖', text: '維多利亞冰河倒映在湖面,清晨無風時最清楚。' },
      { title: '夢蓮湖', text: '十峰山谷環抱的湖泊,旺季需搭接駁車進入。' },
      { title: '冰原大道', text: '前往哥倫比亞冰原的公路,可搭雪車直接開上冰河。' },
    ],
    tips: [
      '夏季夢蓮湖禁止自駕進入,務必提前預約接駁',
      '園區內有熊出沒,健行請結伴並攜帶防熊噴霧',
      '湖水顏色取決於陽光,陰雨天的觀感落差很大',
    ],
  },

  'las-vegas': {
    name: '拉斯維加斯',
    mapQuery: '拉斯維加斯',
    region: '美加',
    regionSlug: 'america',
    parent: '熱門目的地',
    img: spotVegas,
    eyebrow: 'ATTRACTION — LAS VEGAS',
    tagline: '沙漠中憑空長出來的一條大道,整夜不熄燈',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 天' },
      { icon: 'sun', label: '最佳季節', value: '3—5月、10—11月' },
      { icon: 'plane', label: '交通方式', value: '直飛或洛杉磯轉機' },
      { icon: 'wallet', label: '費用', value: '住宿淡旺季價差極大' },
    ],
    intro:
      '拉斯維加斯大道(The Strip)不到七公里,卻塞進了世界上最密集的大型度假村。威尼斯人的運河、貝拉吉歐的音樂噴泉、凱薩宮的羅馬廊柱,把各地地標搬進沙漠複製一遍——這種不加掩飾的人造感,正是這座城市的性格。它同時也是前往大峽谷、羚羊彩穴與錫安國家公園最方便的起點。',
    points: [
      { title: '貝拉吉歐音樂噴泉', text: '每 15—30 分鐘一場,免費觀賞,夜間效果最好。' },
      { title: '費利蒙街體驗', text: '舊城區的巨型天幕燈光秀,氣氛與大道截然不同。' },
      { title: '紅岩峽谷', text: '車程僅 30 分鐘的自然保護區,適合半日健行。' },
    ],
    tips: [
      '夏季白天可達 40 度以上,戶外行程盡量避開中午',
      '度假村多半收取每日 resort fee,訂房時要留意',
      '大道上的建築看似相鄰,實際步行距離往往超過想像',
    ],
  },

  /* ───────── 紐澳 ───────── */
  'sydney-opera-house': {
    name: '雪梨歌劇院',
    mapQuery: '雪梨歌劇院',
    region: '紐澳',
    regionSlug: 'oceania',
    parent: '熱門目的地',
    img: spotOperaHouse,
    eyebrow: 'ATTRACTION — SYDNEY OPERA HOUSE',
    tagline: '像船帆也像貝殼,蓋了十四年的世界遺產',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '9—11月、3—5月' },
      { icon: 'train', label: '交通方式', value: '環形碼頭站步行 5 分鐘' },
      { icon: 'wallet', label: '導覽', value: '約 43 澳幣起' },
    ],
    intro:
      '歌劇院由丹麥建築師約恩・烏松設計,1973 年落成,前後蓋了十四年,預算超支十四倍。那組白色殼狀屋頂其實由超過一百萬片瑞典製磁磚拼成,近看會發現有兩種光澤。它同時是仍在使用中的表演場館,一年上演超過一千八百場演出——如果時間允許,買一場音樂會的票是最好的參觀方式。',
    points: [
      { title: '內部導覽', text: '走進音樂廳與歌劇院廳,講解建築背後的結構與爭議。' },
      { title: '皇家植物園步道', text: '沿海岸走到麥考利夫人角,是拍歌劇院與港灣大橋同框的最佳角度。' },
      { title: '環形碼頭夜景', text: '入夜後打光的歌劇院與跨港大橋,是雪梨的招牌畫面。' },
    ],
    tips: [
      '中文導覽場次有限,建議線上先確認時間',
      '看表演有服裝建議,但不強制正式服裝',
      '跨年煙火期間周邊會嚴格管制,需提前規劃',
    ],
  },

  'great-barrier-reef': {
    name: '大堡礁',
    mapQuery: '大堡礁',
    region: '紐澳',
    regionSlug: 'oceania',
    parent: '熱門目的地',
    img: spotReef,
    eyebrow: 'ATTRACTION — GREAT BARRIER REEF',
    tagline: '從太空看得見的活體構造,綿延兩千公里',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 天' },
      { icon: 'sun', label: '最佳季節', value: '6—10月' },
      { icon: 'plane', label: '交通方式', value: '凱恩斯或艾爾利海灘出發' },
      { icon: 'ship', label: '遊覽方式', value: '出海船一日遊' },
    ],
    intro:
      '大堡礁由近三千座獨立珊瑚礁組成,是地球上最大的活體結構,也是唯一從太空能辨識的生物構造。從凱恩斯出海約兩小時可抵達外礁平台,浮潛就能看到硬珊瑚、熱帶魚與海龜;想更深入則可選擇體驗潛水。近年白化問題受到關注,選擇有生態認證的船公司,是對這片海比較負責的做法。',
    points: [
      { title: '外礁浮潛平台', text: '固定在礁區的平台,不會游泳也能透過玻璃底船觀察。' },
      { title: '綠島與費茲羅伊島', text: '離凱恩斯較近的島嶼,適合時間有限的行程。' },
      { title: '空中遊覽', text: '小飛機俯瞰心形礁與礁群輪廓,是水下之外的另一種視角。' },
    ],
    tips: [
      '10—5月是水母季,下水需穿著防護衣',
      '為保護珊瑚,請使用不含氧苯酮的防曬產品',
      '出海航程晃動明顯,易暈船者建議提前服藥',
    ],
  },

  queenstown: {
    name: '皇后鎮',
    mapQuery: '紐西蘭皇后鎮',
    region: '紐澳',
    regionSlug: 'oceania',
    parent: '熱門目的地',
    img: spotQueenstown,
    eyebrow: 'ATTRACTION — QUEENSTOWN',
    tagline: '高空彈跳的發源地,也是南島最美的湖畔小鎮',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '11—3月、6—8月滑雪' },
      { icon: 'plane', label: '交通方式', value: '奧克蘭轉機約 2 小時' },
      { icon: 'car', label: '周邊交通', value: '建議租車' },
    ],
    intro:
      '皇后鎮坐落在瓦卡蒂普湖畔,背後是被稱為「卓越山脈」的鋸齒狀山稜。世界第一座商業高空彈跳點就在附近的卡瓦勞大橋,此後噴射快艇、滑翔傘、跳傘陸續在此發展,讓這裡成了公認的極限運動之都。不玩極限也沒關係——搭天空纜車上山看湖景,或往米佛峽灣、格林諾奇走,同樣值得。',
    points: [
      { title: '天空纜車與觀景台', text: '幾分鐘上到鮑伯峰,俯瞰整座小鎮與湖灣。' },
      { title: '卡瓦勞大橋', text: '43 公尺高的高空彈跳原點,不跳也能在觀景台看別人跳。' },
      { title: '米佛峽灣一日遊', text: '車程較長但風景極佳,峽灣遊船是南島的必訪行程。' },
    ],
    tips: [
      '米佛峽灣單程約四小時,建議選擇含導覽的一日團',
      '南半球季節相反,六至八月是滑雪旺季而非夏天',
      '山區天氣變化快,一天之內可能經歷四季',
    ],
  },

  melbourne: {
    name: '墨爾本',
    mapQuery: '澳洲墨爾本',
    region: '紐澳',
    regionSlug: 'oceania',
    parent: '熱門目的地',
    img: spotMelbourne,
    eyebrow: 'ATTRACTION — MELBOURNE',
    tagline: '巷子裡的咖啡與塗鴉,澳洲最有個性的城市',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 天' },
      { icon: 'sun', label: '最佳季節', value: '3—5月、9—11月' },
      { icon: 'plane', label: '交通方式', value: '直飛或雪梨轉機' },
      { icon: 'train', label: '市區交通', value: '市中心電車免費' },
    ],
    intro:
      '墨爾本的精華不在大馬路上,而在那些被稱為 laneway 的小巷裡——塗鴉、獨立咖啡館與小酒吧藏在其中,構成這座城市的日常。它是澳洲的咖啡之都,精品咖啡文化從這裡擴散到全世界。往城外走,大洋路的十二使徒岩與菲利普島的企鵝歸巢,是兩條最經典的一日遊路線。',
    points: [
      { title: '霍西爾巷', text: '塗鴉密度最高的巷弄,作品幾乎每個月都在更新。' },
      { title: '大洋路', text: '沿海公路直到十二使徒岩,建議兩天一夜較從容。' },
      { title: '菲利普島企鵝歸巢', text: '傍晚小藍企鵝成群上岸,需提前訂票且禁止拍照。' },
    ],
    tips: [
      '市中心電車免費區(Free Tram Zone)範圍要留意,出界需刷卡',
      '一天四季是本地人的玩笑也是事實,洋蔥式穿搭最實際',
      '大洋路當日來回車程超過十小時,能過夜會舒服很多',
    ],
  },

  /* ───────── 台北・北海岸 ───────── */
  jiufen: {
    name: '九份老街',
    mapQuery: '九份老街',
    region: '台北・北海岸',
    regionSlug: 'taipei',
    parent: '國內旅遊',
    img: spotJiufen,
    eyebrow: 'ATTRACTION — JIUFEN',
    tagline: '採金留下的山城,紅燈籠亮起時最像另一個世界',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 小時' },
      { icon: 'sun', label: '最佳時段', value: '傍晚點燈後' },
      { icon: 'bus', label: '交通方式', value: '瑞芳轉公車約 15 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '九份因日治時期的金礦而興起,礦業沒落後一度沉寂,直到電影《悲情城市》讓它重新被看見。整座聚落依山而建,基山街、豎崎路兩條主要動線串起茶樓、小吃與紀念品店。真正的看點在於高度——從觀景平台望出去,山勢一路傾斜到基隆嶼與太平洋,傍晚燈籠亮起、海面還留著餘光的那十幾分鐘最美。',
    points: [
      { title: '豎崎路階梯', text: '兩側茶樓與紅燈籠的經典畫面,是九份最常被拍的角度。' },
      { title: '阿妹茶樓', text: '層層木造建築,坐在窗邊喝茶看海,是慢下來的好方式。' },
      { title: '基山街小吃', text: '芋圓、草仔粿、魚丸羹一路吃過去,窄巷人潮總是很擠。' },
    ],
    tips: [
      '假日人潮極多且停車困難,建議搭大眾運輸前往',
      '山區多雨且濕滑,雨具比雨傘更實用',
      '多數店家傍晚就開始收攤,想吃小吃要早一點到',
    ],
  },

  yehliu: {
    name: '野柳地質公園',
    mapQuery: '野柳地質公園',
    region: '台北・北海岸',
    regionSlug: 'taipei',
    parent: '國內旅遊',
    img: spotYehliu,
    eyebrow: 'ATTRACTION — YEHLIU',
    tagline: '海水與風花了千萬年,雕出一片奇岩',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2 小時' },
      { icon: 'sun', label: '最佳時段', value: '上午,避開烈日' },
      { icon: 'bus', label: '交通方式', value: '台北客運約 1.5 小時' },
      { icon: 'wallet', label: '門票', value: '全票 120 元' },
    ],
    intro:
      '野柳是一道伸入海中的岬角,由砂岩構成。海蝕、風化與地殼運動長期作用,造出蕈狀岩、燭台石、薑石等罕見地貌。最有名的女王頭因為頸部持續變細,已被列為需要保護的對象,近年僅能在圍欄外遠觀合影。園區規劃了三區步道,由入口往岬角尖端走,岩層形態會愈來愈奇特。',
    points: [
      { title: '女王頭', text: '野柳的招牌地標,排隊拍照的隊伍往往很長。' },
      { title: '蕈狀岩群', text: '第一、二區成片的蘑菇狀岩石,是海蝕作用最直觀的教材。' },
      { title: '第三區與海蝕平台', text: '人潮較少,能同時看到海浪拍打與完整岩層剖面。' },
    ],
    tips: [
      '園區幾乎無遮蔭,夏天務必防曬與補水',
      '靠海岩石濕滑,紅線範圍外絕對不要跨越',
      '東北季風強勁的冬季,風大體感會非常冷',
    ],
  },

  yangmingshan: {
    name: '陽明山',
    mapQuery: '陽明山國家公園',
    region: '台北・北海岸',
    regionSlug: 'taipei',
    parent: '國內旅遊',
    img: spotYangmingshan,
    eyebrow: 'ATTRACTION — YANGMINGSHAN',
    tagline: '台北市區旁的火山群,一年四季各有花期',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天至一天' },
      { icon: 'sun', label: '最佳季節', value: '2—3月花季、10月芒草' },
      { icon: 'bus', label: '交通方式', value: '劍潭站搭紅5公車' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '陽明山國家公園距離台北市中心只要半小時,卻是完整的火山地形——小油坑的噴氣孔、硫磺谷的地熱,都還在活動中。二、三月的櫻花與海芋,五月的繡球花,十月的擎天崗芒草,四季各有主題。想輕鬆一點可以走花鐘、竹子湖一帶;想挑戰則有七星山主峰步道,是台北市的最高點。',
    points: [
      { title: '擎天崗草原', text: '大片緩坡草地與環形步道,秋天芒草翻白時最美。' },
      { title: '小油坑', text: '噴氣孔與硫磺結晶,可近距離感受火山活動。' },
      { title: '竹子湖', text: '三至四月的海芋田與五月繡球花,是花季的主場。' },
    ],
    tips: [
      '花季期間實施交通管制,自行開車可能無法上山',
      '山上氣溫比市區低 5—8 度,且午後常起霧',
      '硫磺區氣味濃厚,呼吸道敏感者請斟酌停留時間',
    ],
  },

  tamsui: {
    name: '淡水漁人碼頭',
    mapQuery: '淡水漁人碼頭',
    region: '台北・北海岸',
    regionSlug: 'taipei',
    parent: '國內旅遊',
    img: spotTamsui,
    eyebrow: 'ATTRACTION — TAMSUI',
    tagline: '情人橋與河口落日,台北看夕陽的第一選擇',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳時段', value: '日落前一小時' },
      { icon: 'train', label: '交通方式', value: '淡水站轉公車或渡輪' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '漁人碼頭原本是淡水河口的小漁港,改建後成了台北近郊最容易抵達的看海地點。跨港的情人橋是單塔斜張橋,入夜後打上變換的燈光。這裡的日落之所以出名,是因為河口開闊、西面無遮擋,太陽會直接沉進海平線。從淡水老街搭渡輪過來只要十分鐘,兩個景點通常會排在同一個下午。',
    points: [
      { title: '情人橋', text: '白色帆型單塔橋,傍晚與夜間燈光是拍照重點。' },
      { title: '木棧道與觀海平台', text: '沿岸步道視野開闊,是等日落最舒服的位置。' },
      { title: '淡水老街渡輪', text: '從老街碼頭搭船過來,水上視角別有一番風景。' },
    ],
    tips: [
      '河口風勢強,秋冬體感比市區冷上許多',
      '假日渡輪與公車都需排隊,建議提早出發卡位',
      '日落時間隨季節變動,冬天下午五點左右就結束了',
    ],
  },

  /* ───────── 宜蘭・花蓮 ───────── */
  taroko: {
    name: '太魯閣峽谷',
    mapQuery: '太魯閣國家公園',
    region: '宜蘭・花蓮',
    regionSlug: 'yilan-hualien',
    parent: '國內旅遊',
    img: spotTaroko,
    eyebrow: 'ATTRACTION — TAROKO',
    tagline: '立霧溪切穿大理岩,切出台灣最深的一道風景',
    facts: [
      { icon: 'clock', label: '建議停留', value: '一整天' },
      { icon: 'sun', label: '最佳季節', value: '10—4月' },
      { icon: 'car', label: '交通方式', value: '花蓮市區車程約 40 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '太魯閣峽谷是立霧溪長期下切大理岩層形成的,兩側岩壁近乎垂直,最窄處只容得下一條溪與一條路。中橫公路沿著峽谷開鑿,本身就是一段艱鉅的工程史。燕子口、九曲洞是最能感受峽谷尺度的兩段步道;長春祠與白楊步道則各有瀑布景觀。園區步道常因落石或颱風封閉,出發前務必先查詢開放狀況。',
    points: [
      { title: '燕子口步道', text: '壺穴地形與湧泉,對岸岩壁上的洞孔是燕子築巢處。' },
      { title: '九曲洞', text: '公路在岩壁中蜿蜒鑿出的隧道,峽谷最深最窄的一段。' },
      { title: '長春祠', text: '飛瀑從祠後傾瀉而下,是紀念中橫開路殉職人員的所在。' },
    ],
    tips: [
      '園區規定步道須全程配戴安全帽,入口有免費提供',
      '地質破碎,雨後與地震後容易封閉,務必先查最新公告',
      '峽谷內手機訊號不穩,行前先確認集合時間與地點',
    ],
  },

  'qingshui-cliff': {
    name: '清水斷崖',
    mapQuery: '清水斷崖',
    region: '宜蘭・花蓮',
    regionSlug: 'yilan-hualien',
    parent: '國內旅遊',
    img: spotQingshui,
    eyebrow: 'ATTRACTION — QINGSHUI CLIFF',
    tagline: '公路貼著千米海崖而行,一邊是山一邊是太平洋',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 小時' },
      { icon: 'sun', label: '最佳時段', value: '上午順光' },
      { icon: 'car', label: '交通方式', value: '蘇花公路自駕或包車' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '清水斷崖是清水山東側直接落入太平洋的岩壁,落差超過八百公尺,是台灣最具代表性的海岸地形之一。蘇花公路沿著崖壁開闢,匯德觀景台與崇德步道是兩個能安全停車、完整看見崖線的位置。海水因為深度變化呈現層次分明的藍,上午順光時顏色最飽和。近年也可以選擇搭獨木舟或 SUP 從海上仰望崖壁。',
    points: [
      { title: '匯德觀景平台', text: '最經典的俯瞰角度,能同時看見公路、崖壁與海。' },
      { title: '崇德瑩農場', text: '草地與海景相接,是近年很受歡迎的拍照地點。' },
      { title: '海上獨木舟', text: '清晨從崇德海灘出發,從水面仰望八百公尺崖壁。' },
    ],
    tips: [
      '蘇花公路彎道多,不建議自駕新手在夜間或雨天行駛',
      '觀景台停車位有限,假日常需等候',
      '海上活動受浪況影響大,行程可能臨時取消',
    ],
  },

  qixingtan: {
    name: '七星潭',
    mapQuery: '七星潭風景區',
    region: '宜蘭・花蓮',
    regionSlug: 'yilan-hualien',
    parent: '國內旅遊',
    img: spotQixingtan,
    eyebrow: 'ATTRACTION — QIXINGTAN',
    tagline: '弧線優美的礫石海灣,聽浪比看海更迷人',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 小時' },
      { icon: 'sun', label: '最佳時段', value: '清晨日出或黃昏' },
      { icon: 'car', label: '交通方式', value: '花蓮市區車程約 15 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '七星潭其實不是潭,而是一道長達二十多公里的新月形海灣。海灘由大小不一的礫石構成,浪打上來再退回時會發出獨特的沙沙聲。因為地形陡降,離岸幾公尺水深就急遽增加——這也是這裡嚴禁戲水的原因。天氣好時可以看見清水斷崖的稜線,清晨則是花蓮看日出最方便的地點。',
    points: [
      { title: '賞星廣場', text: '主要的觀海平台,有停車場與自行車道相連。' },
      { title: '沿岸自行車道', text: '從市區一路騎到七星潭,是花蓮最舒服的一段路。' },
      { title: '曼波園區', text: '灣區北端,人潮較少,能安靜地看海聽浪。' },
    ],
    tips: [
      '海底地形陡降且暗流強勁,嚴禁下水戲水',
      '礫石灘行走不易,建議穿著包鞋',
      '撿拾石頭帶走是違規行為,請留在原地',
    ],
  },

  jiaoxi: {
    name: '礁溪溫泉',
    mapQuery: '礁溪溫泉',
    region: '宜蘭・花蓮',
    regionSlug: 'yilan-hualien',
    parent: '國內旅遊',
    img: spotJiaoxi,
    eyebrow: 'ATTRACTION — JIAOXI',
    tagline: '平原上少見的碳酸氫鈉泉,泡完皮膚滑滑的',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天至一晚' },
      { icon: 'sun', label: '最佳季節', value: '10—3月' },
      { icon: 'train', label: '交通方式', value: '台北車程約 50 分鐘' },
      { icon: 'wallet', label: '費用', value: '湯屋約 500—1,500 元' },
    ],
    intro:
      '礁溪的溫泉屬碳酸氫鈉泉,無色無味、酸鹼度接近中性,泡後皮膚會有滑順感,俗稱美人湯。它罕見地湧出在平原而非山區,因此整座市鎮就建在泉源之上,從車站走幾分鐘就能找到湯屋。除了付費湯屋,市區也有免費的足湯公園。冬天泡湯配上宜蘭的濕冷空氣,是最舒服的季節組合。',
    points: [
      { title: '湯圍溝溫泉公園', text: '市區內的免費足湯,旁邊就是老街與小吃。' },
      { title: '五峰旗瀑布', text: '車程十分鐘的三層瀑布,適合泡湯前先走一段。' },
      { title: '林美石磐步道', text: '低海拔的森林溪谷步道,全程約一小時。' },
    ],
    tips: [
      '空腹、酒後與剛用餐後都不適合泡湯',
      '單次浸泡建議 15 分鐘內,起身時動作放慢',
      '心血管疾病與孕婦泡湯前請先諮詢醫師',
    ],
  },

  /* ───────── 台中・南投 ───────── */
  'sun-moon-lake': {
    name: '日月潭',
    mapQuery: '日月潭',
    region: '台中・南投',
    regionSlug: 'taichung-nantou',
    parent: '國內旅遊',
    img: spotSunMoonLake,
    eyebrow: 'ATTRACTION — SUN MOON LAKE',
    tagline: '台灣最大的天然湖,晨霧散開時像一幅水墨',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 天' },
      { icon: 'sun', label: '最佳時段', value: '清晨薄霧' },
      { icon: 'car', label: '交通方式', value: '台中車程約 1.5 小時' },
      { icon: 'ship', label: '遊湖', value: '船票約 300 元' },
    ],
    intro:
      '日月潭的名字來自它的形狀——北側圓如日、南側彎如月,中間隔著拉魯島。環湖公路約三十公里,自行車道更被評為世界最美的路線之一。清晨常起霧,水面與遠山之間會浮出一層白,是攝影者最想捕捉的時刻。搭遊船可在水社、玄光寺、伊達邵三個碼頭間往返,伊達邵一帶保留了邵族的文化與市集。',
    points: [
      { title: '向山遊客中心', text: '清水模建築與懸臂式觀景平台,是湖區的建築亮點。' },
      { title: '環湖自行車道', text: '水社到向山的一段最平緩,租車即可輕鬆完成。' },
      { title: '日月潭纜車', text: '空中俯瞰整座湖,可轉往九族文化村。' },
    ],
    tips: [
      '清晨的霧與倒影最美,住一晚才趕得上',
      '環湖公路自行車與汽車共道,騎乘請靠右並注意來車',
      '假日遊船與纜車排隊時間長,建議提早或選平日',
    ],
  },

  hehuanshan: {
    name: '合歡山',
    mapQuery: '合歡山',
    region: '台中・南投',
    regionSlug: 'taichung-nantou',
    parent: '國內旅遊',
    img: spotHehuan,
    eyebrow: 'ATTRACTION — HEHUANSHAN',
    tagline: '開車就能上三千公尺,台灣最容易親近的高山',
    facts: [
      { icon: 'clock', label: '建議停留', value: '一整天' },
      { icon: 'sun', label: '最佳季節', value: '5—6月杜鵑、12—2月雪季' },
      { icon: 'car', label: '交通方式', value: '埔里車程約 2 小時' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '合歡山之所以特別,在於台十四甲線可以直接開到武嶺——海拔 3,275 公尺,是台灣公路的最高點。這讓一般人不必長途跋涉就能站上高山,看見雲海與箭竹坡。主峰、東峰、石門山三條步道都在一小時內可完成。五、六月玉山杜鵑盛開,冬季寒流來時則可能積雪,也是台灣少數能看到雪的地方。',
    points: [
      { title: '武嶺觀景台', text: '公路最高點,雲海與日出的經典位置。' },
      { title: '石門山步道', text: '單程僅 800 公尺,是最輕鬆的百岳。' },
      { title: '暗空公園觀星', text: '光害極低,晴朗夜晚的銀河清晰可見。' },
    ],
    tips: [
      '高海拔可能出現高山症,上山後避免劇烈運動',
      '山區天氣多變,夏天山上也僅十度上下',
      '雪季需加掛雪鏈並留意公路封閉公告',
    ],
  },

  cingjing: {
    name: '清境農場',
    mapQuery: '清境農場',
    region: '台中・南投',
    regionSlug: 'taichung-nantou',
    parent: '國內旅遊',
    img: spotCingjing,
    eyebrow: 'ATTRACTION — CINGJING',
    tagline: '海拔一千七百公尺的草原,綿羊在雲霧裡吃草',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天至一天' },
      { icon: 'sun', label: '最佳季節', value: '全年,夏季最舒適' },
      { icon: 'car', label: '交通方式', value: '埔里車程約 1 小時' },
      { icon: 'wallet', label: '門票', value: '全票 200 元' },
    ],
    intro:
      '清境農場位在海拔約一千七百公尺的緩坡上,夏季均溫二十度左右,是避暑的熱門去處。青青草原的綿羊放牧與剪羊毛秀是招牌節目,高空觀景步道則沿著山稜架設,可一路俯瞰群山與雲海。因為位置在通往合歡山的路上,多數人會把兩個景點排在同一趟行程裡,住一晚清境、隔天清晨上武嶺看日出。',
    points: [
      { title: '青青草原', text: '綿羊放牧區與草坡,剪羊毛秀每天固定場次。' },
      { title: '高空觀景步道', text: '架高的環山步道,全長約 1.2 公里,雲海時視野極佳。' },
      { title: '小瑞士花園', text: '歐風造景與水池,夜間點燈另有氣氛。' },
    ],
    tips: [
      '山路彎多且陡,容易暈車者建議坐前座並備藥',
      '日夜溫差大,即使夏天晚上也需要外套',
      '假日民宿一房難求,旺季建議提前一個月訂房',
    ],
  },

  gaomei: {
    name: '高美濕地',
    mapQuery: '高美濕地',
    region: '台中・南投',
    regionSlug: 'taichung-nantou',
    parent: '國內旅遊',
    img: spotGaomei,
    eyebrow: 'ATTRACTION — GAOMEI',
    tagline: '木棧道盡頭的潮間帶,把夕陽整片倒映在水上',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2 小時' },
      { icon: 'sun', label: '最佳時段', value: '日落前 1.5 小時' },
      { icon: 'car', label: '交通方式', value: '台中市區車程約 50 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '高美濕地是大甲溪出海口淤積形成的潮間帶,面積約三百公頃,擁有雲林莞草、招潮蟹與多種水鳥。它出名的原因在於退潮時薄薄一層水覆蓋在泥灘上,把天空與風車完整倒映出來,傍晚逆光時像一面巨大的鏡子。木棧道延伸進濕地約七百公尺,是唯一開放行走的區域,漲潮前會依規定管制關閉。',
    points: [
      { title: '木棧道', text: '深入濕地的唯一路線,盡頭是最佳的觀景與拍攝位置。' },
      { title: '風車與夕陽', text: '海岸風力發電機組與落日同框,是高美的招牌畫面。' },
      { title: '潮間帶生態', text: '退潮時可觀察招潮蟹與彈塗魚,但不得捕捉。' },
    ],
    tips: [
      '木棧道會依潮汐時間管制,出發前務必查詢當日開放時段',
      '海風強勁且無遮蔽,帽子容易被吹走',
      '濕地為保育區,請勿踩踏泥灘或帶走任何生物',
    ],
  },

  /* ───────── 台南・高雄 ───────── */
  anping: {
    name: '安平老街',
    mapQuery: '安平老街',
    region: '台南・高雄',
    regionSlug: 'tainan-kaohsiung',
    parent: '國內旅遊',
    img: spotAnping,
    eyebrow: 'ATTRACTION — ANPING',
    tagline: '台灣最早的市街,四百年歷史都擠在這幾條巷子裡',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 小時' },
      { icon: 'sun', label: '最佳季節', value: '10—3月' },
      { icon: 'bus', label: '交通方式', value: '台南車站搭公車約 30 分鐘' },
      { icon: 'wallet', label: '門票', value: '古堡與樹屋各 70 元' },
    ],
    intro:
      '安平是荷蘭人一六二四年登陸建城的地方,也是台灣最早發展的市街。安平古堡的前身熱蘭遮城、億載金城的砲台、以及被榕樹氣根整個包覆的安平樹屋,把不同時期的歷史層層疊在同一區。延平街是台灣第一條商業街,如今兩側是蜜餞、蝦餅與豆花老鋪,邊走邊吃是最自然的逛法。',
    points: [
      { title: '安平樹屋', text: '百年榕樹與廢棄倉庫共生,氣根穿牆而過,像被自然收回去。' },
      { title: '安平古堡', text: '熱蘭遮城遺構與瞭望塔,城牆殘壁仍看得出當年輪廓。' },
      { title: '延平街', text: '台灣第一街,蜜餞與蝦餅老店密集。' },
    ],
    tips: [
      '樹屋與古堡步行可達,建議安排在同一段時間',
      '台南日照強,夏天午後最好安排室內或樹蔭行程',
      '老街店家多在傍晚打烊,想吃小吃別太晚到',
    ],
  },

  'chimei-museum': {
    name: '奇美博物館',
    mapQuery: '奇美博物館',
    region: '台南・高雄',
    regionSlug: 'tainan-kaohsiung',
    parent: '國內旅遊',
    img: spotChimei,
    eyebrow: 'ATTRACTION — CHIMEI MUSEUM',
    tagline: '一座企業家蓋的西洋殿堂,收藏量意外地驚人',
    facts: [
      { icon: 'clock', label: '建議停留', value: '3—4 小時' },
      { icon: 'sun', label: '最佳季節', value: '全年(室內)' },
      { icon: 'train', label: '交通方式', value: '保安車站步行約 15 分鐘' },
      { icon: 'wallet', label: '門票', value: '常設展 200 元' },
    ],
    intro:
      '奇美博物館由奇美實業創辦人許文龍創立,二〇一五年遷入台南都會公園內的新館。白色古典建築、阿波羅噴泉與奧林帕斯橋構成的入口軸線,本身就是台南最上鏡的場景之一。館藏以西洋藝術、樂器、兵器與自然史為主,其中小提琴收藏量居世界前列,包含多把史特拉底瓦里名琴。',
    points: [
      { title: '樂器廳', text: '世界級的提琴收藏,部分名琴仍出借給演奏家使用。' },
      { title: '動物廳', text: '大型生態場景與標本,很受親子觀眾歡迎。' },
      { title: '戶外園區', text: '噴泉、橋與草坪皆免費開放,傍晚光線最柔和。' },
    ],
    tips: [
      '採線上預約制,現場不一定買得到票',
      '館藏規模大,三小時只夠走完主要展廳',
      '戶外園區免費但幾乎無遮蔭,夏天建議先進館',
    ],
  },

  'lotus-pond': {
    name: '蓮池潭',
    mapQuery: '高雄蓮池潭',
    region: '台南・高雄',
    regionSlug: 'tainan-kaohsiung',
    parent: '國內旅遊',
    img: spotLotusPond,
    eyebrow: 'ATTRACTION — LOTUS POND',
    tagline: '龍口進、虎口出,湖畔廟宇群的南國地標',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳時段', value: '傍晚較涼爽' },
      { icon: 'train', label: '交通方式', value: '左營站步行約 15 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '蓮池潭是高雄左營的人工湖,清代因湖中遍植蓮花而得名。環湖聚集了龍虎塔、春秋閣、五里亭等大量廟宇建築,色彩鮮豔、造型繁複,構成南台灣獨特的宗教景觀。龍虎塔的傳統是從龍口進、虎口出,取「化凶為吉」之意。環湖步道與自行車道約五公里,傍晚時分是當地人散步的路線。',
    points: [
      { title: '龍虎塔', text: '塔身彩繪與塔內壁畫都值得細看,記得龍進虎出。' },
      { title: '春秋閣與騎龍觀音', text: '雙塔與水上觀音像,是蓮池潭最經典的合影點。' },
      { title: '環湖步道', text: '五公里的湖畔路線,可租借自行車輕鬆繞完。' },
    ],
    tips: [
      '部分建築為宗教場所,參觀時請留意禮儀與服裝',
      '湖畔遮蔭少,夏日中午非常曬',
      '距離左營高鐵站很近,適合安排在行程首尾',
    ],
  },

  'pier-2': {
    name: '駁二藝術特區',
    mapQuery: '駁二藝術特區',
    region: '台南・高雄',
    regionSlug: 'tainan-kaohsiung',
    parent: '國內旅遊',
    img: spotPier2,
    eyebrow: 'ATTRACTION — PIER-2',
    tagline: '港邊倉庫變成展場,高雄最會玩的一區',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天' },
      { icon: 'sun', label: '最佳時段', value: '午後至傍晚' },
      { icon: 'train', label: '交通方式', value: '輕軌駁二大義站' },
      { icon: 'wallet', label: '門票', value: '園區免費,展覽另計' },
    ],
    intro:
      '駁二原是高雄港的閒置倉庫群,二〇〇六年起陸續改造成藝文空間,如今分為大勇、蓬萊、大義三個區塊,涵蓋展覽館、獨立書店、餐飲與設計選物店。戶外散布著大型公共藝術,鐵道倉庫與輕軌穿過園區,構成工業感的背景。傍晚走到最外側的海邊,可以看見貨櫃碼頭與夕陽,是高雄港最直接的一面。',
    points: [
      { title: '大型公共藝術', text: '工人、機械與變形金剛等裝置散布園區,是拍照重點。' },
      { title: '哈瑪星鐵道園區', text: '保留的舊鐵軌與大片草地,適合傍晚散步。' },
      { title: '棧貳庫', text: '緊鄰港邊的倉庫商場,可搭乘渡輪往旗津。' },
    ],
    tips: [
      '園區腹地大,建議租借自行車串連三個區塊',
      '展覽多為獨立售票,可先查詢當期檔期',
      '假日人潮多,停車不易,搭輕軌最方便',
    ],
  },

  /* ───────── 墾丁・屏東 ───────── */
  baishawan: {
    name: '白沙灣',
    mapQuery: '墾丁白沙灣',
    region: '墾丁・屏東',
    regionSlug: 'kenting',
    parent: '國內旅遊',
    img: spotBaisha,
    eyebrow: 'ATTRACTION — BAISHAWAN',
    tagline: '貝殼砂堆成的細白海灘,墾丁水最清的一段',
    facts: [
      { icon: 'clock', label: '建議停留', value: '2—3 小時' },
      { icon: 'sun', label: '最佳季節', value: '4—10月' },
      { icon: 'car', label: '交通方式', value: '恆春車程約 20 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費(停車另計)' },
    ],
    intro:
      '白沙灣位在恆春半島西側,長約五百公尺。這裡的沙是由貝殼與珊瑚碎屑磨成的,顆粒細白、踩起來不燙腳,和一般的石英砂海灘明顯不同。因為位置背風、坡度平緩,水質清澈度是墾丁一帶最好的,浮潛與水上活動都集中在此。《少年 Pi 的奇幻漂流》曾在這片沙灘取景。',
    points: [
      { title: '浮潛區', text: '近岸即可看到珊瑚與熱帶魚,適合初學者。' },
      { title: '沙灘散步', text: '傍晚人潮散去後,是欣賞夕陽最舒服的時段。' },
      { title: '水上活動', text: '香蕉船、拖曳傘等,現場均有業者提供。' },
    ],
    tips: [
      '沿岸有離岸流,務必在救生員視線範圍內活動',
      '請使用友善珊瑚的防曬產品',
      '10—3月受東北季風影響,水溫與風況都不適合下水',
    ],
  },

  eluanbi: {
    name: '鵝鑾鼻燈塔',
    mapQuery: '鵝鑾鼻燈塔',
    region: '墾丁・屏東',
    regionSlug: 'kenting',
    parent: '國內旅遊',
    img: spotEluanbi,
    eyebrow: 'ATTRACTION — ELUANBI',
    tagline: '台灣最南端的白色燈塔,一百四十年沒熄過',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 小時' },
      { icon: 'sun', label: '最佳時段', value: '上午或傍晚' },
      { icon: 'car', label: '交通方式', value: '墾丁大街車程約 20 分鐘' },
      { icon: 'wallet', label: '門票', value: '全票 60 元' },
    ],
    intro:
      '鵝鑾鼻燈塔建於一八八三年,是台灣唯一的武裝燈塔——當年為防範原住民與海盜,塔身設有槍眼與壕溝,至今仍能看見遺跡。它的光照射距離超過二十海里,被稱為「東亞之光」。園區內有珊瑚礁隆起形成的步道與奇岩,走到最外圈可以看見巴士海峽與太平洋在此交會。',
    points: [
      { title: '燈塔本體', text: '白色圓形塔身與周邊草坪,是墾丁最具代表性的合影點。' },
      { title: '濱海步道', text: '穿過珊瑚礁林,可抵達看海平台。' },
      { title: '台灣最南點', text: '距離燈塔約十分鐘車程,另有標誌可留影。' },
    ],
    tips: [
      '園區有開放時間,傍晚較早關閉,勿太晚前往',
      '步道多為珊瑚礁岩,凹凸不平且濕滑,建議穿包鞋',
      '海邊紫外線極強,防曬與飲水要充足',
    ],
  },

  longpan: {
    name: '龍磐草原',
    mapQuery: '龍磐公園',
    region: '墾丁・屏東',
    regionSlug: 'kenting',
    parent: '國內旅遊',
    img: spotLongpan,
    eyebrow: 'ATTRACTION — LONGPAN',
    tagline: '崖上的草坡直接接上太平洋,晚上是滿天星',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1 小時' },
      { icon: 'sun', label: '最佳時段', value: '日出、日落與夜間觀星' },
      { icon: 'car', label: '交通方式', value: '鵝鑾鼻車程約 10 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '龍磐是隆起的珊瑚礁台地,因為長年受落山風吹襲,樹木難以生長,只留下大片低矮草原。草坡一路延伸到崖邊,下方就是垂直落入太平洋的斷崖,視野毫無遮擋。這裡沒有路燈與建築,光害極低,是墾丁最好的觀星地點,夏季晴朗的夜晚可以清楚看見銀河。',
    points: [
      { title: '崖邊草原', text: '無遮擋的海景,是墾丁看日出的最佳位置之一。' },
      { title: '夜間觀星', text: '光害極低,夏季銀河清晰,建議帶野餐墊躺著看。' },
      { title: '石灰岩地形', text: '草原上散布崩崖、滲穴等特殊地貌。' },
    ],
    tips: [
      '崖邊無護欄,務必與邊緣保持安全距離',
      '落山風季節(10—3月)風力極強,站立都會不穩',
      '夜間無照明,務必攜帶手電筒並結伴前往',
    ],
  },

  xiaoliuqiu: {
    name: '小琉球',
    mapQuery: '小琉球',
    region: '墾丁・屏東',
    regionSlug: 'kenting',
    parent: '國內旅遊',
    img: spotXiaoliuqiu,
    eyebrow: 'ATTRACTION — XIAOLIUQIU',
    tagline: '台灣唯一的珊瑚礁島,下水就能遇見海龜',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1—2 天' },
      { icon: 'sun', label: '最佳季節', value: '4—10月' },
      { icon: 'ship', label: '交通方式', value: '東港搭船約 30 分鐘' },
      { icon: 'wallet', label: '船票', value: '來回約 450 元' },
    ],
    intro:
      '小琉球是台灣唯一由珊瑚礁構成的離島,面積約六・八平方公里,環島公路僅十二公里,租機車一小時就能繞完。它最出名的是綠蠵龜——因為周邊海草豐富,海龜密度極高,即使只是在美人洞或蛤板灣附近浮潛,遇見的機率也相當大。島上還有花瓶岩、烏鬼洞等珊瑚礁侵蝕地形。',
    points: [
      { title: '花瓶岩', text: '島上最著名的地標,礁岩頂端長滿植物,像插了花的瓶子。' },
      { title: '浮潛尋龜', text: '多數潛店提供含裝備與教練的行程,遇龜機率高。' },
      { title: '蛤板灣', text: '又稱威尼斯海灘,是島上少見的貝殼砂灘,夕陽極美。' },
    ],
    tips: [
      '海龜為保育類,禁止觸摸、追逐或使用閃光燈',
      '請使用不含化學防曬劑的產品,島上已有相關倡議',
      '旺季船班與民宿都需提前預訂,當天不一定買得到票',
    ],
  },

  /* ───────── 澎湖・離島 ───────── */
  'double-heart': {
    name: '雙心石滬',
    mapQuery: '七美雙心石滬',
    region: '澎湖・離島',
    regionSlug: 'penghu',
    parent: '國內旅遊',
    img: spotDoubleHeart,
    eyebrow: 'ATTRACTION — DOUBLE HEART',
    tagline: '先民用石頭堆出的陷阱,剛好是兩顆心',
    facts: [
      { icon: 'clock', label: '建議停留', value: '1 小時' },
      { icon: 'sun', label: '最佳時段', value: '退潮前後' },
      { icon: 'ship', label: '交通方式', value: '馬公搭船轉七美島' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '石滬是澎湖傳統的捕魚設施——在潮間帶用玄武岩與珊瑚礁堆砌成弧形石牆,漲潮時魚群隨海水進入,退潮後就被困在滬內。七美這座石滬因為兩個集魚區恰好形成雙心形狀而聞名,已有超過七百年歷史。它是目前保存最完整、也是澎湖最上鏡的一座,退潮時整個心形輪廓會完整浮出水面。',
    points: [
      { title: '觀景平台', text: '從崖上俯瞰是唯一能看見完整雙心形狀的角度。' },
      { title: '潮汐變化', text: '退潮時石牆全露、漲潮時只剩弧線,兩種樣貌都值得看。' },
      { title: '七美環島', text: '與望夫石、小台灣等景點串成半日環島路線。' },
    ],
    tips: [
      '心形是否完整取決於潮汐,出發前務必查詢潮汐表',
      '石滬為文化資產,禁止踩踏或搬動石塊',
      '觀景台無遮蔭,夏季正午非常曬',
    ],
  },

  qimei: {
    name: '七美嶼',
    mapQuery: '澎湖七美嶼',
    region: '澎湖・離島',
    regionSlug: 'penghu',
    parent: '國內旅遊',
    img: spotQimei,
    eyebrow: 'ATTRACTION — QIMEI',
    tagline: '澎湖最南的島,草原一路鋪到海崖邊',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天至一天' },
      { icon: 'sun', label: '最佳季節', value: '4—9月' },
      { icon: 'ship', label: '交通方式', value: '馬公搭船約 1 小時' },
      { icon: 'car', label: '島內交通', value: '租機車環島' },
    ],
    intro:
      '七美是澎湖群島最南端的島嶼,名字來自明代七位女子投井殉節的傳說。全島以玄武岩台地為主,四周被海蝕崖環繞,環島公路約十四公里,租機車一個多小時就能繞完。除了雙心石滬,還有小台灣、望夫石、龍埕等因海蝕形成的特殊地貌,幾乎每個轉彎都能停下來看海。',
    points: [
      { title: '小台灣', text: '海蝕平台的輪廓神似台灣島,是島上熱門的合影點。' },
      { title: '望夫石', text: '崖邊岩體形似仰臥的孕婦,配上傳說更添故事性。' },
      { title: '大獅風景區', text: '玄武岩柱與海蝕溝,是七美地質最壯觀的一段。' },
    ],
    tips: [
      '船班受海象影響大,冬季常停航',
      '島上加油站有限,租車時先確認油量',
      '環島公路無遮蔽,防曬與飲水務必準備充足',
    ],
  },

  jibei: {
    name: '吉貝沙尾',
    mapQuery: '吉貝嶼',
    region: '澎湖・離島',
    regionSlug: 'penghu',
    parent: '國內旅遊',
    img: spotJibei,
    eyebrow: 'ATTRACTION — JIBEI',
    tagline: '一條沙嘴伸進海裡,兩側都是透明的海水',
    facts: [
      { icon: 'clock', label: '建議停留', value: '半天' },
      { icon: 'sun', label: '最佳季節', value: '5—9月' },
      { icon: 'ship', label: '交通方式', value: '赤崁碼頭搭船約 20 分鐘' },
      { icon: 'wallet', label: '船票', value: '來回約 300 元' },
    ],
    intro:
      '吉貝沙尾是由貝殼砂與珊瑚碎屑堆積形成的沙嘴,長達七百多公尺,像一條白色的舌頭伸進海中。因為兩側水深不同,海水會呈現深淺不一的藍綠色,是澎湖最具代表性的畫面之一。這裡也是水上活動最密集的地方,香蕉船、水上摩托車與浮潛都能一次滿足。沙嘴的形狀會隨季節與風向緩慢改變。',
    points: [
      { title: '沙尾步道', text: '沿沙嘴走到最末端,兩側都是海,視野極開闊。' },
      { title: '水上活動', text: '島上業者多提供套裝行程,含船票與多項活動。' },
      { title: '環島探訪', text: '吉貝村的老屋與石滬群,離開沙灘後值得走走。' },
    ],
    tips: [
      '沙尾末端有暗流,請勿超出安全範圍游泳',
      '貝殼砂不可帶走,違者可依法開罰',
      '冬季船班大減且風浪大,旺季集中在夏天',
    ],
  },

  'penghu-bridge': {
    name: '澎湖跨海大橋',
    mapQuery: '澎湖跨海大橋',
    region: '澎湖・離島',
    regionSlug: 'penghu',
    parent: '國內旅遊',
    img: spotPenghuBridge,
    eyebrow: 'ATTRACTION — PENGHU BRIDGE',
    tagline: '連起白沙與西嶼,曾是遠東最長的跨海大橋',
    facts: [
      { icon: 'clock', label: '建議停留', value: '30 分鐘' },
      { icon: 'sun', label: '最佳時段', value: '日落時分' },
      { icon: 'car', label: '交通方式', value: '馬公車程約 40 分鐘' },
      { icon: 'wallet', label: '門票', value: '免費' },
    ],
    intro:
      '澎湖跨海大橋橫跨吼門水道,連接白沙島與西嶼,一九七〇年通車時是遠東最長的跨海大橋。這道水道的海流極為湍急,建橋前兩島往來只能靠船,遇上風浪就得中斷。現在的橋體是一九九六年改建後的版本,橋頭的白色拱門是最經典的合影位置,傍晚時分逆光的剪影特別漂亮。',
    points: [
      { title: '橋頭拱門', text: '刻有「澎湖跨海大橋」字樣的白色圓拱,是必拍地標。' },
      { title: '通梁古榕', text: '橋東側的三百年古榕,樹冠覆蓋整個廟埕。' },
      { title: '西嶼延伸行程', text: '過橋後可續往大菓葉柱狀玄武岩與西嶼西臺。' },
    ],
    tips: [
      '橋上禁止停車拍照,請至兩端停車場再步行',
      '吼門水道風勢強勁,行走時注意站穩',
      '順遊通梁古榕的仙人掌冰,是當地名產',
    ],
  },
}
