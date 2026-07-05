# Http_CustomProxy

```c
typedef struct Http_CustomProxy {...} Http_CustomProxy
```

## Overview

Custom proxy configuration.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char *host;
  int32_t port;
  const char *exclusionLists | Indicates the URL of the proxy server. If you do not set port explicitly, port will be 1080. |


