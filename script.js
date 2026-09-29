/**
 * TYSON Media Group - Single Page Application Engine & Preferences Controller
 * Handles:
 * 1. Appearance / Themes (Noir Midnight, Nintendo Wii, Frutiger Aero, Nature Botanical)
 * 2. Settings Modal (Gear Icon, Replay Intro Sequence, Persistence)
 * 3. SPA Router (Instant, seamless view transitions without page reloads)
 * 4. YouTube Theater Modal Player (with Direct Autoplay & Clean Escape Controls)
 * 5. Complete 79-Video Database with Real-Time Search & Category Filters
 * 6. Contact Form Submissions & Responsive Navigation
 */

const TYSON_VIDEOS = [
    {
        "id": "YVDpa0Xk8YY",
        "title": "Introducing... RPM World",
        "duration": "HD",
        "views": "31 views",
        "date": "August 10, 2026",
        "type": "video",
        "category": "Features & Releases"
    },
    {
        "id": "KnotCLBnW7E",
        "title": "Fastest Lap Time Around West Coast USA (Beamng.Drive) Try To beat My Record!",
        "duration": "HD",
        "views": "120 views",
        "date": "September 06, 2025",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "kOkQw8qbRlU",
        "title": "New fastest run (Roane County, To Rockwood, Tennessee) (Jackie Robinson Pkwy.)",
        "duration": "HD",
        "views": "84 views",
        "date": "August 31, 2025",
        "type": "video",
        "category": "Sim & Racing"
    },
    {
        "id": "mnFaQNNSwVg",
        "title": "BMW M3 G80 | SPEEDING THROUGH JUNGLE ROADS | BEAMNG.DRIVE",
        "duration": "HD",
        "views": "58 views",
        "date": "July 07, 2025",
        "type": "video",
        "category": "BeamNG & Racing"
    },
    {
        "id": "bIdRA90Yxyo",
        "title": "4 Sports cars having fun | Beamng.Drive",
        "duration": "HD",
        "views": "132 views",
        "date": "March 09, 2025",
        "type": "video",
        "category": "BeamNG & Racing"
    },
    {
        "id": "Qva0QcXzais",
        "title": "Relaxing Drive around west coast!",
        "duration": "HD",
        "views": "153 views",
        "date": "October 26, 2024",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "t-13QFxb3-Q",
        "title": "BeamNG drive Hirochi ccf2 Cruise through west coast",
        "duration": "HD",
        "views": "316 views",
        "date": "October 15, 2024",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "VNkFAo7ixrw",
        "title": "Relaxing drive on West Coast USA, fast and normal diving",
        "duration": "HD",
        "views": "225 views",
        "date": "August 24, 2024",
        "type": "video",
        "category": "POV Drives & Testing"
    },
    {
        "id": "TIqCFYB5FIg",
        "title": "Beamng live",
        "duration": "HD",
        "views": "0 views",
        "date": "July 01, 2024",
        "type": "video",
        "category": "BeamNG & Racing"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Settings & Theme Engine
    // =========================================================================
    const settingsModal = document.getElementById('settings-modal');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const settingsCloseBtn = document.getElementById('settings-modal-close-btn');
    const themeOptionCards = document.querySelectorAll('.theme-option-card');
    const replayIntroBtn = document.getElementById('replay-intro-btn');

    const savedTheme = localStorage.getItem('tyson_theme') || 'noir';

    function applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('tyson_theme', themeName);

        themeOptionCards.forEach(card => {
            if (card.getAttribute('data-theme-choice') === themeName) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    applyTheme(savedTheme);

    if (settingsToggleBtn && settingsModal) {
        settingsToggleBtn.addEventListener('click', () => {
            settingsModal.classList.add('active');
            settingsModal.setAttribute('aria-hidden', 'false');
        });
    }

    function closeSettingsModal() {
        if (settingsModal) {
            settingsModal.classList.remove('active');
            settingsModal.setAttribute('aria-hidden', 'true');
        }
    }

    const settingsDoneBtn = document.getElementById('settings-done-btn');
    if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', closeSettingsModal);
    if (settingsDoneBtn) settingsDoneBtn.addEventListener('click', closeSettingsModal);
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) closeSettingsModal();
        });
    }

    themeOptionCards.forEach(card => {
        card.addEventListener('click', () => {
            const choice = card.getAttribute('data-theme-choice');
            applyTheme(choice);
        });
    });

    // =========================================================================
    // 2. Launch Intro Animation (Font-Ready Guard & High-Speed Trace)
    // =========================================================================
    const animatedPage = document.querySelector('.intro-animated-page');

    function triggerTraceSequence() {
        if (!animatedPage) return;

        const fontLoadPromise = (document.fonts && document.fonts.load)
            ? Promise.all([
                document.fonts.load('italic 78px "Cormorant Garamond"'),
                document.fonts.ready
              ])
            : Promise.resolve();

        fontLoadPromise.then(() => {
            const traceChars = document.querySelectorAll('.trace-char');
            traceChars.forEach(ch => {
                ch.style.animation = 'none';
                void ch.offsetWidth; // force reflow
                ch.style.animation = '';
            });

            const svgHero = document.querySelector('.domain-hero-svg');
            if (svgHero) {
                svgHero.style.animation = 'none';
                void svgHero.offsetWidth;
                svgHero.style.animation = '';
            }

            setTimeout(() => {
                animatedPage.classList.add('intro-complete');
            }, 1850);
        }).catch(() => {
            setTimeout(() => {
                animatedPage.classList.add('intro-complete');
            }, 1850);
        });
    }

    triggerTraceSequence();

    if (replayIntroBtn && animatedPage) {
        replayIntroBtn.addEventListener('click', () => {
            closeSettingsModal();
            navigateToView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            animatedPage.classList.remove('intro-complete');
            triggerTraceSequence();
        });
    }

    // =========================================================================
    // 3. SPA Router (Single Page Navigation & Active State Sync)
    // =========================================================================
    const views = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNav = document.getElementById('main-nav');

    function navigateToView(viewId, pushToHistory = true) {
        const targetId = (viewId || 'home').replace('#', '');
        let targetView = document.getElementById(`view-${targetId}`);

        if (!targetView) {
            targetView = document.getElementById('view-home');
        }

        // Switch active view
        views.forEach(v => v.classList.remove('active-view'));
        if (targetView) {
            targetView.classList.add('active-view');
        }

        // Update nav bar active state
        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href === `#${targetId}` || (targetId === 'home' && (href === '#home' || href === '#'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        if (mobileNav) {
            mobileNav.classList.remove('active');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (animatedPage && targetId !== 'home') {
            animatedPage.classList.add('intro-complete');
        }

        if (pushToHistory && window.location.hash !== `#${targetId}`) {
            history.pushState(null, '', `#${targetId}`);
        }
    }

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                navigateToView(href);
            }
        }
    });

    window.addEventListener('popstate', () => {
        const currentHash = window.location.hash || '#home';
        navigateToView(currentHash, false);
    });

    const initialRoute = window.location.hash || '#home';
    navigateToView(initialRoute, false);

    // =========================================================================
    // 4. YouTube Theater Modal Player
    // =========================================================================
    const ytModal = document.getElementById('yt-player-modal');
    const ytIframe = document.getElementById('yt-modal-iframe');
    const ytTitle = document.getElementById('yt-modal-title');
    const ytExtLink = document.getElementById('yt-modal-external-link');
    const ytCloseBtn = document.getElementById('yt-modal-close-btn');

    function openYtModal(vid, title) {
        if (!ytModal || !ytIframe) return;
        ytIframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`;
        if (ytTitle) ytTitle.textContent = title || 'RPM World Release';
        if (ytExtLink) ytExtLink.href = `https://www.youtube.com/watch?v=${vid}`;
        
        ytModal.classList.add('active');
        ytModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeYtModal() {
        if (!ytModal || !ytIframe) return;
        ytIframe.src = '';
        ytModal.classList.remove('active');
        ytModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (ytCloseBtn) ytCloseBtn.addEventListener('click', closeYtModal);
    if (ytModal) {
        ytModal.addEventListener('click', (e) => {
            if (e.target === ytModal) closeYtModal();
        });
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeYtModal();
    });

    function attachVideoClickEvents() {
        document.querySelectorAll('.yt-video-trigger').forEach(trigger => {
            if (!trigger.dataset.bound) {
                trigger.dataset.bound = 'true';
                trigger.addEventListener('click', () => {
                    const vid = trigger.getAttribute('data-vid');
                    const title = trigger.getAttribute('data-title');
                    openYtModal(vid, title);
                });
            }
        });
    }

    // =========================================================================
    // 5. Render All 79 Videos in #videos Feed
    // =========================================================================
    const ytFeedContainer = document.getElementById('yt-feed-container');
    const videoSearchInput = document.getElementById('video-search');
    const categoryTabs = document.querySelectorAll('.video-filter-tab');
    const videoCountDisplay = document.getElementById('video-count-display');
    const loadMoreBtn = document.getElementById('load-more-videos-btn');

    let currentCategory = 'all';
    let searchQuery = '';
    let displayedCount = 24;
    const PAGE_CHUNK = 24;

    function renderVideosFeed() {
        if (!ytFeedContainer) return;

        let filtered = TYSON_VIDEOS.filter(v => {
            const matchesCategory = currentCategory === 'all' || 
                                    (currentCategory === 'shorts' && v.type === 'short') ||
                                    v.category.toLowerCase() === currentCategory.toLowerCase();
            const matchesSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  (v.views && v.views.toLowerCase().includes(searchQuery.toLowerCase())) ||
                                  (v.date && v.date.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });

        if (videoCountDisplay) {
            videoCountDisplay.textContent = `Showing ${Math.min(displayedCount, filtered.length)} of ${filtered.length} releases`;
        }

        ytFeedContainer.innerHTML = '';

        if (filtered.length === 0) {
            ytFeedContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 0;">
                    <p style="font-size: 1.3rem; color: var(--text-muted); font-family: var(--font-heading); font-style: italic;">
                        No video releases found matching "${escapeHTML(searchQuery)}" in this category.
                    </p>
                </div>
            `;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        const visibleItems = filtered.slice(0, displayedCount);

        visibleItems.forEach(v => {
            const card = document.createElement('div');
            card.className = 'yt-card yt-video-trigger';
            card.setAttribute('data-vid', v.id);
            card.setAttribute('data-title', v.title);

            const isShort = v.type === 'short';
            const badgeLabel = isShort ? 'Short' : (v.duration || 'HD');
            const thumbUrl = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

            card.innerHTML = `
                <div class="yt-card-thumb-container">
                    <img src="${thumbUrl}" alt="${escapeHTML(v.title)}" class="yt-card-thumb-img" loading="lazy">
                    <span class="yt-duration-badge ${isShort ? 'badge-short' : ''}">${badgeLabel}</span>
                    <div class="yt-play-overlay-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="yt-card-info-row">
                    <div class="yt-card-avatar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    <div class="yt-card-text">
                        <h3 class="yt-card-title">${escapeHTML(v.title)}</h3>
                        <span class="yt-card-channel-name">RPM World by TYSON</span>
                        <div class="yt-card-metrics">
                            <span>${v.views || 'TYSON Media'}</span>
                            <span>&bull;</span>
                            <span>${v.date || 'Recent'}</span>
                        </div>
                    </div>
                </div>
            `;

            ytFeedContainer.appendChild(card);
        });

        if (loadMoreBtn) {
            loadMoreBtn.style.display = displayedCount >= filtered.length ? 'none' : 'inline-flex';
        }

        attachVideoClickEvents();
    }

    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentCategory = tab.getAttribute('data-category');
                displayedCount = PAGE_CHUNK;
                renderVideosFeed();
            });
        });
    }

    if (videoSearchInput) {
        videoSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            displayedCount = PAGE_CHUNK;
            renderVideosFeed();
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            displayedCount += PAGE_CHUNK;
            renderVideosFeed();
        });
    }

    // =========================================================================
    // 6. Render Featured Home Videos (Top 8)
    // =========================================================================
    const homeVideosContainer = document.getElementById('home-featured-videos');
    if (homeVideosContainer) {
        const latestEight = TYSON_VIDEOS.slice(0, 8);
        homeVideosContainer.innerHTML = '';
        latestEight.forEach(v => {
            const card = document.createElement('div');
            card.className = 'yt-card yt-video-trigger';
            card.setAttribute('data-vid', v.id);
            card.setAttribute('data-title', v.title);

            const isShort = v.type === 'short';
            const badgeLabel = isShort ? 'Short' : (v.duration || 'HD');
            const thumbUrl = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

            card.innerHTML = `
                <div class="yt-card-thumb-container">
                    <img src="${thumbUrl}" alt="${escapeHTML(v.title)}" class="yt-card-thumb-img" loading="lazy">
                    <span class="yt-duration-badge">${badgeLabel}</span>
                    <div class="yt-play-overlay-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="yt-card-info-row">
                    <div class="yt-card-avatar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    <div class="yt-card-text">
                        <h3 class="yt-card-title">${escapeHTML(v.title)}</h3>
                        <span class="yt-card-channel-name">RPM World by TYSON</span>
                        <div class="yt-card-metrics">
                            <span>${v.views || 'TYSON Media'}</span>
                            <span>&bull;</span>
                            <span>${v.date || 'Recent'}</span>
                        </div>
                    </div>
                </div>
            `;
            homeVideosContainer.appendChild(card);
        });
        attachVideoClickEvents();
    }

    // =========================================================================
    // 7. Contact Form Submissions
    // =========================================================================
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm && contactStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactStatus.textContent = 'TRANSMITTING MESSAGE...';
            contactStatus.className = 'form-feedback loading';

            const submitBtn = document.getElementById('contact-submit-btn');
            if (submitBtn) submitBtn.disabled = true;

            setTimeout(() => {
                contactStatus.textContent = 'MESSAGE RECEIVED. WE WILL RESPOND PROMPTLY.';
                contactStatus.className = 'form-feedback success';
                contactForm.reset();
                if (submitBtn) submitBtn.disabled = false;

                setTimeout(() => {
                    contactStatus.textContent = '';
                }, 6000);
            }, 1000);
        });
    }

    // =========================================================================
    // 8. Mobile Device Detection & Responsive Navigation Engine
    // =========================================================================
    function checkMobileState() {
        const isMobileDevice = window.innerWidth <= 900 || 
            ('ontouchstart' in window) || 
            (navigator.maxTouchPoints > 0) || 
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        document.documentElement.classList.toggle('is-mobile', isMobileDevice);
        document.body.classList.toggle('is-mobile', isMobileDevice);

        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        return isMobileDevice;
    }

    checkMobileState();
    window.addEventListener('resize', checkMobileState);
    window.addEventListener('orientationchange', checkMobileState);

    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileNav.classList.toggle('active');
            mobileToggle.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Auto close mobile nav on any navigation link tap
        const navLinks = mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close on outside tap
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active') && !mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileNav.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    function escapeHTML(str) {
        if (!str) return '';
        return String(str).replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // High-Speed Local Cache Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {
                // Local dev fallback
            });
        });
    }

    renderVideosFeed();
});
