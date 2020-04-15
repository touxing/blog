# FastApi

一款 python web 框架

## 安装使用

requirement:
> * python 3.6+

install
```bash
pip install fastapi
```
需要安装一个 ASGI（异步服务器网关）
```bash
pip install uvicorn
```

启动
```bash
uvicorn main:app --reload
```

`http://127.0.0.1:8000/docs` swagger调式文档

`http://127.0.0.1:8000/redoc` 阅读开发文档
