# net_websocket.h

## Overview

Defines the APIs for the websocket client module.

**Library**: libnet_websocket.so

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Related module**: [netstack](capi-netstack.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [struct WebSocket *OH_WebSocketClient_Constructor(WebSocket_OnOpenCallback onOpen, WebSocket_OnMessageCallback onMessage, WebSocket_OnErrorCallback onError, WebSocket_OnCloseCallback onclose)](#oh_websocketclient_constructor) | Constructor of websocket. |
| [int OH_WebSocketClient_AddHeader(struct WebSocket *client, struct WebSocket_Header header)](#oh_websocketclient_addheader) | Adds the header information to the client request. |
| [int OH_WebSocketClient_Connect(struct WebSocket *client, const char *url, struct WebSocket_RequestOptions options)](#oh_websocketclient_connect) | Connects the client to the server. |
| [int OH_WebSocketClient_Send(struct WebSocket *client, char *data, size_t length)](#oh_websocketclient_send) | Sends data from the client to the server. |
| [int OH_WebSocketClient_Close(struct WebSocket *client, struct WebSocket_CloseOption options)](#oh_websocketclient_close) | Closes a webSocket connection. |
| [int OH_WebSocketClient_Destroy(struct WebSocket *client)](#oh_websocketclient_destroy) | Releases the context and resources of the websocket connection. |

## Function description

### OH_WebSocketClient_Constructor()

```c
struct WebSocket *OH_WebSocketClient_Constructor(WebSocket_OnOpenCallback onOpen, WebSocket_OnMessageCallback onMessage, WebSocket_OnErrorCallback onError, WebSocket_OnCloseCallback onclose)
```

**Description**

Constructor of websocket.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [WebSocket_OnOpenCallback](capi-net-websocket-type-h.md#websocket_onopencallback) onOpen | Callback function invoked when a connection setup message is received. |
| [WebSocket_OnMessageCallback](capi-net-websocket-type-h.md#websocket_onmessagecallback) onMessage | Callback function invoked when a message is received. |
| [WebSocket_OnErrorCallback](capi-net-websocket-type-h.md#websocket_onerrorcallback) onError | Callback function invoked when a connection error message is received. |
| [WebSocket_OnCloseCallback](capi-net-websocket-type-h.md#websocket_onclosecallback) onclose | Callback function invoked when a connection closing message is closed. |

**Returns**:

| Type | Description |
| -- | -- |
| [struct WebSocket *](capi-netstack-websocket.md) | Pointer to the websocket client if success; NULL otherwise. |

### OH_WebSocketClient_AddHeader()

```c
int OH_WebSocketClient_AddHeader(struct WebSocket *client, struct WebSocket_Header header)
```

**Description**

Adds the header information to the client request.

**System capability**: SystemCapability.Communication.NetStack

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct WebSocket](capi-netstack-websocket.md) *client | Pointer to the websocket client. |
| [struct WebSocket_Header](capi-netstack-websocket-header.md) header | Header information |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if success; non-0 otherwise. For details about error codes, see {@link OH_Websocket_ErrCode}. |

### OH_WebSocketClient_Connect()

```c
int OH_WebSocketClient_Connect(struct WebSocket *client, const char *url, struct WebSocket_RequestOptions options)
```

**Description**

Connects the client to the server.

**System capability**: SystemCapability.Communication.NetStack

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct WebSocket](capi-netstack-websocket.md) *client | Pointer to the websocket client. |
| const char *url | URL for the client to connect to the server. |
| [struct WebSocket_RequestOptions](capi-netstack-websocket-requestoptions.md) options | Optional parameters. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if success; non-0 otherwise. For details about error codes, see {@link OH_Websocket_ErrCode}. |

### OH_WebSocketClient_Send()

```c
int OH_WebSocketClient_Send(struct WebSocket *client, char *data, size_t length)
```

**Description**

Sends data from the client to the server.

**System capability**: SystemCapability.Communication.NetStack

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct WebSocket](capi-netstack-websocket.md) *client | Pointer to the websocket client. |
| char *data | Data sent by the client. |
| size_t length | Length of the data sent by the client. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if success; non-0 otherwise. For details about error codes, see {@link OH_Websocket_ErrCode}. |

### OH_WebSocketClient_Close()

```c
int OH_WebSocketClient_Close(struct WebSocket *client, struct WebSocket_CloseOption options)
```

**Description**

Closes a webSocket connection.

**System capability**: SystemCapability.Communication.NetStack

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct WebSocket](capi-netstack-websocket.md) *client | Pointer to the websocket client. |
| [struct WebSocket_CloseOption](capi-netstack-websocket-closeoption.md) options | Optional parameters. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if success; non-0 otherwise. For details about error codes, see {@link OH_Websocket_ErrCode}. |

### OH_WebSocketClient_Destroy()

```c
int OH_WebSocketClient_Destroy(struct WebSocket *client)
```

**Description**

Releases the context and resources of the websocket connection.

**System capability**: SystemCapability.Communication.NetStack

**Required permission**: ohos.permission.INTERNET

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct WebSocket](capi-netstack-websocket.md) *client | Pointer to the websocket client. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if success; non-0 otherwise. For details about error codes, see {@link OH_Websocket_ErrCode}. |


