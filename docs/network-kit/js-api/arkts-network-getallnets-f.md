# getAllNets

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## getAllNets

```TypeScript
function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void
```

Obtains the list of data networks that are activated. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 8

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;NetHandle&gt;&gt; | Yes | the callback of getAllNets. |

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

connection.getAllNets((error: BusinessError, data: connection.NetHandle[]) => {
  if (error) {
    console.error(`Failed to get all nets. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
}); 

```


## getAllNets

```TypeScript
function getAllNets(): Promise<Array<NetHandle>>
```

Obtains the list of data networks that are activated. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 8

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NetHandle&gt;&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.getAllNets().then((data: connection.NetHandle[]) => {
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```

