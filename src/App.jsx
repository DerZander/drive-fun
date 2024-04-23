import './App.css'
import {Button, Card, Figure} from "react-bootstrap";
import {Component, useState} from "react";
import {autobahnDeck, normalDeck, rastDeck, specialDeck} from "./data/driverCards.js";
import * as PropTypes from "prop-types";
import {ZonenZeichen} from "./data/verkehrszeichen.js";

function getRandomElement(cardType = "normal") {
    let deck = [];

    switch (cardType) {
        case 'normal':
            deck = normalDeck;
            break;
        case 'autobahn':
            deck = autobahnDeck;
            break;
        case 'rast':
            deck = rastDeck;
            break;
        default:
            deck = normalDeck;
    }
    const deckList = deck.concat(specialDeck);

    let currentDeck = []
    for (let i = 0; i < deckList.length; i++) {
        const amount = deckList[i].weight * deckList.length;
        for (let j = 0; j < amount; j++) {
            currentDeck.push(deckList[i]);
        }
    }

    const randomIndex = Math.floor(Math.random() * currentDeck.length);
    return currentDeck[randomIndex];
}


class DriverCard extends Component {
    render() {
        let {driverCard, isNewCard} = this.props;
        let cardClass = isNewCard ? "new-card" : "";
        return (
            <Card className={cardClass} style={{width: '18rem'}}>
                {driverCard.image ? <Card.Img variant="top" src={"src/assets/images/" + driverCard.image}/> : null}
                <Card.Body>
                    <Card.Title>{driverCard.title}</Card.Title>
                    <Card.Text>
                        {driverCard.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

class TypeCard extends Component {
    render() {
        let {type} = this.props;
        let image;

        switch (type) {
            case 'normal':
                image = ZonenZeichen.Normal
                break
            case 'autobahn':
                image = ZonenZeichen.Autobahn
                break
            case 'rast':
                image = ZonenZeichen.Rast
                break
            default:
                image = ZonenZeichen.Normal
        }


        if (image) {
            return (
                <Figure>
                    <Figure.Image width={100} variant="top" src={"src/assets/images/" + image}/>
                </Figure>
            )
        } else {
            return null
        }

    }
}

TypeCard.propTypes = {type: PropTypes.any}

DriverCard.propTypes = {driverCard: PropTypes.any, isNewCard: PropTypes.bool}

export default function App() {
    const [driverCardsHistory, setDriverCardsHistory] = useState([])
    const [driverCard, setDriverCard] = useState(getRandomElement())
    const [game, setGame] = useState(false)
    const [currentGameType, setCurrentGameType] = useState('normal')
    const [isNewCard, setIsNewCard] = useState(false)

    const setHistory = (driverCard) => {
        setDriverCardsHistory([...driverCardsHistory, driverCard])
    }

    const drawNewCard = () => {
        setHistory(driverCard)
        const card = getRandomElement(currentGameType);
        setDriverCard(card)
        setCurrentGameType(card.type)

        setIsNewCard(true)
        setTimeout(() => setIsNewCard(false), 500)
    }


    return (
        <div>
            {game ?
                <div className="app-content">
                    <Button variant={"danger"} onClick={() => setGame(false)}>Stop</Button>
                    <TypeCard type={currentGameType}/>
                    <DriverCard driverCard={driverCard} isNewCard={isNewCard}/>

                    <Button variant="primary" onClick={drawNewCard}>Nächste Karte</Button>
                </div>
                :
                <Button onClick={() => setGame(true)}>
                    Start Game
                </Button>
            }
        </div>
    )
}