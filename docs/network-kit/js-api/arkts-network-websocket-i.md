# WebSocket

<p>Defines a WebSocket object. Before invoking WebSocket APIs, you need to call webSocket.createWebSocket to create a WebSocket object.</p>

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@ohos.net.webSocket';
```

## close

```TypeScript
close(callback: AsyncCallback<boolean>): void
```

Closes a WebSocket connection.

**Since:** 11

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
ws.close((err: BusinessError) => {
  if (!err) {
    console.info("close success")
  } else {
    console.error(`close fail. Code: ${err.code}, message: ${err.message}`)
  }
});

```

## close

```TypeScript
close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void
```

Closes a WebSocket connection.

**Since:** 11

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | WebSocketCloseOptions | Yes | Optional parameters {@link WebSocketCloseOptions}. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();

let options: webSocket.WebSocketCloseOptions | undefined;
if (options != undefined) {
    options.code = 1000
    options.reason = "your reason"
}
ws.close(options, (err: BusinessError) => {
    if (!err) {
        console.info("close success")
    } else {
        console.error(`close fail. Code: ${err.code}, message: ${err.message}`)
    }
});

```

## close

```TypeScript
close(options?: WebSocketCloseOptions): Promise<boolean>
```

Closes a WebSocket connection.

**Since:** 11

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | WebSocketCloseOptions | No | Optional parameters {@link WebSocketCloseOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
let options: webSocket.WebSocketCloseOptions | undefined;
if (options != undefined) {
    options.code = 1000
    options.reason = "your reason"
}
let promise = ws.close();
promise.then((value: boolean) => {
    console.info("close success")
}).catch((err:string) => {
    console.error("close fail, error:" + JSON.stringify(err))
});

```

## connect

```TypeScript
connect(url: string, callback: AsyncCallback<boolean>): void
```

