import locations from './locations/locations';
import personalPronouns from './pronouns/personal_pronouns';

import * as sentenceGenerator from './sentence_generator';

describe("'ikimasu' conjugations in english", () => {
  const verbConjugations = sentenceGenerator.getVerbObject('ikimasu').conjugations;
  const location = locations[0];
  let topic;
  let otherInfo;

  beforeEach(() => {
    topic = 'pronoun';
    otherInfo = 'location;'
  })

  describe("present conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[0];
    test('is using present verb conjugation', () => {
      expect(verbConjugation).toBe('present');
    });
    test("sentence is 'I am going to Japan'", () => {
      const pronoun = personalPronouns[0];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('I am going to Japan');
    });
    test("sentence is 'you are going to Japan'", () => {
      const pronoun = personalPronouns[3];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('you are going to Japan');
    });
    test("sentence is 'he is going to Japan'", () => {
      const pronoun = personalPronouns[5];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('he is going to Japan');
    });
    test("sentence is 'she is going to Japan'", () => {
      const pronoun = personalPronouns[6];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('she is going to Japan');
    });
    test("sentence is 'Mo is going to Japan'", () => {
      const pronoun = null;
      topic = 'Mo';
      otherInfo = 'name';
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('Mo is going to Japan');
    });
  });


  describe("past conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[1];
    test('is using past verb conjugation', () => {
      expect(verbConjugation).toBe('past');
    });
    test("sentence is 'I went to Japan'", () => {
      const pronoun = personalPronouns[0];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('I went to Japan');
    });
    test("sentence is 'you went to Japan'", () => {
      const pronoun = personalPronouns[3];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('you went to Japan');
    });
    test("sentence is 'he went to Japan'", () => {
      const pronoun = personalPronouns[5];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('he went to Japan');
    });
    test("sentence is 'she went to Japan'", () => {
      const pronoun = personalPronouns[6];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('she went to Japan');
    });
    test("sentence is 'Mo went to Japan'", () => {
      const pronoun = null;
      topic = 'Mo';
      otherInfo = 'name';
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('Mo went to Japan');
    });
  });

  describe("negative conjugations", () => {
    const verbConjugation = Object.keys(verbConjugations)[2];
    test('is using negative verb conjugation', () => {
      expect(verbConjugation).toBe('negative');
    });
    test("sentence is 'I am not going to Japan'", () => {
      const pronoun = personalPronouns[0];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('I am not going to Japan');
    });
    test("sentence is 'you did not go to Japan'", () => {
      const pronoun = personalPronouns[3];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('you did not go to Japan');
    });
    test("sentence is 'he did not go to Japan'", () => {
      const pronoun = personalPronouns[5];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('he did not go to Japan');
    });
    test("sentence is 'she did not go to Japan'", () => {
      const pronoun = personalPronouns[6];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('she did not go to Japan');
    });
    test("sentence is 'Mo did not go to Japan'", () => {
      const pronoun = null;
      topic = 'Mo';
      otherInfo = 'name';
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('Mo did not go to Japan');
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
      const pronoun = personalPronouns[0];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('I was not going to Japan');
    });
    test("sentence is 'you were not going to Japan'", () => {
      const pronoun = personalPronouns[3];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('you were not going to Japan');
    });
    test("sentence is 'he was not going to Japan'", () => {
      const pronoun = personalPronouns[5];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('he was not going to Japan');
    });
    test("sentence is 'she was not going to Japan'", () => {
      const pronoun = personalPronouns[6];
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('she was not going to Japan');
    });
    test("sentence is 'Mo was not going to Japan'", () => {
      const pronoun = null;
      topic = 'Mo';
      otherInfo = 'name';
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, topic, otherInfo, location, verbConjugation);
      expect(sentence.english).toBe('Mo was not going to Japan');
    });
  });
});