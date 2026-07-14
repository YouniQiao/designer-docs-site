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

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
let httpRequest = http.createHttp();

httpRequest.destroy();

```

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

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

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

```

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

```

## off("headerReceive")

```TypeScript
off(type: "headerReceive", callback?: AsyncCallback<Object>): void
```

Unregisters the observer for HTTP Response Header events.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [off_headersReceive](arkts-network-httprequest-i.md#off-2)

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headerReceive" | Yes | Indicates Event name. |
| callback | AsyncCallback&lt;Object&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.off("headerReceive");

```

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

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");

```

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");

```

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataEnd" | Yes | Indicates Event name. |
| callback | Callback&lt;void&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");

```

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

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");

```

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

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo&gt; | No | the callback of off. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");

```

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");

```

## on("headerReceive")

```TypeScript
on(type: "headerReceive", callback: AsyncCallback<Object>): void
```

Registers an observer for HTTP Response Header events.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** [on_headersReceive](arkts-network-httprequest-i.md#on-2)

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headerReceive" | Yes | Indicates Event name. |
| callback | AsyncCallback&lt;Object&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let httpRequest = http.createHttp();
httpRequest.on("headerReceive", (data: BusinessError) => {
  console.error("error:" + JSON.stringify(data));
});

```

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

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});
httpRequest.off("headersReceive");

```

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;ArrayBuffer&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceive", (data: ArrayBuffer) => {
  console.info("dataReceive length: " + JSON.stringify(data.byteLength));
});
httpRequest.off("dataReceive");

```

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "dataEnd" | Yes | Indicates Event name. |
| callback | Callback&lt;void&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataEnd", () => {
  console.info("Receive dataEnd !");
});
httpRequest.off("dataEnd");

```

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

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataReceiveProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataReceiveProgressInfo&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataReceiveProgress", (data: http.DataReceiveProgressInfo) => {
  console.info("dataReceiveProgress:" + JSON.stringify(data));
});
httpRequest.off("dataReceiveProgress");

