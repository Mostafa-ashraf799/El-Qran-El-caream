// بيانات الموقع - يمكنك إضافة المزيد هنا
const appData = {
    surahs: [
        {
            id: 1,
            name: "الفاتحة",
            verses: 7,
            type: "مكية",
            pageStart: 1,
            duration: "03:45",
            audioFile: "audio/001.mp3",
            verses: [
                {
                    id: 1,
                    text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                    translation: "بسم الله الرحمن الرحيم",
                    tafseer: {
                        1: "تفسير ميسر: البسملة آية مستقلة في أول كل سورة (عدا سورة التوبة)، وفيها التبرك باسم الله والاستعانة به.",
                        2: "تفسير السعدي: ابتدأ الله تعالى كتابه بالبسملة تعليماً لعباده أن يبدؤوا أعمالهم وأقوالهم بها."
                    },
                    page: 1,
                    audioStart: 0,
                    audioEnd: 5
                },
                {
                    id: 2,
                    text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                    translation: "الحمد لله رب العالمين",
                    tafseer: {
                        1: "تفسير ميسر: الثناء على الله بصفاته التي كلّها صفات كمال، وبنعمه الظاهرة والباطنة.",
                        2: "تفسير السعدي: الحمد لله على نعمه الظاهرة والباطنة، الدينية والدنيوية."
                    },
                    page: 1,
                    audioStart: 5,
                    audioEnd: 10
                },
                {
                    id: 3,
                    text: "الرَّحْمَٰنِ الرَّحِيمِ",
                    translation: "الرحمن الرحيم",
                    tafseer: {
                        1: "تفسير ميسر: الرحمن: ذو الرحمة الواسعة لجميع الخلائق، الرحيم: بالمؤمنين خاصة."
                    },
                    page: 1,
                    audioStart: 10,
                    audioEnd: 15
                },
                {
                    id: 4,
                    text: "مَالِكِ يَوْمِ الدِّينِ",
                    translation: "مالك يوم الدين",
                    tafseer: {
                        1: "تفسير ميسر: المالك ليوم الجزاء، وهو يوم القيامة، يَجْزِي المحسن بإحسانه والمسيء بإساءته."
                    },
                    page: 1,
                    audioStart: 15,
                    audioEnd: 20
                },
                {
                    id: 5,
                    text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                    translation: "إياك نعبد وإياك نستعين",
                    tafseer: {
                        1: "تفسير ميسر: نخصك وحدك بالعبادة، ونخصك وحدك بالاستعانة، فلا نعبد غيرك، ولا نستعين بسواك."
                    },
                    page: 1,
                    audioStart: 20,
                    audioEnd: 25
                },
                {
                    id: 6,
                    text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                    translation: "اهدنا الصراط المستقيم",
                    tafseer: {
                        1: "تفسير ميسر: دلنا على الطريق القويم، وثبتنا عليه حتى نلقاك، وهو الإسلام الذي بيَّنه الله في كتابه وعلى لسان رسوله."
                    },
                    page: 1,
                    audioStart: 25,
                    audioEnd: 30
                },
                {
                    id: 7,
                    text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                    translation: "صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين",
                    tafseer: {
                        1: "تفسير ميسر: طريق الذين أنعمت عليهم من النبيين والصديقين والشهداء والصالحين، غير طريق المغضوب عليهم الذين عرفوا الحق فتركوه، ولا طريق الضالين الذين فقدوا العلم فصاروا يهيمون على وجوههم."
                    },
                    page: 1,
                    audioStart: 30,
                    audioEnd: 35
                }
            ]
        },
        {
            id: 2,
            name: "البقرة",
            verses: 286,
            type: "مدنية",
            pageStart: 2,
            duration: "2:15:30",
            audioFile: "audio/002.mp3",
            verses: [
                {
                    id: 1,
                    text: "الٓمٓ",
                    translation: "الم",
                    tafseer: {
                        1: "تفسير ميسر: هذه الحروف وغيرها من الحروف المقطعة في أوائل السور فيها إشارة إلى إعجاز القرآن الكريم."
                    },
                    page: 2,
                    audioStart: 0,
                    audioEnd: 8
                },
                {
                    id: 2,
                    text: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
                    translation: "ذلك الكتاب لا ريب فيه هدى للمتقين",
                    tafseer: {
                        1: "تفسير ميسر: هذا القرآن لا شك فيه أنه من عند الله، هادٍ للذين يخافون الله ويتبعون أوامره ويجتنبون نواهيه."
                    },
                    page: 2,
                    audioStart: 8,
                    audioEnd: 15
                }
            ]
        }
    ],
    reciters: [
        { id: 1, name: "عبد الباسط عبد الصمد" },
        { id: 2, name: "محمود خليل الحصري" },
        { id: 3, name: "سعد الغامدي" },
        { id: 4, name: "مشاري العفاسي" }
    ],
    tafseerSources: [
        { id: 1, name: "التفسير الميسر" },
        { id: 2, name: "تفسير السعدي" },
        { id: 3, name: "تفسير ابن كثير" },
        { id: 4, name: "التفسير الوسيط" }
    ]
};

