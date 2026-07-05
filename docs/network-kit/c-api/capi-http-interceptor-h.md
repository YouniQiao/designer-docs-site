# http_interceptor.h

## Overview

Defines the APIs for http global interceptor.

**Library**: libhttp_interceptor.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 24

**Related module**: [netstack](capi-netstack.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [int32_t OH_Http_AddReadOnlyInterceptor(struct OH_Http_Interceptor *interceptor)](#oh_http_addreadonlyinterceptor) | add a read-only http global interceptor for HTTP requests. |
| [int32_t OH_Http_AddWritableInterceptor(struct OH_Http_Interceptor *interceptor)](#oh_http_addwritableinterceptor) | add a writable http global interceptor for HTTP requests. |
| [int32_t OH_Http_RemoveInterceptor(struct OH_Http_Interceptor *interceptor)](#oh_http_removeinterceptor) | delete a specific http global interceptor |
| [int32_t OH_Http_RemoveAllInterceptors(int32_t groupId)](#oh_http_removeallinterceptors) | Deletes all HTTP interceptors matching the specified group ID. |
| [int32_t OH_Http_StartAllInterceptors(int32_t groupId)](#oh_http_startallinterceptors) | start all http global interceptors by groupId |
| [int32_t OH_Http_StopAllInterceptors(int32_t groupId)](#oh_http_stopallinterceptors) | stop all http global interceptors by groupId |

## Function description

### OH_Http_AddReadOnlyInterceptor()

```c
int32_t OH_Http_AddReadOnlyInterceptor(struct OH_Http_Interceptor *interceptor)
```

**Description**

add a read-only http global interceptor for HTTP requests.

>**Note**: 
>The interceptor remains active until it is explicitly removed by the developer.
 *     you must call [OH_Http_RemoveInterceptor](capi-http-interceptor-h.md#oh_http_removeinterceptor) to release a specific interceptor
 *     or [OH_Http_RemoveAllInterceptors](capi-http-interceptor-h.md#oh_http_removeallinterceptors) to release a group of interceptors.

**Required permission**: ohos.permission.INTERNET

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md) *interceptor | Http global interceptor configuration, Pointer to [OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |

### OH_Http_AddWritableInterceptor()

```c
int32_t OH_Http_AddWritableInterceptor(struct OH_Http_Interceptor *interceptor)
```

**Description**

add a writable http global interceptor for HTTP requests.

>**Note**: 
>The interceptor remains active until it is explicitly removed by the developer.
 *     you must call [OH_Http_RemoveInterceptor](capi-http-interceptor-h.md#oh_http_removeinterceptor) to release a specific interceptor
 *     or [OH_Http_RemoveAllInterceptors](capi-http-interceptor-h.md#oh_http_removeallinterceptors) to release a group of interceptors.

**Required permission**: ohos.permission.INTERNET

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md) *interceptor | Http global interceptor configuration, Pointer to [OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |

### OH_Http_RemoveInterceptor()

```c
int32_t OH_Http_RemoveInterceptor(struct OH_Http_Interceptor *interceptor)
```

**Description**

delete a specific http global interceptor

**Required permission**: ohos.permission.INTERNET

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md) *interceptor | Http global interceptor configuration, Pointer to [OH_Http_Interceptor](capi-netstack-oh-http-interceptor.md). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |

### OH_Http_RemoveAllInterceptors()

```c
int32_t OH_Http_RemoveAllInterceptors(int32_t groupId)
```

**Description**

Deletes all HTTP interceptors matching the specified group ID.

>**Note**: 
>The groupId is allocated and managed by the application itself when creating
 *     interceptors. If multiple modules within the application need to use interceptors,
 *     the application must properly allocate and manage groupId to avoid conflicts.
 *     Conflicts in groupId between internal modules may lead to accidental deletion
 *     of interceptors when calling this function.

**Required permission**: ohos.permission.INTERNET

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t groupId | http global interceptor group id |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |

### OH_Http_StartAllInterceptors()

```c
int32_t OH_Http_StartAllInterceptors(int32_t groupId)
```

**Description**

start all http global interceptors by groupId

**Required permission**: ohos.permission.INTERNET

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t groupId | http global interceptor group id |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |

### OH_Http_StopAllInterceptors()

```c
int32_t OH_Http_StopAllInterceptors(int32_t groupId)
```

**Description**

stop all http global interceptors by groupId

**Required permission**: ohos.permission.INTERNET

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t groupId | http global interceptor group id |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | [OH_HTTP_RESULT_OK](capi-net-http-type-h.md#http_errcode) 0 -if the operation is successful.<br>         [OH_HTTP_PERMISSION_DENIED](capi-net-http-type-h.md#http_errcode) 201 -if permission is denied. |


