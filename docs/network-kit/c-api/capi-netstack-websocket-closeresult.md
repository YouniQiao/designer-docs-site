# WebSocket_CloseResult

```c
struct WebSocket_CloseResult {...}
```

## Overview

Defines the parameters for connection closing by the server.

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_websocket_type.h](capi-net-websocket-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint32_t code | Error code |
| const char *reason | Error cause |


