# WebSocket

```c
struct WebSocket {...}
```

## Overview

Defines the WebSocket client structure.

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_websocket_type.h](capi-net-websocket-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [WebSocket_OnOpenCallback](capi-net-websocket-type-h.md#websocket_onopencallback) onOpen | Pointer to the callback invoked when a connection message is received |
| [WebSocket_OnMessageCallback](capi-net-websocket-type-h.md#websocket_onmessagecallback) onMessage | Pointer to the callback invoked when a message is received |
| [WebSocket_OnErrorCallback](capi-net-websocket-type-h.md#websocket_onerrorcallback) onError | Pointer to the callback invoked when an error message is received |
| [WebSocket_OnCloseCallback](capi-net-websocket-type-h.md#websocket_onclosecallback) onClose | Pointer to the callback invoked when a close message is received |
| [WebSocket_RequestOptions](capi-netstack-websocket-requestoptions.md) requestOptions | Content of the request for establishing a connection on the client |


