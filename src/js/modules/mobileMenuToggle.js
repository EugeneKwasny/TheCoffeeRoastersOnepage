const mobileMenuToggleModule = ({toggleSlector, mobileMenuSelector, mobileMenuItemSelector, activeSelectorModifier})=>{

    const toggleElement = document.querySelector(toggleSlector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    const mobileMenuItems = document.querySelectorAll(mobileMenuItemSelector);

    const toggleActiveSelector = toggleSlector.replace('.', '')+activeSelectorModifier;
    const mobileMenuActiveSelector = mobileMenuSelector.replace('.', '')+activeSelectorModifier;
    
    toggleElement.addEventListener('click', (event)=>{
        event.preventDefault();
        toggleElement.classList.toggle(toggleActiveSelector);
        mobileMenu.classList.toggle(mobileMenuActiveSelector);
    });

    mobileMenuItems.forEach((mobileMenuElement)=>{
        mobileMenuElement.addEventListener('click', (event)=>{
             event.preventDefault();
             toggleElement.classList.toggle(toggleActiveSelector);
             mobileMenu.classList.toggle(mobileMenuActiveSelector);
         });
    });
} 

export default mobileMenuToggleModule;