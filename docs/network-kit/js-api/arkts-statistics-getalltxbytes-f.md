# getAllTxBytes

## getAllTxBytes

```TypeScript
function getAllTxBytes(callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic sent through all NICs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

statistics.getAllTxBytes((error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getAllTxBytes

```TypeScript
function getAllTxBytes(): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.

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

statistics.getAllTxBytes().then((stats: number) => {
  console.info(JSON.stringify(stats));
});

```

