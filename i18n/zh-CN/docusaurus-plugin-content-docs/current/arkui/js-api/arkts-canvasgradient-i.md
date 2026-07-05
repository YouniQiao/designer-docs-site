# CanvasGradient

You can create a gradient object on the canvas by calling CanvasRenderingContext2D.createLinearGradient().

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## addColorStop

```TypeScript
addColorStop(offset: number, color: string): void
```

Adds a color stop for the CanvasGradient object based on the specified offset and gradient color.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | number | 是 | Proportion of the distance between the color stop and the start point to the total length.  The value ranges from 0 to 1. |
| color | string | 是 | Sets the gradient color. |

