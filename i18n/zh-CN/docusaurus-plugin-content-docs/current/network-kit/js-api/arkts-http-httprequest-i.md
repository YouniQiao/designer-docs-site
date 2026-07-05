# HttpRequest

<p>Defines an HTTP request task. Before invoking APIs provided by HttpRequest, you must call createHttp() to create an HttpRequestTask object.</p>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## destroy

```TypeScript
destroy(): void
```

Destroys an HTTP request.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';
let httpRequest = http.createHttp();

httpRequest.destroy();

```

## enableAutoCookie

```TypeScript
enableAutoCookie(enable: boolean): void
```

Sets whether to automatically reply with cookies.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | whether to automatically reply with cookies, default is false. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
let url = "EXAMPLE_URL"; // 访问url，需要开发者根据实际场景自行定义。

// 开启自动Cookie共享。
httpRequest.enableAutoCookie(true);

httpRequest.request(url, {
  method: http.RequestMethod.GET
}).then((data: http.HttpResponse) => {
  console.info('first request code:' + data.responseCode);
  // 后续请求将自动复用该实例保存的Cookie。
  return httpRequest.request(url, { method: http.RequestMethod.GET });
}).then((data: http.HttpResponse) => {
  console.info('second request code:' + data.responseCode);
}).catch((err: Error) => {
  console.error('error:' + JSON.stringify(err));
}).finally(() => {
  httpRequest.destroy();
});

```

## off("headerReceive")

```TypeScript
off(type: "headerReceive", callback?: AsyncCallback<Object>): void
```

Unregisters the observer for HTTP Response Header events.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** off_headersReceive

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "headerReceive" | 是 | Indicates Event name. |
| callback | AsyncCallback&lt;Object> | 否 |  |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.off("headerReceive");

```

## off("headersReceive")

```TypeScript
off(type: "headersReceive", callback?: Callback<Object>): void
```

Unregisters the observer for HTTP Response Header events.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "headersReceive" | 是 | Indicates Event name. |
| callback | Callback&lt;Object> | 否 |  |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");

```

## off("dataReceive")

```TypeScript
off(type: "dataReceive", callback?: Callback<ArrayBuffer>): void
```

Unregisters an observer for receiving HTTP Response data events continuously.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "dataReceive" | 是 | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer> | 否 |  |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");

```

## off("dataEnd")

```TypeScript
off(type: "dataEnd", callback?: Callback<void>): void
```

Unregisters an observer for receiving HTTP Response data ends events.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "dataEnd" | 是 | Indicates Event name. |
| callback | Callback&lt;void> | 否 |  |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");

```

## off('dataReceiveProgress')

```TypeScript
off(type: 'dataReceiveProgress', callback?: Callback<DataReceiveProgressInfo>): void
```

Unregisters an observer for progress of receiving HTTP Response data events.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | 是 | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo> | 否 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");

```

## off('dataSendProgress')

```TypeScript
off(type: 'dataSendProgress', callback?: Callback<DataSendProgressInfo>): void
```

Unregisters an observer for progress of sendSize HTTP Response data events.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | 是 | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo> | 否 |  |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");

```

## offDataEnd

```TypeScript
offDataEnd(callback?: Callback<void>): void
```

Unregisters an observer for receiving HTTP Response data ends events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offDataReceive

```TypeScript
offDataReceive(callback?: Callback<ArrayBuffer>): void
```

Unregisters an observer for receiving HTTP Response data events continuously.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | 否 |  |

## offDataReceiveProgress

```TypeScript
offDataReceiveProgress(callback?: Callback<DataReceiveProgressInfo>): void
```

Unregisters an observer for progress of receiving HTTP Response data events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DataReceiveProgressInfo> | 否 |  |

## offDataSendProgress

```TypeScript
offDataSendProgress(callback?: Callback<DataSendProgressInfo>): void
```

Unregisters an observer for progress of sendSize HTTP Response data events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DataSendProgressInfo> | 否 |  |

## offHeadersReceive

```TypeScript
offHeadersReceive(callback?: Callback<Record<string, string>>): void
```

Unregisters the observer for HTTP Response Header events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | 否 |  |

## on("headerReceive")

```TypeScript
on(type: "headerReceive", callback: AsyncCallback<Object>): void
```

Registers an observer for HTTP Response Header events.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** on_headersReceive

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "headerReceive" | 是 | Indicates Event name. |
| callback | AsyncCallback&lt;Object> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.on("headerReceive", (data: BusinessError) => {
  console.error("error:" + JSON.stringify(data));
});

```

## on("headersReceive")

```TypeScript
on(type: "headersReceive", callback: Callback<Object>): void
```

Registers an observer for HTTP Response Header events.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "headersReceive" | 是 | Indicates Event name. |
| callback | Callback&lt;Object> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");

```

## on("dataReceive")

```TypeScript
on(type: "dataReceive", callback: Callback<ArrayBuffer>): void
```

