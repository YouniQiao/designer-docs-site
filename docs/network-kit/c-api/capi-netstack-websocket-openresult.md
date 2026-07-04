# WebSocket_OpenResult

```c
struct WebSocket_OpenResult {...}
```

## Overview

Defines the parameters for the connection success reported by the server.

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_websocket_type.h](capi-net-websocket-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint32_t code | Connection success code |
| const char *reason | Connection success reason |


