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

<div class="project-gallery">

<div class="project-shot-item">
<h3>启动与登录</h3>
<p>品牌落地页，区分学员 / 教练能力，支持手机号注册与微信一键登录。</p>
![启动页](projects/coachnow/welcome.webp)
</div>

<div class="project-shot-item">
<h3>课程详情 · 购课</h3>
<p>学员端查看课程说明、选择节数套餐，一键购买课包并进入支付流程。</p>
![课程详情](projects/coachnow/course-detail.webp)
</div>

<div class="project-shot-item">
<h3>教练工作台</h3>
<p>今日待上课、活跃学员 KPI，扫码下课、排课与学员管理入口。</p>
![教练工作台](projects/coachnow/coach-workbench.webp)
</div>

<div class="project-shot-item">
<h3>排课计划</h3>
<p>按日期查看预约与上课状态，支持「已预约 / 上课中 / 已完成」全流程。</p>
![排课计划](projects/coachnow/schedule-plan.webp)
</div>

<div class="project-shot-item">
<h3>上课码核销</h3>
<p>排课详情支持输入上课码确认到课，课程状态从「上课中」流转至完课。</p>
![上课码核销](projects/coachnow/class-code.webp)
</div>

<div class="project-shot-item">
<h3>我的时段</h3>
<p>配置学员可预约时段、容量与时长，实时展示可预约 / 已占用状态。</p>
![我的时段](projects/coachnow/time-slots.webp)
</div>

<div class="project-shot-item">
<h3>为学员安排上课</h3>
<p>教练可为已购课包学员手动指定时段，查看剩余课时并一键排入可预约档期。</p>
![安排学员上课](projects/coachnow/assign-student.webp)
</div>

<div class="project-shot-item">
<h3>广场动态</h3>
<p>教练与学员发布训练动态，支持同城浏览、点赞与互动。</p>
![广场动态](projects/coachnow/square.webp)
</div>

<div class="project-shot-item">
<h3>我的学员</h3>
<p>查看课包余量、预约与完课记录，支持发消息、安排上课。</p>
![我的学员](projects/coachnow/students.webp)
</div>

<div class="project-shot-item">
<h3>即时通讯</h3>
<p>教练与学员一对一私信，支持 WebSocket 实时消息与历史记录。</p>
![即时通讯](projects/coachnow/im-chat.webp)
</div>

</div>

## 技术栈

**后端**：Java 17 · Spring Boot 3 · Spring Cloud Alibaba · Nacos · Gateway · MyBatis-Plus · MySQL · Redis · RabbitMQ · Elasticsearch · WebSocket · MinIO · 微信支付 V3

**前端**：uni-app + Vue 3 + TypeScript（小程序）· Vue 3 + Element Plus（Web / 管理后台）· ECharts 数据看板

**工程**：JWT 双 Token · 双角色身份切换 · 单设备登录 · 分布式锁 · 幂等回调 · Tilt 本地编排 16 服务

## 架构亮点

1. **完整微服务实战**：网关统一鉴权、服务发现、配置中心拆分
2. **真实支付闭环**：预支付、回调验签、退款、Redis 幂等
3. **多端覆盖**：小程序 + H5 + 管理后台，uni-app 跨端复用
4. **生产级设计**：延时关单、GEO 附近教练、消息风控、教练认证审核流
