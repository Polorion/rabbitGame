import * as React from 'react';
import {useEffect, useState} from 'react';

export const CardCollection = () => {
    const [card, setCard] = useState()
    const [refresh, setRefresh] = useState(true)
    const [cards, setCards] = useState([])
    const collectionCard = [
        {value: 1, type: 'go'},
        {value: 2, type: 'go'},
        {value: 3, type: 'go'},
        {value: 4, type: 'go'},
        {value: 5, type: 'go'},
    ]
    useEffect(() => {
        setCards(collectionCard)
    }, [refresh])
    const onChange = () => {

        const openCard = (cards[Math.floor(Math.random() * cards.length)])
        if (openCard) {

            setCard(openCard)
            setCards(prevState => prevState.filter(el => {
                if (el.value !== openCard.value) {
                    return el
                }
            }))
            if (cards.length === 1) {
                setRefresh(prevState => !prevState)
            }
        }
    }
    return (
        <div>
            {card && card.value}

            <button onClick={onChange}>1221</button>
        </div>

    );
};