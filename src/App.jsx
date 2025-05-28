import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import TranslateFrom from './components/TranslateFrom.jsx'
import TranslateTo from './components/TranslateTo.jsx'
import { useDebounce } from 'react-use'

const API_BASE_URL = 'https://api.mymemory.translated.net'

const App = () => {
  const [toTranslate, setToTranslate] = useState('')
  const [translation, setTranslation] = useState('')
  const [from, setFrom] = useState('en')
  const [to, setTo] = useState('swe')
  const [debouncedToTranslate, setDebouncedToTranslate] = useState('')

  const [showCopied, setShowCopied] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useDebounce(() => setDebouncedToTranslate(toTranslate), 500, [toTranslate])

  const fetchTranslation = async (q, from, to) => {
    setIsLoading(true)
    setError('')
    try {
      const endpoint = q
        ? `${API_BASE_URL}/get?q=${encodeURIComponent(q)}&langpair=${encodeURIComponent(from)}|${encodeURIComponent(to)}`
        : `${API_BASE_URL}/get?q=Hello, how are you?&langpair=${from}|${to}`

      const response = await fetch(endpoint)

      if (!response.ok) {
        throw Error('Failed to translate')
      }

      const translated = await response.json()

      if (translated.Response === 'False') {
        setError(translation.Error || 'Failed to translate')
        setTranslation('')
        return
      }

      setTranslation(translated.responseData.translatedText || '')
    } catch (error) {
      console.error(`Translation error: ${error}`)
      setError('Translation error. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async copyThis => {
    try {
      await navigator.clipboard.writeText(copyThis)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  useEffect(() => {
    fetchTranslation(debouncedToTranslate, from, to)
  }, [debouncedToTranslate, from, to])

  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col lg:flex-row gap-3 mt-20">
        <TranslateFrom
          toTranslate={toTranslate}
          setToTranslate={setToTranslate}
          from={from}
          setFrom={setFrom}
          copyToClipboard={copyToClipboard}
        />
        <TranslateTo
          translation={translation}
          setToTranslate={setToTranslate}
          to={to}
          setTo={setTo}
          from={from}
          setFrom={setFrom}
          copyToClipboard={copyToClipboard}
        />
      </div>
      {showCopied && <span className="copied">Copied!</span>}
    </main>
  )
}
export default App
