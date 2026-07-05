# TextDataDetectorConfig

This configuration is only available for the [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md#text) and [RichEditor](arkts-arkui-richeditor.md) components.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: ResourceColor
```

Color of the entity after successful text detection. Default value: **'#ff0a59f7'**

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration?: DecorationStyleInterface
```

Decoration style of the entity after successful text detection. Default value: { type: TextDecorationType.Underline, color: same as the entity style: TextDecorationStyle.SOLID }

**Type:** DecorationStyleInterface

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enablePreviewMenu

```TypeScript
enablePreviewMenu?: boolean
```

Whether to enable the preview menu displayed when long-pressing recognized text. The value **true** means to enable the preview menu, and **false** means the opposite. Default value: **false** When [copyOptions](RichEditorAttribute#copyOptions) is set to **None**, even if **enablePreviewMenu** is set to **true**, long-pressing AI entities will not display the preview menu. This API can be properly called on phones and tablets, but has no effect on other devices such as PCs, 2-in-1 devices, TVs, and wearables.

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDetectResultUpdate

```TypeScript
onDetectResultUpdate?: Callback<string>
```

Callback invoked when text recognition succeeds.

**Type:** Callback<string>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## types

```TypeScript
types: TextDataDetectorType[]
```

Entity types for text recognition. Values **null** and **[]** indicate that all types of entities can be recognized.

**Type:** TextDataDetectorType[]

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

