
// export function debounce (callback){
//     let t
//     console.log(t,"ttt")
//     if (t !== null) {
//         clearTimeout(t);
//       }
//       t = setTimeout(() => {
//         callback
//       }, 500);
// },

export function debounce(func, delay) {
    let timeout;
    console.log(func)
    return function(...args) {
        debugger
        console.log(11)
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(args,'sssss')
            func.apply(context, args);
      }, delay);
    };
  }