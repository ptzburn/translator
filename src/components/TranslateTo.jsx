import React, { useRef } from 'react'

const TranslateTo = ({
  translation,
  setToTranslate,
  to,
  setTo,
  from,
  setFrom,
  copyToClipboard,
  handleSpeech
}) => {
  const swap = () => {
    let tempTo = to
    setTo(from)
    setFrom(tempTo)
    setToTranslate(translation)
  }

  const selectRef = useRef(null)
  return (
    <div className="from-card">
      <div className="flex justify-between w-full border-b border-[#49515e] items-center">
        <div className="lang-selector">
          {from !== 'en' && (
            <button
              className={`lang-button ${to === 'en' ? 'bg-[#4d5562] text-white' : ''}`}
              onClick={() => setTo('en')}
            >
              English
            </button>
          )}
          {from !== 'fi' && (
            <button
              className={`lang-button ${to === 'fi' ? 'bg-[#4d5562] text-white' : ''}`}
              onClick={() => setTo('fi')}
            >
              Finnish
            </button>
          )}
          <select
            value={to}
            onChange={e => setTo(e.target.value)}
            className={`lang-button ${to === 'ru' || to === 'et' || to === 'sv' ? 'bg-[#4d5562] text-white' : ''}`}
          >
            {from !== 'sv' && <option value="sv">Swedish</option>}
            {from !== 'ru' && <option value="ru">Russian</option>}
            {from !== 'et' && <option value="et">Estonian</option>}
          </select>
        </div>
        <button className="swap-button" onClick={swap}>
          <img src="/Horizontal_top_left_main.svg" alt="swap" />
        </button>
      </div>
      <textarea disabled value={translation} />
      <div className="flex justify-between mt-2 w-full">
        <div className="flex gap-2">
          <button
            className="action-button"
            onClick={() =>
              handleSpeech(translation, to === 'en' ? 'en-GB' : to)
            }
          >
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
export default TranslateTo
