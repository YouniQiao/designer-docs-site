# DrawModifier

Defined the draw modifier of node. Provides draw callbacks for the associated Node.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## drawBehind

```TypeScript
drawBehind?(drawContext: DrawContext): void
```

drawBehind Method. Executed before drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawContent

```TypeScript
drawContent?(drawContext: DrawContext): void
```

drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced if this method is set.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawForeground

```TypeScript
drawForeground(drawContext: DrawContext): void
```

前景绘制，在关联节点和其子节点绘制后执行

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | 用来绘制的drawContext |

## drawFront

```TypeScript
drawFront?(drawContext: DrawContext): void
```

drawFront Method. Executed after drawing associated Node.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | The drawContext used to draw. |

## drawOverlay

```TypeScript
drawOverlay(drawContext: DrawContext): void
```

在关联的Node及其所有子节点绘制完成后，在悬浮层中绘制内容。 自定义绘制包含五个层级：内容背景层、内容层、内容前景层、前景层和悬浮层。 - 前景层和悬浮层在子节点之后绘制。 - 悬浮层与前景层的区别在于：悬浮层可以在组件的边界范围外进行绘制。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawContext | DrawContext | Yes | 用于绘制的drawContext |

## invalidate

```TypeScript
invalidate(): void
```

Invalidate the component, which will cause a re-render of the component.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

