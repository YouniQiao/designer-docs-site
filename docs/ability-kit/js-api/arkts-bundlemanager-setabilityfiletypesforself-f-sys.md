# setAbilityFileTypesForSelf

## setAbilityFileTypesForSelf

```TypeScript
function setAbilityFileTypesForSelf(moduleName: string, abilityName: string, fileTypes: Array<string>): void
```

设置当前应用支持打开的文件类型。

**Since:** 22

**Required permissions:** 

 ohos.permission.MANAGE_SELF_SKILLS

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | 表示模块的名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |
| fileTypes | Array&lt;string> | Yes | 表示文件类型。fileTypes数组长度不能超过1024，每个元素不能超过512个字符，元素取值为  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)中的值，元素不能为空、通配符、  general.object。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700002 | The specified moduleName is not found. |
| 17700003 | The specified abilityName is not found. |
| 17700351 | Invalid fileTypes. Possible causes:  1. The array length exceeds 1024;  2. The array contains an empty item;  3. An item exceeds 512 characters;  4. The array contains wildcard or general.object. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let moduleName: string = "entry";
let abilityName: string = "EntryAbility";
let fileTypes: Array<string> = ["general.png", "general.jpeg"];

try {
  bundleManager.setAbilityFileTypesForSelf(moduleName, abilityName, fileTypes);
  hilog.info(0x0000, 'testTag', 'setAbilityFileTypesForSelf successfully');
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setAbilityFileTypesForSelf failed. Cause: %{public}s', message);
}

```

