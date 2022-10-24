

const intervalPool = {};

export function Interval (fn, interval) {

  this.intervalFn = null;

  this.start = () => {
    this.intervalFn = setInterval(fn, interval);
  }

  this.pause = () => {
    clearInterval(this.intervalFn);
  }

  this.resume = () => {
    if(this.intervalFn) {
      clearInterval(this.intervalFn);
    }

    this.start();
  }

  this.stop = () => {
    clearInterval(this.intervalFn);
  }

}