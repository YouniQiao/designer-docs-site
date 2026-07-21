# getPairedDevices

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

<a id="getpaireddevices"></a>
## getPairedDevices

```TypeScript
function getPairedDevices(): Array<string>
```

Obtains the list of Bluetooth devices that have been paired with the current device.On API 10 and above, the permission required by this interface is changed from USE_BLUETOOTH to ACCESS_BLUETOOTH.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** getPairedDevices

**Required permissions:** 
- API version 10+: ohos.permission.ACCESS_BLUETOOTH
- API version 9: ohos.permission.USE_BLUETOOTH

<!--Device-bluetoothManager-function getPairedDevices(): Array<string>--><!--Device-bluetoothManager-function getPairedDevices(): Array<string>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Returns a list of paired Bluetooth devices's address. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let devices: Array<string> = bluetoothManager.getPairedDevices();
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

