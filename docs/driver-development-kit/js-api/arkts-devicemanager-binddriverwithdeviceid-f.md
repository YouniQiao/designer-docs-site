# bindDriverWithDeviceId

## bindDriverWithDeviceId

```TypeScript
function bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>): Promise<RemoteDeviceDriver>
```

根据queryDevices()返回的设备信息绑定设备。使用Promise异步回调。 需要调用[deviceManager.queryDevices]deviceManager.queryDevices获取设备信息列表。

**Since:** 19

**Required permissions:** 

 ohos.permission.ACCESS_DDK_DRIVERS

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | long | Yes | 设备ID，通过queryDevices获得。 |
| onDisconnect | AsyncCallback&lt;long> | Yes | 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RemoteDeviceDriver> | Promise对象，返回RemoteDeviceDriver对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 26300001 | ExternalDeviceManager service exception. |
| 26300002 | The driver service does not allow any client to bind. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  deviceManager.bindDriverWithDeviceId(12345678, (error : BusinessError, data : number) => {
    console.error(`Device is disconnected`);
  }).then((data: deviceManager.RemoteDeviceDriver) => {
    console.info(`bindDriverWithDeviceId success, Device_Id is ${data.deviceId}.
    remote is ${data.remote != null ? data.remote.getDescriptor() : "null"}`);
  }, (error: BusinessError) => {
    console.error(`bindDriverWithDeviceId async fail. Code is ${error.code}, message is ${error.message}`);
  });
} catch (error) {
  console.error(`bindDriverWithDeviceId fail. Code is ${error.code}, message is ${error.message}`);
}

```

