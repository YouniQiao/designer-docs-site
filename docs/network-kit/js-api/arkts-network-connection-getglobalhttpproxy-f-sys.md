# getGlobalHttpProxy (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getglobalhttpproxy"></a>
## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**Since:** 10

<!--Device-connection-function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void--><!--Device-connection-function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;HttpProxy&gt; | Yes | Returns the proxy settings. For details, see {@link HttpProxy}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getGlobalHttpProxy((error: BusinessError, data: connection.HttpProxy) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


<a id="getglobalhttpproxy-1"></a>
## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(): Promise<HttpProxy>
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**Since:** 10

<!--Device-connection-function getGlobalHttpProxy(): Promise<HttpProxy>--><!--Device-connection-function getGlobalHttpProxy(): Promise<HttpProxy>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpProxy&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getGlobalHttpProxy().then((data: connection.HttpProxy) => {
  console.info(JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

