const RemoveProtocolPrefixFromUrl = (link) => {
  const result = link.replace(/(^\w+:|^)\/\//, '');
  return result;
};

export default RemoveProtocolPrefixFromUrl;
