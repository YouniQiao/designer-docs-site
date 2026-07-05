# openDoubleClickSettingsPage

## openDoubleClickSettingsPage

```TypeScript
function openDoubleClickSettingsPage(context: Context): void
```

1. Opens the settings page for double-pressing the Down key. 2. This API is used to set the default application started by double-pressing the Down key.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 1. Application context.  2. Specify this parameter to set the application started by double-pressing the Down key. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16900010 | 1. The parameter is incorrect.  2. The parameter is not transferred or the transferred parameter is invalid. |
| 16900020 | 1. The setting page cannot be opened through redirection.  2. Internal error |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  settings.openDoubleClickSettingsPage(context);
} catch (err) {
  console.error(`Failed to open the DoubleClick settings page. code: ${err?.code}, message: ${err?.message}`);
}

```

