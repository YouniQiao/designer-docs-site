# ShapeClip

Sets the clipping shape.

**Since:** 12

<!--Device-unnamed-export declare class ShapeClip--><!--Device-unnamed-export declare class ShapeClip-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

A constructor used to create a **ShapeClip** instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeClip-constructor()--><!--Device-ShapeClip-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCircleShape

```TypeScript
setCircleShape(circle: Circle): void
```

Sets a circle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeClip-setCircleShape(circle: Circle): void--><!--Device-ShapeClip-setCircleShape(circle: Circle): void-End-->

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

<!--Device-ShapeClip-setCommandPath(path: CommandPath): void--><!--Device-ShapeClip-setCommandPath(path: CommandPath): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [CommandPath](arkts-arkui-graphics-commandpath-i.md) | Yes | Command for drawing a path. |

## setOvalShape

```TypeScript
setOvalShape(oval: Rect): void
```

Sets an oval shape for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeClip-setOvalShape(oval: Rect): void--><!--Device-ShapeClip-setOvalShape(oval: Rect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oval | [Rect](../../apis-form-kit/arkts-apis/arkts-form-forminfo-rect-i.md) | Yes | Oval shape. |

## setRectShape

```TypeScript
setRectShape(rect: Rect): void
```

Sets a rectangle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeClip-setRectShape(rect: Rect): void--><!--Device-ShapeClip-setRectShape(rect: Rect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | [Rect](../../apis-form-kit/arkts-apis/arkts-form-forminfo-rect-i.md) | Yes | Shape of the rectangle. |

## setRoundRectShape

```TypeScript
setRoundRectShape(roundRect: RoundRect): void
```

Sets a rounded rectangle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ShapeClip-setRoundRectShape(roundRect: RoundRect): void--><!--Device-ShapeClip-setRoundRectShape(roundRect: RoundRect): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| roundRect | [RoundRect](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-drawing-roundrect-c.md) | Yes | Shape of the rectangle with rounded corners. |

