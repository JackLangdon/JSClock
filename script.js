const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (((seconds/60)*360)+90);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const minutes = now.getMinutes();
  const minutesDegrees = (((minutes/60)*360)+90);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (((hours/60)*360)+90+(minutesDegrees/12));
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  };

  if (minutesDegrees === 90) {
    minuteHand.style.transition = 'none';
  } else {
    minuteHand.style.transition = '';
  };

  if (hoursDegrees === 90) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = '';
  };



  // Shorter code that covers all hands, but removes transition animation for min and hour hands

  // const allHands = document.querySelectorAll('.hand');
  // if (secondsDegrees === 90) {
  //   allHands.forEach(hand => hand.style.transition = 'none');
  // } else {
  //   allHands.forEach(hand => hand.style.transition = '');
  // };
}

setInterval(setDate, 1000);
