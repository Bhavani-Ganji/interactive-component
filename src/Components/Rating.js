
import Card from './Card';
import './Rating.css';
import { ReactComponent as StarImage } from "../images/icon-star.svg"
import { useState } from 'react';

function Rating({rating,setRating,setThankYouPage}) {

    const [activeRatings, setactiveRatings] = useState({
        onestar: false,
        twostar: false,
        threestar: false,
        fourstar: false,
        fivestar: false,
    });
    const submit =()=>{

        if(!Rating) return;

        setThankYouPage(true);
    }

    return (
        <>
            <Card>
               <div className='starimage'><StarImage /></div> 
                <h2>How did we do?</h2>
                <p className='text'>Please let us know how we did with
                    your support request.All feedback is
                    appreciated to help us improve our offering!
                </p>
                <div className='rating_numbers'>
                    <div className={activeRatings.onestar ? 'rating_container active' : 'rating_container'}
                        onClick={
                            () => {
                                setactiveRatings({
                                    onestar: true,
                                    twostar: false,
                                    threestar: false,
                                    fourstar: false,
                                    fivestar: false,

                                })
                                setRating(1)
                            }
                        }
                        setRating>1</div>
                    <div className={activeRatings.twostar ? 'rating_container active' : 'rating_container'}
                        onClick={
                            () => {
                                setactiveRatings({
                                    onestar: false,
                                    twostar: true,
                                    threestar: false,
                                    fourstar: false,
                                    fivestar: false,

                                })
                                setRating(2)
                            }
                        }>2</div>
                    <div className={activeRatings.threestar ? 'rating_container active' : 'rating_container'}
                        onClick={
                            () => {
                                setactiveRatings({
                                    onestar: false,
                                    twostar: false,
                                    threestar: true,
                                    fourstar: false,
                                    fivestar: false,

                                })
                                setRating(3)
                            }

                        }>3</div>
                    <div className={activeRatings.fourstar ? 'rating_container active' : 'rating_container'}
                        onClick={
                            () => {
                                setactiveRatings({
                                    onestar: false,
                                    twostar: false,
                                    threestar: false,
                                    fourstar: true,
                                    fivestar: false,

                                })
                                setRating(4)
                            }
                        }>4</div>
                    <div className={activeRatings.fivestar ? 'rating_container active' : 'rating_container'}
                        onClick={
                            () => {
                                setactiveRatings({
                                    onestar: false,
                                    twostar: false,
                                    threestar: false,
                                    fourstar: false,
                                    fivestar: true,

                                })
                                setRating(5)
                            }
                        }>5</div>
                </div>
                <button className='submitbtn' onClick={submit}>Submit</button>

            </Card>
        </>
    );
}

export default Rating;
