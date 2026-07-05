# ClientConnectionCloseCallback

```TypeScript
export type ClientConnectionCloseCallback = (clientConnection: WebSocketConnection, closeReason: CloseResult) => void
```

Callback function when a client connection is closed.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clientConnection | WebSocketConnection | Yes | the connection which is closed. |
| closeReason | CloseResult | Yes | the error code and reason why the connection is closed. |

