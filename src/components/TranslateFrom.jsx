import React, { useRef } from 'react'

const TranslateFrom = ({
  toTranslate,
  setToTranslate,
  from,
  setFrom,
  copyToClipboard,
  handleSpeech
}) => {
  const selectRef = useRef(null)
  return (
    <div className="from-card">
      <div className="lang-selector border-b py-3 border-[#49515e]">
        <button
          className={`lang-button ${from === 'en' ? 'bg-[#4d5562] text-white' : ''}`}
          onClick={() => setFrom('en')}
        >
          English
        </button>
        <button
          className={`lang-button ${from === 'fi' ? 'bg-[#4d5562] text-white' : ''}`}
          onClick={() => setFrom('fi')}
        >
          Finnish
        </button>
        <button
          className={`lang-button ${from === 'sv' ? 'bg-[#4d5562] text-white' : ''}`}
          onClick={() => setFrom('sv')}
        >
          Swedish
        </button>
        <select
          value={from}
          onChange={e => setFrom(e.target.value)}
          className={`lang-button ${from === 'ru' || from === 'et' ? 'bg-[#4d5562] text-white' : ''}`}
        >
          <option value="ru">Russian</option>
          <option value="et">Estonian</option>
        </select>
      </div>
      <textarea
        placeholder="Hello, how are you?"
        maxLength="500"
        value={toTranslate}
        onChange={e => setToTranslate(e.target.value)}
      />
      <p
        className={`text-xs items-end justify-end w-full flex ${toTranslate.length === 500 ? 'text-red-700' : 'text-gray-400'}`}
      >
        {toTranslate.length}/500
      </p>
      <div className="flex justify-between mt-2 w-full">
        <div className="flex gap-2">
          <button
            className="action-button"
            onClick={() =>
              handleSpeech(toTranslate, from === 'en' ? 'en-GB' : from)
            }
          >
            <img src="/sound_max_fill.svg" alt="Sound" />
          </button>
          <button
            className="action-button"
            onClick={() => copyToClipboard(toTranslate)}
          >
            <img src="/Copy.svg" alt="Copy" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default TranslateFrom
