# bindDevice

## bindDevice

```TypeScript
function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}>): void
```

根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices()]deviceManager.queryDevices获取设备信息以及device。

**Since:** 10

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
| callback | AsyncCallback&lt;{deviceId: number; remote: rpc.IRemoteObject;}> | Yes | 回调函数。当绑定设备成功时，err为undefined，  data包含设备ID和绑定设备驱动通信对象；否则为错误对象。 |

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
import { rpc } from '@kit.IPCKit';

interface DataType {
  deviceId : number;
  remote : rpc.IRemoteObject;
}

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  deviceManager.bindDevice(12345678, (error : BusinessError, data : number) => {
    console.error(`Device is disconnected`);
  }, (error : BusinessError, data : DataType) => {
    if (error) {
      console.error(`bindDevice async fail. Code is ${error.code}, message is ${error.message}`);
      return;
    }
    console.info(`bindDevice success`);
  });
} catch (error) {
  console.error(`bindDevice fail. Code is ${error.code}, message is ${error.message}`);
}

```

## bindDevice

```TypeScript
function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<{deviceId: number;
    remote: rpc.IRemoteObject;}>
```

根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices]deviceManager.queryDevices获取设备信息以及device。

**Since:** 10

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
| Promise&lt;{deviceId: number;
    remote: rpc.IRemoteObject;}> | Promise对象，返回一个包含设备ID和IRemoteObject的对象。 |

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
  deviceManager.bindDevice(12345678, (error : BusinessError, data : number) => {
    console.error(`Device is disconnected`);
  }).then(data => {
    console.info(`bindDevice success, Device_Id is ${data.deviceId}.
    remote is ${data.remote != null ? data.remote.getDescriptor() : "null"}`);
  }, (error: BusinessError) => {
    console.error(`bindDevice async fail. Code is ${error.code}, message is ${error.message}`);
  });
} catch (error) {
  console.error(`bindDevice fail. Code is ${error.code}, message is ${error.message}`);
}

```

