# getAbilityInfo

## getAbilityInfo

```TypeScript
function getAbilityInfo(uri: string, abilityFlags: int): Promise<Array<AbilityInfo>>
```

获取指定资源标识符和组件信息标志对应的Ability信息。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_ABILITY_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 表示统一资源标识符URI，取值与  [module.json5配置文件中skills下的uris字段](docroot://quick-start/module-configuration-file.md#skills标签)相对应。 |
| abilityFlags | int | Yes | 表示[Ability组件信息标志](arkts-bundlemanager-abilityflag-e-sys.md#AbilityFlag)，指示需要获取的  Ability组件信息的内容。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AbilityInfo>> | Promise对象，返回获取到的Ability信息数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 17700003 | The ability is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let abilityFlags = bundleManager.AbilityFlag.GET_ABILITY_INFO_WITH_APPLICATION;
let uri = "https://www.example.com";

try {
  bundleManager.getAbilityInfo(uri, abilityFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'getAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'getAbilityInfo failed. Cause: %{public}s', message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAbilityInfo failed. Cause: %{public}s', message);
}

```

