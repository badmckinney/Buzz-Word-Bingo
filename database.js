(function () {
  const buzzWords = {
    "buzzWords": []
  };

  let totalScore = 0;

  const getScore = () => {
    return totalScore;
  };

  const updateScore = (index) => {
    totalScore += buzzWords.buzzWords[index].points;
  };

  const getBuzzWords = () => {
    return buzzWords;
  };

  const addBuzzWord = (word, points) => {
    let newBuzzWord = {};
    newBuzzWord.buzzWord = word;
    newBuzzWord.points = points;
    buzzWords.buzzWords.push(newBuzzWord);
    return;
  };

  const findBuzzWord = (word) => {
    let index = -1;
    buzzWords.buzzWords.forEach(buzzWord => {
      if (buzzWord.buzzWord === word) {
        return index = buzzWords.buzzWords.indexOf(buzzWord);
      }
    });
    return index;
  };

  const updateBuzzWord = (index, points) => {
    buzzWords.buzzWords[index].points = points
  };

  const removeBuzzWord = (index) => {
    buzzWords.buzzWords.splice(index, 1);
  };

  const resetAll = () => {
    buzzWords.buzzWords = [];
    totalScore = 0;
  }

  module.exports = {
    getScore,
    updateScore,
    getBuzzWords,
    addBuzzWord,
    findBuzzWord,
    updateBuzzWord,
    removeBuzzWord,
    resetAll
  };
})();