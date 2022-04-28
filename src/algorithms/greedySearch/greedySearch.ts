const denominations: Array<number> = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

export interface resultObject {
  count: number | undefined;
  note: number;
}

export const calculateNoteDispense: Function = (
  amount: string | null | undefined
): Array<resultObject | undefined> => {
  if (!!amount) {
    try {
      amount = amount.trim();
      if (amount.length === 0) {
        return void 0;
      }
      let numericAmount: number = parseInt(amount, 10);
      if (isNaN(numericAmount)) {
        return void 0;
      }
      let tempCount: Array<number> = [];
      let resultArray: Array<resultObject> = [];
      denominations.forEach((note: number, index: number) => {
        if (numericAmount >= note) {
          tempCount[index] = Math.floor(numericAmount / note);
          numericAmount = numericAmount - tempCount[index] * note;
        }
      });
      denominations.forEach((note: number, index: number) => {
        resultArray[index] =
          typeof tempCount[index] === "undefined"
            ? { count: 0, note }
            : { count: tempCount[index], note };
      });
      return resultArray.reverse();
    } catch (err) {
      return void 0;
    }
  }
  return void 0;
};

export const countNotes: Function = (
  resultArr: Array<resultObject>
): number => {
  if (!!resultArr && resultArr.length > 0) {
    return resultArr.reduce((acc, curr) => {
      if (typeof curr.count !== "undefined") {
        return (acc += curr.count);
      }
      return acc;
    }, 0);
  }
  return 0;
};
