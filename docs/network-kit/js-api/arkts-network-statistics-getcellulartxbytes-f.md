# getCellularTxBytes

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

## getCellularTxBytes

```TypeScript
function getCellularTxBytes(callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.

**Since:** 10

<!--Device-statistics-function getCellularTxBytes(callback: AsyncCallback<long>): void--><!--Device-statistics-function getCellularTxBytes(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Returns the data traffic sent through the cellular network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |
| [2103012](../errorcode-net-statistics.md#2103012-failed-to-obtain-the-nic-name) | Failed to obtain the NIC name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

statistics.getCellularTxBytes((error: BusinessError, stats: number) => {
   if (error) {
    console.error(`getCellularTxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getCellularTxBytes success, ${JSON.stringify(stats)}`);
});

```


## getCellularTxBytes

```TypeScript
function getCellularTxBytes(): Promise<number>
```

Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.

**Since:** 10

<!--Device-statistics-function getCellularTxBytes(): Promise<long>--><!--Device-statistics-function getCellularTxBytes(): Promise<long>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |
| [2103012](../errorcode-net-statistics.md#2103012-failed-to-obtain-the-nic-name) | Failed to obtain the NIC name. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

statistics.getCellularTxBytes().then((stats: number) => {
  console.info('getCellularTxBytes success', JSON.stringify(stats));
}).catch((error: Error) => {
   console.error('getCellularTxBytes error', JSON.stringify(error));
});

```

