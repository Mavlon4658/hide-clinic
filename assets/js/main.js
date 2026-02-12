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
    if (window.innerWidth <= 768) {
        examplesSlider.classList.remove('swiper-examples')
        examplesSliderLine.classList.remove('swiper-wrapper')
        examplesSlide.forEach((item, i) => {
            item.classList.remove('swiper-slide')

            examplesSlides.forEach((item, i) => {
                examplesSlides[0].classList.add('examples__slide--active')
                item.addEventListener('click', () => {
                    examplesSlides.forEach(items => {
                        items.classList.remove('examples__slide--active')
                    })
                    examplesSlides[i].classList.add('examples__slide--active')
                    examplesSlideBigImg.src = examplesSlides[i].querySelector('.examples__slide-img').src
                    examplesSlideBigValue.innerHTML = examplesSlides[i].querySelector('.examples__slide-head-value').innerHTML
                    examplesSlideBigText.innerHTML = examplesSlides[i].querySelector('.examples__slide-head-text-mob').innerHTML
                })
            })
        })
    } else {
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

// Review slider
const reviewSwp = new Swiper('.review-swp', {
    slidesPerView: 3,
    spaceBetween: 10,
})

// License slider
const licenseSwp = new Swiper('.license .swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
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