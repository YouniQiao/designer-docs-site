# openInputMethodSettings

## openInputMethodSettings

```TypeScript
function openInputMethodSettings(context: Context): void
```

Open the input method settings page.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. Only UIAbilityContext and UIExtensionContext are supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16900010 | Parameter error. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 跳转输入法设置页面。
// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
settings.openInputMethodSettings(context);

```

