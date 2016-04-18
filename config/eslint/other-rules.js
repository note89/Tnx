module.exports = {
  rules: {
    "no-new-object" :2,
    "no-const-assign" : 2,
    "prefer-const" :2,
    "object-shorthand": 2,
    "quote-props":[2, "as-needed"],
    "no-array-constructor": 2,
    quotes:[2, "double", "avoid-escape"],
    "prefer-template": 2,
    "wrap-iife": [2, "outside"],
    "no-loop-func": 2,
    "no-param-reassign": [2, { props: true }],
    "no-multiple-empty-lines": [2, { max: 2 }],
    "linebreak-style": [2, "unix"],
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": [2, { skipBlankLines: true }],
    // require or disallow Yoda conditions
    yoda: 2,
  },
};
