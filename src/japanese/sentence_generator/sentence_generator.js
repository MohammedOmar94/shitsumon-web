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
  return verbs.filter(verbObj => verbObj.word === verb)[0];
}

function getParticleObject(particle) {
  return particles.filter(particleObj => particleObj.particle === particle)[0];
}

function getVerb(pronoun, verbConjugation, verb) {
  verb = getVerbObject(verb).conjugations[verbConjugation];
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
    const linkingVerb = getLinkingVerb(pronounEng, 'present');
    if (otherInfo === 'name') {
      return { english: `${pronounEng} ${linkingVerb} Mohammed`, japanese: [ wanakana.toHiragana(pronounJp), "は", "Mohammed", "です" ]};
    }
    const descriptionEng = otherInfo.translations[0];
    const descriptionJp = otherInfo.kanji;
    return { english: `${pronounEng} ${linkingVerb} ${descriptionEng}`, japanese: [ wanakana.toHiragana(pronounJp), "は", wanakana.toHiragana(descriptionJp), "です" ]};
  } else if (subject === 'location') {
    const descriptionEng = otherInfo.translations[0];
    const descriptionJp = otherInfo.kanji;
    shuffle(locations);
    const locationEng = locations[0].translations[0];
    const locationJp = locations[0].kanji;
    return { english: `${locationEng} is ${descriptionEng}`, japanese: [ wanakana.toHiragana(locationJp), "は", wanakana.toHiragana(descriptionJp), "です"]};
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
    const japaneseVerb = verbs[0].conjugations[conjugation].kanji;
    const linkingVerb = getVerb(pronounEng, conjugation, 'ikimasu');
    if (otherInfo === 'name') {
      return { english: `${pronounEng} ${linkingVerb} ${preposition} Mohammed`, japanese: [ wanakana.toHiragana(pronounJp), "は", "Mohammed", particle, japaneseVerb ] };
    }
    const descriptionEng = location.translations[0];
    const descriptionJp = location.kanji;
    return { english: `${pronounEng} ${linkingVerb} ${preposition} ${descriptionEng}`, japanese: [ wanakana.toHiragana(pronounJp), "は", wanakana.toHiragana(descriptionJp), particle, wanakana.toHiragana(japaneseVerb) ] };
  } else {
    const descriptionEng = location.translations[0];
    const descriptionJp = location.kanji;
    const japaneseVerb = verbs[0].conjugations[conjugation].kanji;
    const linkingVerb = getVerb(pronoun, conjugation, 'ikimasu');
    return { english: `${topic} ${linkingVerb} ${preposition} ${descriptionEng}`, japanese: [ wanakana.toHiragana(topic), "は", wanakana.toHiragana(descriptionJp), particle, wanakana.toHiragana(japaneseVerb) ] };
  }
}

export { shuffle, getVerbObject, generateSentenceWithTopic, generateSentenceWithVerb };