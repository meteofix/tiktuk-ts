export const ParseHashtags = (text) => {
  try {
    const regularHashtag = /#[\dA-Za-z\u0080-\uFFFF]+/g;
    const regularUsername = /(^@|\s@)[\wА-я]+/g;
    let string;
    string = text.replace(regularHashtag, (string_) => `<a class="tag">${string_}</a>`);
    string = string.replace(regularUsername, (string_) => `<a class="tag">${string_}</a>`);
    return string;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error parse hashtags: ${error}`);
    return text;
  }
};
