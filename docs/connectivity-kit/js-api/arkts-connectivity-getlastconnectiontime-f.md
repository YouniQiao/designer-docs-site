# getLastConnectionTime

## Modules to Import

```TypeScript
import { connection } from '@ohos.bluetooth.connection';
```

## getLastConnectionTime

```TypeScript
function getLastConnectionTime(deviceId: string): Promise<number>
```

Get latest connection time of device.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns latest connection time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// promise
try {
    connection.getLastConnectionTime('11:22:33:44:55:66').then((time: number) => {
        console.info(`connectionTime: ${time}`);
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

