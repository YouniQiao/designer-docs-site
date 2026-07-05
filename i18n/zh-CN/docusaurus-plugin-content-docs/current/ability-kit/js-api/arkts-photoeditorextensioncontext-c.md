# PhotoEditorExtensionContext

The context of Photo Editor extension. It allows access to PhotoEditorExtension-specific resources.

**继承实现关系：** PhotoEditorExtensionContext继承自：ExtensionContext。

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

## saveEditedContentWithImage

```TypeScript
saveEditedContentWithImage(pixeMap: image.PixelMap, option: image.PackingOption): Promise<AbilityResult>
```

Save image data by image pixmap.

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pixeMap | image.PixelMap | 是 | Image pixmap. |
| option | image.PackingOption | 是 | Option for image packing. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityResult> | Returns the result of save. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Image editing URI. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityResult> | Returns the result of save. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Params error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 29600001 | Internal error. |
| 29600002 | Image input error. |
| 29600003 | Image too big. |

