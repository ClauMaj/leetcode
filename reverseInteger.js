// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321

const reverse = (x) => {
    let pozneg = (x < 0) ? 0 : 1;
    let strX = Math.abs(x).toString();
    let tempX = "";
    let revX = 0;
    for (let i = strX.length - 1; i >= 0; i--) {
        tempX += strX[i];
    }
    if (pozneg === 0) {
        revX = parseInt(tempX) * (-1);
    }
    else {
        revX = parseInt(tempX)
    }
    return ((-2147483647 < revX) && (revX < 2147483647)) ? revX : 0
};