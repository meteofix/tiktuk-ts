const RemoveProtocolPrefixFromUrl = (link: string): string => link.replace(/(^\w+:|^)\/\//, '');

export default RemoveProtocolPrefixFromUrl;
