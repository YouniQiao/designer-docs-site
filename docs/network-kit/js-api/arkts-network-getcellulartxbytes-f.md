# getCellularTxBytes

## Modules to Import

```TypeScript
import { statistics } from '@ohos.net.statistics';
```

## getCellularTxBytes

```TypeScript
function getCellularTxBytes(callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the data traffic sent through the cellular network. |

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

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returned by the function. |

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

