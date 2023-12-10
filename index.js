                // 23 февраля

let countdownElement = document.querySelector('countdown');

let countdownDate = new Date(2024, 1, 22, 23, 59, 59).getTime();

function getCountTime(){
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    // дни
    if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
        document.querySelector('.d').innerHTML = 'дней';
    }
    else if (days % 10 == 1 || days % 100 == 1)
    document.querySelector('.d').innerHTML = 'день';
    else{
        document.querySelector('.d').innerHTML = 'дня';
    }

    // часы
    if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
        document.querySelector('.ch').innerHTML = 'часов';
    }
    else if (hours % 10 == 1 || hours % 100 == 1)
    document.querySelector('.ch').innerHTML = 'час';
    else{
        document.querySelector('.ch').innerHTML = 'часа';
    }

    // минуты
    if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
        document.querySelector('.min').innerHTML = 'минут';
    }
    else if (minutes % 10 == 1 || minutes % 100 == 1)
    document.querySelector('.min').innerHTML = 'минута';
    else{
        document.querySelector('.min').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
        document.querySelector('.sec').innerHTML = 'секунд';
    }
    else if (seconds % 10 == 1 || seconds % 100 == 1)
    document.querySelector('.sec').innerHTML = 'секунда';
    else{
        document.querySelector('.sec').innerHTML = 'секунды';
    }

    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class= 'expired'>С 23 февраля!</h4>";
    }
}

let countdown = setInterval(getCountTime, 1000);


            // 8 марта

let countDownElement = document.querySelector('countdown1');

let countDownDate = new Date(2024, 2, 7, 23, 59, 59).getTime();

function getCountTime1(){
    const now = new Date().getTime();

    const distance = countDownDate - now;


    const oneDay = 24 * 60 * 60 * 1000; 
    const oneHour = 60 * 60 * 1000; 
    const oneMinute = 60 * 1000; 

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days1').innerHTML = days;
    document.querySelector('.hours1').innerHTML = hours;
    document.querySelector('.minutes1').innerHTML = minutes;
    document.querySelector('.seconds1').innerHTML = seconds;

    // дни
    if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
        document.querySelector('.d1').innerHTML = 'дней';
    }
    else if (days % 10 == 1 || days % 100 == 1)
    document.querySelector('.d1').innerHTML = 'день';
    else{
        document.querySelector('.d1').innerHTML = 'дня';
    }

    // часы
    if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
        document.querySelector('.ch1').innerHTML = 'часов';
    }
    else if (hours % 10 == 1 || hours % 100 == 1)
    document.querySelector('.ch1').innerHTML = 'час';
    else{
        document.querySelector('.ch1').innerHTML = 'часа';
    }

    // минуты
    if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
        document.querySelector('.min1').innerHTML = 'минут';
    }
    else if (minutes % 10 == 1 || minutes % 100 == 1)
    document.querySelector('.min1').innerHTML = 'минута';
    else{
        document.querySelector('.min1').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
        document.querySelector('.sec1').innerHTML = 'секунд';
    }
    else if (seconds % 10 == 1 || seconds % 100 == 1)
    document.querySelector('.sec1').innerHTML = 'секунда';
    else{
        document.querySelector('.sec1').innerHTML = 'секунды';
    }


    if (distance < 0) {
        clearInterval(countdown1);
        countDownElement.innerHTML = "<h4 class= 'expired'>С 8 марта!</h4>";
    }
}

let countdown1 = setInterval(getCountTime1, 1000);



                // 1 мая

let countDownElement2 = document.querySelector('countdown2');

let countDownDate2 = new Date(2024, 3, 30, 23, 59, 59).getTime();

function getCountTime2(){
    const now = new Date().getTime();

    const distance = countDownDate2 - now;


    const oneDay = 24 * 60 * 60 * 1000; 
    const oneHour = 60 * 60 * 1000; 
    const oneMinute = 60 * 1000; 

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days2').innerHTML = days;
    document.querySelector('.hours2').innerHTML = hours;
    document.querySelector('.minutes2').innerHTML = minutes;
    document.querySelector('.seconds2').innerHTML = seconds;

    // дни
    if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
        document.querySelector('.d2').innerHTML = 'дней';
    }
    else if (days % 10 == 1 || days % 100 == 1)
    document.querySelector('.d2').innerHTML = 'день';
    else{
        document.querySelector('.d2').innerHTML = 'дня';
    }

    // часы
    if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
        document.querySelector('.ch2').innerHTML = 'часов';
    }
    else if (hours % 10 == 1 || hours % 100 == 1)
    document.querySelector('.ch2').innerHTML = 'час';
    else{
        document.querySelector('.ch2').innerHTML = 'часа';
    }

    // минуты
    if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
        document.querySelector('.min2').innerHTML = 'минут';
    }
    else if (minutes % 10 == 1 || minutes % 100 == 1)
    document.querySelector('.min2').innerHTML = 'минута';
    else{
        document.querySelector('.min2').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
        document.querySelector('.sec2').innerHTML = 'секунд';
    }
    else if (seconds % 10 == 1 || seconds % 100 == 1)
    document.querySelector('.sec2').innerHTML = 'секунда';
    else{
        document.querySelector('.sec2').innerHTML = 'секунды';
    }

    if (distance < 0) {
        clearInterval(countdown2);
        countDownElement.innerHTML = "<h4 class= 'expired'>С 1 мая!</h4>";
    }
}

