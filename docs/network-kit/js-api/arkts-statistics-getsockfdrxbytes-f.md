# getSockfdRxBytes

## getSockfdRxBytes

```TypeScript
function getSockfdRxBytes(sockfd: int, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sockfd | int | Yes | Indicates the file descriptor of the given socket. |
| callback | AsyncCallback&lt;long> | Yes | Returns the data traffic bytes received by the specified sockfd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // In actual development, you need to first obtain it based on the socket you created.
statistics.getSockfdRxBytes(sockfd, (error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getSockfdRxBytes

```TypeScript
function getSockfdRxBytes(sockfd: int): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) received through a specified sockfd.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sockfd | int | Yes | Indicates the file descriptor of the given socket. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Returns the data traffic bytes received by the specified sockfd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // In actual development, you need to first obtain it based on the socket you created.
statistics.getSockfdRxBytes(sockfd).then((stats: number) => {
  console.info(JSON.stringify(stats));
}).catch((err: BusinessError) => {
  console.error(JSON.stringify(err));
});

```

