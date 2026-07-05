# PhotoEditorExtensionContext

The context of Photo Editor extension. It allows access to PhotoEditorExtension-specific resources.

**Inheritance/Implementation:** PhotoEditorExtensionContext extends [ExtensionContext](arkts-ability-extensioncontext-c.md#extensioncontext)

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
| Promise&lt;AbilityResult&gt; | Returns the result of save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Params error. Possible causes: 1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [29600001](../errorcode-ability.md#29600001-internal-error-during-image-editing) | Internal error. |
| [29600002](../errorcode-ability.md#29600002-internal-error-during-image-editing) | Image input error. |
| [29600003](../errorcode-ability.md#29600003-image-too-large) | Image too big. |

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
| Promise&lt;AbilityResult&gt; | Returns the result of save. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Params error. Possible causes: 1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [29600001](../errorcode-ability.md#29600001-internal-error-during-image-editing) | Internal error. |
| [29600002](../errorcode-ability.md#29600002-internal-error-during-image-editing) | Image input error. |
| [29600003](../errorcode-ability.md#29600003-image-too-large) | Image too big. |

