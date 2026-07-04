# ArkWeb_JavaScriptValueAPI

```c
typedef struct ArkWeb_JavaScriptValueAPI {...} ArkWeb_JavaScriptValueAPI
```

## Overview

Defines the native JavaScriptValue API for ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.

**Since**: 18

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_JavaScriptValueAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [ArkWeb_JavaScriptValuePtr (\*createJavaScriptValue)(ArkWeb_JavaScriptValueType type, void* data, size_t dataLength)](#createjavascriptvalue) | Create the JavaScript value responding to HTML. |

## Member function description

### createJavaScriptValue()

```c
ArkWeb_JavaScriptValuePtr (*createJavaScriptValue)(ArkWeb_JavaScriptValueType type, void* data, size_t dataLength)
```

**Description**

Create the JavaScript value responding to HTML.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_JavaScriptValueType](capi-arkweb-type-h.md#arkweb_javascriptvaluetype) type | The type of ArkWeb_JavaScriptValue. |
|  void* data | The data buffer of ArkWeb_JavaScriptValue. |
|  size_t dataLength | The length of data buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWeb_JavaScriptValuePtr](capi-web-arkweb-javascriptvalue8h.md) | ArkWeb_JavaScriptValuePtr created by ArkWeb, the memory of ArkWeb_JavaScriptValue<br>     is managed by ArkWeb itself. |


