# getLauncherAbilityInfo (System API)

## Modules to Import

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
```

## getLauncherAbilityInfo

```TypeScript
function getLauncherAbilityInfo(bundleName: string, userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void
```

Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-launcherBundleManager-function getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void--><!--Device-launcherBundleManager-function getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| userId | number | Yes | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<LauncherAbilityInfo>> | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md) used to return the result. If the operation is successful, **err** is **null**, and **data** is the array of [LauncherAbilityInfo](arkts-ability-launcherabilityinfo-i.md) objects obtained.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not support. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |

**Example**

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
function getLauncherAbilityInfo(bundleName: string, userId: number) : Promise<Array<LauncherAbilityInfo>>
```

Obtains the [launcher ability information](arkts-ability-launcherabilityinfo-i.md) based on the given bundle name and user ID. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-launcherBundleManager-function getLauncherAbilityInfo(bundleName: string, userId: int) : Promise<Array<LauncherAbilityInfo>>--><!--Device-launcherBundleManager-function getLauncherAbilityInfo(bundleName: string, userId: int) : Promise<Array<LauncherAbilityInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| userId | number | Yes | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<LauncherAbilityInfo>> | Promise used to return the array of [LauncherAbilityInfo](arkts-ability-launcherabilityinfo-i.md) objects obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not support. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |

**Example**

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

