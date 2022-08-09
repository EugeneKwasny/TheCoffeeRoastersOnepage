const sliderModule = ({navSelector, sliderContentWrapperSelector, activeSelectorModifier}) => {

const navElements = document.querySelectorAll(navSelector);
const activeNavSelector = navSelector + activeSelectorModifier;
const activeSliderContentWrapperSelector = sliderContentWrapperSelector +  activeSelectorModifier;
navElements.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        event.preventDefault();
        if(element.classList.value.includes(activeNavSelector.replace('.', ''))){
            return;
        }

        document
        .querySelector(activeNavSelector)
        .classList
        .toggle(activeNavSelector.replace('.', ''));

        element.classList.toggle(activeNavSelector.replace('.', ''));

        document.querySelector(activeSliderContentWrapperSelector).classList.toggle(activeSliderContentWrapperSelector.replace('.', ''));
        document.getElementById(element.getAttribute('href').replace('#', '')).classList.toggle(activeSliderContentWrapperSelector.replace('.', ''));


    });
})};

export default sliderModule;