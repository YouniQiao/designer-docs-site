# queryDeviceInfo

## queryDeviceInfo

```TypeScript
function queryDeviceInfo(deviceId?: long): Array<Readonly<DeviceInfo>>
```

查询扩展外设详细信息列表。如果没有设备接入，那么将会返回一个空的列表。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | long | No | 设备ID，通过[queryDevices](arkts-devicemanager-querydevices-f.md#queryDevices-1)获得。  如果不传入设备ID，则默认获取所有的设备信息；如果没有外接设备，且没有传入设备ID则会返回空数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;DeviceInfo>> | 扩展外设详细信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 202 | Permission denied. A non-system application cannot call a system API. |
| 401 | Parameter error. Possible causes: 1.Incorrect parameter types. |
| 26300001 | ExternalDeviceManager service exception. |

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

