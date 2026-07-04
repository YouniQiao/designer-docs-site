# getSockfdTxBytes

## Modules to Import

```TypeScript
import { statistics } from '@ohos.net.statistics';
```

## getSockfdTxBytes

```TypeScript
function getSockfdTxBytes(sockfd: number, callback: AsyncCallback<number>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sockfd | number | Yes | Indicates the file descriptor of the given socket. |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the data traffic bytes sent by the specified sockfd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // In actual development, you need to first obtain it based on the socket you created.
statistics.getSockfdTxBytes(sockfd, (error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```


## getSockfdTxBytes

```TypeScript
function getSockfdTxBytes(sockfd: number): Promise<number>
```

Queries the data traffic (including all TCP and UDP data packets) sent through a specified sockfd.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sockfd | number | Yes | Indicates the file descriptor of the given socket. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the data traffic bytes sent by the specified sockfd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let sockfd = 50; // In actual development, you need to first obtain it based on the socket you created.
statistics.getSockfdTxBytes(sockfd).then((stats: number) => {
  console.info(JSON.stringify(stats));
}).catch((err: BusinessError) => {
  console.error(JSON.stringify(err));
});

```

