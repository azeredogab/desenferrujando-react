import './index.css';
import Button from './../../components/Button';

function Timer({ value, isStarted, startFn, stopFn }) {
    return (
        <>
            {isStarted ? <Button onClick={stopFn}>Pausar</Button> : <Button onClick={startFn}>Iniciar</Button>}
            <p className="label">{value}</p>
        </>
    )    
}

export default Timer; 