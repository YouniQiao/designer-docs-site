# CanvasRenderingContext2D

After the **CanvasRenderingContext2D** object is bound to the **Canvas** component, you can draw
shapes, texts, and images on the **Canvas** component.

> **NOTE**
>
> * It is recommended that the **CanvasRenderingContext2D** object and the **Canvas** component be
> encapsulated into the same custom component, ensuring a one-to-one correspondence and consistent
> lifecycle between them.
>
> * When you call drawing APIs in this module, the commands are stored in the associated **Canvas**
> component's command queue. These commands are only executed when the current frame enters the
> rendering phase and the associated **Canvas** component is visible. Therefore, when the **Canvas**
> component is invisible (for example, off-screen or hidden), avoid frequent drawing calls to prevent
> command queue buildup and excessive memory usage. For best practices, see
> [Controlling Canvas Rendering Based on Component Visibility](../../../../ui/arkts-drawing-customization-on-canvas.md#controlling-canvas-rendering-based-on-component-visibility).
>
> * The following path-related APIs apply only to paths created within **CanvasRenderingContext2D**
> and do not affect paths defined in
> [OffscreenCanvasRenderingContext2D](arkts-arkui-offscreencanvasrenderingcontext2d-c.md)
> or [Path2D](arkts-arkui-path2d-c.md):
> [beginPath](#beginpath), [moveTo](#moveto), [lineTo](#lineto), [closePath](#closepath),
> [bezierCurveTo](#beziercurveto), [quadraticCurveTo](#quadraticcurveto), [arc](#arc),
> [arcTo](#arcto), [ellipse](#ellipse), [rect](#rect), and [roundRect](#roundrect20).
>
> * When the width or height of the **Canvas** component exceeds 8000 px, rendering via the CPU
> causes significant performance degradation.

**Inheritance/Implementation:** CanvasRenderingContext2D extends [CanvasRenderer](arkts-arkui-canvasrenderer-c.md)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(settings?: RenderingContextSettings)
```

Constructs a canvas object, which supports configuration of parameters for the
**CanvasRenderingContext2D** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settings | RenderingContextSettings | No | Settings of the **CanvasRenderingContext2D**object. For details, see [RenderingContextSettings](#renderingcontextsettings).<br>If the value is **undefined** or **null**, the default value of[RenderingContextSettings](#renderingcontextsettings) is used. |

## constructor

```TypeScript
constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit)
```

Creates a **CanvasRenderingContext2D** object, allowing for initial configuration of rendering
parameters and unit mode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settings | RenderingContextSettings | No | Settings of the **CanvasRenderingContext2D**object. For details, see [RenderingContextSettings](#renderingcontextsettings).<br>If the value is **undefined** or **null**, the default value of[RenderingContextSettings](#renderingcontextsettings) is used. |
| unit | LengthMetricsUnit | No | Unit mode of the **CanvasRenderingContext2D** object.The value cannot be dynamically changed once set.<br>Invalid values **undefined**, **NaN** and **Infinity** are treated as the default value.<br>Default value: **DEFAULT**. |

## getContext2DFromDrawingContext

```TypeScript
static getContext2DFromDrawingContext(drawingContext: DrawingRenderingContext, options?: RenderingContextOptions): CanvasRenderingContext2D
```

Obtains a **CanvasRenderingContext2D** object from a **DrawingRenderingContext** object.
This **CanvasRenderingContext2D** object is bound to the same **Canvas** component as the
input **DrawingRenderingContext** object.

> **NOTE**
>
> - The **CanvasRenderingContext2D** object obtained via this API cannot be used as a
> parameter to create a [Canvas](Canvas)
> component. Otherwise, the application crashes.
>
> - If the input **DrawingRenderingContext** object is not bound to a **Canvas** component,
> an error code is returned.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawingContext | DrawingRenderingContext | Yes | An object of the **DrawingRenderingContext**type.<br>**undefined** and **null** are treated as invalid values. |
| options | RenderingContextOptions | No | Configuration options of the rendering context.<br>Default value: **{ antialias: false }** |

**Return value:**

| Type | Description |
| --- | --- |
| CanvasRenderingContext2D | - Returns a **CanvasRenderingContext2D** object that isbound to the same **Canvas** component as the input **DrawingRenderingContext**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [103702](../errorcode-canvas.md#103702-drawing-context-is-not-bound-to-any-canvas-component) | The drawingContext is not bound to a canvas component. |

## off('onAttach')

```TypeScript
off(type: 'onAttach', callback?: Callback<void>): void
```

Unsubscribes from the event when a **CanvasRenderingContext2D** object is bound to
a **Canvas** component.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'onAttach' | Yes | Event type, which is **'onAttach'** in this case.<br>**undefined** and **null** are treated as invalid values. |
| callback | Callback&lt;void&gt; | No | If this parameter is left empty, all callbackstriggered after the **CanvasRenderingContext2D** object is bound to the **Canvas**component are unsubscribed.<br>If this parameter is not left empty, the callbackcorresponding to the bind event is unsubscribed.<br>**undefined** and **null** aretreated as invalid values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

## off('onDetach')

```TypeScript
off(type: 'onDetach', callback?: Callback<void>): void
```

Unsubscribes from the event when a **CanvasRenderingContext2D** object is unbound from
a **Canvas** component.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'onDetach' | Yes | Event type, which is **'onDetach'** in this case.<br>**undefined** and **null** are treated as invalid values. |
| callback | Callback&lt;void&gt; | No | If this parameter is left empty, all callbackstriggered after the **CanvasRenderingContext2D** object is unbound from the **Canvas**component are unsubscribed.<br>If this parameter is not left empty, the callbackcorresponding to the unbind event is unsubscribed.<br>**undefined** and **null** aretreated as invalid values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

## on('onAttach')

```TypeScript
on(type: 'onAttach', callback: Callback<void>): void
```

Subscribes to the event when a **CanvasRenderingContext2D** object is bound to
a **Canvas** component.

> **NOTE**
>
> A **CanvasRenderingContext2D** object can only be bound to one **Canvas** component
> at a time.<br>
> When a **CanvasRenderingContext2D** object is bound to a **Canvas** component, the
> **onAttach** callback is triggered, indicating that the
> [canvas](arkts-arkui-canvasrenderingcontext2d-c.md#canvas)
> object is accessible.<br>
> Avoid performing drawing operations in the **onAttach** callback. Make sure the
> **Canvas** component has completed its
> [onReady](CanvasAttribute#onReady)
> event before performing any drawing.<br>
> The **onAttach** callback is triggered when:<br>
> 1. A **Canvas** component is created and bound to a **CanvasRenderingContext2D**
> object.<br>
> 2. A **CanvasRenderingContext2D** object is bound to a new **Canvas** component.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'onAttach' | Yes | Event type, which is **'onAttach'** in this case.<br>**undefined** and **null** are treated as invalid values. |
| callback | Callback&lt;void&gt; | Yes | Callback triggered when the **CanvasRenderingContext2D**object is bound to the **Canvas** component.<br>**undefined** and **null** are treated asinvalid values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

## on('onDetach')

```TypeScript
on(type: 'onDetach', callback: Callback<void>): void
```

Subscribes to the event when a **CanvasRenderingContext2D** object is unbound from
a **Canvas** component.

> **NOTE**
>
> When a **CanvasRenderingContext2D** object is unbound from a **Canvas** component,
> the **onDetach** callback is triggered. In this case, cease any drawing operations.<br>
> The **onDetach** callback is triggered when:<br>
> 1. A **Canvas** component is destroyed and unbound from a **CanvasRenderingContext2D**
> object.<br>
> 2. A **CanvasRenderingContext2D** object is bound to a different **Canvas** component,
> causing the existing binding to be released.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'onDetach' | Yes | Event type, which is **'onDetach'** in this case.<br>**undefined** and **null** are treated as invalid values. |
| callback | Callback&lt;void&gt; | Yes | Callback triggered when the **CanvasRenderingContext2D**object is unbound from the **Canvas** component.<br>**undefined** and **null** are treatedas invalid values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

## startImageAnalyzer

```TypeScript
startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>
```

Configures and starts the AI analyzer. This API uses a promise to return the result.
Before use, set [enableAnalyzer](CanvasAttribute#enableAnalyzer)
to **true** to enable the image AI analyzer.<br>Because the image frame used for analysis is
the one captured when this API is called, pay attention to the invoking time of this API.<br>
Repeated calls to this method before completion trigger an error callback. For the sample code,
see the code for **stopImageAnalyzer**.

> **NOTE**
>
> The image analysis type cannot be dynamically modified.
> When image changes are detected, the analysis result is automatically destroyed. You can
> call this API again to start analysis.
> This API depends on device capabilities. If it is called on an incompatible device, an
> error code is returned.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ImageAnalyzerConfig | Yes | Settings of the AI analyzer.<br>**undefined** and**null** are treated as invalid values. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [110001](../arkui-ts/errorcode-image-analyzer.md#110001-ai-image-analysis-not-supported) | Image analysis feature is unsupported. |
| [110002](../arkui-ts/errorcode-image-analyzer.md#110002-ai-image-analysis-already-in-progress) | Image analysis is currently being executed. |
| [110003](../arkui-ts/errorcode-image-analyzer.md#110003-ai-image-analysis-terminated) | Image analysis is stopped. |

## stopImageAnalyzer

```TypeScript
stopImageAnalyzer(): void
```

Stops AI image analysis. The content displayed by the AI image analyzer will be destroyed.

> **NOTE**
>
> If this API is called when the **startImageAnalyzer** API has not yet returned any result,
> an error is reported.
> This feature depends on device capabilities.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## toDataURL

```TypeScript
toDataURL(type?: string, quality?: any): string
```

Creates a data URL that contains a representation of an image. This API involves
time-consuming memory copy. Therefore, avoid frequent calls to it.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | No | Image format.<br>The options are **image/png**, **image/jpeg**, and **image/webp**.<br>Invalid values **undefined** and **null** are treated as the default value.<br>Default value: **image/png** |
| quality | any | No | Image quality, which ranges from 0 to 1, when the image formatis **image/jpeg** or **image/webp**. If the set value is beyond the value range,the default value **0.92** is used.<br>Invalid values **undefined**, **null**, **NaN**, and **Infinity** are treatedas the default value.<br>Default value: **0.92** |

**Return value:**

| Type | Description |
| --- | --- |
| string | Image URL. |

## canvas

```TypeScript
readonly canvas: FrameNode
```

FrameNode instance of the **Canvas** component associated with **CanvasRenderingContext2D**.
It can be used to listen for the visibility status of the associated **Canvas** component.

Default value: **null**

**Type:** FrameNode

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
readonly height: number
```

Component height.

Default unit: vp

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
readonly width: number
```

Component width.

Default unit: vp

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

