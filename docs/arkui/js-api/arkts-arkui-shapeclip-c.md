# ShapeClip

Sets the clipping shape.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

A constructor used to create a **ShapeClip** instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCircleShape

```TypeScript
setCircleShape(circle: Circle): void
```

Sets a circle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| circle | Circle | Yes | Round shape. |

## setCommandPath

```TypeScript
setCommandPath(path: CommandPath): void
```

Sets the command for drawing a path.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | CommandPath | Yes | Command for drawing a path. |

## setOvalShape

```TypeScript
setOvalShape(oval: Rect): void
```

Sets an oval shape for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oval | Rect | Yes | Oval shape. |

## setRectShape

```TypeScript
setRectShape(rect: Rect): void
```

Sets a rectangle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | Rect | Yes | Shape of the rectangle. |

## setRoundRectShape

```TypeScript
setRoundRectShape(roundRect: RoundRect): void
```

Sets a rounded rectangle for shape clipping.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| roundRect | RoundRect | Yes | Shape of the rectangle with rounded corners. |

