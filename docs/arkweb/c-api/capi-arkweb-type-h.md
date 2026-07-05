# arkweb_type.h

## Overview

Defines the common types for the native ArkWeb.

**Library**: libohweb.so

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Related module**: [Web](capi-web.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_JavaScriptBridgeData](capi-web-arkweb-javascriptbridgedata.md) | ArkWeb_JavaScriptBridgeData | Defines the javascript bridge data type. |
| [ArkWeb_JavaScriptObject](capi-web-arkweb-javascriptobject.md) | ArkWeb_JavaScriptObject | Defines the javascript object. |
| [ArkWeb_ProxyMethod](capi-web-arkweb-proxymethod.md) | ArkWeb_ProxyMethod | Defines the javascript proxy registered method object. |
| [ArkWeb_ProxyMethodWithResult](capi-web-arkweb-proxymethodwithresult.md) | ArkWeb_ProxyMethodWithResult | Defines the JavaScript proxy method with a return value. |
| [ArkWeb_ProxyObject](capi-web-arkweb-proxyobject.md) | ArkWeb_ProxyObject | Defines the javascript proxy registered object. |
| [ArkWeb_ProxyObjectWithResult](capi-web-arkweb-proxyobjectwithresult.md) | ArkWeb_ProxyObjectWithResult | Defines the JavaScript proxy registered object with methodList that has a return value. |
| [ArkWeb_ControllerAPI](capi-web-arkweb-controllerapi.md) | ArkWeb_ControllerAPI | Defines the controller API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the Controller-related interface cluster. |
| [ArkWeb_ComponentAPI](capi-web-arkweb-componentapi.md) | ArkWeb_ComponentAPI | Defines the component API for native ArkWeb. |
| [ArkWeb_WebMessagePortAPI](capi-web-arkweb-webmessageportapi.md) | ArkWeb_WebMessagePortAPI | Defines the web message API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the WebMessagePort-related interface cluster. |
| [ArkWeb_WebMessageAPI](capi-web-arkweb-webmessageapi.md) | ArkWeb_WebMessageAPI | Defines the web message data API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the WebMessage-related interface cluster. |
| [ArkWeb_CookieManagerAPI](capi-web-arkweb-cookiemanagerapi.md) | ArkWeb_CookieManagerAPI | Defines the native CookieManager API for ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the CookieManager-related interface cluster. |
| [ArkWeb_JavaScriptValueAPI](capi-web-arkweb-javascriptvalueapi.md) | ArkWeb_JavaScriptValueAPI | Defines the native JavaScriptValue API for ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM. |
| [ArkWeb_WebMessage*](capi-web-arkweb-webmessage8h.md) | ArkWeb_WebMessagePtr | Defines the ArkWeb_WebMessage. |
| [ArkWeb_JavaScriptValue*](capi-web-arkweb-javascriptvalue8h.md) | ArkWeb_JavaScriptValuePtr | Defines the ArkWeb_JavaScriptValuePtr. |
| [ArkWeb_WebMessagePort*](capi-web-arkweb-webmessageport8h.md) | ArkWeb_WebMessagePortPtr | Defines the ArkWeb_WebMessagePort that represent a HTML5 message port. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_WebMessageType](#arkweb_webmessagetype) | ArkWeb_WebMessageType | Defines the data type carried in an ArkWeb_WebMessage. |
| [ArkWeb_JavaScriptValueType](#arkweb_javascriptvaluetype) | ArkWeb_JavaScriptValueType | Defines the data type carried in an ArkWeb_JavaScriptValue. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*ArkWeb_OnJavaScriptCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* data, void* userData)](#arkweb_onjavascriptcallback) | ArkWeb_OnJavaScriptCallback | Defines the javascript callback of the native ArkWeb. |
| [typedef void (\*ArkWeb_OnJavaScriptProxyCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)](#arkweb_onjavascriptproxycallback) | ArkWeb_OnJavaScriptProxyCallback | Defines the javascript proxy callback of the native ArkWeb. |
| [typedef ArkWeb_JavaScriptValuePtr (\*ArkWeb_OnJavaScriptProxyCallbackWithResult)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)](#arkweb_onjavascriptproxycallbackwithresult) | ArkWeb_OnJavaScriptProxyCallbackWithResult | Defines the JavaScript proxy callback of the native ArkWeb. |
| [typedef void (\*ArkWeb_OnComponentCallback)(const char* webTag, void* userData)](#arkweb_oncomponentcallback) | ArkWeb_OnComponentCallback | Defines the component callback of the native ArkWeb. |
| [typedef void (\*ArkWeb_OnScrollCallback)(const char* webTag, void* userData, double x, double y)](#arkweb_onscrollcallback) | ArkWeb_OnScrollCallback | Called when the **Web** component is scrolled. |
| [typedef void (\*ArkWeb_OnMessageEventHandler)(const char* webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void* userData)](#arkweb_onmessageeventhandler) | ArkWeb_OnMessageEventHandler | Defines the callback to receive message from HTML. |
| [ARKWEB_MEMBER_EXISTS(s, f) \((intptr_t) & ((s)->f) - (intptr_t)(s) + sizeof((s)->f) <= *reinterpret_cast<size_t*>(s))](#arkweb_member_exists) | - | Check whether the member variables of the current struct exist. |
| [ARKWEB_MEMBER_MISSING(s, f)(!ARKWEB_MEMBER_EXISTS(s, f) \|\| !((s)->f))](#arkweb_member_missing) | - | Return false if the struct member does not exist, otherwise true. |

## Enum type description

### ArkWeb_WebMessageType

```c
enum ArkWeb_WebMessageType
```

**Description**

Defines the data type carried in an ArkWeb_WebMessage.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKWEB_NONE = 0 | Represent error data |
| ARKWEB_STRING | The data carried in the ArkWeb_WebMessage is string. |
| ARKWEB_BUFFER | The data carried in the ArkWeb_WebMessage is buffer(uint8_t). |

### ArkWeb_JavaScriptValueType

```c
enum ArkWeb_JavaScriptValueType
```

**Description**

Defines the data type carried in an ArkWeb_JavaScriptValue.

**Since**: 18

| Enum item | Description |
| -- | -- |
| ARKWEB_JAVASCRIPT_NONE = 0 | Represent error data |
| ARKWEB_JAVASCRIPT_STRING | The data carried in the ArkWeb_JavaScriptValue is string. |
| ARKWEB_JAVASCRIPT_BOOL | The data carried in the ArkWeb_JavaScriptValue is bool. |


## Function description

### ArkWeb_OnJavaScriptCallback()

```c
typedef void (*ArkWeb_OnJavaScriptCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* data, void* userData)
```

**Description**

Defines the javascript callback of the native ArkWeb.

**Since**: 12

### ArkWeb_OnJavaScriptProxyCallback()

```c
typedef void (*ArkWeb_OnJavaScriptProxyCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)
```

**Description**

Defines the javascript proxy callback of the native ArkWeb.

**Since**: 12

### ArkWeb_OnJavaScriptProxyCallbackWithResult()

```c
typedef ArkWeb_JavaScriptValuePtr (*ArkWeb_OnJavaScriptProxyCallbackWithResult)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)
```

**Description**

Defines the JavaScript proxy callback of the native ArkWeb.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* webTag | The name of the web component. |
| [const ArkWeb_JavaScriptBridgeData](capi-web-arkweb-javascriptbridgedata.md)\* dataArray | The JavaScript bridge data array from HTML. |
| size_t arraySize | The number of elements in the array. |
| void\* userData | The data set by user. |

### ArkWeb_OnComponentCallback()

```c
typedef void (*ArkWeb_OnComponentCallback)(const char* webTag, void* userData)
```

**Description**

Defines the component callback of the native ArkWeb.

**Since**: 12

### ArkWeb_OnScrollCallback()

```c
typedef void (*ArkWeb_OnScrollCallback)(const char* webTag, void* userData, double x, double y)
```

**Description**

Called when the **Web** component is scrolled.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* webTag | Name of the **Web** component. |
| void\* userData | Pointer to user-defined data. |
| double x | Scrolling offset of the X axis. Unit: vp. |
| double y | Scrolling offset of the Y axis. Unit: vp. |

### ArkWeb_OnMessageEventHandler()

```c
typedef void (*ArkWeb_OnMessageEventHandler)(const char* webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void* userData)
```

**Description**

Defines the callback to receive message from HTML.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* webTag | The name of the web component. |
| [const ArkWeb_WebMessagePortPtr](capi-web-arkweb-webmessageport8h.md) port | The ArkWeb_WebMessagePort for registering the ArkWeb_OnMessageEventHandler. |
| [const ArkWeb_WebMessagePtr](capi-web-arkweb-webmessage8h.md) message | The received ArkWeb_WebMessage. |
| void\* userData | The data set by user. |

### ARKWEB_MEMBER_EXISTS()

```c
ARKWEB_MEMBER_EXISTS(s, f) \((intptr_t) & ((s)->f) - (intptr_t)(s) + sizeof((s)->f) <= *reinterpret_cast<size_t*>(s))
```

**Description**

Check whether the member variables of the current struct exist.

**Since**: 12

### ARKWEB_MEMBER_MISSING()

```c
ARKWEB_MEMBER_MISSING(s, f)(!ARKWEB_MEMBER_EXISTS(s, f) || !((s)->f))
```

**Description**

Return false if the struct member does not exist, otherwise true.

**Since**: 12


