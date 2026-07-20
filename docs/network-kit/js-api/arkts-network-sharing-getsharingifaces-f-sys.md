# getSharingIfaces (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

## getSharingIfaces

```TypeScript
function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void
```

Obtains the names of interfaces in each sharing state.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void--><!--Device-sharing-function getSharingIfaces(state: SharingIfaceState, callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [SharingIfaceState](arkts-network-sharing-sharingifacestate-e-sys.md) | Yes | Is the network sharing state. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<string>> | Yes | Returns an array of interface names that meet this status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_BLUETOOTH = 2;
sharing.getSharingIfaces(SHARING_BLUETOOTH, (error: BusinessError, data: string[]) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


## getSharingIfaces

```TypeScript
function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>
```

Obtains the names of interfaces in each sharing state.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>--><!--Device-sharing-function getSharingIfaces(state: SharingIfaceState): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [SharingIfaceState](arkts-network-sharing-sharingifacestate-e-sys.md) | Yes | Is the network sharing state. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<string>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_BLUETOOTH = 2;
sharing
  .getSharingIfaces(SHARING_BLUETOOTH)
  .then((data: string[]) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

