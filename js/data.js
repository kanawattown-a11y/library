// بيانات المكتبة التعليمية
const educationData = {
  
    
    high: {
        name: "المرحلة الثانوية",
        grades: {
           
            grade12: {
                name: "الصف الثالث الثانوي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar12_1", name: "اللغة العربيةأدبي", author: "وزارة التربية", pages: 340, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/ar12ad.pdf" }
                            { id: "ar12_2", name: "اللغة العربية علمي", author: "وزارة التربية", pages: 340, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/ar12al.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math12_1", name: "الرياضيات", author: "وزارة التربية", pages: 320, file: "math_grade12.pdf" }
                        ]
                    },
                    physics: {
                        name: "الفيزياء",
                        icon: "⚛️",
                        books: [
                            { id: "phy12_1", name: "الفيزياء", author: "وزارة التربية", pages: 290, file: "physics_grade12.pdf" }
                        ]
                    },
                    chemistry: {
                        name: "الكيمياء",
                        icon: "🧪",
                        books: [
                            { id: "chem12_1", name: "الكيمياء", author: "وزارة التربية", pages: 280, file: "chemistry_grade12.pdf" }
                        ]
                    },
                    biology: {
                        name: "الأحياء",
                        icon: "🧬",
                        books: [
                            { id: "bio12_1", name: "الأحياء", author: "وزارة التربية", pages: 270, file: "biology_grade12.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl12_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 190, file: "islamic_grade12.pdf" }
                        ]
                    },
                    history: {
                        name: "التاريخ",
                        icon: "🏛️",
                        books: [
                            { id: "hist12_1", name: "التاريخ", author: "وزارة التربية", pages: 180, file: "history_grade12.pdf" }
                        ]
                    },
                    geography: {
                        name: "الجغرافيا",
                        icon: "🗺️",
                        books: [
                            { id: "geo12_1", name: "الجغرافيا", author: "وزارة التربية", pages: 175, file: "geography_grade12.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng12_1", name: "English Language", author: "وزارة التربية", pages: 280, file: "english_grade12.pdf" }
                        ]
                    }
                }
            }
        }
    }
};

// دالة للبحث في البيانات
function searchBooks(query) {
    const results = [];
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) return results;
    
    Object.keys(educationData).forEach(stageKey => {
        const stage = educationData[stageKey];
        Object.keys(stage.grades).forEach(gradeKey => {
            const grade = stage.grades[gradeKey];
            Object.keys(grade.subjects).forEach(subjectKey => {
                const subject = grade.subjects[subjectKey];
                subject.books.forEach(book => {
                    if (book.name.toLowerCase().includes(searchTerm) ||
                        subject.name.toLowerCase().includes(searchTerm) ||
                        grade.name.toLowerCase().includes(searchTerm) ||
                        stage.name.toLowerCase().includes(searchTerm)) {
                        results.push({
                            book: book,
                            subject: subject.name,
                            grade: grade.name,
                            stage: stage.name,
                            stageKey: stageKey,
                            gradeKey: gradeKey,
                            subjectKey: subjectKey
                        });
                    }
                });
            });
        });
    });
    
    return results;
}
