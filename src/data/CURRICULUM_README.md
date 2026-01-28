# Cấu trúc Curriculum Data

## Tổng quan

File `curriculum.js` chứa dữ liệu về các khóa học và video sản phẩm của học sinh. Dữ liệu được tổ chức theo cấu trúc phân cấp rõ ràng.

## Cấu trúc Video Assets

### 1. BLG_CODEKITTEN (Bé làm game - CodeKitten)
**Học phần 1**: Các video game được tạo bằng nền tảng CodeKitten

**Danh sách video:**
- `Codekitten_san_pham_1.mp4` - Game đầu tiên
- `Codekitten_san_pham_2.mp4` - Phiên bản 2
- `Codekitten_san_pham_3.mp4` - Game sáng tạo
- `Codekitten_san_pham_4.mp4` - Hoàn thiện

### 2. BLG_TYNKER (Bé làm game - Tynker)
**Học phần 4**: Các video game được tạo bằng nền tảng Tynker

**Danh sách video:**
- `Tynker_danh_banh.mp4` - Đánh bóng
- `Tynker_giai_cuu_thanh_pho.mp4` - Giải cứu thành phố
- `Tynker_san_pham.mp4` - Tynker Game
- `Tynker_san_pham_1.mp4` - Tynker Adventure
- `Tynker_san_pham_2.mp4` - Tynker Puzzle
- `Tynker_san_pham_3.mp4` - Tynker Ultimate
- `Tynker_san_pham_4.mp4` - Tynker Master

### 3. SNLTW (Siêu nhân lập trình Web)
**Tất cả học phần**: Các dự án web được tạo bằng HTML, CSS, JavaScript

**Danh sách video:**
- `SNLW_HP1_Doan_so.mp4` - Game Đoán số
- `SNLW_HP1_May_quay_hoa_qua.mp4` - Máy quay hoa quả
- `SNLW_HP1_Menu_mua_tra_sua.mp4` - Menu Trà sữa
- `SNLTW_HP1_Ma_Morse.mp4` - Ứng dụng Mã Morse
- `SNLTW_HP_1.mp4` - Trang Profile cá nhân
- `SNLTW_HP_1_1.mp4` - Website Cá nhân
- `SNLTW_HP1_1.mp4` - Landing Page
- `SNLTW_HP1_2.mp4` - Portfolio Online
- `SNLTW_HP1_san_pham.mp4` - Sản phẩm Web 1
- `SNLTW_HP1_san_pham_2.mp4` - Sản phẩm Web 2
- `SNLTW_HP1_san_pham_3.mp4` - Sản phẩm Web 3

## Quy ước đặt tên

### File Video
- **BLG-HP1-**: Bé làm game, Học phần 1 (CodeKitten)
- **BLG-HP4-**: Bé làm game, Học phần 4 (Tynker)
- **BLG_HP4_**: Bé làm game, Học phần 4 (định dạng cũ)
- **SNLW_HP1_**: Siêu nhân lập trình Web, Học phần 1 (định dạng mới)
- **SNLTW_HP1_**: Siêu nhân lập trình Web, Học phần 1 (định dạng cũ)
- **TE-C-PA-**: Dự án đặc biệt

### Key trong videoAssets
- `BLG_CODEKITTEN`: Video CodeKitten
- `BLG_TYNKER`: Video Tynker
- `SNLTW`: Video Web (tất cả các học phần)

## Cách sử dụng

### Thêm video mới

1. **Thêm vào videoAssets:**
```javascript
'BLG_CODEKITTEN': [
    { file: 'ten-file.mp4', title: 'Tiêu đề video' },
    // ...
]
```

2. **Video sẽ tự động được phân phối** vào các modules thông qua hàm `generateModules()`

### Tạo module thủ công

Nếu cần tùy chỉnh chi tiết, có thể tạo module thủ công như ví dụ trong BLG:

```javascript
{
    id: 'BLG-mod-1',
    name: 'Học phần 1: CodeKitten',
    videos: [
        {
            id: 'BLG-mod-1-vid-1',
            title: 'CodeKitten - Game đầu tiên',
            studentName: 'Nguyễn Minh Anh',
            thumbnailUrl: null,
            videoUrl: '/videos/BLG-HP1-CodeKitten.mp4?v=2',
            description: 'Game đầu tiên được tạo bằng CodeKitten.'
        },
        // ...
    ]
}
```

## Danh sách khóa học

1. **SNLW** - Siêu nhân lập trình web
2. **SNLG** - Siêu nhân lập trình game
3. **SNLT** - Siêu nhân lập trình
4. **BLG** - Bé làm game
5. **DSMM** - Digi-Multimedia

## Lưu ý

- Tất cả video files phải được đặt trong thư mục `/public/videos/`
- Query parameter `?v=2` được sử dụng để cache busting
- Mỗi video cần có: `id`, `title`, `studentName`, `videoUrl`, `description`
- Thumbnail có thể để `null` nếu không có
