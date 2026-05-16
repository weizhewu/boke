---
title: "博客搭建完成"
date: 2025-05-17
draft: false
tags: ["Hugo", "博客"]
categories: ["随笔"]
summary: "使用 Hugo 与 GitHub Pages 搭建个人博客的说明。"
---

本站使用 [Hugo](https://gohugo.io/) 静态站点生成器与 [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 主题构建，通过 GitHub Actions 自动部署到 GitHub Pages。

## 本地预览

```bash
hugo server -D
```

浏览器访问 `http://localhost:1313/boke/`（注意 `baseURL` 含子路径时需加 `/boke/`）。

## 写文章

在 `content/posts/` 下新建 Markdown 文件：

```bash
hugo new content posts/my-first-post.md
```

编辑 front matter 与正文后提交到 `main` 分支，GitHub Actions 会自动构建并发布。

## 站点地址

部署完成后访问：**https://weizhewu.github.io/boke/**
