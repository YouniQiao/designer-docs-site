# setAppHttpProxy

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## setAppHttpProxy

```TypeScript
function setAppHttpProxy(httpProxy: HttpProxy): void
```

Set application level http proxy {@link HttpProxy}.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| httpProxy | HttpProxy | Yes | Indicates the application level proxy settings. For details, see {@link HttpProxy}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid http proxy. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

let exclusionStr = "192.168,baidu.com";
let exclusionArray = exclusionStr.split(',');
connection.setAppHttpProxy({
  host: "192.168.xx.xxx",
  port: 8080,
  exclusionList: exclusionArray
} as connection.HttpProxy);
let httpRequest = http.createHttp();
let options: http.HttpRequestOptions = {
  usingProxy: true, // This field specifies whether to use the network proxy. It is supported since API version 10.
};
// Initiate an HTTP request.
httpRequest.request("EXAMPLE_URL", options, (err: BusinessError, data: http.HttpResponse) => {
  if (!err) {
   console.info(`Result: ${data.result}`);
   console.info(`code: ${data.responseCode}`);
   console.info(`type: ${JSON.stringify(data.resultType)}`);
   console.info(`header: ${JSON.stringify(data.header)}`);
   console.info(`cookies: ${data.cookies}`); // Cookies are supported since API version 8.
  } else {
   console.error(`error: ${JSON.stringify(err)}`);
  }
});

```

