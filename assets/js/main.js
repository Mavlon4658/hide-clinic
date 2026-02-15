const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: /^\+\d*$/,
            lazy: true,
            prepare: (str, masked) => {
                if (!masked.value && /\d/.test(str)) {
                    return '+' + str;
                }
                return str;
            }
        })
    });
}

const swiper = new Swiper('.swiper-examples', {
    slidesPerView: 1,
    spaceBetween: -94,
    initialSlide: 3,
    speed: 400,
    loop: true,
    loopedSlides: 6,
    loopAdditionalSlides: 6,
    navigation: {
        nextEl: '.experience .swp-navigation .next-btn',
        prevEl: '.experience .swp-navigation .prev-btn',
    },
    pagination: {
        el: '.experience .swp-navigation .swp-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            const currentIndex = this.activeIndex;
            const prevPrevIndex = (currentIndex - 2 + this.slides.length) % this.slides.length;
            const nextNextIndex = (currentIndex + 2) % this.slides.length;

            this.slides.forEach((slide, index) => {
                slide.classList.remove('swiper-slide-prev-prev', 'swiper-slide-next-next');

                if (index === prevPrevIndex) {
                    slide.classList.add('swiper-slide-prev-prev');
                }
                if (index === nextNextIndex) {
                    slide.classList.add('swiper-slide-next-next');
                }
            });
        }
    }
});

const examplesSlider = document.querySelector('.examples__slider')
const examplesSliderLine = document.querySelector('.examples__slider-line')
const examplesSlide = document.querySelectorAll('.examples__slide')
const examplesSlides = document.querySelectorAll('.examples__slider .examples__slide')
const examplesSlideBigValue = document.querySelector('.examples__slide-big .examples__slide-head-value')
const examplesSlideBigText = document.querySelector('.examples__slide-big .examples__slide-head-text')
const examplesSlideBigImg = document.querySelector('.examples__slide-big .examples__slide-img')

function removeSlider() {
    if (window.innerWidth > 768) {
        examplesSlider.classList.add('swiper-examples')
        examplesSliderLine.classList.add('swiper-wrapper')
        examplesSlide.forEach(item => {
            item.classList.add('swiper-slide')
        })
    }
}

removeSlider()

window.addEventListener('resize', () => {
    removeSlider()
})

const experienceMainSwp = new Swiper('.experience-main .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    allowTouchMove: false,
})

const experienceList = document.querySelectorAll('.experience-list__item')
experienceList.forEach((btn, btnIdx) => {
    btn.onclick = () => {
        experienceMainSwp.slideTo(btnIdx);
        experienceList.forEach((el, elIdx) => {
            if (elIdx == btnIdx) {
                el.classList.add('active');
            } else {
                el.classList.remove('active')
            }
        })
    }
})

// Review slider
const reviewSwp = new Swiper('.review-swp', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        1200: {
            spaceBetween: 10,
            slidesPerView: 3,
            loop: false
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2,
            loop: true,
        },
    },
    navigation: {
        nextEl: '.review .swp-navigation .next-btn',
        prevEl: '.review .swp-navigation .prev-btn',
    },
    pagination: {
        el: '.review .swp-navigation .swp-pagination',
        clickable: true,
    },
})

// License slider
const licenseSwp = new Swiper('.license .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.license .swp-navigation .next-btn',
        prevEl: '.license .swp-navigation .prev-btn',
    },
    pagination: {
        el: '.license .swp-navigation .swp-pagination',
        clickable: true,
    },
})

// Accordions

const accordions = document.querySelectorAll('.accordions');

if (accordions) {
    accordions.forEach((item) => {
        const acc = item.querySelectorAll('.accordion');
        acc.forEach((accItem, accItemID) => {
            const accBtn = accItem.querySelector('.accordion-btn');
            const accBody = accItem.querySelector('.accordion-body__wrap');

            if (accItem.classList.contains('active')) {
                accBody.style.maxHeight = accBody.scrollHeight + 'px';
            }

            accBtn.addEventListener('click', () => {
                accItem.classList.toggle('active');
                accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
                acc.forEach((el, elID) => {
                    if (elID != accItemID) {
                        el.querySelector('.accordion-body__wrap').style.maxHeight = null;
                        el.classList.remove('active')
                    }
                })
            });
        })
    });
}

// Specialist tab
const specialistTab = document.querySelectorAll('.specialist .card-tab');
specialistTab.forEach(el => {
    const tabBtns = el.querySelectorAll('.card-tab__btn button');
    const tabBodys = el.querySelectorAll('.card-tab__body');
    tabBtns.forEach((btn, btnIdx) => {
        btn.onclick = () => {
            tabBtns.forEach((a, idx) => {
                if (idx == btnIdx) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            })
            tabBodys.forEach((a, idx) => {
                if (idx == btnIdx) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            })
        }
    })
})

// specialist paret slider
const specialistParentSwp = new Swiper('.specialist-parent .swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.specialist .swp-navigation .next-btn',
        prevEl: '.specialist .swp-navigation .prev-btn',
    },
    pagination: {
        el: '.specialist .swp-navigation .swp-pagination',
        clickable: true,
    },
})

