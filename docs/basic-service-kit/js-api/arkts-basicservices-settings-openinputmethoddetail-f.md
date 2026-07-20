# openInputMethodDetail

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## openInputMethodDetail

```TypeScript
function openInputMethodDetail(context: Context, bundleName: string, inputMethodId: string): void
```

Open the input method detail page.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-settings-function openInputMethodDetail(context: Context, bundleName: string, inputMethodId: string): void--><!--Device-settings-function openInputMethodDetail(context: Context, bundleName: string, inputMethodId: string): void-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Application context. Only UIAbilityContext and UIExtensionContext are supported. |
| bundleName | string | Yes | bundle name of the input method. |
| inputMethodId | string | Yes | id of the input method. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16900010](../../apis-basic-services-kit/errorcode-settings.md#16900010-parameter-check-failed) | Parameter error. |

**Example**

```TypeScript
import { settings } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Go to the input method details page.
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let bundleName: string = "target inputMethod bundle name";
let inputMethodId: string = "target inputMethod id";
settings.openInputMethodDetail(context, bundleName, inputMethodId);

```

