# OH_Http_Interceptor_Request

```c
typedef struct OH_Http_Interceptor_Request {...} OH_Http_Interceptor_Request
```

## Overview

Defines interceptor request

**Since**: 24

**Related module**: [netstack](capi-netstack.md)

**Header file**: [http_interceptor_type.h](capi-http-interceptor-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Http_Buffer](capi-netstack-http-buffer.md) url | Request url, see [Http_Buffer](capi-netstack-http-buffer.md).<br>**Since**: 24 |
| [Http_Buffer](capi-netstack-http-buffer.md) method | Request method, see [Http_Buffer](capi-netstack-http-buffer.md).<br>**Since**: 24 |
| [OH_Http_Interceptor_Headers](capi-netstack-oh-http-interceptor-headers.md) *headers | Header of http Request, see [OH_Http_Interceptor_Headers](capi-netstack-oh-http-interceptor-headers.md).<br>**Since**: 24 |
| [Http_Buffer](capi-netstack-http-buffer.md) body | Request body, see [Http_Buffer](capi-netstack-http-buffer.md).<br>**Since**: 24 |


