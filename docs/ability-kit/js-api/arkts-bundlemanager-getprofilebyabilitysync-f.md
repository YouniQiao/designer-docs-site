# getProfileByAbilitySync

## getProfileByAbilitySync

```TypeScript
function getProfileByAbilitySync(moduleName: string, abilityName: string, metadataName?: string): Array<string>
```

以同步方法根据给定的moduleName、abilityName和metadataName（module.json5中 [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串，返回对象为string数 组。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | 表示Module名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |
| metadataName | string | No | 表示UIAbility组件的元信息名称，即module.json5配置文件中  [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name，默认值为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 数组对象，返回Array。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700002 | The specified moduleName is not existed. |
| 17700003 | The specified abilityName is not existed. |
| 17700024 | Failed to get the profile because there is no profile in the HAP. |
| 17700029 | The specified ability is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';

try {
  // Obtain the JSON string array of the configuration file based on the module name and ability name.
  let data = bundleManager.getProfileByAbilitySync(moduleName, abilityName);
  hilog.info(0x0000, 'testTag', 'getProfileByAbilitySync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getProfileByAbilitySync failed. Cause: %{public}s', message);
}


import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName: string = 'entry';
let abilityName: string = 'EntryAbility';
let metadataName: string = 'ability_metadata';

try {
  // Obtain the JSON string array of the configuration file based on the module name, ability name, and metadata name.
  let data = bundleManager.getProfileByAbilitySync(moduleName, abilityName, metadataName);
  hilog.info(0x0000, 'testTag', 'getProfileByAbilitySync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getProfileByAbilitySync failed. Cause: %{public}s', message);
}

```

