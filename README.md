# boke

位哲武的个人博客，基于 [Hugo](https://gohugo.io/) + [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 主题，通过 GitHub Actions 部署到 GitHub Pages。

**线上地址**：https://weizhewu.github.io/boke/

## 本地开发

需安装 [Hugo Extended](https://gohugo.io/installation/)（建议 0.146+）。

```bash
hugo server -D
```

本地预览：http://localhost:1313/boke/

## 发布文章

```bash
hugo new content posts/文章标题.md
```

编辑 `content/posts/` 下的 Markdown，推送到 `main` 分支后自动部署。

## GitHub Pages 配置

1. 将本仓库推送到 `git@github.com:weizhewu/boke.git`
2. 在 GitHub 仓库 **Settings → Pages** 中，**Build and deployment → Source** 选择 **GitHub Actions**
3. 首次推送 `main` 后，在 **Actions** 页查看 `Deploy Hugo site to Pages` 工作流是否成功

## 目录说明

| 路径 | 说明 |
|------|------|
| `content/posts/` | 博客文章 |
| `content/about.md` | 关于页（个人简介） |
| `hugo.toml` | 站点配置 |
| `static/` | 静态资源（头像等） |
| `themes/PaperMod/` | 主题 |
