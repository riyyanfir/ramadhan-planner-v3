import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const setTimer = () => {
    let countDownDate = new Date("March 23, 2023 10:25:25").getTime();
    let cDD = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance === 0) {
        clearInterval(cDD);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => setTimer(), []);

  return (
    <div className="w-100 bg-white position-relative" style={{ height: "100vh" }}>
      <div className="text-center position-absolute start-50 translate-middle" style={{ top: "25vh" }}>
        <h1>Ramadhan Planner 1444 H</h1>
        <Badge bg="teal-600">From: PuasaQ</Badge>
      </div>
      <div className="d-flex align-items-center justify-content-center h-100 gap-5">
        <div className="d-flex flex-column">
          <h1 className="bg-dark p-3 text-white rounded">{timerDays}</h1> <h3>Hari</h3>
        </div>
        <div className="d-flex flex-column">
          <h1 className="bg-dark p-3 text-white rounded">{timerHours < 10 ? "0" + timerHours : timerHours}</h1> <h3>Jam</h3>
        </div>
        <div className="d-flex flex-column">
          <h1 className="bg-dark p-3 text-white rounded">{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</h1> <h3>Menit</h3>
        </div>
        <div className="d-flex flex-column">
          <h1 className="bg-dark p-3 text-white rounded">{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</h1> <h3>Detik</h3>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
