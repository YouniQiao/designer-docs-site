# isBluetoothDiscovering

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="isbluetoothdiscovering"></a>
## isBluetoothDiscovering

```TypeScript
function isBluetoothDiscovering(): boolean
```

Check if bluetooth is discovering.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function isBluetoothDiscovering(): boolean--><!--Device-connection-function isBluetoothDiscovering(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the local device is discovering; returns {@code false} otherwise. |

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
    let res: boolean = connection.isBluetoothDiscovering();
    console.info('isBluetoothDiscovering: ' + res);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

