import React, { useEffect, useState } from 'react';
import './Countdown.scss';

const Countdown = function() {
  const [enCountDown, setEnCountDown] = useState(true);
  
  useEffect(() => {
    if (enCountDown) {
      
      window.simplyCountdown('#drupalcamp-countdown', {
        year: 2020, // required
        month: 9, // required
        day: 25, // required
        hours: (14 - 5), // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: 'día',
            hours: 'Hora',
            minutes: 'Minuto',
            seconds: 'Segundo',
            pluralLetter: 's'
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true,
        onEnd: function () {
          window.location.href = "/live-dia1";
        },
        refresh: 1000, //default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false, // enable count up if set to true
      });
  
      window.simplyCountdown('#drupalcamp-countdown2', {
        year: 2020, // required
        month: 9, // required
        day: 26, // required
        hours: (9 - 5), // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: 'día',
            hours: 'Hora',
            minutes: 'Minuto',
            seconds: 'Segundo',
            pluralLetter: 's'
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true,
        onEnd: function () {
          window.location.href = "/live-dia2";
        },
        refresh: 1000, //default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false, // enable count up if set to true
      });

      setEnCountDown(false);
    }
  });

  
  return <div class="block block-countdown" >
    <div>
      <h2 class="dc line-bottom">¡¡Falta poco!!</h2>
      <span class="subtitle paragraph">Los talleres inician en:</span>
      <div className="block timer" >
        <div id="drupalcamp-countdown"></div>
      </div>
      <br/><br/>
      <span class="subtitle paragraph">Y las <strong>Conferencias</strong> en:</span>
      <div className="block timer" >
        <div id="drupalcamp-countdown2"></div>
      </div>
    </div>
  </div>
}

export default Countdown;