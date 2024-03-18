window.onload = () => { time(); }
setInterval(
    function time() {
        date = new Date();

        hour = date.getHours();
        min = date.getMinutes();
        second = date.getSeconds();

        s.style.transform = "rotate(" + second * 6 + "deg)";
        m.style.transform = "rotate(" + min * 6 + "deg)";
        h.style.transform = "rotate(" + ((hour * 30)+(min/2)) + "deg)";
        // s.style.transition="0.5s ";
        

    }, 1000);



    // second :-

    // 360 deg  / 60 second = 6


    // minute :- 

     // 360 deg  / 60 minute = 6

    //  hour :-

    //  360 deg / 12 hour = 30

    // 30deg / 60 minute =2;