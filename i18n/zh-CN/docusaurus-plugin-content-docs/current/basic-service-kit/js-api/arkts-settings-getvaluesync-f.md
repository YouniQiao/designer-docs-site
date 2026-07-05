# getValueSync

## getValueSync

```TypeScript
function getValueSync(dataAbilityHelper: DataAbilityHelper, name: string, defValue: string): string
```

Get value from settingsdata(synchronous method)

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.settings#getValueSync

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | 是 | Indicates dataAbilityHelper instance. |
| name | string | 是 | Indicates the name of the character string. |
| defValue | string | 是 | Indicates the default value of the character string. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns settingsdata value. |

**示例：**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';

// 获取数据项亮度的值(该数据项在数据库中已存在)。
let uri:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);
let helper = featureAbility.acquireDataAbilityHelper(uri);
let value:string = settings.getValueSync(helper, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');

```

## getValueSync

```TypeScript
function getValueSync(context: Context, name: string, defValue: string): string
```

Get value from settingsdata(synchronous method)

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | 是 | Indicates the name of the character string. |
| defValue | string | 是 | Indicates the default value of the character string. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns settingsdata value. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 获取数据项亮度的值(该数据项在数据库中已存在)。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '10');

```

## getValueSync

```TypeScript
function getValueSync(context: Context, name: string, defValue: string, domainName: string): string
```

Get value from settingsdata(synchronous method). [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | 是 | Indicates the name of the character string. |
| defValue | string | 是 | Indicates the default value of the character string. |
| domainName | string | 是 | Indicates the name of the domain name to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns settingsdata value. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 更新数据项亮度的值(该数据项在数据库中已存在)。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let value = settings.getValueSync(context, settings.display.SCREEN_BRIGHTNESS_STATUS, '100',  settings.domainName.DEVICE_SHARED);

```

