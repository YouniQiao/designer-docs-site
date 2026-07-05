# getKeepAliveBundles

## getKeepAliveBundles

```TypeScript
function getKeepAliveBundles(type: KeepAliveAppType, userId?: int): Promise<Array<KeepAliveBundleInfo>>
```

获取指定用户下指定类型的保活应用信息。该应用信息由[KeepAliveBundleInfo]appManager.KeepAliveBundleInfo定义。使用Promise异步回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 **需要权限**：ohos.permission.MANAGE_APP_KEEP_ALIVE

**Since:** 14

**Required permissions:** 

 ohos.permission.MANAGE_APP_KEEP_ALIVE

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | KeepAliveAppType | Yes | 表示要查询的保活应用类型。 |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;KeepAliveBundleInfo>> | Promise对象，返回用户保活应用信息的数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let userId = 100;
let type: appManager.KeepAliveAppType = appManager.KeepAliveAppType.THIRD_PARTY;
try {
  appManager.getKeepAliveBundles(type, userId).then((data) => {
    console.info(`getKeepAliveBundles success, data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`getKeepAliveBundles fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] getKeepAliveBundles error: ${code}, ${message}`);
}

```