Initiates a WebSocket request to establish a WebSocket connection to a given URL.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for establishing a WebSocket connection. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of connect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2302001](../errorcode-net-webSocket.md#2302001-websocket-url-error) | Websocket url error. |
| [2302002](../errorcode-net-webSocket.md#2302002-websocket-certificate-does-not-exist) | Websocket certificate file does not exist. |
| [2302003](../errorcode-net-webSocket.md#2302003-websocket-connection-already-exists) | Websocket connection already exists. |
| [2302998](../errorcode-net-webSocket.md#2302998-domain-access-denied) | It is not allowed to access this domain. |
| [2302999](../errorcode-net-webSocket.md#2302999-internal-error) | Internal error. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
let url = "ws://";
ws.connect(url, (err: BusinessError, value: boolean) => {
  if (!err) {
    console.info("connect success")
  } else {
    console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)
  }
});

```

## connect

```TypeScript
connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void
```

Initiates a WebSocket request to establish a WebSocket connection to a given URL.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for establishing a WebSocket connection. |
| options | WebSocketRequestOptions | Yes | Optional parameters {@link WebSocketRequestOptions}. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of connect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2302001](../errorcode-net-webSocket.md#2302001-websocket-url-error) | Websocket url error. |
| [2302002](../errorcode-net-webSocket.md#2302002-websocket-certificate-does-not-exist) | Websocket certificate file does not exist. |
| [2302003](../errorcode-net-webSocket.md#2302003-websocket-connection-already-exists) | Websocket connection already exists. |
| [2302998](../errorcode-net-webSocket.md#2302998-domain-access-denied) | It is not allowed to access this domain. |
| [2302999](../errorcode-net-webSocket.md#2302999-internal-error) | Internal error. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Example 1:
let ws = webSocket.createWebSocket();
let options: webSocket.WebSocketRequestOptions | undefined;
if (options !=undefined) {
  options.header = {
     name1: "value1",
     name2: "value2",
     name3: "value3"
  };
  options.caPath = "";
}
let url = "ws://"
ws.connect(url, options, (err: BusinessError, value: Object) => {
  if (!err) {
    console.info("connect success")
  } else {
    console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)
  }
});

// Example 2:
let url = "ws://"
let ws = webSocket.createWebSocket();
let options: webSocket.WebSocketRequestOptions = {
  minSupportTlsProtocol: webSocket.TlsProtocol.TLS_V_1_1
};
ws.connect(url, options, (err: BusinessError, value: Object) => {
  if (!err) {
    console.info("connect success")
  } else {
    console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)
  }
});


```

## connect

```TypeScript
connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>
```

Initiates a WebSocket request to establish a WebSocket connection to a given URL.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for establishing a WebSocket connection. |
| options | WebSocketRequestOptions | No | Optional parameters {@link WebSocketRequestOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2302001](../errorcode-net-webSocket.md#2302001-websocket-url-error) | Websocket url error. |
| [2302002](../errorcode-net-webSocket.md#2302002-websocket-certificate-does-not-exist) | Websocket certificate file does not exist. |
| [2302003](../errorcode-net-webSocket.md#2302003-websocket-connection-already-exists) | Websocket connection already exists. |
| [2302998](../errorcode-net-webSocket.md#2302998-domain-access-denied) | It is not allowed to access this domain. |
| [2302999](../errorcode-net-webSocket.md#2302999-internal-error) | Internal error. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
let url = "ws://"
let promise = ws.connect(url);
promise.then((value: boolean) => {
  console.info("connect success")
}).catch((err:string) => {
  console.error("connect fail, error:" + JSON.stringify(err))
});

```

## off('open')

```TypeScript
off(type: 'open', callback?: AsyncCallback<Object>): void
```

Cancels listening for the open events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'open' | Yes | event indicating that a WebSocket connection has been opened. |
| callback | AsyncCallback&lt;Object&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
class OutValue {
  status: number = 0
  message: string = ""
}
let callback1 = (err: BusinessError, value: Object) => {
 console.info("on open, status:" + ((value as OutValue).status + ", message:" + (value as OutValue).message))
}
ws.on('open', callback1);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
ws.off('open', callback1);

```

## off('openInfo')

```TypeScript
off(type: 'openInfo', callback?: AsyncCallback<WebSocketOpenInfo>): void
```

Cancels listening for the open info events of a WebSocket connection.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'openInfo' | Yes | event indicating that the open info of a WebSocket connection is returned. |
| callback | AsyncCallback&lt;WebSocketOpenInfo&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
let callback1 = (err: BusinessError, value: webSocket.WebSocketOpenInfo) => {
  if (value?.protocol != undefined) {
    console.info(`on openInfo exist protocol: status: ${value.status}, message: ${value.message}, protocol: ${value.protocol}`);
  } else {
    console.info(`on openInfo , status: ${value.status}, message: ${value.message}, protocol: ${value.protocol}`);
  }
}
ws.on('openInfo', callback1);
// You can pass the callback used in on to unsubscribe from a specific subscription, or omit the callback to clear all subscriptions.
ws.off('openInfo', callback1);

```

## off('message')

```TypeScript
off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void
```

Cancels listening for the message events of a WebSocket connection. data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | event indicating that a message has been received from the server. |
| callback | AsyncCallback&lt;string \| ArrayBuffer&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('message');

```

## off('close')

```TypeScript
off(type: 'close', callback?: AsyncCallback<CloseResult>): void
```

Cancels listening for the close events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | event indicating that a WebSocket connection has been closed. |
| callback | AsyncCallback&lt;CloseResult&gt; | No | the callback used to return the result.<br>close indicates the close error code and reason indicates the error code description. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('close');

```

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for the error events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | event indicating the WebSocket connection has encountered an error. |
| callback | ErrorCallback | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('error');

```

## off('dataEnd')

```TypeScript
off(type: 'dataEnd', callback?: Callback<void>): void
```

Cancels listening for receiving data ends events of a WebSocket connection.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataEnd' | Yes | event indicating the WebSocket connection has received data ends. |
| callback | Callback&lt;void&gt; | No |  |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('dataEnd');

```

## off('headerReceive')

```TypeScript
off(type: 'headerReceive', callback?: Callback<ResponseHeaders>): void
```

Unregisters the observer for HTTP Response Header events.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | Indicates Event name. |
| callback | Callback&lt;ResponseHeaders&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('headerReceive');

```

## on('open')

```TypeScript
on(type: 'open', callback: AsyncCallback<Object>): void
```

Enables listening for the open events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'open' | Yes | event indicating that a WebSocket connection has been opened. |
| callback | AsyncCallback&lt;Object&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let ws= webSocket.createWebSocket();
class OutValue {
  status: number = 0
  message: string = ""
}
ws.on('open', (err: BusinessError, value: Object) => {
  console.info("on open, status:" + (value as OutValue).status + ", message:" + (value as OutValue).message)
});

```

## on('openInfo')

```TypeScript
on(type: 'openInfo', callback: AsyncCallback<WebSocketOpenInfo>): void
```

Enables listening for the open info events of a WebSocket connection.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'openInfo' | Yes | event indicating that the open info of a WebSocket connection is returned. |
| callback | AsyncCallback&lt;WebSocketOpenInfo&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
ws.on('openInfo', (err: BusinessError, value: webSocket.WebSocketOpenInfo) => {
  if (value?.protocol != undefined) {
    console.info(`on openInfo exist protocol: status: ${value.status}, message: ${value.message}, protocol: ${value.protocol}`);
  } else {
    console.info(`on openInfo , status: ${value.status}, message: ${value.message}, protocol: ${value.protocol}`);
  }
});

```

## on('message')

```TypeScript
on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void
```

Enables listening for the message events of a WebSocket connection. data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | event indicating that a message has been received from the server. |
| callback | AsyncCallback&lt;string \| ArrayBuffer&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
ws.on('message', (err: BusinessError<void>, value: string | ArrayBuffer) => {
  console.info("on message, message:" + value)
});

```

## on('close')

```TypeScript
on(type: 'close', callback: AsyncCallback<CloseResult>): void
```

Enables listening for the close events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | event indicating that a WebSocket connection has been closed. |
| callback | AsyncCallback&lt;CloseResult&gt; | Yes | the callback used to return the result.<br>close indicates the close error code and reason indicates the error code description. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
ws.on('close', (err: BusinessError, value: webSocket.CloseResult) => {
  console.info("on close, code is " + value.code + ", reason is " + value.reason)
});

```

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Enables listening for the error events of a WebSocket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | event indicating the WebSocket connection has encountered an error. |
| callback | ErrorCallback | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
ws.on('error', (err: BusinessError) => {
  console.error(`on error. Code: ${err.code}, message: ${err.message}`)
});

```

## on('dataEnd')

```TypeScript
on(type: 'dataEnd', callback: Callback<void>): void
```

Enables listening for receiving data ends events of a WebSocket connection.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataEnd' | Yes | event indicating the WebSocket connection has received data ends. |
| callback | Callback&lt;void&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.on('dataEnd', () => {
  console.info("on dataEnd")
});

```

## on('headerReceive')

```TypeScript
on(type: 'headerReceive', callback: Callback<ResponseHeaders>): void
```

Registers an observer for HTTP Response Header events.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'headerReceive' | Yes | Indicates Event name. |
| callback | Callback&lt;ResponseHeaders&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.on('headerReceive', (data) => {
  console.info("on headerReceive " + JSON.stringify(data))
});

```

## send

```TypeScript
send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void
```

Sends data through a WebSocket connection.

**Since:** 11

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| ArrayBuffer | Yes | Data to send. It can be a string(API 6) or an ArrayBuffer(API 8). |
| callback | AsyncCallback&lt;boolean&gt; | Yes | the callback of send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
let url = "ws://"
class OutValue {
  status: number = 0
  message: string = ""
}
ws.connect(url, (err: BusinessError, value: boolean) => {
    if (!err) {
      console.info("connect success")
    } else {
      console.error(`connect fail. Code: ${err.code}, message: ${err.message}`)
    }
});
ws.on('open', (err: BusinessError, value: Object) => {
  console.info("on open, status:" + (value as OutValue).status + ", message:" + (value as OutValue).message)
    ws.send("Hello, server!", (err: BusinessError, value: boolean) => {
    if (!err) {
      console.info("send success")
    } else {
      console.error(`send fail. Code: ${err.code}, message: ${err.message}`)
    }
  });
});

```

## send

```TypeScript
send(data: string | ArrayBuffer): Promise<boolean>
```

Sends data through a WebSocket connection.

**Since:** 11

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| ArrayBuffer | Yes | Data to send. It can be a string(API 6) or an ArrayBuffer(API 8). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ws = webSocket.createWebSocket();
let url = "ws://"
class OutValue {
  status: number = 0
  message: string = ""
}
ws.connect(url, (err: BusinessError, value: boolean) => {
    if (!err) {
      console.info("connect success")
    } else {
      console.error("connect fail. Code: ${err.code}, message: ${err.message}")
    }
});

ws.on('open', (err: BusinessError, value: Object) => {
  console.info("on open, status:" + (value as OutValue).status + ", message:" + (value as OutValue).message)
  let promise = ws.send("Hello, server!");
  promise.then((value: boolean) => {
    console.info("send success")
  }).catch((err:string) => {
    console.error("send fail, error:" + JSON.stringify(err))
  });
});

```

