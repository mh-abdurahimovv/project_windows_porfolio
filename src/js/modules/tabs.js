const tabs = (headerSelector, tabSelector, contentSelector, activeSelector, display = 'block') =>{
      const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);
            
            function hideTabsContent() {
                content.forEach(item => {
                    item.style.display = 'none';
                });

                tab.forEach(item => {
                    item.classList.remove(activeSelector);
                });
            };


            function showTabsContent(i = 0) {
                content[i].style.display = display;
                tab[i].classList.add(activeSelector);
            };

            hideTabsContent();
            showTabsContent();

            header.addEventListener('click', (e)=> {
                const target = e.target;
                if(target && 
                    (target.classList.contains(tabSelector.replace(/\./, "")) || 
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                        tab.forEach((item, i)=> {
                            if(target === item || target.parentNode == item) {
                                hideTabsContent();
                                showTabsContent(i);
                            }
                        });
                    }
            });


        };
        
export default tabs;