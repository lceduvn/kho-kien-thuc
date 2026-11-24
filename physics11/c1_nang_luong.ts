import type { KnowledgeChunk } from '../types';

export const CHUNK_VL11_C1_NANG_LUONG: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b3_nang_luong',
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
    number: 3,
    title: 'Năng lượng trong dao động điều hòa',
    section: 'Động năng, Thế năng, Cơ năng, Định luật bảo toàn cơ năng',
  },
  keywords: [
    'động năng',
    'thế năng',
    'cơ năng',
    'năng lượng dao động',
    'bảo toàn cơ năng',
    'Wd = 1/2 m v^2',
    'Wt = 1/2 k x^2',
    'W = 1/2 m omega^2 A^2',
    'chu kì biến thiên năng lượng',
    'tần số biến thiên năng lượng',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Động năng của vật dao động điều hòa: $W_d = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi)$.
  + Động năng cực đại tại VTCB ($x = 0$): $W_{d\\max} = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}mv_{\\max}^2$.
  + Động năng bằng 0 tại hai biên ($x = \\pm A$).
- Thế năng của con lắc lò xo / dao động điều hòa: $W_t = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}m\\omega^2 A^2 \\cos^2(\\omega t + \\varphi)$.
  + Thế năng cực đại tại hai biên ($x = \\pm A$): $W_{t\\max} = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$.
  + Thế năng bằng 0 tại VTCB ($x = 0$).
- Cơ năng (Năng lượng toàn phần):
  $W = W_d + W_t = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}kA^2 = \\text{hằng số không đổi}$.
  + Cơ năng tỉ lệ thuận với bình phương biên độ dao động ($W \\sim A^2$).
- Quy luật biến thiên tuần hoàn của năng lượng:
  + Động năng và thế năng biến thiên tuần hoàn với tần số góc $\\omega' = 2\\omega$, tần số $f' = 2f$, và chu kì $T' = \\frac{T}{2}$.
  + Cơ năng là hằng số, KHÔNG biến thiên tuần hoàn.
  + Vị trí động năng bằng n lần thế năng ($W_d = n W_t$): $x = \\pm \\frac{A}{\\sqrt{n + 1}}$.
  + Vị trí động năng bằng thế năng ($W_d = W_t \\iff n = 1$): $x = \\pm \\frac{A}{\\sqrt{2}} = \\pm \\frac{A\\sqrt{2}}{2}$.
  + Thời gian liên tiếp giữa 2 lần động năng bằng thế năng là $\\frac{T}{4}$.`,
  concepts: [
    {
      id: 'co_nang_bao_toan',
      term: 'Bảo toàn cơ năng trong dao động điều hòa',
      definition: 'Trong quá trình dao động không có ma sát, có sự chuyển hóa liên tục giữa động năng và thế năng nhưng tổng cơ năng được bảo toàn.',
      properties: ['Cơ năng luôn dương W > 0 và không đổi theo thời gian', 'Cơ năng tỉ lệ với bình phương biên độ A^2'],
      commonMisconceptions: ['Cho rằng cơ năng biến thiên tuần hoàn theo thời gian (thực tế cơ năng là hằng số).'],
    },
  ],
  formulas: [
    {
      id: 'f_co_nang',
      name: 'Cơ năng của vật dao động',
      latex: 'W = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}kA^2',
      description: 'Cơ năng toàn phần tỉ lệ với bình phương biên độ',
      variables: [
        { symbol: 'W', unit: 'J', meaning: 'Cơ năng' },
        { symbol: 'm', unit: 'kg', meaning: 'Khối lượng' },
        { symbol: 'A', unit: 'm', meaning: 'Biên độ (bắt buộc đổi ra mét)' },
      ],
    },
  ],
  rules: {
    units: ['Năng lượng: Jun (J)', 'Biên độ: m', 'Khối lượng: kg'],
    conventions: ['Động năng và thế năng biến thiên tuần hoàn với T\' = T/2, f\' = 2f', 'Cơ năng bảo toàn'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Cơ năng bảo toàn\n$$W = W_d + W_t = \\frac{1}{2}m\\omega^2 A^2 = \\text{hằng số}$$\n- $W \\sim A^2$.\n\n### 2. Chu kì biến thiên năng lượng\n- Động năng và thế năng biến thiên với $T' = T/2$, $f' = 2f$.`,
    keyTakeaways: [
      'Cơ năng tỉ lệ với A^2 và không đổi theo thời gian.',
      'Động năng và thế năng biến thiên với chu kì bằng 1 nửa chu kì dao động.',
    ],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 3: Năng lượng trong dao động điều hòa',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_nang_luong.ts',
  },
};
