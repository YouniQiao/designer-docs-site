# queryDriverInfo

## queryDriverInfo

```TypeScript
function queryDriverInfo(driverUid?: string): Array<Readonly<DriverInfo>>
```

查询扩展外设驱动详细信息列表。如果没有设备接入，那么将会返回一个空的列表。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| driverUid | string | No | 驱动UID，通过queryDeviceInfo获得。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;DriverInfo>> | 扩展外设驱动详细信息列表。 |

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
  // In this example, driver-12345 is the driver UID. During application development, you can use queryDeviceInfo to query the driver UID and use it as the input parameter.
  let driverInfos : Array<deviceManager.DriverInfo> = deviceManager.queryDriverInfo("driver-12345");
  for (let item of driverInfos) {
    console.info(`driver name is ${item.driverName}`)
  }
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Failed to query driver info. Code is ${err.code}, message is ${err.message}`);
}

```

