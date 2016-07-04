describe("function checkWordCount", function() {

  it("checkWordCount should be defined", function() {
    expect(checkWordCount).toBeDefined();
  });

  it("should return false if a string sent to it has more than 100 words in it", function() {

      let string = "This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it This is a string with one hundred words in it";
      expect(checkWordCount(string)).toBe(false);
    });
  });


describe("function duplicateCheck", function() {

  it("function duplicateCheck should be defined", function() {
    expect(duplicateCheck).toBeDefined();
  });

  it("should return false if a string has duplicate words in it", function() {

      let string = "This is a string string string.";
      expect(duplicateCheck(string)).toBe(false);
    });
  });


  describe("function verifyAlphaNumeric", function() {

  it("function verifyAlphaNumeric should be defined", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it("should return false if a string has non-alphanumeric characters", function() {

      let string = "This is a %$%#& string.";
      expect(verifyAlphaNumeric(string)).toBe(false);
    });
  });





