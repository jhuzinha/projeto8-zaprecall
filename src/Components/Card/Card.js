import React from "react";
import "./card.css"

export default function Card({question, index, answer, foot, setFoot}) {
    const [card, setCard] = React.useState(false);
    const [respondido, setRespondido] = React.useState('');

    return (
        <>
            {!card ?
                <button>
                    <span className={!respondido === '' ? '': respondido.cor}> Pergunta {index + 1}</span>
                    <IonIcon  foot={foot} respondido={respondido} setCard = {setCard}/>
                </button>
                :
                <ShowAnswer question={ question } answer = {answer} foot={foot} setFoot = {setFoot} setCard = {setCard} setRespondido = {setRespondido}/>
            }
        </>
    )

}


function IonIcon({respondido, setCard}){
    return (
    <>
    {
        respondido === '' ? <ion-icon onClick={() => setCard(true)} name="play-outline"></ion-icon> : <div className={respondido.cor}><ion-icon name={respondido.nome}></ion-icon></div>
    }
    </>   
    )
}

function ShowAnswer({question, answer, foot, setFoot, setCard, setRespondido}) {
    const [istheanswer, setistheAnswer] = React.useState(false); 

    return (
        <>
        {
            !istheanswer ?
            <div className="card">
                {question}
                <ion-icon onClick={() => setistheAnswer(true)} name="repeat-outline"></ion-icon>
             </div> 
             :
            <div className="card">
                <div className="texto">
                    {answer}
                </div>
                <div>
                    <div className="userAnswer vermelho" onClick={() => {setFoot([...foot ,  {nome: 'close-circle-sharp', cor: 'red'}]); setCard(false); setRespondido({nome: 'close-circle-sharp', cor: 'red'})}}> Não Lembrei</div>
                    <div className="userAnswer laranja" onClick={() => {setFoot([...foot ,  {nome:'help-circle-sharp', cor: 'orange'}]); setCard(false); setRespondido({nome: 'help-circle-sharp', cor: 'orange'})}} > Quase não lembrei </div>
                    <div className="userAnswer verde" onClick={() => {setFoot([...foot ,  {nome: 'checkmark-circle', cor: 'green'}]); setCard(false); setRespondido( {nome:  'checkmark-circle', cor: 'green'})}}> Zap! </div>
                </div>
            </div>
        }
        </>
    )  
}
