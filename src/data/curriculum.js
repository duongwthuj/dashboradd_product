// Video assets từ thư mục src/assets
const videoAssets = {
    'BLG': [
        { file: 'BLG_HP4_Danh_banh.mp4', title: 'Đánh bóng' },
        { file: 'BLG_HP4_Giai_cuu_thanh_pho.mp4', title: 'Giải cứu thành phố' },
        { file: 'BLG-HP1-CodeKitten_1.mp4', title: 'CodeKitten 1' },
        { file: 'BLG-HP1-CodeKitten.mp4', title: 'CodeKitten' },
        { file: 'BLG-HP1-CodeKitten_3.mp4', title: 'CodeKitten 3' },
        { file: 'BLG-HP1-Codekitten_2.mp4', title: 'CodeKitten 2' },
        { file: 'BLG-HP4-Tynker.mp4', title: 'Tynker Game' },
        { file: 'BLG-HP4-Tynker_2.mp4', title: 'Tynker Game 2' },
        { file: 'BLG-HP4-Tynker_3.mp4', title: 'Tynker Game 3' },
        { file: 'BLG-HP4-Tynker_4.mp4', title: 'Tynker Game 4' },
        { file: 'BLG_HP4.mp4', title: 'Bé làm game HP4' },
        { file: 'TE-C-PA-711-2020BLG-0093.mp4', title: 'Game Sáng tạo' }
    ],
    'SNLW': [
        { file: 'SNLTW_HP_1_1.mp4', title: 'Website Cá nhân' },
        { file: 'SNLTW_HP_1.mp4', title: 'Trang Profile' },
        { file: 'SNLTW_HP1_1.mp4', title: 'Landing Page' },
        { file: 'SNLTW_HP1_2.mp4', title: 'Portfolio Online' },
        { file: 'SNLTW_HP1_Ma_Morse.mp4', title: 'Ứng dụng Mã Morse' },
        { file: 'SNLTW_HP1.mp4', title: 'Web đầu tiên' },
        { file: 'SNLTW_HP2.mp4', title: 'Website HP2' },
        { file: 'SNLW_HP1_Doan_so.mp4', title: 'Game Đoán số' },
        { file: 'SNLW_HP1_May_quay_hoa_qua.mp4', title: 'Máy quay hoa quả' },
        { file: 'SNLW_HP1_Menu_mua_tra_sua.mp4', title: 'Menu Trà sữa' },
        { file: 'TE-C-PA-1218-2020SNLTW-0097.mp4', title: 'Dự án Website' },
        { file: 'TE-C-PA-1218-2020SNLTW-0103.mp4', title: 'Web App Hoàn chỉnh' }
    ]
};

