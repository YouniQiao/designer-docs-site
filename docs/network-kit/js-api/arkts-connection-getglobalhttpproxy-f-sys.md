# getGlobalHttpProxy

## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;HttpProxy> | Yes | Returns the proxy settings. For details, see {@link HttpProxy}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 202 | Non-system applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getGlobalHttpProxy((error: BusinessError, data: connection.HttpProxy) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(): Promise<HttpProxy>
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpProxy> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

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

