# 🎓 Student Product Showcase - Nền Tảng Trưng Bày Sản Phẩm Học Sinh

Chào mừng bạn đến với **Student Product Showcase**, một ứng dụng web hiện đại và chuyên nghiệp được thiết kế để trưng bày các video thuyết trình sản phẩm sáng tạo của học sinh.

![Project Screenshot](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000)

## 🌟 Tính Năng Nổi Bật

-   **Giao Diện Hiện Đại (Glassmorphism)**: Thiết kế sang trọng, bắt mắt với hiệu ứng kính mờ và chuyển động mượt mà.
-   **Phân Cấp Khoa Học**: Tổ chức nội dung rõ ràng theo **Môn Học -> Học Phần (Module) -> Video**.
-   **Tìm Kiếm Thông Minh**: Dễ dàng tìm kiếm video theo tên bài hoặc tên học sinh.
-   **Trải Nghiệm Mượt Mà**:
    -   Xem video trực tiếp trên Modal (cửa sổ nổi) tiện lợi.
    -   Điều hướng nhanh chóng với Breadcrumbs (thanh điều hướng).
    -   Sidebar (thanh bên) linh hoạt, tự động thu gọn trên thiết bị di động.
-   **Tương Thích Đa Thiết Bị**: Hiển thị hoàn hảo trên Máy tính, Máy tính bảng và Điện thoại.

## 🛠️ Công Nghệ Sử Dụng

-   **Frontend**: [React](https://reactjs.org/) (với Vite)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Styling**: Vanilla CSS (CSS thuần) với biến CSS và Flexbox/Grid.
-   **Icons**: Sử dụng Unicode và CSS shapes để tối ưu hiệu năng.

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

Đảm bảo bạn đã cài đặt [Node.js](https://nodejs.org/) trên máy tính.

1.  **Clone dự án** (nếu chưa có):
    ```bash
    git clone <link-repo-cua-ban>
    cd dashboard-product
    ```

2.  **Cài đặt các gói phụ thuộc**:
    ```bash
    npm install
    ```

3.  **Chạy môi trường phát triển (Development)**:
    ```bash
    npm run dev
    ```
    Truy cập `http://localhost:5173` để xem ứng dụng.

4.  **Đóng gói cho môi trường sản xuất (Production)**:
    ```bash
    npm run build
    ```
    Kết quả sẽ nằm trong thư mục `dist`.

## 📝 Quản Lý Nội Dung (Thêm/Sửa Video)

Vì đây là ứng dụng Frontend-only, dữ liệu được lưu trữ trực tiếp trong mã nguồn để đảm bảo tốc độ và sự đơn giản.

Để thêm Môn học, Module hoặc Video mới, hãy chỉnh sửa file:
📂 **`src/data/curriculum.js`**

### Cấu trúc dữ liệu mẫu:

```javascript
{
  id: 'math', // ID môn học (duy nhất)
  name: 'Toán Học',
  modules: [
    {
      id: 'math-mod-1', // ID module
      name: 'Module 1: Đại Số',
      videos: [
        {
          id: 'v1', // ID video (duy nhất)
          title: 'Dự án Thống Kê',
          studentName: 'Nguyễn Văn A',
          thumbnailUrl: 'link-anh-thumb.jpg',
          videoUrl: 'link-video.mp4',
          description: 'Mô tả chi tiết về dự án...'
        }
      ]
    }
  ]
}
```

## 🤝 Đóng Góp

Mọi ý kiến đóng góp đều được hoan nghênh! Hãy tạo Pull Request hoặc mở Issue nếu bạn tìm thấy lỗi hoặc muốn đề xuất tính năng mới.

---
*Được xây dựng với ❤️ cho sự sáng tạo của học sinh.*
