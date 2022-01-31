import RemoveProtocolPrefixFromUrl from './removeProtocolPrefixFromUrl';

describe('RemoveProtocolPrefixFromUrl', () => {
  it.each`
    link                      | result           | prefix
    ${'https://site.com.ua/'} | ${'site.com.ua'} | ${'https://'}
    ${'http://site.org'}      | ${'site.org'}    | ${'http://'}
    ${'ftp://server.com'}     | ${'server.com'}  | ${'ftp://'}
  `('should return link $link without prefix $prefix', ({ link, result, prefix }) => {
    expect(RemoveProtocolPrefixFromUrl(link)).toContain(result);
    expect(RemoveProtocolPrefixFromUrl(link)).not.toContain(prefix);
  });
});
