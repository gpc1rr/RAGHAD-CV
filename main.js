// --- 1. قاموس النصوص للتبديل بين اللغات (عربي / إنجليزي) ---
const translations = {
    en: {
        langText: "عربي / Arabic",
        navCertText: "Certificates",
        nameText: "Raghad Bandar",
        titleText: "Web Development Intern",
        locationText: "Jeddah, Saudi Arabia",
        profileTitle: "PROFILE",
        profileContent: "Web Programming and Development Technology student seeking a cooperative training opportunity to apply academic skills in building modern web applications and gain practical experience.",
        educationTitle: "EDUCATION",
        degreeText: "Associate Degree in Programming and Development Technology",
        collegeText: "Technical College",
        dateText: "Present - 2023",
        skillsTitle: "SKILLS",
        softSkill1: "Problem Solving",
        softSkill2: "Teamwork",
        coursesTitle: "COURSES",
        course1: "Artificial Intelligence Principles (SDAIA)",
        course2: "Advanced AI Concepts and Applications (SDAIA)",
        course3: "Using Modern Technologies for Business Development and Management (Ariad Training Institute)",
        galleryTitle: "CERTIFICATES GALLERY",
        certText1: "AI Principles - SDAIA",
        certText2: "Advanced AI - SDAIA",
        certText3: "Business Development - Ariad",
        languageTitle: "LANGUAGE",
        langArabic: "Arabic:",
        langArabicLevel: "Native",
        langEnglish: "English:",
        langEnglishLevel: "Beginner"
    },
    ar: {
        langText: "English",
        navCertText: "الشهادات",
        nameText: "رغد بندر",
        titleText: "متدربة في تطوير الويب",
        locationText: "جدة، المملكة العربية السعودية",
        profileTitle: "الملخص المهني",
        profileContent: "طالبة تكنولوجيا برمجة وتطوير الويب تبحث عن فرصة تدريب تعاوني لتطبيق مهاراتها الأكاديمية في بناء تطبيقات ويب حديثة واكتساب خبرة عملية.",
        educationTitle: "التعليم",
        degreeText: "دبلوم في تكنولوجيا برمجة وتطوير الويب",
        collegeText: "الكلية التقنية",
        dateText: "الحاضر - 2023",
        skillsTitle: "المهارات",
        softSkill1: "حل المشكلات",
        softSkill2: "العمل الجماعي",
        coursesTitle: "الدورات التدريبية",
        course1: "مبادئ الذكاء الاصطناعي (سدايا)",
        course2: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة (سدايا)",
        course3: "استخدام التقنيات الحديثة لتطوير وإدارة الأعمال (معهد أرياد التدريبي)",
        galleryTitle: "معرض الشهادات",
        certText1: "مبادئ الذكاء الاصطناعي - سدايا",
        certText2: "الذكاء الاصطناعي المتقدم - سدايا",
        certText3: "تطوير الأعمال - أرياد",
        languageTitle: "اللغات",
        langArabic: "العربية:",
        langArabicLevel: "اللغة الأم",
        langEnglish: "الإنجليزية:",
        langEnglishLevel: "مبتدئ"
    }
};

let currentLang = 'en'; // اللغة الافتراضية إنجليزي

// زر التبديل بين اللغات
const langToggleBtn = document.getElementById('langToggleBtn');
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // تغيير اتجاه الصفحة (من اليمين لليسار والعكس) وتغيير الخط
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('arabic-font');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('arabic-font');
    }

    // تحديث كل النصوص في الصفحة بناءً على القاموس
    document.getElementById('lang-text').innerText = translations[currentLang].langText;
    document.getElementById('nav-cert-text').innerText = translations[currentLang].navCertText;
    document.getElementById('name-text').innerText = translations[currentLang].nameText;
    document.getElementById('title-text').innerText = translations[currentLang].titleText;
    document.getElementById('location-text').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].locationText}`;
    document.getElementById('profile-title').innerText = translations[currentLang].profileTitle;
    document.getElementById('profile-content').innerText = translations[currentLang].profileContent;
    document.getElementById('education-title').innerText = translations[currentLang].educationTitle;
    document.getElementById('degree-text').innerText = translations[currentLang].degreeText;
    document.getElementById('college-text').innerText = translations[currentLang].collegeText;
    document.getElementById('date-text').innerText = translations[currentLang].dateText;
    document.getElementById('skills-title').innerText = translations[currentLang].skillsTitle;
    document.getElementById('soft-skill-1').innerText = translations[currentLang].softSkill1;
    document.getElementById('soft-skill-2').innerText = translations[currentLang].softSkill2;
    document.getElementById('courses-title').innerText = translations[currentLang].coursesTitle;
    document.getElementById('course-1').innerText = translations[currentLang].course1;
    document.getElementById('course-2').innerText = translations[currentLang].course2;
    document.getElementById('course-3').innerText = translations[currentLang].course3;
    document.getElementById('gallery-title').innerText = translations[currentLang].galleryTitle;
    document.getElementById('cert-text-1').innerText = translations[currentLang].certText1;
    document.getElementById('cert-text-2').innerText = translations[currentLang].certText2;
    document.getElementById('cert-text-3').innerText = translations[currentLang].certText3;
    document.getElementById('language-title').innerText = translations[currentLang].languageTitle;
    document.getElementById('lang-arabic').innerText = translations[currentLang].langArabic;
    document.getElementById('lang-arabic-level').innerText = translations[currentLang].langArabicLevel;
    document.getElementById('lang-english').innerText = translations[currentLang].langEnglish;
    document.getElementById('lang-english-level').innerText = translations[currentLang].langEnglishLevel;
});


// --- 2. جافا سكريبت معرض الشهادات (Slideshow - التقليب يمين ويسار) ---
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}