let countdown2 = setInterval(getCountTime2, 1000);



                // 9 мая

let countDownElement3 = document.querySelector('countdown3');

let countDownDate3 = new Date(2024, 4, 8, 23, 59, 59).getTime();

function getCountTime3(){
    const now = new Date().getTime();

    const distance = countDownDate3 - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days3').innerHTML = days;
    document.querySelector('.hours3').innerHTML = hours;
    document.querySelector('.minutes3').innerHTML = minutes;
    document.querySelector('.seconds3').innerHTML = seconds;

    // дни
    if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
        document.querySelector('.d3').innerHTML = 'дней';
    }
    else if (days % 10 == 1 || days % 100 == 1)
    document.querySelector('.d3').innerHTML = 'день';
    else{
        document.querySelector('.d3').innerHTML = 'дня';
    }

    // часы
    if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
        document.querySelector('.ch3').innerHTML = 'часов';
    }
    else if (hours % 10 == 1 || hours % 100 == 1)
    document.querySelector('.ch3').innerHTML = 'час';
    else{
        document.querySelector('.ch3').innerHTML = 'часа';
    }

    // минуты
    if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
        document.querySelector('.min3').innerHTML = 'минут';
    }
    else if (minutes % 10 == 1 || minutes % 100 == 1)
    document.querySelector('.min3').innerHTML = 'минута';
    else{
        document.querySelector('.min3').innerHTML = 'минуты';
    }

    // секунды
    if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
        document.querySelector('.sec3').innerHTML = 'секунд';
    }
    else if (seconds % 10 == 1 || seconds % 100 == 1)
    document.querySelector('.sec3').innerHTML = 'секунда';
    else{
        document.querySelector('.sec3').innerHTML = 'секунды';
    }

    if (distance < 0) {
        clearInterval(countdown3);
        countDownElement.innerHTML = "<h4 class= 'expired'>С Днем Победы!</h4>";
    }
}

