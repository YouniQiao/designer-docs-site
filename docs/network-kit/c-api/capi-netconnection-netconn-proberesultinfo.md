# NetConn_ProbeResultInfo

```c
typedef struct NetConn_ProbeResultInfo {...} NetConn_ProbeResultInfo
```

## Overview

Defines the probe result information.

**Since**: 20

**Related module**: [NetConnection](capi-netconnection.md)

**Header file**: [net_connection_type.h](capi-net-connection-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint8_t lossRate | Number of jumps |
| uint32_t rtt[NETCONN_MAX_RTT_NUM] | RTT in micro seconds, min/avg/max/std |


