
import { useState } from 'react';
import './App.css';
import './Components/Rating.css';
import Rating from './Components/Rating';
import Thankyou from './Components/Thankyou';

function App() {

  const [ThankYouPage, setThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>


      {
        ThankYouPage ? (<Thankyou rating={rating} /> ): (<Rating
          rating={rating}
          setRating={setRating}
          setThankYouPage={setThankYouPage}
        />)
      }
    </>
  );
}

export default App;