let countdown3 = setInterval(getCountTime3, 1000);


                // 12 июня

    let countDownElement4 = document.querySelector('countdown4');

    let countDownDate4 = new Date(2024, 5, 11, 23, 59, 59).getTime();
    
    function getCountTime4(){
        const now = new Date().getTime();
    
        const distance = countDownDate4 - now;
    
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
    
        let days = Math.floor(distance / oneDay);
        let hours = Math.floor((distance % oneDay) / oneHour);
        let minutes = Math.floor((distance % oneHour) / oneMinute);
        let seconds = Math.floor((distance % oneMinute) / 1000);
    
    
        document.querySelector('.days4').innerHTML = days;
        document.querySelector('.hours4').innerHTML = hours;
        document.querySelector('.minutes4').innerHTML = minutes;
        document.querySelector('.seconds4').innerHTML = seconds;
    
        // дни
        if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
            document.querySelector('.d4').innerHTML = 'дней';
        }
        else if (days % 10 == 1 || days % 100 == 1)
        document.querySelector('.d4').innerHTML = 'день';
        else{
            document.querySelector('.d4').innerHTML = 'дня';
        }
    
        // часы
        if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
            document.querySelector('.ch4').innerHTML = 'часов';
        }
        else if (hours % 10 == 1 || hours % 100 == 1)
        document.querySelector('.ch4').innerHTML = 'час';
        else{
            document.querySelector('.ch4').innerHTML = 'часа';
        }
    
        // минуты
        if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
            document.querySelector('.min4').innerHTML = 'минут';
        }
        else if (minutes % 10 == 1 || minutes % 100 == 1)
        document.querySelector('.min4').innerHTML = 'минута';
        else{
            document.querySelector('.min4').innerHTML = 'минуты';
        }
    
        // секунды
        if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
            document.querySelector('.sec4').innerHTML = 'секунд';
        }
        else if (seconds % 10 == 1 || seconds % 100 == 1)
        document.querySelector('.sec4').innerHTML = 'секунда';
        else{
            document.querySelector('.sec4').innerHTML = 'секунды';
        }
    
        if (distance < 0) {
            clearInterval(countdown4);
            countDownElement.innerHTML = "<h4 class= 'expired'>С Днем России!</h4>";
        }
    }
    
    let countdown4 = setInterval(getCountTime4, 1000);


                  // 4 ноября

        let countDownElement5 = document.querySelector('countdown5');

        let countDownDate5 = new Date(2024, 10, 3, 23, 59, 59).getTime();
        
        function getCountTime5(){
            const now = new Date().getTime();
        
            const distance = countDownDate5 - now;
        
            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;
            const oneMinute = 60 * 1000;
        
            let days = Math.floor(distance / oneDay);
            let hours = Math.floor((distance % oneDay) / oneHour);
            let minutes = Math.floor((distance % oneHour) / oneMinute);
            let seconds = Math.floor((distance % oneMinute) / 1000);
        
        
            document.querySelector('.days5').innerHTML = days;
            document.querySelector('.hours5').innerHTML = hours;
            document.querySelector('.minutes5').innerHTML = minutes;
            document.querySelector('.seconds5').innerHTML = seconds;
        
            // дни
            if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
                document.querySelector('.d5').innerHTML = 'дней';
            }
            else if (days % 10 == 1 || days % 100 == 1)
            document.querySelector('.d5').innerHTML = 'день';
            else{
                document.querySelector('.d5').innerHTML = 'дня';
            }
        
            // часы
            if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
                document.querySelector('.ch5').innerHTML = 'часов';
            }
            else if (hours % 10 == 1 || hours % 100 == 1)
            document.querySelector('.ch5').innerHTML = 'час';
            else{
                document.querySelector('.ch5').innerHTML = 'часа';
            }
        
            // минуты
            if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
                document.querySelector('.min5').innerHTML = 'минут';
            }
            else if (minutes % 10 == 1 || minutes % 100 == 1)
            document.querySelector('.min5').innerHTML = 'минута';
            else{
                document.querySelector('.min5').innerHTML = 'минуты';
            }
        
            // секунды
            if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
                document.querySelector('.sec5').innerHTML = 'секунд';
            }
            else if (seconds % 10 == 1 || seconds % 100 == 1)
            document.querySelector('.sec5').innerHTML = 'секунда';
            else{
                document.querySelector('.sec5').innerHTML = 'секунды';
            }
        
            if (distance < 0) {
                clearInterval(countdown5);
                countDownElement.innerHTML = "<h4 class= 'expired'>С Днем Народного Единства!</h4>";
            }
        }
        
        let countdown5 = setInterval(getCountTime5, 1000);


                 // 4 ноября

        let countDownElement6 = document.querySelector('countdown5');

        let countDownDate6 = new Date(2024, 11, 31, 23, 59, 59).getTime();
        
        function getCountTime6(){
            const now = new Date().getTime();
        
            const distance = countDownDate6 - now;
        
            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;
            const oneMinute = 60 * 1000;
        
            let days = Math.floor(distance / oneDay);
            let hours = Math.floor((distance % oneDay) / oneHour);
            let minutes = Math.floor((distance % oneHour) / oneMinute);
            let seconds = Math.floor((distance % oneMinute) / 1000);
        
        
            document.querySelector('.days6').innerHTML = days;
            document.querySelector('.hours6').innerHTML = hours;
            document.querySelector('.minutes6').innerHTML = minutes;
            document.querySelector('.seconds6').innerHTML = seconds;
        
            // дни
            if(((days % 100) >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 10 == 0) {
                document.querySelector('.d6').innerHTML = 'дней';
            }
            else if (days % 10 == 1 || days % 100 == 1)
            document.querySelector('.d6').innerHTML = 'день';
            else{
                document.querySelector('.d6').innerHTML = 'дня';
            }
        
            // часы
            if(((hours % 100) >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 10 == 0) {
                document.querySelector('.ch6').innerHTML = 'часов';
            }
            else if (hours % 10 == 1 || hours % 100 == 1)
            document.querySelector('.ch6').innerHTML = 'час';
            else{
                document.querySelector('.ch6').innerHTML = 'часа';
            }
        
            // минуты
            if(((minutes % 100) >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 10 == 0) {
                document.querySelector('.min6').innerHTML = 'минут';
            }
            else if (minutes % 10 == 1 || minutes % 100 == 1)
            document.querySelector('.min6').innerHTML = 'минута';
            else{
                document.querySelector('.min6').innerHTML = 'минуты';
            }
        
            // секунды
            if(((seconds % 100) >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0) {
                document.querySelector('.sec6').innerHTML = 'секунд';
            }
            else if (seconds % 10 == 1 || seconds % 100 == 1)
            document.querySelector('.sec6').innerHTML = 'секунда';
            else{
                document.querySelector('.sec6').innerHTML = 'секунды';
            }
        
            if (distance < 0) {
                clearInterval(countdown6);
                countDownElement.innerHTML = "<h4 class= 'expired'>С Новым Годом!</h4>";
            }
        }
        
        let countdown6 = setInterval(getCountTime6, 1000);