import type { KnowledgeChunk } from '../types';

export const CHUNK_VL11_C1_MO_TA_DAO_DONG: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b1_mo_ta_dao_dong',
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
    number: 1,
    title: 'Mô tả dao động điều hòa',
    section: 'Phương trình li độ, các đại lượng đặc trưng',
  },
  keywords: [
    'dao động điều hòa',
    'li độ',
    'biên độ',
    'pha dao động',
    'pha ban đầu',
    'chu kì',
    'tần số',
    'tần số góc',
    'x = A cos',
    'dao động cơ',
    'vị trí cân bằng',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Dao động cơ là chuyển động qua lại quanh một vị trí cân bằng xác định.
- Dao động tuần hoàn là dao động mà sau những khoảng thời gian bằng nhau vật trở lại vị trí cũ theo hướng cũ.
- Dao động điều hòa là dao động trong đó li độ của vật là một hàm cosin (hoặc sin) theo thời gian: $x = A \\cos(\\omega t + \\varphi)$.
- Các đại lượng: Biên độ $A > 0$ (độ dịch chuyển cực đại), Tần số góc $\\omega > 0$ (tốc độ biến thiên của pha, rad/s), Pha dao động $(\\omega t + \\varphi)$ (xác định trạng thái dao động ở thời điểm t, rad), Pha ban đầu $\\varphi$ (trạng thái ở t = 0, rad, $-\\pi \\le \\varphi \\le \\pi$).
- Mối liên hệ: $T = \\frac{2\\pi}{\\omega} = \\frac{1}{f}$, $\\omega = 2\\pi f = \\frac{2\\pi}{T}$. Quãng đường vật đi được trong 1 chu kì luôn là $S = 4A$.`,
  concepts: [
    {
      id: 'li_do',
      term: 'Li độ (x)',
      definition: 'Độ lệch của vật khỏi vị trí cân bằng tại thời điểm t. Có thể dương, âm hoặc bằng 0.',
      properties: ['Đơn vị: m hoặc cm', 'Giới hạn: -A <= x <= A'],
      commonMisconceptions: ['Nhầm lẫn giữa li độ (đại số, có dấu) và quãng đường hoặc khoảng cách (luôn không âm).'],
    },
    {
      id: 'bien_do',
      term: 'Biên độ (A)',
      definition: 'Độ lớn cực đại của li độ, luôn luôn là số dương (A > 0). Đặc trưng cho độ mạnh yếu của dao động.',
      properties: ['A > 0', 'Quỹ đạo chuyển động có chiều dài L = 2A'],
      commonMisconceptions: ['Cho rằng biên độ có thể âm khi vật ở vị trí biên âm.'],
    },
    {
      id: 'pha_dao_dong',
      term: 'Pha dao động và Pha ban đầu',
      definition: 'Pha dao động (omega*t + phi) xác định trạng thái dao động (vị trí và chiều chuyển động) ở thời điểm t. Pha ban đầu phi xác định trạng thái ở t = 0.',
      properties: ['Đơn vị: Radian (rad)'],
      commonMisconceptions: ['Nhầm lẫn giữa pha ban đầu (hằng số) và pha dao động (biến thiên điều hòa tuyến tính theo thời gian).'],
    },
  ],
  formulas: [
    {
      id: 'f_pt_li_do',
      name: 'Phương trình li độ dao động điều hòa',
      latex: 'x = A \\cos(\\omega t + \\varphi)',
      description: 'Phương trình mô tả tọa độ vị trí của vật theo thời gian',
      variables: [
        { symbol: 'x', unit: 'm hoặc cm', meaning: 'Li độ của vật' },
        { symbol: 'A', unit: 'm hoặc cm', meaning: 'Biên độ dao động (A > 0)' },
        { symbol: '\\omega', unit: 'rad/s', meaning: 'Tần số góc (\\omega > 0)' },
        { symbol: '\\varphi', unit: 'rad', meaning: 'Pha ban đầu' },
      ],
    },
    {
      id: 'f_chu_ki_tan_so',
      name: 'Mối liên hệ chu kì, tần số, tần số góc',
      latex: 'T = \\frac{2\\pi}{\\omega} = \\frac{1}{f} \\iff \\omega = 2\\pi f = \\frac{2\\pi}{T}',
      description: 'Công thức chuyển đổi giữa các đại lượng đo thời gian dao động',
      variables: [
        { symbol: 'T', unit: 's', meaning: 'Chu kì (thời gian thực hiện 1 dao động toàn phần)' },
        { symbol: 'f', unit: 'Hz', meaning: 'Tần số (số dao động toàn phần trong 1 giây)' },
        { symbol: '\\omega', unit: 'rad/s', meaning: 'Tần số góc' },
      ],
    },
  ],
  rules: {
    units: ['Li độ: m hoặc cm', 'Biên độ: m hoặc cm', 'Pha: rad', 'Chu kì: s', 'Tần số: Hz'],
    conventions: ['Biên độ A luôn dương (A > 0)', 'Tần số góc omega luôn dương (omega > 0)', 'Chiều dài quỹ đạo L = 2A'],
    outOfScope: ['Phương trình dao động dạng vi phân bậc 2'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Dao động điều hòa là gì?\n- Là dao động trong đó li độ của vật là một hàm cosin theo thời gian: $x = A\\cos(\\omega t + \\varphi)$.\n\n### 2. Các đại lượng đặc trưng\n- **Biên độ ($A$)**: Luôn dương, $L = 2A$.\n- **Chu kì ($T$) & Tần số ($f$)**: $T = \\frac{2\\pi}{\\omega} = \\frac{1}{f}$.\n- **Pha dao động**: Cho biết trạng thái dao động tại thời điểm $t$.`,
    keyTakeaways: [
      'Phương trình chuẩn: x = A*cos(omega*t + phi).',
      'Biên độ A > 0, tần số góc omega > 0.',
      'Quãng đường trong 1 chu kì luôn bằng 4A.',
    ],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 1: Mô tả dao động',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_mo_ta_dao_dong.ts',
  },
};