// Danh sách tên học sinh mẫu
const studentNames = [
    'Nguyễn Minh Anh', 'Trần Hải Đăng', 'Lê Thùy Linh', 'Phạm Quốc Bảo',
    'Hoàng Mai Chi', 'Vũ Đức Minh', 'Đặng Thu Hà', 'Bùi Hoàng Nam',
    'Ngô Thế Anh', 'Đỗ Khánh Linh', 'Trịnh Gia Huy', 'Mai Hồng Ngọc'
];

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
                videoUrl: asset ? `/videos/${asset.file}` : 'https://www.w3schools.com/html/mov_bbb.mp4',
                description: `Bài thuyết trình sản phẩm cuối khóa của học phần ${i + 1} - ${subjectName}.`
            };
        })
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
                name: 'Học phần 1: Làm quen với HTML',
                description: 'Trong học phần này, học sinh sẽ được làm quen với ngôn ngữ đánh dấu siêu văn bản HTML, nền tảng của mọi website.',
                roadmap: [
                    'Buổi 1: Giới thiệu về Internet và Website',
                    'Buổi 2: Cấu trúc cơ bản của trang HTML',
                    'Buổi 3: Các thẻ văn bản và định dạng',
                    'Buổi 4: Chèn hình ảnh và liên kết',
                    'Buổi 5: Thực hành tạo trang Profile cá nhân'
                ],
                videos: [
                    {
                        id: 'SNLW-mod-1-vid-1',
                        title: 'Game Đoán số',
                        studentName: 'Nguyễn Minh Anh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLW - HP1 - Doan so.mp4',
                        description: 'Ứng dụng game đoán số được xây dựng bằng HTML, CSS và JavaScript.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-2',
                        title: 'Máy quay Hoa quả',
                        studentName: 'Trần Hải Đăng',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLW - HP1 - May quay hoa qua.mp4',
                        description: 'Ứng dụng máy quay hoa quả thú vị với animation CSS.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-3',
                        title: 'Menu Trà sữa',
                        studentName: 'Lê Thùy Linh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLW - HP1 - Menu mua tra sua.mp4',
                        description: 'Website menu trà sữa với thiết kế đẹp mắt.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-4',
                        title: 'Ứng dụng Mã Morse',
                        studentName: 'Phạm Quốc Bảo',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLTW_HP1 - Ma Morse.mp4',
                        description: 'Ứng dụng chuyển đổi mã Morse sáng tạo.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-5',
                        title: 'Trang Profile cá nhân',
                        studentName: 'Hoàng Mai Chi',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLTW_HP 1.mp4',
                        description: 'Trang profile cá nhân với thiết kế hiện đại.'
                    }
                ]
            },
            {
                id: 'SNLW-mod-2',
                name: 'Học phần 2: CSS và Tạo kiểu',
                description: 'Học cách sử dụng CSS để tạo kiểu và làm đẹp cho website.',
                roadmap: [
                    'Buổi 1: Giới thiệu CSS và Selector',
                    'Buổi 2: Colors, Fonts và Text Styling',
                    'Buổi 3: Box Model và Layout',
                    'Buổi 4: Flexbox và Grid',
                    'Buổi 5: Responsive Design'
                ],
                videos: [
                    {
                        id: 'SNLW-mod-2-vid-1',
                        title: 'Website với CSS đẹp',
                        studentName: 'Vũ Đức Minh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLTW_HP2.mp4',
                        description: 'Website hoàn chỉnh với CSS styling chuyên nghiệp.'
                    },
                    {
                        id: 'SNLW-mod-2-vid-2',
                        title: 'Landing Page',
                        studentName: 'Đặng Thu Hà',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLTW_HP1 (1).mp4',
                        description: 'Landing page với thiết kế hiện đại.'
                    },
                    {
                        id: 'SNLW-mod-2-vid-3',
                        title: 'Portfolio Online',
                        studentName: 'Bùi Hoàng Nam',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/SNLTW_HP1 (2).mp4',
                        description: 'Portfolio cá nhân ấn tượng.'
                    },
                    {
                        id: 'SNLW-mod-2-vid-4',
                        title: 'Web App Hoàn chỉnh',
                        studentName: 'Ngô Thế Anh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/TE-C-PA-1218-2020SNLTW-0097.mp4',
                        description: 'Dự án web app hoàn chỉnh.'
                    }
                ]
            },
            ...generateModules('SNLW', 'Web', 10).map((m, i) => ({
                ...m,
                id: `SNLW-mod-${i + 3}`,
                name: `Học phần ${i + 3}`
            }))
        ]
    },
    {
        id: 'SNLG',
        name: 'Siêu nhân lập trình game',
        description: 'Khơi dậy đam mê sáng tạo game với các công cụ lập trình hiện đại.',
        // Ảnh thân thiện - trẻ em chơi game
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('SNLG', 'Game')
    },
    {
        id: 'SNLT',
        name: 'Siêu nhân lập trình',
        description: 'Nền tảng tư duy lập trình vững chắc cho tương lai công nghệ.',
        // Ảnh thân thiện - trẻ em với máy tính
        thumbnail: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('SNLT', 'Code')
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
                description: 'Làm quen với lập trình qua nền tảng CodeKitten thân thiện với trẻ em.',
                roadmap: [
                    'Buổi 1: Giới thiệu CodeKitten',
                    'Buổi 2: Di chuyển và Animation',
                    'Buổi 3: Tương tác và Sự kiện',
                    'Buổi 4: Tạo game đơn giản',
                    'Buổi 5: Hoàn thiện game'
                ],
                videos: [
                    {
                        id: 'BLG-mod-1-vid-1',
                        title: 'CodeKitten - Game đầu tiên',
                        studentName: 'Nguyễn Minh Anh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP1-CodeKitten.mp4',
                        description: 'Game đầu tiên được tạo bằng CodeKitten.'
                    },
                    {
                        id: 'BLG-mod-1-vid-2',
                        title: 'CodeKitten - Phiên bản 2',
                        studentName: 'Trần Hải Đăng',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP1-Codekitten_2.mp4',
                        description: 'Game CodeKitten mở rộng với nhiều tính năng.'
                    },
                    {
                        id: 'BLG-mod-1-vid-3',
                        title: 'CodeKitten - Game sáng tạo',
                        studentName: 'Lê Thùy Linh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP1-CodeKitten_3.mp4',
                        description: 'Game sáng tạo với hiệu ứng đặc biệt.'
                    },
                    {
                        id: 'BLG-mod-1-vid-4',
                        title: 'CodeKitten - Hoàn thiện',
                        studentName: 'Phạm Quốc Bảo',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP1-CodeKitten (1).mp4',
                        description: 'Dự án CodeKitten hoàn thiện.'
                    }
                ]
            },
            {
                id: 'BLG-mod-4',
                name: 'Học phần 4: Tynker',
                description: 'Lập trình game với nền tảng Tynker đa dạng và sáng tạo.',
                roadmap: [
                    'Buổi 1: Làm quen Tynker',
                    'Buổi 2: Lập trình kéo thả',
                    'Buổi 3: Tạo nhân vật và Scene',
                    'Buổi 4: Game logic và Điểm số',
                    'Buổi 5: Hoàn thiện và Chia sẻ'
                ],
                videos: [
                    {
                        id: 'BLG-mod-4-vid-1',
                        title: 'Đánh bóng',
                        studentName: 'Hoàng Mai Chi',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG - HP4 - Danh banh.mp4',
                        description: 'Game đánh bóng vui nhộn.'
                    },
                    {
                        id: 'BLG-mod-4-vid-2',
                        title: 'Giải cứu thành phố',
                        studentName: 'Vũ Đức Minh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG - HP4 - Giai cuu thanh pho.mp4',
                        description: 'Game phiêu lưu giải cứu thành phố.'
                    },
                    {
                        id: 'BLG-mod-4-vid-3',
                        title: 'Tynker Game',
                        studentName: 'Đặng Thu Hà',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP4-Tynker.mp4',
                        description: 'Game Tynker sáng tạo.'
                    },
                    {
                        id: 'BLG-mod-4-vid-4',
                        title: 'Tynker Adventure',
                        studentName: 'Bùi Hoàng Nam',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP4-Tynker_2.mp4',
                        description: 'Game phiêu lưu Tynker.'
                    },
                    {
                        id: 'BLG-mod-4-vid-5',
                        title: 'Tynker Puzzle',
                        studentName: 'Ngô Thế Anh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP4-Tynker_3.mp4',
                        description: 'Game giải đố Tynker.'
                    },
                    {
                        id: 'BLG-mod-4-vid-6',
                        title: 'Tynker Ultimate',
                        studentName: 'Đỗ Khánh Linh',
                        thumbnailUrl: null,
                        videoUrl: '/src/assets/BLG-HP4-Tynker_4.mp4',
                        description: 'Game Tynker hoàn chỉnh.'
                    }
                ]
            },
            ...generateModules('BLG', 'KidGame', 10).map((m, i) => {
                const modNum = i < 2 ? i + 2 : i + 3;
                return {
                    ...m,
                    id: `BLG-mod-${modNum}`,
                    name: `Học phần ${modNum}`
                };
            })
        ]
    },
    {
        id: 'DSMM',
        name: 'Digi-Multimedia',
        description: 'Sáng tạo nội dung số đa phương tiện, thiết kế đồ họa và dựng video.',
        // Ảnh thân thiện - trẻ em sáng tạo nghệ thuật số
        thumbnail: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('DSMM', 'Multimedia')
    }
];
