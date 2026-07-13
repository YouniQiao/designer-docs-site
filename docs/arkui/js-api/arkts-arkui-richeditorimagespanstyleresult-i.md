# RichEditorImageSpanStyleResult

Provides the image span style information returned by the backend.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutStyle

```TypeScript
layoutStyle?: RichEditorLayoutStyle
```

Image layout style.

**Type:** RichEditorLayoutStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
objectFit: ImageFit
```

Scale mode of the image.

**Type:** ImageFit

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size: [number, number]
```

Width and height of the image, in px. Default value: varies by the value of **objectFit**. If the value of
**objectFit** is **Cover**, the image height is the component height minus the top and bottom paddings, and the
image width is the component width minus the left and right paddings.

**Type:** [number, number]

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## verticalAlign

```TypeScript
verticalAlign: ImageSpanAlignment
```

Vertical alignment mode of the image.

**Type:** ImageSpanAlignment

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

