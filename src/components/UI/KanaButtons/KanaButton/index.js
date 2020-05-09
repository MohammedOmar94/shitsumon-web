import "./styles.scss";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ZingTouch from 'zingtouch';

import Button from "../../Button/Button";

Button.PropTypes = {
  kanaCharacters: PropTypes.array,
  onChange: PropTypes.func
}

function KanaButton({ kanaCharacters, onChange }) {
  const [hasHover, setHasHover] = useState(false)
  const [kanaPreview, updateKanaPreview] = useState();
  const [swipeDirection, updateSwipeDirection] = useState(0)
  const [hasFinishedSwiping, updatingIsSwiping] = useState(false)

  const handleMouseOver = (kana) => {
    updateKanaPreview(kana)
    setHasHover(true);
  }

  const { kanaCentre, kanaLeft, kanaRight, kanaBottom, kanaTop } = kanaCharacters;


  const myElement = document.getElementById(`kanaButton-${kanaCentre}`);
  const root = document.getElementById(`root`);
  const handleSwipe = (e) => {
    const { currentDirection } = e.detail.data[0]
    // console.log(currentDirection)
    if (currentDirection > 25 && currentDirection < 155) {
      handleMouseOver(kanaTop)
      console.log(kanaTop)
    }
  }

  const preventDefault = (e) => {
    e.preventDefault()
  }

  if (myElement) {
    const zt = new ZingTouch.Region(myElement);
    const panGesture = new ZingTouch.Pan();
    zt.bind(myElement, panGesture, handleSwipe);
  }

  useEffect(() => {
    if (myElement) {
      console.log("Hey")
      myElement.addEventListener('touchmove', preventDefault)
    }
  }, [])

  return (
    <>
      <h4 style={{color: "black"}}>{swipeDirection}</h4>
      <Button id={`kanaButton-${kanaCentre}`} className="kanaButton" disableHover={true} onMouseUp={() => onChange(kanaPreview)}>
        <div
          id={kanaCentre}
          onTouchStart={() => handleMouseOver(kanaCentre)}
        >
          {kanaCentre}
        </div>
        {hasHover &&
          <>
            <Button className="kanaButton__kanaPreview">{kanaPreview}</Button>
          </>
        }
        {kanaLeft &&
          <div
            className="kanaButton__left"
            onTouchMove={() => handleMouseOver(kanaLeft)}
          >
            <span className="kanaButton__leftLabel">{kanaLeft}</span>
          </div>
        }
        {kanaRight &&
          <div
            className="kanaButton__right"
            onTouchMove={() => handleMouseOver(kanaRight)}
          >
            <span className="kanaButton__rightLabel">{kanaRight}</span>
          </div>
        }
        {kanaBottom &&
          <div
            className="kanaButton__bottom"
            onTouchMove={() => handleMouseOver(kanaBottom)}
          >
            <span className="kanaButton__bottomLabel">{kanaBottom}</span>
          </div>
        }
        {kanaTop &&
          <div
            className="kanaButton__top"
            onTouchMove={() => handleMouseOver(kanaTop)}
          >
            <span className="kanaButton__topLabel">{kanaTop}</span>
          </div>
        }
      </Button>
    </>
  )
}

export default KanaButton;
