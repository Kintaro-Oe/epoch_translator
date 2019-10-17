describe('epochTranslator', function() {
  // let epoch = 1571320791;

  describe('when given a number', function() {
    it('returns a date object', function() {
      translated = epochTranslator(1571320791);
      expect(translated).toBeInstanceOf(Date);
      console.log(translated)

      // expect(translated).toEqual(...);
    });
  });

  describe('when given any non number value', function() {
    it('returns a useful message', function() {
      translated = epochTranslator('random words');
      expect(translated).toEqual('please select a numerical value');
    });
  });
});