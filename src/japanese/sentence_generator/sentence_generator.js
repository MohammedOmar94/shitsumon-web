import adjectives from './adjectives/adjectives';
import locations from './locations/locations';
import particles from './particles/particles';
import verbs from './verbs/verbs';
import personalPronouns from './pronouns/personal_pronouns';

const wanakana = require('wanakana');



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function getVerbObject(verb) {
  return verbs.filter(verbObj => verbObj.present.word === verb)[0];
}

function getVerb(pronoun, verbConjugation, verb) {
  verb = getVerbObject(verb)[verbConjugation];
  if (pronoun === 'I') {
    if (verbConjugation === 'present') {
      return 'am ' + verb.translations[0];
    } else if (verbConjugation === 'past') {
      return '' + verb.translations[0];
    } else if (verbConjugation === 'negative') {
      return 'am ' + verb.translations[0];
    } else if (verbConjugation === 'past_negative') {
      return '' + verb.translations[0];
    }
  } else if (pronoun === 'you') {
    if (verbConjugation === 'present') {
      return 'are ' + verb.translations[0];
    } else if (verbConjugation === 'past') {
      return '' + verb.translations[0];
    } else if (verbConjugation === 'negative') {
      return '' + verb.translations[1];
    } else if (verbConjugation === 'past_negative') {
      return '' + verb.translations[1];
    }
  } else {
    if (verbConjugation === 'present') {
      return 'is ' + verb.translations[0];
    } else if (verbConjugation === 'past') {
      return '' + verb.translations[0];
    } else if (verbConjugation === 'negative') {
      return '' + verb.translations[1];
    } else if (verbConjugation === 'past_negative') {
      return '' + verb.translations[0];
    }
  }
}

function getLinkingVerb(pronoun, verbConjugation) {
  if (pronoun === 'I') {
    if (verbConjugation === 'present') {
      return 'am';
    } else if (verbConjugation === 'past') {
      return '';
    } else if (verbConjugation === 'negative') {
      return 'am';
    } else if (verbConjugation === 'past_negative') {
      return '';
    }
  } else if (pronoun === 'you') {
    if (verbConjugation === 'present') {
      return 'are';
    } else if (verbConjugation === 'past') {
      return '';
    } else if (verbConjugation === 'negative') {
      return 'are';
    } else if (verbConjugation === 'past_negative') {
      return '';
    }
  } else {
    if (verbConjugation === 'present') {
      return 'is';
    } else if (verbConjugation === 'past') {
      return '';
    } else if (verbConjugation === 'negative') {
      return 'is';
    } else if (verbConjugation === 'past_negative') {
      return '';
    }
  }
}

function generateSentenceWithTopic(subject, otherInfo) {
  if (otherInfo === 'adjective') {
    shuffle(adjectives);
    otherInfo = adjectives[0];
  }
  if (subject === 'pronoun') {
    shuffle(personalPronouns);
    const pronoun = personalPronouns[0];
    const pronounEng = pronoun.translations[0];
    const pronounJp = pronoun.kanji;
    const pronounKana = pronoun.word;
    const linkingVerb = getLinkingVerb(pronounEng, 'present');
    if (otherInfo === 'name') {
      return { english: `${pronounEng} ${linkingVerb} Mohammed`, japanese: [ pronounJp, "は", "Mohammed", "です" ], kana: [ wanakana.toHiragana(pronounKana), "は", "Mohammed", "です" ], tooltipEng: [ pronounEng, linkingVerb, "Mohammed" ]};
    }
    const descriptionEng = otherInfo.translations[0];
    const descriptionJp = otherInfo.kanji;
    const descriptionKana = otherInfo.word;
    return { english: `${pronounEng} ${linkingVerb} ${descriptionEng}`, japanese: [ pronounJp, "は", descriptionJp, "です" ], kana: [ wanakana.toHiragana(pronounKana), "は", wanakana.toHiragana(descriptionKana), "です" ], tooltipEng: [ pronounEng, linkingVerb, descriptionEng, "[no direct translation]" ]};
  } else if (subject === 'location') {
    const descriptionEng = otherInfo.translations[0];
    const descriptionJp = otherInfo.kanji;
    const descriptionKana = otherInfo.word;
    shuffle(locations);
    const locationEng = locations[0].translations[0];
    const locationJp = locations[0].kanji;
    const locationKana = locations[0].word;
    return { english: `${locationEng} is ${descriptionEng}`, japanese: [ locationJp, "は", descriptionJp, "です"], kana: [ wanakana.toHiragana(locationKana), "は", wanakana.toHiragana(descriptionKana), "です"], tooltipEng: [ locationEng, descriptionEng, "[no direct translation]" ]};
  }
}

function generateSentenceWithVerb(particle, pronoun, topic, otherInfo, location, conjugation) {
  let preposition = '';
  if (particle === 'に') {
    preposition = 'to';
  } else if (particle === 'と') {
    preposition = 'with';
  }
  if (topic === 'pronoun') {
    const pronounEng = pronoun.translations[0];
    const pronounJp = pronoun.kanji;
    const pronounKana = pronoun.word;
    const japaneseVerb = verbs[0][conjugation].kanji;
    const kanaVerb = verbs[0][conjugation].word;
    const linkingVerb = getVerb(pronounEng, conjugation, 'ikimasu');
    if (otherInfo === 'name') {
      return { english: `${pronounEng} ${linkingVerb} ${preposition} Mohammed`, japanese: [ pronounJp, "は", "Mohammed", particle, japaneseVerb ], kana: [ wanakana.toHiragana(pronounKana), "は", "Mohammed", particle, wanakana.toHiragana(kanaVerb) ], tooltipEng: [ pronounEng, "[topic particle]", "Mohammed", preposition, linkingVerb ]};
    }
    const descriptionEng = location.translations[0];
    const descriptionJp = location.kanji;
    const descriptionKana = location.word;
    return { english: `${pronounEng} ${linkingVerb} ${preposition} ${descriptionEng}`, japanese: [ pronounJp, "は", descriptionJp, particle, japaneseVerb ], kana: [ wanakana.toHiragana(pronounKana), "は", wanakana.toHiragana(descriptionKana), particle, wanakana.toHiragana(kanaVerb) ], tooltipEng: [ pronounEng, "[topic particle]", descriptionEng, preposition, linkingVerb ] };
  } else {
    const descriptionEng = location.translations[0];
    const descriptionJp = location.kanji;
    const descriptionKana = location.word;
    const japaneseVerb = verbs[0][conjugation].kanji;
    const kanaVerb = verbs[0][conjugation].word;
    const linkingVerb = getVerb(pronoun, conjugation, 'ikimasu');
    return { english: `${topic} ${linkingVerb} ${preposition} ${descriptionEng}`, japanese: [ topic, "は", descriptionJp, particle, japaneseVerb ], kana: [ wanakana.toHiragana(topic), "は", wanakana.toHiragana(descriptionKana), particle, wanakana.toHiragana(kanaVerb) ], tooltipEng: [ topic, "[topic particle]", descriptionEng, preposition, linkingVerb ]};
  }
}

export { shuffle, getVerbObject, generateSentenceWithTopic, generateSentenceWithVerb };