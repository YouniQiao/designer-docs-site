# net_connection.h

## Overview

Provide C interface for the data network connection module of network management.

**Library**: libnet_connection.so

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 11

**Related module**: [NetConnection](capi-netconnection.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [int32_t OH_NetConn_HasDefaultNet(int32_t *hasDefaultNet)](#oh_netconn_hasdefaultnet) | Checks whether a default activated data network is available. |
| [int32_t OH_NetConn_GetDefaultNet(NetConn_NetHandle *netHandle)](#oh_netconn_getdefaultnet) | Obtains the default activated data network. |
| [int32_t OH_NetConn_IsDefaultNetMetered(int32_t *isMetered)](#oh_netconn_isdefaultnetmetered) | Checks whether metering is enabled for the default data network. |
| [int32_t OH_NetConn_GetConnectionProperties(NetConn_NetHandle *netHandle, NetConn_ConnectionProperties *prop)](#oh_netconn_getconnectionproperties) | Obtains the connection properties of a data network. |
| [int32_t OH_NetConn_GetNetCapabilities(NetConn_NetHandle *netHandle, NetConn_NetCapabilities *netCapabilities)](#oh_netconn_getnetcapabilities) | Obtains the capabilities of a data network. |
| [int32_t OH_NetConn_GetDefaultHttpProxy(NetConn_HttpProxy *httpProxy)](#oh_netconn_getdefaulthttpproxy) | Obtains the default http proxy. |
| [int32_t OH_NetConn_GetAddrInfo(char *host, char *serv, struct addrinfo *hint, struct addrinfo **res, int32_t netId)](#oh_netconn_getaddrinfo) | Get DNS result with netId. |
| [int32_t OH_NetConn_FreeDnsResult(struct addrinfo *res)](#oh_netconn_freednsresult) | Free DNS result. |
| [int32_t OH_NetConn_GetAllNets(NetConn_NetHandleList *netHandleList)](#oh_netconn_getallnets) | Queries all activated data networks. |
| [int32_t OHOS_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)](#ohos_netconn_registerdnsresolver) | Registers a custom DNS resolver.(Deprecated in API13) |
| [int32_t OHOS_NetConn_UnregisterDnsResolver(void)](#ohos_netconn_unregisterdnsresolver) | Unregisters a custom DNS resolver.(Deprecated in API13) |
| [int32_t OH_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)](#oh_netconn_registerdnsresolver) | Registers a custom DNS resolver. |
| [int32_t OH_NetConn_UnregisterDnsResolver(void)](#oh_netconn_unregisterdnsresolver) | Unregisters a custom DNS resolver. |
| [int32_t OH_NetConn_RegisterCustomDnsResolver(OH_NetConn_CustomDnsResolver resolver)](#oh_netconn_registercustomdnsresolver) | Registers a custom DNS resolver to intercept and override DNS queries.Falls back to system DNS if no result is specified.Only a single resolver is allowed. You must unregister the existing one before registering a new one. |
| [int32_t OH_NetConn_UnregisterCustomDnsResolver(void)](#oh_netconn_unregistercustomdnsresolver) | Unregisters the custom DNS resolver. |
| [int32_t OH_NetConn_BindSocket(int32_t socketFd, NetConn_NetHandle *netHandle)](#oh_netconn_bindsocket) | Binds a socket to the specific network. |
| [int32_t OH_NetConn_SetAppHttpProxy(NetConn_HttpProxy *httpProxy)](#oh_netconn_setapphttpproxy) | Sets http proxy information to current application. |
| [int32_t OH_NetConn_RegisterAppHttpProxyCallback(OH_NetConn_AppHttpProxyChange appHttpProxyChange, uint32_t *callbackId)](#oh_netconn_registerapphttpproxycallback) | Registers callback to listen for changes to the application-level http proxy. |
| [void OH_NetConn_UnregisterAppHttpProxyCallback(uint32_t callbackId)](#oh_netconn_unregisterapphttpproxycallback) | Unregisters a callback function that listens for application-level proxy changes. |
| [int32_t OH_NetConn_RefreshGlobalHttpProxyWithCallback(OH_NetConn_GlobalHttpProxyRefreshCallback callback, void *userContext)](#oh_netconn_refreshglobalhttpproxywithcallback) | Requests global HTTP proxy re-authentication and reports the result through a one-shot callback.This function submits an asynchronous re-authentication request. A return value of 0 indicatesthat the request has been accepted. It does not indicate that re-authentication has succeeded.The final result is reported through the callback.<br>If this function returns 0, the callback will be invoked at most once. After the callback isinvoked, it is automatically released by the system.<br>If this function returns a non-zero value, the callback will not be invoked.<br>The callback may be invoked on a system worker thread. The caller must ensure that the callbackimplementation is thread-safe and returns quickly.<br>The caller must ensure that the callback function and userData remain valid until the callbackis invoked. |
| [int32_t OH_NetConn_RegisterNetConnCallback(NetConn_NetSpecifier *specifier, NetConn_NetConnCallback *netConnCallback, uint32_t timeout, uint32_t *callbackId)](#oh_netconn_registernetconncallback) | Registers callback, used to monitor specific network status. |
| [int32_t OH_NetConn_RegisterDefaultNetConnCallback(NetConn_NetConnCallback *netConnCallback, uint32_t *callbackId)](#oh_netconn_registerdefaultnetconncallback) | Registers a callback to listen default network's status changed. |
| [int32_t OH_NetConn_UnregisterNetConnCallback(uint32_t callBackId)](#oh_netconn_unregisternetconncallback) | Unregisters network status callback. |
| [NetConn_ErrorCode OH_NetConn_SetPacUrl(const char *pacUrl)](#oh_netconn_setpacurl) | Sets the URL of the current PAC script. |
| [NetConn_ErrorCode OH_NetConn_GetPacUrl(char *pacUrl)](#oh_netconn_getpacurl) | Obtains the URL of the current PAC script. |
| [int32_t OH_NetConn_QueryProbeResult(char *destination, int32_t duration, NetConn_ProbeResultInfo *probeResultInfo)](#oh_netconn_queryproberesult) | Query a network probe result. |
| [int32_t OH_NetConn_QueryTraceRoute(char *destination, NetConn_TraceRouteOption *option, NetConn_TraceRouteInfo *traceRouteInfo)](#oh_netconn_querytraceroute) | Query a network trace route. |

## Function description

### OH_NetConn_HasDefaultNet()

```c
int32_t OH_NetConn_HasDefaultNet(int32_t *hasDefaultNet)
```

**Description**

Checks whether a default activated data network is available.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t *hasDefaultNet | Pointer to the result that specifies whether a default activated data network is available. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetDefaultNet()

```c
int32_t OH_NetConn_GetDefaultNet(NetConn_NetHandle *netHandle)
```

**Description**

Obtains the default activated data network.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_NetHandle](capi-netconnection-netconn-nethandle.md) *netHandle | Pointer to the network handle that contains the network ID. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_IsDefaultNetMetered()

```c
int32_t OH_NetConn_IsDefaultNetMetered(int32_t *isMetered)
```

**Description**

Checks whether metering is enabled for the default data network.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t *isMetered | Pointer to the result that specifies whether metering is enabled. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetConnectionProperties()

```c
int32_t OH_NetConn_GetConnectionProperties(NetConn_NetHandle *netHandle, NetConn_ConnectionProperties *prop)
```

**Description**

Obtains the connection properties of a data network.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_NetHandle](capi-netconnection-netconn-nethandle.md) *netHandle | Pointer to the network handle that contains the network ID. |
| [NetConn_ConnectionProperties](capi-netconnection-netconn-connectionproperties.md) *prop | Pointer to the connection properties. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetNetCapabilities()

```c
int32_t OH_NetConn_GetNetCapabilities(NetConn_NetHandle *netHandle, NetConn_NetCapabilities *netCapabilities)
```

**Description**

Obtains the capabilities of a data network.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_NetHandle](capi-netconnection-netconn-nethandle.md) *netHandle | Pointer to the network handle that contains the network ID. |
| netCapacities | Pointer to the network capabilities. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetDefaultHttpProxy()

```c
int32_t OH_NetConn_GetDefaultHttpProxy(NetConn_HttpProxy *httpProxy)
```

**Description**

Obtains the default http proxy.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_HttpProxy](capi-netconnection-netconn-httpproxy.md) *httpProxy | Pointer to the HTTP proxy. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetAddrInfo()

```c
int32_t OH_NetConn_GetAddrInfo(char *host, char *serv, struct addrinfo *hint, struct addrinfo **res, int32_t netId)
```

**Description**

Get DNS result with netId.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| char *host | The host name to query. |
| char *serv | Service name. |
| struct addrinfo *hint | Pointer to the addrinfo structure. |
| struct addrinfo **res | Store DNS query results and return them in a linked list format. |
| int32_t netId | DNS query netId, 0 is used for default netid query. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_FreeDnsResult()

```c
int32_t OH_NetConn_FreeDnsResult(struct addrinfo *res)
```

**Description**

Free DNS result.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| struct addrinfo *res | DNS query result chain header. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_GetAllNets()

```c
int32_t OH_NetConn_GetAllNets(NetConn_NetHandleList *netHandleList)
```

**Description**

Queries all activated data networks.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_NetHandleList](capi-netconnection-netconn-nethandlelist.md) *netHandleList | Network handle that stores the network ID list. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success. 201 - Missing permissions.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OHOS_NetConn_RegisterDnsResolver()

```c
int32_t OHOS_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)
```

**Description**

Registers a custom DNS resolver.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 11

**Deprecated**: 13

**Replaced by**: OH_NetConn_RegisterDnsResolver

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_NetConn_CustomDnsResolver](capi-net-connection-type-h.md#oh_netconn_customdnsresolver) resolver | Pointer to the custom DNS resolver. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error. 2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OHOS_NetConn_UnregisterDnsResolver()

```c
int32_t OHOS_NetConn_UnregisterDnsResolver(void)
```

**Description**

Unregisters a custom DNS resolver.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 11

**Deprecated**: 13

**Replaced by**: OH_NetConn_UnregisterDnsResolver

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_RegisterDnsResolver()

```c
int32_t OH_NetConn_RegisterDnsResolver(OH_NetConn_CustomDnsResolver resolver)
```

**Description**

Registers a custom DNS resolver.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_NetConn_CustomDnsResolver](capi-net-connection-type-h.md#oh_netconn_customdnsresolver) resolver | Pointer to the custom DNS resolver. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>         {@link NETMANAGER_EXT_SUCCESS} if the operation is successful.<br>         {@link NETMANAGER_ERR_PARAMETER_ERROR} Parameter error. Please enter a correct parameter. |

### OH_NetConn_UnregisterDnsResolver()

```c
int32_t OH_NetConn_UnregisterDnsResolver(void)
```

**Description**

Unregisters a custom DNS resolver.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_RegisterCustomDnsResolver()

```c
int32_t OH_NetConn_RegisterCustomDnsResolver(OH_NetConn_CustomDnsResolver resolver)
```

**Description**

Registers a custom DNS resolver to intercept and override DNS queries.Falls back to system DNS if no result is specified.Only a single resolver is allowed. You must unregister the existing one before registering a new one.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_NetConn_CustomDnsResolver](capi-net-connection-type-h.md#oh_netconn_customdnsresolver) resolver | Pointer to the custom DNS resolver.If the resolver returns 0, skip system DNS; otherwise, fallback to system DNS. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error. Please enter a correct parameter.<br>         2101008 - Resolver already exists. use OH_NetConn_UnregisterCustomDnsResolver before registering a new one. |

### OH_NetConn_UnregisterCustomDnsResolver()

```c
int32_t OH_NetConn_UnregisterCustomDnsResolver(void)
```

**Description**

Unregisters the custom DNS resolver.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         2100003 - Internal error. |

### OH_NetConn_BindSocket()

```c
int32_t OH_NetConn_BindSocket(int32_t socketFd, NetConn_NetHandle *netHandle)
```

**Description**

Binds a socket to the specific network.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t socketFd | Socket constructed by user. |
| [NetConn_NetHandle](capi-netconnection-netconn-nethandle.md) *netHandle | Pointer to the network handle that contains the network ID. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error.<br>         2100002 - Unable to connect to service.<br>         2100003 - Internal error. |

### OH_NetConn_SetAppHttpProxy()

```c
int32_t OH_NetConn_SetAppHttpProxy(NetConn_HttpProxy *httpProxy)
```

**Description**

Sets http proxy information to current application.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NetConn_HttpProxy](capi-netconnection-netconn-httpproxy.md) *httpProxy | Information about the proxy that needs to be set. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error. |

### OH_NetConn_RegisterAppHttpProxyCallback()

```c
int32_t OH_NetConn_RegisterAppHttpProxyCallback(OH_NetConn_AppHttpProxyChange appHttpProxyChange, uint32_t *callbackId)
```

**Description**

Registers callback to listen for changes to the application-level http proxy.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_NetConn_AppHttpProxyChange](capi-net-connection-type-h.md#oh_netconn_apphttpproxychange) appHttpProxyChange | Callback that need to be registered to listen for changes to the http proxy. |
| uint32_t *callbackId | Callback id returned after registration, associated with a registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         401 - Parameter error. |

### OH_NetConn_UnregisterAppHttpProxyCallback()

```c
void OH_NetConn_UnregisterAppHttpProxyCallback(uint32_t callbackId)
```

**Description**

Unregisters a callback function that listens for application-level proxy changes.

**System capability**: SystemCapability.Communication.NetManager.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t callbackId | Id of the callback function that needs to be deregistered. |

### OH_NetConn_RefreshGlobalHttpProxyWithCallback()

```c
int32_t OH_NetConn_RefreshGlobalHttpProxyWithCallback(OH_NetConn_GlobalHttpProxyRefreshCallback callback, void *userContext)
```

**Description**

Requests global HTTP proxy re-authentication and reports the result through a one-shot callback.This function submits an asynchronous re-authentication request. A return value of 0 indicatesthat the request has been accepted. It does not indicate that re-authentication has succeeded.The final result is reported through the callback.<br>If this function returns 0, the callback will be invoked at most once. After the callback isinvoked, it is automatically released by the system.<br>If this function returns a non-zero value, the callback will not be invoked.<br>The callback may be invoked on a system worker thread. The caller must ensure that the callbackimplementation is thread-safe and returns quickly.<br>The caller must ensure that the callback function and userData remain valid until the callbackis invoked.

**Required permission**: ohos.permission.INTERNET

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_NetConn_GlobalHttpProxyRefreshCallback](capi-net-connection-type-h.md#oh_netconn_globalhttpproxyrefreshcallback) callback | The one-shot callback used to receive the re-authentication result. It must not be NULL. |
| void *userContext | The user-defined data passed to the callback. It can be NULL. The system doesnot access, copy, or release it. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>0 - Success.</li><br>     <li>201 - Permission denied.</li><br>     <li>401 - Parameter error.</li></ul> |

### OH_NetConn_RegisterNetConnCallback()

```c
int32_t OH_NetConn_RegisterNetConnCallback(NetConn_NetSpecifier *specifier, NetConn_NetConnCallback *netConnCallback, uint32_t timeout, uint32_t *callbackId)
```

**Description**

Registers callback, used to monitor specific network status.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| netSpecifier | specifier information. |
| callback | The callback needed to be registered. |
| uint32_t timeout | The timeout period in milliseconds. |
| uint32_t *callbackId | out param, corresponding to a registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Permission denied.<br>         401 - Parameter error.<br>         2100002 - Failed to connect to the service.<br>         2100003 - System internal error.<br>         2101008 - The callback already exists.<br>         2101022 - The number of requests exceeded the maximum allowed. |

### OH_NetConn_RegisterDefaultNetConnCallback()

```c
int32_t OH_NetConn_RegisterDefaultNetConnCallback(NetConn_NetConnCallback *netConnCallback, uint32_t *callbackId)
```

**Description**

Registers a callback to listen default network's status changed.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| callback | The callback needed to be registered. |
| uint32_t *callbackId | out param, corresponding to a registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Permission denied.<br>         401 - Parameter error.<br>         2100002 - Failed to connect to the service.<br>         2100003 - System internal error.<br>         2101008 - The callback already exists.<br>         2101022 - The number of requests exceeded the maximum allowed. |

### OH_NetConn_UnregisterNetConnCallback()

```c
int32_t OH_NetConn_UnregisterNetConnCallback(uint32_t callBackId)
```

**Description**

Unregisters network status callback.

**System capability**: SystemCapability.Communication.NetManager.Core

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t callBackId | the id corresponding to a registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Permission denied.<br>         401 - Parameter error.<br>         2100002 - Failed to connect to the service.<br>         2100003 - System internal error.<br>         2101007 - The callback does not exists. |

### OH_NetConn_SetPacUrl()

```c
NetConn_ErrorCode OH_NetConn_SetPacUrl(const char *pacUrl)
```

**Description**

Sets the URL of the current PAC script.

**Required permission**: ohos.permission.SET_PAC_URL

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *pacUrl | the URL of the current PAC script. |

**Returns**:

| Type | Description |
| -- | -- |
| [NetConn_ErrorCode](capi-net-connection-type-h.md#netconn_errorcode) | the result defines in [NetConn_ErrorCode](capi-net-connection-type-h.md#netconn_errorcode).<br>         [NETCONN_SUCCESS](capi-net-connection-type-h.md#netconn_errorcode) Success.<br>         [NETCONN_PERMISSION_DENIED](capi-net-connection-type-h.md#netconn_errorcode) Permission denied.<br>         [NETCONN_PARAMETER_ERROR](capi-net-connection-type-h.md#netconn_errorcode) Parameter check failed.<br>         [NETCONN_OPERATION_FAILED](capi-net-connection-type-h.md#netconn_errorcode) Failed to connect to the service.<br>         [NETCONN_INTERNAL_ERROR](capi-net-connection-type-h.md#netconn_errorcode) System internal error. |

### OH_NetConn_GetPacUrl()

```c
NetConn_ErrorCode OH_NetConn_GetPacUrl(char *pacUrl)
```

**Description**

Obtains the URL of the current PAC script.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| char *pacUrl | the URL of the current PAC script. |

**Returns**:

| Type | Description |
| -- | -- |
| [NetConn_ErrorCode](capi-net-connection-type-h.md#netconn_errorcode) | the result defines in [NetConn_ErrorCode](capi-net-connection-type-h.md#netconn_errorcode).<br>         [NETCONN_SUCCESS](capi-net-connection-type-h.md#netconn_errorcode) Success.<br>         [NETCONN_PARAMETER_ERROR](capi-net-connection-type-h.md#netconn_errorcode) Parameter check failed.<br>         [NETCONN_OPERATION_FAILED](capi-net-connection-type-h.md#netconn_errorcode) Failed to connect to the service.<br>         [NETCONN_INTERNAL_ERROR](capi-net-connection-type-h.md#netconn_errorcode) System internal error. |

### OH_NetConn_QueryProbeResult()

```c
int32_t OH_NetConn_QueryProbeResult(char *destination, int32_t duration, NetConn_ProbeResultInfo *probeResultInfo)
```

**Description**

Query a network probe result.

**Required permission**: ohos.permission.INTERNET

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| char *destination | Pointer to the destination. |
| int32_t duration | probe duration. Unit: second. |
| [NetConn_ProbeResultInfo](capi-netconnection-netconn-proberesultinfo.md) *probeResultInfo | Pointer to probe loss rate and rtt. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Missing permissions.<br>         401 - Parameter error.<br>         2100003 - Internal error. |

### OH_NetConn_QueryTraceRoute()

```c
int32_t OH_NetConn_QueryTraceRoute(char *destination, NetConn_TraceRouteOption *option, NetConn_TraceRouteInfo *traceRouteInfo)
```

**Description**

Query a network trace route.

**Required permission**: ohos.permission.INTERNET and ohos.permission.LOCATION and ohos.permission.ACCESS_NET_TRACE_INFO

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| char *destination | Pointer to the destination. |
| [NetConn_TraceRouteOption](capi-netconnection-netconn-tracerouteoption.md) *option | Pointer to the trace route option |
| [NetConn_TraceRouteInfo](capi-netconnection-netconn-tracerouteinfo.md) *traceRouteInfo | Pointer to trace route result. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - Success.<br>         201 - Missing permissions. |


