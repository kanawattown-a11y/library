// بيانات المكتبة التعليمية
const educationData = {
    elementary: {
        name: "المرحلة الابتدائية",
        grades: {
            grade1: {
                name: "الصف الأول الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar1_1", name: "كتاب القراءة والكتابة", author: "وزارة التربية", pages: 120, file: "js/arabic_grade1_reading.pdf" },
                            { id: "ar1_2", name: "كتاب الخط العربي", author: "وزارة التربية", pages: 80, file: "js/arabic_grade1_reading.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math1_1", name: "الأرقام والعد", author: "وزارة التربية", pages: 100, file: "https://nccd.gov.sy/imges/books/F/f10mad.pdf" },
                            { id: "math1_2", name: "الجمع والطرح", author: "وزارة التربية", pages: 90, file: "https://nccd.gov.sy/imges/books/F/f10mad.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci1_1", name: "عالمي الصغير", author: "وزارة التربية", pages: 85, file: "science_grade1_world.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl1_1", name: "ديني الجميل", author: "وزارة التربية", pages: 70, file: "islamic_grade1.pdf" }
                        ]
                    }
                }
            },
            grade2: {
                name: "الصف الثاني الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar2_1", name: "لغتي الجميلة", author: "وزارة التربية", pages: 140, file: "arabic_grade2_main.pdf" },
                            { id: "ar2_2", name: "كراسة الخط", author: "وزارة التربية", pages: 60, file: "arabic_grade2_writing.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math2_1", name: "الرياضيات المرحة", author: "وزارة التربية", pages: 120, file: "math_grade2.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci2_1", name: "استكشف وتعلم", author: "وزارة التربية", pages: 95, file: "science_grade2.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl2_1", name: "تربيتي الإسلامية", author: "وزارة التربية", pages: 80, file: "islamic_grade2.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc2_1", name: "مجتمعي وبيئتي", author: "وزارة التربية", pages: 75, file: "social_grade2.pdf" }
                        ]
                    }
                }
            },
            grade3: {
                name: "الصف الثالث الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar3_1", name: "لغتي العربية", author: "وزارة التربية", pages: 160, file: "arabic_grade3.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math3_1", name: "الرياضيات", author: "وزارة التربية", pages: 140, file: "math_grade3.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci3_1", name: "العلوم والحياة", author: "وزارة التربية", pages: 110, file: "science_grade3.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl3_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 90, file: "islamic_grade3.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc3_1", name: "التربية الاجتماعية", author: "وزارة التربية", pages: 85, file: "social_grade3.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng3_1", name: "English for Beginners", author: "وزارة التربية", pages: 100, file: "english_grade3.pdf" }
                        ]
                    }
                }
            },
            grade4: {
                name: "الصف الرابع الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar4_1", name: "لغتي العربية", author: "وزارة التربية", pages: 180, file: "arabic_grade4.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math4_1", name: "الرياضيات", author: "وزارة التربية", pages: 160, file: "math_grade4.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci4_1", name: "العلوم والتكنولوجيا", author: "وزارة التربية", pages: 130, file: "science_grade4.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl4_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 100, file: "islamic_grade4.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc4_1", name: "التربية الاجتماعية", author: "وزارة التربية", pages: 95, file: "social_grade4.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng4_1", name: "English Language", author: "وزارة التربية", pages: 120, file: "english_grade4.pdf" }
                        ]
                    }
                }
            },
            grade5: {
                name: "الصف الخامس الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar5_1", name: "لغتي العربية", author: "وزارة التربية", pages: 200, file: "arabic_grade5.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math5_1", name: "الرياضيات", author: "وزارة التربية", pages: 180, file: "math_grade5.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci5_1", name: "العلوم", author: "وزارة التربية", pages: 150, file: "science_grade5.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl5_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 110, file: "islamic_grade5.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc5_1", name: "التربية الاجتماعية", author: "وزارة التربية", pages: 105, file: "social_grade5.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng5_1", name: "English Language", author: "وزارة التربية", pages: 140, file: "english_grade5.pdf" }
                        ]
                    }
                }
            },
            grade6: {
                name: "الصف السادس الابتدائي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar6_1", name: "لغتي العربية", author: "وزارة التربية", pages: 220, file: "arabic_grade6.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math6_1", name: "الرياضيات", author: "وزارة التربية", pages: 200, file: "math_grade6.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci6_1", name: "العلوم", author: "وزارة التربية", pages: 170, file: "science_grade6.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl6_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 120, file: "islamic_grade6.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc6_1", name: "التربية الاجتماعية", author: "وزارة التربية", pages: 115, file: "social_grade6.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng6_1", name: "English Language", author: "وزارة التربية", pages: 160, file: "english_grade6.pdf" }
                        ]
                    }
                }
            }
        }
    },
    middle: {
        name: "المرحلة المتوسطة",
        grades: {
            grade7: {
                name: "الصف الأول المتوسط",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar7_1", name: "اللغة العربية", author: "وزارة التربية", pages: 240, file: "arabic_grade7.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math7_1", name: "الرياضيات", author: "وزارة التربية", pages: 220, file: "math_grade7.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci7_1", name: "العلوم", author: "وزارة التربية", pages: 190, file: "science_grade7.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl7_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 140, file: "islamic_grade7.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc7_1", name: "التاريخ", author: "وزارة التربية", pages: 130, file: "history_grade7.pdf" },
                            { id: "soc7_2", name: "الجغرافيا", author: "وزارة التربية", pages: 125, file: "geography_grade7.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng7_1", name: "English Language", author: "وزارة التربية", pages: 180, file: "english_grade7.pdf" }
                        ]
                    }
                }
            },
            grade8: {
                name: "الصف الثاني المتوسط",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar8_1", name: "اللغة العربية", author: "وزارة التربية", pages: 260, file: "arabic_grade8.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math8_1", name: "الرياضيات", author: "وزارة التربية", pages: 240, file: "math_grade8.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci8_1", name: "العلوم", author: "وزارة التربية", pages: 210, file: "science_grade8.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl8_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 150, file: "islamic_grade8.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc8_1", name: "التاريخ", author: "وزارة التربية", pages: 140, file: "history_grade8.pdf" },
                            { id: "soc8_2", name: "الجغرافيا", author: "وزارة التربية", pages: 135, file: "geography_grade8.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng8_1", name: "English Language", author: "وزارة التربية", pages: 200, file: "english_grade8.pdf" }
                        ]
                    }
                }
            },
            grade9: {
                name: "الصف الثالث المتوسط",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar9_1", name: "اللغة العربية", author: "وزارة التربية", pages: 280, file: "arabic_grade9.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math9_1", name: "الرياضيات", author: "وزارة التربية", pages: 260, file: "math_grade9.pdf" }
                        ]
                    },
                    science: {
                        name: "العلوم",
                        icon: "🔬",
                        books: [
                            { id: "sci9_1", name: "العلوم", author: "وزارة التربية", pages: 230, file: "science_grade9.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl9_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 160, file: "islamic_grade9.pdf" }
                        ]
                    },
                    social: {
                        name: "التربية الاجتماعية",
                        icon: "🌍",
                        books: [
                            { id: "soc9_1", name: "التاريخ", author: "وزارة التربية", pages: 150, file: "history_grade9.pdf" },
                            { id: "soc9_2", name: "الجغرافيا", author: "وزارة التربية", pages: 145, file: "geography_grade9.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng9_1", name: "English Language", author: "وزارة التربية", pages: 220, file: "english_grade9.pdf" }
                        ]
                    }
                }
            }
        }
    },
    high: {
        name: "المرحلة الثانوية",
        grades: {
            grade10: {
                name: "الصف الأول الثانوي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar10_1", name: "اللغة العربية", author: "وزارة التربية", pages: 300, file: "arabic_grade10.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math10_1", name: "الرياضيات", author: "وزارة التربية", pages: 280, file: "math_grade10.pdf" }
                        ]
                    },
                    physics: {
                        name: "الفيزياء",
                        icon: "⚛️",
                        books: [
                            { id: "phy10_1", name: "الفيزياء", author: "وزارة التربية", pages: 250, file: "physics_grade10.pdf" }
                        ]
                    },
                    chemistry: {
                        name: "الكيمياء",
                        icon: "🧪",
                        books: [
                            { id: "chem10_1", name: "الكيمياء", author: "وزارة التربية", pages: 240, file: "chemistry_grade10.pdf" }
                        ]
                    },
                    biology: {
                        name: "الأحياء",
                        icon: "🧬",
                        books: [
                            { id: "bio10_1", name: "الأحياء", author: "وزارة التربية", pages: 230, file: "biology_grade10.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl10_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 170, file: "islamic_grade10.pdf" }
                        ]
                    },
                    history: {
                        name: "التاريخ",
                        icon: "🏛️",
                        books: [
                            { id: "hist10_1", name: "التاريخ", author: "وزارة التربية", pages: 160, file: "history_grade10.pdf" }
                        ]
                    },
                    geography: {
                        name: "الجغرافيا",
                        icon: "🗺️",
                        books: [
                            { id: "geo10_1", name: "الجغرافيا", author: "وزارة التربية", pages: 155, file: "geography_grade10.pdf" }
                        ]
                    },
                    english: {
                        name: "1 اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng10_1", name: "English Language", author: "وزارة التربية", pages: 240, file: "https://raw.githubusercontent.com/kanawattown-a11y/10/a98e66216b1885c19b0e427dcd5e9dbaff52a442/e10k.pdf" }
                        ]
                    },
                    english2: {
                        name: "2 اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng10_1", name: "English Language", author: "وزارة التربية", pages: 240, file: "https://raw.githubusercontent.com/kanawattown-a11y/10/c8ded667708dddd5e5655e85e122f6d98f7557bf/e10a.pdf" }
                        ]
                    },
                     frensh: {
                        name: "اللغة الفرنسية",
                        icon: "🇫🇷",
                        books: [
                            { id: "eng10_1", name: "Frensh Language", author: "وزارة التربية", pages: 240, file: "https://raw.githubusercontent.com/kanawattown-a11y/10/a98e66216b1885c19b0e427dcd5e9dbaff52a442/f10.pdf" }
                        ]
                    }
                }
            },
            grade11: {
                name: "الصف الثاني الثانوي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar11_1", name: "اللغة العربية", author: "وزارة التربية", pages: 320, file: "arabic_grade11.pdf" }
                        ]
                    },
                    math: {
                        name: "الرياضيات",
                        icon: "🔢",
                        books: [
                            { id: "math11_1", name: "الرياضيات", author: "وزارة التربية", pages: 300, file: "math_grade11.pdf" }
                        ]
                    },
                    physics: {
                        name: "الفيزياء",
                        icon: "⚛️",
                        books: [
                            { id: "phy11_1", name: "الفيزياء", author: "وزارة التربية", pages: 270, file: "physics_grade11.pdf" }
                        ]
                    },
                    chemistry: {
                        name: "الكيمياء",
                        icon: "🧪",
                        books: [
                            { id: "chem11_1", name: "الكيمياء", author: "وزارة التربية", pages: 260, file: "chemistry_grade11.pdf" }
                        ]
                    },
                    biology: {
                        name: "الأحياء",
                        icon: "🧬",
                        books: [
                            { id: "bio11_1", name: "الأحياء", author: "وزارة التربية", pages: 250, file: "biology_grade11.pdf" }
                        ]
                    },
                    islamic: {
                        name: "التربية الإسلامية",
                        icon: "🕌",
                        books: [
                            { id: "isl11_1", name: "التربية الإسلامية", author: "وزارة التربية", pages: 180, file: "islamic_grade11.pdf" }
                        ]
                    },
                    history: {
                        name: "التاريخ",
                        icon: "🏛️",
                        books: [
                            { id: "hist11_1", name: "التاريخ", author: "وزارة التربية", pages: 170, file: "history_grade11.pdf" }
                        ]
                    },
                    geography: {
                        name: "الجغرافيا",
                        icon: "🗺️",
                        books: [
                            { id: "geo11_1", name: "الجغرافيا", author: "وزارة التربية", pages: 165, file: "geography_grade11.pdf" }
                        ]
                    },
                    english: {
                        name: "اللغة الإنجليزية",
                        icon: "🇬🇧",
                        books: [
                            { id: "eng11_1", name: "English Language", author: "وزارة التربية", pages: 260, file: "english_grade11.pdf" }
                        ]
                    }
                }
            },
            grade12: {
                name: "الصف الثالث الثانوي",
                subjects: {
                    arabic: {
                        name: "اللغة العربية",
                        icon: "📚",
                        books: [
                            { id: "ar12_1", name: "اللغة العربية", author: "وزارة التربية", pages: 340, file: "arabic_grade12.pdf" }
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

