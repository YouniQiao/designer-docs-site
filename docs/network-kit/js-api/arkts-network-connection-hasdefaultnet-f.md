# hasDefaultNet

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## hasDefaultNet

```TypeScript
function hasDefaultNet(callback: AsyncCallback<boolean>): void
```

Checks whether the default data network is activated.

**Since:** 10

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-connection-function hasDefaultNet(callback: AsyncCallback<boolean>): void--><!--Device-connection-function hasDefaultNet(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Returns {@code true} if the default data network is activated;returns {@code false} otherwise. |

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

connection.hasDefaultNet((error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info('data: ' + data);
});

```


## hasDefaultNet

```TypeScript
function hasDefaultNet(): Promise<boolean>
```

Checks whether the default data network is activated.

**Since:** 10

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-connection-function hasDefaultNet(): Promise<boolean>--><!--Device-connection-function hasDefaultNet(): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.hasDefaultNet().then((data: boolean) => {
  console.info('data: ' + data);
});

```

