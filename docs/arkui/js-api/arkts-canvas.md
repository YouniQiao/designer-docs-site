# canvas

提供画布组件，用于自定义绘制图形。

## canvas

```TypeScript
canvas(context?: CanvasRenderingContext2D | DrawingRenderingContext)
```

创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D \| DrawingRenderingContext | No | CanvasRenderingContext2D：不支持多个Canvas共用一个CanvasRenderingContext2D对象，  具体描述见[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)  对象。DrawingRenderingContext：不支持多个Canvas共用一个DrawingRenderingContext对象，  具体描述见[DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md)  对象。  异常值null和undefined按未设置context处理。 |

```TypeScript
canvas(context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions)
```

创建Canvas组件，支持设置CanvasRenderingContext2D对象或DrawingRenderingContext对象，支持设置AI分析选项。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D \| DrawingRenderingContext | Yes | CanvasRenderingContext2D：不支持多个Canvas共用一个CanvasRenderingContext2D对象，  具体描述见[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)  对象。DrawingRenderingContext：不支持多个Canvas共用一个DrawingRenderingContext对象，  具体描述见[DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md)  对象。  异常值null和undefined按未设置context处理。 |
| imageAIOptions | ImageAIOptions | Yes | 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。  异常值null和undefined按  [ImageAIOptions](docroot://reference/apis-arkui/arkui-ts/ts-image-common.md#imageaioptions12)  的默认值处理，默认取值为{ type: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT],  aiController: new ImageAnalyzerController() }，即开启主体识别和文字识别功能。 |

```TypeScript
canvas(params: CanvasParams)
```

使用CanvasParams创建不缓存指令的Canvas组件。创建Canvas组件时，最大面积不超过10000px*10000px， 超过最大面积则无法正常创建。 > **说明：** > > - 使用本接口创建的Canvas组件将在onReady回调的入参中返回一个 > [DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md) > 对象，可用于在该Canvas组件上进行绘制。 > > - 使用这个接口创建的Canvas组件在组件不可见时将不响应绘制指令。 > > - 不可见场景主要包括组件所在的页面进入后台、组件滑到窗口外、设置 > [visibility](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-visibility.md#visibility) > 属性为隐藏等，不包括组件被其他组件或是其他窗口遮挡导致不可见的场景。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | CanvasParams | Yes | Canvas组件的构造参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CanvasAttribute](arkts-canvasattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性： 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持如下事件： |
| [CanvasGradient](arkts-canvasgradient-c.md) | 渐变对象。 |
| [CanvasPath](arkts-canvaspath-c.md) | 路径对象，提供基本的路径绘制方法。路径相关API的详细说明请参见CanvasRenderingContext2D中的描述。 |
| [CanvasRenderer](arkts-canvasrenderer-c.md) | CanvasRenderingContext2D对象与Canvas组件绑定后，可在Canvas组件上绘制，绘制对象可以是形状、文本、图片等。 > **说明：** > > * 建议使用时将CanvasRenderingContext2D对象与Canvas组件封装到同一个自定义组件中，保证两者一一对应且生命周期保持一致。 > > * 本文绘制接口在调用时会存入被关联的Canvas组件的指令队列中。仅当当前帧进入渲染阶段且关联的Canvas组件处于可见状态时， > 这些指令才会从队列中被提取并执行。因此，在Canvas组件不可见的情况下，应尽量避免频繁调用绘制接口， > 以防止指令在队列中堆积，从而避免内存占用过大的问题。 > > * Canvas组件的宽或高超过8000px时使用CPU渲染，会导致性能明显下降。 |
| [CanvasRenderingContext2D](arkts-canvasrenderingcontext2d-c.md) | CanvasRenderingContext2D对象与Canvas组件绑定后，可在Canvas组件上绘制，绘制对象可以是形状、文本、图片等。 > **说明：** > > * 建议使用时将CanvasRenderingContext2D对象与Canvas组件封装到同一个自定义组件中，保证两者一一对应且生命周期保持一致。 > > * 本文绘制接口在调用时会存入被关联的Canvas组件的指令队列中。仅当当前帧进入渲染阶段且关联的Canvas组件处于可见状态时， > 这些指令才会从队列中被提取并执行。因此，在Canvas组件不可见的情况下，应尽量避免频繁调用绘制接口， > 以防止指令在队列中堆积，从而避免内存占用过大的问题。 > > * beginPath、moveTo、lineTo、closePath、bezierCurveTo、quadraticCurveTo、arc、arcTo、ellipse、rect和 > roundRect接口只能对CanvasRenderingContext2D中的路径生效，无法对OffscreenCanvasRenderingContext2D和 > Path2D对象中设置的路径生效。 > > * Canvas组件的宽或高超过8000px时使用CPU渲染，会导致性能明显下降。 |
| [DrawingRenderingContext](arkts-drawingrenderingcontext-c.md) | DrawingRenderingContext对象与Canvas组件绑定后，可在Canvas组件上进行绘制，绘制对象可以是形状、文本、图片等。 |
| [ImageBitmap](arkts-imagebitmap-c.md) | ImageBitmap对象可以存储canvas渲染的像素数据。从API version 11开始，当应用创建 [Worker线程](docroot://arkts-utils/worker-introduction.md)，支持使用postMessage将ImageBitmap实例传到 Worker中进行绘制，并使用onmessage接收Worker线程发送的绘制结果进行显示。 |
| [ImageData](arkts-imagedata-c.md) | ImageData对象可以存储canvas渲染的像素数据。 > **说明：** > > 创建ImageData时，宽高不超过16384px，最大面积不超过16000px*16000px，超过最大面积则无法正常绘制。 > 当创建面积超过536870911px时，返回值的width和height均为0px，data为undefined。 |
| [OffscreenCanvas](arkts-offscreencanvas-c.md) | OffscreenCanvas组件用于绘制自定义图形。 使用[Canvas](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)组件或 [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md) 对象时，渲染、动画和用户交互通常发生在应用程序的主线程上，与画布动画和渲染相关的计算可能会影响 应用程序性能。OffscreenCanvas提供了一个可以在屏幕外渲染的画布，这样可以在单独的线程中运行一些任务， 从而避免影响应用程序主线程性能。 > **说明：** > > OffscreenCanvas无法在ServiceExtensionAbility中使用，ServiceExtensionAbility中建议使用 > [Drawing模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md) > 进行离屏绘制。 ## 子组件 不支持。 |
| [OffscreenCanvasRenderingContext2D](arkts-offscreencanvasrenderingcontext2d-c.md) | 使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。 离屏绘制是指将需要绘制的内容先绘制在缓存区，然后将其转换成图片，一次性绘制到Canvas上。 离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。 > **说明：** > > OffscreenCanvasRenderingContext2D无法在ServiceExtensionAbility中使用， > ServiceExtensionAbility中建议使用 > [Drawing模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md) > 进行离屏绘制。 > > beginPath、moveTo、lineTo、closePath、bezierCurveTo、quadraticCurveTo、arc、arcTo、ellipse、rect和 > roundRect接口只能对OffscreenCanvasRenderingContext2D中的路径生效，无法对 > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md) > 和[Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md) > 对象中设置的路径生效。 |
| [Path2D](arkts-path2d-c.md) | 路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口或者fill接口进行绘制。 > **说明：** > > Path2D对象不支持重置已设置的路径，如需新路径可重新创建一个空的Path2D对象。 > > Path2D对象的方法无法对 > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md) > 和 > [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md) > 对象中设置的路径生效。 |
| [RenderingContextSettings](arkts-renderingcontextsettings-c.md) | 用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CanvasInterface](arkts-canvasinterface-i.md) | 提供画布组件，用于自定义绘制图形。 |
| [CanvasParams](arkts-canvasparams-i.md) | 定义Canvas的具体配置参数。 |
| [CanvasPattern](arkts-canvaspattern-i.md) | 一个Object对象，使用 [createPattern](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#createpattern) 方法创建，通过指定图像和重复方式创建图片填充的模板。 |
| [RenderingContextOptions](arkts-renderingcontextoptions-i.md) | 定义渲染上下文的具体配置参数。 |
| [Size](arkts-size-i.md) | DrawingRenderingContext的尺寸信息。 |
| [TextMetrics](arkts-textmetrics-i.md) | 文本的尺寸信息。 |

### Types

| Name | Description |
| --- | --- |
| [CanvasDirection](arkts-canvasdirection-t.md) | 定义当前文本方向的类型。取值类型为下表类型中的并集。 |
| [CanvasFillRule](arkts-canvasfillrule-t.md) | 定义用于确定点是在路径内还是路径外的填充样式算法的类型。取值类型为下表类型中的并集。 |
| [CanvasLineCap](arkts-canvaslinecap-t.md) | 定义绘制每条线段端点的类型。取值类型为下表类型中的并集。 |
| [CanvasLineJoin](arkts-canvaslinejoin-t.md) | 定义长度不为0的两个连接部分（线段、圆弧和曲线）的类型。取值类型为下表类型中的并集。 |
| [CanvasTextAlign](arkts-canvastextalign-t.md) | 定义文本对齐方式的类型。取值类型为下表类型中的并集。 |
| [CanvasTextBaseline](arkts-canvastextbaseline-t.md) | 定义文本基线类型。取值类型为下表类型中的并集。 |
| [DrawingCanvas](arkts-drawingcanvas-t.md) | 可用于向DrawingRenderingContext上绘制内容的画布对象。 |
| [FrameNode](arkts-framenode-t.md) | Import the frame node type object for Canvas. |
| [ImageSmoothingQuality](arkts-imagesmoothingquality-t.md) | 定义图片平滑度类型。取值类型为下表类型中的并集。 |

### Constants

| Name | Description |
| --- | --- |
| [Canvas](arkts-canvas-con.md#Canvas) | 提供画布组件，用于自定义绘制图形。 |
| [CanvasInstance](arkts-canvas-con.md#CanvasInstance) | 提供画布组件，用于自定义绘制图形。 |

