const timer = (id, deadline) =>{
    function getTiimeRemaining(endTime) {
        const tech = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(tech / ((1000*60 * 60) * 24)),
            hours = Math.floor( (tech / (1000*60*60))%24),
            minutes = Math.floor((tech / 1000 / 60)%60),
            seconds = Math.floor((tech / 1000)%60); 

          return {
            total: tech,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          };   
    };


    function getZero(num) {
        if(num >= 0 && num<10) {
            return `0${num}`;
        } else {
            return num;
        }
    };



    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              
        updateClock();
        
        function updateClock() {
            const timeLeft = getTiimeRemaining(endTime);

            days.textContent = getZero(timeLeft.days);
            hours.textContent = getZero(timeLeft.hours);
            minutes.textContent = getZero(timeLeft.minutes);
            seconds.textContent = getZero(timeLeft.seconds);

            if(timeLeft.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        };
        
    }
    setClock(id, deadline);
};

export default timer;