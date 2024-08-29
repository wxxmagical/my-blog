export function debounce(func, wait) {
  console.log("timeOut")  //只打印一次，只有在debounce定义的时候打印一次。下面同理
  let timeout;  //只执行一次
  return function(...args) {
    //防抖函数会返回到debounce调用处，所以，这里的args是默认穿的resize默认参数
      const context = this;//指向window
      console.log("timeOut1")
      if (timeout) {
          clearTimeout(timeout);
      }
      timeout = setTimeout(function() {
        // console.log(this,'this11')
          func.apply(this,args);  //这里如果不修改func函数的this,那么func函数的this为undefined
      }, wait);
  };
}
