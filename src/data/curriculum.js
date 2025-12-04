/**
 * CURRICULUM DATA
 * 
 * This file contains ALL the data for the website.
 * 
 * --- HIERARCHY ---
 * 1. SUBJECTS (e.g., Math, Physics)
 *    - Each subject has an 'id', 'name', 'description', 'thumbnail', and 'modules'.
 * 
 * 2. MODULES (e.g., Algebra, Geometry)
 *    - Each subject has a list of 'modules'.
 *    - Each module has an 'id', 'name', 'description', 'roadmap', and 'videos'.
 * 
 * 3. VIDEOS
 *    - Each module has a list of 'videos'.
 * 
 * --- HOW TO EDIT ---
 * - To CHANGE A SUBJECT NAME: Find the 'name' field of the subject object.
 * - To CHANGE A MODULE NAME: Find the 'name' field inside the 'modules' array.
 * - To ADD A NEW SUBJECT: Copy an entire subject object (from { to }) and paste it at the end of the list.
 * - To ADD A NEW MODULE: Copy a module object and paste it into the 'modules' array.
 */

const generateModules = (subjectId, subjectName, count = 12) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `${subjectId}-mod-${i + 1}`,
        name: `Học phần ${i + 1}`,
        videos: Array.from({ length: 4 }, (_, j) => ({
            id: `${subjectId}-mod-${i + 1}-vid-${j + 1}`,
            title: `Sản phẩm ${j + 1}`,
            studentName: `Học sinh ${String.fromCharCode(65 + j)}`,
            thumbnailUrl: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400&text=${subjectName}+${i + 1}`,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: `Bài thuyết trình sản phẩm cuối khóa của học phần ${i + 1}.`
        }))
    }));
};

export const curriculum = [
    {
        id: 'SNLW',
        name: 'Siêu nhân lập trình web',
        description: 'Khóa học giúp học sinh làm chủ công nghệ web, tự tay xây dựng website cá nhân.',
        thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600',
        modules: [
            // --- VÍ DỤ: HỌC PHẦN 1 (Bạn có thể copy khối này để tạo Học phần 2, 3...) ---
            {
                id: 'SNLW-mod-1',
                name: 'Học phần 1: Làm quen với HTML',
                description: 'Trong học phần này, học sinh sẽ được làm quen với ngôn ngữ đánh dấu siêu văn bản HTML, nền tảng của mọi website. Các bạn sẽ học cách tạo cấu trúc trang web, chèn văn bản, hình ảnh, liên kết và tạo ra sản phẩm đầu tay là một trang Profile cá nhân.',
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
                        title: 'Bài 1: Giới thiệu HTML',
                        studentName: 'Nguyễn Văn A',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        description: 'Giới thiệu về thẻ HTML cơ bản.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-2',
                        title: 'Bài 2: Cấu trúc trang web',
                        studentName: 'Trần Thị B',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        description: 'Cách bố trí layout cơ bản.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-3',
                        title: 'Bài 3: Thẻ văn bản',
                        studentName: 'Lê Văn C',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        description: 'Các thẻ h1, p, span...'
                    },
                    {
                        id: 'SNLW-mod-1-vid-4',
                        title: 'Bài 4: Chèn ảnh và link',
                        studentName: 'Phạm Thị D',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        description: 'Sử dụng thẻ img và a.'
                    },
                    {
                        id: 'SNLW-mod-1-vid-5',
                        title: 'Bài 5: Tổng kết chương 1',
                        studentName: 'Hoàng Văn E',
                        thumbnailUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
                        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        description: 'Ôn tập kiến thức.'
                    }
                ]
            },
            // --- HẾT HỌC PHẦN 1 ---

            // Để thêm Học phần 2, hãy copy từ dấu { đến dấu } của Học phần 1 và dán xuống đây, sau đó sửa lại id và nội dung.
            // Tạm thời tôi dùng hàm tự động sinh cho các học phần còn lại (2-12) để bạn đỡ rối mắt, bạn có thể xóa dòng dưới và tự nhập tay.
            ...generateModules('SNLW', 'Web', 11).map((m, i) => ({ ...m, id: `SNLW-mod-${i + 2}`, name: `Học phần ${i + 2}` }))
        ]
    },
    {
        id: 'SNLG',
        name: 'Siêu nhân lập trình game',
        description: 'Khơi dậy đam mê sáng tạo game với các công cụ lập trình hiện đại.',
        thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('SNLG', 'Game')
    },
    {
        id: 'SNLT',
        name: 'Siêu nhân lập trình',
        description: 'Nền tảng tư duy lập trình vững chắc cho tương lai công nghệ.',
        thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('SNLT', 'Code')
    },
    {
        id: 'BLG',
        name: 'Bé làm game',
        description: 'Bước khởi đầu thú vị cho các bé làm quen với tư duy logic qua việc làm game.',
        thumbnail: 'https://images.unsplash.com/photo-1596496050844-961f55183834?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('BLG', 'KidGame')
    },
    {
        id: 'DSMM',
        name: 'Digi-Multimedia',
        description: 'Sáng tạo nội dung số đa phương tiện, thiết kế đồ họa và dựng video.',
        thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('DSMM', 'Multimedia')
    }
];
