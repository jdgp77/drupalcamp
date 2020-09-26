import React, { useEffect, useState } from 'react';
import './Countdown.scss';

const Countdown = function() {
  let [data, setData] = useState({
    validateData: true,
    enCountDown: false,
    enCountDownWorkflow: false,
    enCountDownConferences: false,
  });
  
  function startCountDown() {
    if (data.enCountDown) {
      setTimeout(function() {
        if (data.enCountDownWorkflow !== false && document.getElementById('drupalcamp-countdown')) {
          window.simplyCountdown('#drupalcamp-countdown.noactive', {
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
    
          document.getElementById('drupalcamp-countdown').classList.remove('noactive');
          data = { ...data,  enCountDownWorkflow: false };
          setData(data);
        }
    
        if (data.enCountDownConferences !== false && document.getElementById('drupalcamp-countdown2')) {
          window.simplyCountdown('#drupalcamp-countdown2.noactive', {
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
              window.location.href = "/live";
            },
            refresh: 1000, //default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
            zeroPad: false,
            countUp: false, // enable count up if set to true
          });
    
          document.getElementById('drupalcamp-countdown2').classList.remove('noactive');
          data ={ ...data,  enCountDownConferences: false };
          setData(data);
        }
        
        data = { ...data,  enCountDown: false };
        setData(data);
      }, 0);
    }
  };
  startCountDown();

  function validarCountDownConfig() {
    setTimeout(function() {
      let enCountDownWorkflow = window.localStorage.getItem('countdown_talleres');
      let enCountDownConferences = window.localStorage.getItem('countdown_conferencias');

      if (enCountDownWorkflow !== null && enCountDownConferences !== null) {
        data = {
          ...data,
          enCountDown: true,
          enCountDownWorkflow: enCountDownWorkflow,
          enCountDownConferences: enCountDownConferences,
        };
        setData(data);
      }
      else {
        validarCountDownConfig();
      }
    }, 100);
    data = { ...data, validateData: false };
    setData(data);
    console.log('Entro a validateData', data)
  }
  if (data.validateData === true) {
    validarCountDownConfig();
  }
  
  useEffect(() => {
    var _starCountRef = window.fireDatabase.ref('live/zcountdown/talleres');
    _starCountRef.on('value', function(snapshot) {
      data = {
        ...data,
        enCountDown: true,
        enCountDownWorkflow: snapshot.val(),
      };
      setData(data);
    });
    var _starCountRef = window.fireDatabase.ref('live/zcountdown/conferencias');
    _starCountRef.on('value', function(snapshot) {
      data = {
        ...data,
        enCountDown: true,
        enCountDownConferences: snapshot.val(),
      }
      setData(data);
    });
  });

  return <div class="block block-countdown" >
    <div>
      <h2 class="dc line-bottom">¡¡Falta poco!!</h2>
      {
        data.enCountDownWorkflow ? <><span className="subtitle paragraph">Los talleres inician en:</span>
        <div className="block timer" >
          <div id="drupalcamp-countdown" className="noactive" ></div>
        </div>
        <br/>
        <br/></> : <></>
      }
      {
        data.enCountDownConferences ? <><span className="subtitle paragraph">Y las <strong>Conferencias</strong> en:</span>
        <div className="block timer" >
          <div id="drupalcamp-countdown2" className="noactive" ></div>
        </div></> : <></>
      }
      
    </div>
  </div>
}

export default Countdown;