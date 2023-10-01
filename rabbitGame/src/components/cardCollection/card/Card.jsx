import * as React from 'react';
import S from './Card.module.scss'
import q from '../../../accets/cardBack.jpeg'

export const Card = ({openCard}) => {
    return (
        <div className={`${S.body} ${openCard && S.openBody}`}>
            <div className={S.front}>

                <img src={q} alt=""/>
            </div>
            <div className={S.back}>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et mollitia perspiciatis rem velit!
                    Dignissimos dolores dolorum enim error expedita in iste iure necessitatibus repellat, repellendus
                    sint unde veritatis voluptatum!</p>
            </div>
        </div>
    );
};