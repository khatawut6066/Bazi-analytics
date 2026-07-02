const elements = {
  WOOD: { th: "ไม้", color: "#10b981", supports: "WATER", controls: "METAL" },
  FIRE: { th: "ไฟ", color: "#ef4444", supports: "WOOD", controls: "WATER" },
  EARTH: { th: "ดิน", color: "#f59e0b", supports: "FIRE", controls: "WOOD" },
  METAL: { th: "ทอง", color: "#94a3b8", supports: "EARTH", controls: "FIRE" },
  WATER: { th: "น้ำ", color: "#3b82f6", supports: "METAL", controls: "EARTH" },
};

const dayMasters = [
  { stem: "甲", name: "Jia Wood", symbol: "ต้นไม้ใหญ่", element: "WOOD", essence: "พลังนำทาง เติบโต มั่นคง" },
  { stem: "乙", name: "Yi Wood", symbol: "ดอกไม้เถาวัลย์", element: "WOOD", essence: "อ่อนโยน ปรับตัวเก่ง" },
  { stem: "丙", name: "Bing Fire", symbol: "ดวงอาทิตย์", element: "FIRE", essence: "เปิดเผย สร้างแรงบันดาลใจ" },
  { stem: "丁", name: "Ding Fire", symbol: "เปลวเทียน", element: "FIRE", essence: "ละเอียดอ่อน สร้างสรรค์" },
  { stem: "戊", name: "Wu Earth", symbol: "ภูเขา", element: "EARTH", essence: "มั่นคง รับผิดชอบ" },
  { stem: "己", name: "Ji Earth", symbol: "ผืนดิน", element: "EARTH", essence: "ดูแล หล่อเลี้ยง" },
  { stem: "庚", name: "Geng Metal", symbol: "โลหะแกร่ง", element: "METAL", essence: "เด็ดขาด มีระเบียบในแบบของตัวเอง" },
  { stem: "辛", name: "Xin Metal", symbol: "อัญมณี", element: "METAL", essence: "ประณีต มีมาตรฐาน" },
  { stem: "壬", name: "Ren Water", symbol: "มหาสมุทร", element: "WATER", essence: "กว้างไกล ฉลาดยืดหยุ่น" },
  { stem: "癸", name: "Gui Water", symbol: "สายฝน", element: "WATER", essence: "ลึกซึ้ง สังเกตเก่ง" },
];

const premiumVoice = {
  masters: {
    甲: {
      title: "The Sacred Tree",
      name: "ต้นไม้ใหญ่",
      image: "ต้นไม้ใหญ่ที่หยั่งรากลึก",
      tagline: "ผู้เติบโตด้วยหลักการ และเป็นร่มเงาให้โลกได้พักใจ",
      essence: "หัวใจของคุณมีจังหวะของการเติบโตระยะยาว ไม่รีบผลิบานแบบฉาบฉวย แต่ค่อย ๆ สร้างราก สร้างหลัก และสร้างพื้นที่ให้สิ่งสำคัญยืนอยู่ได้อย่างสง่างาม",
      caution: "เมื่อใจยึดความถูกต้องมากเกินไป ลองเผื่อพื้นที่ให้ความยืดหยุ่น เพราะบางครั้งกิ่งไม้ที่โอนอ่อนคือกิ่งที่ผ่านลมแรงได้ดีที่สุด",
    },
    乙: {
      title: "The Graceful Vine",
      name: "เถาวัลย์แห่งความงามและการปรับตัว",
      image: "ดอกไม้เถาวัลย์ที่เลื้อยเข้าหาแสง",
      tagline: "ผู้เติบโตผ่านความสัมพันธ์ ความละเมียด และจังหวะที่อ่อนโยน",
      essence: "คุณมีความนุ่มนวลที่ไม่ใช่ความอ่อนแอ แต่เป็นปัญญาของคนที่อ่านทิศลมเป็น รู้จักประคองบรรยากาศ และค่อย ๆ ทำให้พื้นที่รอบตัวมีชีวิตขึ้นมา",
      caution: "ความเกรงใจเป็นความงามอย่างหนึ่ง แต่เสียงของคุณก็ควรมีที่ยืน ฝึกพูดความต้องการด้วยถ้อยคำสั้น ๆ และจริงใจ",
    },
    丙: {
      title: "The Radiant Sun",
      name: "ดวงอาทิตย์แห่งการปลุกชีวิต",
      image: "แสงอาทิตย์ที่เปิดฟ้าให้โลกเห็นทาง",
      tagline: "ผู้ทำให้โลกสว่างขึ้นด้วยความจริงใจ วิสัยทัศน์ และแรงบันดาลใจ",
      essence: "คุณมีไฟที่อยากแบ่งปันให้โลก ไม่ว่าจะเป็นความหวัง ความรู้ หรือความกล้าที่ทำให้ผู้คนจำได้ว่าชีวิตยังมีความเป็นไปได้",
      caution: "แสงที่สว่างมากควรมีเวลาพักด้วย อย่าให้การพิสูจน์ตัวเองกลายเป็นความร้อนที่เผาหัวใจของคุณเอง",
    },
    丁: {
      title: "The Guide Light",
      name: "ไฟแสงเทียนที่คอยส่องรายละเอียด",
      image: "แสงเทียนที่ส่องรายละเอียดในคืนเงียบ",
      tagline: "ผู้ส่องรายละเอียดเล็ก ๆ ให้กลายเป็นความหมายที่เยียวยาหัวใจ",
      essence: "คุณคือแสงที่ไม่จำเป็นต้องดังเพื่อมีพลัง มีพรสวรรค์ในการเข้าใจสิ่งละเอียด อารมณ์ที่ซ่อนอยู่ และความหมายที่คนอื่นอาจมองผ่าน",
      caution: "เมื่อชีวิตพัดแรง อย่าใช้หัวใจรับลมทั้งหมดเพียงลำพัง แสงเทียนจะสว่างได้นานขึ้นเมื่อมีกำแพงเล็ก ๆ คอยบังลม",
    },
    戊: {
      title: "The Mountain Keeper",
      name: "ภูเขาใหญ่ที่พึ่งพาได้",
      image: "ภูเขาที่นิ่งพอให้คนอื่นพึ่งพา",
      tagline: "ผู้ยืนอยู่ตรงนั้นอย่างสงบ เพื่อให้โลกจำได้ว่าบางสิ่งยังพึ่งพาได้",
      essence: "คุณมีพลังของฐานที่มั่นคง ทำให้ความฝันลอย ๆ กลับมาลงดิน และทำให้ผู้คนรู้สึกว่าชีวิตยังมีที่ให้พักใจ",
      caution: "ความนิ่งงามอาจกลายเป็นกำแพงได้ ถ้าใจไม่เปิดประตูให้ความรู้สึกของตัวเองได้ออกมาหายใจบ้าง",
    },
    己: {
      title: "The Living Garden",
      name: "สวนลับแห่งการบ่มเพาะชีวิต",
      image: "ผืนดินที่ค่อย ๆ เลี้ยงเมล็ดพันธุ์",
      tagline: "ผู้ทำให้สิ่งเล็ก ๆ งอกงาม ด้วยความใส่ใจที่คนอื่นอาจมองไม่เห็น",
      essence: "คุณมีความสามารถในการดูแลรายละเอียดที่ทำให้ชีวิตของผู้คนเบาขึ้น เหมือนสวนที่ไม่ได้รีบเติบโต แต่รู้ว่าความงอกงามต้องการเวลา",
      caution: "การดูแลคนอื่นเป็นพรสวรรค์ แต่ควรถามใจเสมอว่าคุณให้เพราะรัก หรือให้เพราะกลัวจะไม่ถูกรัก",
    },
    庚: {
      title: "The Noble Blade",
      name: "ดาบศักดิ์สิทธิ์แห่งการตัดสินใจ",
      image: "โลหะคมที่ตัดสิ่งไม่จำเป็นออกไป",
      tagline: "ผู้ตัดสิ่งไม่จำเป็น เพื่อเปิดทางให้ความจริงและศักยภาพเดินหน้า",
      essence: "คุณมีพลังของความชัดเจน กล้ารับมือกับสิ่งยาก และมักเห็นเร็วว่าสิ่งไหนควรถูกปรับให้ใช้งานได้จริงขึ้น",
      caution: "ความคมคือของขวัญ แต่ดาบที่งดงามที่สุดรู้จังหวะเก็บคมก่อนจะสัมผัสหัวใจของคนอื่น",
    },
    辛: {
      title: "The Polished Jewel",
      name: "อัญมณีที่มีรสนิยมและมาตรฐาน",
      image: "อัญมณีที่ผ่านการขัดเกลา",
      tagline: "ผู้มองเห็นความประณีต และเปลี่ยนรายละเอียดให้กลายเป็นความเลอค่า",
      essence: "คุณมีสายตาที่ละเอียดต่อคุณภาพ ความงาม และคุณค่าที่ซ่อนอยู่ในสิ่งเล็ก ๆ พลังของคุณคือการคัดสรรให้สิ่งธรรมดามีสไตล์เฉพาะตัว",
      caution: "ความสมบูรณ์แบบงดงามได้ แต่อย่าให้มันกลายเป็นกรงที่ทำให้หัวใจไม่กล้าเผยด้านมนุษย์ของตัวเอง",
    },
    壬: {
      title: "The Ocean Voyager",
      name: "มหาสมุทรแห่งปัญญาและการเดินทาง",
      image: "สายน้ำกว้างที่เชื่อมโลกหลายใบ",
      tagline: "ผู้ไหลผ่านโลกกว้าง เชื่อมเรื่องราว ผู้คน และโอกาสให้กลายเป็นวิสัยทัศน์",
      essence: "คุณมีใจที่ไม่ชอบถูกจำกัดด้วยกรอบเล็ก ๆ ธรรมชาติของคุณคือการเรียนรู้ สำรวจ และเชื่อมสิ่งไกลกันให้กลายเป็นภาพใหญ่ที่คนอื่นยังมองไม่เห็น",
      caution: "อิสระจะงดงามที่สุดเมื่อมีทิศทาง ลองให้ความกว้างของตัวเองมีตัวช่วยเลือกทาง ไม่ใช่เพียงทางออกจากข้อผูกมัด",
    },
    癸: {
      title: "The Mystic Rain",
      name: "สายฝนแห่งสัญชาตญาณลึก",
      image: "น้ำค้างและสายฝนที่ซึมลึกอย่างเงียบงาม",
      tagline: "ผู้เข้าใจสิ่งที่ไม่ได้ถูกพูด และทำให้ความเงียบกลายเป็นปัญญา",
      essence: "คุณอาจไม่ใช่คนที่ดังที่สุดในห้อง แต่คุณมักรับรู้สิ่งที่ลึกที่สุดในบรรยากาศได้ก่อนใคร ความเงียบของคุณมีคลังปัญญาที่ละเอียดและลึกซึ้ง",
      caution: "โลกภายในที่งดงามควรมีสะพานออกมาสู่โลกจริงบ้าง อย่าให้ความคิดลึกกลายเป็นหมอกที่ทำให้คุณลงมือช้ากว่าหัวใจต้องการ",
    },
  },
  strength: {
    seeker: {
      label: "ดวงแสวงหาสภาพแวดล้อมที่ใช่",
      english: "The Seeker",
      copy: "พลังชีวิตจะแสดงคุณค่าสูงสุดเมื่อมีสภาพแวดล้อม ผู้คน และจังหวะที่ช่วยให้มีแรงทำตามเป้าหมาย",
    },
    harmonizer: {
      label: "ดวงกระแสกลมกลืน",
      english: "The Harmonizer",
      copy: "คุณมีศิลปะในการประคองหลายพลังให้ทำงานร่วมกันโดยไม่ต้องผลักชีวิตไปสุดทางใดทางหนึ่ง",
    },
    powerhouse: {
      label: "ดวงพลังงานขับเคลื่อนสูง",
      english: "The Powerhouse",
      copy: "หน้าที่ของพลังนี้คือการระบายออกไปเป็นผลงาน แบรนด์ รสนิยมและความสวยงาม หรือ impact ที่จับต้องได้",
    },
  },
  guardianElements: {
    WOOD: "ไม้ช่วยเรื่องการเรียนรู้ วางแผน เติบโต และคุยกับคนที่ช่วยเปิดมุมมอง",
    FIRE: "ไฟช่วยเรื่องการพูดให้ชัด การนำเสนอ และการทำให้คนเห็นคุณค่า",
    EARTH: "ดินช่วยเรื่องความมั่นคง การจัดระบบเงิน เวลา บ้าน และหน้าที่",
    METAL: "ทองช่วยเรื่องมาตรฐาน การตัดสินใจ และการตัดสิ่งที่กินพลังออก",
    WATER: "น้ำช่วยเรื่องการพัก ฟังข้อมูล ทบทวน และไม่รีบตอบทุกเรื่อง",
  },
};

const wisdomContentMatrix = {
  mappings: [
    {
      key: "waterYielding",
      bazi: "ธาตุน้ำ",
      universalTruth: "พลังที่อ่อนโยนที่สุดมักผ่านสิ่งแข็งที่สุดได้ เพราะไม่เสียแรงไปกับการขัดขืนสิ่งที่ควบคุมไม่ได้",
      writingRule: "ใช้ภาพสายน้ำ ลมหายใจ ความเงียบ และจังหวะรอ ให้คำแนะนำเรื่องการปรับตัวโดยไม่ทำให้ผู้อ่านรู้สึกแพ้",
    },
    {
      key: "woodGrowth",
      bazi: "ธาตุไม้",
      universalTruth: "การเติบโตที่งดงามต้องมีทั้งรากที่ลึก พื้นที่ที่พอดี และมือของเจ้าชะตาที่เลือกทิศทางชีวิตเอง",
      writingRule: "ใช้ภาพต้นไม้ใหญ่ ราก กิ่งใบ แสง และสไตล์เฉพาะตัวชีวิต เพื่อพูดถึงโอกาสโดยไม่เร่งให้คว้าทุกอย่าง",
    },
    {
      key: "goldenRepair",
      bazi: "แรงชนที่ชวนให้ปรับตัวและธาตุทอง",
      universalTruth: "รอยแตกไม่ได้ลดคุณค่าของชีวิตเสมอไป บางครั้งมันคือเส้นที่ทำให้ตัวตนใหม่มีความจริงและความงามมากกว่าเดิม",
      writingRule: "ใช้ภาพรอยร้าว การประสาน การขัดเกลา และลายทอง เพื่อเปลี่ยนคำเตือนให้เป็นคำประคองใจ",
    },
    {
      key: "rightAction",
      bazi: "ธาตุดินและธาตุที่ช่วยให้สมดุล",
      universalTruth: "ใจจะมั่นคงขึ้นเมื่อทำสิ่งที่ควรทำอย่างประณีต แล้วปล่อยให้เวลาเป็นคนพาสิ่งดี ๆ ค่อย ๆ เปิดออก",
      writingRule: "ใช้จังหวะภาษาแบบผู้ใหญ่ใจดี: ให้ทำทีละก้าว วางฐาน เช็กความจริง และไม่ลงโทษตัวเองกับสิ่งที่ยังไม่ออกดอก",
    },
  ],
  components: {
    growthVibe: {
      key: "growth",
      component: "GrowthVibe",
      label: "จังหวะฟ้าเปิด",
      title: "พลังงานสมบูรณ์พร้อมเติบโต",
      text:
        "ช่วงนี้ดวงเหมือนต้นไม้ใหญ่ที่ได้ทั้งแดด ดิน และลมพอดี รากที่เคยเงียบอยู่ใต้พื้นกำลังส่งแรงขึ้นสู่กิ่งใบ ขอให้เลือกเติบโตอย่างมีรสนิยม ไม่รีบผลักชีวิตจนเสียจังหวะ แต่ค่อย ๆ วางสไตล์เฉพาะตัวของตัวเองลงในงาน ความรัก และการตัดสินใจทีละชั้น เมื่อฟ้าเปิดเช่นนี้ สิ่งสำคัญไม่ใช่การคว้าทุกโอกาส แต่คือการเลือกโอกาสที่ทำให้คุณกลายเป็นตัวเองได้งดงามขึ้น",
    },
    resilienceGuide: {
      key: "resilience",
      component: "ResilienceGuide",
      label: "ประคองใจในแรงชนที่ชวนให้ปรับตัว",
      title: "รอยร้าวที่กำลังกลายเป็นลายทอง",
      text:
        "ช่วงที่แรงชนที่ชวนให้ปรับตัวเข้ามา ชีวิตอาจเหมือนภาชนะที่ถูกเคาะให้เห็นรอยร้าว แต่รอยนั้นไม่ได้มีไว้ลดคุณค่า หากมีไว้บอกว่าคุณกำลังถูกหลอมให้ลึกและจริงกว่าเดิม สิ่งภายนอกบางอย่างอาจควบคุมไม่ได้ แต่จังหวะหายใจ คำตอบที่เลือก และความเมตตาต่อตัวเองยังเป็นพื้นที่ของคุณอยู่เสมอ ให้ค่อย ๆ ประสานรอยแตกด้วยสติ วางแผนทีละก้าว แล้วปล่อยให้บททดสอบนี้กลายเป็นลายทองที่ทำให้ชีวิตมีความหมายมากกว่าเดิม",
    },
  },
};

const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const tenGods = ["Resource", "Peer", "Output", "Wealth", "Officer", "Indirect Wealth", "Seven Killings", "Eating God"];
const stemMeta = {
  甲: { element: "WOOD", polarity: "yang", name: "Jia Wood" },
  乙: { element: "WOOD", polarity: "yin", name: "Yi Wood" },
  丙: { element: "FIRE", polarity: "yang", name: "Bing Fire" },
  丁: { element: "FIRE", polarity: "yin", name: "Ding Fire" },
  戊: { element: "EARTH", polarity: "yang", name: "Wu Earth" },
  己: { element: "EARTH", polarity: "yin", name: "Ji Earth" },
  庚: { element: "METAL", polarity: "yang", name: "Geng Metal" },
  辛: { element: "METAL", polarity: "yin", name: "Xin Metal" },
  壬: { element: "WATER", polarity: "yang", name: "Ren Water" },
  癸: { element: "WATER", polarity: "yin", name: "Gui Water" },
};
const stems = Object.keys(stemMeta);
const branchMeta = {
  子: { element: "WATER", hidden: [{ stem: "癸", weight: 1 }] },
  丑: { element: "EARTH", hidden: [{ stem: "己", weight: 0.6 }, { stem: "癸", weight: 0.25 }, { stem: "辛", weight: 0.15 }] },
  寅: { element: "WOOD", hidden: [{ stem: "甲", weight: 0.6 }, { stem: "丙", weight: 0.25 }, { stem: "戊", weight: 0.15 }] },
  卯: { element: "WOOD", hidden: [{ stem: "乙", weight: 1 }] },
  辰: { element: "EARTH", hidden: [{ stem: "戊", weight: 0.6 }, { stem: "乙", weight: 0.25 }, { stem: "癸", weight: 0.15 }] },
  巳: { element: "FIRE", hidden: [{ stem: "丙", weight: 0.6 }, { stem: "戊", weight: 0.25 }, { stem: "庚", weight: 0.15 }] },
  午: { element: "FIRE", hidden: [{ stem: "丁", weight: 0.7 }, { stem: "己", weight: 0.3 }] },
  未: { element: "EARTH", hidden: [{ stem: "己", weight: 0.6 }, { stem: "丁", weight: 0.25 }, { stem: "乙", weight: 0.15 }] },
  申: { element: "METAL", hidden: [{ stem: "庚", weight: 0.6 }, { stem: "壬", weight: 0.25 }, { stem: "戊", weight: 0.15 }] },
  酉: { element: "METAL", hidden: [{ stem: "辛", weight: 1 }] },
  戌: { element: "EARTH", hidden: [{ stem: "戊", weight: 0.6 }, { stem: "辛", weight: 0.25 }, { stem: "丁", weight: 0.15 }] },
  亥: { element: "WATER", hidden: [{ stem: "壬", weight: 0.7 }, { stem: "甲", weight: 0.3 }] },
};
const solarTermStarts = [
  { key: "minorCold", month: 1, day: 6, branch: "丑", c21: 5.4055, hour: 6 },
  { key: "liChun", month: 2, day: 4, branch: "寅", c21: 3.87, hour: 10 },
  { key: "jingZhe", month: 3, day: 6, branch: "卯", c21: 5.63, hour: 12 },
  { key: "qingMing", month: 4, day: 5, branch: "辰", c21: 4.81, hour: 14 },
  { key: "liXia", month: 5, day: 6, branch: "巳", c21: 5.52, hour: 15 },
  { key: "mangZhong", month: 6, day: 6, branch: "午", c21: 5.678, hour: 18 },
  { key: "xiaoShu", month: 7, day: 7, branch: "未", c21: 7.108, hour: 20 },
  { key: "liQiu", month: 8, day: 8, branch: "申", c21: 7.5, hour: 22 },
  { key: "baiLu", month: 9, day: 8, branch: "酉", c21: 7.646, hour: 18 },
  { key: "hanLu", month: 10, day: 8, branch: "戌", c21: 8.318, hour: 12 },
  { key: "liDong", month: 11, day: 7, branch: "亥", c21: 7.438, hour: 9 },
  { key: "daXue", month: 12, day: 7, branch: "子", c21: 7.18, hour: 6 },
];
const validationCases = [
  {
    label: "Sesheta comparison: 2026-06-24 14:14 Bangkok male",
    date: "2026-06-24",
    time: "14:14",
    place: "Bangkok, Thailand",
    expected: { Year: "丙午", Month: "甲午", Day: "己巳", Hour: "辛未" },
  },
  {
    label: "Zi-hour rollover: 2026-06-24 23:30 Bangkok male",
    date: "2026-06-24",
    time: "23:30",
    place: "Bangkok, Thailand",
    expected: { Year: "丙午", Month: "甲午", Day: "庚午", Hour: "丙子" },
  },
];
const placeLongitudes = [
  { match: ["bangkok", "กรุงเทพ"], longitude: 100.5018, timezone: 7 },
  { match: ["nonthaburi", "นนทบุรี"], longitude: 100.514, timezone: 7 },
  { match: ["pathum thani", "ปทุมธานี"], longitude: 100.525, timezone: 7 },
  { match: ["samut prakan", "สมุทรปราการ"], longitude: 100.5968, timezone: 7 },
  { match: ["ayutthaya", "พระนครศรีอยุธยา", "อยุธยา"], longitude: 100.5684, timezone: 7 },
  { match: ["chonburi", "ชลบุรี"], longitude: 100.9847, timezone: 7 },
  { match: ["rayong", "ระยอง"], longitude: 101.2574, timezone: 7 },
  { match: ["chanthaburi", "จันทบุรี"], longitude: 102.103, timezone: 7 },
  { match: ["trat", "ตราด"], longitude: 102.515, timezone: 7 },
  { match: ["nakhon ratchasima", "korat", "นครราชสีมา", "โคราช"], longitude: 102.0977, timezone: 7 },
  { match: ["khon kaen", "ขอนแก่น"], longitude: 102.835, timezone: 7 },
  { match: ["udon thani", "อุดรธานี"], longitude: 102.7893, timezone: 7 },
  { match: ["nong khai", "หนองคาย"], longitude: 102.7413, timezone: 7 },
  { match: ["ubon ratchathani", "อุบลราชธานี", "อุบล"], longitude: 104.8564, timezone: 7 },
  { match: ["roi et", "ร้อยเอ็ด"], longitude: 103.6531, timezone: 7 },
  { match: ["sakon nakhon", "สกลนคร"], longitude: 104.1476, timezone: 7 },
  { match: ["chiang mai", "เชียงใหม่"], longitude: 98.9853, timezone: 7 },
  { match: ["chiang rai", "เชียงราย"], longitude: 99.8325, timezone: 7 },
  { match: ["lampang", "ลำปาง"], longitude: 99.4928, timezone: 7 },
  { match: ["phitsanulok", "พิษณุโลก"], longitude: 100.2659, timezone: 7 },
  { match: ["nakhon sawan", "นครสวรรค์"], longitude: 100.1372, timezone: 7 },
  { match: ["tak", "ตาก"], longitude: 99.128, timezone: 7 },
  { match: ["kanchanaburi", "กาญจนบุรี"], longitude: 99.5328, timezone: 7 },
  { match: ["ratchaburi", "ราชบุรี"], longitude: 99.8134, timezone: 7 },
  { match: ["phetchaburi", "เพชรบุรี"], longitude: 99.9447, timezone: 7 },
  { match: ["prachuap khiri khan", "ประจวบคีรีขันธ์", "ประจวบ"], longitude: 99.7977, timezone: 7 },
  { match: ["surat thani", "สุราษฎร์ธานี"], longitude: 99.3331, timezone: 7 },
  { match: ["nakhon si thammarat", "นครศรีธรรมราช"], longitude: 99.9631, timezone: 7 },
  { match: ["phuket", "ภูเก็ต"], longitude: 98.3923, timezone: 7 },
  { match: ["krabi", "กระบี่"], longitude: 98.9063, timezone: 7 },
  { match: ["songkhla", "สงขลา"], longitude: 100.5967, timezone: 7 },
  { match: ["hat yai", "หาดใหญ่"], longitude: 100.4747, timezone: 7 },
  { match: ["pattani", "ปัตตานี"], longitude: 101.2501, timezone: 7 },
  { match: ["yala", "ยะลา"], longitude: 101.28, timezone: 7 },
  { match: ["narathiwat", "นราธิวาส"], longitude: 101.8231, timezone: 7 },
  { match: ["tokyo"], longitude: 139.6917, timezone: 9 },
  { match: ["singapore"], longitude: 103.8198, timezone: 8 },
  { match: ["new york"], longitude: -74.006, timezone: -5 },
  { match: ["los angeles"], longitude: -118.2437, timezone: -8 },
  { match: ["london"], longitude: -0.1276, timezone: 0 },
];
const elementArchetypes = {
  WOOD: "การเติบโต วิสัยทัศน์ การเรียนรู้ และการขยายขอบเขตชีวิต",
  FIRE: "การมองเห็น การสื่อสาร ความกล้าแสดงออก และแรงบันดาลใจ",
  EARTH: "ความมั่นคง แรงสนับสนุน ความอดทน และการดูแลทรัพยากร",
  METAL: "มาตรฐาน วินัย การตัดสินใจ และความสามารถในการตัดสิ่งไม่จำเป็น",
  WATER: "ปัญญา การฟัง สัญชาตญาณ การไหลตามสถานการณ์ และการเชื่อมโยงเรื่องราว",
};
const elementPsychologyKnowledge = {
  WOOD: {
    coreNeed: "ต้องการพื้นที่เติบโตและความรู้สึกว่าชีวิตยังเดินหน้าได้",
    stressPattern: "เมื่อถูกจำกัดนานเกินไป ใจจะเริ่มอึดอัด ดื้อเงียบ หรือรีบหาทางออกใหม่",
    repairPath: "ค่อย ๆ แปลงความกดดันให้เป็นแผนเล็ก ๆ ที่ขยับได้จริง",
    growthPractice: "ฝึกตั้งเป้าหมายระยะสั้นและให้สิทธิ์ตัวเองลองผิดลองถูก",
  },
  FIRE: {
    coreNeed: "ต้องการการมองเห็น การตอบสนอง และความรู้สึกว่าตัวเองยังมีชีวิตชีวา",
    stressPattern: "เมื่อไม่มีใครรับรู้หรือทุกอย่างเงียบเกินไป อาจรีบพิสูจน์ตัวเองหรือหมดไฟเร็ว",
    repairPath: "กลับมาเช็กว่าอยากถูกเห็นเพราะคุณค่าจริง หรือเพราะกำลังกลัวว่าจะไม่สำคัญ",
    growthPractice: "สร้างความอบอุ่นผ่านการพูดความรู้สึกและให้ผลงานได้ถูกมองเห็นอย่างพอดี",
  },
  EARTH: {
    coreNeed: "ต้องการความมั่นคง ความไว้ใจ และฐานชีวิตที่พอให้ใจวางลงได้",
    stressPattern: "เมื่อภาระมากเกินไป มักแบกเงียบ ๆ จนลืมถามว่าตัวเองยังไหวไหม",
    repairPath: "แยกสิ่งที่ต้องรับผิดชอบจริงออกจากสิ่งที่รับมาเพราะเกรงใจ",
    growthPractice: "สร้าง routine ที่ทำให้ใจรู้ว่ามีฐานรองรับ ไม่ต้องเอาตัวรอดตลอดเวลา",
  },
  METAL: {
    coreNeed: "ต้องการความชัดเจน มาตรฐาน และขอบเขตที่ทำให้ชีวิตไม่เละเทะ",
    stressPattern: "เมื่อสิ่งต่าง ๆ คลุมเครือ อาจแข็งขึ้น ตัดเร็วขึ้น หรือวิจารณ์ตัวเองมากเกินไป",
    repairPath: "ใช้มาตรฐานเป็นเครื่องมือดูแลชีวิต ไม่ใช่ไม้บรรทัดไว้ลงโทษตัวเอง",
    growthPractice: "วางขอบเขตและเส้นตัดสินใจให้ชัดก่อนรับภาระหรือรับปากใคร",
  },
  WATER: {
    coreNeed: "ต้องการเวลาเงียบ พื้นที่คิด และความรู้สึกว่าเสียงข้างในถูกฟังจริง ๆ",
    stressPattern: "เมื่อถูกเร่งให้ตอบทันที อาจถอยห่าง คิดวน หรือไม่พูดสิ่งที่รู้สึกจริง",
    repairPath: "ให้เวลากับการตกตะกอน แล้วค่อยสื่อสารออกมาเป็นคำที่ชัดและอ่อนโยน",
    growthPractice: "กันเวลาคิดเงียบ ๆ เขียนบันทึก และฟังสัญญาณในใจก่อนตอบสนอง",
  },
};
const tenGodPsychologyKnowledge = {
  Friend: {
    coreDrive: "การยืนยันตัวตน ความเป็นตัวเอง และการยืนอยู่ในกลุ่มโดยไม่ละทิ้งเสียงของตัวเอง",
    shadowPattern: "ดื้อกับมุมมองเดิมหรือปกป้องตัวเองจนไม่เปิดรับการสะท้อน",
    repairPractice: "ถามตัวเองว่าเรื่องนี้คือจุดยืนจริง หรือเป็นแค่การป้องกันตัวจากความกลัวเสียหน้า",
  },
  "Rob Wealth": {
    coreDrive: "แรงแข่งขัน การแบ่งทรัพยากร และการเรียนรู้ขอบเขตระหว่างน้ำใจกับข้อตกลง",
    shadowPattern: "ใจใหญ่ แข่งโดยไม่รู้ตัว หรือยอมเสียเปรียบเพื่อรักษาความสัมพันธ์",
    repairPractice: "เขียนข้อตกลงให้ชัดก่อนเริ่มร่วมงาน ร่วมเงิน หรือร่วมรับผิดชอบ",
  },
  "Eating God": {
    coreDrive: "ความสุขในการสร้างผลงาน การเลี้ยงดูตัวเอง และการทำสิ่งที่สบายใจให้เกิดผลจริง",
    shadowPattern: "ติดความสบายจนเลื่อนงานสำคัญ หรือใช้ความชอบแทนวินัย",
    repairPractice: "ทำให้ความสุขมีตาราง มี deadline และมีพื้นที่ส่งมอบต่อคนอื่น",
  },
  "Hurting Officer": {
    coreDrive: "เสียงของตัวเอง ความคิดสร้างสรรค์ และความต้องการท้าทายกรอบที่ไม่จริง",
    shadowPattern: "พูดแรง ชนกรอบเดิม หรือเผลอทำลายโอกาสเพราะอยากพิสูจน์ตัวเอง",
    repairPractice: "แปลงความไม่พอใจเป็นข้อเสนอที่วัดผลได้ก่อนสื่อสารกับคนมีอำนาจ",
  },
  "Direct Wealth": {
    coreDrive: "ความมั่นคงที่จับต้องได้ การจัดการเงิน เวลา ลูกค้า และความรับผิดชอบ",
    shadowPattern: "แบกภาระจนเงินกลายเป็นความกลัว หรือวัดคุณค่าตัวเองจากความมั่นคงภายนอก",
    repairPractice: "แยกบัญชี แยกหน้าที่ และตั้งขอบเขตว่าความรับผิดชอบจบตรงไหน",
  },
  "Indirect Wealth": {
    coreDrive: "โอกาส เครือข่าย การลงทุน และการมองเห็นประตูที่คนอื่นยังไม่เห็น",
    shadowPattern: "ตื่นเต้นกับโอกาสเร็วเกินภาพจริง หรือกระจายพลังหลายทางพร้อมกัน",
    repairPractice: "ทดลองเล็ก จำกัดเดิมพัน และรอหลักฐานก่อนเพิ่มเงินหรือเวลา",
  },
  "Direct Officer": {
    coreDrive: "มาตรฐาน บทบาททางสังคม ความรับผิดชอบ และความต้องการทำให้ถูกต้อง",
    shadowPattern: "กดตัวเองด้วยกฎ ภาพลักษณ์ หรือความคาดหวังจนเสียเสียงภายใน",
    repairPractice: "แยกกฎที่ช่วยให้โตออกจากกฎที่ทำให้กลัว และทบทวนกับคนที่ไว้ใจได้",
  },
  "Seven Killings": {
    coreDrive: "แรงกดดัน อำนาจ การตัดสินใจเร็ว และบททดสอบที่บังคับให้แรงกำลังดีขึ้น",
    shadowPattern: "อยู่ในโหมดสู้ตลอดเวลา จนร่างกายและความสัมพันธ์ไม่มีพื้นที่พัก",
    repairPractice: "เลือกพื้นที่ใช้พลังให้ถูก สร้างแผนสำรอง และพักก่อนตอบสนองต่อแรงชนที่ชวนให้ปรับตัว",
  },
  "Direct Resource": {
    coreDrive: "การเรียนรู้ แรงสนับสนุน ผู้มีประสบการณ์ ความปลอดภัย และการพักฟื้นที่มีจังหวะชัดเจน",
    shadowPattern: "รอความพร้อม รอคำอนุญาต หรือพึ่งพาคนอื่นจนไม่กล้าลงมือเอง",
    repairPractice: "ใช้ความช่วยเหลือเป็นฐานเริ่มต้น ไม่ใช่ข้ออ้างให้เลื่อนการเติบโต",
  },
  "Indirect Resource": {
    coreDrive: "สัญชาตญาณ ความรู้ลึก งานเบื้องหลัง และความหมายที่ซ่อนอยู่ใต้เรื่องราว",
    shadowPattern: "คิดซับซ้อน เก็บตัว หรือเชื่อความรู้สึกโดยไม่เช็กความจริง",
    repairPractice: "จดสิ่งที่รู้สึก แล้วจับคู่กับหลักฐานจริงก่อนตัดสินใจ",
  },
};
const questionModeKnowledge = {
  career: {
    label: "งานและทิศทางอาชีพ",
    tenGods: ["Direct Officer", "Seven Killings", "Hurting Officer", "Eating God", "Direct Resource"],
    question: "ช่วงนี้งานกำลังชวนให้คุณใช้ของดีแบบไหน และสนามไหนที่ควรลงแรงจริง ๆ",
    action: "เลือกงานที่ขอบเขตชัด เห็นภาพที่ออกมาจริง และมีพื้นที่ให้ใช้เสียงของตัวเองโดยไม่ต้องเผาตัวเอง",
  },
  wealth: {
    label: "การเงินและทรัพย์สิน",
    tenGods: ["Direct Wealth", "Indirect Wealth", "Rob Wealth", "Eating God"],
    question: "ช่วงนี้เงินควรโตจากฐานที่มั่นคง โอกาสใหม่ หรือการจัดระเบียบชีวิตการเงินกันแน่",
    action: "แยกเงินหลัก เงินทดลอง และเงินเสี่ยงให้ชัดก่อนตัดสินใจเพิ่มภาระ",
  },
  relationship: {
    label: "ความสัมพันธ์",
    tenGods: ["Direct Officer", "Friend", "Rob Wealth", "Direct Resource", "Indirect Resource"],
    question: "ความสัมพันธ์กำลังแตะเรื่องความไว้ใจ ขอบเขต หรือการยอมรับตัวเอง",
    action: "พูดความต้องการจริงเป็นประโยคสั้น ๆ และแยกความคาดหวังออกจากคำขอ",
  },
  health: {
    label: "พลังชีวิตและสุขภาพ",
    tenGods: ["Direct Resource", "Indirect Resource", "Seven Killings", "Eating God"],
    question: "ร่างกายกำลังส่งสัญญาณว่าใจแบกอะไรไว้นานเกินไป",
    action: "กลับไปตั้งฐานด้วยการนอน การเคลื่อนไหวเบา ๆ การจดบันทึก และการพักจากเรื่องที่รับเข้ามาเยอะเกินไป",
  },
  luck: {
    label: "ช่วง 10 ปีนี้",
    tenGods: ["Friend", "Rob Wealth", "Eating God", "Hurting Officer", "Direct Wealth", "Indirect Wealth", "Direct Officer", "Seven Killings", "Direct Resource", "Indirect Resource"],
    question: "รอบนี้ชีวิตกำลังชวนให้เรียนเรื่องอะไร และควรวางเกมยาวแบบไหน",
    action: "อ่านเป็นจังหวะขึ้นลงของชีวิต แล้วเลือกจังหวะลุยกับจังหวะพักให้เข้ากับแรงของรอบนั้น",
  },
  self: {
    label: "ตัวตนและบทเรียนด้านใน",
    tenGods: ["Friend", "Indirect Resource", "Direct Resource", "Hurting Officer", "Seven Killings"],
    question: "ตัวตนกำลังปกป้องอะไร และอยากเติบโตออกจากรูปแบบเดิมแบบไหน",
    action: "สังเกตกลไกป้องกันตัวเองก่อน แล้วค่อยเลือกคำตอบใหม่ที่เป็นผู้ใหญ่มากขึ้น",
  },
};
const popularQuestionKnowledge = {
  lifeLesson: {
    label: "ช่วงนี้ชีวิตกำลังสอนอะไรฉัน",
    tag: "บทเรียนชีวิต",
  },
  workFit: {
    label: "งานแบบไหนที่เหมาะกับฉันจริง ๆ",
    tag: "งาน",
  },
  monetizeStrength: {
    label: "ฉันหาเงินจากจุดแข็งอะไรได้",
    tag: "เงิน",
  },
  lovePattern: {
    label: "ความรักของฉันวนอยู่กับรูปแบบไหน",
    tag: "ความสัมพันธ์",
  },
  pushOrRest: {
    label: "ปีนี้ควรลุยหรือควรพัก",
    tag: "จังหวะเวลา",
  },
  decisionRisk: {
    label: "ควรระวังการตัดสินใจเรื่องอะไร",
    tag: "จุดที่ควรรู้ทัน",
  },
  visibleStrength: {
    label: "จุดแข็งที่คนอื่นเห็นในตัวฉันคืออะไร",
    tag: "ตัวตน",
  },
  decadeStrategy: {
    label: "ช่วง 10 ปีนี้ควรใช้ชีวิตแบบไหน",
    tag: "รอบดวง",
  },
};
let state;
let activeSection = "personality";
let activeLuckIndex = 0;
let activeQuestionMode = "career";
let activePopularQuestion = "lifeLesson";

