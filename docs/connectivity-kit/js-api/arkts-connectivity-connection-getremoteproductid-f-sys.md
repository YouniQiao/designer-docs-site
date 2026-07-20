# getRemoteProductId (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## getRemoteProductId

```TypeScript
function getRemoteProductId(deviceId: string): string
```

Obtains the product ID of a remote device.

**Since:** 11

**Required permissions:** 
- API version 11 - 15: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getRemoteProductId(deviceId: string): string--><!--Device-connection-function getRemoteProductId(deviceId: string): string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the remote device's product ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 11 - 15 |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
try {
  let remoteDeviceProductId = connection.getRemoteProductId('XX:XX:XX:XX:XX:XX');
} catch (err) {
  console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

