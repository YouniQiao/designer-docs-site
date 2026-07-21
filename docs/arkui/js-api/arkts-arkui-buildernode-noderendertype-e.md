# NodeRenderType

Enumerates the node rendering types.

**Since:** 11

<!--Device-unnamed-export declare enum NodeRenderType--><!--Device-unnamed-export declare enum NodeRenderType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RENDER_TYPE_DISPLAY

```TypeScript
RENDER_TYPE_DISPLAY = 0
```

The node is displayed on the screen.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeRenderType-RENDER_TYPE_DISPLAY = 0--><!--Device-NodeRenderType-RENDER_TYPE_DISPLAY = 0-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RENDER_TYPE_TEXTURE

```TypeScript
RENDER_TYPE_TEXTURE = 1
```

The node is exported as a texture.

> **NOTE**  
>  
> - Currently, the **RENDER_TYPE_TEXTURE** type takes effect only for the  
> [XComponentNode](arkts-arkui-xcomponentnode-c.md) and  
> the [BuilderNode](arkts-arkui-buildernode-c.md) holding a component tree whose root node is a custom component.  
>  
> - The following custom components currently support texture export as root nodes in  
> [BuilderNode](arkts-arkui-buildernode-c.md) scenarios: [Badge](../arkts-components/arkts-arkui-badge.md), [Blank](../arkts-components/arkts-arkui-blank.md), [Button](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-mouseevent-button-e.md),  
> [CanvasGradient](../arkts-components/arkts-arkui-canvas.md), [CanvasPattern](../arkts-components/arkts-arkui-canvas.md), [CanvasRenderingContext2D](../arkts-components/arkts-arkui-canvas.md),  
> [Canvas](../arkts-components/arkts-arkui-canvas.md), [CheckboxGroup](../arkts-components/arkts-arkui-checkboxgroup.md), [Checkbox](../arkts-components/arkts-arkui-checkbox.md), [Circle](arkts-arkui-graphics-circle-i.md),  
> [ColumnSplit](../arkts-components/arkts-arkui-columnsplit.md), [Column](../arkts-components/arkts-arkui-column.md), [ContainerSpan](../arkts-components/arkts-arkui-containerspan.md),  
> [Counter](../arkts-components/arkts-arkui-counter.md), [DataPanel](../arkts-components/arkts-arkui-datapanel.md), [Divider](../arkts-components/arkts-arkui-divider.md), [Ellipse](../arkts-components/arkts-arkui-ellipse.md),  
> [Flex](../arkts-components/arkts-arkui-flex.md), [Gauge](../arkts-components/arkts-arkui-gauge.md), [Hyperlink](../arkts-components/arkts-arkui-hyperlink.md), [ImageBitmap](../arkts-components/arkts-arkui-canvas.md),  
> [ImageData](../arkts-components/arkts-arkui-canvas.md), [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md), [Line](../arkts-components/arkts-arkui-line.md), [LoadingProgress](../arkts-components/arkts-arkui-loadingprogress.md),  
> [Marquee](../arkts-components/arkts-arkui-marquee.md), [Matrix2D](../arkts-components/arkts-arkui-canvas.md), [OffscreenCanvasRenderingContext2D](../arkts-components/arkts-arkui-canvas.md),  
> [OffscreenCanvas](../arkts-components/arkts-arkui-canvas.md), [Path2D](../arkts-components/arkts-arkui-canvas.md), [Path](../arkts-components/arkts-arkui-path.md), [PatternLock](../arkts-components/arkts-arkui-patternlock.md),  
> [Polygon](../arkts-components/arkts-arkui-polygon.md), [Polyline](../arkts-components/arkts-arkui-polyline.md), [Progress](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-progress-i.md), [QRCode](../arkts-components/arkts-arkui-qrcode.md),  
> [Radio](../../apis-telephony-kit/arkts-apis/arkts-telephony-radio.md), [Rating](../arkts-components/arkts-arkui-rating.md), [Rect](../../apis-test-kit/arkts-apis/arkts-test-uitest-rect-i.md), [RelativeContainer](../arkts-components/arkts-arkui-relativecontainer.md),  
> [RowSplit](../arkts-components/arkts-arkui-rowsplit.md), [Row](../arkts-components/arkts-arkui-row.md), [Shape](../arkts-components/arkts-arkui-shape.md), [Slider](../arkts-components/arkts-arkui-slider.md), [Span](../arkts-components/arkts-arkui-span.md),  
> [Stack](../../apis-arkts/arkts-apis/arkts-arkts-util-stack-stack-c.md), [TextArea](../arkts-components/arkts-arkui-textarea.md), [TextClock](../arkts-components/arkts-arkui-textclock.md), [TextInput](../arkts-components/arkts-arkui-textinput.md),  
> [TextTimer](../arkts-components/arkts-arkui-texttimer.md), [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md), [Toggle](../arkts-components/arkts-arkui-toggle.md), [Video](../arkts-components/arkts-arkui-video.md) (excluding full-  
> screen playback), [Web](../../apis-arkweb/arkts-components/arkts-arkweb-web.md), [XComponent](../arkts-components/arkts-arkui-xcomponent.md).  
>  
> - Since API version 12, the following components also support texture export: [DatePicker](../arkts-components/arkts-arkui-datepicker.md),  
> [ForEach](../arkts-components/arkts-arkui-foreach.md), [Grid](../arkts-components/arkts-arkui-grid.md),  
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md), [LazyForEach](../arkts-components/arkts-arkui-lazyforeach.md),  
> [List](../../apis-arkts/arkts-apis/arkts-arkts-util-list-list-c.md), [Scroll](../arkts-components/arkts-arkui-scroll.md), [Swiper](../arkts-components/arkts-arkui-swiper.md), [TimePicker](../arkts-components/arkts-arkui-timepicker.md), custom  
> components decorated with [@Component](docroot://ui/state-management/arkts-create-custom-components.md#component),  
> [NodeContainer](../arkts-components/arkts-arkui-nodecontainer.md), and [FrameNode](arkts-arkui-framenode-c.md) and  
> [RenderNode](arkts-arkui-rendernode-c.md) mounted to [NodeContainer](../arkts-components/arkts-arkui-nodecontainer.md).  
>  
> - For details, see [Rendering and Drawing Video and Button Components at the Same Layer](docroot://web/web-same-layer.md).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NodeRenderType-RENDER_TYPE_TEXTURE = 1--><!--Device-NodeRenderType-RENDER_TYPE_TEXTURE = 1-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

