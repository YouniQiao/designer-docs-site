# NetConn_NetConnCallback

```c
typedef struct NetConn_NetConnCallback {...} NetConn_NetConnCallback
```

## Overview

Defines the network connection callbacks.

**Since**: 12

**Related module**: [NetConnection](capi-netconnection.md)

**Header file**: [net_connection_type.h](capi-net-connection-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [OH_NetConn_NetworkAvailable](capi-net-connection-type-h.md#oh_netconn_networkavailable) onNetworkAvailable | Callback for network available |
| [OH_NetConn_NetCapabilitiesChange](capi-net-connection-type-h.md#oh_netconn_netcapabilitieschange) onNetCapabilitiesChange | Callback for network capabilities changed |
| [OH_NetConn_NetConnectionPropertiesChange](capi-net-connection-type-h.md#oh_netconn_netconnectionpropertieschange) onConnetionProperties | Callback for network connection properties changed |
| [OH_NetConn_NetLost](capi-net-connection-type-h.md#oh_netconn_netlost) onNetLost | Callback for network lost |
| [OH_NetConn_NetUnavailable](capi-net-connection-type-h.md#oh_netconn_netunavailable) onNetUnavailable | Callback for network unavailable, this function invoked while network can not be available in given timeout |
| [OH_NetConn_NetBlockStatusChange](capi-net-connection-type-h.md#oh_netconn_netblockstatuschange) onNetBlockStatusChange | Callback for network blocked status changed |


