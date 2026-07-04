# createDeviceManager (System API)

## Modules to Import

```TypeScript
import { deviceManager } from '@ohos.distributedHardware.deviceManager';
```

## createDeviceManager

```TypeScript
function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void
```

Creates a **DeviceManager** instance.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [createDeviceManager](arkts-distributedservice-createdevicemanager-f.md#createdevicemanager-1)

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. The value is a string of 1 to 255 characters. |
| callback | AsyncCallback&lt;DeviceManager&gt; | Yes | Callback used to return the **DeviceManager** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

