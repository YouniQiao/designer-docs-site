# ArkWeb_WebMessagePortAPI

```c
typedef struct ArkWeb_WebMessagePortAPI {...} ArkWeb_WebMessagePortAPI
```

## Overview

Defines the web message API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the WebMessagePort-related interface cluster.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_WebMessagePortAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [ArkWeb_ErrorCode (\*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)](#postmessage) | Post message to HTML. |
| [void (\*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)](#close) | Close the message port. |
| [void (\*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag,ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)](#setmessageeventhandler) | Set a callback to receive message from HTML. |

## Member function description

### postMessage()

```c
ArkWeb_ErrorCode (*postMessage)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag, const ArkWeb_WebMessagePtr webMessage)
```

**Description**

Post message to HTML.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const [ArkWeb_WebMessagePortPtr](capi-web-arkweb-webmessageport8h.md) webMessagePort | The ArkWeb_WebMessagePort. |
|  const char* webTag | The name of the web component. |
|  const [ArkWeb_WebMessagePtr](capi-web-arkweb-webmessage8h.md) webMessage | The ArkWeb_WebMessage to send. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | Post message result code.<br>             {@link ARKWEB_SUCCESS} post message success.<br>             {@link ARKWEB_INVALID_PARAM} the parameter verification fails.<br>             {@link ARKWEB_INIT_ERROR} no web associated with this webTag. |

### close()

```c
void (*close)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag)
```

**Description**

Close the message port.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const [ArkWeb_WebMessagePortPtr](capi-web-arkweb-webmessageport8h.md) webMessagePort | The ArkWeb_WebMessagePort. |

### setMessageEventHandler()

```c
void (*setMessageEventHandler)(const ArkWeb_WebMessagePortPtr webMessagePort, const char* webTag,ArkWeb_OnMessageEventHandler messageEventHandler, void* userData)
```

**Description**

Set a callback to receive message from HTML.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const [ArkWeb_WebMessagePortPtr](capi-web-arkweb-webmessageport8h.md) webMessagePort | The ArkWeb_WebMessagePort. |
|  const char* webTag | The name of the web component. |
| [ArkWeb_OnMessageEventHandler](capi-arkweb-type-h.md#arkweb_onmessageeventhandler) messageEventHandler | The handler to receive message from HTML. |


