import React from 'react'

function Render(props) {

  const pictures = props.result.map((photo) => (
    <figure className="gallery-frame" key={photo.id} >
      <img className='gallery-img' src={photo.urls.regular} alt='' />
      <figcaption>Author: {photo.user.name}</figcaption>
    </figure>
  ))

  function emptySearch() {
    let emptySearchText = "Nothing found, please try another keyword."
    if (props.nothingFound) {
      return emptySearchText
    }
  }
  function spinnerOrPictures() {
    let spinnerContents = <div className="spinner"></div>
    if (props.isLoading) {
      return spinnerContents
    } else {
      return pictures
    }
  }

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className='searchDiv'>
          <h1>Image search app</h1>
          <input
            name='text'
            onChange={props.onChange}
            placeholder='Search Unsplash for some cool pics!'
            value={props.text} />
          <br />
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
        {spinnerOrPictures()}
        {emptySearch()}
      </div>
      <div className='footer'>
        Created by Saulius Balčiūnas
      </div>
    </div>
  )
}

export default Render