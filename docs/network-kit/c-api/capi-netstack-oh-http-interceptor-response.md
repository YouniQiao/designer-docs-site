# OH_Http_Interceptor_Response

```c
typedef struct OH_Http_Interceptor_Response {...} OH_Http_Interceptor_Response
```

## Overview

Defines interceptor response

**Since**: 24

**Related module**: [netstack](capi-netstack.md)

**Header file**: [http_interceptor_type.h](capi-http-interceptor-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Http_Buffer](capi-netstack-http-buffer.md) body | Response body, see [Http_Buffer](capi-netstack-http-buffer.md).<br>**Since**: 24 |
| [Http_ResponseCode](capi-net-http-type-h.md#http_responsecode) responseCode | Server status code, see [Http_ResponseCode](capi-net-http-type-h.md#http_responsecode).<br>**Since**: 24 |
| [OH_Http_Interceptor_Headers](capi-netstack-oh-http-interceptor-headers.md) *headers | Header of http response, see [OH_Http_Interceptor_Headers](capi-netstack-oh-http-interceptor-headers.md).<br>**Since**: 24 |
| [Http_PerformanceTiming](capi-netstack-http-performancetiming.md) performanceTiming | The time taken of various stages of HTTP request, see [Http_PerformanceTiming](capi-netstack-http-performancetiming.md).<br>**Since**: 24 |


