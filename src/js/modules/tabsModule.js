const tabsModule = ({tabsSelector, tabsContentWrapperSelector, activeSelectorModifier}) => {

    const tabsElements = document.querySelectorAll(tabsSelector);
    const activeTabSelector = tabsSelector + activeSelectorModifier;
    const activeTabsContentWrapperSelector = tabsContentWrapperSelector + activeSelectorModifier
    tabsElements.forEach((element)=>{
        element.addEventListener('click', function(event){
            event.preventDefault();
            if(element.classList.value.includes(activeTabSelector.replace('.', ''))){
                return;
            }
            document.querySelector(activeTabSelector).classList.toggle(activeTabSelector.replace('.', ''));
            element.classList.toggle(activeTabSelector.replace('.', ''));

            document.querySelector(activeTabsContentWrapperSelector).classList.toggle(activeTabsContentWrapperSelector.replace('.', ''));

            const tabContent = document.getElementById(element.getAttribute('href').replace('#', ''));
            tabContent.classList.toggle(activeTabsContentWrapperSelector.replace('.', ''));
        })
    });

}

export default tabsModule;