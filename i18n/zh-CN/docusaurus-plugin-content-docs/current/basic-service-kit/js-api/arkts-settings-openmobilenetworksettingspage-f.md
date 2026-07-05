# openMobileNetworkSettingsPage

## openMobileNetworkSettingsPage

```TypeScript
function openMobileNetworkSettingsPage(context: Context): void
```

Open the mobile network settings page.

**起始版本：** 26.0.0

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
| 16900020 | Failed to open the settings page via redirection. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  settings.openMobileNetworkSettingsPage(context);
} catch (err) {
  console.error(`Failed to open the mobile network settings page. code: ${err?.code}, message: ${err?.message}`);
}

```