// الحالة الحالية للتطبيق
let state = {
    currentSurahId: 1,
    currentVerseId: 1,
    currentReciterId: 1,
    currentTafseerSourceId: 1,
    currentPage: 1,
    isPlaying: false,
    isMuted: false,
    volume: 0.8,
    isDarkMode: false,
    repeatMode: false
};

// العناصر الرئيسية في DOM
const elements = {
    // العناصر العامة
    loading: document.getElementById('loading'),
    mainContent: document.getElementById('main-content'),
    themeToggle: document.getElementById('theme-toggle'),
    
    // التنقل
    surahSelector: document.getElementById('surah-selector'),
    navLinks: document.querySelectorAll('.nav-link'),
    contentSections: document.querySelectorAll('.content-section'),
    
    // مشغل الصوت
    audioPlayer: document.getElementById('quran-audio'),
    playBtn: document.getElementById('play-btn'),
    rewindBtn: document.getElementById('rewind-btn'),
    forwardBtn: document.getElementById('forward-btn'),
    muteBtn: document.getElementById('mute-btn'),
    volumeSlider: document.getElementById('volume-slider'),
    repeatBtn: document.getElementById('repeat-btn'),
    progressSlider: document.getElementById('progress-slider'),
    progressFill: document.getElementById('progress-fill'),
    currentTime: document.getElementById('current-time'),
    totalTime: document.getElementById('total-time'),
    
    // معلومات السورة
    currentSurahName: document.getElementById('current-surah-name'),
    surahType: document.getElementById('surah-type'),
    verseCount: document.getElementById('verse-count'),
    surahDuration: document.getElementById('surah-duration'),
    reciterSelector: document.getElementById('reciter-selector'),
    prevSurahBtn: document.getElementById('prev-surah-btn'),
    nextSurahBtn: document.getElementById('next-surah-btn'),
    
    // الآية الحالية
    currentVerseNum: document.getElementById('current-verse-num'),
    currentVerseText: document.getElementById('current-verse-text'),
    currentVerseTranslation: document.getElementById('current-verse-translation'),
    
    // قائمة الآيات
    versesList: document.getElementById('verses-list'),
    verseSearch: document.getElementById('verse-search'),
    
    // المصحف
    mushafImage: document.getElementById('mushaf-image'),
    prevPageBtn: document.getElementById('prev-page-btn'),
    nextPageBtn: document.getElementById('next-page-btn'),
    currentPage: document.getElementById('current-page'),
    totalPages: document.getElementById('total-pages'),
    pageSlider: document.getElementById('page-slider'),
    pageJumpInput: document.getElementById('page-jump-input'),
    jumpBtn: document.getElementById('jump-btn'),
    verseHotspots: document.getElementById('verse-hotspots'),
    
    // التفسير
    tafseerSource: document.getElementById('tafseer-source'),
    tafseerContent: document.getElementById('tafseer-content'),
    tafseerNotesText: document.getElementById('tafseer-notes-text'),
    
    // النافذة المنبثقة
    verseModal: document.getElementById('verse-modal'),
    modalVerseTitle: document.getElementById('modal-verse-title'),
    modalVerseText: document.getElementById('modal-verse-text'),
    modalTafseerText: document.getElementById('modal-tafseer-text'),
    modalPlayBtn: document.getElementById('modal-play-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    closeModal: document.querySelector('.close-modal')
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إخفاء شاشة التحميل بعد 1.5 ثانية
    setTimeout(() => {
        elements.loading.style.opacity = '0';
        setTimeout(() => {
            elements.loading.style.display = 'none';
            elements.mainContent.style.display = 'block';
            initApp();
        }, 500);
    }, 1500);
});

