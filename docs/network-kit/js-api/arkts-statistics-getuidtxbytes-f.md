# getUidTxBytes

## getUidTxBytes

```TypeScript
function getUidTxBytes(uid: int, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | Indicates the process ID of the application. |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic sent by the specified application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // This is a sample UID. Replace it with the actual UID.
statistics.getUidTxBytes(uid, (error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getUidTxBytes

```TypeScript
function getUidTxBytes(uid: int): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | Indicates the process ID of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // This is a sample UID. Replace it with the actual UID.
statistics.getUidTxBytes(uid).then((stats: number) => {
  console.info(JSON.stringify(stats));
});

```

