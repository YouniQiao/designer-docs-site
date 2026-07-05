# ImageAttribute

Image为图片组件，常用于在应用中显示图片。Image支持加载[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)、 [ResourceStr]ResourceStr和[DrawableDescriptor](arkts-drawabledescriptor-t.md#DrawableDescriptor)类型的数据源， 支持png、jpg、jpeg、bmp、 svg、webp、gif、heif和tiff类型的图片格式，不支持apng和svga格式。 > **说明：** > - 从API version 23开始，图片类型新增支持tiff格式。 > > - 该组件从API版本26.0.0开始支持[WithTheme]./with_theme。 > > - 使用快捷组合键对Image组件复制时，Image组件必须处于获焦状态，如何获焦请参考[设置组件是否可获焦] > (docroot://ui/arkts-common-events-focus-event.md#设置组件是否可获焦)。Image组件默认不获焦， > 需将[focusable]CommonMethod#focusable属性设置为true，即可使用Tab键将焦点切换到组件上，再将 > [focusOnTouch]CommonMethod#focusOnTouch属性设置为true，即可实现点击获焦。 > > - 图片格式支持SVG图源，SVG标签文档请参考[SVG标签说明]./common。 > > - 动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时， > 通过回调启动动画，当节点不可见时，停止动画。 > 可见性状态的判断是通过[onVisibleAreaChange] > {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} > 事件触发的，当可见阈值ratios大于0时，表明Image处于可见状态。 > > - Image组件播放GIF动图时，帧时长取自GIF文件中各帧的delay time字段。当某帧的时长值小于等于0时， > 系统会将其修正为100ms； > 当某帧的时长值大于0时，系统直接使用该原始值，不做最小帧时长限制。 > > - 如果图片加载过程中出现白色块，请参考[Image白块问题解决方案] > (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution)。 > 如果图片加载时间过长， > 请参考[预置图片资源加载优化] > (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve- > performance#section91526132216)。 >

**Inheritance:** ImageAttributeextends: CommonMethod<ImageAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alt

```TypeScript
alt(value: string | Resource | PixelMap)
```

设置图片加载过程中显示的占位图。 占位图支持使用[objectFit](arkts-imageattribute-c.md#objectFit)设置填充效果，与图片的填充效果一致。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置 该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource \| PixelMap | Yes | 设置图片加载过程中显示的占位图，  支持本地图片（png、jpg、bmp、svg、gif和  heif类型），支持[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)类型图片，不支持网络图片。  - 支持`Base64`字符串。  - 支持file://路径前缀的字符串，应用沙箱URI：file:///。  应用沙箱路径URI构造可参考[constructor]  {@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用[fileUri.getUriFromPath(path)]  {@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，然后传入显示。  同时需要保证目录包路径下的  文件有可读权限。  默认值：null  由有效值（可正常解析并加载的图片资源）切换为无效值（无法解析或加载的图片路径）时，  组件保持显示此前成功加载的图片内容，  不进行清除或重置操作。 [since 12] |

## alt

```TypeScript
alt(src: ResourceStr | PixelMap | ImageAlt)
```

设置图片加载过程中和加载失败时的占位图。 > **说明：** > > 通过[ImageAlt](arkts-imagealt-i.md#ImageAlt)配置占位图时，Image会根据用户配置的加载过程中和加载失败的占位图源生效， > 未配置时默认不显示。 占位图支持使用[objectFit](arkts-imageattribute-c.md#objectFit)设置填充效果，与图片的填充效果一致。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | ResourceStr \| PixelMap \| ImageAlt | Yes | 设置图片加载过程中和加载失败时的占位图，  支持本地图片（png、jpg、bmp、svg、  gif和heif类型），支持[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)类型图片，不支持网络图片。  - 支持`Base64`字符串。  - 支持file://路径前缀的字符串，应用沙箱URI：file:///。  应用沙箱路径URI构造可参考[constructor]  {@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用[fileUri.getUriFromPath(path)]  {@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，然后传入显示。  同时需要保证目录包路径下的文  件有可读权限。 |

## analyzerConfig

```TypeScript
analyzerConfig(config: ImageAnalyzerConfig)
```

设置AI分析类型，包括主体识别和文字识别功能，默认全部开启。分析类型不支持动态修改。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ImageAnalyzerConfig | Yes | AI分析类型。 |

## antialiased

```TypeScript
antialiased(isAntialiased: Optional<boolean>)
```

设置位图图片边缘是否开启抗锯齿。未通过该接口设置时，默认不开启抗锯齿。SVG类型图片不支持该属性。 > **说明：** > > 如果图片设置了背景色属性([backgroundColor]CommonMethod#backgroundColor(value: ResourceColor))， > 图片的抗锯齿属性 > 设置为true不会影响背景色的锯齿效果。 > > 和[resizable](arkts-imageattribute-c.md#resizable)一起使用时，该属性不生效。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAntialiased | Optional&lt;boolean> | Yes | 设置位图图片边缘是否开启抗锯齿。  true表示开启边缘抗锯齿；false表示不开启边缘  抗锯齿。设置为undefined时，不开启边缘抗锯齿。 |

## autoResize

```TypeScript
autoResize(value: boolean)
```

设置图片解码过程中是否对图源自动缩放。降采样解码时图片的部分信息丢失， 因此可能会导致图片质量的下降（如：出现锯齿），这时可以选择把 autoResize设为false，按原图尺寸解码，提升显示效果，但会增加内存占用。 原图尺寸和显示尺寸不匹配时，图片都会出现些许的失真、模糊。最佳清晰度配置建议： 图片缩小显示时：.autoResize(false) + .interpolation(.Medium) 图片放大显示时：.interpolation(.High) 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 和SVG时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 图片解码过程中是否对图源自动缩放。设置为true时，  组件会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少  内存占用。如原图大小为800x1200，而显示区域大小为200x200，  则图片会降采样解码到200x300的尺寸（实际计算过程中会依赖缩放和填充类型的配  置，从而得到的计算结果会有差异），从而大幅度节省图片占用的内存。  默认值：false，false表示关闭图源自动缩放，true表示开启图源自动缩放。 |

## colorFilter

```TypeScript
colorFilter(value: ColorFilter | DrawingColorFilter)
```

为图像设置颜色滤镜效果。 设置该属性时，[renderMode](arkts-imageattribute-c.md#renderMode)属性设置不生效。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ColorFilter \| DrawingColorFilter | Yes | 1. 给图像设置颜色滤镜效果，入参为一个的4x5的RGBA转换矩阵。  2. 从API version12开始支持@ohos.graphics.drawing的ColorFilter类型作为入参。  说明：  API version 11及之前，SVG类型图源不支持该属性。  从API version 12开始，该接口中的DrawingColorfilter类型支持在原子化服务中使用。  其中，SVG类型的图源只有设置了stroke属性  （无论是否有值）才会生效。 从API version 21开始，  当[supportSvg2](arkts-imageattribute-c.md#supportSvg2)属性设置为true时，  colorFilter属性对整个SVG图源起作用。 [since 9 - 11] |

## colorFilter

```TypeScript
colorFilter(value: ColorFilter | DrawingColorFilter | ResourceColor)
```

为图像设置颜色滤镜效果。 设置该属性时，[renderMode](arkts-imageattribute-c.md#renderMode)属性设置不生效。 当值为[ResourceColor]ResourceColor类型时， 它将被转换为带有混合模式的[DrawingColorFilter](arkts-drawingcolorfilter-t.md#DrawingColorFilter)。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ColorFilter \| DrawingColorFilter \| ResourceColor | Yes | 图像颜色的滤镜值。  [ColorFilter]ColorFilter、[DrawingColorFilter](arkts-drawingcolorfilter-t.md#DrawingColorFilter)类型及SVG图源的相关说明，请参考  [colorFilter]ImageAttribute#colorFilter(value: ColorFilter \| DrawingColorFilter)的接口说明。  [ResourceColor]ResourceColor类型的输入颜色值，默认按照[DrawingColorFilter](arkts-drawingcolorfilter-t.md#DrawingColorFilter).  [createBlendModeColorFilter]@ohos.graphics.drawing:drawing.ColorFilter.createBlendModeColorFilter  (color: common2D.Color, mode: BlendMode)的SRC_ATOP模式进行绘制。 |

## contentTransition

```TypeScript
contentTransition(transition: ContentTransitionEffect)
```

图片内容发生变化时，触发过渡动效。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transition | ContentTransitionEffect | Yes | 过渡动效的类型。  其中取值为ContentTransitionEffect.OPACITY表示淡入淡出效果，取值为  ContentTransitionEffect.IDENTITY表示无动画效果。  默认值：ContentTransitionEffect.IDENTITY  设置为undefined或null时，取默认值ContentTransitionEffect.IDENTITY。  说明：对动态图片资源不生效。 |

## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

设置图片是否可复制。当copyOption设置为非CopyOptions.None时，支持使用长按、鼠标右击、 快捷组合键'CTRL+C'等方式进行复制。 SVG图片不支持复制。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CopyOptions | Yes | 图片是否可复制。 默认值：CopyOptions.None |

## draggable

```TypeScript
draggable(value: boolean)
```

设置组件默认拖拽效果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 组件默认拖拽效果，设置为true时，组件可拖拽，绑定的长按手势不生效。  API version 9及之前，默认值为false。API version 10及之后，默认值为true。  若用户需要设置自定义手势，则需要将draggable设置为false。设置为false之后，拖拽类事件不再触发。 |

## dynamicRangeMode

```TypeScript
dynamicRangeMode(value: DynamicRangeMode)
```

设置期望展示的图像动态范围。SVG类型图源不支持该属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DynamicRangeMode | Yes | 图像显示的动态范围。 默认值：DynamicRangeMode.STANDARD |

## edgeAntialiasing

```TypeScript
edgeAntialiasing(value: number)
```

设置SVG图源抗锯齿效果，仅对SVG图源生效。取值范围为$(0.333, 1.333]$，有效数字保留小数点后3位。 适用于超低分辨率设备（PPI低于200的设备）的SVG图源的锯齿优化，存在一定的性能影响，请谨慎使用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | SVG图源抗锯齿效果。 默认值：0.0 |

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。<!--RP3--><!--RP3End--> 不能和[overlay]CommonMethod#overlay属性同时使用，两者同时设置时overlay中 [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性将失效。该特性依赖设备能力。 分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析， 支持传入[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)进 行分析，目前仅支持[RGBA_8888](../../apis-image-kit/arkts-apis/arkts-image-pixelmapformat-e.md#PixelMapFormat)类型，使用方式见 [示例5（开启图像AI分析）] (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例5开启图像ai分析)。 [alt](arkts-imageattribute-c.md#alt)占位图不支持分析， [objectRepeat](arkts-imageattribute-c.md#objectRepeat)属性仅在取值为ImageRepeat.NoRepeat时支持分析，隐私遮罩属性 [obscured]CommonMethod#obscured打开时不支持分析。 基于完整原始图像进行分析，设置[clip]CommonMethod#clip(value: boolean)、 [margin]CommonMethod#margin、 [borderRadius]CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)、 [position]CommonMethod#position和[objectFit](arkts-imageattribute-c.md#objectFit)属性导致图像显示不完整，或使用 [renderMode](arkts-imageattribute-c.md#renderMode)设置蒙层，仍基于完整原始图像进行分析。 [copyOption] {@link ImageAttribute#copyOption}属性不影响AI分析功能。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。 > **说明：** > > - 需要配置权限：ohos.permission.INTERNET。 > > - 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Image组件是否支持AI分析。  设置为true时，Image组件支持AI分析。设置为false时，Image组件不支持AI分析。默认值：false |

## enhancedImageQuality

```TypeScript
enhancedImageQuality(imageQuality: ResolutionQuality)
```

设置图像解码时的图像解码分辨率选项。 该属性不支持 svg、[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)和 [DrawableDescriptor](arkts-drawabledescriptorloadedresult-i.md#DrawableDescriptorLoadedResult) 等非解码图片类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageQuality | ResolutionQuality | Yes | 图像解码分辨率质量。 默认值：ResolutionQuality.Low |

## fillColor

```TypeScript
fillColor(value: ResourceColor)
```

设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用 [colorFilter](arkts-imageattribute-c.md#colorFilter)。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 设置填充颜色。  说明：  默认不对组件进行填充。当传入异常值时，系统将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。  从API version 21开始，当[supportSvg2](arkts-imageattribute-c.md#supportSvg2)设置为true时，  fillColor依赖SVG图源中fill属性  的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。当supportSvg2设置为false时，  fillColor生效，替换SVG图片中所有可  绘制元素的填充颜色。 |

## fillColor

```TypeScript
fillColor(color: ResourceColor | ColorContent)
```

设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用 [colorFilter](arkts-imageattribute-c.md#colorFilter)。 如果想重置填充颜色可以传入 [ColorContent](arkts-colorcontent-c.md#ColorContent)类型。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor \| ColorContent | Yes | 设置填充颜色。 说明：  默认不对组件进行填充。当传入异常值时，系统  将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。  从API version 21开始，当[supportSvg2](arkts-imageattribute-c.md#supportSvg2)设置为true时，  fillColor依赖SVG图源中fill属  性的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。 |

## fillColor

```TypeScript
fillColor(color: ResourceColor | ColorContent | ColorMetrics)
```

设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用 [colorFilter](arkts-imageattribute-c.md#colorFilter)。 如果想重置填充颜色可以传入 [ColorContent](arkts-colorcontent-c.md#ColorContent)类型。支持通过传入[ColorMetrics]../../../arkui/Graphics:ColorMetrics 类型设置 P3色域颜色值<!--Del-->，从API version 24开始，支持BT2020色域颜色值<!--DelEnd-->， 可在支持高色域的设备上获得更丰富的色彩表现。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor \| ColorContent \| ColorMetrics | Yes | 设置填充颜色。  说明：  默认不对组件进行填充。当传入异常值时，系统将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。  从API version 21开始，当[supportSvg2](arkts-imageattribute-c.md#supportSvg2)设置为true时，  fillColor依赖SVG图源中fill属性的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。 |

## fitOriginalSize

```TypeScript
fitOriginalSize(value: boolean)
```

设置图片的显示尺寸是否跟随图源尺寸。 图片组件已设置width、height属性时，fitOriginalSize属性不生效。 当组件的参数类型为[AnimatedDrawableDescriptor] {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 图片的显示尺寸是否跟随图源尺寸。  默认值：false  说明：  当不设置fitOriginalSize或者设置fitOriginalSize为false时，组件显示大小不跟随图源大小。  当设置fitOriginalSize为true时，组件显示大小跟随图源大小。 |

## hdrBrightness

```TypeScript
hdrBrightness(brightness: number)
```

设置组件在显示HDR图片时的亮度。 SVG类型图源不支持该属性。 该属性与[dynamicRangeMode](arkts-imageattribute-c.md#dynamicRangeMode)属性同时设置时， [dynamicRangeMode](arkts-imageattribute-c.md#dynamicRangeMode)属性不生效。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | number | Yes | 用于调整组件展示HDR图片的亮度，该接口仅对HDR图源生效。  默认值：1.0  取值范围：[0.0，1.0]，小于0和大于1.0时取1.0。0表示图片按照SDR亮度显示，  1.0表示图片按照当前允许的最高HDR亮度显示。 |

## imageMatrix

```TypeScript
imageMatrix(matrix: ImageMatrix)
```

设置图片的变换矩阵。通过[ImageMatrix](arkts-imageattribute-c.md#imageMatrix)对象使用平移、旋转、缩放等函数， 实现宫格缩略图的最佳呈现。 SVG类型图源不支持该属性。 设置[resizable](arkts-imageattribute-c.md#resizable)、[objectRepeat](arkts-imageattribute-c.md#objectRepeat)属性时， 该属性设置不生 效。该属性只针对图源做处理，不会触发Image组件的回调事件。 该属性与[objectFit](arkts-imageattribute-c.md#objectFit)属性强关联，仅在 [objectFit](arkts-imageattribute-c.md#objectFit)属性设置为 ImageFit.MATRIX时生效。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | ImageMatrix | Yes | 图片的变换矩阵。 |

## interpolation

```TypeScript
interpolation(value: ImageInterpolation)
```

定义图片插值效果。用于优化图片缩放时的锯齿问题。SVG类型图源不支持该属性。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageInterpolation | Yes | 图片的插值效果。  默认值：ImageInterpolation.Low  设置undefined时，取值为ImageInterpolation.None。 |

## matchTextDirection

```TypeScript
matchTextDirection(value: boolean)
```

设置图片是否跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 图片是否跟随系统语言方向。  默认值：false，false表示图片不跟随系统语言方向，true表示图片跟随系统语言方向，  在RTL语言环境下显示镜像翻转显示效果。 |

## objectFit

```TypeScript
objectFit(value: ImageFit)
```

设置图片的填充效果。未通过该接口设置时，默认为ImageFit.Cover，保持宽高比进行缩小或者放大。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageFit | Yes | 图片的填充效果。 |

## objectRepeat

```TypeScript
objectRepeat(value: ImageRepeat)
```

设置图片的重复样式，从中心点向两边重复，剩余空间不足放下一张图片时会截断。SVG类型图源不支持该属性。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageRepeat | Yes | 图片的重复样式。 默认值：ImageRepeat.NoRepeat |

## onComplete

```TypeScript
onComplete(
    callback: (event?: {
      /**
       * The width of the image source.
       *
       ****/
      /**
       * The width of the image source.
       *
       *****/
      /**
       * The width of the image source.
       *
       ******/
      /**
       * The width of the image source.
       *
       *******/
      width: number;
      /**
       * The height of the image source.
       *
       ****/
      /**
       * The height of the image source.
       *
       *****/
      /**
       * The height of the image source.
       *
       ******/
      /**
       * The height of the image source.
       *
       *******/
      height: number;
      /**
       * The width of the component source.
       *
       ****/
      /**
       * The width of the component source.
       *
       *****/
      /**
       * The width of the component source.
       *
       ******/
      /**
       * The width of the component source.
       *
       *******/
      componentWidth: number;
      /**
       * The height of the component source.
       *
       ****/
      /**
       * The height of the component source.
       *
       *****/
      /**
       * The height of the component source.
       *
       ******/
      /**
       * The height of the component source.
       *
       *******/
      componentHeight: number;
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       ****/
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       *****/
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       ******/
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       *******/
      loadingStatus: number;
      /**
       * The width of the picture that is actually drawn.
       *
       *******/
      /**
       * The width of the picture that is actually drawn.
       *
       ********/
      contentWidth: number;
      /**
       * The height of the picture that is actually drawn.
       *
       *******/
      /**
       * The height of the picture that is actually drawn.
       *
       ********/
      contentHeight: number;
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       *******/
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       ********/
      contentOffsetX: number;
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       *******/
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       ********/
      contentOffsetY: number;
    }) => void,
  )
```

Triggered when an image is successfully loaded or decoded. The size of the image source that is successfully loaded is returned, in pixels. <p><strong>NOTE</strong>: <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor. </p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: {
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      width: number;
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      height: number;
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      componentWidth: number;
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      componentHeight: number;
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      loadingStatus: number;
      /**
       * The width of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentWidth: number;
      /**
       * The height of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentHeight: number;
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentOffsetX: number;
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentOffsetY: number;
    }) => void | Yes |  |

## onError

```TypeScript
onError(callback: ImageErrorCallback)
```

图片加载异常时触发该回调。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时该事件不触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImageErrorCallback | Yes | 图片加载异常时触发的回调。  说明：  建议开发者使用此回调，可快速确认图片加载失败时的具体原因，  参见[ImageError](arkts-imageerror-i.md#ImageError)的错误信息详细介绍。 [since 11] |

## onFinish

```TypeScript
onFinish(event: () => void)
```

当加载的源文件为带动效的SVG格式图片时，SVG动效播放完成时会触发这个回调。 如果动效为无限循环动效，则不会触发这个回调。 仅支持SVG格式的图片。当组件的参数类型为[AnimatedDrawableDescriptor] {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时该事件不触发。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 当加载的源文件为带动效的SVG格式图片时，  SVG动效播放完成时会触发这个回调。如果动效为无限循环动效，则不会触  发这个回调。 |

## orientation

```TypeScript
orientation(orientation: ImageRotateOrientation)
```

设置图像内容的显示方向。 该属性对[alt](arkts-imageattribute-c.md#alt)占位图不生效。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orientation | ImageRotateOrientation | Yes | 图像内容的显示方向。  仅支持静态位图的显示。  如果需要显示携带旋转角度信息或翻转信息的图片，建议使用  ImageRotateOrientation.AUTO进行设置。  默认值：ImageRotateOrientation.UP 设置为undefined或null时，取值为ImageRotateOrientation.AUTO。 |

## pointLight

```TypeScript
pointLight(value: PointLightStyle)
```

设置点光源样式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PointLightStyle | Yes | 点光源样式。 |

## privacySensitive

```TypeScript
privacySensitive(supported: boolean)
```

设置是否支持卡片敏感隐私信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supported | boolean | Yes | 是否支持卡片敏感隐私信息。  默认值为false，表示不支持卡片敏感隐私信息，当设置为true时，隐私模式下图片将显示为半透明底板样式。  说明：  设置null则不敏感。 进入隐私模式需要卡片框架支持。 |

## renderMode

```TypeScript
renderMode(value: ImageRenderMode)
```

设置图片的渲染模式。SVG类型图源不支持该属性。 设置[ColorFilter](arkts-imageattribute-c.md#colorFilter)时，该属性设置不生效。 当组件的参数类型为[AnimatedDrawableDescriptor] {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageRenderMode | Yes | 图片的渲染模式为原色或黑白。 默认值：ImageRenderMode.Original |

## resizable

```TypeScript
resizable(value: ResizableOptions)
```

设置图像拉伸时可调整大小的图像选项。拉伸对拖拽缩略图以及占位图有效。 设置合法的 [ResizableOptions](arkts-resizableoptions-i.md#ResizableOptions) 时，objectRepeat属性、antialiased属性和 orientation属性设置不生效。 当设置 top +bottom 大于原图的高或者 left + right 大于原图的宽时 [ResizableOptions](arkts-resizableoptions-i.md#ResizableOptions) 属性设置不生效。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 和SVG时设置该属性不生效。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResizableOptions | Yes | 图像拉伸时可调整大小的图像选项。 |

## sourceSize

```TypeScript
sourceSize(value: ImageSourceSize)
```

设置图片解码尺寸。仅在目标尺寸小于图源尺寸时生效。SVG类型图源和PixelMap资源不支持该属性。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageSourceSize | Yes | 图片解码尺寸参数，降低图片的分辨率，  常用于需要让图片显示尺寸比组件尺寸更小的场景。和  [objectFit](arkts-imageattribute-c.md#objectFit)接口的ImageFit.None配合使用时可在组件内显示小图。 [since 18] |

## supportSvg2

```TypeScript
supportSvg2(enable: boolean)
```

开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)， 开启后相关SVG图片显示效果会有变化。 Image组件创建后，不支持动态修改该属性的值。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 控制是否开启SVG标签解析能力增强功能。  默认值：false true：支持SVG解析新能力；false：保持原有SVG解析能力。 |

## syncLoad

```TypeScript
syncLoad(value: boolean)
```

设置是否同步加载图片。建议加载尺寸较小的本地图片时将syncLoad设为true，因为耗时较短，在主线程上执行即可。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor) 时设置该属性不生效。 如果加载图片时出现闪烁，设置syncLoad为true。详情请参见[并发优化] (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response- optimization#section715115119192)。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。  默认值：false，false表示异  步加载图片，true表示同步加载图片。  阻塞主线程超过6s将导致AppFreeze，具体参考[AppFreeze（应用冻屏）检测](docroot://dfx/appfreeze-guidelines.md)。 |