// تهيئة التطبيق
function initApp() {
    // تحميل السور في القائمة المنسدلة
    loadSurahs();
    
    // تعيين الوضع الليلي/النهاري
    initTheme();
    
    // تهيئة مشغل الصوت
    initAudioPlayer();
    
    // تهيئة التنقل
    initNavigation();
    
    // تحميل السورة الأولى
    loadSurah(state.currentSurahId);
    
    // تحديث عرض المصحف
    updateMushaf();
    
    // تحديث التفسير
    updateTafseer();
    
    // إضافة المستمعين للأحداث
    setupEventListeners();
}

// تحميل قائمة السور
function loadSurahs() {
    elements.surahSelector.innerHTML = '<option value="">اختر سورة للاستماع</option>';
    
    appData.surahs.forEach(surah => {
        const option = document.createElement('option');
        option.value = surah.id;
        option.textContent = surah.name;
        elements.surahSelector.appendChild(option);
    });
    
    elements.surahSelector.value = state.currentSurahId;
}

// تهيئة الوضع الليلي/النهاري
function initTheme() {
    const savedTheme = localStorage.getItem('quran-theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    
    elements.themeToggle.addEventListener('click', toggleTheme);
}

function enableDarkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    state.isDarkMode = true;
    localStorage.setItem('quran-theme', 'dark');
}

function disableDarkMode() {
    document.documentElement.removeAttribute('data-theme');
    elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    state.isDarkMode = false;
    localStorage.setItem('quran-theme', 'light');
}

function toggleTheme() {
    if (state.isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// تهيئة مشغل الصوت
function initAudioPlayer() {
    // تعيين حجم الصوت الافتراضي
    elements.audioPlayer.volume = state.volume;
    elements.volumeSlider.value = state.volume;
    
    // تحديث وقت التشغيل
    elements.audioPlayer.addEventListener('loadedmetadata', function() {
        const duration = elements.audioPlayer.duration;
        elements.totalTime.textContent = formatTime(duration);
    });
    
    // تحديث الوقت الحالي وشريط التقدم
    elements.audioPlayer.addEventListener('timeupdate', updateProgress);
    
    // عند انتهاء التشغيل
    elements.audioPlayer.addEventListener('ended', function() {
        if (state.repeatMode) {
            // إذا كان وضع التكرار مفعلاً، كرر الآية الحالية
            playCurrentVerse();
        } else {
            // التالي تلقائياً
            nextVerse();
        }
    });
}

function updateProgress() {
    const currentTime = elements.audioPlayer.currentTime;
    const duration = elements.audioPlayer.duration;
    
    // تحديث الوقت الحالي
    elements.currentTime.textContent = formatTime(currentTime);
    
    // تحديث شريط التقدم
    const progress = (currentTime / duration) * 100 || 0;
    elements.progressSlider.value = progress;
    elements.progressFill.style.width = `${progress}%`;
    
    // تحديث الآية الحالية بناءً على وقت التشغيل
    updateCurrentVerseByTime(currentTime);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// تهيئة التنقل بين الأقسام
function initNavigation() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشط من جميع الروابط
            elements.navLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة النشط للرابط المختار
            this.classList.add('active');
            
            // إخفاء جميع الأقسام
            elements.contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // إظهار القسم المختار
            const sectionId = this.getAttribute('data-section');
            document.getElementById(`${sectionId}-section`).classList.add('active');
        });
    });
}

// تحميل سورة
function loadSurah(surahId) {
    const surah = appData.surahs.find(s => s.id === surahId);
    if (!surah) return;
    
    state.currentSurahId = surahId;
    
    // تحديث معلومات السورة
    elements.currentSurahName.textContent = `سورة ${surah.name}`;
    elements.surahType.textContent = surah.type;
    elements.verseCount.textContent = surah.verses;
    elements.surahDuration.textContent = surah.duration;
    
    // تحديث ملف الصوت
    elements.audioPlayer.src = surah.audioFile;
    
    // تحديث قائمة الآيات
    updateVersesList(surah);
    
    // تحديد الآية الأولى
    state.currentVerseId = 1;
    updateCurrentVerseDisplay();
    
    // تحديث المصحف
    updateMushaf();
    
    // تحديث التفسير
    updateTafseer();
}

