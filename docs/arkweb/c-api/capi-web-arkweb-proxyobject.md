# ArkWeb_ProxyObject

```c
typedef struct ArkWeb_ProxyObject {...} ArkWeb_ProxyObject
```

## Overview

Defines the javascript proxy registered object.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char* objName | The name of the registered object. |
| const [ArkWeb_ProxyMethod*](capi-web-arkweb-proxymethod.md) methodList | The javascript proxy registered method object list |
| size_t size | The size of the methodList. |


