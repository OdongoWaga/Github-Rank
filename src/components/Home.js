import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Compare Github Stats</h1>
      <Link to='/battle' className='button'>Compare</Link>
    </div>
  )
}
