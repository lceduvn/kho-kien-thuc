import type { KnowledgeChunk } from '../types';

export const CHUNK_VL11_C1_DAO_DONG_TAT_DAN: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b5_tat_dan',
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
    number: 5,
    title: 'Dao động tắt dần và Dao động duy trì',
    section: 'Khái niệm, Nguyên nhân, Ứng dụng, Cơ chế duy trì dao động',
  },
  keywords: [
    'dao động tắt dần',
    'tắt dần',
    'ma sát',
    'lực cản',
    'giảm dần theo thời gian',
    'biên độ giảm dần',
    'cơ năng giảm dần',
    'nhiệt năng',
    'giảm xóc',
    'giảm chấn',
    'dao động duy trì',
    'tần số riêng',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Dao động tắt dần là dao động có biên độ và cơ năng giảm dần theo thời gian.
- Nguyên nhân: Do ma sát và lực cản của môi trường tác dụng lên vật làm tiêu hao cơ năng, chuyển hóa dần thành nhiệt năng.
- Lực cản của môi trường càng lớn thì dao động tắt dần càng nhanh (trong dầu tắt nhanh hơn trong nước, trong nước tắt nhanh hơn trong không khí).
- Ứng dụng: Thiết bị giảm xóc của ô tô, xe máy, bộ phận đóng cửa tự động.
- Tác hại: Làm tắt các dao động mong muốn (như đồng hồ quả lắc).
- Dao động duy trì: Dao động được duy trì bằng cách cung cấp năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kì mà KHÔNG làm thay đổi chu kì riêng của hệ. Dao động duy trì có chu kì bằng chu kì dao động riêng $T = T_0$.`,
  concepts: [
    {
      id: 'dinh_nghia_tat_dan',
      term: 'Dao động tắt dần',
      definition: 'Dao động có biên độ và cơ năng giảm dần theo thời gian do ma sát và lực cản môi trường.',
      properties: ['Biên độ và cơ năng giảm dần', 'Chuyển hóa cơ năng thành nhiệt năng'],
    },
    {
      id: 'dao_dong_duy_tri',
      term: 'Dao động duy trì',
      definition: 'Cung cấp năng lượng bù đắp sau mỗi chu kì, tần số dao động giữ nguyên bằng tần số riêng của hệ.',
    },
  ],
  rules: {
    units: ['Biên độ: m, cm', 'Cơ năng: J', 'Tần số: Hz'],
    conventions: ['Dao động duy trì có chu kì riêng T0', 'Lực cản càng lớn tắt càng nhanh'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Dao động tắt dần\n- Biên độ và cơ năng giảm dần theo thời gian.\n- Nguyên nhân: Do ma sát và lực cản môi trường.`,
    keyTakeaways: ['Biên độ và cơ năng giảm dần.', 'Dao động duy trì dao động với tần số riêng f0.'],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 5: Dao động tắt dần, dao động cưỡng bức',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_tat_dan_cuong_buc.ts',
  },
};

export const CHUNK_VL11_C1_CUONG_BUC_CONG_HUONG: KnowledgeChunk = {
  chunkId: 'vat_li_11_c1_b5_cuong_buc_cong_huong',
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
    number: 5,
    title: 'Dao động cưỡng bức và Hiện tượng cộng hưởng',
    section: 'Khái niệm, Đặc điểm, Hiện tượng cộng hưởng, Đồ thị cộng hưởng',
  },
  keywords: [
    'dao động cưỡng bức',
    'ngoại lực cưỡng bức',
    'hiện tượng cộng hưởng',
    'cộng hưởng cơ',
    'tần số riêng',
    'f = f0',
    'omega = omega0',
    'biên độ cực đại',
    'sập cầu',
  ],
  summary: `Theo SGK Vật lí 11 (GDPT 2018):
- Dao động cưỡng bức là dao động của hệ dưới tác dụng của một ngoại lực biến thiên tuần hoàn: $F = F_0 \\cos(\\omega t + \\varphi)$.
- Đặc điểm của dao động cưỡng bức khi ổn định:
  + Tần số của dao động cưỡng bức BẰNG tần số của ngoại lực: $f_{cb} = f_{ngoailuc}$ (KHÔNG bằng tần số riêng $f_0$).
  + Biên độ của dao động cưỡng bức phụ thuộc vào: biên độ ngoại lực $F_0$, lực cản của môi trường, và độ chênh lệch giữa tần số ngoại lực và tần số riêng $|f - f_0|$.
  + Độ chênh lệch $|f - f_0|$ càng nhỏ thì biên độ dao động cưỡng bức càng lớn.
- Hiện tượng cộng hưởng:
  + Hiện tượng biên độ của dao động cưỡng bức đạt giá trị cực đại khi tần số của ngoại lực bằng tần số dao động riêng của hệ: $f = f_0$ (hoặc $\\omega = \\omega_0$).
  + Điều kiện cộng hưởng: $f = f_0$.
  + Khi lực cản môi trường nhỏ: đỉnh cộng hưởng nhọn (biên độ cực đại rất lớn). Khi lực cản lớn: đỉnh cộng hưởng tù (biên độ cực đại nhỏ).
- Ứng dụng: Hộp đàn guitar, violin để cộng hưởng âm. Tác hại: Rung lắc gây nứt gãy công trình, cầu treo khi đoàn người bước đều cùng tần số.`,
  concepts: [
    {
      id: 'dinh_nghia_cuong_buc',
      term: 'Dao động cưỡng bức',
      definition: 'Chịu tác dụng của ngoại lực tuần hoàn. Dao động với tần số bằng tần số của ngoại lực.',
    },
    {
      id: 'hien_tuong_cong_huong',
      term: 'Hiện tượng cộng hưởng',
      definition: 'Biên độ dao động đạt giá trị cực đại khi tần số ngoại lực bằng tần số dao động riêng của hệ (f = f0).',
    },
  ],
  formulas: [
    {
      id: 'f_dieu_kien_cong_huong',
      name: 'Điều kiện cộng hưởng cơ',
      latex: 'f = f_0 \\iff \\omega = \\omega_0 \\implies A = A_{\\max}',
      description: 'Điều kiện xảy ra hiện tượng cộng hưởng cơ',
      variables: [
        { symbol: 'f', unit: 'Hz', meaning: 'Tần số ngoại lực' },
        { symbol: 'f_0', unit: 'Hz', meaning: 'Tần số dao động riêng' },
      ],
    },
  ],
  rules: {
    units: ['Tần số: Hz', 'Biên độ: m, cm'],
    conventions: ['Dao động cưỡng bức dao động theo tần số ngoại lực', 'Cộng hưởng xảy ra khi f = f0'],
  },
  learnLessonPreview: {
    overviewMarkdown: `### 1. Dao động cưỡng bức\n- Dao động với tần số của ngoại lực cưỡng bức.\n\n### 2. Hiện tượng cộng hưởng\n- Xảy ra khi $f = f_0$.\n- Biên độ đạt cực đại $A_{\\max}$.`,
    keyTakeaways: ['Tần số cưỡng bức bằng tần số ngoại lực.', 'Cộng hưởng: f = f0 -> Biên độ cực đại.'],
  },
  sourceRef: {
    origin: 'SGK Vật lí 11 (GDPT 2018) - Bài 5: Dao động tắt dần, dao động cưỡng bức',
    filePath: 'knowledge/physics/grade11/chapter1_dao_dong/c1_tat_dan_cuong_buc.ts',
  },
};
