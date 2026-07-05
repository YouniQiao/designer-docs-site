# showGeneratorDialog

## showGeneratorDialog

```TypeScript
function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>
```

Open the AI image generation task popup and perform AI image generation operations.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | the context of dialog for ui display. |
| options | GeneratorDialogOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GeneratorResult>> | - Returns the result of generated image. |

