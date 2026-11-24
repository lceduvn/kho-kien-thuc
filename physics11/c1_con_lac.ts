import type { KnowledgeChunk } from '../types';

export const CHUNK_VL11_C1_CON_LAC_LO_XO: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b4_con_lac_lo_xo',
  subject: 'vat_li',
  subjectTitle: 'Vật lí',
  scope: 'sgk_co_ban',
  scopeTitle: 'Chương trình Chuẩn GDPT 2018',
  grade: 11,
  domain: 'Cơ học - Dao động',
  chapter: {
    number: 1,
    title: 'Dao động',
  },
  lesson: {
    number: 4,
    title: 'Con lắc lò xo',
    section: 'Cấu tạo, Tần số góc, Chu kì, Lực kéo về, Lực đàn hồi',
  },
  keywords: [
    'con lắc lò xo',
    'độ cứng k',
    'khối lượng m',
    'chu kì con lắc lò xo',
    'tần số con lắc lò xo',
    'lực kéo về',
    'lực đàn hồi',
    'độ biến dạng',
    'delta l0',
    'k/m',
    'm/k',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Con lắc lò xo gồm một vật nhỏ khối lượng m gắn vào đầu lò xo nhẹ có độ cứng k, đầu kia cố định.
- Khi bỏ qua ma sát, con lắc lò xo dao động điều hòa với:
  + Tần số góc: $\\omega = \\sqrt{\\frac{k}{m}}$.
  + Chu kì: $T = 2\\pi \\sqrt{\\frac{m}{k}}$.
  + Tần số: $f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}$.
  + Chu kì của con lắc lò xo chỉ phụ thuộc khối lượng m và độ cứng k, KHÔNG phụ thuộc biên độ A hay gia tốc g.
- Lực kéo về (hồi phục): $F = -kx = -m\\omega^2 x$. Luôn hướng về vị trí cân bằng, tỉ lệ với li độ.
- Lực đàn hồi: Lực lò xo tác dụng lên vật, hướng về vị trí lò xo không biến dạng.
  + Với con lắc lò xo nằm ngang: Vị trí cân bằng trùng vị trí không biến dạng, lực kéo về chính là lực đàn hồi.
  + Với con lắc lò xo treo thẳng đứng: Ở VTCB lò xo dãn $\\Delta l_0 = \\frac{mg}{k} \\implies \\omega = \\sqrt{\\frac{g}{\\Delta l_0}}$, $T = 2\\pi \\sqrt{\\frac{\\Delta l_0}{g}}$.`,
  concepts: [
    {
      id: 'chu_ki_cllx',
      term: 'Chu kì dao động riêng của con lắc lò xo',
      definition: 'Khoảng thời gian để con lắc thực hiện trọn vẹn một dao động toàn phần. T = 2*pi*sqrt(m/k).',
      properties: ['Tỉ lệ thuận với căn bậc 2 của m', 'Tỉ lệ nghịch với căn bậc 2 của k', 'Không phụ thuộc biên độ A'],
      commonMisconceptions: ['Hiểu lầm rằng kéo vật ra xa hơn làm chu kì dài hơn.'],
    },
    {
      id: 'luc_keo_ve_va_dan_hoi',
      term: 'Phân biệt lực kéo về và lực đàn hồi',
      definition: 'Lực kéo về hướng về vị trí cân bằng. Lực đàn hồi hướng về vị trí lò xo có chiều dài tự nhiên.',
    },
  ],
  formulas: [
    {
      id: 'f_cllx_chu_ki',
      name: 'Chu kì con lắc lò xo',
      latex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
      description: 'Chu kì dao động điều hòa của con lắc lò xo',
      variables: [
        { symbol: 'T', unit: 's', meaning: 'Chu kì' },
        { symbol: 'm', unit: 'kg', meaning: 'Khối lượng' },
        { symbol: 'k', unit: 'N/m', meaning: 'Độ cứng lò xo' },
      ],
    },
  ],
  rules: {
    units: ['Khối lượng m: kg', 'Độ cứng k: N/m', 'Chu kì: s'],
    conventions: ['Lò xo nhẹ, bỏ qua ma sát', 'Lực kéo về triệt tiêu tại VTCB'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Chu kì con lắc lò xo\n$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$\n- Không phụ thuộc biên độ dao động.`,
    keyTakeaways: ['T = 2*pi*sqrt(m/k).', 'Lực kéo về luôn hướng về vị trí cân bằng.'],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 4: Các hệ dao động thường gặp',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_con_lac.ts',
  },
};

