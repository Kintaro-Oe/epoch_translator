describe('epochTranslator', function() {
  // let epoch = 1571320791;

  describe('when given a number', function() {
    it('returns a date object', function() {
      translated = epochTranslator(1571320791);
      expect(translated).toBeInstanceOf(Date);
    });

    it('returns the correct date in GMT', function() {
      translated = epochTranslator(1572524119);
      expect(translated.toUTCString()).toEqual(
        'Thu, 31 Oct 2019 12:15:19 GMT'
      );
    });
  });

  describe('when given any non number value', function() {
    it('returns a useful message', function() {
      translated = epochTranslator('random words');
      expect(translated).toEqual('please select a numerical value');
    });
  });
});
