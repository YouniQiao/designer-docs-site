# unbindDevice

## unbindDevice

```TypeScript
function unbindDevice(deviceId: number, callback: AsyncCallback<number>): void
```

解除设备绑定。

**Since:** 10

**Deprecated since:** 19

**Substitute:** deviceManager.unbindDriverWithDeviceId(deviceId:

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | 设备ID，通过queryDevices获得。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。当解绑设备成功时，err为undefined，data为设备ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The permission check failed. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 22900001 | ExternalDeviceManager service exception. |

**Example**

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // For example, deviceId is 12345678. You can use queryDevices() to obtain the deviceId.
  deviceManager.unbindDevice(12345678, (error : BusinessError, data : number) => {
    if (error) {
      console.error(`unbindDevice async fail. Code is ${error.code}, message is ${error.message}`);
      return;
    }
    console.info(`unbindDevice success`);
  });
} catch (error) {
  console.error(`unbindDevice fail. Code is ${error.code}, message is ${error.message}`);
}

```

## unbindDevice

```TypeScript
function unbindDevice(deviceId: number): Promise<number>
```

解除设备绑定。

**Since:** 10

**Deprecated since:** 19

**Substitute:** deviceManager.unbindDriverWithDeviceId(deviceId:

**Required permissions:** 

 ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER

**System capability:** SystemCapability.Driver.ExternalDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | number | Yes | 设备ID，通过queryDevices获得。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回解除绑定的设备ID。 |

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
  deviceManager.unbindDevice(12345678).then((data : number) => {
    console.info(`unbindDevice success, Device_Id is ${data}.`);
  }, (error : BusinessError) => {
    console.error(`unbindDevice async fail. Code is ${error.code}, message is ${error.message}`);
  });
} catch (error) {
  console.error(`unbindDevice fail. Code is ${error.code}, message is ${error.message}`);
}

```

