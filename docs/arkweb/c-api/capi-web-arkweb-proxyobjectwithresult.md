# ArkWeb_ProxyObjectWithResult

```c
typedef struct ArkWeb_ProxyObjectWithResult {...} ArkWeb_ProxyObjectWithResult
```

## Overview

Defines the JavaScript proxy registered object with methodList that has a return value.

**Since**: 18

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char* objName | The name of the registered object. |
| const [ArkWeb_ProxyMethodWithResult*](capi-web-arkweb-proxymethodwithresult.md) methodList | The JavaScript proxy registered method object list with a callback function that has a return value |
| size_t size | The size of the methodList. |


