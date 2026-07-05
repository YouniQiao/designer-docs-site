# getCellularTxBytes

## getCellularTxBytes

```TypeScript
function getCellularTxBytes(callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic sent through the cellular network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

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
function getCellularTxBytes(): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent through the cellular network.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

statistics.getCellularTxBytes().then((stats: number) => {
  console.info('getCellularTxBytes success', JSON.stringify(stats));
}).catch((error: Error) => {
   console.error('getCellularTxBytes error', JSON.stringify(error));
});

```

