# queryDevices

## queryDevices

```TypeScript
function queryDevices(busType?: int): Array<Readonly<Device>>
```

获取接入主设备的外部设备列表。如果没有设备接入，那么将会返回一个空的列表。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| busType | int | No | 由[BusType]deviceManager.BusType约定的设备总线类型，不填则查找所有类型设备。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;Device>> | 设备信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 22900001 | ExternalDeviceManager service exception or busType parameter error. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';

try {
  let devices : Array<deviceManager.Device> = deviceManager.queryDevices(deviceManager.BusType.USB);
  for (let item of devices) {
    let device : deviceManager.USBDevice = item as deviceManager.USBDevice;
    console.info(`Device id is ${device.deviceId}`);
  }
} catch (error) {
  console.error(`Failed to query device. Code is ${error.code}, message is ${error.message}`);
}

```

