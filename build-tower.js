// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);

function towerBuilder(nFloors) {
  let tower = [];
  const oddNumArray = [];
  let index = 1;

  while (oddNumArray.length !== nFloors) {
    if (index % 2 !== 0) {
      oddNumArray.push(index);
    }
    index++;
  }

  const rawTower = oddNumArray.map(num => {
    let floor = [];
    for (let i = 0; i < num; i++) {
      floor.push("*");
    }
    return floor.join("");
  });

  tower = rawTower.map(singleFloor => {
    if (singleFloor.length !== rawTower[rawTower.length - 1].length) {
      let newSingleFloor = singleFloor.split("");
      let spacesToAdd =
        (rawTower[rawTower.length - 1].length - singleFloor.length) / 2;

      for (let i = 0; i < spacesToAdd; i++) {
        newSingleFloor.push(" ");
        newSingleFloor.unshift(" ");
      }

      return newSingleFloor.join("");
    } else return singleFloor;
  });

  return tower;
}

console.log(towerBuilder(15));

// best solution
function bestTowerBuilder(n) {
  var bricks = "*",
    spaces = " ".repeat(n - 1),
    tower = [];

  for (var i = 0; i < n; i++) {
    var space = spaces.substr(0, n - i - 1);
    tower.push(space + bricks + space);
    bricks += "**";
  }

  return tower;
}

console.log(bestTowerBuilder(9));

// shortest solution
function shortTowerBuilder(n) {
  return Array.from({ length: n }, function(v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}
