const { getBiggestSequenceIndex } = require("../sopaDeLetrinhas.js");

describe("getBiggestSequenceIndex", () => {
  it("Deve retornar o índice e a letra da maior sequência em uma string", () => {
    expect(getBiggestSequenceIndex("abbcccddddeeeeeefffffffffggg")).toEqual({
      index: 16,
      letter: "f",
    });
    expect(
      getBiggestSequenceIndex(
        "ddddeeeeeeffffffaaaaaafffggggggeeeeeeeeeeeeegggggggggggghhh"
      )
    ).toEqual({ index: 31, letter: "e" });
  });

  it("Deve retornar o índice e a letra da maior sequência em uma string vazia", () => {
    expect(getBiggestSequenceIndex("")).toBeNull();
  });

  it("Deve retornar o índice e a letra da maior sequência em uma string com um único caractere", () => {
    expect(getBiggestSequenceIndex("a")).toEqual({ index: 0, letter: "a" });
  });

  it("Deve retornar o índice e a letra da maior sequência em uma string com várias sequências iguais", () => {
    expect(getBiggestSequenceIndex("aaabbbccc")).toEqual({
      index: 6,
      letter: "c",
    });
    expect(getBiggestSequenceIndex("xxxxxyyyyyyy")).toEqual({
      index: 5,
      letter: "y",
    });
  });
});
