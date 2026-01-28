// Video assets từ thư mục src/assets - Phân loại theo khóa học
const videoAssets = {
    // Bé làm game - CodeKitten (Học phần 1)
    'BLG_CODEKITTEN': [
        { file: 'Codekitten_san_pham_1.mp4', title: 'CodeKitten - Game đầu tiên' },
        { file: 'Codekitten_san_pham_2.mp4', title: 'CodeKitten - Phiên bản 2' },
        { file: 'Codekitten_san_pham_3.mp4', title: 'CodeKitten - Game sáng tạo' },
        { file: 'Codekitten_san_pham_4.mp4', title: 'CodeKitten - Hoàn thiện' }
    ],

    // Bé làm game - Tynker (Học phần 4)
    'BLG_TYNKER': [
        { file: 'Tynker_danh_banh.mp4', title: 'Đánh bóng' },
        { file: 'Tynker_giai_cuu_thanh_pho.mp4', title: 'Giải cứu thành phố' },
        { file: 'Tynker_san_pham.mp4', title: 'Tynker Game' },
        { file: 'Tynker_san_pham_1.mp4', title: 'Tynker Adventure' },
        { file: 'Tynker_san_pham_2.mp4', title: 'Tynker Puzzle' },
        { file: 'Tynker_san_pham_3.mp4', title: 'Tynker Ultimate' },
        { file: 'Tynker_san_pham_4.mp4', title: 'Tynker Master' }
    ],

    // Siêu nhân lập trình Web
    'SNLTW': [
        { file: 'SNLW_HP1_Doan_so.mp4', title: 'Game Đoán số' },
        { file: 'SNLW_HP1_May_quay_hoa_qua.mp4', title: 'Máy quay hoa quả' },
        { file: 'SNLW_HP1_Menu_mua_tra_sua.mp4', title: 'Menu Trà sữa' },
        { file: 'SNLTW_HP1_Ma_Morse.mp4', title: 'Ứng dụng Mã Morse' },
        { file: 'SNLTW_HP_1.mp4', title: 'Trang Profile cá nhân' },
        { file: 'SNLTW_HP_1_1.mp4', title: 'Website Cá nhân' },
        { file: 'SNLTW_HP1_1.mp4', title: 'Landing Page' },
        { file: 'SNLTW_HP1_2.mp4', title: 'Portfolio Online' },
        { file: 'SNLTW_HP1_san_pham_2.mp4', title: 'Sản phẩm Web 2' },
        { file: 'SNLTW_HP1_san_pham_3.mp4', title: 'Sản phẩm Web 3' }
    ]
};

// Danh sách tên học sinh mẫu
const studentNames = [
    'Nguyễn Minh Anh',
    'Trần Hải Đăng',
    'Lê Thùy Linh',
    'Phạm Quốc Bảo',
    'Hoàng Mai Chi',
    'Vũ Đức Minh',
    'Đặng Thu Hà',
    'Bùi Hoàng Nam',
    'Ngô Thế Anh',
    'Đỗ Khánh Linh',
    'Phan Minh Tuấn',
    'Lý Thu Hương'
];

/**
 * Hàm tạo modules tự động từ video assets
 * @param {string} subjectId - Key trong videoAssets (VD: 'BLG_CODEKITTEN', 'BLG_TYNKER', 'SNLTW')
 * @param {string} subjectName - Tên môn học hiển thị
 * @param {number} count - Số lượng modules cần tạo (mặc định 12)
 * @returns {Array} Mảng các module objects
 */
const generateModules = (subjectId, subjectName, count = 12) => {
    const assets = videoAssets[subjectId] || [];

    return Array.from({ length: count }, (_, i) => ({
        id: `${subjectId}-mod-${i + 1}`,
        name: `Học phần ${i + 1}`,
        videos: Array.from({ length: 4 }, (_, j) => {
            const assetIndex = (i * 4 + j) % (assets.length || 1);
            const asset = assets[assetIndex];

            return {
                id: `${subjectId}-mod-${i + 1}-vid-${j + 1}`,
                title: asset ? asset.title : `Sản phẩm ${j + 1}`,
                studentName: studentNames[(i + j) % studentNames.length],
                thumbnailUrl: null,
                videoUrl: asset ? `/videos/${asset.file}?v=2` : 'https://www.w3schools.com/html/mov_bbb.mp4',
                description: `Bài thuyết trình sản phẩm cuối khóa của học phần ${i + 1} - ${subjectName}.`
            };
        })
    }));
};

