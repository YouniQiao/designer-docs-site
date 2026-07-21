# getSharingState (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

<a id="getsharingstate"></a>
## getSharingState

```TypeScript
function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void
```

Obtains the network sharing state for given type.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void--><!--Device-sharing-function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SharingIfaceType](arkts-network-sharing-sharingifacetype-e-sys.md) | Yes | Is the enumeration of shareable interface types. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SharingIfaceState&gt; | Yes | the callback of getSharingState. {@code SharingIfaceState}. |

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

let SHARING_WIFI = 0;
sharing.getSharingState(SHARING_WIFI, (error: BusinessError, data: sharing.SharingIfaceState) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


<a id="getsharingstate-1"></a>
## getSharingState

```TypeScript
function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>
```

Obtains the network sharing state for given type.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>--><!--Device-sharing-function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SharingIfaceType](arkts-network-sharing-sharingifacetype-e-sys.md) | Yes | Is the enumeration of shareable interface types. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SharingIfaceState&gt; | The promise returned by the function. |

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

let SHARING_WIFI = 0;
sharing
  .getSharingState(SHARING_WIFI)
  .then((data: sharing.SharingIfaceState) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

