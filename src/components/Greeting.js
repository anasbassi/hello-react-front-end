import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="div">
      <h1>
        Greetings:
        {greet}
      </h1>
      <button onClick={(e) => handleGreeting(e)} type="submit">Greet Randomly</button>
    </div>
  );
};

export default Greeting;
