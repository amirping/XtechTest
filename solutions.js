module.exports = {
  f1: function (a, b) {
    let del = 0;
    let freqWatcherA = {}
    let freqWatcherB = {};
    for (let i = 0; i < a.length; i++) {
      var ch = a.charAt(i);
      if (freqWatcherA[ch]) {
        freqWatcherA[ch]++
      } else {
        freqWatcherA[ch] = 1;
      }
    }
    for (let i = 0; i < b.length; i++) {
      var ch = b.charAt(i);
      if (freqWatcherB[ch]) {
        freqWatcherB[ch]++
      } else {
        freqWatcherB[ch] = 1;
      }
    }
    for (const key in freqWatcherA) {
      if (freqWatcherB[key]) {
        del += Math.abs(freqWatcherA[key] - freqWatcherB[key])
      } else {
        del += freqWatcherA[key];
      }
    }
    // for the case that a don't have any char b
    for (const key in freqWatcherB) {
      if (!freqWatcherA[key]) {
        del += freqWatcherB[key];
      }
    }
    return del;
  },
  f2: function (a, b) {
    let i = 0;
    let result = [];
    b.forEach(element => {
      result[i] = 0;
      a.forEach(x => {
        if (x === element) {
          result[i]++;
        }
      });
      i++;
    });
    return result;
  },
  f3: function (a) {
    let MajorPattern = /^(([A-Z0-9_-]+)(\.))+([A-Z0-9_-]+)$/gim
    let MinorPattern = /([A-Z0-9_-]+)/gi
    if (MajorPattern.test(a)) {
      return a.match(MinorPattern).length;
    }
    return 0;
  },
  f4: function (cb) {
    if (typeof this.f4.fired == 'undefined') {
      console.log("we will call later");
      clearTimeout(this.f4.fire);
    }
    if (this.f4.fired == 1) {
      this.f4.fired = 'undefined'
    }
    return (
      this.f4.fire = setTimeout(() => {
        cb();
        this.f4.fired = 1;
      }, 300));
  }
}