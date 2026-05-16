---
title: "CoachNow"
date: 2025-03-01
draft: false
summary: "健身私教预约平台 · 连接教练与学员的全栈微服务项目"
cover:
  image: projects/coachnow/cover-thumb.webp
  alt: CoachNow 管理后台运营总览
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

{{< project-gallery >}}

{{< project-shot title="启动与登录" desc="品牌落地页，区分学员 / 教练能力，支持手机号注册与微信一键登录。" src="projects/coachnow/welcome.webp" >}}

{{< project-shot title="课程详情 · 购课" desc="学员端查看课程说明、选择节数套餐，一键购买课包并进入支付流程。" src="projects/coachnow/course-detail.webp" >}}

{{< project-shot title="教练工作台" desc="今日待上课、活跃学员 KPI，扫码下课、排课与学员管理入口。" src="projects/coachnow/coach-workbench.webp" >}}

{{< project-shot title="排课计划" desc="按日期查看预约与上课状态，支持「已预约 / 上课中 / 已完成」全流程。" src="projects/coachnow/schedule-plan.webp" >}}

{{< project-shot title="上课码核销" desc="排课详情支持输入上课码确认到课，课程状态从「上课中」流转至完课。" src="projects/coachnow/class-code.webp" >}}

{{< project-shot title="我的时段" desc="配置学员可预约时段、容量与时长，实时展示可预约 / 已占用状态。" src="projects/coachnow/time-slots.webp" >}}

{{< project-shot title="为学员安排上课" desc="教练可为已购课包学员手动指定时段，查看剩余课时并一键排入可预约档期。" src="projects/coachnow/assign-student.webp" >}}

{{< project-shot title="广场动态" desc="教练与学员发布训练动态，支持同城浏览、点赞与互动。" src="projects/coachnow/square.webp" >}}

{{< project-shot title="我的学员" desc="查看课包余量、预约与完课记录，支持发消息、安排上课。" src="projects/coachnow/students.webp" >}}

{{< project-shot title="即时通讯" desc="教练与学员一对一私信，支持 WebSocket 实时消息与历史记录。" src="projects/coachnow/im-chat.webp" >}}

{{< /project-gallery >}}

## 技术栈

**后端**：Java 17 · Spring Boot 3 · Spring Cloud Alibaba · Nacos · Gateway · MyBatis-Plus · MySQL · Redis · RabbitMQ · Elasticsearch · WebSocket · MinIO · 微信支付 V3

**前端**：uni-app + Vue 3 + TypeScript（小程序）· Vue 3 + Element Plus（Web / 管理后台）· ECharts 数据看板

**工程**：JWT 双 Token · 双角色身份切换 · 单设备登录 · 分布式锁 · 幂等回调 · Tilt 本地编排 16 服务

## 架构亮点

1. **完整微服务实战**：网关统一鉴权、服务发现、配置中心拆分
2. **真实支付闭环**：预支付、回调验签、退款、Redis 幂等
3. **多端覆盖**：小程序 + H5 + 管理后台，uni-app 跨端复用
4. **生产级设计**：延时关单、GEO 附近教练、消息风控、教练认证审核流
