import { ParseHashtags } from './parseHashtags';

describe('ParseHashtags', () => {
  it.each`
    text                              | contains
    ${'text #hashtag text'}           | ${' <a class="tag">#hashtag</a> '}
    ${'text @nickname text'}          | ${'<a class="tag"> @nickname</a> '}
    ${'text #hashtag @nickname text'} | ${' <a class="tag">#hashtag</a><a class="tag"> @nickname</a>'}
  `('result should contains $contains after call', ({ text, contains }) => {
    expect(ParseHashtags(text)).toContain(contains);
  });
  it.each`
    text                              | notContains
    ${'text #hashtag text'}           | ${'text #hashtag'}
    ${'text @nickname text'}          | ${'text @nickname'}
    ${'text #hashtag @nickname text'} | ${'text #hashtag @nickname'}
  `('result should not contains $contains after call', ({ text, notContains }) => {
    expect(ParseHashtags(text)).not.toContain(notContains);
  });
});
