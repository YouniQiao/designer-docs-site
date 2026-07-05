# WebSocket_Header

```c
struct WebSocket_Header {...}
```

## Overview

Adds the header linked list to the websocket client.

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_websocket_type.h](capi-net-websocket-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char *fieldName | Header field name |
| const char *fieldValue | Header field content |
| struct [WebSocket_Header](capi-netstack-websocket-header.md) *next | Next pointer of the header linked list |


