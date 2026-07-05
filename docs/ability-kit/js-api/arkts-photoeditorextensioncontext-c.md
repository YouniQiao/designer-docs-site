# PhotoEditorExtensionContext

The context of Photo Editor extension. It allows access to PhotoEditorExtension-specific resources.

**Inheritance:** PhotoEditorExtensionContextextends: ExtensionContext.

**Since:** 12

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

## saveEditedContentWithImage

```TypeScript
saveEditedContentWithImage(pixeMap: image.PixelMap, option: image.PackingOption): Promise<AbilityResult>
```

Save image data by image pixmap.

**Since:** 12

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixeMap | image.PixelMap | Yes | Image pixmap. |
| option | image.PackingOption | Yes | Option for image packing. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult> | Returns the result of save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Params error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 29600001 | Internal error. |
| 29600002 | Image input error. |
| 29600003 | Image too big. |

## saveEditedContentWithUri

```TypeScript
saveEditedContentWithUri(uri: string): Promise<AbilityResult>
```

Save image data by uri.

**Since:** 12

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Image editing URI. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult> | Returns the result of save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Params error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 29600001 | Internal error. |
| 29600002 | Image input error. |
| 29600003 | Image too big. |

