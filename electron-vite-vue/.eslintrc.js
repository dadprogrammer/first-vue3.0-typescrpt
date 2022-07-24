module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
      // 开发可用console和debugger，生产不可用
      'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
      // 缩进两个，警告
      indent: [2, 2, { SwitchCase: 1 }],
      // 特殊字符可以使用
      'no-useless-escape': 0,
      // 声明变量没使告警
      'no-unused-vars': 1,
      // 计算属性可以有副作用(就是不允许在vue的计算属性中修改任何vue组件绑定的数据,只能使用)
      'vue/no-side-effects-in-computed-properties': 1,
      // 变量和参数拼写错误报错
      'no-undef': 2,
      // 只能使用 ===
      eqeqeq: ['error', 'always'],
      // 逗号单换行报错
      'comma-style': [2, 'last'],
      // 空行报错
      'no-multiple-empty-lines': 2,
      // 禁用 __proto__ 属性
      'no-proto': 2,
      // switch 语句强制 default 分支
      'default-case': 2,
      // 禁止在循环中出现 function 声明和表达式 会导致循环引用
      'no-loop-func': 1,
      // 禁止删除变量
      'no-delete-var': 2,
      // 禁止catch子句参数与外部作用域变量同名
      'no-catch-shadow': 2,
      // 禁止修改const声明的变量
      'no-const-assign': 2,
      // 在创建对象字面量时不允许键重复 {a:1,a:1}
      'no-dupe-keys': 2,
      // 禁用var，用let和const代替
      'no-var': 1,
      // 关闭箭头函数用小括号括起来
      'arrow-parens': 0,
      // 强制驼峰法命名
      camelcase: 2,
      // 不允许使用++ --运算符
      'no-plusplus': 0,
      // 强制 getter 函数中出现 return 语句
      'getter-return': 2,
      // 强制在注释中 // 或 /* 使用一致的空格
      'spaced-comment': 2,
      // 强制每一行中所允许的最大语句数量
      'max-statements-per-line': 2,
      //函数参数不能重复
      'no-dupe-args': 2,
      //一行结束后面不要有空格
      // 'no-trailing-spaces': 1,
      //避免多行表达式
      'no-unexpected-multiline': 2,
      //不能有无法执行的代码
      'no-unreachable': 2,
      //嵌套块深最多层环
      'max-depth': [0, 4],
      //使用严格模式
      strict: 2,
      /**
       * vue 的代码风格
       */
      //多行html元素内容在新的一行
      'vue/multiline-html-element-content-newline': 0,
      // 忽略html标签自闭合
      'vue/html-self-closing': 0,
      // 关闭对iview end-tag 检查
      'vue/no-parsing-error': [2, { 'x-invalid-end-tag': true }],
      // 关闭  禁止注册模板中未使用的组件
      'vue/no-unused-components': 0,
      // 关闭vue文件name文件名字规则校验
      'vue/multi-word-component-names':0
    }
}
