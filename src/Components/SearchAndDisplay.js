import React, { useState } from 'react'

import enterSearchText from '../Actions/index'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Render from './Render'


function SearchAndDisplay() {

  const [text, setText] = useState('')
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [nothingFound, setNothingFound] = useState(false)

  const dispatch = useDispatch()
  const addText = (text) => dispatch(enterSearchText(text))

  const pictures = result.map((photo) => (
    <figure className="gallery-frame" key={photo.id} >
      <img className='gallery-img' src={photo.urls.regular} alt='' />
      <figcaption>Author: {photo.user.name}</figcaption>
    </figure>
  ))

  const savingText = useSelector((state) => state.searchText)
  const saveInfo = savingText.map((savingText, index) => (
    <p className='saveLi' key={index} onClick={() => (savedSearchItems(savingText.searchText))} >{savingText.searchText}</p>
  ))
  const noDoubles = savingText.map((double) => (double.searchText))

  const onChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setNothingFound(false)
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + text + "&client_id=5K3WAlgbQBcHPunHaZhah0yg9kDDhpLMJ6tlEEv_RYI&per_page=50&orientation=portrait"
    axios.get(url)
      .then(setIsLoading(true))
      .then((response) => {
        setResult(response.data.results)
        if (response.data.total === 0) {
          setNothingFound(true)
        }
        setIsLoading(false)
        setText('')
      })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    let x
    let item = ''
    for (x in noDoubles) {
      item = noDoubles[x]
      if (text === item) {
        setText('')
      }
    }
    if (text !== '') {
      addText({
        searchText: text
      })
      setText('')
    }
  }

  const savedSearchItems = (searchText) => {
    setNothingFound(false)
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + searchText + "&client_id=5K3WAlgbQBcHPunHaZhah0yg9kDDhpLMJ6tlEEv_RYI&per_page=33&orientation=portrait"
    axios.get(url)
      .then(setIsLoading(true))
      .then((response) => {
        setResult(response.data.results)
        if (response.data.total === 0) {
          setNothingFound(true)
        }
        setIsLoading(false)
      })
  }

  return (
    <div>      
      <Render
        onSubmit={onSubmit}
        onChange={onChange}
        handleClick={handleClick}
        nothingFound={nothingFound}
        pictures={pictures}
        isLoading={isLoading}
        saveInfo={saveInfo}
        text={text}
      />
    </div>
  )
}

export default SearchAndDisplay