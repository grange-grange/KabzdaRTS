import React, {useState} from "react";

type UncontrolledRatingPropsType = {
}

export function  UncontrolledRating(props:  UncontrolledRatingPropsType) {

    let [rating, setRating] = useState(0)

    const onClickCallBack = (rate: number) => {setRating(rate)}

    return (
        <div>
            <Star rate={1} onClickCallBack={onClickCallBack} rating={rating}/>
            <Star rate={2} onClickCallBack={onClickCallBack} rating={rating}/>
            <Star rate={3} onClickCallBack={onClickCallBack} rating={rating}/>
            <Star rate={4} onClickCallBack={onClickCallBack} rating={rating}/>
            <Star rate={5} onClickCallBack={onClickCallBack} rating={rating}/>
        </div>
    )
}

type StarPropsType = {
    rate: number;
    onClickCallBack: (rate: number) => void
    rating: number
}

function Star(props: StarPropsType) {

    return props.rate <= props.rating
        ? (<span onClick={() => props.onClickCallBack(props.rate)}><b>star</b> </span>)
        : (<span onClick={() => props.onClickCallBack(props.rate)}>star </span>)

}