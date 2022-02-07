const RemoveProtocolPrefixFromUrl = (link) => link.replace(/(^\w+:|^)\/\//, '');

export default RemoveProtocolPrefixFromUrl;
