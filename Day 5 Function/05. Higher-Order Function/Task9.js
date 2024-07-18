const callFunction = (fn, n) => {
  return () => {
    for (let i = 0; i < n; i++) {
      fn();
    }
  };
};

const seyHello = () => {
  return console.log("Hello");
};

const callHello = callFunction(seyHello, 5);

callHello();