document.getElementById("baziForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state = analyzeFromInputs();
  activeLuckIndex = getPresentLuckIndex();
  render();
  showToast("แผนที่ชีวิตของคุณพร้อมเปิดออกแล้ว");
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("shareDeityCard")?.addEventListener("click", () => {
  shareDeityCard();
});

document.getElementById("downloadDeityCard")?.addEventListener("click", () => {
  downloadDeityCard();
});

document.querySelectorAll("[data-current-luck]").forEach((link) => {
  link.addEventListener("click", () => {
    activeLuckIndex = getPresentLuckIndex();
    renderTimeline();
    renderLuckDetail();
  });
});

document.getElementById("birthTimeUnknown")?.addEventListener("change", () => {
  syncBirthTimeInput();
  state = analyzeFromInputs();
  render();
  showToast(document.getElementById("birthTimeUnknown")?.checked ? "เปิดโหมดไม่ทราบเวลาเกิดแล้ว ระบบจะแยกเสาเวลาเกิดเป็นช่วงความเป็นไปได้" : "กลับมาใช้เวลาเกิดที่กรอกไว้แล้ว");
});

document.getElementById("focusQuestion")?.addEventListener("change", (event) => {
  activeQuestionMode = event.target.value;
  renderQuestionReading();
  showToast("ปรับคำถามเฉพาะเรื่องแล้ว");
});

document.getElementById("popularQuestionButtons")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-popular-question]");
  if (!button) return;
  activePopularQuestion = button.dataset.popularQuestion;
  renderPopularQuestions();
});

function analyzeFromInputs() {
  const date = document.getElementById("birthDate").value || "1992-08-17";
  const birthTimeUnknown = document.getElementById("birthTimeUnknown")?.checked || false;
  const enteredTime = document.getElementById("birthTime").value || "09:30";
  const time = birthTimeUnknown ? "12:00" : enteredTime;
  const place = document.getElementById("birthPlace").value || "Bangkok, Thailand";
  const gender = document.getElementById("gender")?.value || "female";
  const seed = hash(`${date}-${time}-${place}-${gender}-${birthTimeUnknown ? "unknown-time" : "known-time"}`);
  const birth = buildBirthContext(date, time, place);
  birth.isTimeUnknown = birthTimeUnknown;
  birth.enteredTime = birthTimeUnknown ? null : enteredTime;
  birth.referenceTime = time;
  const pillars = calculatePillarsFromSolar(birth.trueSolarDate);
  const analysisPillars = birthTimeUnknown ? pillars.filter((pillar) => pillar.label !== "Hour") : pillars;
  const dayStem = pillars[2].stem;
  const dayContext = buildDayMasterContext(dayStem);
  const master = dayContext.master;
  const tenGodProfile = calculateTenGodProfile(dayContext, analysisPillars);
  const elementValues = calculateElementDistribution(analysisPillars);
  const strengthResult = calculateStrength(dayContext, analysisPillars, elementValues);
  const strength = strengthResult.percentage;
  const transformation = detectTransformedStructure(dayContext, analysisPillars, elementValues, strengthResult);
  const usefulProfile = calculateUsefulGodFromProfile(dayContext, strengthResult, elementValues, transformation);
  const usefulGod = usefulProfile.primary;
  const chartType = transformation ? transformation.label : detectChart(elementValues);
  const personality = buildPersonality(tenGodProfile.scores, elementValues, strength);
  const luck = buildLuck(pillars, birth, gender, usefulProfile);
  const calibration = buildCalibrationProfile({ date, time: birthTimeUnknown ? "ไม่ทราบเวลาเกิด" : time, place }, birth, analysisPillars, strengthResult, transformation, usefulProfile);
  if (birthTimeUnknown) {
    calibration.score = Math.max(35, calibration.score - 12);
    calibration.label = calibration.score >= 85 ? "อ่านได้ค่อนข้างนิ่ง" : calibration.score >= 70 ? "ใช้วางแผนได้" : "ควรเช็กซ้ำอีกนิด";
    calibration.warnings.unshift("ยังไม่ทราบเวลาเกิด ระบบจึงคำนวณแกนหลักจาก 3 เสา และแยกเสาเวลาเกิดไว้เป็นช่วงความเป็นไปได้");
    calibration.inputFingerprint = `${date} ไม่ทราบเวลาเกิด ${place}`;
  }
  const sensitivity = birthTimeUnknown ? buildUnknownBirthTimeProfile(date, place, pillars) : buildBirthTimeSensitivity(date, time, place, pillars);
  const lifeEvents = [];
  const backtest = { signal: "", summary: "", matches: [] };

  return {
    seed,
    birth,
    birthTimeUnknown,
    analysisPillars,
    gender,
    master,
    strength,
    strengthResult,
    tenGodProfile,
    elementValues,
    usefulGod,
    favorableElements: usefulProfile.favorableElements,
    usefulGodReason: usefulProfile.reason,
    transformation,
    chartType,
    calibration,
    personality,
    sensitivity,
    lifeEvents,
    backtest,
    aiReady: false,
    pillars,
    luck,
  };
}

function hash(text) {
  return [...text].reduce((total, char) => total + char.charCodeAt(0) * 17, 137);
}

function buildBirthContext(date, time, place) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const placeInfo = resolvePlaceInfo(place);
  const localDate = new Date(year, month - 1, day, hour, minute || 0, 0);
  const standardMeridian = placeInfo.timezone * 15;
  const trueSolarOffsetMinutes = Math.round((placeInfo.longitude - standardMeridian) * 4);
  const trueSolarDate = new Date(localDate.getTime() + trueSolarOffsetMinutes * 60 * 1000);
  return {
    localDate,
    trueSolarDate,
    place,
    longitude: placeInfo.longitude,
    timezone: placeInfo.timezone,
    trueSolarOffsetMinutes,
  };
}

function resolvePlaceInfo(place) {
  const normalized = String(place).toLowerCase();
  return placeLongitudes.find((entry) => entry.match.some((term) => normalized.includes(term))) || placeLongitudes[0];
}

function buildBirthTimeSensitivity(date, time, place, basePillars) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const baseLocal = new Date(year, month - 1, day, hour, minute || 0, 0);
  const deltas = [-60, -30, -15, 0, 15, 30, 60];
  const variants = deltas.map((delta) => {
    const shifted = new Date(baseLocal.getTime() + delta * 60000);
    const shiftedBirth = buildBirthContext(formatDateInput(shifted), formatTimeInput(shifted), place);
    const pillars = calculatePillarsFromSolar(shiftedBirth.trueSolarDate);
    const changed = pillars.filter((pillar, index) => `${pillar.stem}${pillar.branch}` !== `${basePillars[index].stem}${basePillars[index].branch}`).map((pillar) => pillar.label);
    return {
      delta,
      time: `${formatDateInput(shifted)} ${formatTimeInput(shifted)}`,
      trueSolarTime: formatTimeInput(shiftedBirth.trueSolarDate),
      pillars,
      changed,
      label: describeSensitivityVariant(delta, changed),
    };
  });
  const unstablePillars = [...new Set(variants.flatMap((variant) => variant.changed))];
  const boundaryMinutes = getNearestHourBoundaryMinutes(buildBirthContext(date, time, place).trueSolarDate);
  const riskLevel = unstablePillars.includes("Day")
    ? "แนะนำให้เช็กเวลาเกิดจริงอีกครั้ง เพราะเสาวันอาจเปลี่ยน"
    : unstablePillars.includes("Hour")
      ? "แนะนำให้เช็กเวลาเกิดซ้ำ เพราะเสาเวลาเกิดอาจเปลี่ยนได้"
      : boundaryMinutes <= 20
        ? "อยู่ใกล้ขอบชั่วยาม ลองเผื่อเวลาเหลื่อมไว้หน่อย"
        : "เวลาเกิดชุดนี้ค่อนข้างนิ่งในกรอบที่ลองขยับ";
  return {
    variants,
    unstablePillars,
    boundaryMinutes,
    riskLevel,
  };
}

const unknownTimeWindows = [
  { windowLabel: "00:00-00:59", sampleTime: "00:30", note: "ชวดหลัง ช่วงหลังเที่ยงคืน" },
  { windowLabel: "01:00-02:59", sampleTime: "02:00", note: "ช่วงฉลู" },
  { windowLabel: "03:00-04:59", sampleTime: "04:00", note: "ช่วงขาล" },
  { windowLabel: "05:00-06:59", sampleTime: "06:00", note: "ช่วงเถาะ" },
  { windowLabel: "07:00-08:59", sampleTime: "08:00", note: "ช่วงมะโรง" },
  { windowLabel: "09:00-10:59", sampleTime: "10:00", note: "ช่วงมะเส็ง" },
  { windowLabel: "11:00-12:59", sampleTime: "12:00", note: "ช่วงมะเมีย จุดอ้างอิงกลางวัน" },
  { windowLabel: "13:00-14:59", sampleTime: "14:00", note: "ช่วงมะแม" },
  { windowLabel: "15:00-16:59", sampleTime: "16:00", note: "ช่วงวอก" },
  { windowLabel: "17:00-18:59", sampleTime: "18:00", note: "ช่วงระกา" },
  { windowLabel: "19:00-20:59", sampleTime: "20:00", note: "ช่วงจอ" },
  { windowLabel: "21:00-22:59", sampleTime: "22:00", note: "ช่วงกุน" },
  { windowLabel: "23:00-23:59", sampleTime: "23:30", note: "ชวดแรก ก่อนข้ามวันตามนาฬิกา แต่หลายสำนักนับเป็นเสาวันถัดไป" },
];

function buildUnknownBirthTimeProfile(date, place, basePillars) {
  const variants = unknownTimeWindows.map((window) => {
    const birth = buildBirthContext(date, window.sampleTime, place);
    const pillars = calculatePillarsFromSolar(birth.trueSolarDate);
    const changed = pillars.filter((pillar, index) => `${pillar.stem}${pillar.branch}` !== `${basePillars[index].stem}${basePillars[index].branch}`).map((pillar) => pillar.label);
    const dayPillar = pillars[2];
    const hourPillar = pillars[3];
    return {
      ...window,
      trueSolarDate: formatDateInput(birth.trueSolarDate),
      trueSolarTime: formatTimeInput(birth.trueSolarDate),
      pillars,
      changed,
      dayPillarKey: `${dayPillar.stem}${dayPillar.branch}`,
      dayPillarLabel: premiumPillarLabel(dayPillar.stem, dayPillar.branch),
      hourPillarKey: `${hourPillar.stem}${hourPillar.branch}`,
      hourPillarLabel: premiumPillarLabel(hourPillar.stem, hourPillar.branch),
      hourTenGod: tenGodThai(hourPillar.tenGod),
    };
  });
  const possibleHourPillars = uniqueVariantLabels(variants, "hourPillarKey", "hourPillarLabel");
  const possibleDayPillars = uniqueVariantLabels(variants, "dayPillarKey", "dayPillarLabel");
  const unstablePillars = [...new Set(variants.flatMap((variant) => variant.changed))];
  const dayCaution = possibleDayPillars.length > 1
    ? "และมีบางช่วงที่เสาวันอาจต่างจากจุดอ้างอิง โดยเฉพาะช่วงใกล้ 23:00 หลังชดเชยเวลาแดดจริง"
    : "เสาวันค่อนข้างนิ่งในชุดตัวอย่างของวันเดียวกัน";

  return {
    mode: "unknown",
    variants,
    unstablePillars,
    boundaryMinutes: null,
    possibleHourPillars,
    possibleDayPillars,
    riskLevel: `ยังไม่ทราบเวลาเกิด จึงมีเสาเวลาเกิดที่เป็นไปได้ ${possibleHourPillars.length} แบบ ${dayCaution}`,
    summary: `ระบบใช้เวลา 12:00 เป็นจุดอ้างอิงชั่วคราวเพื่ออ่านภาพรวม แล้วไล่ตรวจทุกช่วงยามของวันเกิดให้เห็นว่าถ้าเกิดคนละช่วง เสาเวลาเกิดและพลัง 10 แบบของฝั่งเวลาเกิดจะเปลี่ยนอย่างไร`,
  };
}

function uniqueVariantLabels(items, keyField, labelField) {
  const map = new Map();
  items.forEach((item) => {
    if (!map.has(item[keyField])) map.set(item[keyField], item[labelField]);
  });
  return [...map.values()];
}
function describeSensitivityVariant(delta, changed) {
  const direction = delta === 0 ? "เวลาหลัก" : delta > 0 ? `ช้ากว่า ${delta} นาที` : `เร็วกว่า ${Math.abs(delta)} นาที`;
  if (!changed.length) return `${direction}: เสาหลักไม่เปลี่ยน`;
  return `${direction}: เปลี่ยน ${changed.join(", ")}`;
}

function getNearestHourBoundaryMinutes(date) {
  const minuteOfDay = date.getHours() * 60 + date.getMinutes();
  const boundaries = [60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140, 1260, 1380];
  return Math.min(...boundaries.map((boundary) => Math.min(Math.abs(minuteOfDay - boundary), 1440 - Math.abs(minuteOfDay - boundary))));
}

function formatDateInput(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function formatTimeInput(date) {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function calculatePillarsFromSolar(date) {
  const yearPillar = calculateYearPillar(date);
  const monthPillar = calculateMonthPillar(date, yearPillar.stem);
  const dayPillar = calculateDayPillar(getDayPillarDate(date));
  const hourPillar = calculateHourPillar(date, dayPillar.stem);
  return [
    enrichPillar("Year", yearPillar, dayPillar.stem),
    enrichPillar("Month", monthPillar, dayPillar.stem),
    enrichPillar("Day", dayPillar, dayPillar.stem),
    enrichPillar("Hour", hourPillar, dayPillar.stem),
  ];
}

function calculateYearPillar(date) {
  const year = date.getFullYear();
  const liChun = getSolarTermDate(year, solarTermStarts.find((term) => term.key === "liChun"));
  const baziYear = date < liChun ? year - 1 : year;
  return jiaziFromIndex(mod(baziYear - 4, 60));
}

function calculateMonthPillar(date, yearStem) {
  const branch = getSolarMonthBranch(date);
  const branchMonthIndex = branchOrderFromTiger(branch);
  const firstMonthStemIndex = getFirstMonthStemIndex(yearStem);
  const stem = Object.keys(stemMeta)[mod(firstMonthStemIndex + branchMonthIndex, 10)];
  return { stem, branch };
}

function calculateDayPillar(date) {
  const jdn = gregorianToJdn(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return jiaziFromIndex(mod(jdn - 2451545 - 6, 60));
}

function getDayPillarDate(date) {
  const adjusted = new Date(date);
  if (date.getHours() === 23) adjusted.setDate(adjusted.getDate() + 1);
  return adjusted;
}

function calculateHourPillar(date, dayStem) {
  const hour = date.getHours();
  const branchIndex = hour === 23 ? 0 : Math.floor((hour + 1) / 2) % 12;
  const firstHourStemIndex = getFirstHourStemIndex(dayStem);
  const stem = stems[mod(firstHourStemIndex + branchIndex, 10)];
  return { stem, branch: branches[branchIndex] };
}

function getFirstHourStemIndex(dayStem) {
  const index = stems.indexOf(dayStem);
  if ([0, 5].includes(index)) return 0;
  if ([1, 6].includes(index)) return 2;
  if ([2, 7].includes(index)) return 4;
  if ([3, 8].includes(index)) return 6;
  return 8;
}

function enrichPillar(label, pillar, dayStem) {
  return {
    label,
    stem: pillar.stem,
    branch: pillar.branch,
    tenGod: label === "Day" ? "Day Master" : getTenGod(dayStem, pillar.stem),
    hiddenTenGods: branchMeta[pillar.branch].hidden.map((item) => ({
      stem: item.stem,
      tenGod: getTenGod(dayStem, item.stem),
      weight: item.weight,
    })),
  };
}

function getSolarMonthBranch(date) {
  const year = date.getFullYear();
  const terms = [
    ...getSolarTermsForYear(year - 1),
    ...getSolarTermsForYear(year),
    ...getSolarTermsForYear(year + 1),
  ].sort((left, right) => left.date - right.date);
  let active = terms[0];
  for (const term of terms) {
    if (date >= term.date) active = term;
  }
  return active.branch;
}

function getNextSolarTerm(date) {
  const year = date.getFullYear();
  const candidates = [
    ...getSolarTermsForYear(year).map((term) => term.date),
    ...getSolarTermsForYear(year + 1).map((term) => term.date),
  ].sort((left, right) => left - right);
  return candidates.find((termDate) => termDate > date);
}

function getPreviousSolarTerm(date) {
  const year = date.getFullYear();
  const candidates = [
    ...getSolarTermsForYear(year - 1).map((term) => term.date),
    ...getSolarTermsForYear(year).map((term) => term.date),
  ].filter((termDate) => termDate < date).sort((left, right) => left - right);
  return candidates[candidates.length - 1];
}

function getLuckDirection(gender, yearStem) {
  const yearIsYang = stemMeta[yearStem].polarity === "yang";
  const isMale = gender === "male";
  const forward = (isMale && yearIsYang) || (!isMale && !yearIsYang);
  return {
    forward,
    label: forward ? "เดินหน้า" : "ถอยหลัง",
    rule: forward ? "ชายปีหยาง / หญิงปีหยิน" : "ชายปีหยิน / หญิงปีหยาง",
    yearPolarity: yearIsYang ? "หยาง" : "หยิน",
  };
}

function calculateLuckStartAge(birthDate, forward) {
  const targetTerm = forward ? getNextSolarTerm(birthDate) : getPreviousSolarTerm(birthDate);
  const deltaMs = Math.abs(targetTerm.getTime() - birthDate.getTime());
  const solarDaysExact = deltaMs / 86400000;
  const solarHoursExact = deltaMs / 3600000;
  const solarMinutes = Math.max(0, Math.floor(deltaMs / 60000));
  const parts = decomposeLuckAgeMinutes(solarMinutes);
  const luckAgeDaysExact = solarMinutes / 12; // 12 solar minutes = 1 luck-age day.
  const luckAgeDays = parts.years * 360 + parts.months * 30 + parts.days;
  return {
    ...parts,
    targetTerm,
    targetTermLabel: formatSolarDateTime(targetTerm),
    solarDaysExact,
    solarHoursExact,
    solarMinutes,
    luckAgeDaysExact,
    luckAgeDays,
    decimalYears: luckAgeDaysExact / 360,
    label: formatLuckAge(parts),
  };
}

function decomposeLuckAgeMinutes(totalMinutes) {
  let remaining = totalMinutes;
  const years = Math.floor(remaining / 4320);
  remaining -= years * 4320;
  const months = Math.floor(remaining / 360);
  remaining -= months * 360;
  const days = Math.floor(remaining / 12);
  remaining -= days * 12;
  const hours = remaining * 2;
  return { years, months, days, hours };
}

function formatLuckAge({ years, months, days }) {
  return `${years} ปี ${months} เดือน ${days} วัน`;
}

function formatAgeRange(startAge) {
  return `${formatLuckAge(startAge)} - ${formatLuckAge({ ...startAge, years: startAge.years + 10 })}`;
}

function addLuckAgeToDate(date, age) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + age.years);
  result.setMonth(result.getMonth() + age.months);
  result.setDate(result.getDate() + age.days);
  return result;
}

function formatSolarDateTime(date) {
  return `${formatDateInput(date)} ${formatTimeInput(date)}`;
}

function getSolarTermsForYear(year) {
  return solarTermStarts.map((term) => ({ ...term, date: getSolarTermDate(year, term) }));
}

function getSolarTermDate(year, term) {
  if (year >= 2000 && year <= 2099) {
    const shortYear = year % 100;
    const day = Math.floor(shortYear * 0.2422 + term.c21) - Math.floor((shortYear - 1) / 4);
    return new Date(year, term.month - 1, day, term.hour, 0, 0);
  }
  return new Date(year, term.month - 1, term.day, term.hour, 0, 0);
}

function branchOrderFromTiger(branch) {
  return ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"].indexOf(branch);
}

function getFirstMonthStemIndex(yearStem) {
  const index = stems.indexOf(yearStem);
  if ([0, 5].includes(index)) return 2;
  if ([1, 6].includes(index)) return 4;
  if ([2, 7].includes(index)) return 6;
  if ([3, 8].includes(index)) return 8;
  return 0;
}

function jiaziFromIndex(index) {
  return { stem: stems[mod(index, 10)], branch: branches[mod(index, 12)], index: mod(index, 60) };
}

function getJiaziIndex(stem, branch) {
  for (let index = 0; index < 60; index += 1) {
    if (stems[index % 10] === stem && branches[index % 12] === branch) return index;
  }
  return 0;
}

function gregorianToJdn(year, month, day) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

function mod(value, base) {
  return ((value % base) + base) % base;
}

function buildDayMasterContext(dayStem) {
  const meta = stemMeta[dayStem];
  const master = dayMasters.find((item) => item.stem === dayStem) || dayMasters[0];
  const element = meta?.element || master.element;
  return {
    stem: dayStem,
    master,
    element,
    polarity: meta?.polarity || "yang",
    resourceElement: elements[element].supports,
    officerElement: elements[element].controls,
    outputElement: getGeneratedElement(element),
    wealthElement: getControlledElement(element),
  };
}

function calculateTenGodProfile(dayContext, pillars) {
  const scores = {
    Friend: 0,
    "Rob Wealth": 0,
    "Eating God": 0,
    "Hurting Officer": 0,
    "Direct Wealth": 0,
    "Indirect Wealth": 0,
    "Direct Officer": 0,
    "Seven Killings": 0,
    "Direct Resource": 0,
    "Indirect Resource": 0,
  };
  pillars.forEach((pillar) => {
    if (pillar.label !== "Day") scores[getTenGod(dayContext, pillar.stem)] += 12;
    branchMeta[pillar.branch].hidden.forEach((hidden) => {
      scores[getTenGod(dayContext, hidden.stem)] += Math.round(hidden.weight * 10);
    });
  });
  return { scores };
}

function getTenGod(dayContextOrStem, targetStem) {
  const context = typeof dayContextOrStem === "string" ? buildDayMasterContext(dayContextOrStem) : dayContextOrStem;
  const dayStem = context.stem;
  if (dayStem === targetStem) return "Friend";
  const target = stemMeta[targetStem];
  const samePolarity = context.polarity === target.polarity;
  if (context.element === target.element) return samePolarity ? "Friend" : "Rob Wealth";
  if (target.element === context.outputElement) return samePolarity ? "Eating God" : "Hurting Officer";
  if (target.element === context.wealthElement) return samePolarity ? "Indirect Wealth" : "Direct Wealth";
  if (target.element === context.officerElement) return samePolarity ? "Seven Killings" : "Direct Officer";
  if (target.element === context.resourceElement) return samePolarity ? "Indirect Resource" : "Direct Resource";
  return "Friend";
}

function calculateElementDistribution(pillars) {
  const totals = { WOOD: 0, FIRE: 0, EARTH: 0, METAL: 0, WATER: 0 };
  pillars.forEach((pillar) => {
    totals[stemMeta[pillar.stem].element] += 14;
    branchMeta[pillar.branch].hidden.forEach((hidden) => {
      totals[stemMeta[hidden.stem].element] += hidden.weight * 12;
    });
  });
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0);
  return Object.fromEntries(Object.entries(totals).map(([key, value]) => [key, Math.round((value / total) * 100)]));
}

