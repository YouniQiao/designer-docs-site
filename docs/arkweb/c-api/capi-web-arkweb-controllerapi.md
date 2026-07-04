# ArkWeb_ControllerAPI

```c
typedef struct ArkWeb_ControllerAPI {...} ArkWeb_ControllerAPI
```

## Overview

Defines the controller API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the Controller-related interface cluster.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_ControllerAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [void (\*runJavaScript)(const char* webTag, const ArkWeb_JavaScriptObject* javascriptObject)](#runjavascript) | Load a piece of code and execute JS code in the context of the currently displayed page. |
| [void (\*registerJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)](#registerjavascriptproxy) | Register the JavaScript object and method list. |
| [void (\*deleteJavaScriptRegister)(const char* webTag, const char* objName)](#deletejavascriptregister) | Deletes the registered object which the given name. |
| [void (\*refresh)(const char* webTag)](#refresh) | Refresh the current web page. |
| [void (\*registerAsyncJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)](#registerasyncjavascriptproxy) | Register the JavaScript object and async method list. |
| [ArkWeb_WebMessagePortPtr* (\*createWebMessagePorts)(const char* webTag, size_t* size)](#createwebmessageports) | Creates a message channel to communicate with HTML and returnsthe message ports representing the message channel endpoints. |
| [void (\*destroyWebMessagePorts)(ArkWeb_WebMessagePortPtr** ports, size_t size)](#destroywebmessageports) | Destroy message ports. |
| [ArkWeb_ErrorCode (\*postWebMessage)(const char* webTag, const char* name, ArkWeb_WebMessagePortPtr* webMessagePorts, size_t size, const char* url)](#postwebmessage) | Post message ports to main frame. |
| [const char* (\*getLastJavascriptProxyCallingFrameUrl)()](#getlastjavascriptproxycallingframeurl) | Get the url of the last frame that calls the JavaScriptProxy.This should be called on the thread which JavaScriptProxy called. |
| [void (\*registerJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject,const char* permission)](#registerjavascriptproxyex) | Register the JavaScript object and method list, the method is callback function that has a return value. |
| [void (\*registerAsyncJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObject* proxyObject,const char* permission)](#registerasyncjavascriptproxyex) | Register the JavaScript object and async method list. |

## Member function description

### runJavaScript()

```c
void (*runJavaScript)(const char* webTag, const ArkWeb_JavaScriptObject* javascriptObject)
```

**Description**

Load a piece of code and execute JS code in the context of the currently displayed page.

### registerJavaScriptProxy()

```c
void (*registerJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)
```

**Description**

Register the JavaScript object and method list.

### deleteJavaScriptRegister()

```c
void (*deleteJavaScriptRegister)(const char* webTag, const char* objName)
```

**Description**

Deletes the registered object which the given name.

### refresh()

```c
void (*refresh)(const char* webTag)
```

**Description**

Refresh the current web page.

### registerAsyncJavaScriptProxy()

```c
void (*registerAsyncJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)
```

**Description**

Register the JavaScript object and async method list.

### createWebMessagePorts()

```c
ArkWeb_WebMessagePortPtr* (*createWebMessagePorts)(const char* webTag, size_t* size)
```

**Description**

Creates a message channel to communicate with HTML and returnsthe message ports representing the message channel endpoints.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |

### destroyWebMessagePorts()

```c
void (*destroyWebMessagePorts)(ArkWeb_WebMessagePortPtr** ports, size_t size)
```

**Description**

Destroy message ports.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_WebMessagePortPtr](capi-web-arkweb-webmessageport8h.md)** ports | Address of the message ports array pointer. |

### postWebMessage()

```c
ArkWeb_ErrorCode (*postWebMessage)(const char* webTag, const char* name, ArkWeb_WebMessagePortPtr* webMessagePorts, size_t size, const char* url)
```

**Description**

Post message ports to main frame.

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
|  const char* name | Name of the message to be sent. |
|  size_t size | The quantity of message ports. |
|  const char* url | Indicates the URI for receiving the message. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | Post web message result code.<br>             {@link ARKWEB_SUCCESS} post web message success.<br>             {@link ARKWEB_INVALID_PARAM} the parameter verification fails.<br>             {@link ARKWEB_INIT_ERROR} no web associated with this webTag. |

### getLastJavascriptProxyCallingFrameUrl()

```c
const char* (*getLastJavascriptProxyCallingFrameUrl)()
```

**Description**

Get the url of the last frame that calls the JavaScriptProxy.This should be called on the thread which JavaScriptProxy called.

**Since**: 14

**Returns**:

| Type | Description |
| -- | -- |
| const char* | The url of the last frame that calls the JavaScriptProxy. |

### registerJavaScriptProxyEx()

```c
void (*registerJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject,const char* permission)
```

**Description**

Register the JavaScript object and method list, the method is callback function that has a return value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
|  const [ArkWeb_ProxyObjectWithResult](capi-web-arkweb-proxyobjectwithresult.md)* proxyObject | The JavaScript object to register, the object has callback functions with return value. |
| const char* permission | The JSON string, which defaults to null, is used to configure the permission control forJSBridge, allowing for the definition of URL whitelists at the object and method levels. |

### registerAsyncJavaScriptProxyEx()

```c
void (*registerAsyncJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObject* proxyObject,const char* permission)
```

**Description**

Register the JavaScript object and async method list.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
|  const [ArkWeb_ProxyObject](capi-web-arkweb-proxyobject.md)* proxyObject | The JavaScript object to register. |
| const char* permission | The JSON string, which defaults to null, is used to configure the permission controlfor JSBridge, allowing for the definition of URL whitelists at the object and method levels. |


