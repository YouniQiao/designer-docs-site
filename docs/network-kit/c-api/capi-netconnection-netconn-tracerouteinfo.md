# NetConn_TraceRouteInfo

```c
typedef struct NetConn_TraceRouteInfo {...} NetConn_TraceRouteInfo
```

## Overview

Defines the trace route information.

**Since**: 20

**Related module**: [NetConnection](capi-netconnection.md)

**Header file**: [net_connection_type.h](capi-net-connection-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint8_t jumpNo | Number of jumps |
| char address[NETCONN_MAX_STR_LEN] | host name or address |
| uint32_t rtt[NETCONN_MAX_RTT_NUM] | RTT in micro seconds |


