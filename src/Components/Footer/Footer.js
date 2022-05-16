import "./footer.css"

import React from "react";

export default function Footer({Allquestions, foot}) {
    return (
        <>
        <div className="spacing">
        </div>
        <div className="footer">
         
            <Mensagem foot={foot}/>
            <p> {foot.length}/{Allquestions.length} </p> 
            
            <div>
                {
                    foot.map( (icon, index) => <div key={index} className={icon.cor}><ion-icon name={icon.nome}></ion-icon></div>
                    )
                }
            </div>
        </div>
        </>
    )
}


function Mensagem({foot}){
        let newFoot = foot.filter((elemento) => elemento.nome === 'close-circle-sharp')
        if (foot.length === 8){{
            return(
            (newFoot.length) === 0 ?
            <>
                <p> Parabéns!</p>
                <p> Você não esqueceu de nenhum flashcard! </p>
            </>
            :
            <>
                <p> Putz...</p>
                <p> Ainda faltam alguns... Mas não desanime! </p>
            </>
        )}
        }
        return (
            <p> </p>
        )

}