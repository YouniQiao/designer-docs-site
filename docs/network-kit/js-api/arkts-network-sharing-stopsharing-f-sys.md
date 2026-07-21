# stopSharing (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

<a id="stopsharing"></a>
## stopSharing

```TypeScript
function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void
```

Stop network sharing for given type.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void--><!--Device-sharing-function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SharingIfaceType](arkts-network-sharing-sharingifacetype-e-sys.md) | Yes | Enumeration of shareable interface types. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of startSharing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2202004](../errorcode-net-sharing.md#2202004-shared-iface-unavailable) | Try to share an unavailable iface. |
| [2202005](../errorcode-net-sharing.md#2202005-wifi-sharing-failure) | WiFi sharing failed. |
| [2202006](../errorcode-net-sharing.md#2202006-bluetooth-sharing-failure) | Bluetooth sharing failed. |
| [2202011](../errorcode-net-sharing.md#2202011-failed-to-obtain-the-network-sharing-configuration) | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing.stopSharing(SHARING_WIFI, (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```


<a id="stopsharing-1"></a>
## stopSharing

```TypeScript
function stopSharing(type: SharingIfaceType): Promise<void>
```

Stop network sharing for given type.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function stopSharing(type: SharingIfaceType): Promise<void>--><!--Device-sharing-function stopSharing(type: SharingIfaceType): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SharingIfaceType](arkts-network-sharing-sharingifacetype-e-sys.md) | Yes | Enumeration of shareable interface types. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2202004](../errorcode-net-sharing.md#2202004-shared-iface-unavailable) | Try to share an unavailable iface. |
| [2202005](../errorcode-net-sharing.md#2202005-wifi-sharing-failure) | WiFi sharing failed. |
| [2202006](../errorcode-net-sharing.md#2202006-bluetooth-sharing-failure) | Bluetooth sharing failed. |
| [2202011](../errorcode-net-sharing.md#2202011-failed-to-obtain-the-network-sharing-configuration) | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing
  .stopSharing(SHARING_WIFI)
  .then(() => {
    console.info('stop wifi sharing successful');
  })
  .catch((error: BusinessError) => {
    console.error('stop wifi sharing failed');
  });

```

