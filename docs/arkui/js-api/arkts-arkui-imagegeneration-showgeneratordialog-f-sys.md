# showGeneratorDialog (System API)

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

<a id="showgeneratordialog"></a>
## showGeneratorDialog

```TypeScript
function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>
```

Open the AI image generation task popup and perform AI image generation operations.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-imageGeneration-function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>--><!--Device-imageGeneration-function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | the context of dialog for ui display. |
| options | [GeneratorDialogOptions](arkts-arkui-imagegeneration-generatordialogoptions-i-sys.md) | No | Generate image task parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GeneratorResult&gt;&gt; | - Returns the result of generated image. |

