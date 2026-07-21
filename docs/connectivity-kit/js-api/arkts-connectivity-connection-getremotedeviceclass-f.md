# getRemoteDeviceClass

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

<a id="getremotedeviceclass"></a>
## getRemoteDeviceClass

```TypeScript
function getRemoteDeviceClass(deviceId: string): DeviceClass
```

Obtains the class of a peer Bluetooth device.

**Since:** 10

**Required permissions:** 
- API version 10 - 17: ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function getRemoteDeviceClass(deviceId: string): DeviceClass--><!--Device-connection-function getRemoteDeviceClass(deviceId: string): DeviceClass-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Return value:**

| Type | Description |
| --- | --- |
| [DeviceClass](arkts-connectivity-connection-deviceclass-i.md) | The class of the remote device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied.<br>**Applicable version:** 10 - 17 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let remoteDeviceClass: connection.DeviceClass = connection.getRemoteDeviceClass('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

