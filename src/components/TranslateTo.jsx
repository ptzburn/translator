import React from 'react'

const TranslateFrom = ({
  translation,
  setToTranslate,
  to,
  setTo,
  from,
  setFrom,
  copyToClipboard
}) => {
  const swap = () => {
    let tempTo = to
    setTo(from)
    setFrom(tempTo)
    setToTranslate(translation)
  }

  return (
    <div className="from-card">
      <div className="flex justify-between w-full border-b border-[#49515e] items-center">
        <div className="lang-selector">
          <button
            className={`lang-button ${to === 'en' ? 'bg-[#4d5562] text-white' : ''}`}
            onClick={() => setTo('en')}
          >
            English
          </button>
          <button
            className={`lang-button ${to === 'fi' ? 'bg-[#4d5562] text-white' : ''}`}
            onClick={() => setTo('fi')}
          >
            Finnish
          </button>
          <button
            className={`lang-button ${to === 'swe' ? 'bg-[#4d5562] text-white' : ''}`}
            onClick={() => setTo('swe')}
          >
            Swedish
            <img src="/Expand_down.svg" alt="expand" />
          </button>
        </div>
        <button className="swap-button" onClick={swap}>
          <img src="/Horizontal_top_left_main.svg" alt="swap" />
        </button>
      </div>
      <textarea disabled value={translation} />
      <div className="flex justify-between mt-2 w-full">
        <div className="flex gap-2">
          <button className="action-button">
            <img src="/sound_max_fill.svg" alt="Sound" />
          </button>
          <button
            className="action-button"
            onClick={() => copyToClipboard(translation)}
          >
            <img src="/Copy.svg" alt="Copy" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default TranslateFrom
