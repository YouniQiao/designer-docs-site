# openAppDetailSettingsPage

## openAppDetailSettingsPage

```TypeScript
function openAppDetailSettingsPage(context: Context, bundleName: string, appIndex?: int): void
```

Open the app detail settings page.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Application context. Only UIAbilityContext and UIExtensionContext are supported. |
| bundleName | string | Yes | Application bundle name. |
| appIndex | int | No |  |

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
  settings.openAppDetailSettingsPage(context, 'com.example');
} catch (err) {
  console.error(`Failed to open the app detail settings page. code: ${err?.code}, message: ${err?.message}`);
}

```

