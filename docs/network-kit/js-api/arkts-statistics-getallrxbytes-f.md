# getAllRxBytes

## getAllRxBytes

```TypeScript
function getAllRxBytes(callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) received through all NICs.

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic received through all NICs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

statistics.getAllRxBytes((error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getAllRxBytes

```TypeScript
function getAllRxBytes(): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) received through all NICs.

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

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

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

statistics.getAllRxBytes().then((stats: number) => {
  console.info('getAllRxBytes success', JSON.stringify(stats));
}).catch((error: Error) => {
   console.error('getAllRxBytes error', JSON.stringify(error));
});

```

