# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
We can use this function for start of like encoding a string in some manner.
If we want to write a entry level encryption function we can use it for the same.

### **What test cases can you add to the test file?**

*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries