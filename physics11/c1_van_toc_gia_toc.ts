import type { KnowledgeChunk } from '../types';

export const CHUNK_VL11_C1_VAN_TOC_GIA_TOC: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b2_van_toc_gia_toc',
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
    number: 2,
    title: 'Phương trình và đồ thị vận tốc, gia tốc',
    section: 'Vận tốc, gia tốc, độ lệch pha, hệ thức độc lập thời gian',
  },
  keywords: [
    'vận tốc trong dao động',
    'gia tốc trong dao động',
    'vmax',
    'amax',
    'vận tốc cực đại',
    'gia tốc cực đại',
    'lệch pha',
    'sớm pha',
    'trễ pha',
    'ngược pha',
    'vuông pha',
    'hệ thức độc lập',
    'a = -omega^2 x',
    'đồ thị li độ',
    'đồ thị vận tốc',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Vận tốc là đạo hàm bậc nhất của li độ theo thời gian:
  $v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos(\\omega t + \\varphi + \\frac{\\pi}{2})$.
  + Vận tốc biến thiên điều hòa cùng tần số góc $\\omega$, sớm pha $\\frac{\\pi}{2}$ so với li độ.
  + Tốc độ cực đại $v_{\\max} = \\omega A$ khi vật qua vị trí cân bằng ($x = 0$). Vận tốc bằng 0 ở hai biên ($x = \\pm A$).
- Gia tốc là đạo hàm bậc nhất của vận tốc, đạo hàm bậc hai của li độ:
  $a = v' = x'' = -\\omega^2 A \\cos(\\omega t + \\varphi) = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)$.
  + Gia tốc sớm pha $\\frac{\\pi}{2}$ so với vận tốc và ngược pha với li độ ($a = -\\omega^2 x$).
  + Véc tơ gia tốc luôn hướng về vị trí cân bằng và có độ lớn tỉ lệ thuận với độ lớn li độ.
  + Độ lớn gia tốc cực đại $a_{\\max} = \\omega^2 A$ ở hai biên; bằng 0 ở vị trí cân bằng.
- Hệ thức độc lập thời gian:
  $x^2 + \\frac{v^2}{\\omega^2} = A^2 \\iff \\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{v_{\\max}}\\right)^2 = 1$.
  $\\frac{v^2}{\\omega^2} + \\frac{a^2}{\\omega^4} = A^2 \\iff \\left(\\frac{v}{v_{\\max}}\\right)^2 + \\left(\\frac{a}{a_{\\max}}\\right)^2 = 1$.`,
  concepts: [
    {
      id: 'van_toc_dieu_hoa',
      term: 'Vận tốc trong dao động điều hòa',
      definition: 'Đại lượng đặc trưng cho tốc độ và chiều chuyển động của vật dao động. Sớm pha pi/2 so với li độ.',
      properties: ['v_max = omega*A tại VTCB', 'v = 0 tại 2 biên'],
      commonMisconceptions: ['Nhầm lẫn giữa vận tốc (đại số có dấu) và tốc độ (độ lớn vận tốc, luôn >= 0).'],
    },
    {
      id: 'gia_toc_dieu_hoa',
      term: 'Gia tốc trong dao động điều hòa',
      definition: 'Luôn tỉ lệ và ngược pha với li độ: a = -omega^2 * x. Véc tơ gia tốc luôn hướng về vị trí cân bằng.',
      properties: ['a_max = omega^2*A tại 2 biên', 'a = 0 tại VTCB'],
      commonMisconceptions: ['Nghĩ rằng qua VTCB gia tốc cực đại (thực tế gia tốc bằng 0 tại VTCB, vận tốc mới cực đại).'],
    },
  ],
  formulas: [
    {
      id: 'f_van_toc',
      name: 'Phương trình vận tốc',
      latex: 'v = \\omega A \\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)',
      description: 'Phương trình vận tốc sớm pha pi/2 so với li độ',
      variables: [
        { symbol: 'v', unit: 'm/s hoặc cm/s', meaning: 'Vận tốc tức thời' },
        { symbol: 'v_{\\max}', unit: 'm/s hoặc cm/s', meaning: 'Tốc độ cực đại (\\omega A)' },
      ],
    },
    {
      id: 'f_he_thuc_doc_lap',
      name: 'Hệ thức độc lập thời gian giữa x và v',
      latex: 'x^2 + \\frac{v^2}{\\omega^2} = A^2',
      description: 'Hệ thức liên hệ giữa li độ, vận tốc và biên độ tại cùng một thời điểm',
      variables: [
        { symbol: 'x', unit: 'cm (hoặc m)', meaning: 'Li độ' },
        { symbol: 'v', unit: 'cm/s (hoặc m/s)', meaning: 'Vận tốc' },
        { symbol: 'A', unit: 'cm (hoặc m)', meaning: 'Biên độ' },
      ],
    },
  ],
  rules: {
    units: ['Vận tốc: m/s hoặc cm/s', 'Gia tốc: m/s^2 hoặc cm/s^2'],
    conventions: ['x và v cùng hệ đơn vị độ dài (cùng cm hoặc cùng m) khi thế vào hệ thức độc lập', 'a = -omega^2 * x'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Mối quan hệ pha\n- Vận tốc **sớm pha $\\pi/2$** so với li độ.\n- Gia tốc **ngược pha** với li độ ($a = -\\omega^2 x$).\n\n### 2. Giá trị cực đại\n- $v_{\\max} = \\omega A$ tại VTCB.\n- $a_{\\max} = \\omega^2 A$ tại hai biên.`,
    keyTakeaways: [
      'Gia tốc luôn hướng về vị trí cân bằng.',
      'Tại VTCB: v cực đại, a = 0.',
      'Tại 2 biên: v = 0, độ lớn a cực đại.',
    ],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 2: Vận tốc, gia tốc',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_van_toc_gia_toc.ts',
  },
};
