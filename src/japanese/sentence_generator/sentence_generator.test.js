import particles from './particles/particles';
import verbs from './verbs/verbs';
import personalPronouns from './pronouns/personal_pronouns';

import * as sentenceGenerator from './sentence_generator';

describe("'ikimasu' conjugations in english", () => {
  const verbConjugations = verbs[0].conjugations[0];
  const niParticle = particles[0].translations[1];

  describe("present conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[0];
    test('is using present verb conjugation', () => {
      expect(verbConjugation).toBe('present');
    });
    test("sentence is 'I am going to Japan'", () => {
      const pronoun = personalPronouns[0].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('I am going to Japan');
    });
    test("sentence is 'you are going to Japan'", () => {
      const pronoun = personalPronouns[3].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('you are going to Japan');
    });
    test("sentence is 'he is going to Japan'", () => {
      const pronoun = personalPronouns[5].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('he is going to Japan');
    });
    test("sentence is 'she is going to Japan'", () => {
      const pronoun = personalPronouns[6].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('she is going to Japan');
    });
    test("sentence is 'Mo is going to Japan'", () => {
      const pronoun = 'Mo';
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('Mo is going to Japan');
    });
  });


  describe("past conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[1];
    test('is using past verb conjugation', () => {
      expect(verbConjugation).toBe('past');
    });
    test("sentence is 'I went to Japan'", () => {
      const pronoun = personalPronouns[0].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('I went to Japan');
    });
    test("sentence is 'you went to Japan'", () => {
      const pronoun = personalPronouns[3].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('you went to Japan');
    });
    test("sentence is 'he went to Japan'", () => {
      const pronoun = personalPronouns[5].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('he went to Japan');
    });
    test("sentence is 'she went to Japan'", () => {
      const pronoun = personalPronouns[6].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('she went to Japan');
    });
    test("sentence is 'Mo went to Japan'", () => {
      const pronoun = 'Mo';
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('Mo went to Japan');
    });
  });

  describe("negative conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[2];
    test('is using negative verb conjugation', () => {
      expect(verbConjugation).toBe('negative');
    });
    test("sentence is 'I am not going to Japan'", () => {
      const pronoun = personalPronouns[0].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('I am not going to Japan');
    });
    test("sentence is 'you are not going to Japan'", () => {
      const pronoun = personalPronouns[3].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('you are not going to Japan');
    });
    test("sentence is 'he is not going to Japan'", () => {
      const pronoun = personalPronouns[5].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('he is not going to Japan');
    });
    test("sentence is 'she is not going to Japan'", () => {
      const pronoun = personalPronouns[6].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('she is not going to Japan');
    });
    test("sentence is 'Mo is not going to Japan'", () => {
      const pronoun = 'Mo';
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('Mo is not going to Japan');
    });
  });

  // test('alternative negative verb conjugation with the word I', () => {
  //   const pronoun = personalPronouns[0].translations[0];
  //   let verb = verbs[0].conjugations[0];
  //   const verbConjugation = Object.keys(verb)[2];
  //   let particle = particles[0].translations[1];
  //   const sentence = sentenceGenerator.generateVerbSentence(particle, pronoun, verb, verbConjugation);
  //   expect(sentence).toBe('I did not go to Japan');
  // });

  describe("past negative conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[3];
    test('is using past negative verb conjugation', () => {
      expect(verbConjugation).toBe('past_negative');
    });
    test("sentence is 'I was not going to Japan'", () => {
      const pronoun = personalPronouns[0].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('I was not going to Japan');
    });
    test("sentence is 'you were not going to Japan'", () => {
      const pronoun = personalPronouns[3].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('you were not going to Japan');
    });
    test("sentence is 'he was not going to Japan'", () => {
      const pronoun = personalPronouns[5].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('he was not going to Japan');
    });
    test("sentence is 'she was not going to Japan'", () => {
      const pronoun = personalPronouns[6].translations[0];
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('she was not going to Japan');
    });
    test("sentence is 'Mo was not going to Japan'", () => {
      const pronoun = 'Mo';
      const sentence = sentenceGenerator.generateVerbSentence(niParticle, pronoun, verbConjugations, verbConjugation);
      expect(sentence).toBe('Mo was not going to Japan');
    });
  });
});