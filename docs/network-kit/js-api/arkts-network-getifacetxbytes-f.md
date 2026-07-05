# getIfaceTxBytes

## Modules to Import

```TypeScript
import { statistics } from '@ohos.net.statistics';
```

## getIfaceTxBytes

```TypeScript
function getIfaceTxBytes(nic: string, callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified NIC.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nic | string | Yes | Network interface card. |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the data traffic sent through the specified NIC. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |
| [2103012](../errorcode-net-statistics.md#2103012-failed-to-obtain-the-nic-name) | Failed to obtain the NIC name. |

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
function getIfaceTxBytes(nic: string): Promise<number>
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
| Promise&lt;number&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |
| [2103012](../errorcode-net-statistics.md#2103012-failed-to-obtain-the-nic-name) | Failed to obtain the NIC name. |

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

