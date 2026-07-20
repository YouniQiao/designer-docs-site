# setRemoteDeviceType (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## setRemoteDeviceType

```TypeScript
function setRemoteDeviceType(deviceId: string, type: DeviceType): Promise<void>
```

Set remote device custom type.

**Since:** 12

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function setRemoteDeviceType(deviceId: string, type: DeviceType): Promise<void>--><!--Device-connection-function setRemoteDeviceType(deviceId: string, type: DeviceType): Promise<void>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| type | [DeviceType](../../apis-localization-kit/arkts-apis/arkts-localization-resourcemanager-devicetype-e.md) | Yes | Indicates device type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// promise
try {
    connection.setRemoteDeviceType('11:22:33:44:55:66', connection.DeviceType.DEVICE_TYPE_HEADSET).then(() => {
        console.info('setRemoteDeviceType success');
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

