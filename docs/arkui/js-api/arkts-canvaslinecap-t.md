# CanvasLineCap

```TypeScript
declare type CanvasLineCap = "butt" | "round" | "square"
```

定义绘制每条线段端点的类型。取值类型为下表类型中的并集。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| "butt" | 线条两端为平行线，不额外扩展。 |
| "round" | 在线条两端延伸半个圆，直径等于线宽。 |
| "square" | 在线条两端延伸一个矩形，宽度等于线宽的一半，高度等于线宽。 |

