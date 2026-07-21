# getAllTxBytes

## Modules to Import

```TypeScript
import { statistics } from '@kit.NetworkKit';
```

<a id="getalltxbytes"></a>
## getAllTxBytes

```TypeScript
function getAllTxBytes(callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-statistics-function getAllTxBytes(callback: AsyncCallback<long>): void--><!--Device-statistics-function getAllTxBytes(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Returns the data traffic sent through all NICs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2103005](../errorcode-net-statistics.md#2103005-failed-to-read-the-system-map) | Failed to read the system map. |
| [2103011](../errorcode-net-statistics.md#2103011-failed-to-create-a-system-map) | Failed to create a system map. |

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


<a id="getalltxbytes-1"></a>
## getAllTxBytes

```TypeScript
function getAllTxBytes(): Promise<number>
```

Queries the data traffic (including all TCP and UDP data packets) sent through all NICs.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-statistics-function getAllTxBytes(): Promise<long>--><!--Device-statistics-function getAllTxBytes(): Promise<long>-End-->

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

**Example**

```TypeScript
import { statistics } from '@kit.NetworkKit';

statistics.getAllTxBytes().then((stats: number) => {
  console.info(JSON.stringify(stats));
});

```