Registers an observer for receiving HTTP Response data events continuously.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "dataReceive" | 是 | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");

```

## on("dataEnd")

```TypeScript
on(type: "dataEnd", callback: Callback<void>): void
```

Registers an observer for receiving HTTP Response data ends events.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "dataEnd" | 是 | Indicates Event name. |
| callback | Callback&lt;void> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");

```

## on('dataReceiveProgress')

```TypeScript
on(type: 'dataReceiveProgress', callback: Callback<DataReceiveProgressInfo>): void
```

Registers an observer for progress of receiving HTTP Response data events.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | 是 | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");

```

## on('dataSendProgress')

```TypeScript
on(type: 'dataSendProgress', callback: Callback<DataSendProgressInfo>): void
```

Registers an observer for progress of sendSize HTTP Response data events.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | 是 | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo> | 是 | the callback of on. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");

```

## once("headersReceive")

```TypeScript
once(type: "headersReceive", callback: Callback<Object>): void
```

Registers a one-time observer for HTTP Response Header events.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | "headersReceive" | 是 | Indicates Event name. |
| callback | Callback&lt;Object> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.once("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});

```

## onceHeadersReceive

```TypeScript
onceHeadersReceive(callback: Callback<Record<string, string>>): void
```

Registers a one-time observer for HTTP Response Header events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | 是 | the callback used to return the result. |

## onDataEnd

```TypeScript
onDataEnd(callback: Callback<void>): void
```

Registers an observer for receiving HTTP Response data ends events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | the callback used to return the result. |

## onDataReceive

```TypeScript
onDataReceive(callback: Callback<ArrayBuffer>): void
```

Registers an observer for receiving HTTP Response data events continuously.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | 是 | the callback used to return the result. |

## onDataReceiveProgress

```TypeScript
onDataReceiveProgress(callback: Callback<DataReceiveProgressInfo>): void
```

Registers an observer for progress of receiving HTTP Response data events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DataReceiveProgressInfo> | 是 | the callback used to return the result. |

## onDataSendProgress

```TypeScript
onDataSendProgress(callback: Callback<DataSendProgressInfo>): void
```

Registers an observer for progress of sendSize HTTP Response data events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DataSendProgressInfo> | 是 | the callback of on. |

## onHeadersReceive

```TypeScript
onHeadersReceive(callback: Callback<Record<string, string>>): void
```

Registers an observer for HTTP Response Header events.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | 是 | the callback used to return the result. |

## request

```TypeScript
request(url: string, callback: AsyncCallback<HttpResponse>): void
```

Initiates an HTTP request to a given URL.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;HttpResponse> | 是 | the callback of request. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL", (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。
  } else {
    console.error('error:' + JSON.stringify(err));
  }
});

```

## request

```TypeScript
request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void
```

Initiates an HTTP request to a given URL.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| options | HttpRequestOptions | 是 | Optional parameters {@link HttpRequestOptions}. |
| callback | AsyncCallback&lt;HttpResponse> | 是 | the callback of request. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。
  // 推荐使用body字段传递请求体内容，具体格式与服务端协商确定。
  body: 'data to send', // 自API 26开始支持。
  // 推荐使用queryParams字段传递URL参数。可传string或对象。
  queryParams: { scene: 'request-demo', page: 1 }, // 自API 26开始支持。
    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。
    usingCache: true, // 可选，默认为true。
    priority: 1, // 可选，默认为1。
    // 开发者根据自身业务需要添加header字段。
    header: new Header('application/json'),
    readTimeout: 60000, // 可选，默认为60000ms。
    connectTimeout: 60000, // 可选，默认为60000ms。
    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。
    usingProxy: false, // 可选，默认使用系统代理，设置为false不使用代理，自API 10开始支持该属性。
};

httpRequest.request("EXAMPLE_URL", options, (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。
  } else {
    console.error('error:' + JSON.stringify(err));
  }
});

```

## request

```TypeScript
request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>
```

Initiates an HTTP request to a given URL.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| options | HttpRequestOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HttpResponse> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let promise = httpRequest.request("EXAMPLE_URL", {
  method: http.RequestMethod.GET,
  connectTimeout: 60000,
  readTimeout: 60000,
  header: new Header('application/json')
});
promise.then((data:http.HttpResponse) => {
  console.info('Result:' + data.result);
  console.info('code:' + data.responseCode);
  console.info('type:' + JSON.stringify(data.resultType));
  console.info('header:' + JSON.stringify(data.header));
  console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。
  console.info('header.content-Type:' + data.header);
  console.info('header.Status-Line:' + data.header);
}).catch((err:Error) => {
  console.error('error:' + JSON.stringify(err));
});

```

## requestInStream

```TypeScript
requestInStream(url: string, callback: AsyncCallback<int>): void
```

Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;int> | 是 | Returns the callback of requestInStream {@link ResponseCode},  should use on_headersReceive and on_dataReceive to get http response. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.requestInStream("EXAMPLE_URL", (err: BusinessError, data: number) => {
  if (!err) {
    console.info("requestInStream OK! ResponseCode is " + JSON.stringify(data));
  } else {
    console.error("requestInStream ERROR : err = " + JSON.stringify(err));
  }
})

