# unregisterKeyObserver

## unregisterKeyObserver

```TypeScript
function unregisterKeyObserver(context: Context, name: string, domainName: string): boolean
```

Monitor unregister key(synchronous method) [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and ExtensionContext are supported. |
| name | string | 是 | Indicates the name of the character string. |
| domainName | string | 是 | Indicates the name of the domain name to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let ret = settings.unregisterKeyObserver(context, settings.display.SCREEN_BRIGHTNESS_STATUS,  settings.domainName.DEVICE_SHARED);

```