function calculateStrength(dayContext, pillars, elementValues) {
  const dayElement = dayContext.element;
  const monthBranch = pillars.find((pillar) => pillar.label === "Month").branch;
  const seasonElement = branchMeta[monthBranch].element;
  const { resourceElement, officerElement, outputElement, wealthElement } = dayContext;
  const seasonScore = getSeasonStrengthScore(dayElement, resourceElement, outputElement, monthBranch);
  let rootScore = 0;
  let stemSupportScore = 0;
  let pressureScore = 0;
  pillars.forEach((pillar) => {
    const stemElement = stemMeta[pillar.stem].element;
    const stemWeight = pillar.label === "Month" ? 10 : pillar.label === "Day" ? 0 : 6;
    if (stemElement === dayElement) stemSupportScore += stemWeight;
    if (stemElement === resourceElement) stemSupportScore += Math.round(stemWeight * 0.7);
    if ([officerElement, outputElement, wealthElement].includes(stemElement)) pressureScore += Math.round(stemWeight * 0.55);
    branchMeta[pillar.branch].hidden.forEach((hidden) => {
      const hiddenElement = stemMeta[hidden.stem].element;
      if (hiddenElement === dayElement) rootScore += hidden.weight * 12;
      if (hiddenElement === resourceElement) rootScore += hidden.weight * 5;
    });
  });
  let score = seasonScore;
  score += Math.min(30, rootScore);
  score += Math.min(18, stemSupportScore);
  score += Math.round((elementValues[dayElement] + elementValues[resourceElement]) * 0.2);
  score -= Math.min(18, pressureScore + Math.round((elementValues[officerElement] + elementValues[outputElement] + elementValues[wealthElement]) * 0.06));
  const percentage = Math.min(95, Math.max(5, Math.round(score)));
  return {
    percentage,
    seasonElement,
    seasonScore,
    rootScore: Math.round(rootScore),
    stemSupportScore,
    pressureScore,
    level: strengthLevelFromScore(percentage),
    relations: {
      dayElement,
      resourceElement,
      outputElement,
      wealthElement,
      officerElement,
    },
  };
}

function getSeasonStrengthScore(dayElement, resourceElement, outputElement, monthBranch) {
  const seasonElement = branchMeta[monthBranch].element;
  const storageBranches = { EARTH: ["辰", "戌", "丑", "未"], WOOD: ["辰", "未"], FIRE: ["戌", "未"], METAL: ["丑", "戌"], WATER: ["辰", "丑"] };
  if (seasonElement === dayElement) return 38;
  if (seasonElement === resourceElement) return 30;
  if (storageBranches[dayElement]?.includes(monthBranch)) return 26;
  if (seasonElement === outputElement) return 16;
  return 10;
}

function strengthLevelFromScore(score) {
  if (score < 30) return "อ่อนมาก";
  if (score < 45) return "อ่อน";
  if (score < 61) return "สมดุล";
  if (score < 76) return "แรงกำลังดี";
  return "แรงเต็มถัง";
}

function getGeneratedElement(elementKey) {
  return Object.keys(elements).find((key) => elements[key].supports === elementKey);
}

function getControlledElement(elementKey) {
  return Object.keys(elements).find((key) => elements[key].controls === elementKey);
}

function detectTransformedStructure(dayContext, pillars, elementValues, strengthResult) {
  const dayElement = dayContext.element;
  const monthBranch = pillars.find((pillar) => pillar.label === "Month").branch;
  const seasonElement = branchMeta[monthBranch].element;
  const { resourceElement, outputElement } = dayContext;
  const dayShare = elementValues[dayElement] || 0;
  const resourceShare = elementValues[resourceElement] || 0;
  const outputShare = elementValues[outputElement] || 0;
  const transformationScore =
    (seasonElement === resourceElement ? 34 : 0) +
    Math.min(32, resourceShare) +
    Math.min(18, dayShare) +
    Math.min(14, strengthResult.rootScore) +
    Math.min(8, outputShare);

  if (seasonElement === resourceElement && resourceShare >= 28 && strengthResult.rootScore >= 8 && transformationScore >= 78) {
    return {
      type: "transformed",
      transformedElement: dayElement,
      label: `ดวงมีจังหวะแปรเป็น ${premiumElementLabel(dayElement)}`,
      strengthLabel: "เปลี่ยนแรงเป็นโอกาส",
      favorableElements: [resourceElement, dayElement, outputElement],
      reason: `เดือนเกิดมี ${premiumElementLabel(resourceElement)} ที่ช่วยส่งธาตุหลักประจำตัว ${premiumElementLabel(dayElement)} ชัด มีฐานรองรับ และมี ${premiumElementLabel(outputElement)} เป็นทางระบาย เลยอ่านเป็นจังหวะที่พลังในดวงเปลี่ยนรูปมากกว่าอ่านแค่ว่าอ่อนหรือแรง`,
    };
  }

  return null;
}

function calculateUsefulGodFromProfile(dayContext, strengthResult, elementValues, transformation) {
  if (transformation) {
    return {
      primary: transformation.transformedElement,
      favorableElements: transformation.favorableElements,
      reason: transformation.reason,
    };
  }

  const { element: dayElement, resourceElement, officerElement, outputElement, wealthElement } = dayContext;
  const strength = strengthResult.percentage;
  const candidates = [resourceElement, dayElement, outputElement, wealthElement, officerElement];
  const sortedByNeed = [...new Set(candidates)].sort((left, right) => (elementValues[left] || 0) - (elementValues[right] || 0));
  let primary;
  let favorableElements;
  let reason;

  if (strength >= 70) {
    const drainingCandidates = [officerElement, outputElement, wealthElement].sort((left, right) => (elementValues[left] || 0) - (elementValues[right] || 0));
    primary = drainingCandidates[0];
    favorableElements = [...new Set(drainingCandidates.slice(0, 2))];
    reason = `ธาตุหลักประจำตัว ${premiumElementLabel(dayElement)} มีกำลังสูง จึงเลือกพลังที่ช่วยควบคุม ระบาย หรือแปลงแรงออกไปก่อน`;
  } else if (strength <= 45) {
    primary = strengthResult.rootScore < 8 ? dayElement : resourceElement;
    favorableElements = primary === resourceElement ? [resourceElement, dayElement] : [dayElement, resourceElement];
    reason = `ธาตุหลักประจำตัว ${premiumElementLabel(dayElement)} ยังต้องการแรงหล่อเลี้ยงจากเดือนเกิดและฐานรองรับ จึงเน้น${primary === dayElement ? "ฐานตัวตน" : "แรงหล่อเลี้ยง"}ก่อน แล้วค่อยใช้พลังสนับสนุนร่วม`;
  } else {
    const climateNeed = strengthResult.seasonElement === resourceElement ? outputElement : sortedByNeed[0];
    primary = climateNeed;
    favorableElements = [...new Set([climateNeed, sortedByNeed[0]])].slice(0, 2);
    reason = `ธาตุหลักประจำตัว ${premiumElementLabel(dayElement)} อยู่ช่วงสมดุล จึงดูทั้งพลังที่ยังมีน้อยและบรรยากาศของเดือนเกิด เพื่อเลือกตัวช่วยบาลานซ์ที่ไม่ทำให้ดวงเอนด้านเดียว`;
  }

  return {
    primary,
    favorableElements,
    reason,
  };
}

function buildCalibrationProfile(input, birth, pillars, strengthResult, transformation, usefulProfile) {
  const validation = runValidationSuite();
  const nearTermHours = getNearestSolarTermDistanceHours(birth.trueSolarDate);
  const year = birth.trueSolarDate.getFullYear();
  const warnings = [];
  let score = 72;

  score += Math.round((validation.passed / validation.total) * 14);
  if (year >= 2000 && year <= 2099) score += 6;
  else warnings.push("ปีเกิดอยู่นอกช่วง 2000-2099 เลยใช้จุดเปลี่ยนฤดูกาลแบบประมาณก่อน");

  if (nearTermHours < 24) {
    score -= 18;
    warnings.push("เวลาเกิดอยู่ใกล้จุดเปลี่ยนฤดูกาลมาก แนะนำให้เช็กกับปฏิทินดาราศาสตร์จริงอีกครั้ง");
  } else if (nearTermHours < 72) {
    score -= 8;
    warnings.push("เวลาเกิดค่อนข้างใกล้จุดเปลี่ยนฤดูกาล ถ้าอยากอ่านละเอียดระดับนาที แนะนำให้เช็กเสาเดือนซ้ำอีกที");
  }

  if (strengthResult.percentage >= 43 && strengthResult.percentage <= 57) {
    score -= 5;
    warnings.push("จังหวะพลังชีวิตอยู่ตรงกลางพอดี การเลือกธาตุที่ช่วยให้สมดุลอาจต่างกันได้ตามวิธีให้น้ำหนักเดือนเกิดและฐานรองรับดวง");
  }

  if (transformation) {
    score -= 4;
    warnings.push("ดวงมีรูปแบบเปลี่ยนแรงเป็นโอกาสอยู่ด้วย จุดนี้เป็นกฎอ่านขั้นลึก แนะนำให้อ่านคู่กับซินแสหรือแหล่งเทียบอื่น");
  }

  if (usefulProfile.favorableElements?.length > 2) score -= 2;

  score = Math.max(35, Math.min(96, score));
  return {
    score,
    label: score >= 85 ? "อ่านได้ค่อนข้างนิ่ง" : score >= 70 ? "ใช้วางแผนได้" : "ควรเช็กซ้ำอีกนิด",
    nearTermHours: Math.round(nearTermHours),
    validation,
    warnings,
    inputFingerprint: `${input.date} ${input.time} ${input.place}`,
  };
}

function runValidationSuite() {
  const results = validationCases.map((testCase) => {
    const birth = buildBirthContext(testCase.date, testCase.time, testCase.place);
    const pillars = calculatePillarsFromSolar(birth.trueSolarDate);
    const actual = Object.fromEntries(pillars.map((pillar) => [pillar.label, `${pillar.stem}${pillar.branch}`]));
    const mismatches = Object.entries(testCase.expected)
      .filter(([label, expected]) => actual[label] !== expected)
      .map(([label, expected]) => `${label}: expected ${expected}, got ${actual[label]}`);
    return {
      label: testCase.label,
      passed: mismatches.length === 0,
      mismatches,
    };
  });
  return {
    total: results.length,
    passed: results.filter((result) => result.passed).length,
    results,
  };
}

function getNearestSolarTermDistanceHours(date) {
  const year = date.getFullYear();
  const terms = [
    ...getSolarTermsForYear(year - 1),
    ...getSolarTermsForYear(year),
    ...getSolarTermsForYear(year + 1),
  ];
  return Math.min(...terms.map((term) => Math.abs(term.date.getTime() - date.getTime()) / 3600000));
}

function detectChart(values) {
  const list = Object.values(values);
  const max = Math.max(...list);
  const balanced = list.every((value) => value >= 14 && value <= 26);
  if (max >= 42) return "Dominant One-Element";
  if (balanced) return "Perfectly Balanced";
  return "Balanced Growth";
}

function buildPersonality(tenGodScores, elementValues, strength) {
  const balance = 100 - Math.abs(strength - 55);
  const weakPenalty = strength < 40 ? 10 : 0;
  return {
    leadership: clampScore(tenGodScores["Direct Officer"] * 1.15 + tenGodScores["Seven Killings"] * 0.95 + balance * 0.25 - weakPenalty),
    creativity: clampScore(tenGodScores["Eating God"] * 1.1 + tenGodScores["Hurting Officer"] * 1.2 + elementValues.WOOD * 1.1),
    social: clampScore(tenGodScores.Friend * 0.95 + tenGodScores["Rob Wealth"] * 1.15 + tenGodScores["Eating God"] * 0.55 + elementValues.FIRE * 0.45),
    logic: clampScore(tenGodScores["Direct Resource"] * 1.2 + tenGodScores["Indirect Resource"] + tenGodScores["Direct Officer"] * 0.35 + elementValues.METAL * 0.55),
    emotion: clampScore(tenGodScores["Hurting Officer"] * 0.9 + tenGodScores["Indirect Resource"] * 0.85 + tenGodScores["Eating God"] * 0.35 + elementValues.WATER * 0.8),
    drive: clampScore(tenGodScores["Direct Wealth"] * 0.95 + tenGodScores["Indirect Wealth"] * 1.15 + tenGodScores["Seven Killings"] * 0.55 + Math.max(0, strength - 35) * 0.45),
    resilience: clampScore(strength * 0.65 + tenGodScores["Direct Resource"] * 0.55 + tenGodScores.Friend * 0.35 + elementValues.EARTH * 0.35),
    intuition: clampScore(tenGodScores["Indirect Resource"] * 1.4 + elementValues.WATER * 1.3),
  };
}

function clampScore(value) {
  return Math.max(25, Math.min(96, Math.round(value)));
}

function buildLuck(pillars, birth, gender, usefulProfile) {
  return calculateLuckPillars(pillars, birth, gender, usefulProfile);
}

function calculateLuckPillars(pillars, birth, gender, usefulProfile) {
  const yearPillar = pillars.find((pillar) => pillar.label === "Year");
  const monthPillar = pillars.find((pillar) => pillar.label === "Month");
  const dayPillar = pillars.find((pillar) => pillar.label === "Day");
  const dayContext = buildDayMasterContext(dayPillar.stem);
  const direction = getLuckDirection(gender, yearPillar.stem);
  const startAge = calculateLuckStartAge(birth.trueSolarDate, direction.forward);
  const monthIndex = getJiaziIndex(monthPillar.stem, monthPillar.branch);
  const favorableElements = usefulProfile.favorableElements || [usefulProfile.primary];
  return Array.from({ length: 8 }, (_, index) => {
    const ageDetail = {
      years: startAge.years + index * 10,
      months: startAge.months,
      days: startAge.days,
    };
    const age = ageDetail.years;
    const ageRangeLabel = formatAgeRange(ageDetail);
    const startDate = addLuckAgeToDate(birth.trueSolarDate, ageDetail);
    const endDate = addLuckAgeToDate(birth.trueSolarDate, { ...ageDetail, years: ageDetail.years + 10 });
    const luckJiazi = jiaziFromIndex(monthIndex + (direction.forward ? index + 1 : -(index + 1)));
    const master = dayMasters.find((item) => item.stem === luckJiazi.stem) || dayMasters[0];
    const branch = luckJiazi.branch;
    const activatedTenGod = getTenGod(dayContext, luckJiazi.stem);
    const branchTenGods = branchMeta[branch].hidden.map((hidden) => ({
      stem: hidden.stem,
      element: stemMeta[hidden.stem].element,
      tenGod: getTenGod(dayContext, hidden.stem),
      weight: hidden.weight,
    }));
    const branchRelations = getBranchRelations(branch, pillars);
    const favorability = scoreLuckFavorability(luckJiazi, branchTenGods, favorableElements);
    const focus = buildDecadeFocusFromDiagnosis(activatedTenGod, branchTenGods, branchRelations, favorability, index);
    const climate = buildDecadeClimateFromDiagnosis(luckJiazi, master, activatedTenGod, branchTenGods, branchRelations, favorability, ageRangeLabel, age, index);
    const annualLuck = buildAnnualLuckWithinDecade(startDate.getFullYear(), age, dayContext, pillars, favorableElements);
    const stagePlan = buildDecadeStagePlan(activatedTenGod, branchRelations, favorability, age);
    const chapter = buildDecadeChapter(activatedTenGod, branchRelations, favorability, age, annualLuck, stagePlan);
    return {
      age,
      ageDetail,
      ageLabel: formatLuckAge(ageDetail),
      ageRangeLabel,
      startDate,
      startDateLabel: formatSolarDateTime(startDate),
      endDate,
      endDateLabel: formatSolarDateTime(endDate),
      direction: direction.label,
      directionRule: direction.rule,
      directionForward: direction.forward,
      yearStemPolarity: direction.yearPolarity,
      startAge,
      activatedTenGod,
      branchTenGods,
      branchRelations,
      favorability,
      master,
      branch,
      pillar: premiumPillarLabel(master.stem, branch),
      pillarCode: `${master.stem}${branch}`,
      focus,
      climate,
      eventThemes: buildDecadeEventsFromDiagnosis(activatedTenGod, branchTenGods, branchRelations, favorability),
      opportunities: buildDecadeOpportunitiesFromDiagnosis(activatedTenGod, favorability, age),
      risks: buildDecadeRisksFromDiagnosis(activatedTenGod, branchRelations, favorability),
      advice: buildDecadeAdviceFromDiagnosis(favorableElements, activatedTenGod, branchRelations, favorability, age),
      innerWork: buildInnerWorkFromDiagnosis(activatedTenGod, branchRelations, favorability),
      stagePlan,
      chapter,
      annualLuck,
    };
  });
}

function buildAnnualLuckWithinDecade(decadeStartYear, decadeStartAge, dayContext, pillars, favorableElements) {
  return Array.from({ length: 10 }, (_, offset) => {
    const age = decadeStartAge + offset;
    const year = decadeStartYear + offset;
    const yearPillar = calculateYearPillar(new Date(year, 6, 1, 12, 0, 0));
    const stemTenGod = getTenGod(dayContext, yearPillar.stem);
    const branchTenGods = branchMeta[yearPillar.branch].hidden.map((hidden) => ({
      stem: hidden.stem,
      element: stemMeta[hidden.stem].element,
      tenGod: getTenGod(dayContext, hidden.stem),
      weight: hidden.weight,
    }));
    const relations = getBranchRelations(yearPillar.branch, pillars);
    const favorability = scoreLuckFavorability(yearPillar, branchTenGods, favorableElements);
    const signal = relations.some((relation) => relation.type === "clash")
      ? "ปีเปลี่ยนแรง"
      : favorability.supportScore >= 55
        ? "ปีช่วยส่ง"
        : favorability.supportScore < 25
          ? "ปีฝึกใจ"
          : "ปีปรับจังหวะ";
    return {
      age,
      year,
      pillar: premiumPillarLabel(yearPillar.stem, yearPillar.branch),
      pillarCode: `${yearPillar.stem}${yearPillar.branch}`,
      stemTenGod,
      signal,
      favorability,
      relations,
      summary: `${year}: ${premiumPillarLabel(yearPillar.stem, yearPillar.branch)} ปลุก ${tenGodThai(stemTenGod)} ให้เด่นขึ้นในชีวิตจริง (${signal})`,
    };
  });
}

function getBranchRelations(luckBranch, pillars) {
  const luckIndex = branches.indexOf(luckBranch);
  const harmPairs = new Set(["0-7", "1-6", "2-5", "3-4", "8-11", "9-10"]);
  const combinePairs = new Set(["0-1", "2-11", "3-10", "4-9", "5-8", "6-7"]);
  return pillars
    .map((pillar) => {
      const natalIndex = branches.indexOf(pillar.branch);
      const pair = [Math.min(luckIndex, natalIndex), Math.max(luckIndex, natalIndex)].join("-");
      let type = "support";
      if (mod(luckIndex - natalIndex, 12) === 6) type = "clash";
      else if (harmPairs.has(pair)) type = "harm";
      else if (combinePairs.has(pair)) type = "combine";
      else if (luckBranch === pillar.branch) type = "self";
      return { pillar: pillar.label, branch: pillar.branch, type };
    })
    .filter((relation) => relation.type !== "support");
}

function scoreLuckFavorability(luckJiazi, branchTenGods, favorableElements) {
  const stemElement = stemMeta[luckJiazi.stem].element;
  const branchElement = branchMeta[luckJiazi.branch].element;
  const hiddenHits = branchTenGods.filter((item) => favorableElements.includes(item.element));
  const supportScore =
    (favorableElements.includes(stemElement) ? 35 : 0) +
    (favorableElements.includes(branchElement) ? 30 : 0) +
    Math.round(hiddenHits.reduce((sum, item) => sum + item.weight, 0) * 25);
  const label = supportScore >= 55 ? "มีแรงช่วยส่งให้เติบโต" : supportScore >= 25 ? "ต้องเดินอย่างมีจังหวะ" : "ชวนฝึกสมดุลอย่างอ่อนโยน";
  return { supportScore, label, stemElement, branchElement, hiddenHits };
}

function tenGodDomain(tenGod) {
  const map = {
    Friend: "ตัวตน เพื่อนร่วมทาง การยืนหยัดด้วยตัวเอง",
    "Rob Wealth": "การแข่งขัน การแบ่งทรัพยากรกับคนรอบตัว และการวางขอบเขตน้ำใจ",
    "Eating God": "ผลงาน ความสบายใจ คอนเทนต์ และการสร้างคุณค่าแบบนุ่มนวล",
    "Hurting Officer": "การแสดงออก การท้าทายกติกา ความสามารถที่ต้องการพื้นที่",
    "Direct Wealth": "รายได้จริง การจัดการเงิน งานขาย และความสัมพันธ์ที่จับต้องได้",
    "Indirect Wealth": "โอกาส เงินก้อน การลงทุน เครือข่าย และจังหวะลองตลาดอย่างมีสติ",
    "Direct Officer": "ตำแหน่ง กฎระเบียบ ความรับผิดชอบ คู่ครอง และภาพลักษณ์ทางสังคม",
    "Seven Killings": "แรงกดดัน การแข่งขัน อำนาจ การตัดสินใจเร็ว และบทเรียนใหญ่ที่หลอมความกล้า",
    "Direct Resource": "การเรียนรู้ ผู้ใหญ่ ใบรับรอง แรงสนับสนุน และการพักฟื้น",
    "Indirect Resource": "สัญชาตญาณ ความรู้เฉพาะทาง งานเบื้องหลัง และการตีความลึก",
  };
  return map[tenGod] || "บทบาทชีวิตที่ถูกกระตุ้น";
}

function relationText(relations) {
  if (!relations.length) return "ยังไม่มีแรงชนที่ชวนให้ปรับตัวหรือแรงดึงดูดให้เชื่อมโยงที่เด่นเกินไป จึงอ่านผ่านภาพรวมของช่วงนี้ได้อย่างค่อยเป็นค่อยไป";
  const typeLabels = { clash: "แรงชนที่ชวนให้ปรับตัวที่ขอให้ขยับตำแหน่งชีวิต", harm: "แรงสะสมเล็ก ๆ ที่ควรคุยให้ชัด", combine: "แรงดึงดูดให้เชื่อมโยงที่พาคนหรือโอกาสเข้าหา", self: "แรงทับซ้ำที่ทำให้บทเรียนเดิมกลับมาให้เห็นชัด" };
  return relations.map((relation) => `${typeLabels[relation.type]}กับ${pillarPositionThai(relation.pillar)} ${premiumBranchLabel(relation.branch)}`).join(", ");
}

function buildDecadeFocusFromDiagnosis(activatedTenGod, branchTenGods, branchRelations, favorability, index) {
  const hiddenLead = branchTenGods[0]?.tenGod || activatedTenGod;
  const relationLead = branchRelations.find((relation) => relation.type === "clash" || relation.type === "harm");
  if (relationLead) return `${tenGodThai(activatedTenGod)} ถูกเร่งผ่าน${relationLead.type === "clash" ? "แรงชนที่ชวนให้ปรับตัว" : "แรงสะสม"}ของ${pillarPositionThai(relationLead.pillar)}`;
  if (favorability.supportScore >= 55) return `${tenGodThai(activatedTenGod)} เปิดทางด้วยธาตุที่ช่วยให้สมดุล`;
  if (hiddenLead !== activatedTenGod) return `${tenGodThai(activatedTenGod)} อยู่ด้านที่เห็นชัด แต่ใจลึก ๆ กำลังเรียนรู้ ${tenGodThai(hiddenLead)}`;
  return [`จัดระเบียบ ${tenGodThai(activatedTenGod)}`, `ทดสอบบทบาท ${tenGodThai(activatedTenGod)}`, `ต่อยอด ${tenGodThai(activatedTenGod)}`, `เปลี่ยนวิธีใช้ ${tenGodThai(activatedTenGod)}`][index % 4];
}

function buildDecadeClimateFromDiagnosis(luckJiazi, master, activatedTenGod, branchTenGods, branchRelations, favorability, ageRangeLabel, ageStart, index) {
  const psych = getTenGodPsychology(activatedTenGod);
  const lifeStage = getHumanAgeStage(ageStart);
  const transition = buildDecadeTransition(index, activatedTenGod, favorability);
  const example = getDecadeRealLifeExample(activatedTenGod, branchRelations, favorability, ageStart);
  const tempo = favorability.supportScore >= 55
    ? "ช่วงนี้มีแรงช่วยส่ง เหมาะกับการหยิบสิ่งที่ซ้อมไว้ออกมาใช้จริง"
    : favorability.supportScore < 25
      ? "ช่วงนี้ควรเดินแบบมีแผน ไม่ต้องรีบพิสูจน์ทุกอย่างพร้อมกัน"
      : "ช่วงนี้เหมาะกับการลอง ปรับ และค่อย ๆ เห็นว่าทางไหนใช่กับตัวเอง";
  return `ช่วงอายุ ${ageRangeLabel} คือ ${lifeStage.label} ${lifeStage.copy} ${tempo} ${transition} ลึก ๆ แล้วรอบนี้แตะเรื่อง ${psych.coreDrive} ถ้าใจเริ่มเหนื่อย ให้ระวังรูปแบบเดิมอย่าง ${psych.shadowPattern} ${example}`;
}
function buildDecadeEventsFromDiagnosis(activatedTenGod, branchTenGods, branchRelations, favorability) {
  const psych = getTenGodPsychology(activatedTenGod);
  const events = [
    `หัวใจของรอบ: ${tenGodThai(activatedTenGod)} - ${tenGodDomain(activatedTenGod)}`,
    `ชั้นในของใจ: ${psych.coreDrive}`,
    `แรงซ่อนด้านล่าง: ${branchTenGods.map((item) => `${premiumStemLabel(item.stem)} พา ${tenGodThai(item.tenGod)}`).join(" / ")}`,
    `ภาพรวมของช่วงนี้: ${favorability.label}`,
  ];
  if (branchRelations.length) events.push(`สัญญาณกับพื้นดวง: ${relationText(branchRelations)}`);
  return events;
}

