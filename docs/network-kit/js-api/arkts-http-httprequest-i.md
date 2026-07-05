# HttpRequest

<p>Defines an HTTP request task. Before invoking APIs provided by HttpRequest, you must call createHttp() to create an HttpRequestTask object.</p>

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## destroy

```TypeScript
destroy(): void
```

Destroys an HTTP request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
let httpRequest = http.createHttp();

httpRequest.destroy();


import { http } from '@kit.NetworkKit';
let httpRequest = http.createHttp();

httpRequest.destroy();

```

## enableAutoCookie

```TypeScript
enableAutoCookie(enable: boolean): void
```

Sets whether to automatically reply with cookies.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | whether to automatically reply with cookies, default is false. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
let url = "EXAMPLE_URL"; // Access URL. You need to define the URL based on the actual scenario.

// Enable automatic cookie sharing.
httpRequest.enableAutoCookie(true);

httpRequest.request(url, {
  method: http.RequestMethod.GET
}).then((data: http.HttpResponse) => {
  console.info('first request code:' + data.responseCode);
  // Subsequent requests will automatically reuse the cookies saved by this instance.
  return httpRequest.request(url, { method: http.RequestMethod.GET });
}).then((data: http.HttpResponse) => {
  console.info('second request code:' + data.responseCode);
}).catch((err: Error) => {
  console.error('error:' + JSON.stringify(err));
}).finally(() => {
  httpRequest.destroy();
});


import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
let url = "EXAMPLE_URL"; // Access URL. You need to define the URL based on the actual scenario.

// Enable automatic cookie sharing.
httpRequest.enableAutoCookie(true);

httpRequest.request(url, {
  method: http.RequestMethod.GET
}).then((data: http.HttpResponse) => {
  console.info('first request code:' + data.responseCode);
  // Subsequent requests will automatically reuse the cookies saved by this instance.
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

**Since:** 6

**Deprecated since:** 8

**Substitute:** off_headersReceive

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headerReceive" | Yes | Indicates Event name. |
| callback | AsyncCallback&lt;Object> | No |  |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.off("headerReceive");


import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.off("headerReceive");

```

## off("headersReceive")

```TypeScript
off(type: "headersReceive", callback?: Callback<Object>): void
```

Unregisters the observer for HTTP Response Header events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object> | No |  |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");


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

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer> | No |  |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");


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

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataEnd" | Yes | Indicates Event name. |
| callback | Callback&lt;void> | No |  |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");


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

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo> | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");


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

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo> | No |  |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");


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

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

## offDataReceive

```TypeScript
offDataReceive(callback?: Callback<ArrayBuffer>): void
```

Unregisters an observer for receiving HTTP Response data events continuously.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | No |  |

## offDataReceiveProgress

```TypeScript
offDataReceiveProgress(callback?: Callback<DataReceiveProgressInfo>): void
```

Unregisters an observer for progress of receiving HTTP Response data events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DataReceiveProgressInfo> | No |  |

## offDataSendProgress

```TypeScript
offDataSendProgress(callback?: Callback<DataSendProgressInfo>): void
```

Unregisters an observer for progress of sendSize HTTP Response data events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DataSendProgressInfo> | No |  |

## offHeadersReceive

```TypeScript
offHeadersReceive(callback?: Callback<Record<string, string>>): void
```

Unregisters the observer for HTTP Response Header events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | No |  |

## on("headerReceive")

```TypeScript
on(type: "headerReceive", callback: AsyncCallback<Object>): void
```

Registers an observer for HTTP Response Header events.

**Since:** 6

**Deprecated since:** 8

**Substitute:** on_headersReceive

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headerReceive" | Yes | Indicates Event name. |
| callback | AsyncCallback&lt;Object> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.on("headerReceive", (data: BusinessError) => {
  console.error("error:" + JSON.stringify(data));
});


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

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");


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

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");


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

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataEnd" | Yes | Indicates Event name. |
| callback | Callback&lt;void> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");


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

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");


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

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo> | Yes | the callback of on. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");


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

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.once("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});


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

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | Yes | the callback used to return the result. |

## onDataEnd

```TypeScript
onDataEnd(callback: Callback<void>): void
```

Registers an observer for receiving HTTP Response data ends events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | the callback used to return the result. |

## onDataReceive

```TypeScript
onDataReceive(callback: Callback<ArrayBuffer>): void
```

Registers an observer for receiving HTTP Response data events continuously.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | Yes | the callback used to return the result. |

## onDataReceiveProgress

```TypeScript
onDataReceiveProgress(callback: Callback<DataReceiveProgressInfo>): void
```

Registers an observer for progress of receiving HTTP Response data events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DataReceiveProgressInfo> | Yes | the callback used to return the result. |

## onDataSendProgress

```TypeScript
onDataSendProgress(callback: Callback<DataSendProgressInfo>): void
```

Registers an observer for progress of sendSize HTTP Response data events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DataSendProgressInfo> | Yes | the callback of on. |

## onHeadersReceive

```TypeScript
onHeadersReceive(callback: Callback<Record<string, string>>): void
```

Registers an observer for HTTP Response Header events.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, string>> | Yes | the callback used to return the result. |

## request

```TypeScript
request(url: string, callback: AsyncCallback<HttpResponse>): void
```

Initiates an HTTP request to a given URL.

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;HttpResponse> | Yes | the callback of request. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL", (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
  } else {
    console.error('error:' + JSON.stringify(err));
  }
});


