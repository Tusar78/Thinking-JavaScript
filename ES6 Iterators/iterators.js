const range = (start, end, step) => {
  return {
    [Symbol.iterator] : function () {
      return {
        next () {
          
        }
      }
    }
  }
}

const number = [...range(1, 50, 2)]