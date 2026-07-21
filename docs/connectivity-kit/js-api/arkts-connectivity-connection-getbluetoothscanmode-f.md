# getBluetoothScanMode

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="getbluetoothscanmode"></a>
## getBluetoothScanMode

```TypeScript
function getBluetoothScanMode(): ScanMode
```

Obtains the Bluetooth scanning mode of a device.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getBluetoothScanMode(): ScanMode--><!--Device-connection-function getBluetoothScanMode(): ScanMode-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ScanMode](arkts-connectivity-connection-scanmode-e.md) | Returns the Bluetooth scanning mode. |

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
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let scanMode: connection.ScanMode = connection.getBluetoothScanMode();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

