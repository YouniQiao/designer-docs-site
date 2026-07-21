# Canvas

The **Canvas** component can be used to customize drawings.


## Canvas

```TypeScript
Canvas(context?: CanvasRenderingContext2D | DrawingRenderingContext)
```

Creates a **Canvas** component. The maximum allowed size cannot exceed 10000 px × 10000 px.If the size exceeds this limit, the **Canvas** component will fail to be created.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CanvasInterface-(context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute--><!--Device-CanvasInterface-(context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md) \| DrawingRenderingContext | No | 2D rendering context for a canvas. <br>**CanvasRenderingContext2D**: Canvases cannot share one **CanvasRenderingContext2D** object. **DrawingRenderingContext**: Canvases cannot share one **DrawingRenderingContext** object. <br>If the value is **null** or **undefined**, **context** is considered unset.  |

## Canvas

```TypeScript
Canvas(context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions)
```

Creates a **Canvas** component. You can specify a **CanvasRenderingContext2D** or **DrawingRenderingContext** object, along with AI image analysis options.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CanvasInterface-(context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute--><!--Device-CanvasInterface-(context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [CanvasRenderingContext2D](arkts-arkui-canvasrenderingcontext2d-c.md) \| DrawingRenderingContext | Yes | 2D rendering context for a canvas. <br>**CanvasRenderingContext2D**: Canvases cannot share one **CanvasRenderingContext2D** object. **DrawingRenderingContext**: Canvases cannot share one **DrawingRenderingContext** object. <br>If the value is **null** or **undefined**, **context** is considered unset.  |
| imageAIOptions | [ImageAIOptions](../arkts-apis/arkts-arkui-imageaioptions-i.md) | Yes | AI image analysis options. You can configure the analysis type or bind an analyzer controller through this parameter. <br>If the value is **null** or **undefined**, the default value of **ImageAIOptions** is used.  |

## Canvas

```TypeScript
Canvas(params: CanvasParams)
```

Creates a **Canvas** component that does not cache commands using **CanvasParams**.The maximum allowed size cannot exceed 10000 px × 10000 px. If the size exceeds this limit,the **Canvas** component will fail to be created.

> **NOTE**  
>  
> * The **Canvas** component created using this API will return a DrawingRenderingContext  
> object in the input parameter of the onReady callback, which can be used for drawing on the  
> **Canvas** component.  
>  
> * The **Canvas** component created using this API will not respond to drawing commands  
> when it is not visible.  
>  
> * Scenarios where the component is not visible mainly include: the page containing the  
> component moves to the background, the component slides outside the window, or the  
> [visibility]{@link CommonMethod#visibility}  
> attribute is set to hidden. This does not include scenarios where the component is obscured  
> by other components or windows.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CanvasInterface-(params: CanvasParams): CanvasAttribute--><!--Device-CanvasInterface-(params: CanvasParams): CanvasAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [CanvasParams](arkts-arkui-canvasparams-i.md) | Yes | Construction parameters of the **Canvas** component.  |

## Summary

- [CanvasParams](arkts-arkui-canvas-canvasparams-i.md)
- [CanvasPattern](arkts-arkui-canvas-canvaspattern-i.md)
- [RenderingContextOptions](arkts-arkui-canvas-renderingcontextoptions-i.md)
- [Size](arkts-arkui-canvas-size-i.md)
- [TextMetrics](arkts-arkui-canvas-textmetrics-i.md)
- [CanvasDirection](arkts-arkui-canvas-canvasdirection-t.md)
- [CanvasFillRule](arkts-arkui-canvas-canvasfillrule-t.md)
- [CanvasLineCap](arkts-arkui-canvas-canvaslinecap-t.md)
- [CanvasLineJoin](arkts-arkui-canvas-canvaslinejoin-t.md)
- [CanvasTextAlign](arkts-arkui-canvas-canvastextalign-t.md)
- [CanvasTextBaseline](arkts-arkui-canvas-canvastextbaseline-t.md)
- [DrawingCanvas](arkts-arkui-canvas-drawingcanvas-t.md)
- [FrameNode](arkts-arkui-canvas-framenode-t.md)
- [ImageSmoothingQuality](arkts-arkui-canvas-imagesmoothingquality-t.md)
