# DrawModifier

Defined the draw modifier of node. Provides draw callbacks for the associated Node.
Each DrawModifier instance can be set for only one component. Repeated setting is not allowed.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## drawBehind

```TypeScript
drawBehind?(drawContext: DrawContext): void
```

drawBehind Method. Executed before drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawContent

```TypeScript
drawContent?(drawContext: DrawContext): void
```

drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced
if this method is set.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawForeground

```TypeScript
drawForeground(drawContext: DrawContext): void
```

drawforeground Method. This method is executed after drawing the associated Node and its children.
It allows you to perform additional drawing operations on top of the already rendered content.
This can be useful for adding visual elements that should appear above the main content.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawFront

```TypeScript
drawFront?(drawContext: DrawContext): void
```

drawFront Method. Executed after drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawOverlay

```TypeScript
drawOverlay(drawContext: DrawContext): void
```

Draws content in the overlay layer after the associated Node and all its children have been drawn.

Custom drawing consists of five layers: Behind, Content, Front, Foreground, and Overlay.

- The Foreground and Overlay layers are drawn after child nodes.
- The Overlay layer differs from Foreground in that it can draw outside the bounds of the component.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw |

## invalidate

```TypeScript
invalidate(): void
```

Invalidate the component, which will cause a re-render of the component.
No overloading is allowed or needed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

