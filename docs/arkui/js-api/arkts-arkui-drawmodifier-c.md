# DrawModifier

Defined the draw modifier of node. Provides draw callbacks for the associated Node.Each DrawModifier instance can be set for only one component. Repeated setting is not allowed.

**Since:** 12

<!--Device-unnamed-declare class DrawModifier--><!--Device-unnamed-declare class DrawModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="drawbehind"></a>
## drawBehind

```TypeScript
drawBehind?(drawContext: DrawContext): void
```

drawBehind Method. Executed before drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DrawModifier-drawBehind?(drawContext: DrawContext): void--><!--Device-DrawModifier-drawBehind?(drawContext: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | [DrawContext](../arkts-apis/arkts-arkui-graphics-drawcontext-c.md) | Yes | The drawContext used to draw. |

<a id="drawcontent"></a>
## drawContent

```TypeScript
drawContent?(drawContext: DrawContext): void
```

drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced if this method is set.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DrawModifier-drawContent?(drawContext: DrawContext): void--><!--Device-DrawModifier-drawContent?(drawContext: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | [DrawContext](../arkts-apis/arkts-arkui-graphics-drawcontext-c.md) | Yes | The drawContext used to draw. |

<a id="drawforeground"></a>
## drawForeground

```TypeScript
drawForeground(drawContext: DrawContext): void
```

drawforeground Method. This method is executed after drawing the associated Node and its children.It allows you to perform additional drawing operations on top of the already rendered content.This can be useful for adding visual elements that should appear above the main content.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-DrawModifier-drawForeground(drawContext: DrawContext): void--><!--Device-DrawModifier-drawForeground(drawContext: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | [DrawContext](../arkts-apis/arkts-arkui-graphics-drawcontext-c.md) | Yes | The drawContext used to draw. |

<a id="drawfront"></a>
## drawFront

```TypeScript
drawFront?(drawContext: DrawContext): void
```

drawFront Method. Executed after drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DrawModifier-drawFront?(drawContext: DrawContext): void--><!--Device-DrawModifier-drawFront?(drawContext: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | [DrawContext](../arkts-apis/arkts-arkui-graphics-drawcontext-c.md) | Yes | The drawContext used to draw. |

<a id="drawoverlay"></a>
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

<!--Device-DrawModifier-drawOverlay(drawContext: DrawContext): void--><!--Device-DrawModifier-drawOverlay(drawContext: DrawContext): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | [DrawContext](../arkts-apis/arkts-arkui-graphics-drawcontext-c.md) | Yes | The drawContext used to draw |

<a id="invalidate"></a>
## invalidate

```TypeScript
invalidate(): void
```

Invalidate the component, which will cause a re-render of the component.No overloading is allowed or needed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DrawModifier-invalidate(): void--><!--Device-DrawModifier-invalidate(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

