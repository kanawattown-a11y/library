// متغيرات التطبيق
let currentStage = null;
let currentGrade = null;
let currentSubject = null;
let navigationHistory = [];

// عناصر DOM
const breadcrumb = document.getElementById('breadcrumb');
const backBtn = document.getElementById('backBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

// أقسام المحتوى
const stagesSection = document.getElementById('stagesSection');
const gradesSection = document.getElementById('gradesSection');
const subjectsSection = document.getElementById('subjectsSection');
const booksSection = document.getElementById('booksSection');
const searchSection = document.getElementById('searchSection');

// الشبكات
const gradesGrid = document.getElementById('gradesGrid');
const subjectsGrid = document.getElementById('subjectsGrid');
const booksGrid = document.getElementById('booksGrid');
const searchResults = document.getElementById('searchResults');

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    showSection('stages');
    updateBreadcrumb('stages');
}

function setupEventListeners() {
    // أحداث بطاقات المراحل
    document.querySelectorAll('.stage-card').forEach(card => {
        card.addEventListener('click', function() {
            const stage = this.dataset.stage;
            selectStage(stage);
        });
    });

    // زر العودة
    backBtn.addEventListener('click', goBack);

    // البحث
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // التنقل في breadcrumb
    document.querySelectorAll('.breadcrumb-item').forEach(item => {
        item.addEventListener('click', function() {
            const step = this.dataset.step;
            navigateToStep(step);
        });
    });
}

function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

function showSection(sectionName) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // إظهار/إخفاء زر العودة
    if (sectionName === 'stages') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'inline-flex';
    }
}

function updateBreadcrumb(activeStep) {
    document.querySelectorAll('.breadcrumb-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.querySelector(`[data-step="${activeStep}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function selectStage(stageKey) {
    showLoading();
    
    setTimeout(() => {
        currentStage = stageKey;
        navigationHistory.push({ type: 'stage', key: stageKey });
        
        displayGrades(stageKey);
        showSection('grades');
        updateBreadcrumb('grades');
        
        hideLoading();
    }, 300);
}

function displayGrades(stageKey) {
    const stage = educationData[stageKey];
    if (!stage) return;

    gradesGrid.innerHTML = '';

    Object.keys(stage.grades).forEach(gradeKey => {
        const grade = stage.grades[gradeKey];
        const gradeCard = createGradeCard(grade, gradeKey);
        gradesGrid.appendChild(gradeCard);
    });
}

function createGradeCard(grade, gradeKey) {
    const card = document.createElement('div');
    card.className = 'grade-card';
    card.dataset.grade = gradeKey;

    const subjectCount = Object.keys(grade.subjects).length;

    card.innerHTML = `
        <h3>${grade.name}</h3>
        <p>${subjectCount} مواد تعليمية</p>
    `;

    card.addEventListener('click', function() {
        selectGrade(gradeKey);
    });

    return card;
}

function selectGrade(gradeKey) {
    showLoading();
    
    setTimeout(() => {
        currentGrade = gradeKey;
        navigationHistory.push({ type: 'grade', key: gradeKey });
        
        displaySubjects(currentStage, gradeKey);
        showSection('subjects');
        updateBreadcrumb('subjects');
        
        hideLoading();
    }, 300);
}

function displaySubjects(stageKey, gradeKey) {
    const grade = educationData[stageKey].grades[gradeKey];
    if (!grade) return;

    subjectsGrid.innerHTML = '';

    Object.keys(grade.subjects).forEach(subjectKey => {
        const subject = grade.subjects[subjectKey];
        const subjectCard = createSubjectCard(subject, subjectKey);
        subjectsGrid.appendChild(subjectCard);
    });
}

function createSubjectCard(subject, subjectKey) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.dataset.subject = subjectKey;

    const bookCount = subject.books.length;

    card.innerHTML = `
        <div class="subject-icon">
            <span style="font-size: 24px;">${subject.icon}</span>
        </div>
        <h3>${subject.name}</h3>
        <p>${bookCount} ${bookCount === 1 ? 'كتاب' : 'كتب'}</p>
    `;

    card.addEventListener('click', function() {
        selectSubject(subjectKey);
    });

    return card;
}

function selectSubject(subjectKey) {
    showLoading();
    
    setTimeout(() => {
        currentSubject = subjectKey;
        navigationHistory.push({ type: 'subject', key: subjectKey });
        
        displayBooks(currentStage, currentGrade, subjectKey);
        showSection('books');
        updateBreadcrumb('books');
        
        hideLoading();
    }, 300);
}

function displayBooks(stageKey, gradeKey, subjectKey) {
    const subject = educationData[stageKey].grades[gradeKey].subjects[subjectKey];
    if (!subject) return;

    booksGrid.innerHTML = '';

    subject.books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.bookId = book.id;

    card.innerHTML = `
        <div class="book-cover">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
        </div>
        <div class="book-info">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <div class="book-meta">
                <span>${book.pages} صفحة</span>
                <span>PDF</span>
            </div>
        </div>
    `;

    card.addEventListener('click', function() {
        openBook(book);
    });

    return card;
}

function openBook(book) {
    showLoading();
    
    // محاكاة تحميل الكتاب
    setTimeout(() => {
        // فتح عارض PDF مع تمرير معلومات الكتاب
        const viewerUrl = `viewer.html?book=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.name)}`;
        window.open(viewerUrl, '_blank');
        
        hideLoading();
    }, 500);
}

