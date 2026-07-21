# OffscreenCanvasRenderingContext2D

Use **OffscreenCanvasRenderingContext2D** to draw shapes, images, and text offscreen onto a canvas. Rendering offscreen onto a canvas is a process where content to draw onto the canvas is first drawn in the buffer, and then converted into a picture, and finally the picture is drawn on the canvas. Since off-screen rendering utilizes the CPU, its performance is relatively slow.Therefore, it should be avoided in scenarios where drawing speed is a critical requirement.

> **NOTE**  
>  
> **OffscreenCanvasRenderingContext2D** cannot be used in **ServiceExtensionAbility**. It is  
> recommended that you use the  
> [drawing module](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)  
> for offscreen rendering in **ServiceExtensionAbility**.  
>  
> The following path-related APIs apply only to paths created within  
> **OffscreenCanvasRenderingContext2D** and do not affect paths defined in  
> [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md)  
> or [Path2D](arkts-arkui-path2d-c.md):  
> [beginPath](#beginpath), [moveTo](#moveto), [lineTo](#lineto), [closePath](#closepath),  
> [bezierCurveTo](#beziercurveto), [quadraticCurveTo](#quadraticcurveto), [arc](#arc),  
> [arcTo](#arcto), [ellipse](#ellipse), [rect](#rect), and [roundRect](#roundrect20).

**Inheritance/Implementation:** OffscreenCanvasRenderingContext2D extends [CanvasRenderer](arkts-arkui-canvasrenderer-c.md)

**Since:** 8

<!--Device-unnamed-declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer--><!--Device-unnamed-declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(width: number, height: number, settings?: RenderingContextSettings)
```

Creates an offscreen canvas object. You can configure the canvas width, canvas height, and parameters of the **OffscreenCanvasRenderingContext2D** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-OffscreenCanvasRenderingContext2D-constructor(width: number, height: number, settings?: RenderingContextSettings)--><!--Device-OffscreenCanvasRenderingContext2D-constructor(width: number, height: number, settings?: RenderingContextSettings)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Width of the offscreen canvas.<br>Default unit: vp<br>Invalid values **NaN** and **Infinity** are treated as invalid. |
| height | number | Yes | Height of the offscreen canvas.<br>Default unit: vp<br>Invalid values **NaN** and **Infinity** are treated as invalid. |
| settings | [RenderingContextSettings](arkts-arkui-renderingcontextsettings-c.md) | No | Settings of the **OffscreenCanvasRenderingContext2D** object.<br>The value **undefined** is treated as the default value of [RenderingContextSettings](#renderingcontextsettings).<br>Default value: **null** |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)
```

Creates an offscreen canvas object. You can configure the canvas width, canvas height, and parameters and their unit of the **OffscreenCanvasRenderingContext2D** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-OffscreenCanvasRenderingContext2D-constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)--><!--Device-OffscreenCanvasRenderingContext2D-constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Width of the offscreen canvas.<br>Default unit: vp<br>Invalid values **NaN** and **Infinity** are treated as invalid. |
| height | number | Yes | Height of the offscreen canvas.<br>Default unit: vp<br>Invalid values **NaN** and **Infinity** are treated as invalid. |
| settings | [RenderingContextSettings](arkts-arkui-renderingcontextsettings-c.md) | No | Settings of the **OffscreenCanvasRenderingContext2D** object.<br>The value **undefined** is treated as the default value of [RenderingContextSettings](#renderingcontextsettings).<br>Default value: **null** |
| unit | [LengthMetricsUnit](../arkts-apis/arkts-arkui-graphics-lengthmetricsunit-e.md) | No | Unit of the **OffscreenCanvasRenderingContext2D** object.The value cannot be dynamically changed once set.<br>Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.<br>Default value: **DEFAULT** |

<a id="todataurl"></a>
## toDataURL

```TypeScript
toDataURL(type?: string, quality?: any): string
```

Creates a data URL that contains a representation of an image. This API involves time-consuming memory copy. Therefore, avoid frequent calls to it.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-OffscreenCanvasRenderingContext2D-toDataURL(type?: string, quality?: any): string--><!--Device-OffscreenCanvasRenderingContext2D-toDataURL(type?: string, quality?: any): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | No | Image format.<br>The options are **image/png**, **image/jpeg**, and **image/webp**.<br>Invalid values **undefined** and **null** are treated as the default value.<br>Default value: **image/png** |
| quality | any | No | Image quality, which ranges from 0 to 1, when the image format is **image/jpeg** or **image/webp**. If the set value is beyond the value range,the default value **0.92** is used.<br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treated as the default value.<br>Default value: **0.92** |

**Return value:**

| Type | Description |
| --- | --- |
| string | Image URL. |

<a id="transfertoimagebitmap"></a>
## transferToImageBitmap

```TypeScript
transferToImageBitmap(): ImageBitmap
```

Creates an **ImageBitmap** object from the most recently rendered image of the offscreen canvas.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-OffscreenCanvasRenderingContext2D-transferToImageBitmap(): ImageBitmap--><!--Device-OffscreenCanvasRenderingContext2D-transferToImageBitmap(): ImageBitmap-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [ImageBitmap](arkts-arkui-imagebitmap-c.md) | Pixel data rendered on the offscreen canvas. |

