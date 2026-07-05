# getIfaceTxBytes

## getIfaceTxBytes

```TypeScript
function getIfaceTxBytes(nic: string, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nic | string | Yes | Network interface card. |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic sent through the specified NIC. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

statistics.getIfaceTxBytes("wlan0", (error: BusinessError, stats: number) => {
  if (error) {
    console.error(`getIfaceTxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getIfaceTxBytes success, ${JSON.stringify(stats)}`);
});

```

## getIfaceTxBytes

```TypeScript
function getIfaceTxBytes(nic: string): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nic | string | Yes | Network interface card. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |
| 2103012 | Failed to obtain the NIC name. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

statistics.getIfaceTxBytes("wlan0").then((stats: number) => {
  console.info(`getIfaceTxBytes success, ${JSON.stringify(stats)}`);
}).catch((err: BusinessError) => {
   console.error(`getIfaceTxBytes error, ${JSON.stringify(err)}`);
});

```

