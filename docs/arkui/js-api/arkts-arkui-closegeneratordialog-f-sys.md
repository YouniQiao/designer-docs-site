# closeGeneratorDialog (System API)

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## closeGeneratorDialog

```TypeScript
function closeGeneratorDialog(uiContext: UIContext): Promise<void>
```

Close the AI image generation task popup.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | the context of dialog for ui display. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Returns the result of close operation. |

