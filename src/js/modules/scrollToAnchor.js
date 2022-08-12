const scrollToAnchor = ({menuItemSelector}) => {
    const menuItemElements = document.querySelectorAll(menuItemSelector);

    menuItemElements.forEach((element)=>{
        element.addEventListener('click', (event)=>{
            event.preventDefault();

            const targetElement = document.querySelector(event.target.getAttribute('href'));
            targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        })
    });

}

export default scrollToAnchor;