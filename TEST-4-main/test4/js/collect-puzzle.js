
function collectPuzzle(...puzzles) {//puzzles是参数名代表后来赋值的redPuzzles,bluePuzzles, greenPuzzles
    var uniqueFragments = new Set();
    puzzles.forEach(fragments => {//fragments代表每一组拼图，forEach每次遍历的值再当做箭头函数参数
      fragments.forEach(fragment => {//循环嵌套,fragment代表每一个拼图
        uniqueFragments.add(fragment);//向uniqueFragments的类数组中添加碎片并利用set去重
      }

      );
    });
    return  Array.from(uniqueFragments);//把结果转换为数组
  }
  
  