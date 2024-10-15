
function collectPuzzle(...puzzles) {
    var uniqueFragments = new Set();
    puzzles.forEach(fragments => {
      fragments.forEach(fragment => {
        uniqueFragments.add(fragment);
      }

      );
    });
    return  Array.from(uniqueFragments);
  }
  
  