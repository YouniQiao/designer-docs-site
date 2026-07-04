# getPairState

## Modules to Import

```TypeScript
import { connection } from '@ohos.bluetooth.connection';
```

## getPairState

```TypeScript
function getPairState(deviceId: string): BondState
```

Obtains the pair state of a specified device.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| BondState | Returns the pair state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let res: connection.BondState = connection.getPairState("XX:XX:XX:XX:XX:XX");
    console.info('getPairState: ' + res);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