function buildDecadeOpportunitiesFromDiagnosis(activatedTenGod, favorability, ageStart) {
  const actions = {
    Friend: "สร้างฐานตัวตน เลือกทีมที่เท่าเทียม และประกาศขอบเขตให้ชัด",
    "Rob Wealth": "เปลี่ยนการแข่งขันเป็นความร่วมมือที่มีข้อตกลงงดงาม และแยกเงินส่วนตัวออกจากเงินร่วม",
    "Eating God": "ทำผลงานระยะยาว คอนเทนต์ ความเชี่ยวชาญ หรือสินทรัพย์ทางปัญญา",
    "Hurting Officer": "ใช้เสียงของตัวเอง รีแบรนด์ และเปลี่ยนความไม่พอใจเป็นข้อเสนอที่วัดผลได้",
    "Direct Wealth": "จัดระเบียบรายได้ ทรัพย์สิน ลูกค้า และสัญญาที่สร้างเงินสม่ำเสมอ",
    "Indirect Wealth": "ทดลองตลาด ลงทุนแบบจำกัดเดิมพัน และใช้เครือข่ายเปิดประตู",
    "Direct Officer": "รับบทบาททางการ สอบใบรับรอง ขึ้นตำแหน่ง หรือจัดชีวิตให้มีมาตรฐาน",
    "Seven Killings": "รับโปรเจกต์ยาก ฝึกวินัย และเปลี่ยนแรงกดดันเป็นอำนาจตัดสินใจ",
    "Direct Resource": "เรียนต่อ ขอคำแนะนำจากผู้มีประสบการณ์ สร้างจังหวะพักฟื้น และเก็บความรู้ให้เป็นทรัพย์สิน",
    "Indirect Resource": "ทำงานวิจัย งานลึก งานเบื้องหลัง หรือพัฒนาสัญชาตญาณให้มีหลักฐานรองรับ",
  };
  const timing = favorability.supportScore >= 55 ? `ช่วงกลางรอบอายุ ${ageStart + 3}-${ageStart + 6} เหมาะกับการเร่งผลอย่างมีวินัย` : `ช่วงต้นรอบอายุ ${ageStart}-${ageStart + 2} ควรทดลองเล็กก่อน แล้วค่อยขยายเมื่อรูปแบบเริ่มชัด`;
  return `${actions[activatedTenGod]} ${timing} ภาพที่เห็นได้ในชีวิตจริงคือการเลือกประชุมให้น้อยลงแต่คมขึ้น วางข้อตกลงให้ชัดก่อนรับงานใหญ่ และจดบทเรียนหลังการตัดสินใจสำคัญไว้เสมอ`;
}

function buildDecadeRisksFromDiagnosis(activatedTenGod, branchRelations, favorability) {
  const risks = {
    Friend: "อาจยึดจุดยืนเดิมเพราะอยากปกป้องตัวเอง หรือเกรงใจคนใกล้ตัวจนลืมฟังเสียงของใจ",
    "Rob Wealth": "ควรดูแลขอบเขตเงิน เวลา และน้ำใจให้ชัด เพื่อไม่ให้ความใจกว้างกลายเป็นความเหนื่อยที่พูดยาก",
    "Eating God": "อาจเพลินกับสิ่งที่สบายใจจนเลื่อนงานสำคัญ จึงควรมีจังหวะส่งมอบที่อ่อนโยนแต่จริงจัง",
    "Hurting Officer": "เสียงจริงของคุณมีพลังมาก ควรเลือกถ้อยคำให้เปิดประตูแทนการทำให้คนในห้องประชุมตั้งกำแพง",
    "Direct Wealth": "ความมั่นคงเป็นเรื่องดี แต่อย่าให้ตัวเลข ภาระ หรือสัญญากลายเป็นเครื่องวัดคุณค่าของหัวใจ",
    "Indirect Wealth": "โอกาสบางอย่างสวยงามแต่ยังต้องพิสูจน์ ควรเริ่มจากวงเงินเล็ก ภาพจริง และเวลาทบทวนก่อนตอบตกลง",
    "Direct Officer": "บทบาทและภาพลักษณ์อาจเรียกร้องมากขึ้น จึงต้องแยกความรับผิดชอบที่ใช่ออกจากความคาดหวังที่แบกเกินจำเป็น",
    "Seven Killings": "เมื่อแรงกดดันมาเร็ว ใจอาจอยากตอบโต้เร็วพอกัน ให้หายใจยาวขึ้นก่อนเลือกการตัดสินใจที่ส่งผลไกล",
    "Direct Resource": "ความช่วยเหลือเป็นฐานที่ดี แต่ถ้ารอนานเกินไปอาจทำให้การลงมือถูกเลื่อนออกไปอย่างน่าเสียดาย",
    "Indirect Resource": "สัญชาตญาณละเอียดมาก จึงควรมีหลักฐาน คนคุยที่ไว้ใจได้ และกิจวัตรที่ช่วยไม่ให้ใจคิดวนลำพัง",
  };
  const relationRisk = branchRelations.some((relation) => relation.type === "clash")
    ? " รอบนี้มีแรงชนที่ชวนให้ปรับตัว จึงควรทำแผนสำรองก่อนเปลี่ยนงาน ย้ายบ้าน หรือคุยเรื่องความสัมพันธ์ที่กระทบอนาคต"
    : branchRelations.some((relation) => relation.type === "harm")
      ? " รอบนี้มีแรงสะสมเล็ก ๆ จึงควรเคลียร์เรื่องค้างใจตั้งแต่ยังเป็นเรื่องเบา ก่อนจะกลายเป็นความไม่ไว้ใจกัน"
      : "";
  const balanceRisk = favorability.supportScore < 25 ? " เพราะพลังของรอบนี้ยังไม่ค่อยเข้ากับธาตุที่ช่วยให้สมดุล จึงควรลดการตัดสินใจแบบสุดโต่งและให้เวลาตัวเองตรวจความจริงอีกชั้น" : "";
  return `${risks[activatedTenGod]}${relationRisk}${balanceRisk}`;
}

function buildDecadeAdviceFromDiagnosis(favorableElements, activatedTenGod, branchRelations, favorability, ageStart) {
  const usefulText = favorableElements.map((key) => premiumElementLabel(key)).join(" และ ");
  const relationAdvice = branchRelations.some((relation) => relation.type === "clash")
    ? "ทำแผนสำรองก่อนเปลี่ยนใหญ่ และให้เวลาตัวเอง 90 วันหลังเหตุการณ์แรง ๆ ก่อนสรุปชีวิต"
    : branchRelations.some((relation) => relation.type === "combine")
      ? "ใช้คน ความร่วมมือ และสัญญาระยะยาวให้เป็นประโยชน์ แต่อย่าให้การผูกพันทำให้เสียอิสระ"
      : "วางจังหวะทบทวนทุกปี เพราะรอบนี้เปลี่ยนผ่านแบบค่อยเป็นค่อยไป";
  return `ใช้ธาตุที่ช่วยให้สมดุล ${usefulText} เป็นตัวช่วยเลือกทาง เมื่อ ${tenGodThai(activatedTenGod)} เด่นขึ้น ให้ถามว่าการตัดสินใจนี้ทำให้ใจมีพื้นที่หายใจขึ้นหรือบีบพลังชีวิตให้แคบลง ${relationAdvice} จุดที่น่ากลับมาเช็กตัวเองอยู่ช่วงอายุ ${ageStart + 3}-${ageStart + 6}; ถ้าช่วงนั้นเริ่มเห็นผลค่อยขยับต่อ แต่ถ้ายังฝืด ลองปรับวิธีก่อนใส่แรงเพิ่ม เช่น ทบทวนสัญญา คุยกับคนรักให้ตรงขึ้น หรือพักหนึ่งคืนก่อนตอบรับงานใหญ่`;
}

function buildInnerWorkFromDiagnosis(activatedTenGod, branchRelations, favorability) {
  const psych = getTenGodPsychology(activatedTenGod);
  const base = {
    Friend: "ฝึกยืนด้วยตัวเองโดยไม่ต้องต่อต้านทุกคน",
    "Rob Wealth": "ฝึกแยกน้ำใจออกจากข้อตกลง และกล้าพูดเรื่องผลประโยชน์",
    "Eating God": "ฝึกทำสิ่งที่สบายใจให้มีวินัยและส่งมอบได้จริง",
    "Hurting Officer": "ฝึกพูดความจริงแบบสร้างทางเลือก ไม่ใช่เผาสะพาน",
    "Direct Wealth": "ฝึกถือทรัพย์และภาระโดยไม่ให้เงินกลายเป็นความกลัว",
    "Indirect Wealth": "ฝึกแยกโอกาสจริงออกจากความตื่นเต้นชั่วคราว",
    "Direct Officer": "ฝึกอยู่กับกฎโดยไม่สูญเสียเสียงของตัวเอง",
    "Seven Killings": "ฝึกนิ่งภายใต้แรงกดดันและเลือกพื้นที่ใช้พลังให้คุ้มที่สุด",
    "Direct Resource": "ฝึกรับความช่วยเหลือโดยไม่หยุดโต",
    "Indirect Resource": "ฝึกเชื่อสัญชาตญาณพร้อมตรวจหลักฐาน",
  };
  const relationLayer = branchRelations.length ? ` บทเรียนซ้อนคือการรับมือกับ ${relationText(branchRelations)}` : "";
  const balanceLayer = favorability.supportScore >= 55 ? " รอบนี้มีแรงช่วยส่ง ใช้จังหวะดีให้เป็นวินัย ไม่ใช่ใช้จนหมดแรง" : " รอบนี้ต้องบริหารพลัง อย่าฝืนให้ทุกอย่างสำเร็จพร้อมกัน";
  return `${base[activatedTenGod]} ในชีวิตจริงอาจเริ่มจากเรื่องเล็กมาก เช่น เว้นหนึ่งจังหวะก่อนตอบแชตงาน ตั้งขอบเขตเวลาพัก หรือพูดความต้องการกับคนรักให้ชัดขึ้น ในเชิงจิตวิทยาให้ฝึกว่า ${psych.repairPractice}${relationLayer}${balanceLayer}`;
}

function buildDecadeStagePlan(activatedTenGod, branchRelations, favorability, ageStart) {
  const psych = getTenGodPsychology(activatedTenGod);
  const early = branchRelations.some((relation) => relation.type === "clash")
    ? "ปี 1-3: จัดการแรงเปลี่ยนก่อน อย่าเพิ่งล็อกชีวิตด้วยสัญญายาวถ้าภาพจริงยังไม่นิ่ง"
    : `ปี 1-3: สังเกตว่า ${tenGodThai(activatedTenGod)} เข้ามาผ่านเรื่องใด และมันแตะความต้องการเรื่อง ${psych.coreDrive} แบบไหน`;
  const mid = favorability.supportScore >= 55
    ? "ปี 4-6: เร่งใช้โอกาส เพราะธาตุของรอบช่วยส่งดวงพอให้ขยายผล"
    : `ปี 4-6: เลือกขยายเฉพาะสิ่งที่พิสูจน์แล้ว อย่าขยายจาก ${psych.shadowPattern}`;
  const late = `ปี 7-10: เก็บบทเรียน ตัดสิ่งที่กินพลัง และส่งต่อแบบฝึก "${psych.repairPractice}" เข้าสู่รอบถัดไป`;
  return { early, mid, late };
}

function buildDecadeChapter(activatedTenGod, branchRelations, favorability, ageStart, annualLuck, stagePlan) {
  const psych = getTenGodPsychology(activatedTenGod);
  const lifeStage = getHumanAgeStage(ageStart);
  const example = getDecadeRealLifeExample(activatedTenGod, branchRelations, favorability, ageStart);
  const strongYears = annualLuck.filter((year) => year.favorability.supportScore >= 55).map((year) => year.year);
  const testYears = annualLuck.filter((year) => year.signal === "ปีฝึกใจ" || year.relations.some((relation) => relation.type === "clash")).map((year) => year.year);
  const relationTone = branchRelations.some((relation) => relation.type === "clash")
    ? "บทนี้เปิดด้วยแรงเปลี่ยนที่ทำให้ชีวิตต้องจัดตำแหน่งใหม่"
    : branchRelations.some((relation) => relation.type === "combine")
      ? "บทนี้พาคน โอกาส หรือพันธะระยะยาวเข้ามาเป็นตัวเร่ง"
      : "บทนี้ค่อย ๆ เปลี่ยนผ่านผ่านการตัดสินใจซ้ำ ๆ มากกว่าการเปลี่ยนแบบฉับพลัน";
  const titleMap = {
    Friend: "บทแห่งการยืนบนขาของตัวเอง",
    "Rob Wealth": "บทแห่งขอบเขต น้ำใจ และผลประโยชน์",
    "Eating God": "บทแห่งผลงานที่เลี้ยงใจ",
    "Hurting Officer": "บทแห่งเสียงของตัวเอง",
    "Direct Wealth": "บทแห่งฐานทรัพย์และความมั่นคง",
    "Indirect Wealth": "บทแห่งโอกาสที่ต้องถือหางเสือด้วยสติ",
    "Direct Officer": "บทแห่งบทบาท กฎ และความรับผิดชอบ",
    "Seven Killings": "บทแห่งแรงกดดันที่หลอมอำนาจภายใน",
    "Direct Resource": "บทแห่งการพักฟื้น เรียนรู้ และรับการสนับสนุน",
    "Indirect Resource": "บทแห่งสัญชาตญาณ ความหมาย และงานลึก",
  };
  const questionMap = {
    Friend: "ฉันกำลังยืนเพื่อตัวเองจริง ๆ หรือกำลังต่อต้านเพราะกลัวถูกกลืน",
    "Rob Wealth": "ฉันแบ่งพลัง เงิน และน้ำใจอย่างยุติธรรมกับตัวเองหรือยัง",
    "Eating God": "สิ่งที่ทำให้สบายใจสามารถกลายเป็นผลงานที่มีวินัยได้อย่างไร",
    "Hurting Officer": "ความจริงที่อยากพูดจะกลายเป็นทางเลือกใหม่แทนการปะทะได้ไหม",
    "Direct Wealth": "ความมั่นคงแบบไหนที่ดูแลใจได้ โดยไม่ทำให้ชีวิตหายใจไม่ออก",
    "Indirect Wealth": "โอกาสไหนคือสัญญาณจริง และโอกาสไหนเป็นแค่ความตื่นเต้น",
    "Direct Officer": "กฎใดช่วยให้เติบโต และกฎใดทำให้กลัวจนเสียเสียงของตัวเอง",
    "Seven Killings": "แรงกดดันนี้ต้องการให้ฉันตั้งหลักได้ดีขึ้น หรือกำลังชวนให้ฉันเลือกพื้นที่ใช้พลังใหม่",
    "Direct Resource": "ฉันรับความช่วยเหลือเป็นฐานเติบโตได้ไหม โดยไม่หยุดลงมือ",
    "Indirect Resource": "สัญชาตญาณนี้มีหลักฐานอะไร และอะไรเป็นเพียงความกลัวที่คิดซ้ำ",
  };
  return {
    title: titleMap[activatedTenGod] || "บทชีวิตที่กำลังเปิดขึ้น",
    narrative: `${relationTone} นี่คือ ${lifeStage.label} จึงควรอ่านรอบนี้ผ่านชีวิตจริง ไม่ใช่อ่านแยกจากอายุและภาระที่กำลังถืออยู่ แกนในคือ ${psych.coreDrive} ถ้ารอบนี้ถูกใช้ดี ชีวิตจะไม่ใช่แค่ผ่านเหตุการณ์ แต่จะเข้าใจวิธีตอบสนองของตัวเองลึกขึ้น ${example}`,
    reflectiveQuestion: questionMap[activatedTenGod] || "รอบนี้กำลังขอให้ฉันเติบโตออกจากรูปแบบเดิมอย่างไร",
    strongYears,
    testYears,
    closing: `แบบฝึกหลักของบทนี้คือ ${psych.repairPractice} โดยอ่านร่วมกับแผนช่วงต้น กลาง และปลายรอบ: ${stagePlan.early} ${stagePlan.mid} ${stagePlan.late}`,
    intensity: favorability.supportScore >= 55 ? "บทนี้มีแรงส่ง ใช้โอกาสให้มีวินัย" : favorability.supportScore >= 25 ? "บทนี้ใช้ได้ แต่ต้องบริหารแรงและขอบเขต" : "บทนี้ชวนฝึกสมดุล ต้องเลือกพื้นที่ใช้พลังและจังหวะพักให้ดี",
  };
}

function buildDecadeFocus(elementKey, index) {
  const map = {
    WOOD: ["สร้างตัวตน", "ขยายเครือข่าย", "เริ่มสิ่งใหม่", "เติบโตเป็นผู้นำ"],
    FIRE: ["ถูกมองเห็น", "สื่อสารและสร้างชื่อ", "เร่งแรงบันดาลใจ", "ยืนบนเวทีของตัวเอง"],
    EARTH: ["สร้างฐาน", "รับผิดชอบทรัพย์สิน", "ดูแลครอบครัว", "จัดระเบียบชีวิต"],
    METAL: ["ตัดสินใจใหญ่", "สร้างมาตรฐาน", "เปลี่ยนอาชีพ", "ยกระดับวินัย"],
    WATER: ["เรียนรู้ลึก", "เดินทาง/เปลี่ยนมุมมอง", "สะสมปัญญา", "ค้นหาทิศทางภายใน"],
  };
  return map[elementKey][index % 4];
}

function buildDecadeClimate(elementKey, index) {
  const elementText = elementArchetypes[elementKey];
  const phase = ["เริ่มเปิดวงจรใหม่", "เร่งให้เห็นผล", "ทดสอบความมั่นคง", "เก็บเกี่ยวและปรับทิศ", "ปล่อยของเก่าเพื่อขึ้นรอบใหม่", "สรุปบทเรียนสำคัญ"][index];
  return `พลังหลักของรอบนี้คือ ${premiumElementLabel(elementKey)} จึงพาเรื่อง ${elementText} เข้ามาเด่น ช่วงอายุนี้มีลักษณะ ${phase} เหตุการณ์มักไม่ได้มาแบบทันทีทันใด แต่ค่อย ๆ บังคับให้เลือกว่าชีวิตควรลงทุนพลังไปกับอะไร`;
}

function buildDecadeEvents(elementKey, index, activatedTenGod) {
  const events = {
    WOOD: ["เริ่มเส้นทางเรียนรู้ใหม่", "มีคนชวนร่วมโปรเจกต์", "เปลี่ยนกลุ่มสังคมหรือทีม", "มีบทบาทนำมากขึ้น"],
    FIRE: ["งานหรือภาพลักษณ์ถูกจับตามอง", "มีโอกาสพูด นำเสนอ หรือออกสื่อ", "ความรักและแรงดึงดูดเด่นขึ้น", "ตัดสินใจจากความปรารถนาชัดขึ้น"],
    EARTH: ["เรื่องบ้าน ครอบครัว หรือทรัพย์สินเด่น", "ภาระหน้าที่เพิ่ม", "ต้องจัดระเบียบเงินและเวลา", "สร้างฐานชีวิตระยะยาว"],
    METAL: ["เปลี่ยนกติกาชีวิต", "ตัดความสัมพันธ์หรืองานที่ไม่ตรงมาตรฐาน", "มีการสอบ แข่งขัน หรือถูกดูผลงานอย่างจริงจัง", "ต้องตัดสินใจเด็ดขาด"],
    WATER: ["เดินทาง เรียนต่อ หรือย้ายบริบท", "สนใจศาสตร์ลึกหรือการค้นหาตัวเอง", "เจอเรื่องใหม่ที่เปลี่ยนมุมมอง", "ต้องฟังสัญชาตญาณมากขึ้น"],
  };
  return [`พลัง 10 แบบของดวงที่เด่นขึ้น: ${tenGodThai(activatedTenGod)}`, ...rotate(events[elementKey], index).slice(0, 3)];
}

function buildDecadeOpportunities(elementKey, index, ageStart, activatedTenGod) {
  const opportunities = {
    WOOD: "เหมาะกับการปลูกเมล็ดใหม่ สร้างแฟ้มผลงาน เรียนทักษะ และต่อยอดความสัมพันธ์ที่มีอนาคต",
    FIRE: "เหมาะกับการเปิดตัวงาน สร้างชื่อในแบบของตัวเอง ทำคอนเทนต์ และแสดงความสามารถให้คนเห็น",
    EARTH: "เหมาะกับการซื้อทรัพย์สิน วางระเบียบครอบครัว สร้างกองทุนสำรอง และทำธุรกิจที่มั่นคง",
    METAL: "เหมาะกับการรีแบรนด์ ตัดสิ่งที่ไม่คุ้มค่า สอบใบรับรอง และตั้งมาตรฐานชีวิตใหม่",
    WATER: "เหมาะกับการเรียนรู้ เดินทาง ทำวิจัย เขียนหนังสือ และเปิดรับมุมมองที่ลึกกว่าเดิม",
  };
  return `${opportunities[elementKey]} จุดที่ควรใช้คือช่วงกลางรอบอายุ ${ageStart + 3}-${ageStart + 6} ปี เพราะพลังมักเริ่มนิ่งพอให้ตัดสินใจเชิงรุก โดยเฉพาะเรื่องที่สัมพันธ์กับ ${activatedTenGod}`;
}

function buildDecadeRisks(elementKey, index, activatedTenGod) {
  const risks = {
    WOOD: "ขยายเร็วเกินไป รับหลายบทบาทพร้อมกัน หรือยึดติดภาพอนาคตจนไม่เห็นข้อจำกัดปัจจุบัน",
    FIRE: "ใช้แรงใจมากเกินจนหมดไฟ ถูกความคาดหวังภายนอกลาก หรือรีบพิสูจน์ตัวเองจนเสียสมดุล",
    EARTH: "รับผิดชอบมากเกิน ขยับช้าเพราะกลัวเสียฐานเดิม หรือผูกคุณค่าตัวเองกับหน้าที่มากเกินไป",
    METAL: "แข็งกับตัวเองหรือคนอื่นเกินไป ตัดสินเร็วโดยไม่ฟังบริบท หรือสร้างมาตรฐานที่ทำให้เครียด",
    WATER: "คิดมาก ลังเล ไหลตามสถานการณ์จนเสียทิศ หรือเก็บความรู้สึกไว้จนสื่อสารไม่ชัด",
  };
  return `${risks[elementKey]} ถ้า ${activatedTenGod} ทำงานเกินสมดุล เหตุการณ์อาจออกมาเป็นแรงกดดันในรูปแบบของบทบาทนั้น`;
}

function buildDecadeAdvice(elementKey, index, useful, ageStart) {
  return `ใช้ ${premiumElementLabel(useful)} เป็นเครื่องถ่วงสมดุลของรอบนี้ ทุกการตัดสินใจใหญ่ในช่วง ${ageStart}-${ageStart + 9} ปีควรถาม 3 คำถาม: สิ่งนี้เพิ่มพลังชีวิตหรือกินพลังชีวิต, สิ่งนี้ทำให้เราใกล้ตัวตนระยะยาวขึ้นไหม, และมีคนหรือแผนรองรับหลังตัดสินใจหรือยัง`;
}

function buildInnerWork(elementKey, index) {
  const inner = {
    WOOD: "ฝึกอดทนกับการเติบโตที่ยังไม่เห็นผลทันที",
    FIRE: "ฝึกแยกเสียงปรารถนาจริงออกจากเสียงที่อยากให้คนยอมรับ",
    EARTH: "ฝึกวางภาระที่ไม่จำเป็นและขอความช่วยเหลือให้เป็น",
    METAL: "ฝึกยืดหยุ่นโดยไม่ลดมาตรฐานหลักของตัวเอง",
    WATER: "ฝึกเลือกทิศทาง แม้ภาพยังไม่ครบทั้งหมด",
  };
  return `${inner[elementKey]} นี่คือบทเรียนด้านในของรอบนี้ ถ้าทำได้ เหตุการณ์ภายนอกจะกลายเป็นแรงส่งมากกว่าบททดสอบ`;
}

function rotate(items, offset) {
  return items.slice(offset % items.length).concat(items.slice(0, offset % items.length));
}

function getFavorableElements() {
  return state.favorableElements?.length ? state.favorableElements : [state.usefulGod];
}

function formatElementList(elementKeys) {
  return elementKeys.map((key) => premiumElementLabel(key)).join(" และ ");
}

function getUsefulGodLabel() {
  return formatElementList(getFavorableElements());
}

function getPremiumMasterVoice() {
  return premiumVoice.masters[state?.master?.stem] || {
    title: state.master.name,
    name: state.master.symbol,
    image: state.master.symbol,
    tagline: state.master.essence,
    essence: `แกนของคุณเริ่มจาก ${state.master.essence} แล้วค่อยปรับตัวตามพื้นที่และผู้คนรอบข้าง`,
    caution: "เมื่อชีวิตเข้มข้นขึ้น ให้กลับมาฟังจังหวะภายในและเลือกสิ่งที่คืนพลังมากกว่าสิ่งที่เร่งให้พิสูจน์ตัวเอง",
  };
}

function getPremiumStrengthVoice() {
  if (state.transformation) {
    return {
      label: "ดวงเปลี่ยนแรงเป็นโอกาส",
      english: "The Alchemist",
      copy: "พลังในดวงกำลังเปลี่ยนรูปจากแรงดิบให้กลายเป็นเส้นทางเฉพาะตัว จึงต้องอ่านด้วยความประณีตมากกว่าตัดสินว่าอ่อนหรือแข็ง",
    };
  }
  if (state.strength < 45) return premiumVoice.strength.seeker;
  if (state.strength < 61) return premiumVoice.strength.harmonizer;
  return premiumVoice.strength.powerhouse;
}

function getGuardianElementCopy() {
  const keys = getFavorableElements();
  return keys.map((key) => {
    const base = premiumVoice.guardianElements[key] || premiumElementLabel(key);
    const code = premiumDisplayLexicon.elements[key]?.code;
    return code && !base.includes(`(${code})`) ? `${base} ${formatCode(code)}` : base;
  }).join(" และ ");
}

function getGuardianElementLabel() {
  return getUsefulGodLabel();
}

function hasDecadeClash(item) {
  return Boolean(item?.branchRelations?.some((relation) => relation.type === "clash"));
}

function hasDecadePressure(item) {
  return hasDecadeClash(item) || (item?.favorability?.supportScore || 0) < 25;
}

function hasDecadeGrowth(item) {
  const hasDisruptiveRelation = item?.branchRelations?.some((relation) => relation.type === "clash" || relation.type === "harm");
  return (item?.favorability?.supportScore || 0) >= 55 && !hasDisruptiveRelation;
}

function getLuckWisdomComponent(item) {
  if (hasDecadePressure(item)) return wisdomContentMatrix.components.resilienceGuide;
  if (hasDecadeGrowth(item)) return wisdomContentMatrix.components.growthVibe;
  return null;
}

function renderWisdomComponent(component, className = "wisdom-component") {
  if (!component) return "";
  return `
    <div class="${className} ${component.key}">
      <span>${component.label}</span>
      <strong>${component.title}</strong>
      <p>${component.text}</p>
    </div>
  `;
}

function getStrengthNarrative() {
  const voice = getPremiumStrengthVoice();
  return `${voice.label} (${voice.english})`;
}

function getStrengthDetail() {
  return getPremiumStrengthVoice().copy;
}

function getPsychologicalProfile(dominant, weakest, topTrait) {
  const dominantPattern = elementPsychologyKnowledge[dominant.key];
  const weakestPattern = elementPsychologyKnowledge[weakest.key];
  return {
    coreNeed: dominantPattern.coreNeed,
    stressPattern: dominantPattern.stressPattern,
    repairPath: dominantPattern.repairPath,
    growthPractice: weakestPattern.growthPractice,
    traitMirror: `${topTrait.label} ไม่ใช่แค่จุดเด่น แต่เป็นภาษาที่ใจใช้ขอพื้นที่ปลอดภัยและขอการยอมรับ`,
  };
}

function getTenGodPsychology(tenGod) {
  return tenGodPsychologyKnowledge[tenGod] || {
    coreDrive: "บทบาทชีวิตที่ถูกกระตุ้น",
    shadowPattern: "ตอบสนองจากความเคยชินเดิมโดยยังไม่ทันตั้งสติ",
    repairPractice: "หยุดสังเกตแรงขับก่อนเลือกคำตอบใหม่",
  };
}

