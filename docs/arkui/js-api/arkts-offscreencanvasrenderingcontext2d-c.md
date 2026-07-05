# OffscreenCanvasRenderingContext2D

使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。 离屏绘制是指将需要绘制的内容先绘制在缓存区，然后将其转换成图片，一次性绘制到Canvas上。 离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。 > **说明：** > > OffscreenCanvasRenderingContext2D无法在ServiceExtensionAbility中使用， > ServiceExtensionAbility中建议使用 > [Drawing模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md) > 进行离屏绘制。 > > beginPath、moveTo、lineTo、closePath、bezierCurveTo、quadraticCurveTo、arc、arcTo、ellipse、rect和 > roundRect接口只能对OffscreenCanvasRenderingContext2D中的路径生效，无法对 > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md) > 和[Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md) > 对象中设置的路径生效。

**Inheritance:** OffscreenCanvasRenderingContext2Dextends: CanvasRenderer.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(width: number, height: number, settings?: RenderingContextSettings)
```

构造离屏Canvas画布对象，支持配置画布宽高和OffscreenCanvasRenderingContext2D对象的参数。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | 离屏画布的宽度，默认单位：vp。  异常值NaN和Infinity按无效值处理。 |
| height | number | Yes | 离屏画布的高度，默认单位：vp。  异常值NaN和Infinity按无效值处理。 |
| settings | RenderingContextSettings | No | 用来配置OffscreenCanvasRenderingContext2D对象的参数，  见RenderingContextSettings接口描述。  异常值undefined按RenderingContextSettings的默认值处理。  默认值：null。 |

## constructor

```TypeScript
constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)
```

构造离屏Canvas画布对象，支持配置画布宽高、OffscreenCanvasRenderingContext2D对象的参数和单位模式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | 离屏画布的宽度，默认单位：vp。  异常值NaN和Infinity按无效值处理。 |
| height | number | Yes | 离屏画布的高度，默认单位：vp。  异常值NaN和Infinity按无效值处理。 |
| settings | RenderingContextSettings | No | 用来配置OffscreenCanvasRenderingContext2D对象的参数，  见RenderingContextSettings接口描述。  异常值undefined按RenderingContextSettings的默认值处理。  默认值：null。 |
| unit | LengthMetricsUnit | No |  |

## toDataURL

```TypeScript
toDataURL(type?: string, quality?: any): string
```

生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | No | 用于指定图像格式。  可选参数为："image/png"，"image/jpeg"，"image/webp"。  异常值undefined或null按默认值处理。  默认值：image/png。 |
| quality | any | No | 在指定图片格式为image/jpeg或image/webp的情况下，  可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。  异常值undefined、null、NaN和Infinity按默认值处理。  默认值：0.92。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 图像的URL地址。 |

## transferToImageBitmap

```TypeScript
transferToImageBitmap(): ImageBitmap
```

在离屏画布最近渲染的图像上创建一个ImageBitmap对象。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| ImageBitmap | 存储离屏画布上渲染的像素数据。 |

