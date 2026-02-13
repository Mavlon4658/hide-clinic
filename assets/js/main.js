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
            mask: '+{9}00 00 000 0000',
        })
    });
}

const swiper = new Swiper('.swiper-examples', {
    slidesPerView: 1,
    spaceBetween: -94,
    initialSlide: 3,
    speed: 400,
    breakpoints: {
        1220: {

        }
    },
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
    breakpoints: {
        1200: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2,
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
    setTimeout(() => {
        acceptModal.classList.add('active');
    }, 30 * 1000);
});