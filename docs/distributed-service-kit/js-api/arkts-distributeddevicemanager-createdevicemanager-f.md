# createDeviceManager

## createDeviceManager

```TypeScript
function createDeviceManager(bundleName: string): DeviceManager
```

创建一个设备管理实例。设备管理实例是分布式设备管理方法的调用入口。用于获取可信设备和本地设备的相关信息。

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示应用程序的Bundle名称。长度范围1~255字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| DeviceManager | 返回设备管理器对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |

**Example**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
} catch(err) {
  let e: BusinessError = err as BusinessError;
  console.error('createDeviceManager errCode:' + e.code + ',errMessage:' + e.message);
}

```

