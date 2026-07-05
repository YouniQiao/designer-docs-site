# setValueSync

## setValueSync

```TypeScript
function setValueSync(dataAbilityHelper: DataAbilityHelper, name: string, value: string): boolean
```

Set settingsdata value(synchronous method)

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.settings#setValueSync

**需要权限：** 

 ohos.permission.MANAGE_SETTINGS

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | 是 | Indicates dataAbilityHelper instance. |
| name | string | 是 | Indicates the name of the character string. |
| value | string | 是 | Indicates the value of the character string. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

**示例：**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';

// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。
let uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);
let helper = featureAbility.acquireDataAbilityHelper(uri);
let ret:string = settings.setValueSync(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, '100');

```

## setValueSync

```TypeScript
function setValueSync(context: Context, name: string, value: string): boolean
```

Set settingsdata value(synchronous method)

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_SETTINGS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | 是 | Indicates the name of the character string. |
| value | string | 是 | Indicates the value of the character string. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let ret = settings.setValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100');

```

## setValueSync

```TypeScript
function setValueSync(context: Context, name: string, value: string, domainName: string): boolean
```

Set settingsdata value(synchronous method). [DEVICE_SHARED, USER_PROPERTY] domain need ohos.permission.MANAGE_SETTINGS permission. [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_SECURE_SETTINGS or ohos.permission.MANAGE_SETTINGS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | 是 | Indicates the name of the character string. |
| value | string | 是 | Indicates the value of the character string. |
| domainName | string | 是 | Indicates the name of the domain name to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 更新数据项亮度的值(该数据项在数据库中已存在，故setValueSync方法将更新该数据项的值)。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let ret = settings.setValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100', settings.domainName.DEVICE_SHARED);

```

