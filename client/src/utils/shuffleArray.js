export function shuffleArray (array) {

    let auxArray = array;

    let currentIndex = auxArray.length;
    
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [auxArray[currentIndex], auxArray[randomIndex]] = [
        auxArray[randomIndex], auxArray[currentIndex]];
    }

    return auxArray;


}