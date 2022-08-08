const mobileMenu = ({toggleSlector, mobileMenuSelector, activeSelectorModifier})=>{

    const toggleElement = document.querySelector(toggleSlector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    
    const toggleActiveSelector = toggleSlector.replace('.', '')+activeSelectorModifier;
    const mobileMenuActiveSelector = mobileMenuSelector.replace('.', '')+activeSelectorModifier;
    
    toggleElement.addEventListener('click', (event)=>{
        event.preventDefault();
        console.log(toggleElement);
        toggleElement.classList.toggle(toggleActiveSelector);
        mobileMenu.classList.toggle(mobileMenuActiveSelector);
    });
} 

export default mobileMenu;