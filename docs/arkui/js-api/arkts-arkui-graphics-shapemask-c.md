# ShapeMask

Describes the shape mask.

**Since:** 12

<!--Device-unnamed-export declare class ShapeMask--><!--Device-unnamed-export declare class ShapeMask-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

A constructor used to create a **ShapeMask** instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-constructor()--><!--Device-ShapeMask-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCircleShape

```TypeScript
setCircleShape(circle: Circle): void
```

Sets a round mask.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-setCircleShape(circle: Circle): void--><!--Device-ShapeMask-setCircleShape(circle: Circle): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| circle | [Circle](arkts-arkui-graphics-circle-i.md) | Yes | Round shape. |

## setCommandPath

```TypeScript
setCommandPath(path: CommandPath): void
```

Sets the command for drawing a path.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-setCommandPath(path: CommandPath): void--><!--Device-ShapeMask-setCommandPath(path: CommandPath): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [CommandPath](arkts-arkui-graphics-commandpath-i.md) | Yes | Command for drawing a path. |

## setOvalShape

```TypeScript
setOvalShape(oval: Rect): void
```

Sets an oval mask.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-setOvalShape(oval: Rect): void--><!--Device-ShapeMask-setOvalShape(oval: Rect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oval | [Rect](../../apis-form-kit/arkts-apis/arkts-form-forminfo-rect-i.md) | Yes | Oval shape. |

## setRectShape

```TypeScript
setRectShape(rect: Rect): void
```

Sets a rectangle mask.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-setRectShape(rect: Rect): void--><!--Device-ShapeMask-setRectShape(rect: Rect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | [Rect](../../apis-form-kit/arkts-apis/arkts-form-forminfo-rect-i.md) | Yes | Shape of the rectangle. |

## setRoundRectShape

```TypeScript
setRoundRectShape(roundRect: RoundRect): void
```

Sets the mask in the shape of a rectangle with rounded corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-setRoundRectShape(roundRect: RoundRect): void--><!--Device-ShapeMask-setRoundRectShape(roundRect: RoundRect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| roundRect | [RoundRect](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-drawing-roundrect-c.md) | Yes | Shape of the rectangle with rounded corners. |

## fillColor

```TypeScript
fillColor: number
```

Describes the fill color of the mask, in ARGB format. The default value is **0XFF000000**.

A color with only the transparency is generated based on the transparency and brightness of **fillColor**. The higher the brightness, the more transparent the color. Then, the color is blended with the color of **RenderNode** using the [BlendMode.SRC_IN](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-drawing-blendmode-e.md) API to generate the final color.

**Type:** number

**Default:** 0XFF000000

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-fillColor: number--><!--Device-ShapeMask-fillColor: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeColor

```TypeScript
strokeColor: number
```

Sets the stroke color for the mask, in ARGB format. The default value is **0XFF000000**.

A color with only the transparency is generated based on the transparency and brightness of **strokeColor**. The higher the brightness, the more transparent the color. Then, the color is blended with the color of **RenderNode** using the [BlendMode.SRC_IN](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-drawing-blendmode-e.md) API to generate the final color.

**Type:** number

**Default:** 0XFF000000

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-strokeColor: number--><!--Device-ShapeMask-strokeColor: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth: number
```

Sets the stroke width for the mask, in px. The default value is **0**.

**Type:** number

**Default:** 0

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeMask-strokeWidth: number--><!--Device-ShapeMask-strokeWidth: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

