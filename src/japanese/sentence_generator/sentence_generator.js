import particles from './particles/particles';
import verbs from './verbs/verbs';
import personalPronouns from './pronouns/personal_pronouns';

const wanakana = require('wanakana');

function generateVerbSentence() {
    const pronoun = personalPronouns[5].translations[0];
    let verb = verbs[0].conjugations[0];
    const verbConjugation = Object.keys(verb)[1];
    let linkingVerb = 'are';
    let particle = particles[0].translations[1];
    console.log(pronoun, verbConjugation);
    if (pronoun === 'I') {
      if (verbConjugation === 'present') {
        linkingVerb = ' am';
        verb = verb.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verb.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' am'
        verb = verb.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verb.past_negative.translations[0];
      }
    } else if (pronoun === 'you') {
      if (verbConjugation === 'present') {
        linkingVerb = ' are';
        verb = verb.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verb.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' are'
        verb = verb.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verb.past_negative.translations[1];
      }
    } else {
      if (verbConjugation === 'present') {
        linkingVerb = ' is';
        verb = verb.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verb.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' is'
        verb = verb.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verb.past_negative.translations[0];
      }
    }
    // Cheeky workaround for wanakana so it always works.
    setTimeout(() => {
      console.log(`${wanakana.toHiragana(personalPronouns[0].word)}${wanakana.toHiragana(particles[0].particle)}${wanakana.toHiragana(verbs[0].verb)}`)
      console.log(`${pronoun}${linkingVerb} ${verb} ${particle} Japan`)
      return `${wanakana.toHiragana(personalPronouns[0].word)}${wanakana.toHiragana(particles[0].particle)}${wanakana.toHiragana(verbs[0].verb)}`;
    }, 200);
};

export { generateVerbSentence };