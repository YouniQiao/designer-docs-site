# ArkWeb_ProxyMethod

```c
typedef struct ArkWeb_ProxyMethod {...} ArkWeb_ProxyMethod
```

## Overview

Defines the javascript proxy registered method object.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char* methodName | The method of the application side JavaScript object participating in the registration. |
| [ArkWeb_OnJavaScriptProxyCallback](capi-arkweb-type-h.md#arkweb_onjavascriptproxycallback) callback | The callback function registered by developer is called back when HTML side uses. |
| void* userData | The user data to set. |