```

## requestInStream

```TypeScript
requestInStream(url: string, options: HttpRequestOptions, callback: AsyncCallback<int>): void
```

Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| options | HttpRequestOptions | 是 | Optional parameters {@link HttpRequestOptions}. |
| callback | AsyncCallback&lt;int> | 是 | the callback of requestInStream. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。
    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。
    extraData: 'data to send', // 自API version 26开始，推荐使用body字段传递请求体内容，具体格式与服务端协商确定。
    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。
    usingCache: true, // 可选，默认为true。
    priority: 1, // 可选，默认为1。
    // 开发者根据自身业务需要添加header字段。
    header: new Header('application/json'),
    readTimeout: 60000, // 可选，默认为60000ms。
    connectTimeout: 60000, // 可选，默认为60000ms。
    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。
    usingProxy: false, // 可选，默认使用系统代理，设置为false不使用代理，自API 10开始支持该属性。
};
httpRequest.requestInStream("EXAMPLE_URL", options, (err: BusinessError<void> , data: number) => {
  if (!err) {
    console.info("requestInStream OK! ResponseCode is " + JSON.stringify(data));
  } else {
    console.error("requestInStream ERROR : err = " + JSON.stringify(err));
  }
})

```

## requestInStream

```TypeScript
requestInStream(url: string, options?: HttpRequestOptions): Promise<int>
```

Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.

**起始版本：** 18

**需要权限：** 

 ohos.permission.INTERNET

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| options | HttpRequestOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let promise = httpRequest.requestInStream("EXAMPLE_URL", {
  method: http.RequestMethod.GET,
  connectTimeout: 60000,
  readTimeout: 60000,
  header: new Header('application/json')
});
promise.then((data: number) => {
  console.info("requestInStream OK!" + data);
}).catch((err: Error) => {
  console.error("requestInStream ERROR : err = " + JSON.stringify(err));
});

```

## requestSync

```TypeScript
requestSync(url: string, options?: HttpRequestOptions): HttpResponse
```

Initiates an HTTP request to a given URL.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.INTERNET

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | URL for initiating an HTTP request. |
| options | HttpRequestOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HttpResponse | The returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2300001 | Unsupported protocol. |
| 2300003 | Invalid URL format or missing URL. |
| 2300005 | Failed to resolve the proxy name. |
| 2300006 | Failed to resolve the host name. |
| 2300007 | Failed to connect to the server. |
| 2300008 | Invalid server response. |
| 2300009 | Access to the remote resource denied. |
| 2300016 | Error in the HTTP2 framing layer. |
| 2300018 | Transferred a partial file. |
| 2300023 | Failed to write the received data to the disk or application. |
| 2300025 | Upload failed. |
| 2300026 | Failed to open or read local data from the file or application. |
| 2300027 | Out of memory. |
| 2300028 | Operation timeout. |
| 2300047 | The number of redirections reaches the maximum allowed. |
| 2300052 | The server returned nothing (no header or data). |
| 2300055 | Failed to send data to the peer. |
| 2300056 | Failed to receive data from the peer. |
| 2300058 | Local SSL certificate error. |
| 2300059 | The specified SSL cipher cannot be used. |
| 2300060 | Invalid SSL peer certificate or SSH remote key. |
| 2300061 | Invalid HTTP encoding format. |
| 2300063 | Maximum file size exceeded. |
| 2300070 | Remote disk full. |
| 2300073 | Remote file already exists. |
| 2300077 | The SSL CA certificate does not exist or is inaccessible. |
| 2300078 | Remote file not found. |
| 2300094 | Authentication error. |
| 2300997 | Cleartext traffic not permitted. |
| 2300998 | It is not allowed to access this domain. |
| 2300999 | Internal error. |

**示例：**

```TypeScript
import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。
    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。
    extraData: 'data to send',
    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。
    usingCache: true, // 可选，默认为true。
    priority: 1, // 可选，默认为1。
    // 开发者根据自身业务需要添加header字段。
    header: new Header('application/json'),
    readTimeout: 60000, // 可选，默认为60000ms。
    connectTimeout: 60000, // 可选，默认为60000ms。
    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。
    usingProxy: false, // 可选，默认使用系统代理，设置为false不使用代理，自API 10开始支持该属性。
};
let url = "EXAMPLE_URL"; // 访问url
try {
  let data: http.HttpResponse = httpRequest.requestSync(url, options);
  console.info('Result:' + data.result);
  console.info('code:' + data.responseCode);
  console.info('type:' + JSON.stringify(data.resultType));
  console.info('header:' + JSON.stringify(data.header));
  console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。
} catch (err) {
  console.error('error:' + JSON.stringify(err));
}
httpRequest.destroy();

```

