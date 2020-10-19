import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import enterSearchText from '../Actions/App'
import Render from '../Components/Render'

function SearchAndDisplay() {

  const clientId = '5K3WAlgbQBcHPunHaZhah0yg9kDDhpLMJ6tlEEv_RYI'
  const [text, setText] = useState('')
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [nothingFound, setNothingFound] = useState()

  const onChange = (event) => {
    setText(event.target.value)
  }

  function handleErrors(err) {
    if (err.response) {
      alert('Issue with the response, error code: ' + err.response.status)
    } else if (err.request) {
      alert('Issue the with the request')
    } else {
      alert('Error', err.message)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    setNothingFound(false)
    setIsLoading(true)
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + text + "&client_id=" + clientId + "&per_page=50&orientation=portrait"
    axios.get(url)
      .then((response) => {
        setResult(response.data.results)
        if (response.data.total === 0) {
          setNothingFound(true)
        }
        setIsLoading(false)
        setText('')
      })
      .catch(handleErrors)
  }

  const onSubmit = (event) => {
    event.preventDefault()    
    if (text !== '') {
      addText({
        searchText: text
      })
      setText('')
    }
  }

  const dispatch = useDispatch()
  const addText = (text) => dispatch(enterSearchText(text))  
  const savingText = useSelector((state) => state.searchText)
  const saveInfo = savingText.map((savingText, index) => (
    <p className='saveLi' key={index} onClick={() => (savedSearchItems(savingText.searchText))} >{savingText.searchText}</p>
  ))

  const savedSearchItems = (searchText) => {
    setNothingFound(false)
    setIsLoading(true)
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + searchText + "&client_id=" + clientId + "&per_page=33&orientation=portrait"
    axios.get(url)
      .then((response) => {
        setResult(response.data.results)
        if (response.data.total === 0) {
          setNothingFound(true)
        }
        setIsLoading(false)
      })
      .catch(handleErrors)
  }

  return (
    <div>
      <Render
        onSubmit={onSubmit}
        onChange={onChange}
        handleClick={handleClick}
        nothingFound={nothingFound}
        result={result}
        isLoading={isLoading}
        saveInfo={saveInfo}
        text={text}        
      />
    </div>
  )
}

export default SearchAndDisplay