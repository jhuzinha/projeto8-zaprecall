import React from "react";
import "./card.css"

export default function Card({question, index}) {
    const [card, setCard] = React.useState(false);
    return (
        <>
            {!card ?

                <button onClick={() => setCard(true)}>
                    <span> Pergunta {index + 1}</span>
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                :
                <div className="card">
                    {question}
                    <ion-icon name="repeat-outline"></ion-icon>
                </div>
            }
        </>
    )

}

