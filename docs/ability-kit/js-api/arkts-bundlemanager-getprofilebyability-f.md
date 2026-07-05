# getProfileByAbility

## getProfileByAbility

```TypeScript
function getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void
```

根据给定的moduleName、abilityName和metadataName（module.json5中 [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串 。使用callback异步回调。 > 说明： > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md#resourceManager)的相 > 关接口，来获取引用的资源。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | 表示Module名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |
| metadataName | string | Yes | 表示UIAbility组件的  [元信息名称](docroot://quick-start/module-configuration-file.md#metadata标签)，即module.json5配置文件中  [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的Array；否则为错误对象。 |

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
let metadataName = 'ability_metadata';

try {
  bundleManager.getProfileByAbility(moduleName, abilityName, metadataName, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}

```

## getProfileByAbility

```TypeScript
function getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>
```

根据给定的moduleName、abilityName和metadataName（module.json5中 [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串 。使用Promise异步回调。 > 说明： > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md#resourceManager)的相 > 关接口，来获取引用的资源。

**Since:** 9

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
| Promise&lt;Array&lt;string>> | Promise对象，返回Array。 |

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
  bundleManager.getProfileByAbility(moduleName, abilityName).then((data) => {
    hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}


import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName = 'entry';
let abilityName = 'EntryAbility';
let metadataName = 'ability_metadata';

try {
  // Obtain the JSON string array of the current application's configuration file based on the module name, ability name, and metadata name.
  bundleManager.getProfileByAbility(moduleName, abilityName, metadataName).then((data) => {
    hilog.info(0x0000, 'testTag', 'getProfileByAbility successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getProfileByAbility failed. Cause: %{public}s', message);
}

```