// تحديث قائمة الآيات
function updateVersesList(surah) {
    elements.versesList.innerHTML = '';
    
    surah.verses.forEach(verse => {
        const verseItem = document.createElement('div');
        verseItem.className = 'verse-item';
        verseItem.setAttribute('data-verse-id', verse.id);
        
        verseItem.innerHTML = `
            <span class="verse-num">${verse.id}</span>
            <p class="verse-text">${verse.text}</p>
        `;
        
        verseItem.addEventListener('click', () => {
            selectVerse(verse.id);
        });
        
        elements.versesList.appendChild(verseItem);
    });
    
    // البحث في الآيات
    elements.verseSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const verseItems = document.querySelectorAll('.verse-item');
        
        verseItems.forEach(item => {
            const verseText = item.querySelector('.verse-text').textContent.toLowerCase();
            if (verseText.includes(searchTerm) || searchTerm === '') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// تحديد آية
function selectVerse(verseId) {
    state.currentVerseId = verseId;
    
    // تحديث عرض الآية الحالية
    updateCurrentVerseDisplay();
    
    // تشغيل الآية من بدايتها
    playCurrentVerse();
    
    // تحديث النشط في القائمة
    const verseItems = document.querySelectorAll('.verse-item');
    verseItems.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.getAttribute('data-verse-id')) === verseId) {
            item.classList.add('active');
        }
    });
    
    // الانتقال إلى قسم التلاوة
    elements.navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="player"]').classList.add('active');
    elements.contentSections.forEach(section => section.classList.remove('active'));
    document.getElementById('player-section').classList.add('active');
}

// تحديث عرض الآية الحالية
function updateCurrentVerseDisplay() {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    const verse = surah.verses.find(v => v.id === state.currentVerseId);
    if (!verse) return;
    
    elements.currentVerseNum.textContent = verse.id;
    elements.currentVerseText.textContent = verse.text;
    elements.currentVerseTranslation.textContent = verse.translation;
}

