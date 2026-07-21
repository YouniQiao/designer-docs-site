# isSharingSupported (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

<a id="issharingsupported"></a>
## isSharingSupported

```TypeScript
function isSharingSupported(callback: AsyncCallback<boolean>): void
```

Checks whether this device allows for network sharing.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function isSharingSupported(callback: AsyncCallback<boolean>): void--><!--Device-sharing-function isSharingSupported(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Returns {@code true} indicating network sharing is supported;returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2202011](../errorcode-net-sharing.md#2202011-failed-to-obtain-the-network-sharing-configuration) | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing.isSharingSupported((error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


<a id="issharingsupported-1"></a>
## isSharingSupported

```TypeScript
function isSharingSupported(): Promise<boolean>
```

Checks whether this device allows for network sharing.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function isSharingSupported(): Promise<boolean>--><!--Device-sharing-function isSharingSupported(): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2202011](../errorcode-net-sharing.md#2202011-failed-to-obtain-the-network-sharing-configuration) | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

sharing
  .isSharingSupported()
  .then((data: boolean) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

