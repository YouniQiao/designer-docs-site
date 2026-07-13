# getDefaultNet

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getDefaultNet

```TypeScript
function getDefaultNet(callback: AsyncCallback<NetHandle>): void
```

Obtains the data network that is activated by default.
To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;NetHandle&gt; | Yes | the callback of getDefaultNet. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultNet((error: BusinessError, data: connection.NetHandle) => {
  if (error) {
    console.error(`Failed to get default net. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```


## getDefaultNet

```TypeScript
function getDefaultNet(): Promise<NetHandle>
```

Obtains the data network that is activated by default.
To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 11

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetHandle&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.getDefaultNet().then((data: connection.NetHandle) => {
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```

