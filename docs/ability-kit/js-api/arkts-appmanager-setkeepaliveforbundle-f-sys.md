# setKeepAliveForBundle

## setKeepAliveForBundle

```TypeScript
function setKeepAliveForBundle(bundleName: string, userId: int, enable: boolean): Promise<void>
```

为指定用户下的应用设置或取消保活。使用Promise异步回调。 从API version 18开始，该接口仅在2in1和Wearable设备上生效。对于API version 18之前版本，该接口仅在2in1设备上生效。其他情况下调用该接口将返回错误码801。 > **说明：** > > - 应用如果需要支持保活，其[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的mainElement必须是UIAbility。只有当 > mainElement启动后，系统才会执行应用保活操作。 > > - 在2in1设备上，被保活的应用需要在启动后5秒内添加至状态栏。否则，系统将取消该应用的保活设置，并杀死保活重启的进程。 > > - 当被保活的应用进程退出时，系统将尝试重启该进程，连续3次重启失败后将不再继续重启。

**Since:** 14

**Required permissions:** 

 ohos.permission.MANAGE_APP_KEEP_ALIVE

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要设置保活的应用包名。 |
| userId | int | Yes | 表示要设置保活应用所属的用户ID。 |
| enable | boolean | Yes | 表示对应用保活或者取消保活。true表示对应用保活，false表示对应用取消保活。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |
| 16300005 | The target bundle does not exist. |
| 16300008 | The target bundle has no MainAbility. |
| 16300009 | The target bundle has no status-bar ability. |
| 16300010 | The target application is not attached to the status bar. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = "ohos.samples.keepaliveapp";
  let userId = 100;
  appManager.setKeepAliveForBundle(bundleName, userId, true).then(() => {
    console.info(`setKeepAliveForBundle success`);
  }).catch((err: BusinessError) => {
    console.error(`setKeepAliveForBundle fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] setKeepAliveForBundle error: ${code}, ${message}`);
}

```