const premiumDisplayLexicon = {
  elements: {
    WOOD: { label: "ไม้", code: "木" },
    FIRE: { label: "ไฟ", code: "火" },
    EARTH: { label: "ดิน", code: "土" },
    METAL: { label: "ทอง", code: "金" },
    WATER: { label: "น้ำ", code: "水" },
  },
  stems: {
    甲: "ต้นไม้ใหญ่",
    乙: "ไม้เลื้อยที่ปรับตัวเก่ง",
    丙: "ดวงอาทิตย์",
    丁: "ไฟแสงเทียน",
    戊: "ภูเขาใหญ่",
    己: "ผืนดินที่คอยดูแล",
    庚: "โลหะแกร่ง",
    辛: "อัญมณีที่ผ่านการขัดเกลา",
    壬: "มหาสมุทรกว้าง",
    癸: "สายฝนละเอียด",
  },
  branches: {
    子: "ชวด พลังน้ำเริ่มต้น",
    丑: "ฉลู ดินที่เก็บแรงไว้ข้างใน",
    寅: "ขาล จุดเริ่มของการเติบโต",
    卯: "เถาะ การขยับขยายแบบนุ่มนวล",
    辰: "มะโรง ดินที่เก็บหลายพลังไว้ด้วยกัน",
    巳: "มะเส็ง ไฟที่เริ่มชัดขึ้น",
    午: "มะเมีย ไฟที่เปล่งออกเต็มที่",
    未: "มะแม ดินช่วงบ่มผล",
    申: "วอก ทองที่เริ่มจัดระเบียบ",
    酉: "ระกา ทองที่คัดสรรชัดเจน",
    戌: "จอ ดินช่วงเก็บบทเรียน",
    亥: "กุน น้ำลึกก่อนเริ่มรอบใหม่",
  },
  tenGods: {
    Friend: { label: "ปีเกียง - ตัวตนและเพื่อน", code: "比肩" },
    "Rob Wealth": { label: "เกียบไช้ - หุ้นส่วนและการแข่งขัน", code: "劫財" },
    "Eating God": { label: "เจียะซิ้ง - ความสุขและผลงาน", code: "食神" },
    "Hurting Officer": { label: "เซียงกัว - ไอเดียและการแสดงออก", code: "傷官" },
    "Direct Wealth": { label: "เจี่ยไช้ - เงินที่จัดการได้", code: "正財" },
    "Indirect Wealth": { label: "เพียงไช้ - โอกาสและเงินเสริม", code: "偏財" },
    "Direct Officer": { label: "เจี่ยกัว - กฎเกณฑ์และตำแหน่ง", code: "正官" },
    "Seven Killings": { label: "ฉิกสัวะ - แรงกดดันและความกล้า", code: "七殺" },
    "Direct Resource": { label: "เจี่ยอิน - ความรู้และผู้สนับสนุน", code: "正印" },
    "Indirect Resource": { label: "เพียงอิน - สัญชาตญาณและงานลึก", code: "偏印" },
    "Day Master": { label: "ตัวตนหลัก", code: "日主" },
  },
};

function formatCode(code, html = false) {
  return html ? `<small class="zh-code">(${code})</small>` : `(${code})`;
}

function premiumElementLabel(key, html = false) {
  const item = premiumDisplayLexicon.elements[key];
  return item ? `${item.label} ${formatCode(item.code, html)}` : key;
}

function premiumStemLabel(stem, html = false) {
  return `${premiumDisplayLexicon.stems[stem] || "ตัวบน"} ${formatCode(stem, html)}`;
}

function premiumBranchLabel(branch, html = false) {
  return `${premiumDisplayLexicon.branches[branch] || "ตัวล่าง"} ${formatCode(branch, html)}`;
}

function premiumPillarLabel(stem, branch, html = false) {
  return `${premiumStemLabel(stem, html)} / ${premiumBranchLabel(branch, html)}`;
}

function premiumTenGodLabel(tenGod, html = false) {
  const item = premiumDisplayLexicon.tenGods[tenGod];
  return item ? `${item.label} ${formatCode(item.code, html)}` : tenGod;
}

function pillarPositionThai(label) {
  return { Year: "เสาปี", Month: "เสาเดือน", Day: "เสาวัน", Hour: "เสาเวลาเกิด" }[label] || label;
}

function getHumanAgeStage(ageStart) {
  if (ageStart < 16) {
    return {
      label: "วัยวางรากของหัวใจ",
      copy: "ช่วงนี้ชีวิตยังเหมือนดินที่กำลังรับเมล็ดพันธุ์ สิ่งสำคัญคือสภาพแวดล้อม คนดูแล และประสบการณ์แรก ๆ ที่ค่อย ๆ สอนให้รู้ว่าตัวเองปลอดภัยกับโลกแบบไหน",
    };
  }
  if (ageStart < 26) {
    return {
      label: "วัยลองโลกและสะสมความฝัน",
      copy: "นี่คือช่วงที่คนส่วนใหญ่มักลองเรียน ลองรัก ลองทำงาน และลองผิดพลาดอย่างมีความหมาย เหมือนจิบกาแฟเช้าวันแรกของงานใหม่แล้วพบว่าใจเริ่มถามจริงจังว่าอยากเป็นใคร",
    };
  }
  if (ageStart < 36) {
    return {
      label: "วัยตั้งต้นตัวตนในโลกจริง",
      copy: "ช่วงนี้ชีวิตเริ่มถามเรื่องงาน เงิน ความรัก และชื่อเสียงในสายตาคนอื่นอย่างชัดขึ้น บางวันอาจเป็นความอึดอัดในห้องประชุม บางวันเป็นไอเดียที่แล่นขึ้นมาตอนกำลังเดินทางกลับบ้าน",
    };
  }
  if (ageStart < 46) {
    return {
      label: "วัยสร้างรากฐานและเลือกภาระที่ใช่",
      copy: "นี่คือช่วงที่ชีวิตไม่อยากพิสูจน์ทุกอย่างแล้ว แต่อยากสร้างสิ่งที่อยู่ได้นาน ทั้งงานที่มีสไตล์เฉพาะตัว ความสัมพันธ์ที่ไว้ใจได้ และจังหวะชีวิตที่ไม่ทำให้ใจเหนื่อยเกินไป",
    };
  }
  if (ageStart < 56) {
    return {
      label: "วัยคัดสรรคุณค่าและขยายอิทธิพล",
      copy: "ช่วงนี้เหมาะกับการเลือกสนามที่คุ้มพลังมากขึ้น ไม่จำเป็นต้องรับทุกคำชวน แต่ควรถามว่าโปรเจกต์ไหนทำให้ประสบการณ์ที่ผ่านมาเปลี่ยนเป็นความน่าเชื่อถือที่อบอุ่นและหนักแน่น",
    };
  }
  if (ageStart < 66) {
    return {
      label: "วัยส่งต่อภูมิปัญญา",
      copy: "ชีวิตเริ่มมีพื้นที่ให้ส่งต่อมากกว่าวิ่งไล่พิสูจน์ตนเอง เหมาะกับการเป็นที่ปรึกษา วางมรดกทางความคิด หรือดูแลคนรักด้วยถ้อยคำที่นุ่มขึ้นแต่ชัดเจนกว่าเดิม",
    };
  }
  return {
    label: "วัยเก็บเกี่ยวและจัดแสงให้ชีวิต",
    copy: "ช่วงนี้คุณค่าของชีวิตอยู่ที่การเลือกสิ่งที่ทำให้ใจสงบ มีศักดิ์ศรี และยังรู้สึกเป็นส่วนหนึ่งของโลก โดยไม่ต้องแบกบทบาทที่ไม่จำเป็นเหมือนวันเก่า",
  };
}

function buildDecadeTransition(index, activatedTenGod, favorability) {
  const psych = getTenGodPsychology(activatedTenGod);
  const lifeTopic = psych.coreDrive;
  if (index === 0) {
    return `นี่คือประตูแรกของช่วงดวง 10 ปี จึงควรอ่านเหมือนบทนำที่ชีวิตใช้สอนเรื่อง ${lifeTopic} ผ่านคนรอบตัว บ้าน โรงเรียน หรือประสบการณ์ตั้งต้น`;
  }
  if (favorability.supportScore >= 55) {
    return `เมื่อข้ามจากรอบก่อนมาถึงรอบนี้ สิ่งที่เคยฝึกไว้จะเริ่มมีเวทีให้ใช้ โดยเฉพาะเรื่อง ${lifeTopic}`;
  }
  if (favorability.supportScore < 25) {
    return `การเปลี่ยนผ่านรอบนี้อาจรู้สึกเหมือนชีวิตขอให้วางวิธีเดิมลงก่อนเดินต่อ แล้วเลือกใช้พลังให้ประหยัดและแม่นขึ้น`;
  }
  return `รอบนี้ไม่ได้ตัดขาดจากรอบก่อน แต่ค่อย ๆ เปลี่ยนจากการเรียนรู้ในใจ ไปสู่การจัดวางชีวิตจริงผ่านเรื่อง ${lifeTopic}`;
}
function getDecadeRealLifeExample(activatedTenGod, branchRelations, favorability, ageStart) {
  if (branchRelations.some((relation) => relation.type === "clash")) {
    return "เช่น ต้องตัดสินใจย้ายทีม เปลี่ยนเมือง หรือคุยเรื่องความสัมพันธ์ที่ค้างอยู่มานาน โดยยังรักษาน้ำเสียงให้นุ่มพอที่ใจทั้งสองฝ่ายจะฟังกันได้";
  }
  const examples = {
    Friend: "เช่น เริ่มรู้ว่าตัวเองไม่จำเป็นต้องตามกลุ่มเสมอไป จึงกล้าปฏิเสธงานที่ไม่ใช่ และเลือกเพื่อนร่วมทางที่เคารพขอบเขตกันจริง ๆ",
    "Rob Wealth": "เช่น ต้องจัดเงินกับเพื่อน หุ้นส่วน หรือครอบครัวให้ชัดขึ้น ก่อนที่น้ำใจจะกลายเป็นความเกรงใจที่พูดยาก",
    "Eating God": "เช่น ไอเดียแล่นตอนจิบกาแฟยามเช้า แล้วค่อย ๆ ถูกแปลงเป็นคอนเทนต์ งานเขียน สินค้า หรือผลงานที่คนสัมผัสได้",
    "Hurting Officer": "เช่น ในห้องประชุมคุณเห็นทางออกที่ต่างจากกรอบเดิม จึงต้องฝึกพูดให้คมพอจะเปลี่ยนงาน แต่ไม่แรงจนคนปิดใจ",
    "Direct Wealth": "เช่น เริ่มวางรายรับ รายจ่าย ลูกค้า และสัญญาให้เป็นระเบียบ เพื่อให้คลังทรัพย์เติบโตจากความสม่ำเสมอ ไม่ใช่แรงฮึดชั่วคราว",
    "Indirect Wealth": "เช่น มีคนชวนลงทุน ทำโปรเจกต์เสริม หรือเปิดตลาดใหม่ จึงควรทดลองเล็ก ๆ วัดผลจริง แล้วค่อยเพิ่มน้ำหนัก",
    "Direct Officer": "เช่น ได้รับบทบาทที่คนคาดหวังมากขึ้น ต้องยืนในตำแหน่งอย่างสง่า โดยไม่ปล่อยให้ตำแหน่งกลบเสียงข้างใน",
    "Seven Killings": "เช่น เจองานเร่ง คู่แข่งแรง หรือสถานการณ์บังคับให้ตัดสินใจเร็ว จึงต้องนิ่งพอจะเลือกสนาม ไม่ใช่ตอบโต้ทุกแรงกดดัน",
    "Direct Resource": "เช่น ได้ผู้แนะนำที่ไว้ใจได้ หลักสูตร ใบรับรอง หรือเวลาพักฟื้นที่ช่วยให้คุณกลับมาทำงานด้วยฐานใจที่มั่นคงกว่าเดิม",
    "Indirect Resource": "เช่น เริ่มสนใจงานลึก งานวิจัย การเยียวยา หรือความหมายของชีวิต แต่ต้องมีหลักฐานและกิจวัตรช่วยไม่ให้คิดวนลำพัง",
  };
  const tempo = favorability.supportScore >= 55 ? "จังหวะนี้ค่อนข้างมีแรงช่วยส่ง" : favorability.supportScore < 25 ? "จังหวะนี้ควรลดการเดิมพันใหญ่" : "จังหวะนี้เหมาะกับการลองแล้วปรับ";
  return `${examples[activatedTenGod] || "เช่น ชีวิตหยิบสถานการณ์ธรรมดาในงานและความสัมพันธ์มาเป็นห้องเรียนส่วนตัว"} ${tempo} โดยเฉพาะช่วงอายุ ${ageStart + 3}-${ageStart + 6} ปี`;
}

function tenGodThai(tenGod) {
  return premiumTenGodLabel(tenGod);
}

function render() {
  const masterVoice = getPremiumMasterVoice();
  document.getElementById("dayMaster").textContent = masterVoice.name;
  document.getElementById("daySymbol").textContent = `${masterVoice.title} · ${masterVoice.image}${state.birthTimeUnknown ? " · อ่านแบบ 3 เสาหลัก" : ""}`;
  document.getElementById("strengthScore").textContent = getStrengthNarrative();
  document.getElementById("strengthLevel").textContent = getStrengthDetail();
  document.getElementById("usefulGod").textContent = getGuardianElementLabel();
  document.getElementById("usefulReason").textContent = getGuardianElementCopy();
  document.getElementById("chartType").textContent = state.chartType;

  renderHookSummary();
  renderPillars();
  renderElements();
  renderAuspicious();
  renderRadar();
  renderInsightStudio();
  renderStrategy();
  renderQuestionReading();
  renderPopularQuestions();
  renderTimeline();
  renderLuckDetail();
  renderPlanning();
}

function renderPillars() {
  document.getElementById("pillars").innerHTML = state.pillars
    .map((pillar) => {
      if (state.birthTimeUnknown && pillar.label === "Hour") {
        const possible = state.sensitivity.possibleHourPillars || [];
        return `
          <div class="pillar unknown-hour">
            <span>Hour</span>
            <strong>ยังไม่ทราบเสาเวลาเกิด</strong>
            <div>${possible.length} แบบที่เป็นไปได้</div>
            <small>อ่าน พลังชีวิตและบุคลิก จาก 3 เสาหลัก ส่วนเสาเวลาเกิดจริงยังต้องรอข้อมูลเวลาเกิด</small>
            <small>${possible.slice(0, 4).join(" · ")}${possible.length > 4 ? " · ..." : ""}</small>
          </div>
        `;
      }
      return `
        <div class="pillar">
          <span>${pillar.label}</span>
          <strong>${premiumStemLabel(pillar.stem, true)}</strong>
          <div>${premiumBranchLabel(pillar.branch, true)}</div>
          <small>${tenGodThai(pillar.tenGod)}</small>
          <small>${pillar.hiddenTenGods.map((item) => `${premiumStemLabel(item.stem, true)} · ${tenGodThai(item.tenGod)}`).join(" · ")}</small>
        </div>
      `;
    })
    .join("");
}

function renderElements() {
  document.getElementById("elementBars").innerHTML = Object.entries(state.elementValues)
    .map(
      ([key, value]) => `
        <div class="element-row">
          <span>${premiumElementLabel(key, true)}</span>
          <div class="bar-track"><span class="bar-fill" style="width:${value}%; background:${elements[key].color}"></span></div>
          <b>${describeElementPresence(key)}</b>
        </div>
      `,
    )
    .join("");
}

function renderAuspicious() {
  const favorableKeys = getFavorableElements();
  const colors = [...new Set(favorableKeys.map((key) => elements[key].color).concat(["#111827", "#f8fafc"]))].slice(0, 5);
  document.getElementById("colorSwatches").innerHTML = colors
    .map((color) => `<span class="swatch" style="background:${color}"></span>`)
    .join("");
  const directionMap = {
    WOOD: "ตะวันออก",
    FIRE: "ใต้",
    EARTH: "กลาง, ตะวันตกเฉียงใต้, ตะวันออกเฉียงเหนือ",
    METAL: "ตะวันตก, ตะวันตกเฉียงเหนือ",
    WATER: "เหนือ",
  };
  const numberMap = {
    WOOD: "3, 4",
    FIRE: "9",
    EARTH: "2, 5, 8",
    METAL: "6, 7",
    WATER: "1",
  };
  document.getElementById("directions").textContent = favorableKeys.map((key) => directionMap[key]).join(", ");
  document.getElementById("numbers").textContent = favorableKeys.map((key) => numberMap[key]).join(", ");
}

function renderInsightStudio() {
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const psych = getPsychologicalProfile(dominant, weakest, topTrait);
  const name = document.getElementById("clientName").value || "คุณ";
  const masterVoice = getPremiumMasterVoice();
  const strengthVoice = getPremiumStrengthVoice();
  document.getElementById("readingCopy").innerHTML = `
    <strong>${name}: ${masterVoice.name} — ${masterVoice.tagline}</strong>
    <p>${masterVoice.essence} ภาพของดวงนี้คล้าย ${masterVoice.image} ที่ไม่ได้มีไว้เพียงบอกว่า “คุณเป็นใคร” แต่ชวนให้เห็นว่าพลังชีวิตของคุณจะงดงามที่สุดเมื่อได้อยู่ในพื้นที่แบบใด</p>
    <p>เมื่ออ่านจากมุมจิตวิทยา แกนลึกของใจมักตามหา ${psych.coreNeed} ${premiumElementLabel(dominant.key)} จึงกลายเป็นพลังที่เด่นและทำให้ชีวิตมักแสดงออกผ่านเรื่อง ${elementArchetypes[dominant.key]} ส่วน ${strengthVoice.label} บอกว่าจังหวะพลังโดยรวมกำลังชวนให้คุณใช้ชีวิตแบบ ${strengthVoice.copy}</p>
    <p>ในวันที่ใจไม่ปลอดภัย รูปแบบที่อาจค่อย ๆ โผล่คือ ${psych.stressPattern} ตรงนี้ไม่ใช่ข้อเสีย แต่เป็นจุดที่ควรมองอย่างใจเย็น ${masterVoice.caution}</p>
    <p>ธาตุที่ช่วยให้ดวงนี้สมดุลคือ ${getGuardianElementLabel()} — ${getGuardianElementCopy()} เมื่อใช้พลังนี้เป็นตัวช่วยตัดสินใจ ชีวิตจะไม่ต้องฝืนทุกอย่างพร้อมกัน แต่ค่อย ๆ เลือกพื้นที่ทำงานและสร้างผลงาน ความสัมพันธ์ และจังหวะพักที่ทำให้แสงของคุณสว่างได้นานขึ้น</p>
  `;

  document.getElementById("readingActions").innerHTML = `
    <div class="action-card"><span>ตัวตนข้างในที่งดงาม</span><strong>${psych.coreNeed}</strong><p>นี่คือเสียงเงียบ ๆ ที่ใจมักตามหาอยู่เบื้องหลังการตัดสินใจสำคัญ</p></div>
    <div class="action-card"><span>จุดที่ควรรู้ทัน</span><strong>${premiumElementLabel(dominant.key)} นำมากเกิน</strong><p>${psych.stressPattern}</p></div>
    <div class="action-card"><span>พลังที่ช่วยเปิดทาง</span><strong>${getUsefulGodLabel()}</strong><p>${psych.repairPath} แล้วใช้ธาตุที่ช่วยให้สมดุลเป็นแนวทางพาใจกับชีวิตกลับมานิ่งขึ้น</p></div>
    <div class="action-card"><span>แบบฝึกใจ</span><strong>เสริม ${premiumElementLabel(weakest.key)} ผ่านสิ่งที่ทำได้จริง</strong><p>${elementSupportPractice(weakest.key)} ${psych.growthPractice}</p></div>
  `;
}

function renderRadar() {
  const canvas = document.getElementById("personalityCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2 + 4;
  const radius = Math.min(width, height) * 0.34;
  const entries = Object.entries(state.personality);
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = getCss("--line");
  ctx.fillStyle = getCss("--muted");
  ctx.font = "13px Noto Sans Thai, Tahoma, Arial";

  for (let ring = 1; ring <= 4; ring += 1) {
    drawPolygon(ctx, entries.length, centerX, centerY, (radius / 4) * ring);
    ctx.stroke();
  }

  const points = entries.map(([, value], index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / entries.length;
    const scaled = radius * (Math.min(value, 100) / 100);
    return { x: centerX + Math.cos(angle) * scaled, y: centerY + Math.sin(angle) * scaled, angle };
  });

  ctx.beginPath();
  points.forEach((point, index) => (index === 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y)));
  ctx.closePath();
  ctx.fillStyle = "rgba(15, 118, 110, 0.22)";
  ctx.fill();
  ctx.strokeStyle = getCss("--accent");
  ctx.lineWidth = 3;
  ctx.stroke();

  points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = getCss("--accent");
    ctx.fill();
  });

  entries.forEach(([key, value], index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / entries.length;
    const x = centerX + Math.cos(angle) * (radius + 44);
    const y = centerY + Math.sin(angle) * (radius + 32);
    const label = shortPersonalityLabel(key);
    ctx.fillStyle = getCss("--text");
    ctx.textAlign = x < centerX - 8 ? "right" : x > centerX + 8 ? "left" : "center";
    ctx.font = "13px Noto Sans Thai, Tahoma, Arial";
    ctx.fillText(label, x, y - 3);
    ctx.fillStyle = getCss("--muted");
    ctx.font = "11px Noto Sans Thai, Tahoma, Arial";
    ctx.fillText(`${Math.round(value)}%`, x, y + 13);
  });
}

function drawPolygon(ctx, sides, centerX, centerY, radius) {
  ctx.beginPath();
  for (let index = 0; index < sides; index += 1) {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / sides;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function getDominantElement() {
  return Object.entries(state.elementValues)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value)[0];
}

function getWeakestElement() {
  return Object.entries(state.elementValues)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => a.value - b.value)[0];
}

function describeElementPresence(elementKey) {
  const value = state.elementValues[elementKey] || 0;
  if (value >= 32) return "เด่นชัด";
  if (value >= 22) return "มีกำลังดี";
  if (value >= 14) return "พอประคองสมดุล";
  return "ค่อนข้างเบา";
}

function describeScoreBand(value) {
  if (value >= 82) return "เด่นมาก ใช้เป็นแต้มต่อได้";
  if (value >= 68) return "เด่น ใช้ได้ค่อนข้างมั่นใจ";
  if (value >= 54) return "มีฐานดี กำลังต่อยอดได้";
  if (value >= 42) return "ยังต้องใช้แบบมีตัวช่วย";
  return "ควรค่อย ๆ ฝึกในสถานการณ์เล็ก ๆ";
}

function describeTraitTone(value) {
  if (value >= 82) return "เป็นพลังนำของคุณ";
  if (value >= 68) return "เป็นจุดถนัดที่หยิบใช้ได้บ่อย";
  if (value >= 54) return "เป็นฐานที่เริ่มใช้ได้ดี";
  if (value >= 42) return "เป็นพื้นที่ที่ควรใช้แบบมีจังหวะ";
  return "เป็นมุมที่ค่อย ๆ ฝึกแล้วจะช่วยชีวิตมากขึ้น";
}

function traitActionTip(key, value) {
  const strong = value >= 68;
  const tips = {
    leadership: strong ? "ใช้รับบทนำเมื่อโจทย์คลุมเครือ แต่เปิดพื้นที่ให้ทีมช่วยเติมรายละเอียด" : "เริ่มจากนำเรื่องเล็ก เช่น สรุปเป้าหมายประชุมหรือแบ่งหน้าที่ให้ชัด",
    creativity: strong ? "หยิบไอเดียออกมาทำเป็นตัวอย่างจริง อย่าเก็บไว้แค่ในหัว" : "ลองจดไอเดียวันละ 3 ข้อ แล้วเลือกทำแค่ข้อที่ง่ายที่สุดก่อน",
    social: strong ? "ใช้การคุยและเครือข่ายเปิดประตู แต่ตั้งขอบเขตเวลาให้ตัวเองด้วย" : "เริ่มจากบทสนทนาสั้น ๆ ที่จริงใจ ไม่ต้องพยายามถูกใจทุกคน",
    logic: strong ? "ใช้วางระบบ เช็กข้อมูล และทำให้คนอื่นเห็นขั้นตอนชัดขึ้น" : "ใช้ checklist ช่วยคิดแทนการเก็บทุกอย่างไว้ในหัว",
    emotion: strong ? "ใช้ความละเอียดอ่อนอ่านบรรยากาศ แต่อย่ารับอารมณ์คนอื่นมาเป็นของตัวเองทั้งหมด" : "ให้เวลาตัวเองถามว่า ‘ฉันรู้สึกอะไรจริง ๆ’ ก่อนตอบสนอง",
    drive: strong ? "ใช้แรงขับกับเป้าหมายที่วัดผลได้ อย่าเผาตัวเองกับทุกสนามพร้อมกัน" : "ตั้งเป้าสั้น 7 วัน แล้วให้รางวัลเล็ก ๆ เมื่อทำครบ",
    resilience: strong ? "ใช้ความนิ่งเป็นหลักยึดในช่วงกดดัน แต่ต้องไม่แบกเงียบจนเกินไป" : "สร้าง routine พัก ฟื้น และขอความช่วยเหลือก่อนถึงจุดล้า",
    intuition: strong ? "ใช้สัญชาตญาณเป็นสัญญาณแรก แล้วเช็กด้วยข้อมูลจริงอีกชั้น" : "ฝึกจดความรู้สึกกับหลักฐานแยกกัน จะช่วยให้ตัดสินใจนิ่งขึ้น",
  };
  return tips[key] || "ใช้พลังนี้อย่างพอดี แล้วสังเกตว่าชีวิตเบาขึ้นตรงไหน";
}

function shortPersonalityLabel(key) {
  const labels = {
    leadership: "นำทาง",
    creativity: "สร้างสรรค์",
    social: "สังคม",
    logic: "ตรรกะ",
    emotion: "อารมณ์",
    drive: "แรงผลัก",
    resilience: "ความอึด",
    intuition: "เซนส์",
  };
  return labels[key] || key;
}
function getTopPersonalityTrait() {
  const labels = {
    leadership: "พลังนำทาง",
    creativity: "ความคิดสร้างสรรค์",
    social: "การเชื่อมโยงผู้คน",
    logic: "คิดเป็นขั้นตอน",
    emotion: "ความลึกทางอารมณ์",
    drive: "แรงขับเคลื่อน",
    resilience: "ความอึดและความนิ่ง",
    intuition: "สัญชาตญาณ",
  };
  const [key, value] = Object.entries(state.personality).sort((a, b) => b[1] - a[1])[0];
  return { key, value, label: labels[key] };
}

function printCard(label, value, description) {
  return `
    <div class="print-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${description}</p>
    </div>
  `;
}


function renderPillarPrintCards() {
  return state.pillars
    .map((pillar) => {
      if (state.birthTimeUnknown && pillar.label === "Hour") {
        const possible = state.sensitivity.possibleHourPillars || [];
        return printCard("Hour", "ยังไม่ทราบเสาเวลาเกิด", `คำนวณ พลังชีวิตและบุคลิก จาก 3 เสาหลัก เสาเวลาเกิดที่เป็นไปได้มี ${possible.length} แบบ: ${possible.slice(0, 5).join(" · ")}${possible.length > 5 ? " · ..." : ""}`);
      }
      return printCard(pillar.label, premiumPillarLabel(pillar.stem, pillar.branch), tenGodThai(pillar.tenGod));
    })
    .join("");
}
function renderLuckWisdomPrint(item) {
  const wisdom = getLuckWisdomComponent(item);
  if (!wisdom) return "";
  return `<p><b>${wisdom.label}:</b> ${wisdom.text}</p>`;
}

function renderPopularQuestionPrintCards() {
  return Object.entries(popularQuestionKnowledge)
    .map(([key, item]) => {
      const answer = buildPopularQuestionAnswer(key);
      return printCard(item.label, answer.title, `${answer.body} ลองทำตอนนี้: ${answer.action}`);
    })
    .join("");
}

function sectionTitle(key) {
  const titles = {
    personality: "ภาพตัวตนโดยรวม",
    career: "ทิศทางงาน",
    wealth: "รูปแบบการเงิน",
    relationship: "ความสัมพันธ์",
    health: "พลังชีวิตและสุขภาพ",
    luck: "รอบดวง",
  };
  return titles[key] || key;
}

function personalityLabel(key) {
  const labels = {
    leadership: "พลังนำทางและรับผิดชอบ",
    creativity: "ไอเดียและการสร้างผลงาน",
    social: "การคุยกับคนและเครือข่าย",
    logic: "การคิดเป็นระบบ",
    emotion: "ความละเอียดทางความรู้สึก",
    drive: "แรงผลักและความทะเยอทะยาน",
    resilience: "ความอึดและการตั้งหลัก",
    intuition: "เซนส์และการมองเรื่องลึก",
  };
  return labels[key] || key;
}

function personalityMeaning(key) {
  const meanings = {
    leadership: "วิธีใช้พลังนำ ตัดสินใจ และรับผิดชอบทิศทาง",
    creativity: "ความสามารถในการสร้างทางเลือกใหม่และแปลงประสบการณ์เป็นผลงาน",
    social: "พลังการประสานคน เครือข่าย และบทสนทนาที่พาโอกาสเข้ามา",
    logic: "ความถนัดในการจัดระเบียบ อ่านภาพรวม และวางมาตรฐาน",
    emotion: "ความละเอียดในการรับรู้อารมณ์ ความสัมพันธ์ และบรรยากาศรอบตัว",
    drive: "แรงผลักดัน ความทะเยอทะยาน และพลังลงมือเมื่อเห็นเป้าหมาย",
    resilience: "วิธีประคองตัวตอนเจอแรงกดดัน และพาตัวเองกลับมานิ่งได้อีกครั้ง",
    intuition: "การเชื่อมโยงเรื่องราวลึก สัญชาตญาณ และการมองเห็นสิ่งที่ยังไม่ชัด",
  };
  return meanings[key] || "";
}

