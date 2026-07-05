# setKeepAliveForAppServiceExtension

## setKeepAliveForAppServiceExtension

```TypeScript
function setKeepAliveForAppServiceExtension(bundleName: string, enabled: boolean): Promise<void>
```

为AppServiceExtensionAbility设置保活或取消保活。使用Promise异步回调。 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > - 仅当应用安装在userId为1的用户下，且应用中entry类型的HAP的module.json5配置文件中的mainElement字段配置为AppServiceExtensionAbility时，该接口才生效。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_APP_KEEP_ALIVE

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要设置保活的应用包名。 |
| enabled | boolean | Yes | 表示是否进行应用保活。true表示保活，false表示不保活。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |
| 16000081 | Failed to obtain the target application information. |
| 16000202 | Invalid main element type. |
| 16000203 | Cannot change the keep-alive status. |
| 16000204 | The target bundle is not in u1. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = "ohos.samples.keepaliveapp";
  appManager.setKeepAliveForAppServiceExtension(bundleName, true).then(() => {
    console.info(`setKeepAliveForAppServiceExtension success`);
  }).catch((err: BusinessError) => {
    console.error(`setKeepAliveForAppServiceExtension fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] setKeepAliveForAppServiceExtension error: ${code}, ${message}`);
}

```

