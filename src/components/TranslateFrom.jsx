import React from 'react'

const TranslateFrom = ({
  toTranslate,
  setToTranslate,
  from,
  setFrom,
  copyToClipboard
}) => {
  return (
    <div className="from-card">
      <div className="lang-selector border-b py-3 border-[#49515e]">
        <button className="lang-button">Detect Language</button>
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
          className={`lang-button ${from === 'swe' ? 'bg-[#4d5562] text-white' : ''}`}
          onClick={() => setFrom('swe')}
        >
          Swedish
          <img src="/Expand_down.svg" alt="expand" />
        </button>
      </div>
      <textarea
        placeholder="Hello, how are you?"
        maxLength="500"
        value={toTranslate}
        onChange={e => setToTranslate(e.target.value)}
      />
      <div className="flex justify-between mt-2 w-full">
        <div className="flex gap-2">
          <button className="action-button">
            <img src="/sound_max_fill.svg" alt="Sound" />
          </button>
          <button
            className="action-button"
            onClick={() => copyToClipboard(toTranslate)}
          >
            <img src="/Copy.svg" alt="Copy" />
          </button>
        </div>
        <button className="translate-button">
          <img src="/Sort_alfa.svg" alt="A" />
          Translate
        </button>
      </div>
    </div>
  )
}
export default TranslateFrom
