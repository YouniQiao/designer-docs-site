# enableBluetoothAsync

## enableBluetoothAsync

```TypeScript
function enableBluetoothAsync(): Promise<void>
```

Asynchronous interface for enables Bluetooth on a device.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900013 | The user does not respond. |
| 2900014 | User refuse the action. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    access.enableBluetoothAsync().then(() => {
        console.info('enableBluetoothAsync');
    }, (error: BusinessError) => {
        console.error('enableBluetoothAsync: errCode:' + error.code + ',errMessage' + error.message);
    })
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

