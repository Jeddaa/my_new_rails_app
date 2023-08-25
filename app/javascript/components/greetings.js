import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import fetchGreetings from '../app/greetingSlice';

const Greetings = () => {
  console.log('Greetings components');
  const greeting = useSelector((store) => store);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('it entered here')
    dispatch(fetchGreetings());
    console.log('it has dispatched here');
  }, [dispatch]);
  // useEffect(() => {
  //   setTimeout (() => dispatch
  //     (fetchGreetings()), 5000);
  //   // dispatch(fetchGreetings());
  // }, [dispatch]);
  console.log('greeting', greeting);


  return (
    <div>
      {/* {isLoading && <p>Loading...</p>}
      {isError && <p>{isError}</p>} */}
      <h1>Random greetings</h1>
      {/* <p>{greeting.greeting}</p> */}
    </div>
  )
}

export default Greetings;
