# ArkWeb_ProxyMethodWithResult

```c
typedef struct ArkWeb_ProxyMethodWithResult {...} ArkWeb_ProxyMethodWithResult
```

## Overview

Defines the JavaScript proxy method with a return value.

**Since**: 18

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const char* methodName | The method of the application side JavaScript object participating in the registration. |
| [ArkWeb_OnJavaScriptProxyCallbackWithResult](capi-arkweb-type-h.md#arkweb_onjavascriptproxycallbackwithresult) callback | The callback function with a return value registered by developer is called back when HTML side uses. |
| void* userData | The user data to set. |


