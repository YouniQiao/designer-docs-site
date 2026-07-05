# getShortcutInfoByAbility

## getShortcutInfoByAbility

```TypeScript
function getShortcutInfoByAbility(bundleName: string, moduleName: string, abilityName: string, userId?: int, appIndex?: int): Array<ShortcutInfo>
```

查询指定用户下指定UIAbility的快捷方式信息。

**起始版本：** 24

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Launcher

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 表示应用程序的包名。 |
| moduleName | string | 是 | 表示模块的名称。 |
| abilityName | string | 是 | 表示UIAbility组件的名称。 |
| userId | int | 否 |  |
| appIndex | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ShortcutInfo> | Array形式返回指定用户下指定UIAbility的  [ShortcutInfo]./bundleManager/ShortcutInfo:ShortcutInfo。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle is not found. |
| 17700002 | The specified module is not found. |
| 17700003 | The specified ability is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |

**示例：**

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请开发者替换为实际要查询的bundleName、moduleName、abilityName、userId和appIndex。
const bundleName = 'com.example.myapplication';
const moduleName = 'application';
const abilityName = 'ApplicationAbility';
let userId = 100;
let appIndex = 0;

try {
  let shortcutInfos: Array<shortcutManager.ShortcutInfo> = shortcutManager.getShortcutInfoByAbility(bundleName, moduleName, abilityName, userId, appIndex);
  console.info('getShortcutInfoByAbility shortcutInfos is' + JSON.stringify(shortcutInfos));
} catch (err) {
  console.error(`getShortcutInfoByAbility errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}


// 不传入可选参数appIndex
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请开发者替换为实际要查询的bundleName、moduleName、abilityName和userId。
const bundleName = 'com.example.myapplication';
const moduleName = 'application';
const abilityName = 'ApplicationAbility';
let userId = 100;

try {
  let shortcutInfos: Array<shortcutManager.ShortcutInfo> = shortcutManager.getShortcutInfoByAbility(bundleName, moduleName, abilityName, userId);
  console.info('getShortcutInfoByAbility shortcutInfos is' + JSON.stringify(shortcutInfos));
} catch (err) {
  console.error(`getShortcutInfoByAbility errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}


// 不传入可选参数userId和appIndex
import { shortcutManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 请开发者替换为实际要查询的bundleName、moduleName和abilityName。
const bundleName = 'com.example.myapplication';
const moduleName = 'application';
const abilityName = 'ApplicationAbility';

try {
  let shortcutInfos: Array<shortcutManager.ShortcutInfo> = shortcutManager.getShortcutInfoByAbility(bundleName, moduleName, abilityName);
  console.info('getShortcutInfoByAbility shortcutInfos is' + JSON.stringify(shortcutInfos));
} catch (err) {
  console.error(`getShortcutInfoByAbility errData is errCode:${(err as BusinessError).code}  message:${(err as BusinessError).message}`);
}

```

