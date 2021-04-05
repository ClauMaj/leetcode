// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



// Example 1:

// Input: x = 121
// Output: true

const isPalindrome = (x) => {
    if (x < 0) {
        return false
    }
    else if (x < 10) {
        return true
    }
    else {
        let strx = x.toString();
        let strxrev = "";
        for (var i = strx.length - 1; i >= 0; i--) {
            strxrev += strx[i];
        }
        return (strx === strxrev);
    }
};