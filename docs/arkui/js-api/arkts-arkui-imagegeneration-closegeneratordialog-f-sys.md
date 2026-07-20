# closeGeneratorDialog (System API)

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## closeGeneratorDialog

```TypeScript
function closeGeneratorDialog(uiContext: UIContext): Promise<void>
```

Close the AI image generation task popup.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-imageGeneration-function closeGeneratorDialog(uiContext: UIContext): Promise<void>--><!--Device-imageGeneration-function closeGeneratorDialog(uiContext: UIContext): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | the context of dialog for ui display. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | - Returns the result of close operation. |

