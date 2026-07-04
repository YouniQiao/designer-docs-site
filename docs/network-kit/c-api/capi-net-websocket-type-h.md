# net_websocket_type.h

## Overview

Defines the data structure for the C APIs of the WebSocket client module.

**Library**: libnet_websocket.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

## Summary

### Struct

| Name | Description |
| -- | -- |
| [WebSocket_CloseResult](capi-netstack-websocket-closeresult.md) | Defines the parameters for connection closing by the server. |
| [WebSocket_CloseOption](capi-netstack-websocket-closeoption.md) | Defines the parameters for proactive connection closing by the client. |
| [WebSocket_ErrorResult](capi-netstack-websocket-errorresult.md) | Defines the parameters for the connection error reported by the server. |
| [WebSocket_OpenResult](capi-netstack-websocket-openresult.md) | Defines the parameters for the connection success reported by the server. |
| [WebSocket_Header](capi-netstack-websocket-header.md) | Adds the header linked list to the websocket client. |
| [WebSocket_RequestOptions](capi-netstack-websocket-requestoptions.md) | Defines the parameters for the connection between the WebSocket client and server. |
| [WebSocket](capi-netstack-websocket.md) | Defines the WebSocket client structure. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*WebSocket_OnOpenCallback)(struct WebSocket *client, WebSocket_OpenResult openResult)](#websocket_onopencallback) | WebSocket_OnOpenCallback | Defines the callback function invoked when an <b>open</b> message is received. |
| [typedef void (\*WebSocket_OnMessageCallback)(struct WebSocket *client, char *data, uint32_t length)](#websocket_onmessagecallback) | WebSocket_OnMessageCallback | Defines the callback function invoked when data is received. |
| [typedef void (\*WebSocket_OnErrorCallback)(struct WebSocket *client, WebSocket_ErrorResult errorResult)](#websocket_onerrorcallback) | WebSocket_OnErrorCallback | Defines the callback function invoked when an error message is received. |
| [typedef void (\*WebSocket_OnCloseCallback)(struct WebSocket *client, WebSocket_CloseResult closeResult)](#websocket_onclosecallback) | WebSocket_OnCloseCallback | Defines the callback function invoked when a <b>close</b> message is received. |

## Function description

### WebSocket_OnOpenCallback()

```c
typedef void (*WebSocket_OnOpenCallback)(struct WebSocket *client, WebSocket_OpenResult openResult)
```

**Description**

Defines the callback function invoked when an <b>open</b> message is received.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (struct WebSocket \*client | websocket client. |
| [WebSocket_OpenResult](capi-netstack-websocket-openresult.md) openResult | Content of the <b>open</b> message received by the websocket client. |

### WebSocket_OnMessageCallback()

```c
typedef void (*WebSocket_OnMessageCallback)(struct WebSocket *client, char *data, uint32_t length)
```

**Description**

Defines the callback function invoked when data is received.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (struct WebSocket \*client | websocket client. |
| char \*data | Data received by the websocket client. |
| uint32_t length | Length of the data received by the websocket client. |

### WebSocket_OnErrorCallback()

```c
typedef void (*WebSocket_OnErrorCallback)(struct WebSocket *client, WebSocket_ErrorResult errorResult)
```

**Description**

Defines the callback function invoked when an error message is received.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (struct WebSocket \*client | websocket client. |
| [WebSocket_ErrorResult](capi-netstack-websocket-errorresult.md) errorResult | Content of the connection error message received by the websocket client. |

### WebSocket_OnCloseCallback()

```c
typedef void (*WebSocket_OnCloseCallback)(struct WebSocket *client, WebSocket_CloseResult closeResult)
```

**Description**

Defines the callback function invoked when a <b>close</b> message is received.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (struct WebSocket \*client | webSocket client. |
| [WebSocket_CloseResult](capi-netstack-websocket-closeresult.md) closeResult | Content of the <b>close</b> message received by the webSocket client. |


