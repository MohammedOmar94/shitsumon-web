import React from "react";

import KanaButton from "./KanaButton";

function KanaButtons({ onChange }) {
  const kanaCharacters = [
    { kanaCentre: "あ", kanaLeft: "い", kanaRight: "え", kanaBottom: "お", kanaTop: "う" },
    { kanaCentre: "か", kanaLeft: "き", kanaRight: "け", kanaBottom: "こ", kanaTop: "く" },
    { kanaCentre: "さ", kanaLeft: "し", kanaRight: "せ", kanaBottom: "そ", kanaTop: "す" },
    { kanaCentre: "た", kanaLeft: "ち", kanaRight: "て", kanaBottom: "と", kanaTop: "つ" },
    { kanaCentre: "な", kanaLeft: "に", kanaRight: "ね", kanaBottom: "の", kanaTop: "ぬ"},
    { kanaCentre: "は", kanaLeft: "ひ", kanaRight: "へ", kanaBottom: "ほ", kanaTop: "ふ" },
    { kanaCentre: "ま", kanaLeft: "み", kanaRight: "め", kanaBottom: "も", kanaTop: "む" },
    { kanaCentre: "や", kanaRight: "ゆ", kanaBottom: "よ" },
    { kanaCentre: "ら", kanaLeft: "り", kanaRight: "れ", kanaBottom: "ろ", kanaTop: "る" },
    { kanaCentre: "わ", kanaLeft: "を", kanaRight: "ー", kanaBottom: "～", kanaTop: "ん" },
  ]

  return (
    <div>
      {kanaCharacters.map((kanaSet, index) => {
            return (
              <KanaButton
                key={`kanaSet-${index}`}
                className="kanaButton"
                kanaCharacters={kanaSet}
                onChange={onChange}
              />
            )
        }
      )}
    </div>
  )
}

export default KanaButtons;
