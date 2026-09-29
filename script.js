// ==========================================
// LESSON DATA (Same as before, kept for context)
// ==========================================

const lesson = {
    title: "The Garden Party",
    author: "Katherine Mansfield",
    pages: [
        {
            pageNum: 51,
            content: [
                { type: "heading", text: "About the Author :" },
                { type: "paragraph", en: "Katherine Mansfield, (1888-1923) originally named Kathleen Mansfield Murry was a celebrated writer across the world and an important figure of the Modernist Movement. Mansfield wrote short stories and poetry and used a variation of her own name, Katherine Mansfield. Her literary oeuvre explored the idea of anxiety, sexualism and existentialism. She also dwelt on the fragility and vulnerability of relationships, the complexities and insensitivities of the rising middle classes, the social consequences of war, and overwhelmingly the attempt to extract whatever beauty and vitality one can from mundane and increasingly difficult experience. At the age of 19 she shifted from New Zealand to England. She became friends with noted writers of the Bloomsbury Group - D.H. Lawrence and Virginia Woolf. Her brother, Leslie's death during training for service in World War I left an indelible mark on her psyche which found its way in her writings as well. Mansfield's numerous short stories immensely influenced the genre of modernist literature in the 20th century.", bn: "ক্যাথরিন ম্যান্সফিল্ড (১৮৮৮-১৯২৩) মূলত ক্যাথলিন ম্যান্সফিল্ড মারে নামে পরিচিত ছিলেন। তিনি একজন বিখ্যাত লেখিকা এবং মডার্নিস্ট মুভমেন্টের একজন গুরুত্বপূর্ণ ব্যক্তিত্ব ছিলেন। তিনি ছোটগল্প ও কবিতা লিখতেন এবং নিজের নামের একটি ভিন্ন রূপ ক্যাথরিন ম্যান্সফিল্ড ব্যবহার করতেন। তাঁর সাহিত্যকর্মে উদ্বেগ, যৌনতা এবং অস্তিত্ববাদের ধারণা অন্বেষণ করা হয়েছে। তিনি সম্পর্কের ভঙ্গুরতা, উদীয়মান মধ্যবিত্ত শ্রেণির জটিলতা ও সংবেদনশীলতা, যুদ্ধের সামাজিক পরিণতি এবং কঠিন অভিজ্ঞতা থেকে সৌন্দর্য ও প্রাণশক্তি আহরণের প্রচেষ্টা নিয়ে লিখেছেন। ১৯ বছর বয়সে তিনি নিউজিল্যান্ড থেকে ইংল্যান্ডে চলে যান। তিনি ব্লুমসবারি গ্রুপের ডি.এইচ. লরেন্স এবং ভার্জিনিয়া উলফের মতো বিখ্যাত লেখকদের বন্ধু হয়ে ওঠেন। প্রথম বিশ্বযুদ্ধে প্রশিক্ষণকালে তাঁর ভাই লেসলির মৃত্যু তাঁর মনে একটি indelible ছাপ ফেলে। তাঁর অসংখ্য ছোটগল্প বিংশ শতাব্দীর আধুনিকতাবাদী সাহিত্যের ধারাকে ব্যাপকভাবে প্রভাবিত করেছিল।" },
                { type: "heading", text: "About the Text :" },
                { type: "paragraph", en: "The Garden Party is a short story, first published in three parts in the Saturday Westminster Gazette on 4 and 11 February 1922, and the Weekly Westminster Gazette on 18 February 1922. It later appeared in The Garden Party and Other Stories. Its luxurious setting is based on Mansfield's childhood home in New Zealand. Mansfield explores the themes of a) class consciousness, b) illusion versus reality, c) sensitivity and insensitivity, d) death and life, and e) loss of innocence. The author emphasises the nuances of empathy and understanding while deliberating over the insensitivities surrounding the rising middle classes and the social consequences of war. The story centres on Laura Sheridan's response to the accidental death of a neighbourhood workman. The story was widely appreciated for Mansfield's stream of consciousness and symbolic narrative style.", bn: "দ্য গার্ডেন পার্টি একটি ছোটগল্প, যা প্রথমে ১৯২২ সালের ৪ ও ১১ ফেব্রুয়ারি স্যাটারডে ওয়েস্টমিনস্টার গেজেটে এবং ১৮ ফেব্রুয়ারি উইকলি ওয়েস্টমিনস্টার গেজেটে তিনটি অংশে প্রকাশিত হয়। পরে এটি দ্য গার্ডেন পার্টি অ্যান্ড আদার স্টোরিজ-এ প্রকাশিত হয়। এর বিলাসবহুল পটভূমি ম্যান্সফিল্ডের নিউজিল্যান্ডের শৈশবের বাড়ির উপর ভিত্তি করে তৈরি। ম্যান্সফিল্ড এখানে শ্রেণীচেতনা, ভ্রম বনাম বাস্তবতা, সংবেদনশীলতা ও অসংবেদনশীলতা, মৃত্যু ও জীবন এবং innocence হারানোর মতো বিষয়গুলি অন্বেষণ করেছেন। লেখক সহানুভূতি ও বোঝাপড়ার সূক্ষ্মতা এবং উদীয়মান মধ্যবিত্তের অসংবেদনশীলতার উপর জোর দিয়েছেন। গল্পটি লরা শেরিডানের প্রতিক্রিয়াকে কেন্দ্র করে গড়ে উঠেছে।" }
            ]
        },
        // ... (Rest of the pages data remains exactly the same as the previous script.js) ...
        // To save space, I have omitted the repeated data blocks here. 
        // Please keep all the page data from your previous script.js file intact.
    ],
    // ... (Rest of the vocabulary, characters, themes, symbols, saqs, broadQuestions data remains the same) ...
    // Keep all your existing data objects here.
};

