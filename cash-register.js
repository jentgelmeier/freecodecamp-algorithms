function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  const cidNums = [];
  for (let i = 0; i < cid.length; i++) {
    cidNums.push(cid[i][1]);
  };
  let cidSum = cidNums.reduce((sum, cash) => sum + cash).toFixed(2);

if (cidSum == changeDue) {
  let stat = 'CLOSED';
  let changeReturn = cid;
  return {status: stat, change: changeReturn};
} else {
    let change = cash - price;
    let changeHundred = 0;
    let changeTwenty = 0;
    let changeTen = 0;
    let changeFive = 0;
    let changeOne = 0;
    let changeQuarter = 0;
    let changeDime = 0;
    let changeNickel = 0;
    let changePenny = 0;
      while (change >= 100 && cid[8][1] >= 100) {
        change -= 100;
        cid[8][1] -= 100;
        changeHundred += 100;
      }
      while (change >= 20 && cid[7][1] >= 20) {
        change -= 20;
        cid[7][1] -= 20;
        changeTwenty += 20;
      }
      while (change >= 10 && cid[6][1] >= 10) {
        change -= 10;
        cid[6][1] -= 10;
        changeTen += 10;
      }
      while (change >= 5 && cid[5][1] >= 5) {
        change -= 5;
        cid[5][1] -= 5;
        changeFive += 5;
      }
      while (change >= 1 && cid[4][1] >= 1) {
        change -= 1;
        cid[4][1] -= 1;
        changeOne += 1;
      }
      while (change >= .25 && cid[3][1] >= .25) {
        change -= .25;
        cid[3][1] -= .25;
        changeQuarter += .25;
      }
      while (change >= .1 && cid[2][1] >= .1) {
        change -= .1;
        cid[2][1] -= .1;
        changeDime += .1;
      }
      while (change >= .05 && cid[1][1] >= .05) {
        change -= .05;
        cid[1][1] -= .05;
        changeNickel += .05;
      }
      while (change > 0 && cid[0][1] >= .01) {
        change -= .01;
        cid[0][1] -= .01;
        changePenny += .01;
      }
  let changeReturn = [];
    if (changeHundred !=0) {
      changeReturn.push(["ONE HUNDRED", changeHundred])
    } if (changeTwenty !=0) {
      changeReturn.push(["TWENTY", changeTwenty])
    } if (changeTen !=0) {
      changeReturn.push(["TEN", changeTen])
    } if (changeFive !=0) {
      changeReturn.push(["FIVE", changeFive])
    } if (changeOne !=0) {
      changeReturn.push(["ONE", changeOne])
    } if (changeQuarter !=0) {
      changeReturn.push(["QUARTER", changeQuarter])
    } if (changeDime !=0) {
      changeReturn.push(["DIME", changeDime])
    } if (changeNickel !=0) {
      changeReturn.push(["NICKEL", changeNickel])
    } if (changePenny !=0) {
      changeReturn.push(["PENNY", changePenny])
    }

 const changeNums = [];
  for (let i = 0; i < changeReturn.length; i++) {
    changeNums.push(changeReturn[i][1]);
  };
  let changeSum = changeNums.reduce((sum, cash) => sum + cash).toFixed(2);

    if (changeDue < cidSum && changeSum == changeDue) {
      let stat = 'OPEN';
      return {status: stat, change: changeReturn};
    } else {
  let stat = 'INSUFFICIENT_FUNDS';
  let changeReturn = []; 
  return {status: stat, change: changeReturn};
    }
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));