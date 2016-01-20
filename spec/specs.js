describe('pigLatinator', function() {
  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatinator("apple")).to.equal("appleay");
  });

  it("moves starting consonant to end and adds ay", function() {
    expect(pigLatinator("dog")).to.equal("ogday");
  });



});
