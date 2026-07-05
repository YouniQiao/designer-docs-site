# connectAllowedProfiles (System API)

## Modules to Import

```TypeScript
import { connection } from '@ohos.bluetooth.connection';
```

## connectAllowedProfiles

```TypeScript
function connectAllowedProfiles(deviceId: string, callback: AsyncCallback<void>): void
```

Connects all allowed bluetooth profiles between the local and remote device.

**Since:** 16

**Required permissions:** 
- API version 16+: ohos.permission.ACCESS_BLUETOOTH
- API version 11 - 15: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs.<br>**Applicable version:** 11 - 15 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  connection.connectAllowedProfiles('68:13:24:79:4C:8C', (err: BusinessError) => {
    if (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
      return;
    }
    console.info('connectAllowedProfiles');
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```


## connectAllowedProfiles

```TypeScript
function connectAllowedProfiles(deviceId: string): Promise<void>
```

Connects all allowed bluetooth profiles between the local and remote device.

**Since:** 16

**Required permissions:** 
- API version 16+: ohos.permission.ACCESS_BLUETOOTH
- API version 11 - 15: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs.<br>**Applicable version:** 11 - 15 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  connection.connectAllowedProfiles('68:13:24:79:4C:8C').then(() => {
      console.info('connectAllowedProfiles');
    }, (err: BusinessError) => {
      console.error('connectAllowedProfiles:errCode' + err.code + ', errMessage: ' + err.message);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