/**
 * Hàm tạo modules "Coming Soon" cho các khóa học chưa có video
 * @param {string} subjectId - ID của môn học
 * @param {string} subjectName - Tên môn học hiển thị
 * @param {number} count - Số lượng modules cần tạo (mặc định 12)
 * @returns {Array} Mảng các module objects với trạng thái "Coming Soon"
 */
const generateComingSoonModules = (subjectId, subjectName, count = 12) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `${subjectId}-mod-${i + 1}`,
        name: `Học phần ${i + 1}`,
        comingSoon: true,
        videos: Array.from({ length: 4 }, (_, j) => ({
            id: `${subjectId}-mod-${i + 1}-vid-${j + 1}`,
            title: `Sản phẩm ${j + 1} - Coming Soon`,
            studentName: 'Đang cập nhật',
            thumbnailUrl: null,
            videoUrl: null,
            comingSoon: true,
            description: `Video sản phẩm sẽ được cập nhật sớm - ${subjectName} Học phần ${i + 1}.`
        }))
    }));
};

export const curriculum = [
    {
        id: 'SNLW',
        name: 'Siêu nhân lập trình web',
        description: 'Khóa học giúp học sinh làm chủ công nghệ web, tự tay xây dựng website cá nhân.',
        // Ảnh thân thiện với trẻ em - trẻ em học lập trình web
        thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
        modules: [
            {
                id: 'SNLW-mod-1',
                name: 'Học phần 1',
                videos: [
                    {
                        id: 'SNLW-mod-1-vid-1',
                        title: 'Game Đoán số',
                        studentName: 'Nguyễn Minh Anh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLW_HP1_Doan_so.mp4?v=2',
                        description: 'Ứng dụng game đoán số được xây dựng bằng HTML, CSS và JavaScript.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-2',
                        title: 'Máy quay Hoa quả',
                        studentName: 'Trần Hải Đăng',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLW_HP1_May_quay_hoa_qua.mp4?v=2',
                        description: 'Ứng dụng máy quay hoa quả thú vị với animation CSS.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-3',
                        title: 'Menu Trà sữa',
                        studentName: 'Lê Thùy Linh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLW_HP1_Menu_mua_tra_sua.mp4?v=2',
                        description: 'Website menu trà sữa với thiết kế đẹp mắt.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-4',
                        title: 'Ứng dụng Mã Morse',
                        studentName: 'Phạm Quốc Bảo',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP1_Ma_Morse.mp4?v=2',
                        description: 'Ứng dụng chuyển đổi mã Morse sáng tạo.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-5',
                        title: 'Trang Profile cá nhân',
                        studentName: 'Hoàng Mai Chi',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP_1.mp4?v=2',
                        description: 'Trang profile cá nhân với thiết kế hiện đại.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-6',
                        title: 'Website Cá nhân',
                        studentName: 'Vũ Đức Minh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP_1_1.mp4?v=2',
                        description: 'Website cá nhân giới thiệu bản thân.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-7',
                        title: 'Landing Page',
                        studentName: 'Đặng Thu Hà',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP1_1.mp4?v=2',
                        description: 'Trang landing page chuyên nghiệp.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-8',
                        title: 'Portfolio Online',
                        studentName: 'Bùi Hoàng Nam',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP1_2.mp4?v=2',
                        description: 'Portfolio online trưng bày sản phẩm.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-10',
                        title: 'Sản phẩm Web 2',
                        studentName: 'Đỗ Khánh Linh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP1_san_pham_2.mp4?v=2',
                        description: 'Dự án web sáng tạo thứ hai.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-11',
                        title: 'Sản phẩm Web 3',
                        studentName: 'Phan Minh Tuấn',
                        thumbnailUrl: null,
                        videoUrl: '/videos/SNLTW_HP1_san_pham_3.mp4?v=2',
                        description: 'Dự án web hoàn chỉnh.'
                    }
                ]
            },

            // Các học phần 2-12 Coming Soon
            ...generateComingSoonModules('SNLW', 'Web', 11).map((m, i) => ({
                ...m,
                id: `SNLW-mod-${i + 2}`,
                name: `Học phần ${i + 2}`
            }))
        ]
    },
    {
        id: 'BLG',
        name: 'Bé làm game',
        description: 'Bước khởi đầu thú vị cho các bé làm quen với tư duy logic qua việc làm game.',
        // Ảnh thân thiện - trẻ em vui vẻ học tập
        thumbnail: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600',
        modules: [
            {
                id: 'BLG-mod-1',
                name: 'Học phần 1: CodeKitten',
                videos: [
                    {
                        id: 'BLG-mod-1-vid-1',
                        title: 'CodeKitten - Game đầu tiên',
                        studentName: 'Nguyễn Minh Anh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Codekitten_san_pham_1.mp4?v=2',
                        description: 'Game đầu tiên được tạo bằng CodeKitten.'
                    },
                    {
                        id: 'BLG-mod-1-vid-2',
                        title: 'CodeKitten - Phiên bản 2',
                        studentName: 'Trần Hải Đăng',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Codekitten_san_pham_2.mp4?v=2',
                        description: 'Game CodeKitten mở rộng với nhiều tính năng.'
                    },
                    {
                        id: 'BLG-mod-1-vid-3',
                        title: 'CodeKitten - Game sáng tạo',
                        studentName: 'Lê Thùy Linh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Codekitten_san_pham_3.mp4?v=2',
                        description: 'Game sáng tạo với hiệu ứng đặc biệt.'
                    },
                    {
                        id: 'BLG-mod-1-vid-4',
                        title: 'CodeKitten - Hoàn thiện',
                        studentName: 'Phạm Quốc Bảo',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Codekitten_san_pham_4.mp4?v=2',
                        description: 'Dự án CodeKitten hoàn thiện.'
                    }
                ]
            },
            {
                id: 'BLG-mod-4',
                name: 'Học phần 4: Tynker',
                videos: [
                    {
                        id: 'BLG-mod-4-vid-1',
                        title: 'Đánh bóng',
                        studentName: 'Hoàng Mai Chi',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_danh_banh.mp4?v=2',
                        description: 'Game đánh bóng vui nhộn.'
                    },
                    {
                        id: 'BLG-mod-4-vid-2',
                        title: 'Giải cứu thành phố',
                        studentName: 'Vũ Đức Minh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_giai_cuu_thanh_pho.mp4?v=2',
                        description: 'Game phiêu lưu giải cứu thành phố.'
                    },
                    {
                        id: 'BLG-mod-4-vid-3',
                        title: 'Tynker Game',
                        studentName: 'Đặng Thu Hà',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_san_pham.mp4?v=2',
                        description: 'Game Tynker sáng tạo.'
                    },
                    {
                        id: 'BLG-mod-4-vid-4',
                        title: 'Tynker Adventure',
                        studentName: 'Bùi Hoàng Nam',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_san_pham_1.mp4?v=2',
                        description: 'Game phiêu lưu Tynker.'
                    },
                    {
                        id: 'BLG-mod-4-vid-5',
                        title: 'Tynker Puzzle',
                        studentName: 'Ngô Thế Anh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_san_pham_2.mp4?v=2',
                        description: 'Game giải đố Tynker.'
                    },
                    {
                        id: 'BLG-mod-4-vid-6',
                        title: 'Tynker Ultimate',
                        studentName: 'Đỗ Khánh Linh',
                        thumbnailUrl: null,
                        videoUrl: '/videos/Tynker_san_pham_3.mp4?v=2',
                        description: 'Game Tynker hoàn chỉnh.'
                    }
                ]
            }
        ]
    },
    {
        id: 'SNLG',
        name: 'Siêu nhân lập trình game',
        description: 'Khơi dậy đam mê sáng tạo game với các công cụ lập trình hiện đại.',
        // Ảnh thân thiện - trẻ em chơi game
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
        modules: generateComingSoonModules('SNLG', 'Game')
    },
    {
        id: 'SNLT',
        name: 'Siêu nhân lập trình',
        description: 'Nền tảng tư duy lập trình vững chắc cho tương lai công nghệ.',
        // Ảnh thân thiện - trẻ em với máy tính
        thumbnail: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=600',
        modules: generateComingSoonModules('SNLT', 'Code')
    },
    {
        id: 'DSMM',
        name: 'Digi-Multimedia',
        description: 'Sáng tạo nội dung số đa phương tiện, thiết kế đồ họa và dựng video.',
        // Ảnh thân thiện - trẻ em sáng tạo nghệ thuật số
        thumbnail: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&q=80&w=600',
        modules: generateComingSoonModules('DSMM', 'Multimedia')
    }
]
