function generateSlides() {
    const wrapper = document.getElementById('swiper-wrapper-id');
    
    // We already have slides 1, 2, 3 in HTML statically. Wait, I cleared them from HTML in the latest write!
    // Oh, right, I need to generate ALL slides from JS since index.html is empty inside swiper-wrapper.
    
    slidesData.forEach(slide => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `swiper-slide slide-${slide.id}`;
        
        let contentHTML = '';
        
        // Common Header
        contentHTML += `
            <div class="header">
                <div class="logo">DC</div>
                <div class="header-text">
                    <h3>DC Gestão & Performance</h3>
                    <p>${slide.headerBadge || 'ESTRATÉGIA • AQUISIÇÃO • CONVERSÃO'}</p>
                </div>
            </div>
        `;
        
        // Body Content based on type
        contentHTML += `<div class="content-wrapper">`;
        if (slide.eyebrow) contentHTML += `<span class="eyebrow">${slide.eyebrow}</span>`;
        if (slide.title) contentHTML += `<h2 class="animate-title">${slide.title}</h2>`;
        if (slide.desc) contentHTML += `<p class="desc animate-text">${slide.desc}</p>`;

        if (slide.type === 'intro') {
            contentHTML += `
                <div class="main-grid">
                    <div class="left-col">
                        <div class="footer-info animate-text mt-8">
                            ${slide.footerInfo.map(info => `
                                <div class="info-block">
                                    <span class="label">${info.label}</span>
                                    <span class="value">${info.value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="right-col animate-fade-in">
                        ${slide.rightContent}
                    </div>
                </div>
            `;
        } else if (slide.type === 'cards-grid') {
            contentHTML += `
                <div class="cards-grid animate-stagger">
                    ${slide.cards.map(card => `
                        <div class="card glass">
                            <div class="icon">${card.icon}</div>
                            <h4>${card.title}</h4>
                            <p>${card.desc}</p>
                        </div>
                    `).join('')}
                </div>
                ${slide.bottomBox ? `
                <div class="principle-box glass animate-text">
                    <div class="principle-header"><span class="dot"></span> ${slide.bottomBox.title}</div>
                    <p>${slide.bottomBox.content}</p>
                </div>
                ` : ''}
            `;
        } else if (slide.type === 'timeline') {
            contentHTML += `
                <div class="timeline-grid animate-stagger">
                    ${slide.timeline.map((step, index) => `
                        <div class="timeline-step">
                            <span class="step-num">${step.num}</span>
                            <h4>${step.title}</h4>
                            <p>${step.desc}</p>
                        </div>
                        ${index < slide.timeline.length - 1 ? '<div class="timeline-arrow">→</div>' : ''}
                    `).join('')}
                </div>
            `;
        } else if (slide.type === 'frentes-grid') {
             contentHTML += `
                <div class="frentes-container animate-stagger">
                    ${slide.frentes.map(frente => `
                        <div class="frente-card glass">
                            <div class="f-num">${frente.num}</div>
                            <h4>${frente.title}</h4>
                            <p>${frente.subtitle}</p>
                            <div class="f-entrega"><strong>Entrega:</strong> ${frente.entrega}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="frentes-bottom glass animate-text">${slide.bottomBox.content}</div>
             `;
        } else if (slide.type === 'cards-grid-6') {
            contentHTML += `
                <div class="cards-grid-6 animate-stagger">
                    ${slide.cards.map(card => `
                        <div class="card glass">
                            <div class="icon">${card.icon}</div>
                            <h4>${card.title}</h4>
                            <p>${card.desc}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (slide.type === 'split-content') {
            contentHTML += `
                <div class="split-content-wrapper">
                    <div class="split-left animate-stagger">
                        <div class="split-header"><span class="dot"></span> ${slide.leftTitle}</div>
                        <div class="split-list">
                            ${slide.leftList.map(item => `
                                <div class="split-item">
                                    <div class="split-big">${item.big}</div>
                                    <div class="split-text">
                                        <h4>${item.title}</h4>
                                        <p>${item.desc}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="split-right cards-2x2 animate-stagger">
                        ${slide.rightCards.map(card => `
                            <div class="card glass">
                                <div class="icon text-neon">${card.icon}</div>
                                <h4>${card.title}</h4>
                                <p>${card.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="principle-box glass animate-text mt-6">
                    <p>${slide.bottomBox.content}</p>
                </div>
            `;
        } else if (slide.type === 'specialist') {
            contentHTML += `
                <div class="specialist-wrapper">
                    <div class="spec-left glass animate-fade-in">
                        <div class="spec-avatar">LF</div>
                        <h3 class="spec-name">${slide.specialistName}</h3>
                        <p class="spec-role text-neon">${slide.specialistRole}</p>
                        <p class="spec-desc mt-6">${slide.specialistDesc}</p>
                    </div>
                    <div class="spec-right cards-2x2 animate-stagger">
                        ${slide.stats.map(stat => `
                            <div class="card glass">
                                <h3 class="stat-big">${stat.title}</h3>
                                <p class="stat-sub text-neon">${stat.subtitle}</p>
                                <p>${stat.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (slide.type === 'funnel-metrics') {
            contentHTML += `
                <div class="funnel-steps animate-stagger">
                    ${slide.metrics.map((m, i) => `
                        <div class="funnel-step glass">
                            <h4>${m.title}</h4>
                            <p>${m.sub}</p>
                        </div>
                        ${i < slide.metrics.length - 1 ? '<div class="f-arrow">→</div>' : ''}
                    `).join('')}
                </div>
                <div class="kpi-grid mt-6 animate-stagger">
                    ${slide.kpis.map(kpi => `
                        <div class="kpi-card glass">
                            <h4>${kpi.title}</h4>
                            <p>${kpi.desc}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="principle-box glass animate-text mt-6">
                    <p>${slide.bottomBox.content}</p>
                </div>
            `;
        } else if (slide.type === 'pricing') {
            contentHTML += `
                <div class="pricing-wrapper">
                    <div class="pricing-left animate-stagger">
                        <div class="p-header"><span class="dot"></span> ${slide.leftTitle}</div>
                        <p class="p-desc">${slide.leftDesc}</p>
                        <ul class="p-list">
                            ${slide.prices.map(p => `
                                <li><span>${p.item}</span> <strong>${p.value}</strong></li>
                            `).join('')}
                        </ul>
                        <div class="p-total">
                            <span>Total estimado</span>
                            <strong class="text-yellow">${slide.totalFragmented}</strong>
                        </div>
                    </div>
                    <div class="pricing-right animate-stagger">
                        <div class="p-header"><span class="dot"></span> ${slide.rightTitle}</div>
                        <div class="main-price">${slide.mainPrice}</div>
                        <p class="main-p-desc">${slide.mainPriceDesc}</p>
                        <div class="savings-grid">
                            ${slide.savingBlocks.map(b => `
                                <div class="saving-card glass">
                                    <div class="s-big text-neon">${b.big}</div>
                                    <p>${b.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (slide.type === 'phases') {
            contentHTML += `
                <div class="phases-grid animate-stagger">
                    ${slide.phases.map(phase => `
                        <div class="phase-card glass">
                            <h4 class="text-neon">${phase.title}</h4>
                            <h3 class="mb-4">${phase.subtitle}</h3>
                            <ul class="phase-list">
                                ${phase.items.map(item => `
                                    <li><span class="dot"></span> ${item}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                <div class="phases-bottom animate-fade-in mt-6">
                    <div class="pb-left glass">
                        <div class="p-header"><span class="dot"></span> ${slide.bottomLeft.title}</div>
                        <h3 class="pb-text">${slide.bottomLeft.content}</h3>
                    </div>
                    <div class="pb-center">
                        <div class="dc-circle">DC<br><span class="tiny">GESTÃO &<br>PERFORMANCE</span></div>
                    </div>
                    <div class="pb-right glass">
                        <div class="p-header"><span class="dot"></span> ${slide.bottomRight.title}</div>
                        <p>${slide.bottomRight.content}</p>
                    </div>
                </div>
            `;
        }

        contentHTML += `</div>`; // Close content-wrapper
        
        // Common Footer
        contentHTML += `
            <div class="slide-footer">
                <span>${slide.footerText}</span>
                <span>${slide.id.toString().padStart(2, '0')}</span>
            </div>
        `;
        
        slideDiv.innerHTML = `<div class="slide-content">${contentHTML}</div>`;
        wrapper.appendChild(slideDiv);
    });
}

function initSwiper() {
    const swiper = new Swiper('.mySwiper', {
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        },
        speed: 800,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                animateSlide(this.slides[this.activeIndex]);
            },
            slideChangeTransitionStart: function () {
                // Reset animations for all slides
                this.slides.forEach(slide => {
                    resetAnimations(slide);
                });
                // Animate current slide
                animateSlide(this.slides[this.activeIndex]);
            }
        }
    });
}

function resetAnimations(slide) {
    const titles = slide.querySelectorAll('.animate-title');
    const texts = slide.querySelectorAll('.animate-text');
    const staggers = slide.querySelectorAll('.animate-stagger > *');
    const fades = slide.querySelectorAll('.animate-fade-in');

    gsap.set([titles, texts, fades], { opacity: 0, y: 30 });
    gsap.set(staggers, { opacity: 0, y: 30, scale: 0.95 });
}

function animateSlide(slide) {
    const titles = slide.querySelectorAll('.animate-title');
    const texts = slide.querySelectorAll('.animate-text');
    const staggers = slide.querySelectorAll('.animate-stagger > *');
    const fades = slide.querySelectorAll('.animate-fade-in');

    const tl = gsap.timeline();

    if(titles.length) {
        tl.to(titles, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2);
    }
    if(texts.length) {
        tl.to(texts, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 0.4);
    }
    if(staggers.length) {
        tl.to(staggers, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", stagger: 0.08 }, 0.6);
    }
    if(fades.length) {
        tl.to(fades, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.8);
    }
}

// Scale perfectly to 1920x1080 maintaining aspect ratio
function updateScale() {
    const container = document.querySelector('.presentation-container');
    const targetWidth = 1920;
    const targetHeight = 1080;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    const scale = Math.min(scaleX, scaleY);
    
    container.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

// Run
document.addEventListener('DOMContentLoaded', () => {
    generateSlides();
    updateScale();
    window.addEventListener('resize', updateScale);
    
    // Initial reset before swiper kicks in
    document.querySelectorAll('.swiper-slide').forEach(resetAnimations);
    
    // Slight delay to ensure DOM is ready
    setTimeout(() => {
        initSwiper();
    }, 100);
});
