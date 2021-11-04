


var second = $('.main-second').text();
var secondBack = $('.main-second').text();

var minute = $('.main-minute').text();
var minuteBack = $('.main-minute').text();

var hour = $('.main-hour').text();
var hourBack = $('.main-hour').text();

var day = $('.main-day').text();
var dayBack = $('.main-day').text();

$(".auto-day").text(day);
$(".auto-hour").text(hour);
$(".auto-minute").text(minute);
$(".auto-second").text(second);

var timerBack = setInterval(function() {
  secondBack--;
  if (secondBack < 10) {
    $(".second-back").text("0" + secondBack);
  } else {
    $(".second-back").text(secondBack);
  }
  if (secondBack === 0) {
    secondBack = 60;
  }

  if (secondBack === 59) {
    minuteBack--;
    if (minuteBack < 10) {
      $(".minute-back").text("0" + minuteBack);
    } else {
      $(".minute-back").text(minuteBack);
    }

    if (minuteBack === 0) {
      minuteBack = 60;
    }

    if (minuteBack === 59) {
      hourBack--;
      if (hourBack < 10) {
        $(".hour-back").text("0" + hourBack);
      } else {
        $(".hour-back").text(hourBack);
      }
      if (hourBack === 0) {
        hourBack = 24;
      }

      if (hourBack === 23) {
        dayBack--;
        if (dayBack < 10) {
          $(".day-back").text("0" + dayBack);
        } else {
          $(".day-back").text(dayBack);
        }

        $(".days-card .top-half").css("transition", "");
        $(".days-card .top-half").css("transform", "rotateX(-180deg)");

        setTimeout(function() {
          $(".days-card .top-half").css("transition", "none");
          $(".days-card .top-half").css("transform", "");
        }, 600);
      }

      $(".hours-card .top-half").css("transition", "");
      $(".hours-card .top-half").css("transform", "rotateX(-180deg)");

      setTimeout(function() {
        $(".hours-card .top-half").css("transition", "none");
        $(".hours-card .top-half").css("transform", "");
      }, 600);
    }

    $(".minutes-card .top-half").css("transition", "");
    $(".minutes-card .top-half").css("transform", "rotateX(-180deg)");

    setTimeout(function() {
      $(".minutes-card .top-half").css("transition", "none");
      $(".minutes-card .top-half").css("transform", "");
    }, 600);
  }

  $(".seconds-card .top-half").css("transition", "");
  $(".seconds-card .top-half").css("transform", "rotateX(-180deg)");

  setTimeout(function() {
    $(".seconds-card .top-half").css("transition", "none");
    $(".seconds-card .top-half").css("transform", "");
  }, 600);

}, 1000);


setTimeout(function() {

  var timer = setInterval(function() {
    second--;
    if (second < 10) {
      $(".second").text("0" + second);
    } else {
      $(".second").text(second);
    }
    if (second === 0) {
      second = 60;
    }

    if (second === 59) {
      minute--;
      if (minute < 10) {
        $(".minute").text("0" + minute);
      } else {
        $(".minute").text(minute);
      }
      if (minute === 0) {
        minute = 60;
      }

      if (minute === 59) {
        hour--;
        if (hour < 10) {
          $(".hour").text("0" + hour);
        } else {
          $(".hour").text(hour);
        }
        if (hour === 0) {
          hour = 24;
        }

        if (hour === 23)
          day--;
        if (day < 10) {
          $(".day").text("0" + day);
        } else {
          $(".day").text(day);
        }
      }
    }
  }, 1000);

  setInterval(function(){
    if ($('.main-day').text() === "00"){
      if ($('.main-hour').text() === "00"){
        if ($('.main-minute').text() === "00"){
          if ($('.main-second').text() === "00"){
            clearInterval(timer);
            clearInterval(timerBack);
          }
        }
      }
  }
  }, 100);

}, 500);




setInterval(function(){
  if ($('.main-day').text() === "00"){
    if ($('.main-hour').text() === "00"){
      if ($('.main-minute').text() === "00"){
        if ($('.main-second').text() === "00"){

        }
      }
    }
}
}, 100);
