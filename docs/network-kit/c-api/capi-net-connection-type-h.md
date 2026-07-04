# net_connection_type.h

## Overview

Defines the data structures for the C APIs of the network connection module.

**Library**: libnet_connection.so

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 11

**Related module**: [NetConnection](capi-netconnection.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NetConn_NetHandle](capi-netconnection-netconn-nethandle.md) | NetConn_NetHandle | Defines the network handle. |
| [NetConn_NetCapabilities](capi-netconnection-netconn-netcapabilities.md) | NetConn_NetCapabilities | Defines all network capabilities. |
| [NetConn_NetAddr](capi-netconnection-netconn-netaddr.md) | NetConn_NetAddr | Defines the network address. |
| [NetConn_Route](capi-netconnection-netconn-route.md) | NetConn_Route | Defines the route configuration information. |
| [NetConn_HttpProxy](capi-netconnection-netconn-httpproxy.md) | NetConn_HttpProxy | Defines the proxy configuration information. |
| [NetConn_ConnectionProperties](capi-netconnection-netconn-connectionproperties.md) | NetConn_ConnectionProperties | Defines the network connection properties. |
| [NetConn_NetHandleList](capi-netconnection-netconn-nethandlelist.md) | NetConn_NetHandleList | Defines the network handle list. |
| [NetConn_NetSpecifier](capi-netconnection-netconn-netspecifier.md) | NetConn_NetSpecifier | Definition of network specifier. |
| [NetConn_NetConnCallback](capi-netconnection-netconn-netconncallback.md) | NetConn_NetConnCallback | Defines the network connection callbacks. |
| [NetConn_ProbeResultInfo](capi-netconnection-netconn-proberesultinfo.md) | NetConn_ProbeResultInfo | Defines the probe result information. |
| [NetConn_TraceRouteOption](capi-netconnection-netconn-tracerouteoption.md) | NetConn_TraceRouteOption | Defines the network trace route option. |
| [NetConn_TraceRouteInfo](capi-netconnection-netconn-tracerouteinfo.md) | NetConn_TraceRouteInfo | Defines the trace route information. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NetConn_NetCap](#netconn_netcap) | NetConn_NetCap | Defines network capabilities. |
| [NetConn_NetBearerType](#netconn_netbearertype) | NetConn_NetBearerType | Defines network bearer types. |
| [NetConn_ErrorCode](#netconn_errorcode) | NetConn_ErrorCode | Enumerates NetConn error codes. |
| [NetConn_PacketsType](#netconn_packetstype) | NetConn_PacketsType | Enumerates packets type of trace route. |

### Macro

| Name | Description |
| -- | -- |
| NETCONN_MAX_NET_SIZE 32 | Length of the netHandles array in the member variable of NetConn_NetHandleList.<br>**Since**: 11 |
| NETCONN_MAX_BEARER_TYPE_SIZE 32 | Length of the bearerTypes array in the NetConn_NetCapabilities member variable.<br>**Since**: 11 |
| NETCONN_MAX_CAP_SIZE 32 | Length of the netCaps array in the NetConn_NetCapabilities member variable.<br>**Since**: 11 |
| NETCONN_MAX_ADDR_SIZE 32 | Length of the netAddrlist and dnsList arrays in the NetConn_ConnectionProperties member variable.<br>**Since**: 11 |
| NETCONN_MAX_ROUTE_SIZE 64 | Length of the routeList array in the NetConn_ConnectionProperties member variable.<br>**Since**: 11 |
| NETCONN_MAX_EXCLUSION_SIZE 256 | Length of the exclusionList array in the NetConn_HttpProxy member variable.<br>**Since**: 11 |
| NETCONN_MAX_STR_LEN 256 | Length of the host array of the NetConn_HttpProxy member variable.<br>**Since**: 11 |
| NETCONN_MAX_RTT_NUM 4 | Length of the rtts array in the NetConn_ProbeResultlnfo member variable.<br>**Since**: 20 |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef int (\*OH_NetConn_CustomDnsResolver)(const char *host, const char *serv, const struct addrinfo *hint, struct addrinfo **res)](#oh_netconn_customdnsresolver) | OH_NetConn_CustomDnsResolver | Pointer to the custom DNS resolver. |
| [typedef void (\*OH_NetConn_AppHttpProxyChange)(NetConn_HttpProxy *proxy)](#oh_netconn_apphttpproxychange) | OH_NetConn_AppHttpProxyChange | Callback for application’s http proxy information changed. |
| [typedef void (\*OH_NetConn_GlobalHttpProxyRefreshCallback)(int32_t result, const NetConn_HttpProxy *proxy, void *userContext)](#oh_netconn_globalhttpproxyrefreshcallback) | OH_NetConn_GlobalHttpProxyRefreshCallback | Defines the one-shot callback used to receive the global HTTP proxy re-authentication result.This callback is invoked at most once for each successful call toOH_NetConn_RefreshGlobalHttpProxyWithCallback. |
| [typedef void (\*OH_NetConn_NetworkAvailable)(NetConn_NetHandle *netHandle)](#oh_netconn_networkavailable) | OH_NetConn_NetworkAvailable | Callback for network available. |
| [typedef void (\*OH_NetConn_NetCapabilitiesChange)(NetConn_NetHandle *netHandle, NetConn_NetCapabilities *netCapabilities)](#oh_netconn_netcapabilitieschange) | OH_NetConn_NetCapabilitiesChange | Callback for network capabilities changed. |
| [typedef void (\*OH_NetConn_NetConnectionPropertiesChange)(NetConn_NetHandle *netHandle, NetConn_ConnectionProperties *connConnetionProperties)](#oh_netconn_netconnectionpropertieschange) | OH_NetConn_NetConnectionPropertiesChange | Callback for network connection properties changed. |
| [typedef void (\*OH_NetConn_NetLost)(NetConn_NetHandle *netHandle)](#oh_netconn_netlost) | OH_NetConn_NetLost | Callback for network lost. |
| [typedef void (\*OH_NetConn_NetUnavailable)(void)](#oh_netconn_netunavailable) | OH_NetConn_NetUnavailable | Callback for network unavailable, this function invoked while network can not be available in given timeout. |
| [typedef void (\*OH_NetConn_NetBlockStatusChange)(NetConn_NetHandle *netHandle, bool blocked)](#oh_netconn_netblockstatuschange) | OH_NetConn_NetBlockStatusChange | Callback for network blocked status changed. |

## Enum type description

### NetConn_NetCap

```c
enum NetConn_NetCap
```

**Description**

Defines network capabilities.

**Since**: 11

| Enum item | Description |
| -- | -- |
| NETCONN_NET_CAPABILITY_MMS = 0 | MMS |
| NETCONN_NET_CAPABILITY_NOT_METERED = 11 | Not Metered |
| NETCONN_NET_CAPABILITY_INTERNET = 12 | Internet |
| NETCONN_NET_CAPABILITY_NOT_VPN = 15 | Not VPN |
| NETCONN_NET_CAPABILITY_VALIDATED = 16 | Validated |
| NETCONN_NET_CAPABILITY_PORTAL = 17 |  |
| NETCONN_NET_CAPABILITY_CHECKING_CONNECTIVITY = 31 |  |

### NetConn_NetBearerType

```c
enum NetConn_NetBearerType
```

**Description**

Defines network bearer types.

**Since**: 11

| Enum item | Description |
| -- | -- |
| NETCONN_BEARER_CELLULAR = 0 | Cellular network |
| NETCONN_BEARER_WIFI = 1 | WIFI |
| NETCONN_BEARER_BLUETOOTH = 2 |  |
| NETCONN_BEARER_ETHERNET = 3 | Ethernet |
| NETCONN_BEARER_VPN = 4 |  |

### NetConn_ErrorCode

```c
enum NetConn_ErrorCode
```

**Description**

Enumerates NetConn error codes.

**Since**: 15

| Enum item | Description |
| -- | -- |
| NETCONN_SUCCESS = 0 | @error Success return code on success |
| NETCONN_PERMISSION_DENIED = 201 | @error Permission verification failed |
| NETCONN_PARAMETER_ERROR = 401 | @error Parameter check failed |
| NETCONN_OPERATION_FAILED = 2100002 | @error Failed to connect to the service |
| NETCONN_INTERNAL_ERROR = 2100003 | System internal error.1. Memory-related error, for example, insufficient memory or memory data copy failures.2. Null pointer error, for example, using memory that has already been released. |

### NetConn_PacketsType

```c
enum NetConn_PacketsType
```

**Description**

Enumerates packets type of trace route.

**Since**: 20

| Enum item | Description |
| -- | -- |
| NETCONN_PACKETS_ICMP = 0 | ICMP |
| NETCONN_PACKETS_UDP = 1 | UDP |


## Function description

### OH_NetConn_CustomDnsResolver()

```c
typedef int (*OH_NetConn_CustomDnsResolver)(const char *host, const char *serv, const struct addrinfo *hint, struct addrinfo **res)
```

**Description**

Pointer to the custom DNS resolver.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char \*host | The host name to query. |
| const char \*serv | Service name. |
| const struct addrinfo \*hint | Pointer to the addrinfo structure. |
| struct addrinfo \*\*res | Store DNS query results and return them in a linked list format. |

### OH_NetConn_AppHttpProxyChange()

```c
typedef void (*OH_NetConn_AppHttpProxyChange)(NetConn_HttpProxy *proxy)
```

**Description**

Callback for application’s http proxy information changed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_HttpProxy \*proxy | The changed proxy information, may be a null pointer. |

### OH_NetConn_GlobalHttpProxyRefreshCallback()

```c
typedef void (*OH_NetConn_GlobalHttpProxyRefreshCallback)(int32_t result, const NetConn_HttpProxy *proxy, void *userContext)
```

**Description**

Defines the one-shot callback used to receive the global HTTP proxy re-authentication result.This callback is invoked at most once for each successful call toOH_NetConn_RefreshGlobalHttpProxyWithCallback.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int32_t result | The re-authentication result. 0 indicates success. Other values indicate failure. |
| [const NetConn_HttpProxy](capi-netconnection-netconn-httpproxy.md) \*proxy | The refreshed global HTTP proxy information when result is 0. If re-authenticationfails, proxy is NULL.<br>The proxy object is owned by the system and is valid only during this callbackinvocation. The caller must not free or modify it. If the caller needs to use theproxy information after the callback returns, the caller must make a deep copy. |
| void \*userContext | The user-defined data passed to OH_NetConn_RefreshGlobalHttpProxyWithCallback. The systemdoes not access, copy, or release it. |

### OH_NetConn_NetworkAvailable()

```c
typedef void (*OH_NetConn_NetworkAvailable)(NetConn_NetHandle *netHandle)
```

**Description**

Callback for network available.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_NetHandle \*netHandle | The network handle. |

### OH_NetConn_NetCapabilitiesChange()

```c
typedef void (*OH_NetConn_NetCapabilitiesChange)(NetConn_NetHandle *netHandle, NetConn_NetCapabilities *netCapabilities)
```

**Description**

Callback for network capabilities changed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_NetHandle \*netHandle | The network handle. |
| [NetConn_NetCapabilities](capi-netconnection-netconn-netcapabilities.md) \*netCapabilities | The network capabilities. |

### OH_NetConn_NetConnectionPropertiesChange()

```c
typedef void (*OH_NetConn_NetConnectionPropertiesChange)(NetConn_NetHandle *netHandle, NetConn_ConnectionProperties *connConnetionProperties)
```

**Description**

Callback for network connection properties changed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_NetHandle \*netHandle | The network handle. |
| [NetConn_ConnectionProperties](capi-netconnection-netconn-connectionproperties.md) \*connConnetionProperties | The network connection properties. |

### OH_NetConn_NetLost()

```c
typedef void (*OH_NetConn_NetLost)(NetConn_NetHandle *netHandle)
```

**Description**

Callback for network lost.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_NetHandle \*netHandle | The network handle. |

### OH_NetConn_NetUnavailable()

```c
typedef void (*OH_NetConn_NetUnavailable)(void)
```

**Description**

Callback for network unavailable, this function invoked while network can not be available in given timeout.

**Since**: 12

### OH_NetConn_NetBlockStatusChange()

```c
typedef void (*OH_NetConn_NetBlockStatusChange)(NetConn_NetHandle *netHandle, bool blocked)
```

**Description**

Callback for network blocked status changed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (NetConn_NetHandle \*netHandle | The network handle. |
| bool blocked | The flag used to indicate whether the network will be blocked. |


