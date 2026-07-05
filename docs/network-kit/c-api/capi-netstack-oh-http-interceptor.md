# OH_Http_Interceptor

```c
typedef struct OH_Http_Interceptor {...} OH_Http_Interceptor
```

## Overview

Defines interceptor configuration

**Since**: 24

**Related module**: [netstack](capi-netstack.md)

**Header file**: [http_interceptor_type.h](capi-http-interceptor-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t groupId | group id of interceptor<br>**Since**: 24 |
| [OH_Interceptor_Stage](capi-http-interceptor-type-h.md#oh_interceptor_stage) stage | stage of interceptor<br>**Since**: 24 |
| [OH_Interceptor_Type](capi-http-interceptor-type-h.md#oh_interceptor_type) type | type of interceptor<br>**Since**: 24 |
| [OH_Http_InterceptorHandler](capi-http-interceptor-type-h.md#oh_http_interceptorhandler) handler | handler of interceptor<br>**Since**: 24 |
| int32_t enabled | whether the interceptor is enabled<br>**Since**: 24 |