const specialistChildCard = document.querySelectorAll('.specialist-child__card');

specialistChildCard.forEach((btn, btnIdx) => {
    btn.onclick = () => {
        specialistParentSwp.slideTo(btnIdx)
        specialistChildCard.forEach((el, idx) => {
            if (idx == btnIdx) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })
    }
})

specialistParentSwp.on('slideChange', () => {
    specialistChildCard.forEach((el, idx) => {
        if (idx == specialistParentSwp.realIndex) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
});

const acceptModal = document.querySelector('.accept-modal');
const acceptModalBtn = document.querySelector('.accept-modal .main-btn');

acceptModalBtn.onclick = () => {
    acceptModal.classList.remove('active');
}

window.addEventListener("load", () => {
    acceptModal.classList.add('active');
});

const modalCls = ['.privacy-modal', '.disclaimer-modal', '.cookie-modal', '.term-modal'];

modalCls.forEach(cls => {
    const m = document.querySelector(cls);
    const mOpenBtns = document.querySelectorAll(cls + '__open');
    const mCloseBtn = document.querySelector(cls + ' .modal-close');
    const mBg = document.querySelector(cls + ' .modal-bg');

    mOpenBtns.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            m.classList.add('active');
        }
    })

    mCloseBtn.onclick = () => {
        m.classList.remove('active');
    }

    mBg.onclick = () => {
        m.classList.remove('active');
    }
})

const header = document.querySelector('header.header');
window.addEventListener('scroll', function () {
    if (this.scrollY > 20) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed')
    }
})

const licenseModal = document.querySelector('.license-modal');
const licenseModalOpenBtns = document.querySelectorAll('.license-modal__open');
const licenseModalCloseBtn = document.querySelectorAll('.license-modal .close-btn');
const licenseModalBg = document.querySelector('.license-modal__bg');

licenseModalOpenBtns.forEach(btn => {
    btn.onclick = () => {
        const img = btn.querySelector('img');
        let imgUrl;

        if (img) {
            imgUrl = img.getAttribute('src');
        } else {
            imgUrl = btn.getAttribute('src');
        }

        licenseModal.querySelector('.main-img').setAttribute('src', imgUrl)

        licenseModal.classList.add('active');
    }

    licenseModalCloseBtn.forEach(btn => {
        btn.onclick = () => {
            licenseModal.classList.remove('active');
        }
    })

    licenseModalBg.onclick = () => {
        licenseModal.classList.remove('active');
    }
})

const license2Swp = new Swiper('.license-modal__2-content .swiper', {
    slidesPerView: 1,
    effect: "coverflow",
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 2,
    spaceBetween: 290,
    breakpoints: {
        768: {
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: -14,
                depth: 260,
                modifier: 2.3
            },
            spaceBetween: 200,
        }
    },
    navigation: {
        nextEl: '.license-modal__2-content .swp-navigation .next-btn',
        prevEl: '.license-modal__2-content .swp-navigation .prev-btn',
    },
})

const license2Modal = document.querySelector('.license-modal__2');
const license2ModalOpenBtns = document.querySelectorAll('.license-modal__2-open');
const license2ModalCloseBtn = document.querySelectorAll('.license-modal__2 .close-btn');

license2ModalCloseBtn.forEach(btn => {
    btn.onclick = () => {
        license2Modal.classList.remove('active');
    }
})

license2ModalOpenBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        license2Swp.slideToLoop(idx);
        license2Modal.classList.add('active');
    }
})

const cookieSettings = document.querySelector('.cookie-settings');
const cookieSettingsOpenBtns = document.querySelectorAll('.cookie-settings__open');
const cookieSettingsCloseBtn = document.querySelectorAll('.cookie-settings .close-btn');

cookieSettingsCloseBtn.forEach(btn => {
    btn.onclick = () => {
        cookieSettings.classList.remove('active');
    }
})

cookieSettingsOpenBtns.forEach(btn => {
    btn.onclick = e => {
        e.preventDefault();
        acceptModal.classList.remove('active')
        cookieSettings.classList.add('active');
    }
})

const contactTextBtn = document.querySelector('.contact-left__text .main-btn');
contactTextBtn.onclick = e => {
    e.preventDefault();
    document.querySelector('.contact-left').classList.add('active')
}

const requestForms = document.querySelectorAll('.request-form__group input');
const requestFormsBtn = document.querySelector('.request-form__group .main-btn');
const successModal = document.querySelector('.success-modal');
const successModalCloseBtns = document.querySelectorAll('.success-modal .close-btn');
const successModalBg = document.querySelectorAll('.success-modal__bg');

requestFormsBtn.onclick = e => {
    e.preventDefault();

    let t = true;

    requestForms.forEach(inp => {
        if (inp.value.length < 3) {
            t = false;
        }
    })

    if (t) {
        requestFormsBtn.textContent = "Sending...";
        setTimeout(() => {
            requestFormsBtn.textContent = "Get a free Consultation";
            successModal.classList.add('active');
        }, 2000);
    }
}

successModalCloseBtns.forEach(btn => {
    btn.onclick = () => {
        successModal.classList.remove('active');
    }
})

successModalBg.onclick = () => {
    successModal.classList.remove('active');
}