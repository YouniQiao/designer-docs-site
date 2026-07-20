# createGattClientDevice

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## createGattClientDevice

```TypeScript
function createGattClientDevice(deviceId: string): GattClientDevice
```

create a JavaScript Gatt client device instance.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** createGattClientDevice

<!--Device-BLE-function createGattClientDevice(deviceId: string): GattClientDevice--><!--Device-BLE-function createGattClientDevice(deviceId: string): GattClientDevice-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | The address of the remote device. |

**Return value:**

| Type | Description |
| --- | --- |
| [GattClientDevice](arkts-connectivity-ble-gattclientdevice-i.md) | Returns a JavaScript Gatt client device instance {@code GattClientDevice}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
try {
    let device: bluetoothManager.GattClientDevice = bluetoothManager.BLE.createGattClientDevice('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error("errCode:" + (err as BusinessError).code + ",errMessage:" + (err as BusinessError).message);
}

```

