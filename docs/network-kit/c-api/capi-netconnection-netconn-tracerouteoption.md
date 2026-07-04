# NetConn_TraceRouteOption

```c
typedef struct NetConn_TraceRouteOption {...} NetConn_TraceRouteOption
```

## Overview

Defines the network trace route option.

**Since**: 20

**Related module**: [NetConnection](capi-netconnection.md)

**Header file**: [net_connection_type.h](capi-net-connection-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint8_t maxJumpNumber | Maximum number of jumps, default is 30 |
| [NetConn_PacketsType](capi-net-connection-type-h.md#netconn_packetstype) packetsType | Packets type |