```

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

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dataSendProgress' | Yes | Indicates Event name. |
| callback | Callback&lt;DataSendProgressInfo&gt; | Yes | the callback of on. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.on("dataSendProgress", (data: http.DataSendProgressInfo) => {
  console.info("dataSendProgress:" + JSON.stringify(data));
});
httpRequest.off("dataSendProgress");

```

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

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | "headersReceive" | Yes | Indicates Event name. |
| callback | Callback&lt;Object&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.once("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});

```

```TypeScript
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
httpRequest.once("headersReceive", (header: Object) => {
  console.info("header: " + JSON.stringify(header));
});

```

## request

```TypeScript
request(url: string, callback: AsyncCallback<HttpResponse>): void
```

Initiates an HTTP request to a given URL. This API uses an asynchronous callback to return the result. > **NOTE** > > (1) This API can receive only data whose size is less than 5 MB. If the data size exceeds 5 MB, you need to set > **maxLimit** to a larger value in [HttpRequestOptions](arkts-network-httprequestoptions-i.md) or call > [requestInStream](arkts-network-httprequest-i.md#requestinstream-1) to > initiate a streaming request. Since API version 23, this API can receive a maximum of 50 MB data. In versions > earlier than API version 23, this API can receive a maximum of 5 MB data, and any data exceeding this threshold > will fail to be received. > (2) If you need to pass in cookies, add them to the **options** parameter. > (3) If the URL contains non-English characters, call **encodeURL(url)** to encode the URL before initiating an > HTTP request.

**Since:** 6

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;HttpResponse&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic&static and later |

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

```

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

```

## request

```TypeScript
request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void
```

Initiates an HTTP request containing specified options to a given URL. This API uses an asynchronous callback to return the result. > **NOTE** > > (1) This API can receive only data whose size is less than 5 MB. If the data size exceeds 5 MB, you need to set > **maxLimit** to a larger value in [HttpRequestOptions](arkts-network-httprequestoptions-i.md) or call > [requestInStream](arkts-network-httprequest-i.md#requestinstream-1) to > initiate a streaming request. Since API version 23, this API can receive a maximum of 50 MB data. In versions > earlier than API version 23, this API can receive a maximum of 5 MB data, and any data exceeding this threshold > will fail to be received. > (2) If you need to pass in cookies, add them to the **options** parameter. > (3) If the URL contains non-English characters, call **encodeURL(url)** to encode the URL before initiating an > HTTP request.

**Since:** 6

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | Yes | Request options. For details, see[HttpRequestOptions](arkts-network-httprequestoptions-i.md). |
| callback | AsyncCallback&lt;HttpResponse&gt; | Yes | Callback used to return the result. If the operation issuccessful, the callback content is an [HttpResponse](arkts-network-httpresponse-i.md) object; otherwise, thecallback content is undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic&static and later |

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

```

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

```

## request

```TypeScript
request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>
```

Initiates an HTTP request containing specified options to a given URL. This API uses a promise to return the result. > **NOTE** > > (1) This API can receive only data whose size is less than 5 MB. If the data size exceeds 5 MB, you need to set > **maxLimit** to a larger value in [HttpRequestOptions](arkts-network-httprequestoptions-i.md) or call > [requestInStream](arkts-network-httprequest-i.md#requestinstream-1) to > initiate a streaming request. Since API version 23, this API can receive a maximum of 50 MB data. In versions > earlier than API version 23, this API can receive a maximum of 5 MB data, and any data exceeding this threshold > will fail to be received. > (2) If you need to pass in cookies, add them to the **options** parameter. > (3) If the URL contains non-English characters, call **encodeURL(url)** to encode the URL before initiating an > HTTP request.

**Since:** 6

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No | Request options. For details, see[HttpRequestOptions](arkts-network-httprequestoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpResponse&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic&static and later |

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

```

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

```

## requestInStream

```TypeScript
requestInStream(url: string, callback: AsyncCallback<number>): void
```

Initiates an HTTP request containing specified options to a given URL. This API uses an asynchronous callback to return the result, which is a streaming response.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the request is successful,**err** is **undefined**, and the HTTP result code is returned. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Unknown error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic, 26.1.0 static and later |

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

```

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
requestInStream(url: string, options: HttpRequestOptions, callback: AsyncCallback<number>): void
```

Initiates an HTTP request containing specified options to a given URL. This API uses an asynchronous callback to return the result, which is a streaming response.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | Yes | Request options. For details, see[HttpRequestOptions](arkts-network-httprequestoptions-i.md). |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the request is successful,**err** is **undefined**, and the [HTTP result code](arkts-network-responsecode-e.md) is returned. Otherwise, **err**is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Unknown error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic, 26.1.0 static and later |

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

```

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

```

## requestInStream

```TypeScript
requestInStream(url: string, options?: HttpRequestOptions): Promise<number>
```

Initiates an HTTP request containing specified options to a given URL. This API uses a promise to return the result, which is a streaming response.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No | Request options. For details, see[HttpRequestOptions](arkts-network-httprequestoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the [result](arkts-network-responsecode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Unknown error. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain.<br>**Applicable version:** 12 and later |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted.<br>**Applicable version:** 18 and later |
| 2300996 | The request was intercepted by the HTTP globalinterceptor.<br>**Applicable version:** 26.0.0 dynamic, 26.1.0 static and later |

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

```

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

Initiates an HTTP network request based on the URL and related configuration options (optional). This API returns the response synchronously. > **NOTE** > > (1) This API can receive data of up to 50 MB. To receive more than 50 MB of data, set the **maxLimit** > parameter in [HttpRequestOptions](arkts-network-httprequestoptions-i.md). > (2) If you need to pass in cookies, add them to the **options** parameter. > (3) If the URL contains non-English characters, call **encodeURL(url)** to encode the URL before initiating an > HTTP request. > (4) This API is synchronous and blocks the current thread until an HTTP response or error code is returned. **Required permission**: ohos.permission.INTERNET

**Since:** 26.0.0

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL for initiating an HTTP request. |
| options | HttpRequestOptions | No | Request options. For details, see[HttpRequestOptions](arkts-network-httprequestoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| HttpResponse | HTTP request response result that is returned synchronously. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300001](../errorcode-net-http.md#2300001-protocol-not-supported) | Unsupported protocol. |
| [2300003](../errorcode-net-http.md#2300003-incorrect-url-format) | Invalid URL format or missing URL. |
| [2300005](../errorcode-net-http.md#2300005-failed-to-resolve-the-domain-name-of-the-proxy-server) | Failed to resolve the proxy name. |
| [2300006](../errorcode-net-http.md#2300006-failed-to-resolve-the-domain-name-of-the-host) | Failed to resolve the host name. |
| [2300007](../errorcode-net-http.md#2300007-failed-to-connect-to-the-server) | Failed to connect to the server. |
| [2300008](../errorcode-net-http.md#2300008-invalid-data-returned-by-the-server) | Invalid server response. |
| [2300009](../errorcode-net-http.md#2300009-access-to-remote-resources-denied) | Access to the remote resource denied. |
| [2300016](../errorcode-net-http.md#2300016-http2-framing-layer-error) | Error in the HTTP2 framing layer. |
| [2300018](../errorcode-net-http.md#2300018-incomplete-data-returned-by-the-server) | Transferred a partial file. |
| [2300023](../errorcode-net-http.md#2300023-failed-to-write-received-data-to-a-disk-or-application) | Failed to write the received data to the disk or application. |
| [2300025](../errorcode-net-http.md#2300025-failed-to-upload-data) | Upload failed. |
| [2300026](../errorcode-net-http.md#2300026-failed-to-open-or-read-local-data-from-a-file-or-application) | Failed to open or read local data from the file or application. |
| [2300027](../errorcode-net-http.md#2300027-insufficient-memory) | Out of memory. |
| [2300028](../errorcode-net-http.md#2300028-operation-timeout) | Operation timeout. |
| [2300047](../errorcode-net-http.md#2300047-maximum-redirections-reached) | The number of redirections reaches the maximum allowed. |
| [2300052](../errorcode-net-http.md#2300052-no-content-returned-by-the-server) | The server returned nothing (no header or data). |
| [2300055](../errorcode-net-http.md#2300055-failed-to-send-network-data) | Failed to send data to the peer. |
| [2300056](../errorcode-net-http.md#2300056-failed-to-receive-network-data) | Failed to receive data from the peer. |
| [2300058](../errorcode-net-http.md#2300058-local-ssl-certificate-error) | Local SSL certificate error. |
| [2300059](../errorcode-net-http.md#2300059-failed-to-use-the-specified-ssl-cipher-algorithm) | The specified SSL cipher cannot be used. |
| [2300060](../errorcode-net-http.md#2300060-incorrect-ssl-certificate-or-ssh-key-of-the-remote-server) | Invalid SSL peer certificate or SSH remote key. |
| [2300061](../errorcode-net-http.md#2300061-unrecognized-or-incorrect-http-encoding-format) | Invalid HTTP encoding format. |
| [2300063](../errorcode-net-http.md#2300063-maximum-file-size-exceeded) | Maximum file size exceeded. |
| [2300070](../errorcode-net-http.md#2300070-insufficient-server-disk-space) | Remote disk full. |
| [2300073](../errorcode-net-http.md#2300073-uploaded-file-already-exists) | Remote file already exists. |
| [2300077](../errorcode-net-http.md#2300077-no-ssl-ca-certificate-or-access-permission) | The SSL CA certificate does not exist or is inaccessible. |
| [2300078](../errorcode-net-http.md#2300078-url-requested-file-not-found) | Remote file not found. |
| [2300094](../errorcode-net-http.md#2300094-identity-verification-failed) | Authentication error. |
| 2300996 | The request was intercepted by the HTTP global interceptor. |
| [2300997](../errorcode-net-http.md#2300997-plaintext-http-access-intercepted) | Cleartext traffic not permitted. |
| [2300998](../errorcode-net-http.md#2300998-domain-access-denied) | It is not allowed to access this domain. |
| [2300999](../errorcode-net-http.md#2300999-internal-error) | Internal error. |

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

```

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

```

