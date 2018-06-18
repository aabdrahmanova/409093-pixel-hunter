const timer = (time) => ({
  tick: () => {
    time -= 1;
    if (time > 0) {
      return time;
    } else {
      return `Время истекло`;
    }
  }
});

export default timer;
