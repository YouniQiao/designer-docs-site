# bindDeviceDriver

## bindDeviceDriver

```TypeScript
function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<RemoteDeviceDriver>): void
```

根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices()]deviceManager.queryDevices获取设备信息以及device。

**Since:** 11

**Deprecated since:** 19

**Substitute:** deviceManager.bindDriverWithDeviceId(deviceId:

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | 设备ID，通过queryDevices获得。 |
| onDisconnect | AsyncCallback&lt;number> | Yes | 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。 |
| callback | AsyncCallback&lt;RemoteDeviceDriver> | Yes | 回调函数。当绑定设备驱动成功时，err为undefined，data为包括设备ID和远程对象的  [RemoteDeviceDriver]deviceManager.RemoteDeviceDriver对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types.  3.Parameter verification failed. |
| 22900001 | ExternalDeviceManager service exception. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  deviceManager.bindDeviceDriver(12345678, (error : BusinessError, data : number) => {
    console.error(`Device is disconnected`);
  }, (error : BusinessError, data : deviceManager.RemoteDeviceDriver) => {
    if (error) {
      console.error(`bindDeviceDriver async fail. Code is ${error.code}, message is ${error.message}`);
      return;
    }
    console.info(`bindDeviceDriver success`);
  });
} catch (error) {
  console.error(`bindDeviceDriver fail. Code is ${error.code}, message is ${error.message}`);
}

```

## bindDeviceDriver

```TypeScript
function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<RemoteDeviceDriver>
```

根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices]deviceManager.queryDevices获取设备信息以及device。

**Since:** 11

**Deprecated since:** 19

**Substitute:** deviceManager.bindDriverWithDeviceId(deviceId:

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | 设备ID，通过queryDevices获得。 |
| onDisconnect | AsyncCallback&lt;number> | Yes | 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RemoteDeviceDriver> | Promise对象，返回RemoteDeviceDriver对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types.  3.Parameter verification failed. |
| 22900001 | ExternalDeviceManager service exception. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  deviceManager.bindDeviceDriver(12345678, (error : BusinessError, data : number) => {
    console.error(`Device is disconnected`);
  }).then((data: deviceManager.RemoteDeviceDriver) => {
    console.info(`bindDeviceDriver success, Device_Id is ${data.deviceId}.
    remote is ${data.remote != null ? data.remote.getDescriptor() : "null"}`);
  }, (error: BusinessError) => {
    console.error(`bindDeviceDriver async fail. Code is ${error.code}, message is ${error.message}`);
  });
} catch (error) {
  console.error(`bindDeviceDriver fail. Code is ${error.code}, message is ${error.message}`);
}

```

