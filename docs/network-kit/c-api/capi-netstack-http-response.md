# Http_Response

```c
typedef struct Http_Response {...} Http_Response
```

## Overview

Defines the parameters for http response.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Http_Buffer](capi-netstack-http-buffer.md) body | Response body, see [Http_Buffer](capi-netstack-http-buffer.md). |
| [Http_ResponseCode](capi-net-http-type-h.md#http_responsecode) responseCode | Server status code, see [Http_ResponseCode](capi-net-http-type-h.md#http_responsecode). |
| [Http_Headers](capi-netstack-http-headers.md) *headers | Header of http response, see [Http_Headers](capi-netstack-http-headers.md). |
| char *cookies | Cookies returned by the server. |
| [Http_PerformanceTiming](capi-netstack-http-performancetiming.md) *performanceTiming | The time taken of various stages of HTTP request, see [Http_PerformanceTiming](capi-netstack-http-performancetiming.md). |


### Member functions

| Name | Description |
| -- | -- |
| [void (\*destroyResponse)(struct Http_Response **response)](#destroyresponse) | Response deletion function. |

## Member function description

### destroyResponse()

```c
void (*destroyResponse)(struct Http_Response **response)
```

**Description**

Response deletion function.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| struct [Http_Response](capi-netstack-http-response.md) **response | Indicates the response to be deleted. It is a pointer that points to [Http_Response](capi-netstack-http-response.md). |