export const CHUNK_VL11_C1_CON_LAC_DON: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b4_con_lac_don',
  subject: 'vat_li',
  subjectTitle: 'Vật lí',
  scope: 'sgk_co_ban',
  scopeTitle: 'Chương trình Chuẩn GDPT 2018',
  grade: 11,
  domain: 'Cơ học - Dao động',
  chapter: {
    number: 1,
    title: 'Dao động',
  },
  lesson: {
    number: 4,
    title: 'Con lắc đơn',
    section: 'Cấu tạo, Điều kiện dao động điều hòa, Chu kì, Tần số góc',
  },
  keywords: [
    'con lắc đơn',
    'chiều dài l',
    'dây treo',
    'li độ góc',
    'alpha',
    'chu kì con lắc đơn',
    'gia tốc rơi tự do g',
    'l/g',
    'g/l',
    'góc nhỏ',
    '10 độ',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Con lắc đơn gồm vật nhỏ khối lượng m treo vào đầu sợi dây mảnh, không dãn, chiều dài l, đầu kia giữ cố định.
- Điều kiện để con lắc đơn dao động điều hòa:
  + Bỏ qua ma sát và lực cản của môi trường.
  + Góc lệch cực đại (biên độ góc) nhỏ: $\\alpha_0 \\le 10^\\circ$ (khoảng $0{,}17$ rad) để có xấp xỉ $\\sin\\alpha \\approx \\alpha$ (rad).
- Khi đó, con lắc đơn dao động điều hòa với:
  + Tần số góc: $\\omega = \\sqrt{\\frac{g}{l}}$.
  + Chu kì: $T = 2\\pi \\sqrt{\\frac{l}{g}}$.
  + Tần số: $f = \\frac{1}{2\\pi} \\sqrt{\\frac{g}{l}}$.
- Chu kì con lắc đơn tỉ lệ với $\\sqrt{l}$, tỉ lệ nghịch với $\\sqrt{g}$, KHÔNG phụ thuộc vào khối lượng m và biên độ dao động (khi $\\alpha_0 \\le 10^\\circ$).`,
  concepts: [
    {
      id: 'dieu_kien_cl_don',
      term: 'Điều kiện dao động điều hòa của con lắc đơn',
      definition: 'Biên độ góc nhỏ (<= 10 độ) và bỏ qua ma sát.',
      commonMisconceptions: ['Áp dụng công thức chu kì con lắc đơn cho góc thả 60 hay 90 độ là sai.'],
    },
  ],
  formulas: [
    {
      id: 'f_cl_don_chu_ki',
      name: 'Chu kì con lắc đơn',
      latex: 'T = 2\\pi \\sqrt{\\frac{l}{g}}',
      description: 'Chu kì dao động điều hòa của con lắc đơn khi góc nhỏ',
      conditions: '\\alpha_0 \\le 10^\\circ',
      variables: [
        { symbol: 'T', unit: 's', meaning: 'Chu kì' },
        { symbol: 'l', unit: 'm', meaning: 'Chiều dài dây treo' },
        { symbol: 'g', unit: 'm/s^2', meaning: 'Gia tốc trọng trường' },
      ],
    },
  ],
  rules: {
    units: ['Chiều dài l: m', 'Khối lượng m: kg', 'Chu kì: s'],
    conventions: ['Chiều dài tăng 4 lần thì chu kì tăng 2 lần', 'Không phụ thuộc khối lượng m'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Chu kì con lắc đơn\n$$T = 2\\pi\\sqrt{\\frac{l}{g}}$$\n- Không phụ thuộc khối lượng quả nặng $m$.`,
    keyTakeaways: ['T = 2*pi*sqrt(l/g).', 'Điều kiện dao động điều hòa: góc nhỏ <= 10 độ.'],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 4: Các hệ dao động thường gặp',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_con_lac.ts',
  },
};
