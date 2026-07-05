# openAboutDeviceSettingsPage

## openAboutDeviceSettingsPage

```TypeScript
function openAboutDeviceSettingsPage(context: Context): void
```

Open the about device settings page.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. Only UIAbilityContext and UIExtensionContext are supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16900010 | Parameter error. |
| 16900020 | Failed to open the settings page via redirection. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
try {
  settings.openAboutDeviceSettingsPage(context);
} catch (err) {
  console.error(`Failed to open the about device settings page. code: ${err?.code}, message: ${err?.message}`);
}

```

