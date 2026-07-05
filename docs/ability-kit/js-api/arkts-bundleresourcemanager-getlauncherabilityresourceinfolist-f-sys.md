# getLauncherAbilityResourceInfoList

## getLauncherAbilityResourceInfoList

```TypeScript
function getLauncherAbilityResourceInfoList(optionsList: Array<BundleOptions>, resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>
```

根据传入的optionsList获取列表中每个BundleOptions元素对应的应用的LauncherAbilityResourceInfo。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optionsList | Array&lt;BundleOptions> | Yes | 要查询的应用的参数列表。 其中bundleName、moduleName、abilityName为必传参数。  appIndex取值范围：[0, 5]，不传时默认为0。 userId为无效参数，无需传入，传入不生效。 |
| resourceFlags | int | Yes | 指定返回的LauncherAbilityResourceInfo所包含的信息，取值为  [ResourceFlag]bundleResourceManager.ResourceFlag枚举值，不支持取值  [ResourceFlag]bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL和  [ResourceFlag]bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LauncherAbilityResourceInfo>> | Promise对象，返回指定应用列表的LauncherAbilityResourceInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not existed. |
| 17700003 | The specified ability is not existed. |
| 17700061 | The specified app index is invalid. |

**Example**

```TypeScript
import { bundleManager, bundleResourceManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Replace the application information with the actual one.
let option: bundleManager.BundleOptions = {
  bundleName: 'com.example.demo',
  moduleName: 'entry',
  abilityName: 'EntryAbility',
  appIndex: 0
};

let optionsList: Array<bundleManager.BundleOptions> = [];
optionsList.push(option);
let resourceFlag = bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_ALL;
try {
  bundleResourceManager.getLauncherAbilityResourceInfoList(optionsList, resourceFlag).then(data => {
    hilog.info(0x0000, 'testTag', 'getLauncherAbilityResourceInfoList successfully. Data length: %{public}s',
      JSON.stringify(data.length));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getLauncherAbilityResourceInfoList failed. err: %{public}s', err.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLauncherAbilityResourceInfoList failed: %{public}s', message);
}

```

