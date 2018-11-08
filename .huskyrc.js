module.exports = {
    "husky": {
        "hooks": {
             "pre-commit": "lint-staged"
         }
     },
     "lint-staged": { // 这个语法没经过测试 可能无效需要写在package.json里
         "linters":{
             "*.{js,vue}": [
                 "eslint --fix",
                 "git add"
             ]
         },
         "ignore": ["**/dist/*.min.js"]
     }
}