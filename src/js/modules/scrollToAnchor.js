const scrollToAnchor = ({smoothScrollIdentifier}) => {
    const linkElementsCollection = document.querySelectorAll('a');

    linkElementsCollection.forEach((element)=>{
        element.addEventListener('click', (event)=>{
            
            const hrefAttr = element.getAttribute('href');

            if(!hrefAttr.includes('!#')){
                return;
            }
            event.preventDefault();

            const targetElement = document.querySelector(hrefAttr.replace('!', ''));
            targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        })
    });

}

export default scrollToAnchor;