# arkweb_interface.h

## Overview

Provides a unified entry for the native ArkWeb.

**Library**: libohweb.so

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Related module**: [Web](capi-web.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_AnyNativeAPI](capi-web-arkweb-anynativeapi.md) | ArkWeb_AnyNativeAPI | Defines the native API type of any size. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_NativeAPIVariantKind](#arkweb_nativeapivariantkind) | ArkWeb_NativeAPIVariantKind | Defines the native API set type. |

### Function

| Name | Description |
| -- | -- |
| [ArkWeb_AnyNativeAPI* OH_ArkWeb_GetNativeAPI(ArkWeb_NativeAPIVariantKind type)](#oh_arkweb_getnativeapi) | Obtains the native API set of a specified type. |
| [bool OH_ArkWeb_RegisterScrollCallback(const char* webTag, ArkWeb_OnScrollCallback callback, void* userData)](#oh_arkweb_registerscrollcallback) | Register a scrolling event callback. |

## Enum type description

### ArkWeb_NativeAPIVariantKind

```c
enum ArkWeb_NativeAPIVariantKind
```

**Description**

Defines the native API set type.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKWEB_NATIVE_COMPONENT | API type related to ArkWeb component. |
| ARKWEB_NATIVE_CONTROLLER | API type related to ArkWeb controller. |
| ARKWEB_NATIVE_WEB_MESSAGE_PORT | API type related to ArkWeb WebMessagePort. |
| ARKWEB_NATIVE_WEB_MESSAGE | API type related to ArkWeb WebMessage. |
| ARKWEB_NATIVE_COOKIE_MANAGER | API type related to ArkWeb cookie manager. |
| ARKWEB_NATIVE_JAVASCRIPT_VALUE | API type related to ArkWeb JavaScript value.<br>**Since**: 18 |


## Function description

### OH_ArkWeb_GetNativeAPI()

```c
ArkWeb_AnyNativeAPI* OH_ArkWeb_GetNativeAPI(ArkWeb_NativeAPIVariantKind type)
```

**Description**

Obtains the native API set of a specified type.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_NativeAPIVariantKind](capi-arkweb-interface-h.md#arkweb_nativeapivariantkind) type | Indicates the type of the native API set provided by ArkWeb. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWeb_AnyNativeAPI*](capi-web-arkweb-anynativeapi.md) | Return the pointer to the native API abstract object that carries the size.<br>         If the type is incorrect, a null pointer is returned. |

### OH_ArkWeb_RegisterScrollCallback()

```c
bool OH_ArkWeb_RegisterScrollCallback(const char* webTag, ArkWeb_OnScrollCallback callback, void* userData)
```

**Description**

Register a scrolling event callback.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | Name of the **Web** component. |
| [ArkWeb_OnScrollCallback](capi-arkweb-type-h.md#arkweb_onscrollcallback) callback | Callback used when a page is scrolled. |
| void* userData | Pointer to user-defined data. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | true is returned if the operation is successful; otherwise, false is returned. |


