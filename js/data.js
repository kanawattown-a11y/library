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
                            { id: "ar12_1", name: "اللغة العربية أدبي", author: "وزارة التربية", pages: 176, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/857ff4b228e4ed7782f1dba1c77be84943936757/ar12ad.pdf" },
                            { id: "ar12_2", name: "اللغة العربية علمي", author: "وزارة التربية", pages: 228, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/857ff4b228e4ed7782f1dba1c77be84943936757/ar12al.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math12_1", name: "1 - الرياضيات", author: "وزارة التربية", pages: 252, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/857ff4b228e4ed7782f1dba1c77be84943936757/math12f1.pdf" },
                            { id: "math12_2", name: "2 - الرياضيات", author: "وزارة التربية", pages: 217, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/857ff4b228e4ed7782f1dba1c77be84943936757/math12f2.pdf" }
                        ]
                    },
                    physics: {
                        name: "الفيزياء",
                        icon: "⚛️",
                        books: [
                            { id: "phy12_1", name: "الفيزياء", author: "وزارة التربية", pages: 287, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/ph12al.pdf" }
                        ]
                    },
                    chemistry: {
                        name: "الكيمياء",
                        icon: "🧪",
                        books: [
                            { id: "chem12_1", name: "الكيمياء", author: "وزارة التربية", pages: 200, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/k12al.pdf" }
                        ]
                    },
                    biology: {
                        name: "الأحياء",
                        icon: "🧬",
                        books: [
                            { id: "bio12_1", name: "الأحياء", author: "وزارة التربية", pages: 287, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/sci12al.pdf" }
                        ]
                    },
                
                    history: {
                        name: "التاريخ",
                        icon: "🏛️",
                        books: [
                            { id: "hist12_1", name: "التاريخ", author: "وزارة التربية", pages: 208, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/hi12ad.pdf" }
                        ]
                    },
                    geography: {
                        name: "الجغرافيا",
                        icon: "🗺️",
                        books: [
                            { id: "geo12_1", name: "الجغرافيا", author: "وزارة التربية", pages: 215, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/geo12ad.pdf" }
                        ]
                    },
                    philosophy: {
                        name: "الفلسفة",
                        icon: "🗺️",
                        books: [
                            { id: "phi12_1", name: "1 - الفلسفة", author: "وزارة التربية", pages: 188, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/f12adf1.pdf" },
                            { id: "phi12_2", name: "2 - الفلسفة", author: "وزارة التربية", pages: 180, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/f12adf2.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng12_1", name: "English - كتاب الطالب أدبي", author: "وزارة التربية", pages: 128, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/e12kad.pdf" },
                            { id: "eng12_2", name: "English - كتاب الطالب علمي", author: "وزارة التربية", pages: 130, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/e12kal.pdf" },
                            { id: "eng12_3", name: "English - كتاب الأنشطة أدبي", author: "وزارة التربية", pages: 125, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/e12aad.pdf" },
                            { id: "eng12_4", name: "English - كتاب الأنشطة علمي", author: "وزارة التربية", pages: 126, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/e12aal.pdf" }
                        ]
                    },
                    frensh: {
                        name: "اللغة الفرنسية",
                        icon: "🇫🇷",
                        books: [
                            { id: "fr12_1", name: "Frensh Language", author: "وزارة التربية", pages: 152, file: "https://raw.githubusercontent.com/kanawattown-a11y/12/774937dea96f4ef19a78c3832c11ba3e8bd4a906/f12.pdf" }
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