import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.request("EXAMPLE_URL", (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
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

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | Yes | Optional parameters {@link HttpRequestOptions}. |
| callback | AsyncCallback&lt;HttpResponse> | Yes | the callback of request. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
  // You are advised to use the body field to transfer the request body content. The specific format needs to be negotiated with the server.
  body: 'data to send', // Supported since API version 26.
  // You are advised to use the queryParams field to transfer URL parameters. The value can be a string or an object.
  queryParams: { scene: 'request-demo', page: 1 }, // Supported since API version 26.
    expectDataType: http.HttpDataType.STRING, // Optional. This parameter specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
};

httpRequest.request("EXAMPLE_URL", options, (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
  } else {
    console.error('error:' + JSON.stringify(err));
  }
});


import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
  // You are advised to use the body field to transfer the request body content. The specific format needs to be negotiated with the server.
  body: 'data to send', // Supported since API version 26.
  // You are advised to use the queryParams field to transfer URL parameters. The value can be a string or an object.
  queryParams: { scene: 'request-demo', page: 1 }, // Supported since API version 26.
    expectDataType: http.HttpDataType.STRING, // Optional. This parameter specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
};

httpRequest.request("EXAMPLE_URL", options, (err: Error, data: http.HttpResponse) => {
  if (!err) {
    console.info('Result:' + data.result);
    console.info('code:' + data.responseCode);
    console.info('type:' + JSON.stringify(data.resultType));
    console.info('header:' + JSON.stringify(data.header));
    console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
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

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpResponse> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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
  console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
  console.info('header.content-Type:' + data.header);
  console.info('header.Status-Line:' + data.header);
}).catch((err:Error) => {
  console.error('error:' + JSON.stringify(err));
});


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
  console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
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

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;int> | Yes | Returns the callback of requestInStream {@link ResponseCode},  should use on_headersReceive and on_dataReceive to get http response. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | Yes | Optional parameters {@link HttpRequestOptions}. |
| callback | AsyncCallback&lt;int> | Yes | the callback of requestInStream. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
    // This field is used to transfer the request body when a POST request is used. Its format needs to be negotiated with the server.
    extraData: 'data to send', // Since API version 26, you are advised to use the body field to transfer the request body content. The specific format needs to be negotiated with the server.
    expectDataType: http.HttpDataType.STRING, // Optional. This field specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
};
httpRequest.requestInStream("EXAMPLE_URL", options, (err: BusinessError<void> , data: number) => {
  if (!err) {
    console.info("requestInStream OK! ResponseCode is " + JSON.stringify(data));
  } else {
    console.error("requestInStream ERROR : err = " + JSON.stringify(err));
  }
})


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
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
    // This field is used to transfer the request body when a POST request is used. Its format needs to be negotiated with the server.
    extraData: 'data to send', // Since API version 26, you are advised to use the body field to transfer the request body content. The specific format needs to be negotiated with the server.
    expectDataType: http.HttpDataType.STRING, // Optional. This field specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
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

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| HttpResponse | The returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
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

**Example**

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
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
    // This field is used to transfer the request body when a POST request is used. Its format needs to be negotiated with the server.
    extraData: 'data to send',
    expectDataType: http.HttpDataType.STRING, // Optional. This field specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
};
let url = "EXAMPLE_URL"; // Access URL.
try {
  let data: http.HttpResponse = httpRequest.requestSync(url, options);
  console.info('Result:' + data.result);
  console.info('code:' + data.responseCode);
  console.info('type:' + JSON.stringify(data.resultType));
  console.info('header:' + JSON.stringify(data.header));
  console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
} catch (err) {
  console.error('error:' + JSON.stringify(err));
}
httpRequest.destroy();


import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;

  constructor(contentType: string) {
    this.contentType = contentType;
  }
}

let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
    method: http.RequestMethod.POST, // Optional. The default value is http.RequestMethod.GET.
    // This field is used to transfer the request body when a POST request is used. Its format needs to be negotiated with the server.
    extraData: 'data to send',
    expectDataType: http.HttpDataType.STRING, // Optional. This field specifies the type of the return data.
    usingCache: true, // Optional. The default value is true.
    priority: 1, // Optional. The default value is 1.
    // You can add the header field based on service requirements.
    header: new Header('application/json'),
    readTimeout: 60000, // Optional. The default value is 60000, in ms.
    connectTimeout: 60000 // Optional. The default value is 60000, in ms.
    usingProtocol: http.HttpProtocol.HTTP1_1, // Optional. The default protocol type is automatically specified by the system.
    usingProxy: false, // Optional. The system proxy is used by default. If this parameter is set to false, no proxy is used. This field is supported since API version 10.
};
let url = "EXAMPLE_URL"; // Access URL.
try {
  let data: http.HttpResponse = httpRequest.requestSync(url, options);
  console.info('Result:' + data.result);
  console.info('code:' + data.responseCode);
  console.info('type:' + JSON.stringify(data.resultType));
  console.info('header:' + JSON.stringify(data.header));
  console.info('cookies:' + data.cookies); // Cookies are supported since API version 8.
} catch (err) {
  console.error('error:' + JSON.stringify(err));
}
httpRequest.destroy();

```

