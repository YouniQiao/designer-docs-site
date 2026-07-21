# getLocalAddress (System API)

## Modules to Import

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

<a id="getlocaladdress"></a>
## getLocalAddress

```TypeScript
function getLocalAddress(): string
```

Obtaining the MAC address of the local device.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.GET_BLUETOOTH_LOCAL_MAC

<!--Device-access-function getLocalAddress(): string--><!--Device-access-function getLocalAddress(): string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The local MAC address. For example, "11:22:33:AA:BB:FF". |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let localAddr = access.getLocalAddress();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

