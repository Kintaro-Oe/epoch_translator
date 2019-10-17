describe("epochTranslator", function() {
  let epoch = 1571320791;

  it("returns bla when bla", function() {
    translated = epochTranslator(epoch);
    expect(translated).toBeInstanceOf(Date);
    console.log(translated)

    // expect(translated).toEqual(...);
  });
});