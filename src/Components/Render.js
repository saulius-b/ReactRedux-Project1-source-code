import React from 'react'

function Render(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className='searchDiv'>
          <h1>Image search app</h1>
          <input
            name='text'
            onChange={props.onChange}
            placeholder='Search Unsplash for some cool pics!'
            value={props.text}
          />
          <br/>
          <button
            className='myButton'
            onClick={props.handleClick}
          >Search</button>
          <button
            className='myButton'
            type='submit'
          >Save search</button>
        </div>
      </form>
      <div className='saveDiv'>
        {props.saveInfo}
      </div>
      <div className='picDiv'>
        {props.nothingFound ? <h2>Nothing found, try another keyword</h2> : null}
        {props.isLoading ?
          <div className="spinner"></div>
          : props.pictures}
      </div>
      <div className='footer'>
          Created by Saulius Balčiūnas
      </div>
    </div>
  )
}

export default Render