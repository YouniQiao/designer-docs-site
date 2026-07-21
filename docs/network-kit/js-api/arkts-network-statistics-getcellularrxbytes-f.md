# getCellularRxBytes

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

<a id="getcellularrxbytes"></a>
## getCellularRxBytes

```TypeScript
function getCellularRxBytes(callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.

**Since:** 10

<!--Device-statistics-function getCellularRxBytes(callback: AsyncCallback<long>): void--><!--Device-statistics-function getCellularRxBytes(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Returns the data traffic received through the cellular network. |

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

statistics.getCellularRxBytes((error: BusinessError, stats: number) => {
  if (error) {
    console.error(`getCellularRxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getCellularRxBytes success, ${JSON.stringify(stats)}`);
});

```


<a id="getcellularrxbytes-1"></a>
## getCellularRxBytes

```TypeScript
function getCellularRxBytes(): Promise<number>
```

Queries the data traffic (including all TCP and UDP data packets) received through the cellular network.

**Since:** 10

<!--Device-statistics-function getCellularRxBytes(): Promise<long>--><!--Device-statistics-function getCellularRxBytes(): Promise<long>-End-->

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

statistics.getCellularRxBytes().then((stats: number) => {
  console.info('getCellularRxBytes success', JSON.stringify(stats));
}).catch((error: Error) => {
   console.error('getCellularRxBytes error', JSON.stringify(error));
});

```

