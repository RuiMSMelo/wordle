import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [word, setWord] = useState('')

    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word')
            .then((response) => {
                console.log('response', response)
                return response.json()
            })
            .then((data) => {
                console.log('data', data)
                setWord(data)
            })
    }, [])

    return <>Wordle: {word}</>
}

export default App
