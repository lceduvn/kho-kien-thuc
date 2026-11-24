# Kho Hạt Kiến Thức Chuẩn Hóa & Mở Rộng — LC Edu

Chào mừng bạn đến với **Kho Hạt Kiến Thức (Atomic Granular Knowledge Base)** của hệ thống LC Edu.

## 🌟 Đặc điểm nổi bật
1. **Chia nhỏ thành từng hạt (Atomic Chunks)**: Mỗi hạt chỉ chứa đúng một đơn vị kiến thức (khái niệm, công thức KaTeX, hiểu lầm thường gặp, đơn vị SI, quy ước).
2. **Tiết kiệm Token & Quota tối đa (Zero-Token Matcher)**: Tích hợp `knowledgeEngine.ts` tìm kiếm offline bằng thuật toán Term Frequency, chỉ nạp đúng 1-2 hạt kiến thức liên quan (~200 - 350 tokens) vào prompt của AI khi chấm hoặc thẩm định đề thi.
3. **Linh hoạt & Không gò bó**: Phân định rõ phạm vi SGK chuẩn (`sgk_co_ban`), chuyên sâu Olympic (`nang_cao_hsg`), ứng dụng thực tế ngoài sách (`ngoai_sgk_thuc_te`) và tích hợp liên môn (`lien_mon`).
4. **Sẵn sàng cho `/learn`**: Mọi hạt kiến thức đều có trường `learnLessonPreview` để chuyển đổi tự động thành bài học tương tác trên cổng học tập LC Edu.

## 📖 Tra cứu & Mục lục
Vui lòng xem chi tiết mục lục toàn bộ các hạt kiến thức, mã định danh và từ khóa tại:
👉 **[INDEX.md](./INDEX.md)**

## 🌿 Danh sách các nhánh Git chuyên đề
- `main`: Mục lục tổng quan, schema types, knowledge engine và mã nguồn chung.
- `physics/grade11`: Môn Vật lí Khối 11 (GDPT 2018).
- `physics/advanced`: Vật lí nâng cao, chuyên sâu & Olympic.
- `math/grade12`: Toán học Khối 12.
- `chemistry/grade11`: Hóa học Khối 11.
- `biology/grade11`: Sinh học Khối 11.
- `informatics/all`: Tin học & Lập trình.
- `stem/cross-discipline`: Chuyên đề STEM liên môn & Ứng dụng thực tế ngoài SGK.

---
Bản quyền © 2026 [LC Edu](https://lceduvn.web.app) • GitHub: [@lceduvn](https://github.com/lceduvn)
