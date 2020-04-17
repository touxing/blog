---
sidebar: auto
---
# FastApi
> [官网](https://fastapi.tiangolo.com/)

FastAPI是一框现代，快速（高性能）的Web框架，用于基于标准Python类型提示使用Python 3.6+构建API。

- 快速：非常高的性能，看齐NodeJS和Go。现有最快的Python框架之一。
- 快速编码：将功能开发速度提高约200％至300％。
- 更少的错误：减少约40％的人为错误（开发人员）。
- 直观：强大的编辑器支持。完成无处不在。调试时间更少。
- 简易：旨在易于使用和学习。减少阅读文档的时间。
- 短：最小化代码重复。每个参数声明中的多个功能。更少的错误。
- 健壮：获取可用于生产的代码。具有自动交互式文档。
- 基于标准：基于（并完全兼容）API的开放标准：OpenAPI（以前称为Swagger）和JSON Schema。

## 安装使用

requirement:
> * python 3.6+

install
```bash
pip install fastapi
```
需要安装一个 ASGI（异步服务器网关）server
```bash
pip install uvicorn
```

启动
```bash
uvicorn main:app --reload
```

`http://127.0.0.1:8000/docs` swagger调式文档

`http://127.0.0.1:8000/redoc` 阅读开发文档

First Step：

**Recap(概要)**
- Import `FastApi`. 第一步引入 FastApi
- Create an `app` instance. 2.创建一个实例 `app = FastApi()`
- Write a path operation decorator(like `app.get("/")`). 3.创建路径操作修饰器
- Write a path operation function(like `def root:...` above). 4. 创建路径操作函数
- Run the development server(like `uvicorn main:app --reload`). 5.启动开发服务器


## 实战项目
> [relworld](https://github.com/tiangolo/full-stack-fastapi-postgresql)
