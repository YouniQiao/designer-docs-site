# Http_Proxy

```c
typedef struct Http_Proxy {...} Http_Proxy
```

## Overview

Proxy configuration.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Http_ProxyType](capi-net-http-type-h.md#http_proxytype) proxyType | Distinguish the proxy type used by the request, see [Http_ProxyType](capi-net-http-type-h.md#http_proxytype). |
| [Http_CustomProxy](capi-netstack-http-customproxy.md) customProxy | Custom proxy configuration, see [Http_CustomProxy](capi-netstack-http-customproxy.md). |


