# getAbilityIcon

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void
```

通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)，使用callback异步回调。 获取调用方信息时不需要权限。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用 > [getMediaContent](../../apis-localization-kit/arkts-apis/arkts-resourcemanager-resourcemanager-i.md#getMediaContent) > 替代。

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.resourceManager#getMediaContent

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| moduleName | string | Yes | 要查询的应用Module名称。 |
| abilityName | string | Yes | 要查询的Ability组件名。 |
| callback | AsyncCallback&lt;image.PixelMap> | Yes | 回调函数，返回指定[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)，作为程序启动  时的入参。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not found. |
| 17700003 | The specified ability is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

## getAbilityIcon

```TypeScript
function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string): Promise<image.PixelMap>
```

通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image)，使用Promise异步回调。 获取调用方信息时不需要权限。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用 > [getMediaContent](../../apis-localization-kit/arkts-apis/arkts-resourcemanager-resourcemanager-i.md#getMediaContent) > 替代。

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.resourceManager#getMediaContent

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要查询的应用Bundle名称。 |
| moduleName | string | Yes | 要查询的应用Module名称。 |
| abilityName | string | Yes | 要查询的Ability组件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return PixelMap. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not found. |
| 17700003 | The specified ability is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Replace with the corresponding bundle name, module name, and ability component name.
let bundleName: string = "com.example.myapplication";
let moduleName: string = "entry";
let abilityName: string = "EntryAbility";

try {
  bundleManager.getAbilityIcon(bundleName, moduleName, abilityName).then((data) => {
    hilog.info(0x0000,'testTag', 'getAbilityIcon successful. Data: %{public}s',JSON.stringify(data));
  }).catch((error: BusinessError) => {
    hilog.error(0x0000,'testTag', 'getAbilityIcon failed. Cause: %{public}s',error.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAbilityIcon failed. Cause: %{public}s', message);
}

```

