const RemoveProtocolPrefixFromUrl = (link) => {
  return link.replace(/(^\w+:|^)\/\//, '');
};

export default RemoveProtocolPrefixFromUrl;
