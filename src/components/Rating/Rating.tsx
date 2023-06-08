import React from "react";


export type RatingType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    rating: RatingType
    setRating: (rating: RatingType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");

    return (
        <div>
            <Star selected={ props.rating > 0 } setRating={() => props.setRating(1)}/>
            <Star selected={ props.rating > 1 } setRating={() => props.setRating(2)}/>
            <Star selected={ props.rating > 2 } setRating={() => props.setRating(3)}/>
            <Star selected={ props.rating > 3 } setRating={() => props.setRating(4)}/>
            <Star selected={ props.rating > 4 } setRating={() => props.setRating(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    setRating: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRating}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}