function getStrengthLevel() {
  if (state.strength < 40) return "ควรมีคนหรือระบบช่วยประคอง";
  if (state.strength < 60) return "สมดุล";
  if (state.strength < 80) return "แรงกำลังดี";
  return "แรงเต็มถัง";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCss(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function syncBirthTimeInput() {
  const toggle = document.getElementById("birthTimeUnknown");
  const input = document.getElementById("birthTime");
  if (!toggle || !input) return;
  input.disabled = toggle.checked;
  input.setAttribute("aria-disabled", toggle.checked ? "true" : "false");
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

// ORDERED_INTERFACE_START
function orderedSetText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

function orderedSetHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value ?? "";
}

function orderedCurrentLuck() {
  if (!state?.luck?.length) return null;
  activeLuckIndex = Math.max(0, Math.min(activeLuckIndex, state.luck.length - 1));
  return state.luck[activeLuckIndex];
}

function calculateAgeOnDate(birthDate, targetDate = new Date()) {
  if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) return 0;
  let age = targetDate.getFullYear() - birthDate.getFullYear();
  const birthdayThisYear = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate(), birthDate.getHours(), birthDate.getMinutes(), 0);
  if (targetDate < birthdayThisYear) age -= 1;
  return Math.max(0, age);
}

function getPresentLuckIndex(referenceDate = new Date()) {
  if (!state?.luck?.length) return 0;
  const time = referenceDate.getTime();
  const exactIndex = state.luck.findIndex((item) => item.startDate instanceof Date && item.endDate instanceof Date && time >= item.startDate.getTime() && time < item.endDate.getTime());
  if (exactIndex >= 0) return exactIndex;
  const age = calculateAgeOnDate(state.birth?.localDate, referenceDate);
  const ageIndex = state.luck.findIndex((item, index) => age >= item.age && (!state.luck[index + 1] || age < state.luck[index + 1].age));
  if (ageIndex >= 0) return ageIndex;
  return time < state.luck[0].startDate?.getTime() ? 0 : state.luck.length - 1;
}

function orderedPresentLuck(referenceDate = new Date()) {
  if (!state?.luck?.length) return null;
  return state.luck[getPresentLuckIndex(referenceDate)] || state.luck[0];
}

function getPresentAnnualLuck(item, referenceDate = new Date()) {
  if (!item?.annualLuck?.length) return null;
  const year = referenceDate.getFullYear();
  return item.annualLuck.find((annual) => annual.year === year) || null;
}

function orderedTopTenGods(limit = 3) {
  return Object.entries(state.tenGodProfile?.scores || {})
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit);
}


const deityCardProfiles = {
  Friend: {
    name: "เทพปี่เกียง",
    role: "เทพแห่งตัวตนและเพื่อนร่วมทาง",
    mantra: "ยืนอยู่กับตัวเองให้มั่น แล้วเลือกคนที่เดินไปทางเดียวกัน",
    identity: "คุณเป็นคนที่มีแกนตัวตนชัด รักความจริงใจ และมักรู้สึกดีที่สุดเมื่อได้อยู่กับคนที่เคารพพื้นที่ของกันและกัน",
    power: "ใช้พลังนี้ด้วยการเลือกทีม เลือกเพื่อน และเลือกงานที่ไม่บังคับให้คุณทรยศความเป็นตัวเอง",
    palette: ["#1f6b55", "#8fbf9f", "#fff6df"],
    symbol: "circle",
    image: "assets/deities/friend.png",
  },
  "Rob Wealth": {
    name: "เทพเกียบไช้",
    role: "เทพแห่งทีมและแรงแข่งขัน",
    mantra: "พลังของคุณโตขึ้นเมื่อรู้ว่าใครคือคนร่วมทาง และใครคือสนามฝึก",
    identity: "คุณมีไฟของนักสู้แบบสุภาพ ชอบลงมือจริง และมักเติบโตเร็วเมื่อมีเป้าหมายที่ท้าทายหรือคนเก่งอยู่ใกล้ตัว",
    power: "ใช้พลังนี้ด้วยการตั้งขอบเขตเรื่องเงิน เวลา และความรับผิดชอบให้ชัด ก่อนใจดีจนตัวเองเหนื่อย",
    palette: ["#c2792b", "#e2b66f", "#fff4df"],
    symbol: "spark",
    image: "assets/deities/rob-wealth.png",
  },
  "Eating God": {
    name: "เทพเจียะซิ้ง",
    role: "เทพแห่งความสุขและผลงานที่จับต้องได้",
    mantra: "สิ่งที่คุณทำด้วยความสบายใจ มักกลายเป็นของขวัญให้คนอื่นด้วย",
    identity: "คุณมีพลังของคนที่เปลี่ยนความคิดให้เป็นผลงานได้ดี มีรสนิยม อ่อนโยน และมักทำให้บรรยากาศรอบตัวน่าอยู่ขึ้น",
    power: "ใช้พลังนี้ด้วยการทำไอเดียให้เห็นเป็นชิ้นงานจริง แม้เริ่มจากเวอร์ชันเล็กก่อนก็พอแล้ว",
    palette: ["#d89a4b", "#f0c98d", "#fff7e8"],
    symbol: "sun",
    image: "assets/deities/eating-god.png",
  },
  "Hurting Officer": {
    name: "เทพเซียงกัว",
    role: "เทพแห่งไอเดียและการแสดงออก",
    mantra: "เสียงของคุณมีพลัง เมื่อพูดให้คมพอและนุ่มพอในเวลาเดียวกัน",
    identity: "คุณเป็นคนเห็นทางเลือกที่คนอื่นยังไม่เห็น มีความคิดไว ชอบตั้งคำถาม และมักไม่อยากทำอะไรเพียงเพราะทุกคนทำตามกันมา",
    power: "ใช้พลังนี้ด้วยการเปลี่ยนคำวิจารณ์ให้เป็นข้อเสนอที่ทำต่อได้จริง โดยเฉพาะในห้องประชุมหรือเวลาคุยงานสำคัญ",
    palette: ["#c45f59", "#e7a19c", "#fff0ed"],
    symbol: "flame",
    image: "assets/deities/hurting-officer.png",
  },
  "Direct Wealth": {
    name: "เทพเจี่ยไช้",
    role: "เทพแห่งทรัพย์ที่จัดการได้",
    mantra: "ความมั่นคงไม่ได้มาจากการรีบเก็บทุกอย่าง แต่มาจากการรู้ว่าอะไรควรดูแลก่อน",
    identity: "คุณมีเซนส์เรื่องความคุ้มค่า ชอบเห็นผลลัพธ์ชัด และมักสบายใจเมื่อชีวิตมีระบบที่จับต้องได้",
    power: "ใช้พลังนี้ด้วยการจัดเงิน งาน และสัญญาให้เป็นรูปธรรม อย่าปล่อยให้ความเกรงใจทำให้รายละเอียดสำคัญหายไป",
    palette: ["#b98b39", "#e0c27a", "#fff8df"],
    symbol: "coin",
    image: "assets/deities/direct-wealth.png",
  },
  "Indirect Wealth": {
    name: "เทพเพียงไช้",
    role: "เทพแห่งโอกาสและรายได้เสริม",
    mantra: "โอกาสชอบมาหาคุณตอนกล้าลอง แต่ต้องมีหลักให้กลับมายืน",
    identity: "คุณมีสายตาที่มองเห็นช่องทางใหม่ได้ไว ชอบขยับ ลองตลาด และมักมีไอเดียที่ต่อยอดเป็นรายได้หรือโปรเจกต์เสริมได้ดี",
    power: "ใช้พลังนี้ด้วยการทดลองเล็ก วัดผลจริง แล้วค่อยเพิ่มน้ำหนัก อย่าให้ความตื่นเต้นพาคุณกระโดดไกลเกินข้อมูลที่มี",
    palette: ["#8b6f3d", "#d6b25f", "#fff3cf"],
    symbol: "star",
    image: "assets/deities/indirect-wealth.png",
  },
  "Direct Officer": {
    name: "เทพเจี่ยกัว",
    role: "เทพแห่งวินัยและบารมี",
    mantra: "ความสง่างามของคุณเกิดขึ้นเมื่อหน้าที่กับหัวใจเดินไปด้วยกัน",
    identity: "คุณมีพลังของคนที่คนอื่นไว้ใจได้ รู้จักรับผิดชอบ และมักถูกมองว่าเป็นคนที่ถือมาตรฐานในเรื่องสำคัญ",
    power: "ใช้พลังนี้ด้วยการยืนในบทบาทให้ชัด แต่ไม่ปล่อยให้ตำแหน่งหรือความคาดหวังกลบเสียงข้างในของตัวเอง",
    palette: ["#4c7892", "#9ec3d3", "#edf7fb"],
    symbol: "mountain",
    image: "assets/deities/direct-officer.png",
  },
  "Seven Killings": {
    name: "เทพชิกสัวะ",
    role: "เทพแห่งแรงกดดันและความกล้า",
    mantra: "แรงกดดันไม่ได้มาเพื่อทำให้คุณแตก แต่มาเพื่อปลุกความกล้าที่ยังนอนอยู่",
    identity: "คุณมีพลังตัดสินใจในสถานการณ์ยาก รับมือแรงปะทะได้ดี และมักแข็งแรงขึ้นเมื่อชีวิตบังคับให้เลือกทางให้ชัด",
    power: "ใช้พลังนี้ด้วยการหยุดหนึ่งจังหวะก่อนตอบโต้ เลือกสนามที่ควรสู้ และปล่อยสนามที่ไม่คุ้มแรงใจ",
    palette: ["#173d35", "#6aa18d", "#ecf6f1"],
    symbol: "blade",
    image: "assets/deities/seven-killings.png",
  },
  "Direct Resource": {
    name: "เทพเจี่ยอิน",
    role: "เทพแห่งความรู้และผู้สนับสนุน",
    mantra: "คุณไม่ได้ช้า คุณกำลังเก็บรากให้มั่นก่อนแตกใบ",
    identity: "คุณมีพลังของคนเรียนรู้ลึก ชอบเข้าใจเหตุผล และมักฟื้นตัวได้ดีเมื่อมีพื้นที่ปลอดภัยหรือคนที่ให้คำแนะนำอย่างจริงใจ",
    power: "ใช้พลังนี้ด้วยการให้เวลาตัวเองเรียน พัก และรับความช่วยเหลือ อย่าฝืนเก่งคนเดียวจนหมดแรง",
    palette: ["#625b86", "#b2acd6", "#f2efff"],
    symbol: "book",
    image: "assets/deities/direct-resource.png",
  },
  "Indirect Resource": {
    name: "เทพเพียงอิน",
    role: "เทพแห่งสัญชาตญาณและงานลึก",
    mantra: "ในความเงียบของคุณ มีคำตอบที่รีบไม่ได้ซ่อนอยู่",
    identity: "คุณมีเซนส์ละเอียด มองเรื่องซับซ้อนได้ลึก และมักรับรู้อะไรบางอย่างก่อนจะอธิบายเป็นเหตุผลได้ครบ",
    power: "ใช้พลังนี้ด้วยการจดสิ่งที่รู้สึก แล้วค่อยเช็กกับข้อมูลจริง เพื่อให้สัญชาตญาณกลายเป็นเข็มทิศ ไม่ใช่ความกังวล",
    palette: ["#2f5f73", "#8bb8c8", "#edf8fb"],
    symbol: "moon",
    image: "assets/deities/indirect-resource.png",
  },
};


const deityArtworkCache = {};

function getDeityArtwork(profile) {
  const src = profile?.image || "assets/deity-anime-card-source.png";
  if (!deityArtworkCache[src]) {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    image.addEventListener("load", () => {
      if (state) renderDeityCardStudio();
    });
    deityArtworkCache[src] = image;
  }
  return deityArtworkCache[src];
}

function ensureDeityArtworkLoaded(profile = getPersonalDeityProfile()) {
  const image = getDeityArtwork(profile);
  if (image.complete && image.naturalWidth > 0) return Promise.resolve();
  return new Promise((resolve) => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}
function getPersonalDeityProfile() {
  const [key, rawScore] = orderedTopTenGods(1)[0] || ["Direct Resource", 60];
  const profile = deityCardProfiles[key] || deityCardProfiles["Direct Resource"];
  return { key, score: clampScore(rawScore || 60), ...profile };
}

function renderDeityCardStudio() {
  const canvas = document.getElementById("deityCardCanvas");
  if (!canvas || !state) return;
  const profile = getPersonalDeityProfile();
  orderedSetText("deityCardTitle", `${profile.name}: ${profile.role}`);
  orderedSetText("deityCardIntro", `${profile.identity} วิธีใช้พลังจากเทพองค์นี้คือ ${profile.power}`);
  drawDeityCardCanvas(canvas, profile);
}

function drawDeityCardCanvas(canvas, profile = getPersonalDeityProfile()) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const [main, mid, soft] = profile.palette;
  ctx.clearRect(0, 0, width, height);

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#2b2117");
  bg.addColorStop(0.28, main);
  bg.addColorStop(0.62, soft);
  bg.addColorStop(1, "#f8ead2");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  drawDeityCardGlow(ctx, width, height, main, mid);
  drawTradingCardFrame(ctx, 52, 46, width - 104, height - 92, profile);

  ctx.save();
  roundRect(ctx, 88, 92, width - 176, height - 184, 62);
  ctx.clip();
  drawDeityArtwork(ctx, 88, 92, width - 176, 1248, profile, { framed: false, shade: "collector" });
  const artFade = ctx.createLinearGradient(0, 930, 0, 1340);
  artFade.addColorStop(0, "rgba(0,0,0,0)");
  artFade.addColorStop(0.72, hexToRgba(main, 0.36));
  artFade.addColorStop(1, "rgba(22, 18, 14, 0.76)");
  ctx.fillStyle = artFade;
  ctx.fillRect(88, 860, width - 176, 500);
  ctx.restore();

  drawCollectorHeader(ctx, profile, width, main, mid);
  drawCollectorNamePlate(ctx, 122, 1016, width - 244, profile, main, mid);
  drawCollectorStats(ctx, 122, 1162, width - 244, profile, main, mid);
  drawCollectorSkillBox(ctx, 122, 1314, width - 244, profile, main, mid);
  drawCollectorQuote(ctx, 122, 1616, width - 244, profile, main);

  const name = document.getElementById("clientName")?.value || "คุณ";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255, 253, 248, 0.82)";
  ctx.font = '700 21px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText(`ชีวิต BaZi · เทพเด่นของ ${name}`, width / 2, 1840);
}

function drawTradingCardFrame(ctx, x, y, width, height, profile) {
  const [main, mid] = profile.palette;
  ctx.save();
  roundRect(ctx, x, y, width, height, 68);
  const frame = ctx.createLinearGradient(x, y, x + width, y + height);
  frame.addColorStop(0, "#fff1b7");
  frame.addColorStop(0.18, mid);
  frame.addColorStop(0.48, "#fffdf8");
  frame.addColorStop(0.72, main);
  frame.addColorStop(1, "#6e4f22");
  ctx.fillStyle = frame;
  ctx.fill();

  roundRect(ctx, x + 18, y + 18, width - 36, height - 36, 54);
  ctx.fillStyle = "rgba(255, 253, 248, 0.92)";
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 247, 210, 0.88)";
  ctx.lineWidth = 7;
  roundRect(ctx, x + 28, y + 28, width - 56, height - 56, 48);
  ctx.stroke();

  ctx.strokeStyle = hexToRgba(main, 0.44);
  ctx.lineWidth = 4;
  roundRect(ctx, x + 42, y + 42, width - 84, height - 84, 40);
  ctx.stroke();

  drawCornerOrnaments(ctx, x + 66, y + 66, width - 132, height - 132, profile.symbol, main);
  ctx.restore();
}

function drawCornerOrnaments(ctx, x, y, width, height, symbol, color) {
  const points = [[x, y, 1, 1], [x + width, y, -1, 1], [x, y + height, 1, -1], [x + width, y + height, -1, -1]];
  points.forEach(([cx, cy, sx, sy]) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(sx, sy);
    ctx.strokeStyle = hexToRgba(color, 0.38);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 86);
    ctx.quadraticCurveTo(18, 28, 86, 0);
    ctx.stroke();
    drawDeitySymbol(ctx, 46, 46, symbol, hexToRgba(color, 0.58), 0.42);
    ctx.restore();
  });
}

function drawCollectorHeader(ctx, profile, width, main, mid) {
  ctx.save();
  roundRect(ctx, 124, 118, width - 248, 84, 28);
  const header = ctx.createLinearGradient(124, 118, width - 124, 202);
  header.addColorStop(0, hexToRgba(main, 0.94));
  header.addColorStop(1, hexToRgba(mid, 0.82));
  ctx.fillStyle = header;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255, 253, 248, 0.9)";
  ctx.font = '700 24px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("ชีวิต BaZi", 158, 154);
  ctx.font = '700 26px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("เทพเด่นประจำดวง", 158, 188);

  ctx.textAlign = "right";
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("อ่านจากเทพสิบองค์", width - 158, 154);
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText(getDeityProminence(profile.score), width - 158, 188);
  ctx.restore();
}

function drawDeitySymbolBadge(ctx, cx, cy, symbol, main, mid, score) {
  ctx.save();
  const glow = ctx.createRadialGradient(cx, cy, 18, cx, cy, 92);
  glow.addColorStop(0, "rgba(255,255,255,0.95)");
  glow.addColorStop(1, hexToRgba(mid, 0.34));
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, 78, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(main, 0.72);
  ctx.lineWidth = 6;
  ctx.stroke();
  drawDeitySymbol(ctx, cx, cy - 12, symbol, main, 0.72);
  ctx.textAlign = "center";
  ctx.fillStyle = main;
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText(getDeityProminence(score), cx, cy + 56);
  ctx.restore();
}

function drawCollectorNamePlate(ctx, x, y, width, profile, main, mid) {
  ctx.save();
  roundRect(ctx, x, y, width, 122, 30);
  const plate = ctx.createLinearGradient(x, y, x + width, y + 122);
  plate.addColorStop(0, "rgba(255,255,255,0.92)");
  plate.addColorStop(0.52, hexToRgba(mid, 0.78));
  plate.addColorStop(1, hexToRgba(main, 0.9));
  ctx.fillStyle = plate;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.76)";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.textAlign = "left";
  ctx.fillStyle = "#241f18";
  ctx.font = '700 43px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText(profile.name, x + 32, y + 52);
  ctx.fillStyle = "rgba(36, 31, 24, 0.78)";
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  wrapCanvasText(ctx, profile.role, x + 32, y + 92, width - 64, 30, 1);
  ctx.restore();
}

function getDeityProminence(score) {
  if (score >= 72) return "เด่นชัดมาก";
  if (score >= 58) return "เด่นชัด";
  if (score >= 42) return "กำลังทำงาน";
  return "แฝงอยู่";
}
function drawCollectorStats(ctx, x, y, width, profile, main, mid) {
  const stats = buildDeityCardStats(profile);
  const gap = 18;
  const itemWidth = (width - gap * 2) / 3;
  stats.forEach((stat, index) => {
    const sx = x + index * (itemWidth + gap);
    roundRect(ctx, sx, y, itemWidth, 110, 22);
    ctx.fillStyle = "rgba(255, 253, 248, 0.84)";
    ctx.fill();
    ctx.strokeStyle = hexToRgba(main, 0.28);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillStyle = main;
    ctx.font = '700 20px Prompt, "Noto Sans Thai", Tahoma, Arial';
    ctx.fillText(stat.label, sx + itemWidth / 2, y + 36);
    ctx.fillStyle = "#241f18";
    ctx.font = '700 20px Prompt, "Noto Sans Thai", Tahoma, Arial';
    wrapCanvasText(ctx, stat.value, sx + itemWidth / 2, y + 74, itemWidth - 30, 28, 2);
    ctx.fillStyle = hexToRgba(mid, 0.34);
    ctx.beginPath();
    ctx.arc(sx + itemWidth - 26, y + 25, 13, 0, Math.PI * 2);
    ctx.fill();
  });
}

function buildDeityCardStats(profile) {
  const map = {
    Friend: ["ตัวตน", "ความจริงใจ", "ทีมและขอบเขต"],
    "Rob Wealth": ["แรงผลัก", "กล้าลงมือ", "ทีมและการแข่งขัน"],
    "Eating God": ["ผลงาน", "ทำให้ง่าย", "ไอเดียที่จับต้องได้"],
    "Hurting Officer": ["เสียงของคุณ", "คิดต่าง", "การสื่อสารงาน"],
    "Direct Wealth": ["ทรัพย์ที่ดูแลได้", "เป็นระบบ", "เงิน งาน สัญญา"],
    "Indirect Wealth": ["โอกาส", "เห็นช่องทางไว", "โปรเจกต์เสริม"],
    "Direct Officer": ["วินัยและบารมี", "น่าเชื่อถือ", "บทบาทผู้นำ"],
    "Seven Killings": ["ความกล้า", "รับแรงกดดัน", "การตัดสินใจยาก"],
    "Direct Resource": ["ความรู้", "ค่อย ๆ สะสม", "การเรียนและพักฟื้น"],
    "Indirect Resource": ["สัญชาตญาณ", "มองลึก", "งานคิดและงานเดี่ยว"],
  };
  const values = map[profile.key] || ["บทบาท", "เด่นในดวง", "ชีวิตจริง"];
  return [
    { label: "บทบาท", value: values[0] },
    { label: "จุดที่เห็นชัด", value: values[1] },
    { label: "ใช้กับ", value: values[2] },
  ];
}
function drawCollectorSkillBox(ctx, x, y, width, profile, main, mid) {
  roundRect(ctx, x, y, width, 206, 30);
  ctx.fillStyle = "rgba(255, 253, 248, 0.88)";
  ctx.fill();
  ctx.strokeStyle = hexToRgba(main, 0.34);
  ctx.lineWidth = 4;
  ctx.stroke();

  roundRect(ctx, x + 24, y + 22, 144, 42, 16);
  ctx.fillStyle = hexToRgba(main, 0.94);
  ctx.fill();
  ctx.fillStyle = "#fffdf8";
  ctx.textAlign = "center";
  ctx.font = '700 20px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("แนวทาง", x + 96, y + 51);

  ctx.textAlign = "left";
  ctx.fillStyle = main;
  ctx.font = '700 26px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("วิธีใช้พลังนี้ให้เป็นประโยชน์", x + 188, y + 52);
  ctx.fillStyle = "#241f18";
  ctx.font = '400 25px Prompt, "Noto Sans Thai", Tahoma, Arial';
  wrapCanvasText(ctx, profile.power, x + 34, y + 104, width - 68, 36, 3);
}

function drawCollectorQuote(ctx, x, y, width, profile, main) {
  roundRect(ctx, x, y, width, 126, 30);
  ctx.fillStyle = "rgba(31, 29, 24, 0.72)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.34)";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255, 253, 248, 0.72)";
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText("คำคมประจำวัน", x + 30, y + 42);
  ctx.fillStyle = "#fffdf8";
  ctx.font = '700 22px Prompt, "Noto Sans Thai", Tahoma, Arial';
  wrapCanvasText(ctx, profile.mantra, x + 30, y + 88, width - 60, 34, 2);
}
function drawDeityCardGlow(ctx, width, height, main, mid) {
  const glow = ctx.createRadialGradient(width * 0.5, 470, 40, width * 0.5, 470, 520);
  glow.addColorStop(0, hexToRgba(mid, 0.38));
  glow.addColorStop(0.56, hexToRgba(main, 0.12));
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}


function drawDeityArtwork(ctx, x, y, width, height, profile, options = {}) {
  const [main] = profile.palette;
  const framed = options.framed !== false;
  ctx.save();
  roundRect(ctx, x, y, width, height, 42);
  ctx.clip();
  const image = getDeityArtwork(profile);
  if (image.complete && image.naturalWidth > 0) {
    const srcW = image.naturalWidth;
    const srcH = image.naturalHeight;
    const targetRatio = width / height;
    let sw = srcW;
    let sh = srcH;
    let sx = 0;
    let sy = 0;
    if (srcW / srcH > targetRatio) {
      sw = srcH * targetRatio;
      sx = (srcW - sw) / 2;
    } else {
      sh = srcW / targetRatio;
      sy = Math.max(0, (srcH - sh) * (options.focusY ?? 0.12));
    }
    ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
  } else {
    drawDeityCharacter(ctx, x + width / 2, y + height * 0.44, profile);
  }
  const shade = ctx.createLinearGradient(0, y + height * (options.shade === "collector" ? 0.46 : 0.55), 0, y + height);
  shade.addColorStop(0, "rgba(255,255,255,0)");
  shade.addColorStop(1, options.shade === "collector" ? "rgba(20,16,12,0.22)" : "rgba(18,52,47,0.42)");
  ctx.fillStyle = shade;
  ctx.fillRect(x, y, width, height);
  ctx.restore();

  if (framed) {
    roundRect(ctx, x, y, width, height, 42);
    ctx.strokeStyle = hexToRgba(main, 0.34);
    ctx.lineWidth = 4;
    ctx.stroke();
  }
}
function drawDeityCharacter(ctx, cx, cy, profile) {
  const [main, mid] = profile.palette;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.beginPath();
  ctx.arc(0, -18, 236, 0, Math.PI * 2);
  ctx.fillStyle = hexToRgba(mid, 0.2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(main, 0.28);
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-180, 218);
  ctx.quadraticCurveTo(0, 88, 180, 218);
  ctx.lineTo(232, 330);
  ctx.quadraticCurveTo(0, 390, -232, 330);
  ctx.closePath();
  ctx.fillStyle = hexToRgba(main, 0.88);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, 18, 104, 0, Math.PI * 2);
  ctx.fillStyle = "#f3cda8";
  ctx.fill();
  ctx.strokeStyle = "rgba(85, 62, 39, 0.18)";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-92, -20);
  ctx.quadraticCurveTo(0, -116, 92, -20);
  ctx.quadraticCurveTo(52, -70, 0, -62);
  ctx.quadraticCurveTo(-52, -70, -92, -20);
  ctx.fillStyle = "#40352d";
  ctx.fill();

  ctx.fillStyle = "#2f2b26";
  ctx.beginPath();
  ctx.arc(-34, 24, 7, 0, Math.PI * 2);
  ctx.arc(34, 24, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#7f5543";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 52, 32, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();

  roundRect(ctx, -92, 176, 184, 92, 26);
  ctx.fillStyle = "rgba(255, 253, 248, 0.88)";
  ctx.fill();
  ctx.strokeStyle = hexToRgba(main, 0.32);
  ctx.stroke();
  drawDeitySymbol(ctx, 0, 222, profile.symbol, main);

  ctx.restore();
}

function drawDeitySymbol(ctx, cx, cy, symbol, color, scale = 1) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  if (symbol === "spark") {
    ctx.beginPath(); ctx.moveTo(0, -34); ctx.lineTo(12, -6); ctx.lineTo(42, 0); ctx.lineTo(12, 8); ctx.lineTo(0, 36); ctx.lineTo(-12, 8); ctx.lineTo(-42, 0); ctx.lineTo(-12, -6); ctx.closePath(); ctx.stroke();
  } else if (symbol === "sun") {
    ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.stroke();
    for (let i = 0; i < 8; i += 1) { const a = i * Math.PI / 4; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 36, Math.sin(a) * 36); ctx.lineTo(Math.cos(a) * 50, Math.sin(a) * 50); ctx.stroke(); }
  } else if (symbol === "flame") {
    ctx.beginPath(); ctx.moveTo(0, -42); ctx.bezierCurveTo(42, 2, 18, 46, 0, 46); ctx.bezierCurveTo(-34, 42, -34, 0, 0, -42); ctx.stroke();
  } else if (symbol === "coin") {
    ctx.beginPath(); ctx.arc(0, 0, 42, 0, Math.PI * 2); ctx.stroke(); roundRect(ctx, -15, -15, 30, 30, 4); ctx.stroke();
  } else if (symbol === "star") {
    ctx.beginPath();
    for (let i = 0; i < 5; i += 1) { const a = -Math.PI / 2 + i * Math.PI * 2 / 5; const x = Math.cos(a) * 44; const y = Math.sin(a) * 44; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); const b = a + Math.PI / 5; ctx.lineTo(Math.cos(b) * 18, Math.sin(b) * 18); }
    ctx.closePath(); ctx.stroke();
  } else if (symbol === "mountain") {
    ctx.beginPath(); ctx.moveTo(-48, 36); ctx.lineTo(-14, -22); ctx.lineTo(8, 10); ctx.lineTo(28, -34); ctx.lineTo(54, 36); ctx.stroke();
  } else if (symbol === "blade") {
    ctx.beginPath(); ctx.moveTo(0, -48); ctx.lineTo(30, 10); ctx.quadraticCurveTo(0, 48, -30, 10); ctx.closePath(); ctx.stroke();
  } else if (symbol === "book") {
    ctx.beginPath(); ctx.moveTo(-46, -32); ctx.quadraticCurveTo(-10, -44, 0, -18); ctx.quadraticCurveTo(10, -44, 46, -32); ctx.lineTo(46, 36); ctx.quadraticCurveTo(12, 24, 0, 46); ctx.quadraticCurveTo(-12, 24, -46, 36); ctx.closePath(); ctx.stroke();
  } else if (symbol === "moon") {
    ctx.beginPath(); ctx.arc(12, 0, 42, 0.35 * Math.PI, 1.65 * Math.PI); ctx.quadraticCurveTo(-18, 0, 12, -40); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.arc(0, 0, 42, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.restore();
}

function drawCardTextBlock(ctx, x, y, width, label, body, accent) {
  roundRect(ctx, x, y, width, 176, 28);
  ctx.fillStyle = "rgba(255, 255, 255, 0.64)";
  ctx.fill();
  ctx.strokeStyle = "rgba(120, 92, 42, 0.14)";
  ctx.stroke();
  ctx.fillStyle = accent;
  ctx.font = '700 27px Prompt, "Noto Sans Thai", Tahoma, Arial';
  ctx.fillText(label, x + 36, y + 52);
  ctx.fillStyle = "#22221f";
  ctx.font = '400 28px Prompt, "Noto Sans Thai", Tahoma, Arial';
  wrapCanvasText(ctx, body, x + 36, y + 100, width - 72, 41, 2);
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = String(text).split(/\s+/).filter(Boolean);
  let line = "";
  let lines = 0;
  for (let index = 0; index < words.length; index += 1) {
    const testLine = line ? `${line} ${words[index]}` : words[index];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y + lines * lineHeight);
      lines += 1;
      line = words[index];
      if (lines >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y + lines * lineHeight);
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function hexToRgba(hex, alpha) {
  const clean = String(hex).replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;
  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("สร้างไฟล์ภาพไม่สำเร็จ")), "image/png", 0.95);
  });
}

