export default function DeckScreen() {
    return (
        <section className="deckScreen">
            <Header />
            <Questions />
            <Footer />
        </section>
    )
}

function Header(){
    <header>
        <img src="images/image 1.png" alt="logo em formato de raio" />
        ZapRecall
    </header>
}


function Questions(){
    return(
        <ul className="questions">
        <button>
            <span>Pergunta 1</span>
            <ion-icon name="play-outline"></ion-icon>
        </button>

        <button>
            <span>Pergunta 2</span>
            <ion-icon name="play-outline"></ion-icon>
        </button>
        <button>
            <span>Pergunta 3</span>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    </ul>
    )
}


function Footer() {
    return (
        <footer>
            <p> 0/8 CONCLUÍDOS </p>
            <ion-icon className="green" name="checkmark-circle"></ion-icon>
            <ion-icon className="red" name="close-circle-sharp"></ion-icon>
            <ion-icon className="orange" name="help-circle-sharp"></ion-icon>
        </footer>
    )
}