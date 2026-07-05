# getStatsTotalBytes (System API)

## Modules to Import

```TypeScript
import { sharing } from '@ohos.net.sharing';
```

## getStatsTotalBytes

```TypeScript
function getStatsTotalBytes(callback: AsyncCallback<number>): void
```

Obtains the number of total data bytes of the sharing network interfaces.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the number of total data bytes of the sharing network interfaces. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing.getStatsTotalBytes((error: BusinessError, data: number) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


## getStatsTotalBytes

```TypeScript
function getStatsTotalBytes(): Promise<number>
```

Obtains the number of total data bytes of the sharing network interfaces.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing
  .getStatsTotalBytes()
  .then((data: number) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

