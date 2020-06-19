# react-bill-app

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

记账应用

## 目录结构

```text
Project/
├── README.md
├── package.json
├── tsconfig.json
├── tsconfig-base.json               # 自定义配置，防止被覆盖
├── babel.config.js
├── config-overrides.js              # react-app-rewired 配置文件
├── public/
└── src/
  ├── components/
  ├── mocks/
  ├── shared/
  ├── store/
  ├── styles/
  ├── views/
  ├── App.tsx
  ├── index.tsx
  ├── react-app-env.d.ts
  ├── react-app-env.d.ts
  └── router.tsx
```

## 开发步骤

你需要安装 Node.js 的版本为 6+.

克隆此仓库后运行:

```bash
# 安装依赖
$ npm install

# 本地开发
$ npm run dev

# 构建代码
$ npm run build

# 分析包大小
$ npm run analyze
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 运行单元测试

```bash
# 单元测试
$ npm test
```
