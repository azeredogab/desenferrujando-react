import { useEffect, useState } from 'react';
import './index.css';
import Button from './../../components/Button';
import Timer from './../Timer/index';

function Contador() {
    const [counter, setCounter] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(function() {
        let timer = null; 
        if (timerStarted) {
            let counterInside = counter;
            timer = setInterval(function() {
                if (counterInside === 0) {
                    stopTimer()
                    clearInterval(timer)
                    return;
                }
                counterInside--;
                setCounter(counterInside); 
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [timerStarted])

    function aumentar() {
        setCounter(counter + 1);
    }

    function diminuir() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function startTimer() {
        setTimerStarted(true);
    }

    function stopTimer() {
        setTimerStarted(false);
    }

    return (
        <>
            <div className="contador">
                <Button onClick={diminuir} disabled={timerStarted}>Diminuir</Button>
                <Button onClick={aumentar} disabled={timerStarted}>Aumentar</Button>
            </div>
            <div className="timer">
                <Timer isStarted={timerStarted} startFn={startTimer} stopFn={stopTimer} value={counter} />
            </div>
        </>
    )
}

export default Contador;