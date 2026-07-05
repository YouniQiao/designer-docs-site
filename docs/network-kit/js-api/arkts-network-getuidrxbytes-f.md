# getUidRxBytes

## Modules to Import

```TypeScript
import { statistics } from '@ohos.net.statistics';
```

## getUidRxBytes

```TypeScript
function getUidRxBytes(uid: number, callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) received by a specified application.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | Indicates the process ID of the application. |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the data traffic received by the specified application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // This is a sample UID. Replace it with the actual UID.
statistics.getUidRxBytes(uid, (error: BusinessError, stats: number) => {
  if (error) {
     console.error(JSON.stringify(error));
     return;
  }
  console.info(JSON.stringify(stats));
});

```


## getUidRxBytes

```TypeScript
function getUidRxBytes(uid: number): Promise<number>
```

Queries the data traffic (including all TCP and UDP data packets) received by a specified application.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | Indicates the process ID of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // This is a sample UID. Replace it with the actual UID.
statistics.getUidRxBytes(uid).then((stats: number) => {
  console.info(JSON.stringify(stats));
});

```

