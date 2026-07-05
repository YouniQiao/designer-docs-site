# ClientConnectionCloseCallback

```TypeScript
export type ClientConnectionCloseCallback = (clientConnection: WebSocketConnection, closeReason: CloseResult) => void
```

Callback function when a client connection is closed.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientConnection | WebSocketConnection | 是 | the connection which is closed. |
| closeReason | CloseResult | 是 | the error code and reason why the connection is closed. |

