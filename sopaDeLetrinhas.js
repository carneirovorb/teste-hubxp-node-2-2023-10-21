function getBiggestSequenceIndex(str) {
  if (!str) {
    return null; // Retorna nulo se a string estiver vazia
  }

  let maxCount = 0;
  let currentCount = 1;
  let startIndex = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentCount++;
    } else {
      if (currentCount >= maxCount) {
        // Use ">=" em vez de ">"
        maxCount = currentCount;
        startIndex = i - currentCount;
      }
      currentCount = 1;
    }
  }

  if (currentCount >= maxCount) {
    // Use ">=" em vez de ">"
    // Verifica a última sequência
    maxCount = currentCount;
    startIndex = str.length - currentCount;
  }

  return { index: startIndex, letter: str[startIndex] };
}

console.log(getBiggestSequenceIndex("abbcccddddeeeeeefffffffffggg"));
console.log(
  getBiggestSequenceIndex(
    "ddddeeeeeeffffffaaaaaafffggggggeeeeeeeeeeeeegggggggggggghhh"
  )
);

module.exports = { getBiggestSequenceIndex };
