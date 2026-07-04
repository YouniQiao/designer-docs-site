# hideGeneratorDialog (System API)

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## hideGeneratorDialog

```TypeScript
function hideGeneratorDialog(uiContext: UIContext): Promise<void>
```

Hide the AI image generation task popup.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | The context of dialog for ui display. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the result of hide operation. |

