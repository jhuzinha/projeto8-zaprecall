import Logo from "../../asserts/images/logo.png"
import React from "react"
import Footer from "../Footer/Footer"
import Card from "../Card/Card"
import "./deckScreen.css"

export default function DeckScreen() {
    const [foot, setFoot] = React.useState([])
    const Allquestions = [
        {
            statement: "O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript",
        },
        {
            statement: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            statement: "Componentes devem iniciar com __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            statement: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
        },
        {
            statement: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            statement: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            statement: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
        },
        {
            statement: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]
    return (
        <section className="deckScreen">
            <Header />
            <CreateQuestions Allquestions= {Allquestions} foot={foot} setFoot = {setFoot}/>
            <Footer Allquestions = {Allquestions} foot={foot} setFoot = {setFoot}/>
        </section>
    )
}

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo em formato de raio" />
            ZapRecall
        </header>
    )
}


function CreateQuestions({Allquestions, foot, setFoot}) {
    return (
        <ul className="questions">
            {Allquestions.map((question, index) =>
                <Card question={question.statement} answer={question.answer} index={index} key={index} foot={foot} setFoot = {setFoot}/>
            )}
        </ul>
    )

}


function random() { 
	return Math.random() -0.5; 
}