// ==========================================
// APP LOGIC
// ==========================================

let currentPageIndex = 0;
let langMode = 'both';
let fontSize = 17;
let lineHeight = 1.7;

// DOM Elements
const screens = document.querySelectorAll('.screen');
const navLinks = document.querySelectorAll('.nav-link, .menu-card');
const pageIndicator = document.getElementById('page-indicator');
const readerContent = document.getElementById('reader-content');
const wordModal = document.getElementById('word-modal');
const closeModal = document.getElementById('close-modal');
const navOverlay = document.getElementById('nav-overlay');
const menuBtn = document.getElementById('menu-btn');

// Initialize App
function initApp() {
    loadSettings();
    updateReader();
    renderVocabList();
    renderCharacters();
    renderThemes();
    renderSymbols();
    renderSAQs();
    renderBroadQuestions();
    renderRevision();
    updateProgressUI();

    if (lesson.pages.length > 0) {
        pageIndicator.innerText = `Page ${lesson.pages[currentPageIndex].pageNum} / 66`;
    }

    // Event Listeners
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));
    document.getElementById('lang-toggle').addEventListener('change', (e) => {
        langMode = e.target.value;
        updateReader();
    });
    document.getElementById('font-increase').addEventListener('click', () => adjustFont(1));
    document.getElementById('font-decrease').addEventListener('click', () => adjustFont(-1));
    document.getElementById('line-spacing').addEventListener('click', toggleLineSpacing);
    document.getElementById('bookmark-page-btn').addEventListener('click', bookmarkPage);
    document.getElementById('tts-btn').addEventListener('click', toggleTTS);
    document.getElementById('vocab-search').addEventListener('input', searchVocab);

    // Menu Navigation
    menuBtn.addEventListener('click', () => navOverlay.classList.remove('hidden'));
    document.querySelector('.close-overlay').addEventListener('click', () => navOverlay.classList.add('hidden'));

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            if (target) {
                showScreen(target);
                navOverlay.classList.add('hidden');
            }
        });
    });

    // Modal Close
    closeModal.addEventListener('click', () => wordModal.classList.add('hidden'));
    wordModal.addEventListener('click', (e) => {
        if (e.target === wordModal) wordModal.classList.add('hidden');
    });

    // Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
    }

    // Initialize Voice Selector
    initVoiceSelector();
}

// Screen Navigation
function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === screenId) {
            screen.classList.add('active');
        }
    });
}

