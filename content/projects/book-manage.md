---
title: "图书管理系统"
date: 2024-06-01
draft: false
summary: "软件工程毕业设计 · Spring Boot + Vue 3 前后端分离图书借阅平台"
cover:
  image: projects/book-manage/cover-thumb.png
  alt: 图书管理系统管理端首页看板
tags:
  - Java
  - Spring Boot
  - Vue3
  - MySQL
  - 毕业设计
role: "全栈"
status: "毕业设计"
weight: 2
---

## 项目简介

**图书管理系统**是软件工程专业毕业设计作品，面向图书馆日常运营的数字化管理场景。系统采用**前后端完全分离**架构：后端基于 Spring Boot 提供 RESTful API，前端使用 Vue 3 + Element Plus 构建**管理端**与**用户端**两套独立界面。

管理端面向馆员，覆盖图书入库、分类维护、用户管理、借阅审核、公告发布与操作审计；用户端面向读者，支持图书检索与浏览、在线申请借阅、查看个人借阅记录及个人资料维护。整体设计贴近真实图书馆「采编—流通—读者服务」业务流程，适合作为 Java Web 全栈学习与毕设答辩参考。

**源码仓库**：[github.com/weizhewu/book-manage](https://github.com/weizhewu/book-manage)

## 系统架构

```text
┌─────────────────────────────────────────────────────────────┐
│                      Vue 3 前端 (Vite)                       │
│  ┌──────────────────────┐    ┌──────────────────────────┐  │
│  │     用户端 /user      │    │     管理端 /admin         │  │
│  │  首页·图书列表·借阅   │    │  看板·CRUD·审核·日志      │  │
│  └──────────┬───────────┘    └────────────┬─────────────┘  │
│             │         Axios + JWT          │                │
└─────────────┼──────────────────────────────┼────────────────┘
              │         /api/*               │
┌─────────────▼──────────────────────────────▼────────────────┐
│              Spring Boot 2.7 · 端口 8088                     │
│  Controller → Service → MyBatis-Plus Mapper                  │
│  JWT 拦截器 · 统一响应 · 全局异常 · 操作日志 AOP              │
└─────────────────────────────┬───────────────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   MySQL 8.0       │
                    │   book_manage     │
                    └───────────────────┘
```

## 功能模块

### 管理端

| 模块 | 能力 |
|------|------|
| **首页看板** | 图书总数、用户总数、当前借阅、逾期未还四项 KPI；最近借阅记录列表 |
| **用户管理** | 按用户名/姓名检索；新增、编辑、删除；启用/禁用状态开关 |
| **分类管理** | 文学小说、计算机科学等分类维护；展示各分类下图书数量 |
| **图书管理** | 书名/作者/分类/状态多维筛选；封面、ISBN、出版社、库存（可借/总量）维护 |
| **借阅管理** | 按图书名、借阅状态查询；审核通过/拒绝；确认归还；逾期标记；数据导出 |
| **公告管理** | 系统通知发布与编辑；已发布状态展示 |
| **操作日志** | 记录操作用户、角色、请求方法、URL、IP 与时间，便于审计追溯 |
| **系统设置** | 管理员个人信息修改；系统名称、版本与技术栈说明 |

### 用户端

| 模块 | 能力 |
|------|------|
| **首页** | 全局搜索；滚动公告栏；推荐图书与最新上架图书卡片展示 |
| **图书列表** | 按书名、作者、分类筛选；卡片式展示可借册数 |
| **图书详情** | 查看简介与库存，一键申请借阅 |
| **我的借阅** | 借阅时间、归还截止、实际归还、状态与备注；支持归还操作 |
| **个人中心** | 修改昵称、手机、邮箱；修改登录密码 |
| **注册登录** | 用户自助注册；独立管理员登录入口 |

### 借阅状态流转

| 状态码 | 含义 | 说明 |
|--------|------|------|
| 0 | 待审核 | 用户提交借阅申请，等待管理员审批 |
| 1 | 借阅中 | 审核通过，扣减可借库存 |
| 2 | 已归还 | 归还完成，恢复库存 |
| 3 | 已拒绝 | 管理员驳回申请 |
| 4 | 已逾期 | 超过归还截止日期未还 |

## 演示视频

{{< project-video title="图书管理系统" bvid="BV1F8LE68Ejs" >}}

## 界面预览

### 管理端

{{< project-gallery >}}

{{< project-shot title="管理员登录" desc="独立管理端入口，JWT 鉴权后进入后台。" src="projects/book-manage/admin-login.png" >}}

{{< project-shot title="首页看板" desc="四项核心指标卡片与最近借阅记录，运营数据一目了然。" src="projects/book-manage/admin-dashboard.png" >}}

{{< project-shot title="用户管理" desc="分页列表、条件搜索、状态开关与增删改操作。" src="projects/book-manage/admin-users.png" >}}

{{< project-shot title="分类管理" desc="维护图书分类及描述，关联展示各分类图书数量。" src="projects/book-manage/admin-categories.png" >}}

{{< project-shot title="图书管理" desc="多条件筛选图书库存，支持封面、ISBN、出版社等信息维护。" src="projects/book-manage/admin-books.png" >}}

{{< project-shot title="借阅管理" desc="借阅记录检索、审核、归还与导出，覆盖完整流通环节。" src="projects/book-manage/admin-borrows.png" >}}

{{< project-shot title="公告管理" desc="发布系统通知，支持编辑与删除已发布公告。" src="projects/book-manage/admin-notices.png" >}}

{{< project-shot title="操作日志" desc="记录管理员每次 API 调用，包含方法、URL、IP 与时间戳。" src="projects/book-manage/admin-logs.png" >}}

{{< project-shot title="系统设置" desc="个人信息维护及系统版本、技术栈等元数据展示。" src="projects/book-manage/admin-settings.png" >}}

{{< /project-gallery >}}

### 用户端

{{< project-gallery >}}

{{< project-shot title="用户登录" desc="读者登录入口，支持注册跳转与管理员登录切换。" src="projects/book-manage/user-login.png" >}}

{{< project-shot title="用户首页" desc="欢迎页、全局搜索、公告滚动条，以及推荐与最新图书展示。" src="projects/book-manage/user-home.png" >}}

{{< project-shot title="图书列表" desc="卡片式浏览，按书名、作者、分类筛选，显示可借册数。" src="projects/book-manage/user-books.png" >}}

{{< project-shot title="我的借阅" desc="个人借阅历史，展示借阅/归还时间与当前状态。" src="projects/book-manage/user-borrows.png" >}}

{{< /project-gallery >}}

## 技术栈

**后端**：Java 8 · Spring Boot 2.7 · MyBatis-Plus 3.5 · MySQL 8 · JWT（jjwt）· Hutool

**前端**：Vue 3 · Composition API · Vite 4 · Element Plus 2.3 · Vue Router 4 · Pinia 2 · Axios

**工程**：前后端分离 · RESTful API · 统一 `Result` 响应封装 · 全局异常处理 · JWT 无状态认证 · 角色权限隔离（admin / user）

## 数据库设计

| 表名 | 说明 |
|------|------|
| `admin` | 管理员账号、昵称、联系方式 |
| `user` | 读者账号、真实姓名、性别、状态 |
| `book_category` | 图书分类 |
| `book` | 图书信息、总库存与可借库存 |
| `borrow_record` | 借阅记录及状态流转 |
| `notice` | 系统公告 |
| `operation_log` | 管理端操作审计日志 |

## API 概览

| 模块 | 路径前缀 | 说明 |
|------|----------|------|
| 认证 | `/api/auth` | 管理员/用户登录、注册、获取当前用户信息 |
| 管理端用户 | `/api/admin/user` | 用户 CRUD、分页查询 |
| 管理端分类 | `/api/admin/category` | 分类列表与维护 |
| 管理端图书 | `/api/admin/book` | 图书 CRUD、分页筛选 |
| 管理端借阅 | `/api/admin/borrow` | 借阅记录管理、审核与归还 |
| 管理端公告 | `/api/admin/notice` | 公告 CRUD |
| 管理端看板 | `/api/admin/dashboard` | 统计数据 |
| 操作日志 | `/api/admin/log` | 日志分页查询 |
| 用户端图书 | `/api/user/book` | 图书浏览、推荐、最新、分类列表 |
| 用户端借阅 | `/api/user/borrow` | 申请借阅、我的借阅记录 |
| 用户端公告 | `/api/user/notice` | 公告列表 |
| 用户信息 | `/api/user/info` | 个人资料查询与修改 |

## 实现要点

1. **双端路由隔离**：`/admin/*` 与 `/user/*` 分属不同 Layout，路由守卫按 Token 角色跳转
2. **JWT 鉴权**：登录签发 Token，拦截器校验后注入当前用户 ID；管理端与用户端接口分离
3. **借阅闭环**：申请 → 管理员审核 → 扣减 `available_count` → 归还恢复库存，状态机驱动
4. **库存一致性**：借出与归还时同步更新图书可借数量，防止超借
5. **操作日志**：关键管理操作自动记录请求元数据，满足审计需求
6. **统一异常处理**：`@ControllerAdvice` 捕获业务异常，前端按统一 JSON 结构提示

## 本地运行

```bash
# 1. 创建数据库并导入 schema.sql
CREATE DATABASE book_manage DEFAULT CHARSET utf8mb4;
# 执行 backend/src/main/resources/schema.sql

# 2. 启动后端（默认 localhost:3306, root/123456）
cd backend && mvn spring-boot:run
# http://localhost:8088

# 3. 启动前端
cd frontend && npm install && npm run dev
# http://localhost:5173
```

**默认账号**

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 管理员 | admin | admin123 |
| 测试用户 | user1 | 123456 |

**访问入口**：用户端 `/home` · 用户登录 `/login` · 管理端 `/admin/login`

## 项目价值

该项目完整覆盖了**需求分析 → 数据库设计 → 后端 API → 前端双端界面 → 权限与业务流程**的毕设交付链路。相比纯 CRUD 演示，更强调**借阅状态机**、**库存联动**与**管理审计**等真实业务细节；技术选型主流、文档齐全，既可作为图书馆信息化的小型 MVP，也可作为 Spring Boot + Vue 3 全栈入门与答辩展示的参考实现。
