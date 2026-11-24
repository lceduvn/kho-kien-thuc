/**
 * Định nghĩa cấu trúc Hạt kiến thức Chuẩn hóa & Mở rộng của LC Edu
 * Hỗ trợ linh hoạt:
 * - Theo Sách Giáo Khoa (GDPT 2018): Các lớp 1-12, đại học, chứng chỉ...
 * - Mở rộng ngoài SGK: Chuyên đề chuyên sâu, bồi dưỡng HSG, ứng dụng thực tế, kiến thức liên môn, kỹ thuật số.
 * - Thiết kế hạt nhỏ (Atomic Granular Chunks) để AI chỉ nạp đúng phần cần dùng, tối ưu token tuyệt đối.
 * - Sẵn sàng xuất khẩu thành bài giảng trên /learn.
 */

export interface KnowledgeFormula {
  id: string;
  name: string;
  latex: string; // Biểu thức KaTeX chuẩn
  description: string;
  variables: { symbol: string; unit: string; meaning: string }[];
  conditions?: string; // Điều kiện áp dụng
}

export interface KnowledgeConcept {
  id: string;
  term: string; // Tên khái niệm / thuật ngữ
  definition: string; // Định nghĩa chi tiết
  properties?: string[]; // Đặc điểm, tính chất
  commonMisconceptions?: string[]; // Hiểu lầm hay gặp cần tránh
}

export type KnowledgeScope = 
  | 'sgk_co_ban'      // Bám sát SGK chuẩn GDPT
  | 'nang_cao_hsg'    // Nâng cao, bồi dưỡng học sinh giỏi, Olympic
  | 'ngoai_sgk_thuc_te' // Kiến thức thực tiễn ngoài sách, ứng dụng đời sống/kỹ thuật
  | 'lien_mon'        // Tích hợp liên môn STEM, Khoa học tự nhiên
  | 'dai_hoc_chuyen_nganh'; // Kiến thức đại học / chuyên sâu

export interface KnowledgeChunk {
  chunkId: string; // Mã định danh duy nhất: e.g. "vat_li_11_c1_b1_pt_dao_dong", "toan_12_c1_khao_sat"
  subject: string; // 'vat_li' | 'toan' | 'hoa_hoc' | 'sinh_hoc' | 'tin_hoc' | 'tieng_anh' | ...
  subjectTitle: string; // Tiếng Việt hiển thị: 'Vật lí', 'Toán học', 'Hóa học'...
  
  // Phạm vi kiến thức & Lớp (linh hoạt, có thể không theo lớp nếu là chuyên đề ngoài sách)
  scope: KnowledgeScope;
  scopeTitle?: string; // e.g. "Chương trình chuẩn GDPT 2018", "Chuyên đề nâng cao", "Thực tế ngoài SGK"
  grade?: number; // 10, 11, 12, hoặc để trống nếu là kiến thức liên lớp/ngoài trường phổ thông
  
  // Phân cấp kiến thức
  domain?: string; // Miền kiến thức: e.g. "Cơ học", "Nhiệt học", "Giải tích", "Hóa hữu cơ"
  chapter?: {
    number?: number;
    title: string; // e.g. "Dao động", "Ứng dụng đạo hàm"
  };
  lesson?: {
    number?: number;
    title: string; // e.g. "Mô tả dao động điều hòa"
    section?: string; // Tiểu mục cụ thể
  };

  keywords: string[]; // Từ khóa tìm kiếm nhanh (tiếng Việt có dấu, không dấu, ký hiệu)
  summary: string; // Tóm lược nội dung cốt lõi (150-300 từ)
  concepts: KnowledgeConcept[];
  formulas?: KnowledgeFormula[];

  // Quy chuẩn và ranh giới kiến thức
  rules?: {
    units?: string[]; // Đơn vị chuẩn (SI)
    conventions?: string[]; // Quy ước chuẩn
    outOfScope?: string[]; // Kiến thức giảm tải hoặc không được phép dùng trong phạm vi này
  };

  // Nền tảng đưa lên /learn làm bài học
  learnLessonPreview?: {
    overviewMarkdown: string;
    keyTakeaways: string[];
    suggestedExercises?: string[];
  };

  // Nơi lưu trữ hoặc file tham chiếu để dễ tra cứu
  sourceRef?: {
    origin: string; // e.g. "SGK Vật lí 11 - Kết nối tri thức trang 8", "Tài liệu chuyên đề Vật lí đại cương"
    filePath?: string; // Đường dẫn tương đối trong kho tri thức
  };
}

// Backward compatibility alias
export type TextbookGranularChunk = KnowledgeChunk;
