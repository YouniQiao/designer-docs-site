# WebSocket

<p>Defines a WebSocket object. Before invoking WebSocket APIs, you need to call webSocket.createWebSocket to create a WebSocket object.</p>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## close

```TypeScript
close(callback: AsyncCallback<boolean>): void
```

Closes a WebSocket connection.

**起始版本：** 11

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of close. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | WebSocketCloseOptions | 是 | Optional parameters {@link WebSocketCloseOptions}. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of close. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | WebSocketCloseOptions | 否 | Optional parameters {@link WebSocketCloseOptions}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |

**示例：**

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

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for establishing a WebSocket connection. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of connect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2302001 | Websocket url error. |
| 2302002 | Websocket certificate file does not exist. |
| 2302003 | Websocket connection already exists. |
| 2302998 | It is not allowed to access this domain. |
| 2302999 | Internal error. |

**示例：**

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

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for establishing a WebSocket connection. |
| options | WebSocketRequestOptions | 是 | Optional parameters {@link WebSocketRequestOptions}. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of connect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2302001 | Websocket url error. |
| 2302002 | Websocket certificate file does not exist. |
| 2302003 | Websocket connection already exists. |
| 2302998 | It is not allowed to access this domain. |
| 2302999 | Internal error. |

**示例：**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 示例1：
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

// 示例2：
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

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for establishing a WebSocket connection. |
| options | WebSocketRequestOptions | 否 | Optional parameters {@link WebSocketRequestOptions}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2302001 | Websocket url error. |
| 2302002 | Websocket certificate file does not exist. |
| 2302003 | Websocket connection already exists. |
| 2302998 | It is not allowed to access this domain. |
| 2302999 | Internal error. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'open' | 是 | event indicating that a WebSocket connection has been opened. |
| callback | AsyncCallback&lt;Object> | 否 | the callback used to return the result. |

**示例：**

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
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
ws.off('open', callback1);

```

## off('openInfo')

```TypeScript
off(type: 'openInfo', callback?: AsyncCallback<WebSocketOpenInfo>): void
```

Cancels listening for the open info events of a WebSocket connection.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'openInfo' | 是 | event indicating that the open info of a WebSocket connection is returned. |
| callback | AsyncCallback&lt;WebSocketOpenInfo> | 否 |  |

**示例：**

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
// 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
ws.off('openInfo', callback1);

```

## off('message')

```TypeScript
off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void
```

Cancels listening for the message events of a WebSocket connection. data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'message' | 是 | event indicating that a message has been received from the server. |
| callback | AsyncCallback&lt;string \| ArrayBuffer> | 否 | the callback used to return the result. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'close' | 是 | event indicating that a WebSocket connection has been closed. |
| callback | AsyncCallback&lt;CloseResult> | 否 | the callback used to return the result.  close indicates the close error code and reason indicates the error code description. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | event indicating the WebSocket connection has encountered an error. |
| callback | ErrorCallback | 否 | the callback used to return the result. |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataEnd' | 是 | event indicating the WebSocket connection has received data ends. |
| callback | Callback&lt;void> | 否 |  |

**示例：**

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

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headerReceive' | 是 | Indicates Event name. |
| callback | Callback&lt;ResponseHeaders> | 否 |  |

**示例：**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.off('headerReceive');

