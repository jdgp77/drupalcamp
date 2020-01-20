import React from 'react';
import './RegressiveCount.scss';

function RegressiveCount() {
  function countdown(endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
    return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      let startDate = new Date();
      startDate = startDate.getTime();

      let timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  }

  setTimeout(() => {
    countdown('05/01/2020 08:00:00 AM');
  }, 0);

  return (
    <section className="timmer" >
      <h2>¿Cuanto falta?</h2>
      <p>En mayo de 2020</p>
      <div className="countup" id="countup1">
        <div className="container days" >
          <span className="timeel days" id="days" >325</span>
          <span className="separator"></span>
          <span className="timeel-desc timeRefDays">Días</span>
        </div>
        <div className="container hours" >
          <span className="timeel hours" id="hours" >5</span>
          <span className="separator"></span>
          <span className="timeel-desc timeRefHours">Horas</span>
        </div>
        <div className="container minutes" >
          <span className="timeel minutes" id="minutes" >45</span>
          <span className="separator"></span>
          <span className="timeel-desc timeRefMinutes">Minutos</span>
        </div>
        <div className="container seconds" >
          <span className="timeel seconds" id="seconds" >25</span>
          <span className="separator"></span>
          <span className="timeel-desc timeRefSeconds">Segundos</span>
        </div>
      </div>
      <a className="dc btn principal" href="#recibe-informacion" >Suscribirse</a>
    </section>
  );
}

export default RegressiveCount;