async function createDeityCardFile() {
  const profile = getPersonalDeityProfile();
  await ensureDeityArtworkLoaded(profile);
  renderDeityCardStudio();
  const canvas = document.getElementById("deityCardCanvas");
  const blob = await canvasToBlob(canvas);
  const fileName = `bazi-deity-card-${Date.now()}.png`;
  return { blob, file: new File([blob], fileName, { type: "image/png" }), fileName };
}

async function shareDeityCard() {
  try {
    const { blob, file, fileName } = await createDeityCardFile();
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: "การ์ดเทพประจำตัว BaZi", text: "การ์ดเทพประจำตัวจากชีวิต BaZi" });
      showToast("เปิดหน้าต่างแชร์แล้ว เลือก Instagram หรือ Facebook Stories ได้เลยถ้ามีในเครื่อง");
      return;
    }
    downloadBlob(blob, fileName);
    showToast("เครื่องนี้ยังแชร์รูปตรงไม่ได้ เลยดาวน์โหลดการ์ด PNG ให้แทน");
  } catch (error) {
    if (error?.name === "AbortError") return;
    showToast("ยังสร้างการ์ดไม่ได้ ลองกดอีกครั้งนะ");
  }
}

async function downloadDeityCard() {
  try {
    const { blob, fileName } = await createDeityCardFile();
    downloadBlob(blob, fileName);
    showToast("ดาวน์โหลดการ์ดเทพเป็น PNG แล้ว");
  } catch (error) {
    showToast("ยังดาวน์โหลดการ์ดไม่ได้ ลองกดอีกครั้งนะ");
  }
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}
function orderedTraitEntries(limit = 5) {
  return Object.entries(state.personality || {})
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit);
}

function orderedGuardianAdvice(elementKey) {
  const advice = {
    WOOD: {
      title: "ใช้ไม้เป็นทิศทางของการเติบโต",
      copy: "เหมาะกับการเริ่มเรียนรู้ วางเป้าหมายระยะยาว และคุยกับคนที่ช่วยให้คุณมองอนาคตชัดขึ้น เช่น วางแผนงานใหม่ตอนเช้า หรือจัดโต๊ะให้มีต้นไม้และพื้นที่โล่ง",
    },
    FIRE: {
      title: "ใช้ไฟเพื่อให้คนเห็นคุณค่า",
      copy: "เหมาะกับการนำเสนอ พูดความคิดให้ชัด และทำให้ผลงานมีชีวิต เช่น เตรียมสไลด์ให้เล่าเรื่องง่ายขึ้น หรือเลือกจังหวะคุยเรื่องสำคัญตอนใจพร้อม",
    },
    EARTH: {
      title: "ใช้ดินเพื่อสร้างฐานที่จับต้องได้",
      copy: "เหมาะกับการจัดระบบเงิน เวลา บ้าน และขอบเขตหน้าที่ เช่น แยกรายจ่าย วางตารางพัก หรือทำงานใหญ่ให้กลายเป็นขั้นตอนเล็ก ๆ",
    },
    METAL: {
      title: "ใช้ทองเพื่อคัดสิ่งที่ใช่ออกจากสิ่งที่รกใจ",
      copy: "เหมาะกับการตัดสินใจ ตั้งมาตรฐาน และปฏิเสธสิ่งที่กินพลัง เช่น เลือกโปรเจกต์ที่คุ้มจริง หรือคุยขอบเขตงานให้ชัดก่อนเริ่ม",
    },
    WATER: {
      title: "ใช้น้ำเพื่อให้ใจตกผลึกก่อนเดินต่อ",
      copy: "เหมาะกับการพัก ฟังข้อมูล อ่านภาพรวม และไม่รีบตอบทุกอย่างทันที เช่น จดสิ่งที่รู้สึกก่อนประชุม หรือเว้นเวลาหนึ่งคืนก่อนตัดสินใจเรื่องใหญ่",
    },
  };
  return advice[elementKey] || { title: "ใช้พลังนี้เป็นตัวช่วยเลือกทาง", copy: "สังเกตว่าพลังนี้ทำให้ใจนิ่งขึ้นตรงไหน แล้วออกแบบกิจวัตรและสภาพแวดล้อมให้รองรับจังหวะนั้น" };
}


function elementSupportPractice(elementKey) {
  const advice = orderedGuardianAdvice(elementKey);
  return `ในเว็บนี้หมายถึงการจัดชีวิตให้มีพลังของ ${premiumElementLabel(elementKey)} มากขึ้นผ่านสิ่งที่จับต้องได้ เช่น ${advice.copy.replace("เหมาะกับการ", "")}`;
}
function orderedDomainInsight(key) {
  const insights = {
    self: {
      lens: "แกนตัวตน",
      title: "สิ่งที่ทำให้คุณกลับมาเป็นตัวเอง",
      copy: "จุดนี้ไม่ใช่ภาพลักษณ์ที่คนอื่นอยากเห็น แต่เป็นจังหวะที่คุณรู้สึกว่าตัดสินใจได้โดยไม่ต้องฝืนใจหรือขออนุญาตใครตลอดเวลา",
    },
    behavior: {
      lens: "รูปแบบนิสัย",
      title: "นิสัยที่ทำงานอัตโนมัติ",
      copy: "ให้สังเกตพฤติกรรมที่เกิดซ้ำตอนเหนื่อยหรือถูกกดดัน เพราะตรงนั้นมักบอกว่าหัวใจกำลังปกป้องอะไรอยู่",
    },
    luck: {
      lens: "ช่องทางโชค",
      title: "โชคที่เปิดเมื่อใช้พลังถูกที่",
      copy: "โชคของดวงนี้มักไม่ใช่เรื่องบังเอิญลอย ๆ แต่มาจากการวางตัวถูกสนาม ถูกคน และถูกจังหวะ",
    },
    repeat: {
      lens: "เหตุการณ์ที่มักวนมา",
      title: "บทเรียนที่ชีวิตชอบส่งกลับมา",
      copy: "ถ้าเรื่องคล้ายเดิมกลับมาอีกครั้ง อย่าเพิ่งโทษตัวเอง ลองดูว่าคราวนี้คุณตอบสนองต่างจากเดิมได้ไหม",
    },
    edge: {
      lens: "จุดที่ควรใจเย็น",
      title: "มุมที่พลังดีอาจกลายเป็นแรงกดดัน",
      copy: "จุดแข็งทุกอย่างมีเงา ถ้าใช้มากเกินไป มันอาจทำให้ใจเหนื่อยหรือทำให้คนรอบตัวตั้งกำแพงโดยไม่รู้ตัว",
    },
    practice: {
      lens: "วิธีใช้จริง",
      title: "ก้าวเล็กที่ทำให้ดวงทำงานดีขึ้น",
      copy: "เลือกปรับสิ่งเล็กที่ทำซ้ำได้ เช่น วิธีคุย วิธีจัดเวลา หรือวิธีปฏิเสธ ก่อนจะเปลี่ยนชีวิตแบบใหญ่โต",
    },
  };
  return insights[key];
}

const dailyElementCycle = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"];

const hospitalityEnergyProfiles = {
  WOOD: {
    title: "วันนี้เหมาะกับการตั้งทิศทางให้ทีม",
    copy: "งานบริการอาจมีรายละเอียดใหม่เข้ามา เช่น เปลี่ยนกะ เปลี่ยนโต๊ะ หรือมีคำขอพิเศษจากลูกค้า ลองเริ่มวันด้วยการสรุปเป้าหมายกะงาน 1 เรื่องให้ทีมเห็นภาพเดียวกันก่อนแยกย้ายไปลงมือ",
    practice: "เขียนลำดับงานสั้น ๆ ก่อนเริ่มงาน และเลือกพื้นที่ที่มีสีเขียวหรือต้นไม้เล็ก ๆ ช่วยให้ใจรู้สึกมีทางโต",
  },
  FIRE: {
    title: "วันนี้คนจะรับพลังจากสีหน้าและน้ำเสียงของคุณเร็วมาก",
    copy: "ถ้าต้องเจอลูกค้าหลายอารมณ์หรือประชุมกับหัวหน้ากะ ให้ใช้ความสดใสแบบพอดี ไม่ต้องรีบตอบทุกอย่างทันที รอยยิ้มที่นิ่งและคำพูดที่ชัดจะช่วยลดแรงปะทะได้ดี",
    practice: "ก่อนคุยเรื่องสำคัญให้หายใจยาวหนึ่งครั้ง และลดโทนร้อนด้วยสีขาว ฟ้า หรือน้ำเงินเล็ก ๆ ในชุดหรือของใช้",
  },
  EARTH: {
    title: "วันนี้เหมาะกับการทำให้เรื่องยุ่งกลายเป็นระบบ",
    copy: "งานหลังบ้าน ตารางจอง รายละเอียดห้อง หรือรายการที่ต้องส่งต่อทีมอาจต้องการความนิ่งเป็นพิเศษ อย่ารับทุกเรื่องไว้คนเดียว ให้แยกว่าสิ่งไหนต้องทำเอง สิ่งไหนควรมอบหมาย และสิ่งไหนแค่ต้องจดให้ไม่หลุด",
    practice: "ใช้ checklist 3 ข้อก่อนจบกะ และกินอาหารอุ่น ๆ หรือพักเท้า 5 นาทีเพื่อคืนฐานให้ร่างกาย",
  },
  METAL: {
    title: "วันนี้มาตรฐานคือเพื่อน ไม่ใช่แรงกดดัน",
    copy: "ถ้ามี complaint, SOP หรือรายละเอียดที่ต้องคุยให้ชัด ให้พูดด้วยข้อมูล ไม่ใช่อารมณ์ งานบริการจะไหลขึ้นเมื่อคุณตัดสิ่งรก ๆ ออกจากบทสนทนาและเหลือแต่ข้อตกลงที่ทำตามได้จริง",
    practice: "ใช้ประโยคสั้น ชัด และสุภาพ เช่น ‘ขอเช็กข้อมูลอีกครั้งก่อนยืนยันนะครับ/ค่ะ’ พร้อมเลือกโทนขาว เทา หรือเงินให้ใจรู้สึกเป็นระเบียบ",
  },
  WATER: {
    title: "วันนี้การฟังจะพาคุณชนะมากกว่าการรีบตอบ",
    copy: "ลูกค้าหรือทีมอาจไม่ได้ต้องการคำตอบเร็วที่สุด แต่อยากรู้สึกว่าถูกเข้าใจจริง ๆ ถ้าเจอแรงกดดันหน้าเคาน์เตอร์หรือในแชตงาน ให้ทวนประเด็นสำคัญก่อนตอบ เพื่อให้ใจคุณไม่รับอารมณ์ของคนอื่นมาเต็มตัว",
    practice: "พกน้ำไว้ใกล้ตัว เว้นจังหวะก่อนตอบข้อความสำคัญ และหาเวลาสั้น ๆ อยู่เงียบ ๆ หลังช่วงที่รับคนเยอะ",
  },
};

const elementActionTips = {
  WOOD: "เสริมไม้ด้วยการวางแผนสั้น ๆ เปิดพื้นที่สีเขียว หรือคุยกับคนที่ช่วยให้เห็นอนาคตชัดขึ้น",
  FIRE: "เสริมไฟด้วยแสงที่พอดี การพูดให้ชัด และการทำให้ผลงานถูกมองเห็นโดยไม่ต้องเร่งตัวเองเกินไป",
  EARTH: "เสริมดินด้วย checklist อาหารอุ่น ๆ ตารางพัก และการทำเรื่องใหญ่ให้เป็นขั้นตอนเล็กที่จับต้องได้",
  METAL: "เสริมทองด้วยสีขาว เทา เงิน การตัดสิ่งที่ไม่จำเป็น และขอบเขตที่พูดสุภาพแต่ชัด",
  WATER: "เสริมน้ำด้วยสีฟ้า น้ำเงิน เวลาคิดเงียบ ๆ การดื่มน้ำ และการพักจากเสียงรอบตัวสักช่วงหนึ่ง",
};

function positiveMod(value, base) {
  return ((value % base) + base) % base;
}

function getDailyElementKey(date = new Date()) {
  const start = new Date(2024, 0, 1);
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const days = Math.floor((today.getTime() - start.getTime()) / 86400000);
  return dailyElementCycle[positiveMod(days, dailyElementCycle.length)];
}

function formatThaiDay(date = new Date()) {
  return date.toLocaleDateString("th-TH", { weekday: "long", day: "numeric", month: "short" });
}

function buildThreeLineHook() {
  const name = document.getElementById("clientName")?.value || "คุณ";
  const masterVoice = getPremiumMasterVoice();
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const item = orderedCurrentLuck();
  const strengthVoice = getPremiumStrengthVoice();
  return [
    {
      label: "บรรทัดแรก",
      title: `${escapeHtml(name)} มีแกนแบบ ${masterVoice.name}`,
      copy: `${masterVoice.tagline} จุดนี้คือเหตุผลที่คุณมักรู้สึกดีเมื่อได้อยู่ในพื้นที่ที่ไม่บังคับให้ฝืนธรรมชาติของตัวเอง`,
    },
    {
      label: "บรรทัดที่สอง",
      title: `${premiumElementLabel(dominant.key, true)} เด่น ส่วน ${premiumElementLabel(weakest.key, true)} คือจุดที่ควรดูแล`,
      copy: `พลังเด่นทำให้คุณใช้ ${elementArchetypes[dominant.key]} ได้ดี แต่เมื่อเหนื่อยง่ายหรือคิดวน ให้กลับมาเสริม ${premiumElementLabel(weakest.key, true)} ผ่านสิ่งเล็กที่ทำซ้ำได้`,
    },
    {
      label: "บรรทัดที่สาม",
      title: item ? `ช่วงนี้ชีวิตกำลังเปิดบท: ${item.chapter.title}` : strengthVoice.label,
      copy: item ? `อ่านรอบนี้เป็นจังหวะวางตัว ไม่ใช่คำตัดสิน ช่วงอายุ ${item.ageRangeLabel} จะเห็นชัดว่า ${topTrait.label} ควรถูกใช้ให้จับต้องได้มากขึ้น` : strengthVoice.copy,
    },
  ];
}


let storySummaryTimer = null;
let storySummaryUtterance = null;
let storyFallbackAudio = null;
const STORY_NARRATION_STORAGE_KEY = "bazi:last-story-narration:v1";
const STORY_VOICE_MANIFEST_URL = "./voice-assets.json";
const STORY_AUDIO_CACHE_NAME = "bazi-story-audio-v1";

function saveStoryNarrationCache(paragraphs) {
  try {
    const payload = {
      savedAt: new Date().toISOString(),
      page: location.pathname,
      paragraphs,
      text: paragraphs.join("\n\n"),
    };
    localStorage.setItem(STORY_NARRATION_STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Unable to save story narration cache", error);
  }
}

function getStoryNarrationCache() {
  try {
    const raw = localStorage.getItem(STORY_NARRATION_STORAGE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (!Array.isArray(payload.paragraphs) || !payload.paragraphs.length) return null;
    return payload;
  } catch (error) {
    console.warn("Unable to read story narration cache", error);
    return null;
  }
}

function updateStoryReplayButton() {
  const replayButton = document.getElementById("storyReplayButton");
  if (!replayButton) return;
  replayButton.disabled = !getStoryNarrationCache();
}

async function loadVoiceAssetManifest() {
  try {
    const response = await fetch(STORY_VOICE_MANIFEST_URL, { cache: "no-cache" });
    if (!response.ok) return [];
    const manifest = await response.json();
    return Array.isArray(manifest.tracks) ? manifest.tracks.filter((track) => track?.src) : [];
  } catch (error) {
    console.warn("Unable to load voice asset manifest", error);
    return [];
  }
}

async function cacheVoiceFallbackAssets() {
  if (!("caches" in window)) return [];
  const tracks = await loadVoiceAssetManifest();
  const cached = [];
  const cache = await caches.open(STORY_AUDIO_CACHE_NAME);
  for (const track of tracks) {
    try {
      const response = await fetch(track.src, { cache: "reload" });
      if (!response.ok) continue;
      await cache.put(track.src, response.clone());
      cached.push(track);
    } catch (error) {
      console.warn("Unable to cache voice asset", track.src, error);
    }
  }
  return cached;
}

async function playCachedVoiceFallback(status) {
  if (!("caches" in window) || typeof Audio === "undefined") return false;
  const tracks = await loadVoiceAssetManifest();
  if (!tracks.length) return false;
  const cache = await caches.open(STORY_AUDIO_CACHE_NAME);
  for (const track of tracks) {
    try {
      let response = await cache.match(track.src);
      if (!response) {
        const fresh = await fetch(track.src, { cache: "force-cache" });
        if (!fresh.ok) continue;
        await cache.put(track.src, fresh.clone());
        response = fresh;
      }
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      if (storyFallbackAudio) storyFallbackAudio.pause();
      storyFallbackAudio = new Audio(audioUrl);
      storyFallbackAudio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        if (status) status.textContent = "เล่นเสียงสำรองจบแล้ว ข้อความยังเก็บไว้ในเครื่องนี้";
      };
      storyFallbackAudio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        if (status) status.textContent = "ไฟล์เสียงสำรองเปิดไม่ได้ แต่ข้อความยังอ่านซ้ำได้";
      };
      await storyFallbackAudio.play();
      if (status) status.textContent = `กำลังเล่นเสียงสำรอง: ${track.title || "บทอ่านที่เก็บไว้"}`;
      return true;
    } catch (error) {
      console.warn("Unable to play cached voice fallback", track.src, error);
    }
  }
  return false;
}

function stopFallbackAudio() {
  if (!storyFallbackAudio) return;
  storyFallbackAudio.pause();
  storyFallbackAudio.currentTime = 0;
  storyFallbackAudio = null;
}

function buildStorySummaryScript() {
  const name = document.getElementById("clientName")?.value || "คุณ";
  const masterVoice = getPremiumMasterVoice();
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const item = orderedPresentLuck();
  const guardian = getGuardianElementLabel().replace(/<[^>]+>/g, "");
  const dominantLabel = premiumElementLabel(dominant.key).replace(/<[^>]+>/g, "");
  const weakestLabel = premiumElementLabel(weakest.key).replace(/<[^>]+>/g, "");
  const chapter = item?.chapter?.title || "บทที่ชีวิตกำลังค่อย ๆ เปิดให้เห็นทางของตัวเอง";
  const ageText = item?.ageRangeLabel ? `ในช่วงอายุ ${item.ageRangeLabel}` : "ในช่วงเวลานี้";

  return [
    `${name} มีจังหวะชีวิตที่คล้าย ${masterVoice.image} ภายนอกอาจดูนิ่งหรือปรับตัวเก่ง แต่ข้างในมีความต้องการเติบโตในแบบที่ไม่ต้องฝืนตัวเองมากเกินไป เมื่ออยู่ในพื้นที่ที่ใช่ คุณจะค่อย ๆ เปิดเสน่ห์ ความคิด และแรงสร้างสรรค์ออกมาอย่างเป็นธรรมชาติ`,
    `พลังที่เห็นชัดตอนนี้คือ ${dominantLabel} จึงทำให้คุณรับมือกับเรื่อง ${elementArchetypes[dominant.key]} ได้ดี จุดแข็งนี้มักออกมาในสถานการณ์จริง เช่น ตอนต้องจัดลำดับงาน คุยกับคนสำคัญ หรือเลือกว่าจะให้พลังกับเรื่องไหนก่อน แต่จุดที่ควรดูแลคือ ${weakestLabel} เพราะถ้าปล่อยให้ชีวิตรีบเกินไป ใจอาจเหนื่อยก่อนที่ผลลัพธ์จะมาถึง`,
    `${ageText} ชีวิตกำลังเล่าบทที่ชื่อว่า “${chapter}” แก่นของช่วงนี้ไม่ใช่การรีบพิสูจน์ทุกอย่าง แต่คือการเลือกทางที่ทำให้ ${topTrait.label} ถูกใช้ให้จับต้องได้มากขึ้น ถ้าจะเริ่มจากก้าวเล็ก ๆ ให้ใช้ ${guardian} เป็นเข็มทิศ แล้วถามตัวเองว่า เรื่องนี้ทำให้ใจนิ่งขึ้น เห็นทางชัดขึ้น และยังเหลือแรงให้ชีวิตส่วนตัวอยู่ไหม`,
  ];
}

function typeStoryParagraphs(container, paragraphs) {
  if (storySummaryTimer) window.clearTimeout(storySummaryTimer);
  container.innerHTML = paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  container.classList.add("is-revealing");
  storySummaryTimer = window.setTimeout(() => {
    container.classList.remove("is-revealing");
  }, 700);
}

function fallbackStorySummaryScript() {
  return [
    "ตอนนี้ระบบสรุปชีวิตสะดุดนิดหน่อย แต่ไม่ต้องกังวลนะ ข้อมูลหลักของดวงยังอยู่ครบ ลองกดอ่านอีกครั้งหรือเลื่อนดูหัวข้อถัดไปได้เลย",
    "ถ้าเสียงยังไม่ดัง อาจเป็นเพราะ browser ยังไม่อนุญาตเสียงอ่านอัตโนมัติ ข้อความบนหน้านี้จึงถูกเปิดให้อ่านก่อน เพื่อไม่ให้คุณต้องรอแบบเงียบ ๆ",
  ];
}

function resetStoryVoiceButton(button, statusText = "พร้อมฟังอีกครั้ง") {
  if (!button) return;
  button.dataset.speaking = "false";
  button.classList.remove("is-speaking");
  button.querySelector("b").textContent = "🔊";
  button.querySelector("span").textContent = "ฟังสรุปชีวิตแบบเล่าเรื่อง พร้อมเสียงอ่าน";
  const status = document.getElementById("storyVoiceStatus");
  if (status) status.textContent = statusText;
}

function stopStoryNarration(button, statusText = "หยุดเสียงเล่าแล้ว") {
  if (storySummaryTimer) window.clearTimeout(storySummaryTimer);
  document.getElementById("storySummaryOutput")?.classList.remove("is-revealing");
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  stopFallbackAudio();
  storySummaryUtterance = null;
  resetStoryVoiceButton(button, statusText);
}

function chooseThaiVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices?.() || [];
  return voices.find((voice) => /th|thai/i.test(`${voice.lang} ${voice.name}`)) || voices.find((voice) => /Google|Microsoft/i.test(voice.name)) || voices[0] || null;
}

function speakStorySummary(paragraphs, button) {
  const status = document.getElementById("storyVoiceStatus");
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    if (status) status.textContent = "เครื่องนี้ยังไม่รองรับเสียงอ่านอัตโนมัติ กำลังลองเปิดไฟล์เสียงสำรองจาก cache";
    playCachedVoiceFallback(status).then((played) => {
      if (!played) {
        if (status) status.textContent = "ยังไม่มีไฟล์เสียงสำรองใน cache แต่ข้อความถูกเก็บไว้ให้อ่านซ้ำแล้ว";
        showToast("เครื่องนี้ยังไม่รองรับเสียงอ่าน และยังไม่มีไฟล์เสียงสำรอง");
      }
    });
    return;
  }
  try {
    window.speechSynthesis.cancel();
  } catch (error) {
    console.warn("Unable to reset speech synthesis", error);
  }
  const utterance = new SpeechSynthesisUtterance(paragraphs.join("\n\n"));
  utterance.lang = "th-TH";
  utterance.rate = 0.92;
  utterance.pitch = 1.02;
  utterance.volume = 1;
  const voice = chooseThaiVoice();
  if (voice) utterance.voice = voice;
  storySummaryUtterance = utterance;
  button.dataset.speaking = "true";
  button.classList.add("is-speaking");
  button.querySelector("b").textContent = "⏸";
  button.querySelector("span").textContent = "กำลังอ่านให้ฟัง · กดอีกครั้งเพื่อหยุด";
  if (status) status.textContent = "กำลังอ่านออกเสียง ถ้าไม่ได้ยิน ลองเพิ่มเสียงเครื่องหรืออนุญาตเสียงใน browser";
  utterance.onstart = () => {
    if (status) status.textContent = "กำลังอ่านออกเสียงให้ฟังอยู่";
  };
  utterance.onend = () => resetStoryVoiceButton(button, "อ่านจบแล้ว ระบบเก็บบทอ่านไว้ในเครื่องนี้ให้เปิดซ้ำได้");
  utterance.onerror = () => resetStoryVoiceButton(button, "เสียงอ่านสะดุดนิดหน่อย แต่ยังอ่านข้อความบนหน้าได้ครบ");
  window.speechSynthesis.speak(utterance);
  window.setTimeout(() => {
    try {
      window.speechSynthesis.resume?.();
    } catch (error) {
      console.warn("Unable to resume speech synthesis", error);
    }
  }, 120);
}

function bindStorySummaryButton() {
  const button = document.getElementById("storySummaryButton");
  const output = document.getElementById("storySummaryOutput");
  if (!button || !output) return;
  button.addEventListener("click", () => {
    if (button.dataset.speaking === "true") {
      stopStoryNarration(button);
      return;
    }
    let paragraphs = [];
    try {
      paragraphs = buildStorySummaryScript();
    } catch (error) {
      console.error("Unable to build story summary", error);
      paragraphs = fallbackStorySummaryScript();
    }
    output.hidden = false;
    saveStoryNarrationCache(paragraphs);
    updateStoryReplayButton();
    cacheVoiceFallbackAssets();
    typeStoryParagraphs(output, paragraphs);
    try {
      speakStorySummary(paragraphs, button);
    } catch (error) {
      console.error("Unable to start story narration", error);
      resetStoryVoiceButton(button, "ข้อความเปิดให้อ่านแล้ว แต่เสียงยังไม่เริ่มใน browser นี้");
      showToast("เปิดข้อความให้อ่านแล้ว แต่เสียงยังไม่เริ่ม");
    }
  });
  const replayButton = document.getElementById("storyReplayButton");
  replayButton?.addEventListener("click", () => {
    const cached = getStoryNarrationCache();
    if (!cached) {
      showToast("ยังไม่มีบทอ่านล่าสุดให้เปิดซ้ำ");
      return;
    }
    output.hidden = false;
    typeStoryParagraphs(output, cached.paragraphs);
    try {
      speakStorySummary(cached.paragraphs, button);
    } catch (error) {
      console.error("Unable to replay story narration", error);
      playCachedVoiceFallback(document.getElementById("storyVoiceStatus"));
    }
  });
  updateStoryReplayButton();
  cacheVoiceFallbackAssets();
}
function renderHookSummary() {
  const lines = buildThreeLineHook();
  orderedSetHtml("hookSummary", `
    <article class="hook-intro">
      <span>อ่าน 3 บรรทัดนี้ก่อน</span>
      <strong>ถ้าจะจับแกนดวงแบบเร็ว ๆ ให้เริ่มตรงนี้</strong>
    </article>
    ${lines.map((line) => `
      <article class="hook-line-card">
        <span>${line.label}</span>
        <strong>${line.title}</strong>
        <p>${line.copy}</p>
      </article>
    `).join("")}
    <article class="story-summary-panel">
      <div class="story-summary-copy">
        <span>สรุปพิเศษแบบเล่าเรื่อง</span>
        <strong>ฟังเรื่องราวชีวิตของคุณใน 1 นาที</strong>
        <p>กดเพื่อให้ระบบเรียบเรียงข้อมูลดิบให้เป็นเรื่องเล่าสั้น ๆ จากพลังในตัวคุณ ไปสู่จังหวะชีวิตจริงที่กำลังเดินอยู่ตอนนี้ พร้อมเสียงอ่านภาษาไทย</p>
      </div>
      <div class="story-voice-actions">
        <button class="story-summary-button" id="storySummaryButton" type="button" aria-controls="storySummaryOutput">
          <b aria-hidden="true">🔊</b>
          <span>ฟังสรุปชีวิตแบบเล่าเรื่อง พร้อมเสียงอ่าน</span>
        </button>
        <button class="story-replay-button" id="storyReplayButton" type="button" disabled>
          <b aria-hidden="true">↻</b>
          <span>เปิดบทอ่านล่าสุดอีกครั้ง</span>
        </button>
      </div>
      <div class="story-voice-status" id="storyVoiceStatus">กดปุ่มแล้วระบบจะอ่านด้วยเสียง browser และเก็บบทอ่านไว้ในเครื่องนี้</div>
      <div class="story-summary-output" id="storySummaryOutput" hidden></div>
    </article>
  `);
  bindStorySummaryButton();
}

