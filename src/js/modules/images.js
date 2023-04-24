const images = ()=> {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');
          
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = `
                    justify-content: center;
                    alignItems: center;
                    display: none;    
    `
    

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            // imgPopup.style.width = '300px'
            document.body.style.overflow = 'hidden'
            bigImage.style.cssText = `
                    display: flex;
                    justify-content: center;
                    alignItems: center;
                    max-width: 80%; 
                    max-height: 80%;`
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        };

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;