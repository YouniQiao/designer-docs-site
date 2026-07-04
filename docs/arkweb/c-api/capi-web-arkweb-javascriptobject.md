# ArkWeb_JavaScriptObject

```c
typedef struct ArkWeb_JavaScriptObject {...} ArkWeb_JavaScriptObject
```

## Overview

Defines the javascript object.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const uint8_t* buffer | A piece of javascript code. |
| size_t size | The size of the javascript code. |
| [ArkWeb_OnJavaScriptCallback](capi-arkweb-type-h.md#arkweb_onjavascriptcallback) callback | Callbacks execute JavaScript script results. |
| void* userData | The user data to set. |