// Page Navigation
function changePage(direction) {
    const newIndex = currentPageIndex + direction;
    if (newIndex >= 0 && newIndex < lesson.pages.length) {
        currentPageIndex = newIndex;
        updateReader();
        trackProgress('reading');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update Reader Content
function updateReader() {
    const page = lesson.pages[currentPageIndex];
    if (!page) return;

    pageIndicator.innerText = `Page ${page.pageNum} / 66`;

    let html = '';
    page.content.forEach(item => {
        if (item.type === 'heading') {
            html += `<h3 class="reader-heading">${item.text}</h3>`;
        } else if (item.type === 'subheading') {
            html += `<h4 class="reader-subheading">${item.text}</h4>`;
        } else if (item.type === 'paragraph') {
            const enText = processText(item.en);
            const bnText = item.bn ? `<div class="bengali-text">${item.bn}</div>` : '';
            if (langMode === 'en') {
                html += `<p class="en-text">${enText}</p>`;
            } else if (langMode === 'bn') {
                html += bnText;
            } else {
                html += `<p class="en-text">${enText}</p>${bnText}`;
            }
        } else if (item.type === 'dialogue') {
            const enText = processText(item.en);
            const bnText = item.bn ? `<div class="bengali-text">${item.bn}</div>` : '';
            if (langMode === 'en') {
                html += `<p class="en-text dialogue"><strong>${item.speaker}:</strong> ${enText}</p>`;
            } else if (langMode === 'bn') {
                html += bnText;
            } else {
                html += `<p class="en-text dialogue"><strong>${item.speaker}:</strong> ${enText}</p>${bnText}`;
            }
        }
    });

    if (page.footnotes && page.footnotes.length > 0) {
        html += `<div class="footnotes-section"><hr><h4>Footnotes</h4>`;
        page.footnotes.forEach(fn => {
            html += `<p class="footnote">${fn}</p>`;
        });
        html += `</div>`;
    }

    readerContent.innerHTML = html;
    readerContent.style.fontSize = fontSize + 'px';
    readerContent.style.lineHeight = lineHeight;

    attachWordClickListeners();
}

// Process text to make words clickable
function processText(text) {
    return text.replace(/([a-zA-Z']+)/g, '<span class="word-clickable" data-word="$1">$1</span>');
}

// Attach click listeners to all clickable words
function attachWordClickListeners() {
    document.querySelectorAll('.word-clickable').forEach(span => {
        span.addEventListener('click', function(e) {
            e.stopPropagation();
            const word = this.getAttribute('data-word').toLowerCase();
            showWordMeaning(word);
        });
    });
}

// Show Word Meaning Modal
function showWordMeaning(word) {
    const entry = lesson.vocabulary.find(v => v.word.toLowerCase() === word);
    if (entry) {
        document.getElementById('modal-word').innerText = entry.word;
        document.getElementById('modal-bengali').innerText = entry.bengali;
        document.getElementById('modal-pron').innerText = entry.pronunciation;
        document.getElementById('modal-pos').innerText = entry.partOfSpeech;
        document.getElementById('modal-simple').innerText = entry.simpleMeaning;
        document.getElementById('modal-context').innerText = entry.contextualMeaning || 'Contextual meaning not available.';
    } else {
        document.getElementById('modal-word').innerText = word;
        document.getElementById('modal-bengali').innerText = 'অর্থ এখনও পাওয়া যায়নি';
        document.getElementById('modal-pron').innerText = '---';
        document.getElementById('modal-pos').innerText = '---';
        document.getElementById('modal-simple').innerText = 'Meaning not available yet.';
        document.getElementById('modal-context').innerText = 'Try searching in the vocabulary section for known words.';
    }
    wordModal.classList.remove('hidden');
    trackProgress('word');
}

// Font adjustment
function adjustFont(change) {
    fontSize += change;
    if (fontSize < 14) fontSize = 14;
    if (fontSize > 24) fontSize = 24;
    readerContent.style.fontSize = fontSize + 'px';
    saveSettings();
}

// Line spacing toggle
function toggleLineSpacing() {
    lineHeight = lineHeight === 1.7 ? 2.0 : 1.7;
    readerContent.style.lineHeight = lineHeight;
    saveSettings();
}

// Search Vocabulary
function searchVocab(e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#vocab-list .list-item');
    items.forEach(item => {
        const word = item.querySelector('h3').innerText.toLowerCase();
        item.style.display = word.includes(query) ? 'block' : 'none';
    });
}

// Render Functions
function renderVocabList() {
    const container = document.getElementById('vocab-list');
    container.innerHTML = '';
    lesson.vocabulary.sort((a,b) => a.word.localeCompare(b.word)).forEach(v => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <h3>${v.word}</h3>
            <p class="bn-text">${v.bengali}</p>
            <p><strong>Pron:</strong> ${v.pronunciation} | <strong>POS:</strong> ${v.partOfSpeech}</p>
            <p><strong>Meaning:</strong> ${v.simpleMeaning}</p>
            <p><strong>Context:</strong> ${v.contextualMeaning || ''}</p>
        `;
        container.appendChild(div);
    });
}

function renderCharacters() {
    const container = document.getElementById('characters-list');
    container.innerHTML = '';
    lesson.characters.forEach(c => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<h3>${c.name}</h3><p>${c.desc}</p><p class="bn-text">${c.bn}</p>`;
        container.appendChild(div);
    });
}

function renderThemes() {
    const container = document.getElementById('themes-list');
    container.innerHTML = '';
    lesson.themes.forEach(t => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<h3>${t.name}</h3><p>${t.desc}</p><p class="bn-text">${t.bn}</p>`;
        container.appendChild(div);
    });
}

function renderSymbols() {
    const container = document.getElementById('symbols-list');
    container.innerHTML = '';
    lesson.symbols.forEach(s => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<h3>${s.name}</h3><p><strong>Meaning:</strong> ${s.meaning}</p><p class="bn-text">${s.bn}</p><p><strong>Incident:</strong> ${s.incident}</p>`;
        container.appendChild(div);
    });
}

function renderSAQs() {
    const container = document.getElementById('saq-list');
    container.innerHTML = '';
    lesson.saqs.forEach((saq, index) => {
        const div = document.createElement('div');
        div.className = 'list-item saq-item';
        div.setAttribute('data-type', 'saq');
        let labelHtml = `<span class="q-label">${saq.label}</span>`;
        if (saq.important) labelHtml += ` <span class="q-important">⭐ Important</span>`;
        div.innerHTML = `
            <div class="q-header">${labelHtml}</div>
            <h3>Q${index + 1}: ${saq.q}</h3>
            <div class="answer-box">
                <p><strong>Answer:</strong> ${saq.ans}</p>
                <p class="bn-text"><strong>বাংলা অর্থ:</strong> ${saq.bn}</p>
                <p><strong>Key Points:</strong> ${saq.keyPoints.join(', ')}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderBroadQuestions() {
    const container = document.getElementById('broad-list');
    container.innerHTML = '';
    lesson.broadQuestions.forEach((bq, index) => {
        const div = document.createElement('div');
        div.className = 'list-item broad-item';
        div.setAttribute('data-type', 'broad');
        let labelHtml = `<span class="q-label">${bq.label}</span>`;
        if (bq.important) labelHtml += ` <span class="q-important">⭐ Important</span>`;
        div.innerHTML = `
            <div class="q-header">${labelHtml}</div>
            <h3>Q${index + 1}: ${bq.q}</h3>
            <div class="answer-box">
                <p><strong>Introduction:</strong> ${bq.intro}</p>
                <p><strong>Main Discussion:</strong> ${bq.main}</p>
                <p><strong>Textual Reference:</strong> ${bq.textual}</p>
                <p><strong>Conclusion:</strong> ${bq.conclusion}</p>
                <p class="bn-text"><strong>বাংলা ব্যাখ্যা:</strong> ${bq.bn}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderRevision() {
    const container = document.getElementById('revision-content');
    container.innerHTML = `
        <p><strong>Author:</strong> Katherine Mansfield</p>
        <p><strong>Story:</strong> The Garden Party</p>
        <p><strong>Main Character:</strong> Laura Sheridan</p>
        <p><strong>Main Conflict:</strong> The contrast between the Sheridans' garden-party celebration and the death of a working-class neighbour.</p>
        <hr>
        <h3>Themes:</h3>
        <ul><li>Class consciousness</li><li>Sensitivity vs Insensitivity</li><li>Illusion vs Reality</li><li>Life and Death</li><li>Loss of Innocence</li></ul>
        <hr>
        <h3>Important Symbols:</h3>
        <ul><li>Garden</li><li>Hat</li><li>Lilies</li><li>Basket</li><li>Road</li><li>Cottages</li></ul>
        <hr>
        <h3>Ending:</h3>
        <p>Laura's encounter with the dead man changes her understanding of life, death and human experience.</p>
    `;
}

// ==========================================
// UPDATED TTS ENGINE (HUMAN VOICE, NO BD)
// ==========================================

let ttsUtterance = null;
let isSpeaking = false;
let voices = [];
let selectedVoice = null;

// Populate Voice Selector
function initVoiceSelector() {
    // We add a voice dropdown to the toolbar dynamically if it doesn't exist
    const toolbar = document.querySelector('.reader-controls');
    if (!document.getElementById('voice-select')) {
        const select = document.createElement('select');
        select.id = 'voice-select';
        select.style.maxWidth = '120px';
        select.innerHTML = '<option value="">Default Voice</option>';
        toolbar.insertBefore(select, document.getElementById('tts-btn'));
        
        select.addEventListener('change', (e) => {
            const voiceName = e.target.value;
            selectedVoice = voices.find(v => v.name === voiceName) || null;
        });
    }
    
    // Load voices
    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        const select = document.getElementById('voice-select');
        select.innerHTML = '<option value="">Default Voice</option>';
        
        // Filter out Bangladeshi voices (bn-BD) and prioritize Indian (bn-IN, en-IN)
        const filteredVoices = voices.filter(v => {
            const lang = v.lang.toLowerCase();
            // Explicitly exclude Bangladeshi Bengali
            if (lang.includes('bn-bd')) return false;
            // Keep Indian Bengali, Indian English, and generic English
            return lang.includes('bn-in') || lang.includes('en-in') || lang.includes('en-gb') || lang.includes('en-us') || lang.includes('bn');
        });

        // Sort: Indian Bengali first, then Indian English, then others
        filteredVoices.sort((a, b) => {
            const aLang = a.lang.toLowerCase();
            const bLang = b.lang.toLowerCase();
            const aIsBnIn = aLang.includes('bn-in');
            const bIsBnIn = bLang.includes('bn-in');
            if (aIsBnIn && !bIsBnIn) return -1;
            if (!aIsBnIn && bIsBnIn) return 1;
            const aIsEnIn = aLang.includes('en-in');
            const bIsEnIn = bLang.includes('en-in');
            if (aIsEnIn && !bIsEnIn) return -1;
            if (!aIsEnIn && bIsEnIn) return 1;
            return 0;
        });

        filteredVoices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            select.appendChild(option);
        });

        // Auto-select an Indian Bengali voice if available
        if (!selectedVoice) {
            const defaultBnIn = filteredVoices.find(v => v.lang.toLowerCase().includes('bn-in'));
            if (defaultBnIn) {
                selectedVoice = defaultBnIn;
                select.value = defaultBnIn.name;
            }
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
}

// Toggle TTS
function toggleTTS() {
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        document.getElementById('tts-btn').innerText = '▶ Read';
        return;
    }

    const page = lesson.pages[currentPageIndex];
    if (!page) return;

    let textToRead = "";
    page.content.forEach(item => {
        if (item.type === 'paragraph' || item.type === 'dialogue') {
            if (langMode === 'en' || langMode === 'both') textToRead += item.en + " ";
            if (langMode === 'bn' || langMode === 'both') textToRead += (item.bn || "") + " ";
        }
    });

    if (!textToRead) return;

    // Use a single utterance if a voice is selected, 
    // or split if we need to force mixed voices.
    // For simplicity, we read the whole block with the chosen voice.
    ttsUtterance = new SpeechSynthesisUtterance(textToRead);
    
    if (selectedVoice) {
        ttsUtterance.voice = selectedVoice;
        ttsUtterance.lang = selectedVoice.lang;
    } else {
        // Fallback: Try to find an Indian English voice for English text
        const fallbackVoice = voices.find(v => v.lang.includes('en-IN')) || voices.find(v => v.lang.includes('en-GB'));
        if (fallbackVoice) {
            ttsUtterance.voice = fallbackVoice;
        }
    }

    ttsUtterance.rate = 0.9; // Slightly slower for learners
    ttsUtterance.pitch = 1.0;
    
    ttsUtterance.onend = () => {
        isSpeaking = false;
        document.getElementById('tts-btn').innerText = '▶ Read';
    };
    
    ttsUtterance.onerror = (e) => {
        console.error("TTS Error:", e);
        isSpeaking = false;
        document.getElementById('tts-btn').innerText = '▶ Read';
    };

    window.speechSynthesis.speak(ttsUtterance);
    isSpeaking = true;
    document.getElementById('tts-btn').innerText = '⏸ Pause';
}

// ==========================================
// LOCAL STORAGE & BOOKMARKS
// ==========================================

function saveSettings() {
    const settings = { fontSize, lineHeight, langMode };
    localStorage.setItem('gardenPartySettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('gardenPartySettings');
    if (saved) {
        const settings = JSON.parse(saved);
        fontSize = settings.fontSize || 17;
        lineHeight = settings.lineHeight || 1.7;
        langMode = settings.langMode || 'both';
        document.getElementById('lang-toggle').value = langMode;
    }
}

function trackProgress(type) {
    let progress = JSON.parse(localStorage.getItem('gardenPartyProgress')) || { pagesRead: [], wordsExplored: 0, saqsStudied: 0, broadStudied: 0 };
    if (type === 'reading') {
        if (!progress.pagesRead.includes(currentPageIndex)) progress.pagesRead.push(currentPageIndex);
    } else if (type === 'word') progress.wordsExplored++;
    else if (type === 'saq') progress.saqsStudied++;
    else if (type === 'broad') progress.broadStudied++;
    localStorage.setItem('gardenPartyProgress', JSON.stringify(progress));
    updateProgressUI();
}

function updateProgressUI() {
    const progress = JSON.parse(localStorage.getItem('gardenPartyProgress')) || { pagesRead: [], wordsExplored: 0, saqsStudied: 0, broadStudied: 0 };
    const totalPages = lesson.pages.length;
    const readPercent = Math.round((progress.pagesRead.length / totalPages) * 100);
    document.getElementById('prog-reading').innerText = readPercent + '%';
    document.getElementById('prog-bar').style.width = readPercent + '%';
    document.getElementById('prog-words').innerText = progress.wordsExplored;
    document.getElementById('prog-saq').innerText = progress.saqsStudied;
    document.getElementById('prog-broad').innerText = progress.broadStudied;
}

function bookmarkPage() {
    let bookmarks = JSON.parse(localStorage.getItem('gardenPartyBookmarks')) || [];
    const pageNum = lesson.pages[currentPageIndex].pageNum;
    if (!bookmarks.includes(pageNum)) {
        bookmarks.push(pageNum);
        localStorage.setItem('gardenPartyBookmarks', JSON.stringify(bookmarks));
        alert('Page ' + pageNum + ' bookmarked!');
    } else {
        alert('Page already bookmarked.');
    }
    renderBookmarks();
}

function renderBookmarks() {
    const container = document.getElementById('bookmarks-list');
    const bookmarks = JSON.parse(localStorage.getItem('gardenPartyBookmarks')) || [];
    if (bookmarks.length === 0) {
        container.innerHTML = '<p class="empty-msg">No bookmarks yet. Tap the 🔖 icon while reading.</p>';
        return;
    }
    container.innerHTML = '';
    bookmarks.sort((a,b) => a - b).forEach(pageNum => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `<p>📖 Page ${pageNum}</p>`;
        div.style.cursor = 'pointer';
        div.addEventListener('click', () => {
            const index = lesson.pages.findIndex(p => p.pageNum === pageNum);
            if (index !== -1) {
                currentPageIndex = index;
                updateReader();
                showScreen('reader-screen');
            }
        });
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    renderBookmarks();
});
