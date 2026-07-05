# ArkWeb_WebMessageAPI

```c
typedef struct ArkWeb_WebMessageAPI {...} ArkWeb_WebMessageAPI
```

## Overview

Defines the web message data API for native ArkWeb.Before invoking an API, you are advised to use ARKWEB_MEMBER_MISSING to checkwhether the function structure has a corresponding function pointer to avoid crashcaused by mismatch between the SDK and the device ROM.Use OH_ArkWeb_GetNativeAPI in the UI thread to obtain the WebMessage-related interface cluster.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_WebMessageAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [ArkWeb_WebMessagePtr (\*createWebMessage)()](#createwebmessage) | Used to create a ArkWeb_WebMessage.@return The created ArkWeb_WebMessage, destroy it throughdestroyWebMessage after it is no longer used. |
| [void (\*destroyWebMessage)(ArkWeb_WebMessagePtr* webMessage)](#destroywebmessage) | Used to destroy a ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage to destroy. |
| [void (\*setType)(ArkWeb_WebMessagePtr webMessage, ArkWeb_WebMessageType type)](#settype) | Set the type of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param type The type of ArkWeb_WebMessage. |
| [ArkWeb_WebMessageType (\*getType)(ArkWeb_WebMessagePtr webMessage)](#gettype) | Get the type of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@return The type of ArkWeb_WebMessage. |
| [void (\*setData)(ArkWeb_WebMessagePtr webMessage, void* data, size_t dataLength)](#setdata) | Set the data of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param data The data of ArkWeb_WebMessage.@param dataLength The length of data. |
| [void* (\*getData)(ArkWeb_WebMessagePtr webMessage, size_t* dataLength)](#getdata) | Get the data of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param dataLength The length of data.@return The data of ArkWeb_WebMessage. |

## Member function description

### createWebMessage()

```c
ArkWeb_WebMessagePtr (*createWebMessage)()
```

**Description**

Used to create a ArkWeb_WebMessage.@return The created ArkWeb_WebMessage, destroy it throughdestroyWebMessage after it is no longer used.

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWeb_WebMessagePtr](capi-web-arkweb-webmessage8h.md) | The created ArkWeb_WebMessage, destroy it through<br>      destroyWebMessage after it is no longer used. |

### destroyWebMessage()

```c
void (*destroyWebMessage)(ArkWeb_WebMessagePtr* webMessage)
```

**Description**

Used to destroy a ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage to destroy.

### setType()

```c
void (*setType)(ArkWeb_WebMessagePtr webMessage, ArkWeb_WebMessageType type)
```

**Description**

Set the type of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param type The type of ArkWeb_WebMessage.

### getType()

```c
ArkWeb_WebMessageType (*getType)(ArkWeb_WebMessagePtr webMessage)
```

**Description**

Get the type of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@return The type of ArkWeb_WebMessage.

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWeb_WebMessageType](capi-arkweb-type-h.md#arkweb_webmessagetype) | The type of ArkWeb_WebMessage. |

### setData()

```c
void (*setData)(ArkWeb_WebMessagePtr webMessage, void* data, size_t dataLength)
```

**Description**

Set the data of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param data The data of ArkWeb_WebMessage.@param dataLength The length of data.

### getData()

```c
void* (*getData)(ArkWeb_WebMessagePtr webMessage, size_t* dataLength)
```

**Description**

Get the data of ArkWeb_WebMessage.@param webMessage The ArkWeb_WebMessage.@param dataLength The length of data.@return The data of ArkWeb_WebMessage.

**Returns**:

| Type | Description |
| -- | -- |
| void* | The data of ArkWeb_WebMessage. |


