# getAllAppProvisionInfo

## getAllAppProvisionInfo

```TypeScript
function getAllAppProvisionInfo(userId?: int): Promise<Array<AppProvisionInfo>>
```

根据userId获取指定用户下所有应用的[Provision]bundleManager/AppProvisionInfo配置文件信息。使用Promise异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AppProvisionInfo>> | Promise对象，返回应用的provision配置文件信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 17700004 | The specified user id is not found. |

**示例：**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let userId = 100;

try {
  bundleManager.getAllAppProvisionInfo().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllAppProvisionInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', message);
}

try {
  bundleManager.getAllAppProvisionInfo(userId).then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllAppProvisionInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', message);
}

```

