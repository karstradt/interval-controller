import {Interval} from "../main.js";

const myInterval = new Interval(() => {
  console.log("Printing name");
}, 2000);

myInterval.start();

setTimeout(() => {
  myInterval.pause();

  setTimeout(() => {
    myInterval.resume();
  }, 1000);
}, 7000);