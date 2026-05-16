---
title: "CoachNow"
date: 2025-03-01
draft: false
summary: "健身私教预约平台 · 连接教练与学员的全栈微服务项目"
cover:
  image: projects/coachnow/student-home.webp
  alt: CoachNow 学员首页
tags:
  - Java
  - Spring Cloud
  - 微信小程序
  - Vue3
  - 微服务
role: "全栈"
status: "个人项目"
weight: 1
---

## 项目简介

**CoachNow** 是面向国内市场的健身私教预约平台，连接独立私教教练与学员。学员可搜索教练、购买课包、预约课程并完成签到；教练可发布课程、管理排期、扫码核销并追踪收入；平台还提供社交广场、即时通讯、钱包体系与完整管理后台。

## 核心能力

| 端 | 能力 |
|---|---|
| **学员小程序** | 找教练、购课包、预约排期、签到二维码、钱包积分、广场动态 |
| **教练小程序** | 五步认证、排课时段、工作台 KPI、扫码核销、收入账单 |
| **管理后台** | 运营看板、教练审核、用户/内容/风控、财务与营销活动 |
| **后端** | 16 个微服务、微信支付 V3、IM、ES 教练搜索、Redis 延时关单 |

## 界面预览

### 学员端 · 首页

找教练、排课、课包与推荐教练一览，支持购课与预约闭环。

![学员首页](projects/coachnow/student-home.webp)

### 教练端 · 工作台

今日课程 KPI、扫码下课、排课与学员管理入口。

![教练工作台](projects/coachnow/coach-workbench.webp)

### 购课与预约支付

课包选购、时段预约、微信支付 V3 小程序支付。

![购课预约](projects/coachnow/booking-pay.webp)

### 管理后台 · 运营总览

GMV、用户/教练/预约趋势、最近登录与业务指标可视化。

![管理后台](projects/coachnow/admin-dashboard.webp)

## 技术栈

**后端**：Java 17 · Spring Boot 3 · Spring Cloud Alibaba · Nacos · Gateway · MyBatis-Plus · MySQL · Redis · RabbitMQ · Elasticsearch · WebSocket · MinIO · 微信支付 V3

**前端**：uni-app + Vue 3 + TypeScript（小程序）· Vue 3 + Element Plus（Web / 管理后台）· ECharts 数据看板

**工程**：JWT 双 Token · 双角色身份切换 · 单设备登录 · 分布式锁 · 幂等回调 · Tilt 本地编排 16 服务

## 架构亮点

1. **完整微服务实战**：网关统一鉴权、服务发现、配置中心拆分
2. **真实支付闭环**：预支付、回调验签、退款、Redis 幂等
3. **多端覆盖**：小程序 + H5 + 管理后台，uni-app 跨端复用
4. **生产级设计**：延时关单、GEO 附近教练、消息风控、教练认证审核流
