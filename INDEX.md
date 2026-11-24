# MỤC LỤC & SƠ ĐỒ ĐIỀU HƯỚNG KHO HẠT KIẾN THỨC (KNOWLEDGE INDEX)

> **Kho hạt kiến thức chuẩn hóa & mở rộng LC Edu**  
> Bản quyền thuộc về **LC Edu** • Tổ chức GitHub: [`lceduvn/kho-kien-thuc`](https://github.com/lceduvn/kho-kien-thuc)

---

## 1. TRIẾT LÝ THIẾT KẾ: LINH HOẠT & KHÔNG GÒ BÓ
Hệ thống kiến thức được phân tách thành 2 trục linh hoạt:
1. **Trục Sách Giáo Khoa Chuẩn (GDPT 2018)**: Phân theo Môn học $\to$ Khối lớp ($10, 11, 12$) $\to$ Chương $\to$ Bài $\to$ Hạt kiến thức.
2. **Trục Mở Rộng Ngoài SGK & Ứng Dụng Thực Tế**: Không bị gò bó theo khối lớp, bao gồm các chuyên đề chuyên sâu, bồi dưỡng học sinh giỏi, kiến thức liên môn STEM, kỹ thuật số và kiến thức đời sống thực tiễn.

---

## 2. BẢN ĐỒ CÁC NHÁNH GIT (GIT BRANCHES MAP)
Để dễ dàng quản lý độc lập từng phân hệ mà không làm xung đột mã nguồn, kho được tổ chức thành các nhánh Git chuyên biệt:

| Tên nhánh Git | Phạm vi kiến thức | Mô tả chi tiết |
| :--- | :--- | :--- |
| `main` | **Toàn bộ kho & Mục lục tổng** | Nhánh gốc, chứa schema `types.ts`, `knowledgeEngine.ts`, mục lục tra cứu `INDEX.md` và mã nguồn chung. |
| `physics/grade11` | **Vật lí Lớp 11 (GDPT 2018)** | Chứa toàn bộ các chương Vật lí 11: Dao động, Sóng, Điện trường, Dòng điện... |
| `physics/advanced` | **Vật lí Nâng cao & HSG** | Các chuyên đề nâng cao, giải tích cơ học, phương pháp tọa độ, bài toán Olympic. |
| `math/grade12` | **Toán học Lớp 12 (GDPT 2018)** | Khảo sát hàm số, Hình học không gian tọa độ Oxyz, Nguyên hàm - Tích phân... |
| `chemistry/grade11` | **Hóa học Lớp 11 (GDPT 2018)** | Cân bằng hóa học, Nitrogen - Sulfur, Hóa học hữu cơ đại cương... |
| `biology/grade11` | **Sinh học Lớp 11 (GDPT 2018)** | Sinh học cơ thể, Trao đổi chất và chuyển hóa năng lượng... |
| `informatics/all` | **Tin học & Kỹ thuật số** | Thuật toán, Cấu trúc dữ liệu, Lập trình Python/TypeScript, AI, An toàn thông tin. |
| `stem/cross-discipline` | **Liên môn STEM & Thực tế** | Các chủ đề tích hợp liên môn, ứng dụng khoa học vào đời sống và kỹ thuật thực tiễn ngoài SGK. |

---

## 3. MỤC LỤC CHI TIẾT CÁC HẠT KIẾN THỨC HIỆN CÓ

### 📘 PHÂN HỆ: VẬT LÍ (PHYSICS)

#### 🔹 Khối 11 — Chương 1: Dao Động (GDPT 2018)
*Đường dẫn lưu trữ*: `physics11/` (hoặc nhánh `physics/grade11`)

| STT | Mã hạt (Chunk ID) | Tên bài & Tiểu mục | Nội dung cốt lõi | Từ khóa tra cứu | File nguồn |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **01** | `vat_li_11_c1_b1_mo_ta_dao_dong` | **Bài 1: Mô tả dao động điều hòa** | Định nghĩa dao động cơ, dao động điều hòa. Phương trình li độ $x = A\cos(\omega t + \varphi)$. Biên độ $A > 0$, tần số góc $\omega > 0$, chu kì $T$, tần số $f$, pha dao động. Quãng đường $S = 4A$ trong 1T. | `dao động điều hòa`, `li độ`, `biên độ`, `pha dao động`, `chu kì`, `tần số` | [c1_mo_ta_dao_dong.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_mo_ta_dao_dong.ts) |
| **02** | `vat_li_11_c1_b2_van_toc_gia_toc` | **Bài 2: Vận tốc và gia tốc** | Đạo hàm vận tốc $v$, gia tốc $a = -\omega^2 x$. Vận tốc sớm pha $\pi/2$ so với li độ, gia tốc ngược pha với li độ. $v_{\max} = \omega A$ tại VTCB, $a_{\max} = \omega^2 A$ tại 2 biên. Hệ thức độc lập $x^2 + v^2/\omega^2 = A^2$. | `vận tốc`, `gia tốc`, `vmax`, `amax`, `ngược pha`, `vuông pha`, `hệ thức độc lập` | [c1_van_toc_gia_toc.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_van_toc_gia_toc.ts) |
| **03** | `vat_li_11_c1_b3_nang_luong` | **Bài 3: Năng lượng trong dao động điều hòa** | Động năng $W_d = \frac{1}{2}mv^2$, Thế năng $W_t = \frac{1}{2}kx^2$, Cơ năng bảo toàn $W = \frac{1}{2}m\omega^2 A^2$. Chu kì biến thiên năng lượng $T' = T/2, f' = 2f$. Vị trí $W_d = nW_t \implies x = \pm A/\sqrt{n+1}$. | `động năng`, `thế năng`, `cơ năng`, `bảo toàn cơ năng`, `chu kì biến thiên năng lượng` | [c1_nang_luong.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_nang_luong.ts) |
| **04** | `vat_li_11_c1_b4_con_lac_lo_xo` | **Bài 4: Con lắc lò xo** | Tần số góc $\omega = \sqrt{k/m}$, chu kì $T = 2\pi\sqrt{m/k}$. Lực kéo về $F = -kx$ luôn hướng về VTCB. Phân biệt lực kéo về và lực đàn hồi của lò xo thẳng đứng. | `con lắc lò xo`, `độ cứng k`, `khối lượng m`, `lực kéo về`, `lực đàn hồi` | [c1_con_lac.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_con_lac.ts) |
| **05** | `vat_li_11_c1_b4_con_lac_don` | **Bài 4: Con lắc đơn** | Tần số góc $\omega = \sqrt{g/l}$, chu kì $T = 2\pi\sqrt{l/g}$. Điều kiện dao động điều hòa: góc nhỏ $\alpha_0 \le 10^\circ$, bỏ qua ma sát. Chu kì không phụ thuộc khối lượng $m$. | `con lắc đơn`, `chiều dài l`, `dây treo`, `góc nhỏ`, `10 độ`, `gia tốc g` | [c1_con_lac.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_con_lac.ts) |
| **06** | `vat_li_11_c1_b5_tat_dan` | **Bài 5: Dao động tắt dần & Duy trì** | Dao động tắt dần: biên độ và cơ năng giảm dần do ma sát; ứng dụng giảm xóc ô tô xe máy. Dao động duy trì: bù năng lượng sau mỗi chu kì, tần số bằng tần số riêng $f_0$. | `dao động tắt dần`, `tắt dần`, `ma sát`, `lực cản`, `giảm xóc`, `dao động duy trì` | [c1_tat_dan_cuong_buc.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_tat_dan_cuong_buc.ts) |
| **07** | `vat_li_11_c1_b5_cuong_buc_cong_huong` | **Bài 5: Dao động cưỡng bức & Cộng hưởng** | Chịu tác dụng ngoại lực tuần hoàn. Tần số bằng tần số ngoại lực. Hiện tượng cộng hưởng xảy ra khi $f = f_0$, biên độ cực đại $A_{\max}$. Ứng dụng hộp đàn, nguy cơ sập cầu. | `dao động cưỡng bức`, `cộng hưởng`, `cộng hưởng cơ`, `f = f0`, `biên độ cực đại` | [c1_tat_dan_cuong_buc.ts](file:///d:/Project/WebSite/LCEdu/src/knowledge/physics11/c1_tat_dan_cuong_buc.ts) |

---

## 4. HƯỚNG DẪN TRA CỨU NHANH TRONG CODE & CHO AI

### Cách 1: Sử dụng Knowledge Engine (Khuyến nghị cho AI & Client)
```typescript
import { findRelevantChunks, formatChunksForAiPrompt } from './knowledgeEngine';

// Tìm kiếm tự động theo từ khóa trong câu hỏi đề thi
const chunks = findRelevantChunks("Một con lắc lò xo có độ cứng k = 100 N/m, khối lượng 100g. Tính chu kì dao động.", {
  subject: 'vat_li',
  grade: 11,
  maxResults: 2
});

// Chuyển thành prompt ngắn gọn (~200 token) gửi cho AI
const promptText = formatChunksForAiPrompt(chunks);
```

### Cách 2: Lọc theo Scope (Ngoài SGK, Nâng cao, Liên môn)
```typescript
// Tìm kiến thức liên môn hoặc thực tế ngoài SGK
const stemChunks = findRelevantChunks("nguyên lí hoạt động của phuộc nhún xe máy", {
  scope: 'ngoai_sgk_thuc_te'
});
```

---
*Tài liệu này được cập nhật tự động khi có hạt kiến thức hoặc nhánh mới.*