```

## offDataEnd

```TypeScript
offDataEnd(callback?: Callback<void>): void
```

Cancels listening for receiving data ends events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offHeaderReceive

```TypeScript
offHeaderReceive(callback?: Callback<ResponseHeaders>): void
```

Unregisters the observer for HTTP Response Header events.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ResponseHeaders> | 否 |  |

## offMessage

```TypeScript
offMessage(callback?: AsyncCallback<string | ArrayBuffer>): void
```

Cancels listening for the message events of a WebSocket connection. data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string \| ArrayBuffer> | 否 | the callback used to return the result. |

## offOpen

```TypeScript
offOpen(callback?: Callback<OpenResult>): void
```

Cancels listening for the open events of a WebSocket connection.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OpenResult> | 否 |  |

## offOpenInfo

```TypeScript
offOpenInfo(callback?: Callback<WebSocketOpenInfo>): void
```

Cancels listening for the open info events of a WebSocket connection.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WebSocketOpenInfo> | 否 |  |

## offWebSocketClose

```TypeScript
offWebSocketClose(callback?: AsyncCallback<CloseResult>): void
```

Cancels listening for the close events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CloseResult> | 否 |  |

## offWebSocketError

```TypeScript
offWebSocketError(callback?: ErrorCallback): void
```

Cancels listening for the error events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 | the callback used to return the result. |

## on('open')

```TypeScript
on(type: 'open', callback: AsyncCallback<Object>): void
```

Enables listening for the open events of a WebSocket connection.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'open' | 是 | event indicating that a WebSocket connection has been opened. |
| callback | AsyncCallback&lt;Object> | 是 | the callback used to return the result. |

**示例：**

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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'openInfo' | 是 | event indicating that the open info of a WebSocket connection is returned. |
| callback | AsyncCallback&lt;WebSocketOpenInfo> | 是 | the callback used to return the result. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'message' | 是 | event indicating that a message has been received from the server. |
| callback | AsyncCallback&lt;string \| ArrayBuffer> | 是 | the callback used to return the result. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'close' | 是 | event indicating that a WebSocket connection has been closed. |
| callback | AsyncCallback&lt;CloseResult> | 是 | the callback used to return the result.  close indicates the close error code and reason indicates the error code description. |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | event indicating the WebSocket connection has encountered an error. |
| callback | ErrorCallback | 是 | the callback used to return the result. |

**示例：**

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

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataEnd' | 是 | event indicating the WebSocket connection has received data ends. |
| callback | Callback&lt;void> | 是 | the callback used to return the result. |

**示例：**

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

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'headerReceive' | 是 | Indicates Event name. |
| callback | Callback&lt;ResponseHeaders> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { webSocket } from '@kit.NetworkKit';

let ws = webSocket.createWebSocket();
ws.on('headerReceive', (data) => {
  console.info("on headerReceive " + JSON.stringify(data))
});

```

## onDataEnd

```TypeScript
onDataEnd(callback: Callback<void>): void
```

Enables listening for receiving data ends events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback used to return the result. |

## onHeaderReceive

```TypeScript
onHeaderReceive(callback: Callback<ResponseHeaders>): void
```

Registers an observer for HTTP Response Header events.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ResponseHeaders> | 是 | the callback used to return the result. |

## onMessage

```TypeScript
onMessage(callback: AsyncCallback<string | ArrayBuffer>): void
```

Enables listening for the message events of a WebSocket connection. data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string \| ArrayBuffer> | 是 | the callback used to return the result. |

## onOpen

```TypeScript
onOpen(callback: Callback<OpenResult>): void
```

Enables listening for the open events of a WebSocket connection.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OpenResult> | 是 | the callback used to return the result. |

## onOpenInfo

```TypeScript
onOpenInfo(callback: Callback<WebSocketOpenInfo>): void
```

Enables listening for the open info events of a WebSocket connection.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WebSocketOpenInfo> | 是 | the callback used to return the result. |

## onWebSocketClose

```TypeScript
onWebSocketClose(callback: AsyncCallback<CloseResult>): void
```

Enables listening for the close events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CloseResult> | 是 | the callback used to return the result.  close indicates the close error code and reason indicates the error code description. |

## onWebSocketError

```TypeScript
onWebSocketError(callback: ErrorCallback): void
```

Enables listening for the error events of a WebSocket connection.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | the callback used to return the result. |

## send

```TypeScript
send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void
```

Sends data through a WebSocket connection.

**起始版本：** 11

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string \| ArrayBuffer | 是 | Data to send. It can be a string(API 6) or an ArrayBuffer(API 8). |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of send. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string \| ArrayBuffer | 是 | Data to send. It can be a string(API 6) or an ArrayBuffer(API 8). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |

**示例：**

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

