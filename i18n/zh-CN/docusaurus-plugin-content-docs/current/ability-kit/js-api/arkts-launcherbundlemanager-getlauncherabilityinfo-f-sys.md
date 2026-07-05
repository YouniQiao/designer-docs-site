# getLauncherAbilityInfo

## getLauncherAbilityInfo

```TypeScript
function getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void
```

查询指定bundleName及用户的[LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo。使用callback异步 回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| userId | int | 是 | 被查询的用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;Array&lt;LauncherAbilityInfo>> | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当函数调用成功，err为  undefined，data为bundle包含的[LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo信息。  否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |

**示例：**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  launcherBundleManager.getLauncherAbilityInfo('com.example.demo', 100,
    (errData: BusinessError, data: launcherBundleManager.LauncherAbilityInfo[]) => {
      if (errData !== null) {
        console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
      } else {
        console.info('data is ' + JSON.stringify(data));
      }
    })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

## getLauncherAbilityInfo

```TypeScript
function getLauncherAbilityInfo(bundleName: string, userId: int) : Promise<Array<LauncherAbilityInfo>>
```

查询指定bundleName及用户的[LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo。使用Promise异步回 调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| userId | int | 是 | 被查询的用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityInfo>> | Promise对象。返回bundle包含的  [LauncherAbilityInfo]./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not support. |
| 17700001 | The specified bundle name is not found. |
| 17700004 | The specified user ID is not found. |

**示例：**

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  launcherBundleManager.getLauncherAbilityInfo("com.example.demo", 100)
    .then((data: launcherBundleManager.LauncherAbilityInfo[]) => {
      console.info('data is ' + JSON.stringify(data));
    }).catch((errData: BusinessError) => {
    console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
  })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

