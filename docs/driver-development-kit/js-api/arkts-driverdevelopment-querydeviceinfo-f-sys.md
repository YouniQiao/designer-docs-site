# queryDeviceInfo (System API)

## Modules to Import

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## queryDeviceInfo

```TypeScript
function queryDeviceInfo(deviceId?: number): Array<Readonly<DeviceInfo>>
```

Obtains the list of detailed information about peripherals. If the device has no peripheral device connected, an
empty list is returned.

**Since:** 12

**Required permissions:** ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | No | Device ID, which is obtained through[queryDevices](arkts-driverdevelopment-querydevices-f.md#querydevices-1). If no device ID is passed, alldevice information is obtained by default. If no external device is connected and no device ID is passed, anempty array is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;DeviceInfo&gt;&gt; | List of detailed information about peripherals. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The permission check failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application cannot call a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Incorrect parameter types. |
| [26300001](../../apis-driverdevelopment-kit/errorcode-deviceManager.md#26300001-externaldevicemanager-service-exception) | ExternalDeviceManager service exception. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  let deviceInfos : Array<deviceManager.DeviceInfo> = deviceManager.queryDeviceInfo(12345678);
  for (let item of deviceInfos) {
    console.info(`Device id is ${item.deviceId}`)
  }
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Failed to query device info. Code is ${err.code}, message is ${err.message}`);
}

```

