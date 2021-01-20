const ROWS = 3;
const COLUMNS = 3;

function getKeyPosition(keyValue, keypadStr) {
  const index = keypadStr.indexOf(keyValue);
  return {
    x: Math.floor(index / ROWS),
    y: Math.floor(index % COLUMNS),
  };
}

function getTotalTime(passcode, keypadStr) {
  let totalTime = 0;
  let lastPosition = null;

  for (const passcodeKey of passcode) {
    const keyPosition = getKeyPosition(passcodeKey, keypadStr);
    if (!lastPosition) {
      lastPosition = keyPosition;
    } else {
      const rowDifference = Math.abs(lastPosition.x - keyPosition.x);
      const columnDifference = Math.abs(lastPosition.y - keyPosition.y);
      lastPosition = keyPosition;
      totalTime += Math.max(rowDifference, columnDifference);
    }
  }
  return totalTime;
}

export { getTotalTime };
