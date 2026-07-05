# createDeviceManager

## createDeviceManager

```TypeScript
function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void
```

创建一个设备管理器实例。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.createDeviceManager

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指示应用程序的Bundle名称。长度范围1~255字符。 |
| callback | AsyncCallback&lt;DeviceManager> | Yes | DeviceManager实例创建时调用的回调，返回设备管理器对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

let dmInstance: deviceManager.DeviceManager | null = null;
try {
  deviceManager.createDeviceManager("ohos.samples.jshelloworld", (err: BusinessError, data: deviceManager.DeviceManager) => {
    if (err) { 
      console.error("createDeviceManager errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
    console.info("createDeviceManager success");
    dmInstance = data;
  });
} catch(err) {
  let e: BusinessError = err as BusinessError;
  console.error("createDeviceManager errCode:" + e.code + ",errMessage:" + e.message);
}

```

