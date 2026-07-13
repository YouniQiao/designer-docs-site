# CanvasGradient

**CanvasGradient** provides a canvas gradient object.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addColorStop

```TypeScript
addColorStop(offset: number, color: string): void
```

Adds a color stop for the **CanvasGradient** object based on the specified offset
and gradient color.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Relative position of the gradient stop along the gradient vector,represented by the ratio of the distance between the gradient stop and the start pointto the total length. The value ranges from 0 to 1.<br>If the value of **offset** is less than 0 or greater than 1, there is no gradient effect.<br>**undefined** and **null** are treated as invalid values, and the current stop is ignored.**NaN** causes a **CanvasGradient** exception, and **Infinity** causes **CanvasGradient**to be invalid. |
| color | string | Yes | Gradient color to set. For details about the color notation,see the description of the string type in[ResourceColor](arkts-arkui-resourcecolor-t.md).<br>Invalid values result in no gradient effect being displayed. |

## addColorStop

```TypeScript
addColorStop(offset: number, color: string | ColorMetrics): void
```

Adds a color stop for the **CanvasGradient** object based on the specified offset
and gradient color. Colors in RGB or ARGB format can be set. You can set P3 color
gamut values by passing in the
[ColorMetrics](../arkts-apis/arkts-arkui-colormetrics-c.md)
type, which can achieve richer color reproduction on devices that support high color gamut.

> **NOTE**
>
> Only the
> [fillStyle](CanvasRenderingContext2D#fillStyle)
> and
> [strokeStyle](CanvasRenderingContext2D#strokeStyle)
> attributes of the
> [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md)
> object support the **CanvasGradient** object with the P3 wide color gamut. In addition,
> the color gamut mode of the window where the **Canvas** component is located must be set
> to wide color gamut mode **WIDE_GAMUT** via the
> [setWindowColorSpace](Window#setWindowColorSpace)
> method.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Relative position of the gradient stop along the gradient vector,represented by the ratio of the distance between the gradient stop and the start pointto the total length. The value ranges from 0 to 1.<br>If the value of **offset** is less than 0 or greater than 1, there is no gradient effect.<br>**undefined** and **null** are treated as invalid values and are not applied.**NaN** causes a **CanvasGradient** exception, and **Infinity** causes **CanvasGradient**to be invalid. |
| color | string \| ColorMetrics | Yes | Color of the gradient fill.<br>You can use the[colorWithSpace](../arkts-apis/arkts-arkui-colormetrics-c.md#colorwithspace-1)method to construct a color with the color gamut attribute[ColorSpace](arkts-arkui-colorspace-e.md)set to **SRGB** or **DISPLAY_P3**. The color gamut attributes of each gradient ColorMetricsmust be the same. If different color gamut attributes are set, an exception is thrown,and the error code is 103701.<br>**undefined** and **null** are treated as invalid values, and the current stop is ignored. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [103701](../errorcode-canvas.md#103701-parameter-error) | The color's ColorSpace is not the same as the last color's. |

