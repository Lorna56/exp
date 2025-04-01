//Code written by Lorna Naula & Sekajja Wavamuno Isaac.
function factorial(n) {
    let result = 1;
    if (n < 0 || isNaN(n)) {
      return "Invalid input";
    } else {
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
    }
    return result;
  }
  export default factorial;
  