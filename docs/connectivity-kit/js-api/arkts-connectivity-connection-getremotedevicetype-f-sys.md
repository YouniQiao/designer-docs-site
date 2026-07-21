# getRemoteDeviceType (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="getremotedevicetype"></a>
## getRemoteDeviceType

```TypeScript
function getRemoteDeviceType(deviceId: string): Promise<DeviceType>
```

Get remote device custom type.

**Since:** 12

**Required permissions:** 
- API version 12 - 17: ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getRemoteDeviceType(deviceId: string): Promise<DeviceType>--><!--Device-connection-function getRemoteDeviceType(deviceId: string): Promise<DeviceType>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceType&gt; | Returns the device type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 12 - 17 |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs.<br>**Applicable version:** 18 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// promise
try {
    connection.getRemoteDeviceType('11:22:33:44:55:66').then((data: connection.DeviceType) => {
        console.info('getRemoteDeviceType success, DeviceType:' + JSON.stringify(data));
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

