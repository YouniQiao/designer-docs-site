# http_interceptor_type.h

## Overview

Defines the data structure for the C APIs of the http global interceptor.

**Library**: libhttp_interceptor.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 24

**Related module**: [netstack](capi-netstack.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Http_Interceptor_Headers](capi-netstack-oh-http-interceptor-headers.md) | OH_Http_Interceptor_Headers | Defines interceptor header. |
| [OH_Http_Interceptor_Request](capi-netstack-oh-http-interceptor-request.md) | OH_Http_Interceptor_Request | Defines interceptor request |
| [OH_Http_Interceptor_Response](capi-netstack-oh-http-interceptor-response.md) | OH_Http_Interceptor_Response | Defines interceptor response |
| [OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md) | OH_Http_Interceptor | Defines interceptor configuration |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Interceptor_Stage](#oh_interceptor_stage) | OH_Interceptor_Stage | Defines interceptor stage |
| [OH_Interceptor_Type](#oh_interceptor_type) | OH_Interceptor_Type | Defines interceptor type |
| [OH_Interceptor_Result](#oh_interceptor_result) | OH_Interceptor_Result | Defines interceptor process result |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef OH_Interceptor_Result (\*OH_Http_InterceptorHandler)(OH_Http_Interceptor_Request *request, OH_Http_Interceptor_Response *response, int32_t *isModified)](#oh_http_interceptorhandler) | OH_Http_InterceptorHandler | Defines interceptor handler |

## Enum type description

### OH_Interceptor_Stage

```c
enum OH_Interceptor_Stage
```

**Description**

Defines interceptor stage

**Since**: 24

| Enum item | Description |
| -- | -- |
| OH_STAGE_REQUEST | http request hook<br>**Since**: 24 |
| OH_STAGE_RESPONSE | http response hook<br>**Since**: 24 |

### OH_Interceptor_Type

```c
enum OH_Interceptor_Type
```

**Description**

Defines interceptor type

**Since**: 24

| Enum item | Description |
| -- | -- |
| OH_TYPE_READ_ONLY | interceptor will not modify the packet<br>**Since**: 24 |
| OH_TYPE_MODIFY_NETWORK_KIT | interceptor will modify the packet from Network Kit<br>**Since**: 26.0.0 |

### OH_Interceptor_Result

```c
enum OH_Interceptor_Result
```

**Description**

Defines interceptor process result

**Since**: 24

| Enum item | Description |
| -- | -- |
| OH_CONTINUE | interceptor result is continue<br>**Since**: 24 |
| OH_ABORT | interceptor result is abort this packet<br>**Since**: 24 |


## Function description

### OH_Http_InterceptorHandler()

```c
typedef OH_Interceptor_Result (*OH_Http_InterceptorHandler)(OH_Http_Interceptor_Request *request, OH_Http_Interceptor_Response *response, int32_t *isModified)
```

**Description**

Defines interceptor handler

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_Http_Interceptor_Request \*request | http request packet. |
| [OH_Http_Interceptor_Response](capi-netstack-oh-http-interceptor-response.md) \*response | http response packet. |
| int32_t \*isModified | whether interceptor modified the packet. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Interceptor_Result](capi-http-interceptor-type-h.md#oh_interceptor_result) | [OH_Interceptor_Result](capi-http-interceptor-type-h.md#oh_interceptor_result) interceptor process result. |


