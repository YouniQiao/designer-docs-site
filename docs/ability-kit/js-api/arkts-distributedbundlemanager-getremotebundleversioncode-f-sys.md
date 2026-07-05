# getRemoteBundleVersionCode

## getRemoteBundleVersionCode

```TypeScript
function getRemoteBundleVersionCode(deviceId: string, bundleName: string): Promise<long>
```

获取指定远程设备上指定包名的应用版本信息。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 远程设备ID。可以通过  [getAvailableDeviceList](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync)  获取所有可信设备列表，取值为可信设备信息下networkId字段。 |
| bundleName | string | Yes | 应用的包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，调用成功返回版本信息；调用失败返回错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |
| 17700007 | The specified device ID is not found. |
| 17700027 | The distributed service is not running. |

**Example**

```TypeScript
import { distributedBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedBundleManager.getRemoteBundleVersionCode('1111', 'com.hap.myapplication').then((data: number) => {
    console.info(`getRemoteBundleVersionCode succeed:` + data);
  }).catch((err: BusinessError) => {
    console.error(`getRemoteBundleVersionCode failed: error code is ${err.code}  and error msg is ${err.message}`);
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`getRemoteBundleVersionCode failed: error code is ${code}  and error msg is ${message}`);
}

```

