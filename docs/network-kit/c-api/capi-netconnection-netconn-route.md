# NetConn_Route

```c
typedef struct NetConn_Route {...} NetConn_Route
```

## Overview

Defines the route configuration information.

**Since**: 11

**Related module**: [NetConnection](capi-netconnection.md)

**Header file**: [net_connection_type.h](capi-net-connection-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char iface[NETCONN_MAX_STR_LEN] | Network interface |
| [NetConn_NetAddr](capi-netconnection-netconn-netaddr.md) destination | Destination address |
| [NetConn_NetAddr](capi-netconnection-netconn-netaddr.md) gateway | Gateway address |
| int32_t hasGateway | Gateway exists or not |
| int32_t isDefaultRoute | Default route or not |


