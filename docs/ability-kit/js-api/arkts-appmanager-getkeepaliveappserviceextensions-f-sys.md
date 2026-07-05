# getKeepAliveAppServiceExtensions

## getKeepAliveAppServiceExtensions

```TypeScript
function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>
```

获取所有保活的AppServiceExtensionAbility应用信息，此信息由[KeepAliveBundleInfo]appManager.KeepAliveBundleInfo定义。使用Promise异步 回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_APP_KEEP_ALIVE

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;KeepAliveBundleInfo>> | Promise对象，返回用户保活应用信息的数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appManager.getKeepAliveAppServiceExtensions().then((data) => {
    console.info(`getKeepAliveAppServiceExtensions success, data: ${JSON.stringify(data)}`);
  }).catch((err: BusinessError) => {
    console.error(`getKeepAliveAppServiceExtensions fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] getKeepAliveAppServiceExtensions error: ${code}, ${message}`);
}

```

