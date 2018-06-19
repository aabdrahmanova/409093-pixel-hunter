const timer = (time) => ({
  tick: () => {
    time -= 1;
    if (time > 0) {
      return time;
    } else {
      return -1;
    }
  }
});

export default timer;
