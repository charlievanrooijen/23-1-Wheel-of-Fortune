const TurnSize = -1;
const SingleSlice = 15;

var Degrees = 0;
var timeRemaining = 3;

function Rotate() {
    if (Degrees == -360) {
        Degrees = 0;
    }

    ele = document.getElementById('Wheel').style.transform = 'rotate(' + Degrees + 'deg)';
    Degrees = TurnSize + Degrees;
}

function getAnwserInt() {
    var score = Math.abs(Math.round(Degrees / SingleSlice)) + 1;
    if (score == 0) {
        return 1;
    } else {
        return score;
    }
}

function ShowAnwser(bool) {
    if (bool) {
        $("#slideout").fadeOut("slow");
    } else {
        selectCard(getAnwserInt());
        $("#slideout").fadeIn("slow");
    }
}

function selectCard(number) {

    if(number > 24){
        number = 1
    }

    var two = number;

    document.getElementById('slideout').innerHTML =

        "<div style='margin-top: 15vh' class='col-12 px-1 w-100'><img class='w-100 rounded' src='Cards/" + two + ".jpg'><button onclick='starttimer()' class='btn btn-danger btn-outline-info w-50 m-3'>Spin again</button></div>"
        // <p class='m-0' style='font-size: 20px'>" + getCaption(two) + "</p>
}

function HandleCountdown(Countdown) {
    if (Countdown) {
        startCountdown();
    } else {
        stopCountdown();
    }
}

function startCountdown() {
    var Countdown = document.getElementById('startTimer');
    Countdown.innerHTML = timeRemaining;

    var x = setInterval(function () {
        if (timeRemaining < 1) {
            timeRemaining = 3;
            stopCountdown();
            clearInterval(x);

        } else {
            Countdown.innerHTML = timeRemaining - 1;
            timeRemaining--
        }
    }, 1000);

    console.log('ended');
    console.log();
}

function stopCountdown() {
    var CountDownWrapper = document.getElementById('startTimer');
    CountDownWrapper.innerHTML = 'Rotate';
}

function getCaption(index){
    WheelCaptionArray = [
        'Fit',
        'Health',
        'Aesthetics',
        'Sexuality',
        'Idealism',
        'Loyal',
        'Connected',
        'Caring',
        'Certainty',
        'Safety',
        'Relaxation',
        'Play',
        'Freedom',
        'Creativity',
        'Individuality',
        'Curiosity',
        'Capable',
        'Innovation',
        'Winning',
        'Pride',
        'Recognition',
        'Status',
        'Possession',
        'Dominance',
    ]

    return WheelCaptionArray[index-1];
}