function buildHospitalityEnergyGuide() {
  const today = new Date();
  const dailyKey = getDailyElementKey(today);
  const daily = hospitalityEnergyProfiles[dailyKey];
  const guardianKey = getFavorableElements()[0] || dailyKey;
  const masterElement = state.master?.element || dailyKey;
  const item = orderedCurrentLuck();
  const decadeTone = item?.favorability?.supportScore >= 55
    ? `วัยจรรอบนี้มีแรงช่วยส่งพอให้ลองขยับเรื่องสำคัญ แต่ยังควรเลือกสนามที่คุ้มพลัง ไม่ใช่ตอบรับทุกโอกาสที่เข้ามา`
    : item?.favorability?.supportScore < 25
      ? `วัยจรรอบนี้ขอให้คุณประหยัดแรงและไม่รีบเดิมพันใหญ่ โดยเฉพาะวันที่งานบริการพาอารมณ์คนอื่นเข้ามาใกล้มาก`
      : `วัยจรรอบนี้เหมาะกับการลองแล้วปรับ ใช้ชีวิตจริงเป็นข้อมูล ไม่ต้องรีบสรุปว่าทางไหนใช่ตั้งแต่วันแรก`;
  return {
    dateLabel: formatThaiDay(today),
    dailyKey,
    dailyTitle: daily.title,
    dailyCopy: `${daily.copy} ธาตุประจำตัวของคุณคือ ${premiumElementLabel(masterElement, true)} จึงควรดูว่าพลังวันนี้ช่วยให้คุณลื่นขึ้น หรือทำให้ตอบสนองไวเกินไปตรงไหน`,
    practice: daily.practice,
    weeklyTitle: item ? `สัปดาห์นี้อ่านร่วมกับวัยจร: ${item.chapter.title}` : "สัปดาห์นี้ให้ดูจังหวะตัวเองเป็นหลัก",
    weeklyCopy: `${decadeTone} ตัวช่วยที่ควรใช้คือ ${premiumElementLabel(guardianKey, true)}: ${elementActionTips[guardianKey]}`,
  };
}

function renderDailyEnergy() {
  const guide = buildHospitalityEnergyGuide();
  orderedSetHtml("dailyEnergy", `
    <article class="energy-card energy-today">
      <div class="energy-topline">
        <span>พลังงานวันนี้ · ${guide.dateLabel}</span>
        <b>${premiumElementLabel(guide.dailyKey, true)}</b>
      </div>
      <strong>${guide.dailyTitle}</strong>
      <p>${guide.dailyCopy}</p>
      <div class="energy-practice"><span>ลองทำวันนี้</span><p>${guide.practice}</p></div>
    </article>
    <article class="energy-card energy-week">
      <div class="energy-topline">
        <span>คำแนะนำรายสัปดาห์</span>
        <b>สำหรับชีวิตทำงานจริง</b>
      </div>
      <strong>${guide.weeklyTitle}</strong>
      <p>${guide.weeklyCopy}</p>
    </article>
  `);
}

function buildModePracticalAdvice(modeKey, guardianKey, dailyKey) {
  const guardianTip = elementActionTips[guardianKey] || "เลือกสิ่งที่ทำให้ใจนิ่งขึ้นและลดแรงปะทะก่อนตัดสินใจเรื่องใหญ่";
  const todayTip = elementActionTips[dailyKey] || guardianTip;
  const advice = {
    career: `วันนี้ถ้าต้องคุยงานกับหัวหน้า ทีม หรือลูกค้า ให้เริ่มจากเป้าหมายเดียวที่อยากให้ทุกคนเข้าใจตรงกัน แล้วใช้ ${guardianTip}`,
    wealth: `ก่อนตกลงเรื่องเงินหรือโปรเจกต์เสริม ให้แบ่งตัวเลขเป็นเงินจำเป็น เงินทดลอง และเงินเสี่ยง ถ้าใจยังร้อน ให้ใช้ ${todayTip} ก่อนตอบตกลง`,
    relationship: `ถ้าต้องคุยเรื่องละเอียดอ่อน ให้ใช้ประโยคสั้นและจริง เช่น “ฉันรู้สึก...” และ “ฉันอยากให้เราลอง...” แล้วเสริมบรรยากาศด้วย ${guardianTip}`,
    health: `วันนี้ร่างกายไม่ต้องการแผนใหญ่ แค่ลดสิ่งกระตุ้นหนึ่งอย่าง นอนให้ใกล้เวลาเดิม และใช้ ${todayTip} เพื่อพาใจกลับมานิ่ง`,
  };
  return advice[modeKey] || advice.career;
}
function orderedQuestionDepth(modeKey, mode, mainGod, item, annualHits, topProfileGod) {
  const godPsych = mainGod ? getTenGodPsychology(mainGod) : null;
  const modeAdvice = {
    career: {
      field: "งาน",
      situation: "เช่น อยู่ในห้องประชุมแล้วเห็นว่าทางเดิมเริ่มไม่ตอบโจทย์ แต่ต้องเลือกวิธีพูดให้คนฟัง ไม่ใช่แค่พูดให้ตัวเองโล่ง",
      plan: "เลือกงานหลัก 1 เรื่องที่อยากให้คนจำชื่อคุณจากสิ่งนั้น แล้วทำให้มีหลักฐานจริงภายใน 30 วัน เช่น ตัวอย่างงาน ข้อเสนอ หรือระบบเล็ก ๆ ที่วัดผลได้",
      caution: "อย่ารับงานเพราะอยากพิสูจน์ตัวเองทันที ให้ดูว่าขอบเขต เวลา และคนที่เกี่ยวข้องช่วยให้พลังคุณยืนระยะได้ไหม",
    },
    wealth: {
      field: "การเงิน",
      situation: "เช่น มีคนชวนลงทุน ทำโปรเจกต์เสริม หรือมีรายจ่ายก้อนใหญ่เข้ามา ให้แยกความตื่นเต้นออกจากตัวเลขจริงก่อน",
      plan: "แบ่งเงินเป็น 3 ชั้น: เงินจำเป็น เงินทดลอง และเงินเสี่ยง แล้วให้แต่ละชั้นมีเพดานชัดเจนก่อนตอบตกลงเรื่องใหม่",
      caution: "อย่าให้ความกลัวพลาดโอกาสพาคุณกระจายเงินหรือเวลาเกินกำลัง โอกาสที่ดีควรทำให้ใจชัดขึ้น ไม่ใช่ร้อนขึ้น",
    },
    relationship: {
      field: "ความสัมพันธ์",
      situation: "เช่น คุยกับคนรักหรือคนใกล้ตัวแล้วรู้สึกว่าอีกฝ่ายไม่เข้าใจ ให้เริ่มจากประโยคสั้น ๆ ที่บอกความต้องการจริง ไม่ใช่การทดสอบใจ",
      plan: "เลือกบทสนทนาสำคัญ 1 เรื่อง แล้วเตรียม 3 ประโยค: ฉันรู้สึกอะไร, ฉันต้องการอะไร, เราลองทำอะไรด้วยกันได้บ้าง",
      caution: "อย่าใช้ความเงียบหรือการเดาใจเป็นเครื่องมือป้องกันตัวนานเกินไป ความสัมพันธ์ที่ดีควรมีพื้นที่ให้พูดตรงอย่างอ่อนโยน",
    },
    health: {
      field: "พลังชีวิตและสุขภาพ",
      situation: "เช่น ตื่นมาแล้วยังเหนื่อยทั้งที่นอนแล้ว หรือหงุดหงิดง่ายหลังรับเรื่องของคนอื่นเยอะเกินไป นั่นอาจเป็นสัญญาณว่าร่างกายขอพื้นที่คืน",
      plan: "ตั้งกิจวัตรเล็ก 3 อย่างเป็นเวลา 14 วัน: นอนให้ใกล้เวลาเดิม ขยับตัวเบา ๆ และเว้นช่วงปลอดหน้าจอก่อนนอน",
      caution: "อย่ารอให้ร่างกายส่งเสียงดังแล้วค่อยพัก ถ้าช่วงนี้ใจรับข้อมูลมาก ให้ลดสิ่งกระตุ้นก่อนเพิ่มงานใหม่",
    },
  };
  const profile = modeAdvice[modeKey] || modeAdvice.career;
  const years = annualHits.length ? annualHits.slice(0, 4).map((year) => `${year.year} (${year.signal})`).join(", ") : "ยังไม่มีปีที่เด่นชัดมากในช่วง 10 ปีนี้";
  return {
    field: profile.field,
    situation: profile.situation,
    plan: profile.plan,
    caution: profile.caution,
    foundation: topProfileGod
      ? `พื้นดวงมี ${tenGodThai(topProfileGod[0])} เป็นแรงเกี่ยวข้องกับคำถามนี้ จึงแปลว่าคุณมีทรัพยากรภายในพอจะใช้เรื่องนี้เป็นทางเติบโต ไม่ใช่ต้องรอจังหวะจากข้างนอกอย่างเดียว`
      : `พื้นดวงไม่ได้เน้นเรื่องนี้แบบตรง ๆ มากนัก จึงควรเริ่มจากการจัดสภาพแวดล้อมและคนรอบตัวให้ช่วยให้เรื่องนี้นิ่งขึ้นก่อน แล้วค่อยเพิ่มแรง`,
    decade: item
      ? `วัยจรปัจจุบันกำลังกระตุ้น ${tenGodThai(item.activatedTenGod)} ซึ่งเกี่ยวกับ ${tenGodDomain(item.activatedTenGod)} ถ้าโยงกับคำถามเรื่อง${profile.field} ให้ดูว่าช่วงนี้ชีวิตกำลังขอให้คุณจัดบทบาท ขอบเขต หรือวิธีใช้พลังใหม่ตรงไหน`
      : "ยังไม่พบวัยจรปัจจุบัน จึงอ่านจากพื้นดวงเป็นหลักก่อน",
    years,
    innerWork: godPsych?.repairPractice || mode.action,
  };
}
function render() {
  const masterVoice = getPremiumMasterVoice();
  const strengthVoice = getPremiumStrengthVoice();
  orderedSetText("dayMaster", masterVoice.name);
  orderedSetText("daySymbol", `${masterVoice.title} · ${masterVoice.image}${state.birthTimeUnknown ? " · อ่านจาก 3 เสาหลัก" : ""}`);
  orderedSetText("strengthScore", `${strengthVoice.label} (${strengthVoice.english})`);
  orderedSetText("strengthLevel", strengthVoice.copy);
  orderedSetText("usefulGod", getGuardianElementLabel());
  orderedSetText("usefulReason", getGuardianElementCopy());
  orderedSetText("chartType", state.chartType);
  orderedSetText("birthModeLabel", state.birthTimeUnknown ? "อ่านจาก 3 เสาหลัก" : "อ่านจาก 4 เสาหลัก");

  renderHookSummary();
  renderPillars();
  renderElements();
  renderAuspicious();
  renderDailyEnergy();
  renderDeityCardStudio();
  renderGuardianActions();
  renderLifeAdvice();
  renderInsightStudio();
  renderRadar();
  renderTraitList();
  renderStrategy();
  renderFrequentThemes();
  renderQuestionReading();
  renderTimeline();
  renderLuckDetail();
  renderPlanning();
}

function renderPillars() {
  orderedSetHtml("pillars", state.pillars
    .map((pillar) => {
      if (state.birthTimeUnknown && pillar.label === "Hour") {
        const possible = state.sensitivity.possibleHourPillars || [];
        return `
          <article class="pillar unknown-hour">
            <span>${pillarPositionThai(pillar.label)}</span>
            <strong>ยังไม่ทราบเสาเวลาเกิด</strong>
            <small>ตอนนี้อ่านแกนหลักจาก 3 เสาก่อน เสาเวลาเกิดที่เป็นไปได้มี ${possible.length} แบบ</small>
            <small>${possible.slice(0, 5).join(" · ")}${possible.length > 5 ? " · ..." : ""}</small>
          </article>
        `;
      }
      return `
        <article class="pillar">
          <span>${pillarPositionThai(pillar.label)}</span>
          <strong>${premiumStemLabel(pillar.stem, true)}</strong>
          <div>${premiumBranchLabel(pillar.branch, true)}</div>
          <small>${tenGodThai(pillar.tenGod)}</small>
          <small>${pillar.hiddenTenGods.map((item) => `${premiumStemLabel(item.stem, true)} · ${tenGodThai(item.tenGod)}`).join(" · ")}</small>
        </article>
      `;
    })
    .join(""));
}

function renderGuardianActions() {
  const keys = getFavorableElements();
  orderedSetHtml("guardianActions", keys
    .map((key) => {
      const item = orderedGuardianAdvice(key);
      return `
        <article class="guardian-action">
          <span>${premiumElementLabel(key, true)}</span>
          <strong>${item.title}</strong>
          <p>${item.copy}</p>
        </article>
      `;
    })
    .join(""));
}

function renderLifeAdvice() {
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const psych = getPsychologicalProfile(dominant, weakest, topTrait);
  const masterVoice = getPremiumMasterVoice();
  orderedSetHtml("lifeAdvice", `
    <article><span>แกนที่ควรใช้บ่อย</span><strong>${masterVoice.tagline}</strong><p>${masterVoice.essence}</p></article>
    <article><span>เวลารู้สึกสะดุด</span><strong>กลับมาดู ${premiumElementLabel(dominant.key, true)} ที่นำมากเกิน</strong><p>${psych.stressPattern} ลองพักหนึ่งจังหวะ แล้วค่อยตอบจากใจที่นิ่งขึ้น</p></article>
    <article><span>แบบฝึกที่ช่วยบาลานซ์</span><strong>เสริม ${premiumElementLabel(weakest.key, true)} ผ่านกิจวัตรเล็ก ๆ</strong><p>${elementSupportPractice(weakest.key)} ${psych.growthPractice}</p></article>
  `);
}

function renderInsightStudio() {
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const psych = getPsychologicalProfile(dominant, weakest, topTrait);
  const name = document.getElementById("clientName")?.value || "คุณ";
  const masterVoice = getPremiumMasterVoice();
  const topGods = orderedTopTenGods(3).map(([god]) => tenGodThai(god)).join(" · ");
  orderedSetHtml("readingCopy", `
    <strong>${escapeHtml(name)}: ${masterVoice.name} — ${masterVoice.tagline}</strong>
    <p>จริง ๆ แล้วแกนดวงนี้เหมือน ${masterVoice.image} ที่ไม่ได้มีไว้บอกแค่ว่า “คุณเป็นคนแบบไหน” แต่ช่วยให้เห็นว่าคุณควรอยู่ในพื้นที่แบบไหนถึงจะไม่ต้องฝืนตัวเองมากเกินไป</p>
    <p>${premiumElementLabel(dominant.key, true)} เป็นพลังที่เด่น ทำให้ชีวิตมักแสดงออกผ่านเรื่อง ${elementArchetypes[dominant.key]} ส่วนพรสวรรค์ที่คนมักสัมผัสได้คือ ${topTrait.label}</p>
    <p>พลัง 10 แบบที่เด่นในดวงตอนนี้คือ ${topGods || "ยังไม่มีตัวไหนนำชัดมาก"} ถ้าใช้ดี มันจะกลายเป็นภาษาที่ช่วยให้คุณสร้างงาน เลือกคน และวางจังหวะชีวิตได้ตรงตัวขึ้น</p>
  `);
  orderedSetHtml("readingActions", `
    <article class="action-card"><span>สิ่งที่ใจต้องการ</span><strong>${psych.coreNeed}</strong><p>เวลาต้องตัดสินใจ ลองถามก่อนว่าเรื่องนี้ช่วยให้ใจได้สิ่งนี้จริงไหม</p></article>
    <article class="action-card"><span>มุมที่ควรระวัง</span><strong>อย่าให้จุดแข็งกลายเป็นโหมดป้องกันตัว</strong><p>${psych.stressPattern}</p></article>
    <article class="action-card"><span>ทางกลับสู่สมดุล</span><strong>${getGuardianElementLabel()}</strong><p>${psych.repairPath}</p></article>
    <article class="action-card"><span>ก้าวเล็กที่ทำได้</span><strong>${topTrait.label}</strong><p>เปลี่ยนจุดเด่นนี้ให้กลายเป็นงาน คำพูด หรือขอบเขตที่คนรอบตัวมองเห็นได้จริง</p></article>
  `);
}

function renderTraitList() {
  orderedSetHtml("traitList", orderedTraitEntries(5)
    .map(([key, value], index) => `
      <article class="trait-item ${index === 0 ? "trait-featured" : ""}">
        <div class="trait-copy">
          <span>${index === 0 ? "มิติที่เด่นสุด" : describeTraitTone(value)}</span>
          <strong>${personalityLabel(key)}</strong>
          <p>${personalityMeaning(key)}</p>
          <small>${traitActionTip(key, value)}</small>
        </div>
        <div class="trait-meter">
          <div class="bar-track"><span class="bar-fill" style="width:${clampScore(value)}%; background:var(--accent)"></span></div>
          <b>${describeScoreBand(value)}</b>
        </div>
      </article>
    `)
    .join(""));
}
function renderStrategy() {
  const container = document.getElementById("strategyGrid");
  if (!container) return;
  const dominant = getDominantElement();
  const weakest = getWeakestElement();
  const topTrait = getTopPersonalityTrait();
  const traitPairs = orderedTraitEntries(4);
  const topGods = orderedTopTenGods(3);
  const item = orderedCurrentLuck();
  const masterVoice = getPremiumMasterVoice();
  const cards = [
    {
      className: "self-card",
      label: "ตัวตน",
      title: masterVoice.name,
      copy: `${masterVoice.tagline} จุดนี้คือแกนที่ใช้กลับมาถามตัวเองว่า “เรื่องนี้ยังเป็นฉันอยู่ไหม” ก่อนตอบตกลงกับงาน คน หรือเส้นทางใหม่`,
      score: clampScore((traitPairs[0]?.[1] || 60) * 0.8 + state.strength * 0.2),
      band: "แกนหลัก",
      art: "tree",
    },
    {
      className: "behavior-card",
      label: "นิสัยที่เด่น",
      title: traitPairs.slice(0, 2).map(([key]) => personalityLabel(key)).join(" + "),
      copy: `เวลาชีวิตเริ่มตึง คุณมักใช้ ${traitPairs[0] ? personalityLabel(traitPairs[0][0]) : "จุดแข็งหลัก"} นำหน้า ลองใช้มันเป็นเครื่องมือ ไม่ใช่เกราะป้องกันตัว`,
      score: clampScore(traitPairs[0]?.[1] || 60),
      band: describeScoreBand(traitPairs[0]?.[1] || 60),
      art: "mind",
    },
    {
      className: "luck-card-mini",
      label: "ช่องทางโชค",
      title: topGods[0] ? tenGodThai(topGods[0][0]) : getGuardianElementLabel(),
      copy: topGods[0] ? `โชคมักเปิดผ่าน ${tenGodDomain(topGods[0][0])} ยิ่งคุณทำสิ่งนี้ให้จับต้องได้ โอกาสจะเข้ามาแบบคุยต่อได้จริง` : "โชคของดวงนี้เปิดเมื่อคุณเลือกสภาพแวดล้อมที่พาใจกลับมานิ่ง",
      score: clampScore(topGods[0]?.[1] || 60),
      band: "ช่องเปิด",
      art: "river",
    },
    {
      className: "repeat-card",
      label: "สิ่งที่มักพบ",
      title: item?.chapter?.title || "โจทย์เดิมในรูปแบบใหม่",
      copy: item?.branchRelations?.length ? `ชีวิตมักพาแรงขยับเข้ามาผ่าน ${relationText(item.branchRelations)} ให้ใช้เป็นสัญญาณจัดตำแหน่งชีวิตใหม่` : "เหตุการณ์ที่วนมามักไม่ใช่เรื่องแรงมาก แต่เป็นเรื่องเล็ก ๆ ที่ขอให้คุณเลือกให้ชัดขึ้นกว่าเดิม",
      score: clampScore(item?.favorability?.supportScore || 50),
      band: item?.favorability?.label || "จังหวะกลาง",
      art: "cycle",
    },
    {
      className: "edge-card",
      label: "มุมที่ต้องระวัง",
      title: `เมื่อ ${premiumElementLabel(dominant.key)} นำมากไป`,
      copy: `คุณอาจใช้พลังหลักจนลืมจัดพื้นที่ให้ ${premiumElementLabel(weakest.key)} ได้ทำงานกับใจและร่างกาย ลองลดความเร็วลงก่อนตัดสินใจเรื่องที่กระทบหลายคน`,
      score: clampScore(100 - Math.abs((dominant.value || 0) - (weakest.value || 0))),
      band: "ต้องบาลานซ์",
      art: "edge",
    },
    {
      className: "practice-card",
      label: "วิธีใช้จริง",
      title: getGuardianElementLabel(),
      copy: `ใช้เป็นกติกาเล็ก ๆ ก่อนตัดสินใจ เช่น เรื่องนี้ทำให้ใจนิ่งขึ้นไหม ทำให้ขอบเขตชัดขึ้นไหม และยังเหลือแรงให้ชีวิตส่วนตัวหรือเปล่า`,
      score: clampScore(state.strength || 55),
      band: getStrengthLevel(),
      art: "compass",
    },
  ];
  container.innerHTML = cards.slice(0, 4).map((card) => `
    <article class="premium-life-card ${card.className}" data-art="${card.art}">
      <div class="life-card-top"><span>${card.label}</span><b>${card.band}</b></div>
      <strong>${card.title}</strong>
      <p>${card.copy}</p>
      <div class="card-progress" aria-label="${card.band}"><span style="width:${card.score}%"></span></div>
    </article>
  `).join("");
}
function renderFrequentThemes() {
  orderedSetHtml("frequentThemes", "");
}
function renderQuestionReading() {
  const select = document.getElementById("focusQuestion");
  activeQuestionMode = select?.value || activeQuestionMode || "career";
  const mode = questionModeKnowledge[activeQuestionMode] || questionModeKnowledge.career;
  const item = orderedPresentLuck();
  const presentAnnual = getPresentAnnualLuck(item);
  const relevantInDecade = item ? mode.tenGods.includes(item.activatedTenGod) : false;
  const relevantThisYear = presentAnnual ? mode.tenGods.includes(presentAnnual.stemTenGod) : false;
  const annualHits = relevantThisYear && presentAnnual ? [presentAnnual] : [];
  const topProfileGod = Object.entries(state.tenGodProfile.scores)
    .filter(([tenGod]) => mode.tenGods.includes(tenGod))
    .sort((left, right) => right[1] - left[1])[0];
  const mainGod = topProfileGod?.[0] || item?.activatedTenGod;
  const psych = mainGod ? getTenGodPsychology(mainGod) : null;
  const depth = orderedQuestionDepth(activeQuestionMode, mode, mainGod, item, annualHits, topProfileGod);
  const matchText = relevantInDecade && relevantThisYear
    ? `ตอนนี้เรื่อง${depth.field}ถูกแตะทั้งจากวัยจรปัจจุบันและพลังของปีนี้ จึงเหมาะกับการอ่านเป็นคำตอบของช่วงนี้จริง ๆ ไม่ใช่ภาพรวมทั้งชีวิต`
    : relevantInDecade
      ? `วัยจรปัจจุบันแตะเรื่อง${depth.field}ค่อนข้างตรง เพราะ ${tenGodThai(item.activatedTenGod)} กำลังเด่นขึ้นมาในชีวิตจริง`
      : relevantThisYear
        ? `ปีนี้กำลังขยับเรื่อง${depth.field}ให้ชัดขึ้น แม้ว่าวัยจรหลักจะไม่ได้ชี้เรื่องนี้ตรง ๆ ก็ตาม`
        : `คำถามเรื่อง${depth.field}ในช่วงนี้ควรอ่านจากพื้นดวงและพลังรายวันประกอบก่อน ยังไม่จำเป็นต้องรีบตัดสินใจจากวัยจรอย่างเดียว`;
  const yearLine = presentAnnual
    ? `${presentAnnual.year} · ${presentAnnual.signal}`
    : "ปีปัจจุบันอยู่นอกช่วงวัยจรที่ระบบคำนวณไว้";
  const insightLead = psych?.coreDrive || depth.foundation;
  const focusKey = mainGod ? tenGodThai(mainGod) : getGuardianElementLabel();
  const guardianKey = getFavorableElements()[0] || getDailyElementKey();
  const practicalTip = buildModePracticalAdvice(activeQuestionMode, guardianKey, getDailyElementKey());
  orderedSetHtml("questionReading", `
    <article class="question-spotlight">
      <div class="question-spotlight-top">
        <span class="focus-badge">${mode.label}</span>
        <span class="focus-mini">อ่านจากจังหวะปัจจุบันเท่านั้น</span>
      </div>
      <strong>${mode.question}</strong>
      <p>${matchText}</p>
      <div class="focus-meta-row">
        <div><span>แกนที่ควรฟัง</span><b>${focusKey}</b></div>
        <div><span>ปีปัจจุบัน</span><b>${yearLine}</b></div>
      </div>
    </article>

    <div class="focus-story-grid">
      <article class="focus-story-card focus-primary">
        <span>คำตอบที่ควรรู้ก่อน</span>
        <strong>${focusKey}</strong>
        <p>${insightLead}</p>
      </article>
      <article class="focus-story-card">
        <span>จังหวะปัจจุบันกำลังบอกอะไร</span>
        <strong>${item ? item.chapter.title : "อ่านจากพื้นดวงเป็นหลัก"}</strong>
        <p>${depth.decade}</p>
      </article>
      <article class="focus-story-card">
        <span>ภาพที่อาจเจอจริง</span>
        <strong>${depth.field}</strong>
        <p>${depth.situation}</p>
      </article>
    </div>

    <article class="focus-action-panel">
      <div>
        <span>แผน 7 วัน</span>
        <strong>เริ่มจากก้าวเล็กที่เห็นผลได้</strong>
        <p>${depth.plan}</p>
      </div>
      <div class="soft-warning">
        <span>มุมที่ต้องใจเย็น</span>
        <p>${depth.caution}</p>
      </div>
      <div class="focus-practical">
        <span>ลองทำวันนี้</span>
        <p>${practicalTip}</p>
      </div>
    </article>
  `);
}
function renderTimeline() {
  const container = document.getElementById("luckTimeline");
  if (!container || !state.luck?.length) return;
  activeLuckIndex = Math.max(0, Math.min(activeLuckIndex, state.luck.length - 1));
  container.innerHTML = state.luck.map((item, index) => {
    const isActive = index === activeLuckIndex;
    return `
      <button class="timeline-item ${isActive ? "active" : ""}" type="button" data-luck-index="${index}" aria-pressed="${isActive}">
        <span class="timeline-age">${item.ageRangeLabel}</span>
        <strong>${item.chapter.title}</strong>
        <small>${item.chapter.reflectiveQuestion}</small>
        <em>แตะเพื่ออ่านช่วงนี้</em>
      </button>
    `;
  }).join("");
  container.querySelectorAll("[data-luck-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLuckIndex = Number(button.dataset.luckIndex) || 0;
      renderTimeline();
      renderLuckDetail();
      renderPlanning();
      renderFrequentThemes();
    });
  });
}

function renderLuckDetail() {
  const item = orderedCurrentLuck();
  if (!item) return;
  const wisdom = getLuckWisdomComponent(item);
  orderedSetText("activeLuckLabel", `ช่วงอายุ ${item.ageRangeLabel}`);
  orderedSetHtml("luckDetail", `
    <article class="luck-story">
      <span class="story-age">ช่วงอายุ ${item.ageRangeLabel}</span>
      <h3>${item.chapter.title}</h3>
      <p class="story-lead">${item.climate}</p>
      <p>${item.chapter.narrative}</p>
    </article>
    ${renderWisdomComponent(wisdom, "wisdom-component subtle-wisdom")}
    <div class="luck-simple-grid">
      <article class="luck-card"><span>โอกาสที่น่าใช้</span><strong>ทำให้จับต้องได้</strong><p>${item.opportunities}</p></article>
      <article class="luck-card"><span>จุดที่ต้องใจเย็น</span><strong>อย่ารีบตอบจากแรงกดดัน</strong><p>${item.risks}</p></article>
    </div>
    <article class="luck-steps">
      <span>ใช้ช่วงนี้ยังไง</span>
      <div class="luck-step-list">
        <div><b>ต้นช่วง</b><p>${item.stagePlan.early}</p></div>
        <div><b>กลางช่วง</b><p>${item.stagePlan.mid}</p></div>
        <div><b>ปลายช่วง</b><p>${item.stagePlan.late}</p></div>
      </div>
    </article>
    <article class="luck-reflection">
      <span>คำถามไว้ทบทวน</span>
      <strong>${item.chapter.reflectiveQuestion}</strong>
      <p>${item.chapter.closing}</p>
    </article>
  `);
}

function renderPlanning() {
  // The 10-year plan now lives inside renderLuckDetail so the section reads as one story.
}
// ORDERED_INTERFACE_END
syncBirthTimeInput();
state = analyzeFromInputs();
activeLuckIndex = getPresentLuckIndex();
render();























