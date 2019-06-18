import particles from './particles/particles';
import verbs from './verbs/verbs';
import personalPronouns from './pronouns/personal_pronouns';

const wanakana = require('wanakana');

function getVerbObject(verb) {
  return verbs.filter(verbObj => verbObj.verb === verb)[0];
}

function getParticleObject(particle) {
  return particles.filter(particleObj => particleObj.particle === particle)[0];
}

function generateVerbSentence(particles, destination, pronoun, verbConjugations, verbConjugation) {
    let linkingVerb = 'are';
    let verb;
    let preposition = '';
    if (destination && particles.includes('に')) {
      preposition = 'to';
    }
    // console.log(pronoun, verbConjugation);
    if (pronoun === 'I') {
      if (verbConjugation === 'present') {
        linkingVerb = ' am';
        verb = verbConjugations.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verbConjugations.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' am'
        verb = verbConjugations.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verbConjugations.past_negative.translations[0];
      }
    } else if (pronoun === 'you') {
      if (verbConjugation === 'present') {
        linkingVerb = ' are';
        verb = verbConjugations.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verbConjugations.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' are'
        verb = verbConjugations.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verbConjugations.past_negative.translations[1];
      }
    } else {
      if (verbConjugation === 'present') {
        linkingVerb = ' is';
        verb = verbConjugations.present.translations[0];
      } else if (verbConjugation === 'past') {
        linkingVerb = '';
        verb = verbConjugations.past.translations[0];
      } else if (verbConjugation === 'negative') {
        linkingVerb = ' is'
        verb = verbConjugations.negative.translations[0];
      } else if (verbConjugation === 'past_negative') {
        linkingVerb = '';
        verb = verbConjugations.past_negative.translations[0];
      }
    }
    // Cheeky workaround for wanakana so it always works.
    // setTimeout(() => {
      // console.log(`${wanakana.toHiragana(personalPronouns[0].word)}${wanakana.toHiragana(particles[0].particle)}${wanakana.toHiragana(verbs[0].verb)}`)
      // console.log(`${pronoun}${linkingVerb} ${verb} ${particle} Japan`)
      return `${pronoun}${linkingVerb} ${verb} ${preposition} ${destination}`;
    // }, 200);
};

export { generateVerbSentence, getVerbObject, getParticleObject };