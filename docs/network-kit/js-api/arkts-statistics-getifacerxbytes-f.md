# getIfaceRxBytes

## getIfaceRxBytes

```TypeScript
function getIfaceRxBytes(nic: string, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nic | string | Yes | Network interface card. |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic received through the specified NIC. |

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

statistics.getIfaceRxBytes("wlan0", (error: BusinessError, stats: number) => {
  if (error) {
    console.error(`getIfaceRxBytes error, ${JSON.stringify(error)}`);
    return;
  }
  console.info(`getIfaceRxBytes success, ${JSON.stringify(stats)}`);
});

```

## getIfaceRxBytes

```TypeScript
function getIfaceRxBytes(nic: string): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) received through a specified NIC.

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

statistics.getIfaceRxBytes("wlan0").then((stats: number) => {
  console.info(JSON.stringify(stats));
}).catch((err: BusinessError) => {
  console.error(JSON.stringify(err));
});

```