function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        if (searchSection.classList.contains('active')) {
            goBack();
        }
        return;
    }

    showLoading();
    
    setTimeout(() => {
        const results = searchBooks(query);
        displaySearchResults(results, query);
        showSection('search');
        updateBreadcrumb('stages'); // إعادة تعيين breadcrumb للبحث
        
        hideLoading();
    }, 300);
}

function displaySearchResults(results, query) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray-600);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 16px; opacity: 0.5;">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب البحث بكلمات مختلفة</p>
            </div>
        `;
        return;
    }

    const resultsHeader = document.createElement('div');
    resultsHeader.style.marginBottom = '20px';
    resultsHeader.innerHTML = `
        <p style="color: var(--gray-600); font-size: 14px;">
            تم العثور على ${results.length} نتيجة للبحث عن "${query}"
        </p>
    `;
    searchResults.appendChild(resultsHeader);

    results.forEach(result => {
        const resultCard = createSearchResultCard(result);
        searchResults.appendChild(resultCard);
    });
}

function createSearchResultCard(result) {
    const card = document.createElement('div');
    card.className = 'search-result-item';

    card.innerHTML = `
        <h3>${result.book.name}</h3>
        <p>${result.book.author}</p>
        <div class="search-result-meta">
            <span>${result.stage}</span>
            <span>${result.grade}</span>
            <span>${result.subject}</span>
            <span>${result.book.pages} صفحة</span>
        </div>
    `;

    card.addEventListener('click', function() {
        openBook(result.book);
    });

    return card;
}

function goBack() {
    if (searchSection.classList.contains('active')) {
        // العودة من البحث
        searchInput.value = '';
        if (navigationHistory.length > 0) {
            const lastNav = navigationHistory[navigationHistory.length - 1];
            if (lastNav.type === 'subject') {
                showSection('books');
                updateBreadcrumb('books');
            } else if (lastNav.type === 'grade') {
                showSection('subjects');
                updateBreadcrumb('subjects');
            } else if (lastNav.type === 'stage') {
                showSection('grades');
                updateBreadcrumb('grades');
            } else {
                showSection('stages');
                updateBreadcrumb('stages');
            }
        } else {
            showSection('stages');
            updateBreadcrumb('stages');
        }
        return;
    }

    if (navigationHistory.length > 0) {
        navigationHistory.pop(); // إزالة العنصر الحالي
        
        if (navigationHistory.length === 0) {
            // العودة للمراحل
            currentStage = null;
            currentGrade = null;
            currentSubject = null;
            showSection('stages');
            updateBreadcrumb('stages');
        } else {
            const lastNav = navigationHistory[navigationHistory.length - 1];
            
            if (lastNav.type === 'stage') {
                // العودة للصفوف
                currentGrade = null;
                currentSubject = null;
                showSection('grades');
                updateBreadcrumb('grades');
            } else if (lastNav.type === 'grade') {
                // العودة للمواد
                currentSubject = null;
                showSection('subjects');
                updateBreadcrumb('subjects');
            }
        }
    }
}

function navigateToStep(step) {
    switch (step) {
        case 'stages':
            currentStage = null;
            currentGrade = null;
            currentSubject = null;
            navigationHistory = [];
            showSection('stages');
            updateBreadcrumb('stages');
            break;
            
        case 'grades':
            if (currentStage) {
                currentGrade = null;
                currentSubject = null;
                navigationHistory = navigationHistory.filter(nav => nav.type === 'stage');
                showSection('grades');
                updateBreadcrumb('grades');
            }
            break;
            
        case 'subjects':
            if (currentStage && currentGrade) {
                currentSubject = null;
                navigationHistory = navigationHistory.filter(nav => nav.type === 'stage' || nav.type === 'grade');
                showSection('subjects');
                updateBreadcrumb('subjects');
            }
            break;
            
        case 'books':
            if (currentStage && currentGrade && currentSubject) {
                showSection('books');
                updateBreadcrumb('books');
            }
            break;
    }
}

// دالة لتحديث عنوان القسم بناءً على الاختيارات الحالية
function updateSectionTitle(sectionName) {
    const titleElement = document.querySelector(`#${sectionName}Section .section-title`);
    if (!titleElement) return;

    switch (sectionName) {
        case 'grades':
            if (currentStage) {
                const stageName = educationData[currentStage].name;
                titleElement.textContent = `صفوف ${stageName}`;
            }
            break;
            
        case 'subjects':
            if (currentStage && currentGrade) {
                const gradeName = educationData[currentStage].grades[currentGrade].name;
                titleElement.textContent = `مواد ${gradeName}`;
            }
            break;
            
        case 'books':
            if (currentStage && currentGrade && currentSubject) {
                const subjectName = educationData[currentStage].grades[currentGrade].subjects[currentSubject].name;
                titleElement.textContent = `كتب ${subjectName}`;
            }
            break;
    }
}

// تحديث عناوين الأقسام عند التنقل
function showSection(sectionName) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        updateSectionTitle(sectionName);
    }

    // إظهار/إخفاء زر العودة
    if (sectionName === 'stages') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'inline-flex';
    }
}

