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
 *    - Each module has an 'id', 'name', and 'videos'.
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
        id: 'web-superhero',
        name: 'Siêu nhân lập trình web',
        description: 'Khóa học giúp học sinh làm chủ công nghệ web, tự tay xây dựng website cá nhân.',
        thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('web', 'Web')
    },
    {
        id: 'game-superhero',
        name: 'Siêu nhân lập trình game',
        description: 'Khơi dậy đam mê sáng tạo game với các công cụ lập trình hiện đại.',
        thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('game', 'Game')
    },
    {
        id: 'coding-superhero',
        name: 'Siêu nhân lập trình',
        description: 'Nền tảng tư duy lập trình vững chắc cho tương lai công nghệ.',
        thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('code', 'Code')
    },
    {
        id: 'kid-game',
        name: 'Bé làm game',
        description: 'Bước khởi đầu thú vị cho các bé làm quen với tư duy logic qua việc làm game.',
        thumbnail: 'https://images.unsplash.com/photo-1596496050844-961f55183834?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('kid', 'KidGame')
    },
    {
        id: 'digi-multimedia',
        name: 'Digi-Multimedia',
        description: 'Sáng tạo nội dung số đa phương tiện, thiết kế đồ họa và dựng video.',
        thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=600',
        modules: generateModules('digi', 'Multimedia')
    }
];