// تشغيل الآية الحالية
function playCurrentVerse() {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    const verse = surah.verses.find(v => v.id === state.currentVerseId);
    if (!verse) return;
    
    // تعيين وقت البدء للآية
    elements.audioPlayer.currentTime = verse.audioStart;
    
    // تشغيل الصوت
    elements.audioPlayer.play();
    state.isPlaying = true;
    elements.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// تحديث الآية الحالية بناءً على وقت التشغيل
function updateCurrentVerseByTime(currentTime) {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    // البحث عن الآية التي يتوافق معها الوقت الحالي
    for (const verse of surah.verses) {
        if (currentTime >= verse.audioStart && currentTime <= verse.audioEnd) {
            if (state.currentVerseId !== verse.id) {
                state.currentVerseId = verse.id;
                updateCurrentVerseDisplay();
                
                // تحديث النشط في القائمة
                const verseItems = document.querySelectorAll('.verse-item');
                verseItems.forEach(item => {
                    item.classList.remove('active');
                    if (parseInt(item.getAttribute('data-verse-id')) === verse.id) {
                        item.classList.add('active');
                    }
                });
                
                // تحديث التفسير
                updateTafseer();
            }
            break;
        }
    }
}

// التالي للآية
function nextVerse() {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    if (state.currentVerseId < surah.verses.length) {
        selectVerse(state.currentVerseId + 1);
    } else {
        // إذا كانت هذه آخر آية في السورة، انتقل للسورة التالية
        nextSurah();
    }
}

// السابق للآية
function prevVerse() {
    if (state.currentVerseId > 1) {
        selectVerse(state.currentVerseId - 1);
    } else {
        // إذا كانت هذه أول آية في السورة، انتقل للسورة السابقة
        prevSurah();
    }
}

// التالي للسورة
function nextSurah() {
    if (state.currentSurahId < appData.surahs.length) {
        loadSurah(state.currentSurahId + 1);
        selectVerse(1);
    }
}

// السابق للسورة
function prevSurah() {
    if (state.currentSurahId > 1) {
        loadSurah(state.currentSurahId - 1);
        selectVerse(1);
    }
}

// تحديث المصحف
function updateMushaf() {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    const verse = surah.verses.find(v => v.id === state.currentVerseId);
    if (!verse) return;
    
    // تحديث صفحة المصحف
    state.currentPage = verse.page;
    elements.currentPage.textContent = state.currentPage;
    elements.totalPages.textContent = "604";
    elements.pageSlider.value = state.currentPage;
    elements.pageJumpInput.value = state.currentPage;
    
    // تحديث صورة المصحف
    const pageNum = state.currentPage.toString().padStart(3, '0');
    elements.mushafImage.src = `images/mushaf/page-${pageNum}.jpg`;
    
    // إنشاء نقاط تفاعلية للآيات
    createVerseHotspots(surah, verse.page);
}

// إنشاء نقاط تفاعلية للآيات على صفحة المصحف
function createVerseHotspots(surah, page) {
    elements.verseHotspots.innerHTML = '';
    
    // تصفية آيات السورة الموجودة في هذه الصفحة
    const pageVerses = surah.verses.filter(v => v.page === page);
    
    // إضافة نقاط تفاعلية (هذه إحداثيات عشوائية كمثال، تحتاج إلى ضبطها يدوياً)
    pageVerses.forEach(verse => {
        const hotspot = document.createElement('div');
        hotspot.className = 'hotspot';
        hotspot.setAttribute('data-verse', verse.id);
        
        // إحداثيات عشوائية (تعدل يدوياً حسب موقع كل آية في الصورة)
        const randomX = 10 + Math.random() * 80;
        const randomY = 10 + Math.random() * 80;
        
        hotspot.style.left = `${randomX}%`;
        hotspot.style.top = `${randomY}%`;
        
        hotspot.addEventListener('click', () => {
            selectVerse(verse.id);
            showVerseModal(verse);
        });
        
        elements.verseHotspots.appendChild(hotspot);
    });
}

// تحديث التفسير
function updateTafseer() {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (!surah) return;
    
    const verse = surah.verses.find(v => v.id === state.currentVerseId);
    if (!verse) return;
    
    elements.tafseerContent.innerHTML = '';
    
    // إنشاء عنصر التفسير
    const tafseerItem = document.createElement('div');
    tafseerItem.className = 'tafseer-item';
    
    const tafseerSourceName = appData.tafseerSources.find(t => t.id === state.currentTafseerSourceId)?.name || 'التفسير الميسر';
    
    tafseerItem.innerHTML = `
        <h4>
            <i class="fas fa-book-open"></i>
            تفسير الآية ${verse.id}
            <span class="verse-ref">${surah.name}:${verse.id}</span>
        </h4>
        <p class="tafseer-text">${verse.tafseer[state.currentTafseerSourceId] || verse.tafseer[1] || 'التفسير غير متوفر لهذه الآية.'}</p>
    `;
    
    elements.tafseerContent.appendChild(tafseerItem);
    
    // تحديث الملاحظات التفسيرية
    updateTafseerNotes();
}

function updateTafseerNotes() {
    const notes = [
        "هذا التفسير مأخوذ من مصادر تفسيرية موثوقة، وتم تبسيط العبارات لتكون مناسبة للقارئ العام.",
        "يرجى الرجوع إلى كتب التفسير المعتمدة للاستزادة والتفصيل.",
        "التفسير الميسر يعتمد على أهم معاني الآيات دون الدخول في التفاصيل الدقيقة للاختلافات التفسيرية."
    ];
    
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    elements.tafseerNotesText.textContent = randomNote;
}

// عرض نافذة منبثقة للآية
function showVerseModal(verse) {
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    
    elements.modalVerseTitle.textContent = `الآية ${verse.id} - سورة ${surah.name}`;
    elements.modalVerseText.textContent = verse.text;
    elements.modalTafseerText.textContent = verse.tafseer[state.currentTafseerSourceId] || verse.tafseer[1] || 'التفسير غير متوفر لهذه الآية.';
    
    elements.verseModal.style.display = 'flex';
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // اختيار سورة
    elements.surahSelector.addEventListener('change', function() {
        if (this.value) {
            loadSurah(parseInt(this.value));
            selectVerse(1);
        }
    });
    
    // اختيار قارئ
    elements.reciterSelector.addEventListener('change', function() {
        state.currentReciterId = parseInt(this.value);
        // في التطبيق الحقيقي، هنا تغيير ملف الصوت حسب القارئ
    });
    
    // اختيار مصدر التفسير
    elements.tafseerSource.addEventListener('change', function() {
        state.currentTafseerSourceId = parseInt(this.value);
        updateTafseer();
    });
    
    // أزرار مشغل الصوت
    elements.playBtn.addEventListener('click', function() {
        if (state.isPlaying) {
            elements.audioPlayer.pause();
            state.isPlaying = false;
            this.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            elements.audioPlayer.play();
            state.isPlaying = true;
            this.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
    
    elements.rewindBtn.addEventListener('click', function() {
        elements.audioPlayer.currentTime = Math.max(0, elements.audioPlayer.currentTime - 10);
    });
    
    elements.forwardBtn.addEventListener('click', function() {
        elements.audioPlayer.currentTime = Math.min(elements.audioPlayer.duration, elements.audioPlayer.currentTime + 10);
    });
    
    elements.muteBtn.addEventListener('click', function() {
        state.isMuted = !state.isMuted;
        elements.audioPlayer.muted = state.isMuted;
        this.innerHTML = state.isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });
    
    elements.volumeSlider.addEventListener('input', function() {
        state.volume = parseFloat(this.value);
        elements.audioPlayer.volume = state.volume;
    });
    
    elements.repeatBtn.addEventListener('click', function() {
        state.repeatMode = !state.repeatMode;
        this.style.color = state.repeatMode ? 'var(--primary-color)' : '';
        this.style.backgroundColor = state.repeatMode ? 'var(--primary-light)' : '';
    });
    
    elements.progressSlider.addEventListener('input', function() {
        const duration = elements.audioPlayer.duration;
        const newTime = (this.value / 100) * duration;
        elements.audioPlayer.currentTime = newTime;
    });
    
    // أزرار التنقل بين السور
    elements.prevSurahBtn.addEventListener('click', prevSurah);
    elements.nextSurahBtn.addEventListener('click', nextSurah);
    
    // أزرار التنقل بين صفحات المصحف
    elements.prevPageBtn.addEventListener('click', function() {
        if (state.currentPage > 1) {
            state.currentPage--;
            updateMushafPage();
        }
    });
    
    elements.nextPageBtn.addEventListener('click', function() {
        if (state.currentPage < 604) {
            state.currentPage++;
            updateMushafPage();
        }
    });
    
    elements.pageSlider.addEventListener('input', function() {
        state.currentPage = parseInt(this.value);
        updateMushafPage();
    });
    
    elements.jumpBtn.addEventListener('click', function() {
        const page = parseInt(elements.pageJumpInput.value);
        if (page >= 1 && page <= 604) {
            state.currentPage = page;
            updateMushafPage();
        }
    });
    
    // النافذة المنبثقة
    elements.modalPlayBtn.addEventListener('click', function() {
        playCurrentVerse();
        elements.verseModal.style.display = 'none';
    });
    
    elements.modalCloseBtn.addEventListener('click', function() {
        elements.verseModal.style.display = 'none';
    });
    
    elements.closeModal.addEventListener('click', function() {
        elements.verseModal.style.display = 'none';
    });
    
    // إغلاق النافذة المنبثقة بالنقر خارجها
    window.addEventListener('click', function(event) {
        if (event.target === elements.verseModal) {
            elements.verseModal.style.display = 'none';
        }
    });
    
    // اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function(event) {
        // مسافة للعب/إيقاف
        if (event.code === 'Space') {
            event.preventDefault();
            elements.playBtn.click();
        }
        
        // السهم الأيمن للتقدم
        if (event.code === 'ArrowRight') {
            event.preventDefault();
            nextVerse();
        }
        
        // السهم الأيسر للتراجع
        if (event.code === 'ArrowLeft') {
            event.preventDefault();
            prevVerse();
        }
        
        // ESC لإغلاق النافذة المنبثقة
        if (event.code === 'Escape') {
            elements.verseModal.style.display = 'none';
        }
    });
}

// تحديث صفحة المصحف
function updateMushafPage() {
    // تحديث رقم الصفحة
    elements.currentPage.textContent = state.currentPage;
    elements.pageSlider.value = state.currentPage;
    elements.pageJumpInput.value = state.currentPage;
    
    // تحديث صورة المصحف
    const pageNum = state.currentPage.toString().padStart(3, '0');
    elements.mushafImage.src = `images/mushaf/page-${pageNum}.jpg`;
    
    // البحث عن أي آية في هذه الصفحة من السورة الحالية
    const surah = appData.surahs.find(s => s.id === state.currentSurahId);
    if (surah) {
        const verseInPage = surah.verses.find(v => v.page === state.currentPage);
        if (verseInPage) {
            state.currentVerseId = verseInPage.id;
            updateCurrentVerseDisplay();
            updateTafseer();
        }
        
        // تحديث النقاط التفاعلية
        createVerseHotspots(surah, state.currentPage);
    }
}