# common

公共通用属性实例

## common

```TypeScript
common()
```

Constructor

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [cursorControl](arkts-cursorcontrol-n.md) | 控制鼠标光标的显示样式。 |
| [focusControl](arkts-focuscontrol-n.md) | 焦点控制模块。 |

### Functions

| Name | Description |
| --- | --- |
| [$r](arkts-common-$r-f.md#$r-1) | global $r function |
| [$rawfile](arkts-common-$rawfile-f.md#$rawfile-1) | global $rawfile function |
| [CustomEnv](arkts-common-customenv-f.md#CustomEnv-1) | 定义自定义环境PropertyDecorator。 |
| [Env](arkts-common-env-f.md#Env-1) | 定义Env PropertyDecorator。 |
| [animateTo](arkts-common-animateto-f.md#animateTo-1) | 显式动画接口。在需要动画时，显式调用该接口改变状态以产生动画。 > > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的 > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)来明确UI的执行上下文。 > > - 不推荐在aboutToAppear、aboutToDisappear中调用动画。 > > - 如果在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中调用动画，自 > 定义组件内的build还未执行，内部组件还未创建，动画时机过早，动画属性没有初值无法对组件产生动画。 > > - 执行[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)时， > 组件即将销毁，不能在aboutToDisappear里面做动画。 > > - 在组件出现和消失时，可以通过[组件内转场]{@link common}添加动画效果。 > > - 组件内转场不支持的属性，可以参考[示例2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#示例2动画执行结束后组件消失)，使用 > animateTo实现动画执行结束后组件消失的效果。 > > - 某些场景下，在[状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)中使用animateTo动画，会产生异常效果，具体 > 可参考：[在状态管理V2中使用animateTo动画效果异常](docroot://ui/state-management/arkts-new-local.md#在状态管理v2中使用animateto动画效果异常)。 |
| [animateToImmediately](arkts-common-animatetoimmediately-f.md#animateToImmediately-1) |  |
| [fp2px](arkts-common-fp2px-f.md#fp2px-1) | Converts a number in fp units to a number in px. |
| [getContext](arkts-common-getcontext-f.md#getContext-1) | Obtains the Context object associated with a component on the page. |
| [lpx2px](arkts-common-lpx2px-f.md#lpx2px-1) | Converts a number in units of lpx to a number in units of px. |
| [mutableBuilder](arkts-common-mutablebuilder-f.md#mutableBuilder-1) | 定义mutableBuilder函数。 |
| [postCardAction](arkts-common-postcardaction-f.md#postCardAction-1) | Post Card Action. |
| [px2fp](arkts-common-px2fp-f.md#px2fp-1) | Converts a number in units of px to a number in units of fp. |
| [px2lpx](arkts-common-px2lpx-f.md#px2lpx-1) | Converts a number in units of px to a number in units of lpx. |
| [px2vp](arkts-common-px2vp-f.md#px2vp-1) | Converts a number in units of px to a number in units of vp. By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion. If no UI instance is available, the virtual pixel ratio of the default screen is used instead. |
| [vp2px](arkts-common-vp2px-f.md#vp2px-1) | Converts a value in vp units to a value in px. By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion. If no UI instance is available, the virtual pixel ratio of the default screen is used instead. |
| [wrapBuilder](arkts-common-wrapbuilder-f.md#wrapBuilder-1) | Defining wrapBuilder function. |

### Classes

| Name | Description |
| --- | --- |
| [BaseCustomComponent](arkts-basecustomcomponent-c.md) | 自定义组件基类，它是从类CustomComponent迁移过来的。 |
| [ChildrenMainSize](arkts-childrenmainsize-c.md) | Indicates children main size. |
| [CommonAttribute](arkts-commonattribute-c.md) | CommonAttribute for ide. |
| [CommonMethod](arkts-commonmethod-c.md) | CommonMethod. |
| [CommonShapeMethod](arkts-commonshapemethod-c.md) | CommonShapeMethod |
| [ContentTransitionEffect](arkts-contenttransitioneffect-c.md) | Defines the content transition effect. |
| [CustomComponent](arkts-customcomponent-c.md) | 自定义组件 |
| [CustomComponentV2](arkts-customcomponentv2-c.md) | 自定义组件V2 |
| [CustomEnvKey](arkts-customenvkey-c.md) | 定义自定义环境Key。 |
| [DrawModifier](arkts-drawmodifier-c.md) | Defined the draw modifier of node. Provides draw callbacks for the associated Node. |
| [DynamicNode](arkts-dynamicnode-c.md) | Define DynamicNode. |
| [LayoutPolicy](arkts-layoutpolicy-c.md) | 用于组件宽度和高度的布局策略。 > **说明：** > > - LayoutPolicy支持设置三种布局策略：matchParent（自适应父组件布局）、wrapContent（根据内容自适应但不超过父组件尺寸的布局）和fixAtIdealSize（根据内容自适应，可能超过父组件尺寸的布局）。具体 示例代码参见[设置布局策略](./ts-universal-attributes-size.md#示例5设置布局策略)。 > > - wrapContent和fixAtIdealSize场景，组件无法通过内容确定大小时，如果组件大小有默认值，则按照默认值进行测算；如果没有默认值，则按照宽高(0,0)进行测算。 > > - 容器设置wrapContent，并且有子组件设置matchParent时（包括仅一边设置matchParent），容器先由确定大小的子组件撑大，设置matchParent的子组件再匹配容器大小；如果没有确定大小的子组件，容器和子组件大 小均为0。 > > - LayoutPolicy优先级低于constraintSize。 > > - 从API version 15开始，仅Row和Column组件的width和height属性支持设置LayoutPolicy类型参数，其他组件设置LayoutPolicy类型参数后与不设置宽度或高度表现一致；从API version 20开始，所有基础组件均支持设置LayoutPolicy类型参数。 > > - 当Row、Column、Flex组件主轴尺寸自适应子组件，且子组件A仅交叉轴设置matchParent时，API版本26.0.0之前，子组件A不参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column、Fle x组件主轴方向不自适应子组件A的尺寸；从API版本26.0.0开始，子组件A会参与Row、Column、Flex组件的主轴尺寸测量过程，此时Row、Column、Flex组件主轴方向会自适应子组件A的尺寸。交叉轴方向同理。 |
| [MutableBuilder](arkts-mutablebuilder-c.md) | 定义MutableBuilder类。 |
| [ProgressMask](arkts-progressmask-c.md) | ProgressMask设置遮罩的进度、最大值和颜色。 |
| [RawInputEventWrapper](arkts-rawinputeventwrapper-c.md) | 原始输入事件包装器类。 提供统一的接口来访问不同类型的输入事件，确保类型安全和向后兼容性。 此类封装了原始的MouseEvent、TouchEvent或KeyEvent对象，并通过类型安全的方法访问。 此类为抽象类，开发者无法自行创建实例。系统会在触发输入事件监听器时自动创建实例并传递回调函数。 > **说明：** > > 由于监听器在事件派发给具体组件之前执行，事件中的一些字段将无法提供有效值：如触发对象[target]{@link EventTarget}、相对于组件的坐标 > [x]{@link MouseEvent#x}和[y]{@link MouseEvent#y}、[getCurrentLocalPosition]{@link TouchObject#getCurrentLocalPosition}和 > [stopPropagation]{@link TouchEvent#stopPropagation}方法、TouchEvent的[preventDefault]{@link TouchEvent#preventDefault}和 > [getHistoricalPoints]{@link TouchEvent#getHistoricalPoints}方法以及KeyEvent的[metaKey]{@link KeyEvent#metaKey}属性和 > [getModifierKeyState]{@link KeyEvent#getModifierKeyState}方法。 |
| [ReadonlyEnvKey](arkts-readonlyenvkey-c.md) | 定义只读系统环境键。 |
| [ReadonlySystemEnvKey](arkts-readonlysystemenvkey-c.md) | 定义只读的系统环境变量键。 |
| [ScrollableCommonMethod](arkts-scrollablecommonmethod-c.md) | CommonScrollableMethod |
| [ScrollResult](arkts-scrollresult-c.md) | The actual offset by which the scrollable scrolls. |
| [SystemEnvKey](arkts-systemenvkey-c.md) | 定义System Env Key的类。 |
| [TextContentControllerBase](arkts-textcontentcontrollerbase-c.md) | TextContentControllerBase |
| [TouchResult](arkts-touchresult-c.md) | 自定义事件分发结果，开发者通过返回结果来影响事件分发。 |
| [TouchTestInfo](arkts-touchtestinfo-c.md) | 当前屏幕触点所在组件的坐标系、id和尺寸相关信息。 |
| [TransitionEffect](arkts-transitioneffect-c.md) | 定义TransitionEffect类指定转场效果。 |
| <!--DelRow-->[View](arkts-view-c.md) | 自定义组件 |
| [WrappedBuilder](arkts-wrappedbuilder-c.md) | Defines the WrappedBuilder class. |
| [WritableEnvKey](arkts-writableenvkey-c.md) | 定义系统环境键。 |
| [WritableSystemEnvKey](arkts-writablesystemenvkey-c.md) | 定义可写的系统环境变量键。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilityHoverEvent](arkts-accessibilityhoverevent-i.md) | The accessibility hover action triggers this method invocation. |
| [AlignRuleOption](arkts-alignruleoption-i.md) | Defines the align rule options of relative container. |
| [AnimatableArithmetic](arkts-animatablearithmetic-i.md) | 该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic\<T\>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算 和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic\<T\>接口的类型。 |
| [AnimateParam](arkts-animateparam-i.md) | 动画效果相关参数。 |
| [AreaChangeOptions](arkts-areachangeoptions-i.md) | 区域变化相关的参数。 |
| [AttributeModifier](arkts-attributemodifier-i.md) | Defines the attribute modifier. |
| [AxisEvent](arkts-axisevent-i.md) | 轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。 |
| [BackgroundBlurStyleOptions](arkts-backgroundblurstyleoptions-i.md) | 继承自[BlurStyleOptions]{@link BlurStyleOptions}。 |
| [BackgroundBrightnessOptions](arkts-backgroundbrightnessoptions-i.md) | 背景亮度选项。 > **说明：** > > 对于组件背景内容，每个像素自身的亮度（灰阶值）的计算公式为： > > `Y = （0.299R + 0.587G + 0.114B）/ 255.0`（R、G、B分别表示像素红色、绿色和蓝色通道的值，Y表示灰阶值），通过上述公式将像素点的灰阶值归一化至0~1的范围。 > > 每个像素的亮度提升计算公式为：`ΔY = -rate*Y + lightUpDegree`。例如，当rate=0.5，lightUpDegree=0.5时，对于灰阶值为0.2的像素点，亮度增加值为 > `-0.5*0.2 + 0.5 = 0.4`，对于灰阶值为1的像素点，亮度增加值为`-0.5*1 + 0.5 = 0`。 |
| [BackgroundEffectOptions](arkts-backgroundeffectoptions-i.md) | 背景效果参数。 |
| [BackgroundImageOptions](arkts-backgroundimageoptions-i.md) | 定义背景图选项。 > **说明：** > > 背景图片的同步加载可能会带来潜在性能问题，详情可见[Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)中说明。 |
| [BackgroundOptions](arkts-backgroundoptions-i.md) | 指定背景选项 |
| [BaseEvent](arkts-baseevent-i.md) | 基础事件类型。 |
| [BindOptions](arkts-bindoptions-i.md) | 半模态、全模态的公共配置接口。 |
| [BlurOptions](arkts-bluroptions-i.md) | 灰阶模糊参数。 |
| [BlurStyleOptions](arkts-blurstyleoptions-i.md) | 内容模糊选项。 |
| [BorderImageOption](arkts-borderimageoption-i.md) | Border image option |
| [Callback](arkts-callback-i.md) | 定义基础的回调函数。 |
| [CaretOffset](arkts-caretoffset-i.md) | CaretOffset info. |
| [ClickEffect](arkts-clickeffect-i.md) | 定义点击效果。 |
| [ClickEvent](arkts-clickevent-i.md) | 继承于[BaseEvent]{@link BaseEvent}。 |
| [CommonConfiguration](arkts-commonconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。 |
| [CommonInterface](arkts-commoninterface-i.md) | IDE使用的CommonInterface |
| [ComponentOptions](arkts-componentoptions-i.md) | Defines the options of Component ClassDecorator. |
| [Configuration](arkts-configuration-i.md) | Defines the data type of the interface restriction. |
| [ContentCoverOptions](arkts-contentcoveroptions-i.md) | 继承自[BindOptions]{@link BindOptions}。 全屏模态页面内容选项。 |
| [ContentModifier](arkts-contentmodifier-i.md) | 开发者需要自定义class实现ContentModifier接口。 |
| [ContextMenuAnimationOptions](arkts-contextmenuanimationoptions-i.md) | 长按预览时显示的样式信息。 |
| [ContextMenuOptions](arkts-contextmenuoptions-i.md) | 菜单项的信息。 **表1：同时设置offset与placement时菜单的偏移位置** | placement设置的值 | 菜单的偏移量说明 | | ------------------------------------------------------------ | ------------------------------------------------------------ | | Placement.TopLeft、Placement.Top、Placement.TopRight | offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向上进行偏移。 | | Placement.BottomLeft、Placement.Bottom、Placement.BottomRight | offset的x为正数，菜单相对组件向左进行偏移，offset的y为正数，菜单相对组件向下进行偏移。 | | Placement.RightTop、Placement.Right、Placement.RightBottom | offset的x为正数，菜单相对组件向右进行偏移，offset的y为正数，菜单相对组件向下进行偏移。 | **表2：同时设置arrowOffset与placement时菜单箭头的默认位置** | placement设置的值 | 菜单箭头的位置说明 | | ------------------------------------------- | ------------------------------------------------------------ | | Placement.Top、Placement.Bottom | 箭头显示在水平方向且默认居中，且距离菜单左侧边缘距离为箭头安全距离。 | | Placement.Left、Placement.Right | 箭头显示在垂直方向且默认居中，且距离菜单上侧距离为箭头安全距离。 | | Placement.TopLeft、Placement.BottomLeft | 箭头默认显示在水平方向，且距离菜单左侧边缘距离为箭头安全距离。 | | Placement.TopRight、Placement.BottomRight | 箭头默认显示在水平方向，且距离菜单右侧距离为箭头安全距离。 | | Placement.LeftTop、Placement.RightTop | 箭头默认显示在垂直方向，且距离菜单上侧距离为箭头安全距离。 | | Placement.LeftBottom、Placement.RightBottom | 箭头默认显示在垂直方向，且距离菜单下侧距离为箭头安全距离。 | **表3：enableArrow为true且placement未设置或者值为非法值的菜单默认位置** | 接口 | 菜单默认位置 | |------|-------------| | [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} | Placement.BottomLeft | | [bindMenu<sup>11+</sup>]{@link CommonMethod#bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} | Placement.BottomLeft | | [bindContextMenu<sup>8+</sup>]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)} | Placement.Top | | [bindContextMenu<sup>12+</sup>]{@link CommonMethod#bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions)} | Placement.BottomLeft | | [bindContextMenuWithResponse<sup>23+</sup>]{@link CommonMethod#bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions)} | Placement.Top | |
| [CrownEvent](arkts-crownevent-i.md) | 组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。 |
| [CustomPopupOptions](arkts-custompopupoptions-i.md) | 弹出自定义气泡的信息。 |
| [DateRange](arkts-daterange-i.md) | Defines a range of dates. |
| <!--DelRow-->[DepthColorRGB](arkts-depthcolorrgb-i.md) | 深度空间中的RGB颜色。 |
| <!--DelRow-->[DepthVector3](arkts-depthvector3-i.md) | 深度空间中的三维向量。 |
| <!--DelRow-->[DepthVector4](arkts-depthvector4-i.md) | 深度空间中的4D向量。 |
| [DismissContentCoverAction](arkts-dismisscontentcoveraction-i.md) | Component content cover dismiss |
| [DismissPopupAction](arkts-dismisspopupaction-i.md) | 气泡关闭的信息。 |
| [DismissSheetAction](arkts-dismisssheetaction-i.md) | 半模态关闭前的回调。 |
| [DragEvent](arkts-dragevent-i.md) | 拖拽事件信息。 |
| [DragInteractionOptions](arkts-draginteractionoptions-i.md) | 设置拖拽过程中预览图浮起的交互模式。 |
| [DragItemInfo](arkts-dragiteminfo-i.md) | 定义拖拽过程中拖拽项的相关信息。 |
| [DragPreviewOptions](arkts-dragpreviewoptions-i.md) | 设置拖拽过程中预览图处理模式及数量角标的显示。 |
| [DropOptions](arkts-dropoptions-i.md) | 设置落入过程的参数。 |
| [EdgeEffectOptions](arkts-edgeeffectoptions-i.md) | Define EdgeEffect Options. |
| <!--DelRow-->[EdgeLightParams](arkts-edgelightparams-i.md) | 定义边缘流光效果参数。 |
| [EditModeOptions](arkts-editmodeoptions-i.md) | 定义编辑模式选项 |
| [EntryOptions](arkts-entryoptions-i.md) | 定义Entry类装饰器的选项。 |
| [EventTarget](arkts-eventtarget-i.md) | [BaseEvent]{@link BaseEvent}中参数target的类型。 触发事件的元素对象的显示区域。 |
| [ExpectedFrameRateRange](arkts-expectedframeraterange-i.md) | 设置动画期望的帧率。 |
| [FadingEdgeOptions](arkts-fadingedgeoptions-i.md) | Defines the fadingEdge options. |
| [FocusAxisEvent](arkts-focusaxisevent-i.md) | 焦点轴事件的对象说明，继承于[BaseEvent]{@link BaseEvent}。 |
| [FocusMovement](arkts-focusmovement-i.md) | 设置对应的按键对应的走焦目的组件，缺省则遵循默认走焦规则。 > **说明：** > > 直接使用focusControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取 > [UIContext]{@link @ohos.arkui.UIContext:UIContext}实例，并使用 > [getFocusController]{@link @ohos.arkui.UIContext:UIContext#getFocusController}获取绑定实例的focusControl。 |
| [ForegroundBlurStyleOptions](arkts-foregroundblurstyleoptions-i.md) | 继承自[BlurStyleOptions]{@link BlurStyleOptions}，设置内容模糊选项。 |
| [ForegroundEffectOptions](arkts-foregroundeffectoptions-i.md) | 前景效果参数。 |
| [GeometryInfo](arkts-geometryinfo-i.md) | 父组件（自定义组件）布局信息，继承自[SizeResult]{@link SizeResult}。 |
| [GeometryTransitionOptions](arkts-geometrytransitionoptions-i.md) |  |
| [GestureModifier](arkts-gesturemodifier-i.md) | 开发者需要自定义class实现GestureModifier接口。 |
| <!--DelRow-->[GravityCenterOptions](arkts-gravitycenteroptions-i.md) | 定义引力中心的参数。 |
| [HistoricalPoint](arkts-historicalpoint-i.md) | 历史点信息。 |
| [HorizontalAlignParam](arkts-horizontalalignparam-i.md) | 定义相对容器的水平对齐规则。 |
| [HoverEvent](arkts-hoverevent-i.md) | 继承于[BaseEvent]{@link BaseEvent}。 |
| [ICurve](arkts-icurve-i.md) | 曲线对象。 |
| [IMonitor](arkts-imonitor-i.md) | 定义IMonitor接口 |
| [IMonitorValue](arkts-imonitorvalue-i.md) | 定义IMonitorValue的接口 |
| [InputCounterOptions](arkts-inputcounteroptions-i.md) | Define the ratio of characters entered by the the percentage of InputCounterOptions. |
| [InputEventInterceptResult](arkts-inputeventinterceptresult-i.md) | 输入事件拦截结果接口，用于监听器回调[InputEventListener]{@link InputEventListener}返回是否拦截的决策。 |
| [InputEventMonitor](arkts-inputeventmonitor-i.md) | 输入事件监听器标识对象。 此对象由系统创建并返回，作为监听器的唯一标识。 > **说明：** > > - 对象为空对象，不包含任何可访问的成员。 > > - 开发者无法主动构造此对象，只能通过[addLocalInputEventMonitor]{@link UIContext:UIContext#addLocalInputEventMonitor}接口注册获取。 > > - 用于后续解除注册时验证身份。 |
| [InvertOptions](arkts-invertoptions-i.md) | 前景智能取反色。 |
| [ItemDragEventHandler](arkts-itemdrageventhandler-i.md) | 定义拖拽事件 |
| [ItemDragInfo](arkts-itemdraginfo-i.md) | ItemDragInfo object description |
| [KeyEvent](arkts-keyevent-i.md) | 按键事件信息。 |
| [KeyframeAnimateParam](arkts-keyframeanimateparam-i.md) | 动画选项设置。 |
| [KeyframeState](arkts-keyframestate-i.md) | 设置关键帧选项。 |
| [Layoutable](arkts-layoutable-i.md) | 子组件布局信息。 |
| [LayoutBorderInfo](arkts-layoutborderinfo-i.md) | 子组件边框信息 |
| [LayoutChild](arkts-layoutchild-i.md) | 布局和测量发生时，框架传递给子组件的信息。 |
| [LayoutInfo](arkts-layoutinfo-i.md) | 子组件布局位置信息 |
| <!--DelRow-->[LightSource](arkts-lightsource-i.md) | 一个组件支持添加1个光源。 |
| [LinearGradient](arkts-lineargradient-i.md) | Linear Gradient Interface |
| [LinearGradientBlurOptions](arkts-lineargradientbluroptions-i.md) |  |
| [LinearGradientOptions](arkts-lineargradientoptions-i.md) | 线性渐变的参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [LocalizedAlignRuleOptions](arkts-localizedalignruleoptions-i.md) | Defines the Localized align rule options of relative container. |
| [LocalizedHorizontalAlignParam](arkts-localizedhorizontalalignparam-i.md) | Defines the localized horizontal align param of relative container. |
| [LocalizedVerticalAlignParam](arkts-localizedverticalalignparam-i.md) | Defines the localized vertical align param of relative container. |
| [Measurable](arkts-measurable-i.md) | 子组件位置信息。 |
| [MeasureResult](arkts-measureresult-i.md) | Sub component MeasureResult info. |
| [MenuElement](arkts-menuelement-i.md) | 菜单项的图标、文本和交互信息。 |
| [MenuGridStyleOptions](arkts-menugridstyleoptions-i.md) | 菜单栅格样式选项。 |
| [MenuMaskType](arkts-menumasktype-i.md) | 设置蒙层样式。 |
| [MenuOptions](arkts-menuoptions-i.md) | 菜单项的信息，继承自[ContextMenuOptions]{@link ContextMenuOptions}。 |
| [MonitorDecoratorOptions](arkts-monitordecoratoroptions-i.md) | 定义MonitorDecoratorOptions接口 |
| [MotionBlurAnchor](arkts-motionbluranchor-i.md) | Define motion blur anchor coordinates. |
| [MotionBlurOptions](arkts-motionbluroptions-i.md) | 运动模糊选项。 |
| [MotionPathOptions](arkts-motionpathoptions-i.md) | 设置组件的运动路径。 |
| [MouseEvent](arkts-mouseevent-i.md) | 继承于[BaseEvent]{@link BaseEvent}。 |
| [MouseHistoricalPoint](arkts-mousehistoricalpoint-i.md) | 鼠标事件历史点信息。 历史点按时间顺序排列，获取到的第一个历史点是最早发生的事件的信息，最后一个是最新发生事件的信息。历史点的数量取决于系统事件队列的配置和硬件性能。历史点主要用于如下场景： 1. 平滑绘制：使用历史点可以实现更平滑的绘制效果，特别是在鼠标快速移动时。 2. 手势识别：通过分析历史点的轨迹，可以识别各种鼠标手势。 3. 性能优化：在一个事件回调中处理多个历史点，减少事件处理频率，提升性能。 4. 轨迹分析：分析鼠标移动轨迹，用于绘图应用或手势控制。 5. 数据分析：历史点中的timestamp可用于计算鼠标移动速度。 |
| [MultiShadowOptions](arkts-multishadowoptions-i.md) | 定义阴影参数。 |
| [NestedScrollOptions](arkts-nestedscrolloptions-i.md) | 定义嵌套滚动选项 |
| [OverlayOffset](arkts-overlayoffset-i.md) | 设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。 > **说明：** > > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [OverlayOptions](arkts-overlayoptions-i.md) | 浮层的定位。 > **说明：** > > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > > align和offset都设置时，效果重叠，浮层相对于组件方位定位后，再基于当前位置的左上角进行偏移。 |
| [PickerDialogButtonStyle](arkts-pickerdialogbuttonstyle-i.md) | Provide an interface for the button style of picker |
| [PickerTextStyle](arkts-pickertextstyle-i.md) | Provide an interface for the text style of picker |
| <!--DelRow-->[PixelMapMock](arkts-pixelmapmock-i.md) | 带有release函数的像素图对象。 |
| [PixelRoundPolicy](arkts-pixelroundpolicy-i.md) | 指定组件级像素取整的方向。 |
| [PixelStretchEffectOptions](arkts-pixelstretcheffectoptions-i.md) | 像素扩展属性集合，用于描述像素扩展的信息。 |
| <!--DelRow-->[PointLightStyle](arkts-pointlightstyle-i.md) | 通过设置光源和被照亮的类型实现点光源照亮周围组件的UI效果。 |
| [PopupBorderLinearGradient](arkts-popupborderlineargradient-i.md) | 弹出边框线性渐变色。 |
| [PopupCommonOptions](arkts-popupcommonoptions-i.md) | 配置弹出气泡的参数。使用[UIContext]{@link @ohos.arkui.UIContext}中的 [getPromptAction()]{@link @ohos.arkui.UIContext#getPromptAction}方法获取到 [PromptAction]{@link @ohos.arkui.UIContext#PromptAction}对象，再通过该对象调用 [openPopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#openpopup18)和 [updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#updatepopup18)时传入的options参数。 |
| [PopupMaskType](arkts-popupmasktype-i.md) | 设置遮罩层颜色。 |
| [PopupMessageOptions](arkts-popupmessageoptions-i.md) | 气泡文本的样式。 |
| [PopupOptions](arkts-popupoptions-i.md) | 基础气泡的信息。 |
| [PopupStateChangeParam](arkts-popupstatechangeparam-i.md) | 气泡的显示状态。 |
| [PreviewConfiguration](arkts-previewconfiguration-i.md) | 配置自定义拖拽过程中的预览图样式。 |
| [PreviewParams](arkts-previewparams-i.md) | Define Preview property |
| [ProvideOptions](arkts-provideoptions-i.md) | Defines the options of Provide PropertyDecorator. |
| [RadialGradientOptions](arkts-radialgradientoptions-i.md) | 径向渐变参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > **说明：** > > colors参数的约束： > > [ResourceColor]{@link ResourceColor}表示填充的颜色，number表示指定颜色所处的位置，取值范围为[0,1.0]，0表示需要设置渐变色的容器的开始处，1.0表示容器的结尾处。想要实现多个颜色渐变 > 效果时，多个数组中number参数建议递增设置，如后一个数组number参数比前一个数组number小的话，按照等于前一个数组number的值处理。 |
| [Rectangle](arkts-rectangle-i.md) | 矩形区域类型。 > **说明：** > > - x和y可以设置正负值百分比。当x设置为'100%'时表示热区往右偏移组件本身宽度大小，当x设置为'-100%'时表示热区往左偏移组件本身宽度大小。当y设置为'100%'时表示热区往下偏移组件本身高度大小，当y设置为 > '-100%'时表示热区往上偏移组件本身高度大小。 > > - width和height设置百分比时，只能设置正值百分比。width：'100%'表示热区宽度设置为该组件本身的宽度。比如组件本身宽度是100vp，那么'100%'表示热区宽度也为100vp。height：'100%'表示热区 > 高度设置为该组件本身的高度。 > > - 百分比相对于组件自身宽高进行计算。 > > - 当父组件设置[clip]{@link CommonMethod#clip(value: boolean)}(true)时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。 > > - width和height不支持calc()的动态计算。 |
| [RectResult](arkts-rectresult-i.md) | 位置和尺寸类型，用于描述组件的位置和宽高。 |
| [ResponseRegion](arkts-responseregion-i.md) | 由输入工具类型、触摸位置和大小组成的触摸热区。 > **说明：** > > - 当父组件设置[clip]{@link CommonMethod#clip(value: boolean)}为true时，子组件的响应会受到父组件触摸热区的影响，不在父组件触摸热区内的子组件无法响应手势和事件。 > > - 如果触摸热区未配置输入工具类型，触摸位置和大小均采用默认值。 > > - x和y的计算结果为正值时，分别代表向右偏移和向下偏移；当计算结果为负值时，分别代表向左偏移和向上偏移。 > > - width和height采用string类型时，string需采用小写字符否则不生效，支持calc()的动态计算。指定calc()的入参字符串格式为'宽高缩放比例 ± 宽高增量'，宽高缩放比例为百分比，宽高增量单位为px或 > vp。例如'calc(80% + 10vp)'中，80%为宽高缩放比例、10vp为宽高增量。width和height采用LengthMetrics类型且单位为percent时，相对于组件自身宽高进行计算，percent(1)代表1 > 00%。当计算结果为负值时，采用默认值。 |
| [ReusableOptions](arkts-reusableoptions-i.md) | 定义组件复用类装饰器的选项。 |
| [ReuseOptions](arkts-reuseoptions-i.md) | Defining the reusable configuration parameters. |
| [RotateAngleOptions](arkts-rotateangleoptions-i.md) | 指定各轴旋转角的旋转参数选项。 |
| [RotateOptions](arkts-rotateoptions-i.md) | 组件旋转参数。 |
| [ScaleOptions](arkts-scaleoptions-i.md) | > **说明：** > > 当组件同时设置了[rotate]{@link CommonMethod#rotate(value: RotateOptions)}和 > [scale]{@link CommonMethod#scale(value: ScaleOptions)}属性时，centerX和centerY的取值会发生冲突，此时centerX和centerY的值以最后设定的属性的值为准。 |
| [SelectionOptions](arkts-selectionoptions-i.md) | Defines the selection options. |
| [ShadowOptions](arkts-shadowoptions-i.md) | 阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。 |
| [sharedTransitionOptions](arkts-sharedtransitionoptions-i.md) | 共享元素转场动画参数。 > **说明：** > > type为SharedTransitionEffectType.Exchange时motionPath才会生效。 > > type为SharedTransitionEffectType.Exchange时，效果为对匹配的共享元素产生位置、大小的过渡（可通过配置组件的border观察），不支持内容的过渡效果。例如，Text组件在两个页面上使用不同的 > fontSize属性值，即绘制内容有大小差异，在sharedTransition动画结束后的最后一帧，Text的fontSize效果会突变为跳转目标页fontSize的效果。 |
| [SheetDismiss](arkts-sheetdismiss-i.md) | 控制半模态的关闭。 |
| [SheetOptions](arkts-sheetoptions-i.md) | 继承自[BindOptions]{@link BindOptions}。 半模态页面内容选项。 |
| [SheetTitleOptions](arkts-sheettitleoptions-i.md) | 半模态面板的标题。 |
| [SizeResult](arkts-sizeresult-i.md) | 组件尺寸信息。 > **说明：** > >- 自定义布局暂不支持LazyForEach写法。 >- 使用builder形式的自定义布局创建，自定义组件的build()方法内只允许存在this.builder()，即示例的推荐用法。 >- 父容器（自定义组件）上设置的尺寸信息，除aspectRatio之外，优先级小于onMeasureSize设置的尺寸信息。 >- 子组件设置的位置信息，offset、position、markAnchor优先级大于onPlaceChildren设置的位置信息，其他位置设置属性不生效。 >- 使用自定义布局方法时，需要同时调用onMeasureSize和onPlaceChildren方法，否则可能出现布局异常。 |
| [SmartGestureShortcutOptions](arkts-smartgestureshortcutoptions-i.md) | 智慧手势响应行为配置对象。 |
| <!--DelRow-->[SpatialEffectParams](arkts-spatialeffectparams-i.md) | 空间效果选项。 |
| <!--DelRow-->[SpatialPosition](arkts-spatialposition-i.md) | 三维空间中的空间角位置。 |
| [SpringBackAction](arkts-springbackaction-i.md) | 控制半模态关闭前的回弹。 |
| [StateStyles](arkts-statestyles-i.md) | 组件不同状态下的样式。 |
| [SweepGradientOptions](arkts-sweepgradientoptions-i.md) | 角度渐变参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > **说明：** > > metricsColors参数的约束： > > [ColorMetrics]{@link Graphics:ColorMetrics}表示填充的颜色，可以使用[colorWithSpace]{@link Graphics:ColorMetrics#colorWithSpace} > 方法构造指定色域属性的颜色。number表示指定颜色所处的位置，取值范围为[0, 1.0]，0表示需要设置渐变色的容器开始处，1.0表示容器的结束处。为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一个 > 数组中的number类型参数小于前一个数组的number类型参数，将按照等于前一个数组number值处理。 |
| [SystemAdaptiveOptions](arkts-systemadaptiveoptions-i.md) | 系统自适应调节参数，系统会默认开启根据芯片算力进行自适应效果调节的能力。 |
| [TextContentControllerOptions](arkts-textcontentcontrolleroptions-i.md) | Defines the span options of TextContentController. |
| [TextDecorationOptions](arkts-textdecorationoptions-i.md) | Defines the options of decoration. |
| [TipsOptions](arkts-tipsoptions-i.md) | 悬浮气泡自定义参数。 |
| [TouchEvent](arkts-touchevent-i.md) | 继承于[BaseEvent]{@link BaseEvent}。在非事件注入场景下，changedTouches是按屏幕刷新率重采样的点，而touches是按器件刷新率上报的点，因此changedTouches与touches的数据可 能不同。 |
| [TouchObject](arkts-touchobject-i.md) | 触摸事件类型。 |
| [TransitionOptions](arkts-transitionoptions-i.md) | TransitionOptions通过指定结构体内的参数来指定转场效果。 > **说明：** > > 1. 当使用TransitionOptions类型的入参指定转场效果时，**必须**配合 > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)使用才有动画效果，动效时长、曲线、延时跟随 > animateTo中的配置。 > > 2. 当使用TransitionOptions作为入参，且不指定除type外的任何参数时，此时相当于指定了透明度的转场效果。例如，指定{type: TransitionType.Insert}相当于指定了{type: > TransitionType.Insert, opacity: 0}的转场效果。而指定了具体效果时，则不会添加默认的透明度转场效果。 |
| [TranslateOptions](arkts-translateoptions-i.md) | Defines the options of translate. |
| [UICommonEvent](arkts-uicommonevent-i.md) | 用于设置基础事件回调。方法入参为undefined的时候，重置对应的事件回调。 |
| [UIGestureEvent](arkts-uigestureevent-i.md) | 用于设置组件绑定的手势。 |
| [UIScrollableCommonEvent](arkts-uiscrollablecommonevent-i.md) | Defines a UIScrollableCommonEvent which is used to set event to target component. |
| [VerticalAlignParam](arkts-verticalalignparam-i.md) | 定义相对容器的垂直对齐规则。 |
| [VisibleAreaEventOptions](arkts-visibleareaeventoptions-i.md) | 关于区域变化相关的参数。 |

### Enums

| Name | Description |
| --- | --- |
| [AccessibilityAction](arkts-accessibilityaction-e.md) | 辅助功能操作类型的枚举 |
| [AccessibilityActionInterceptResult](arkts-accessibilityactioninterceptresult-e.md) | intercept action的枚举 |
| [AccessibilityRoleType](arkts-accessibilityroletype-e.md) | 定义组件的屏幕朗读功能角色类型。 |
| [AccessibilitySamePageMode](arkts-accessibilitysamepagemode-e.md) | 当前跨进程嵌入式显示的组件和宿主应用的同page模式。 |
| [AdaptiveColor](arkts-adaptivecolor-e.md) | 取色模式。 |
| [AnchoredColorMode](arkts-anchoredcolormode-e.md) | 配置组件主题跟随的颜色模式。 |
| [AvailableLayoutArea](arkts-availablelayoutarea-e.md) | 预览图宽高设置为百分比时的参考可布局区域大小。 |
| [BlendApplyType](arkts-blendapplytype-e.md) | 指示如何将指定的混合模式应用于视图的内容。 |
| [BlendMode](arkts-blendmode-e.md) | 混合模式。 > **说明：** > > blendMode枚举中，s表示源像素，d表示目标像素，sa表示源像素透明度，da表示目标像素透明度，r表示混合后像素，ra表示混合后像素透明度。 |
| [BlurStyle](arkts-blurstyle-e.md) | 模糊样式类型。 |
| [BlurStyleActivePolicy](arkts-blurstyleactivepolicy-e.md) | 定义背景模糊激活策略。 |
| [ChainStyle](arkts-chainstyle-e.md) | 定义链的风格，支持attributeModifier动态设置属性方法。 |
| [ContentClipMode](arkts-contentclipmode-e.md) | Enum of scrollable containers' content clip mode. |
| [DismissReason](arkts-dismissreason-e.md) | 关闭原因类型。 |
| <!--DelRow-->[DistortionMode](arkts-distortionmode-e.md) | 非线性形变动画模式的枚举。 |
| <!--DelRow-->[DragAnimationType](arkts-draganimationtype-e.md) | 拖拽动画类型。 |
| [DragBehavior](arkts-dragbehavior-e.md) | 当设置[DragResult]{@link DragResult}为DROP_ENABLED后，可设置DragBehavior为复制（COPY）或剪切（MOVE）。当DragBehavior为复制（COPY）时，拖拽对象的角标会显示加 号；为剪切（MOVE）时，拖拽对象的角标不会显示加号。DragBehavior用来向开发者描述数据的处理方式是复制（COPY）还是剪切（MOVE），但无法最终决定对数据的实际处理方式。DragBehavior会通过onDragEnd带 回给数据拖出方，发起拖拽的一方可通过DragBehavior来区分做出的是复制（COPY）还是剪切（MOVE）数据的不同行为。 |
| [DraggingSizeChangeEffect](arkts-draggingsizechangeeffect-e.md) | 当一个节点上同时设置长按浮起预览（参考bindContextMenu）与拖拽时，使用该字段设置长按浮起预览图与拖拽预览图过渡动效方式。 |
| [DragPreviewMode](arkts-dragpreviewmode-e.md) | 设置拖拽预览图的显示模式。 |
| [DragResult](arkts-dragresult-e.md) | 定义拖拽操作的结果及组件的落入选定状态。 |
| <!--DelRow-->[EdgeLightMode](arkts-edgelightmode-e.md) | 边缘光效动画模式枚举。 |
| [EffectEdge](arkts-effectedge-e.md) | Enumerates the effective edge of the edge effect. |
| [EffectType](arkts-effecttype-e.md) | 使用效果模板种类的枚举值。 **效果模板：** | 设备类型 | 模糊半径(单位: px) | 饱和度 | 亮度 | 颜色 | | -------- | ---- | ---------------------- | -------- | -------- | | 移动设备 | 0 | 0 | 0 | '#ffffffff'，显示为白色。 | | 2in1设备：深色模式 | 80 | 1.5 | 1.0 | '#e52e3033'，显示为淡红色的半透明效果。 | | 2in1设备：浅色模式 | 80 | 1.9 | 1.0 | '#e5ffffff'，显示为半透明的深红色。 | | Tablet设备 | 0 | 0 | 0 | '#ffffffff'，显示为白色。 | |
| [FinishCallbackType](arkts-finishcallbacktype-e.md) | 动画中定义onFinish回调的类型。 |
| [HapticFeedbackMode](arkts-hapticfeedbackmode-e.md) | 菜单弹出时振动效果。 |
| [HoverModeAreaType](arkts-hovermodeareatype-e.md) | 悬停态显示区域类型。 |
| [KeyboardAvoidMode](arkts-keyboardavoidmode-e.md) | 弹窗避让键盘时，避让模式的枚举类型。 |
| [LayoutSafeAreaEdge](arkts-layoutsafeareaedge-e.md) | 扩展安全区域的边缘。 |
| [LayoutSafeAreaType](arkts-layoutsafeareatype-e.md) | 扩展布局安全区域的枚举类型。 |
| [MenuGridPosition](arkts-menugridposition-e.md) | 栅格菜单在菜单中的位置枚举值。 |
| [MenuKeyboardAvoidMode](arkts-menukeyboardavoidmode-e.md) | 菜单避让软键盘的模式。 |
| [MenuPolicy](arkts-menupolicy-e.md) | Define the menu pop-up policy |
| [MenuPreviewMode](arkts-menupreviewmode-e.md) | 菜单的预览样式。 |
| [ModalMode](arkts-modalmode-e.md) | 子窗菜单的模态模式。 |
| [ModalTransition](arkts-modaltransition-e.md) | 全屏模态转场方式枚举类型，用于设置全屏模态转场类型。 |
| [OutlineStyle](arkts-outlinestyle-e.md) | 外描边样式。 |
| [PreDragStatus](arkts-predragstatus-e.md) | 定义拖拽手势触发前的各阶段状态。 |
| [PreviewScaleMode](arkts-previewscalemode-e.md) | 预览图的缩放方式。 |
| [RepeatMode](arkts-repeatmode-e.md) | Defines the Border Image Repeat Mode. |
| [ReusableMemOptStrategy](arkts-reusablememoptstrategy-e.md) | 定义内存优化策略的类型。 |
| [SafeAreaEdge](arkts-safeareaedge-e.md) | 扩展安全区域的边缘。 |
| [SafeAreaType](arkts-safeareatype-e.md) | 扩展安全区域的枚举类型。 |
| [ScrollSizeMode](arkts-scrollsizemode-e.md) | 半模态面板上下滑动时的内容更新方式。 |
| [ShadowStyle](arkts-shadowstyle-e.md) | 组件阴影效果。 |
| [ShadowType](arkts-shadowtype-e.md) | 阴影类型。 |
| [SheetKeyboardAvoidMode](arkts-sheetkeyboardavoidmode-e.md) | 半模态激活输入法时对软键盘的避让方式。 > **说明：** > > 设置POPUP_SHEET避让方式时，半模态只避让由面板内的文本框组件拉起的软键盘场景，其他场景半模态无需避让。 |
| [SheetMode](arkts-sheetmode-e.md) | 半模态的显示层级模式。 |
| [SheetSize](arkts-sheetsize-e.md) | 指定半模态的高度。 |
| [SheetType](arkts-sheettype-e.md) | 半模态弹窗的样式。 |
| [SourceTool](arkts-sourcetool-e.md) | 定义输入源对应的工具类型。 |
| [SourceType](arkts-sourcetype-e.md) | 定义输入源对应的设备类型。 |
| [SystemProperties](arkts-systemproperties-e.md) | 定义系统环境变量枚举值 |
| [ThemeColorMode](arkts-themecolormode-e.md) | 设置颜色模式。 |
| [TouchTestStrategy](arkts-touchteststrategy-e.md) | 事件派发策略。 |
| [TransitionEdge](arkts-transitionedge-e.md) | 转场边缘类型。 |
| <!--DelRow-->[TransitionHierarchyStrategy](arkts-transitionhierarchystrategy-e.md) | 共享元素动画过程中in/out组件层级位置移动策略枚举。 | 名称 | 值 | 说明 | | ------ | - | ---- | | NONE | 0 | 无层级提拉，in/out组件保持原来的层级位置，受父组件scale、position影响。 | | ADAPTIVE | 1 | 有层级提拉，in/out组件中相对低层级的组件被提拉至组件树上in/out组件相对高层级的位置上。 此模式还会导致被提拉的组件与父组件解绑，不受父组件scale、position影响。 例如in组件层级高于out组件，开启层级提拉后会在动画过程中将out组件从自己的父组件处解耦，并提拉至in组件的层级位置处，in组件层级位置不变。| |

### Types

| Name | Description |
| --- | --- |
| [AccessibilityActionInterceptCallback](arkts-accessibilityactioninterceptcallback-t.md) | 定义在可访问性操作拦截中使用的回调类型。 action的值表示可访问性动作类型。 |
| [AccessibilityCallback](arkts-accessibilitycallback-t.md) | Defines the callback type used in accessibility hover events. The value of isHover indicates whether the touch is hovering over the component. The value of event contains information about AccessibilityHoverEvent. |
| [AccessibilityFocusCallback](arkts-accessibilityfocuscallback-t.md) | Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused |
| [AccessibilityTransparentCallback](arkts-accessibilitytransparentcallback-t.md) | Defines the callback type used in accessibility hover transparent event. |
| [AnimationRange](arkts-animationrange-t.md) | 动画开始和结束时相对预览原图缩放比例。 |
| [AreaChangeCallback](arkts-areachangecallback-t.md) | 组件区域变化事件的回调类型。 |
| <!--DelRow-->[Blender](arkts-blender-t.md) | Blender |
| [BorderRadiusType](arkts-borderradiustype-t.md) | 圆角类型。 |
| [BuilderCallback](arkts-buildercallback-t.md) | 定义mutableBuilder中使用的回调类型。 |
| [CircleShape](arkts-circleshape-t.md) | 导入CircleShape类型对象。 |
| [ComponentContent](arkts-componentcontent-t.md) | 组件内容的实体封装。 |
| [Context](arkts-context-t.md) | Get context. |
| [CustomBuilder](arkts-custombuilder-t.md) | 定义CustomBuilder类型。 |
| [CustomBuilderT](arkts-custombuildert-t.md) | 定义带参数的CustomBuilder类型 |
| [DataLoadParams](arkts-dataloadparams-t.md) | 落入操作时使用的数据加载参数。 |
| [DataSyncOptions](arkts-datasyncoptions-t.md) | 作为startDataLoading的入参对象。 |
| [DragSpringLoadingConfiguration](arkts-dragspringloadingconfiguration-t.md) | 定义拖拽的悬停检测配置参数的接口。 |
| [DrawContext](arkts-drawcontext-t.md) | DrawContext |
| [EllipseShape](arkts-ellipseshape-t.md) | 导入EllipseShape类型对象。 |
| [EnvDecorator](arkts-envdecorator-t.md) | 定义Env装饰器类型 |
| [Filter](arkts-filter-t.md) | 导入Filter类型对象。 |
| [FractionStop](arkts-fractionstop-t.md) | 定义模糊段。 |
| [GestureCollectInterceptCallback](arkts-gesturecollectinterceptcallback-t.md) | 定义在[onGestureCollectIntercept]{@link CommonMethod#onGestureCollectIntercept}中使用的回调类型。 |
| [GestureRecognizerJudgeBeginCallback](arkts-gesturerecognizerjudgebegincallback-t.md) | 自定义手势识别器判定回调类型。 |
| [HoverCallback](arkts-hovercallback-t.md) | hover事件的回调类型。 |
| [ImageModifier](arkts-imagemodifier-t.md) | ImageModifier |
| [InputEventListener](arkts-inputeventlistener-t.md) | 输入事件监听器回调函数类型。 > **说明：** > > - RawInputEventWrapper是抽象类，开发者无法使用`new`运算符创建实例。 > > - 系统会在事件触发时自动创建实例并通过此参数传递给回调函数。 > > - 当前回调参数event仅会封装以下原始输入事件类型： > [MouseEvent]{@link MouseEvent}、[TouchEvent]{@link TouchEvent}、[KeyEvent]{@link KeyEvent}。开发者可通过 > [asMouseEvent]{@link RawInputEventWrapper#asMouseEvent}、[asTouchEvent]{@link RawInputEventWrapper#asTouchEvent}、 > [asKeyEvent]{@link RawInputEventWrapper#asKeyEvent}获取对应事件对象。 > > - 请勿在回调中执行耗时操作（如复杂计算或网络请求），否则可能导致应用卡顿。 > > - 监听器在UI线程中同步执行会直接阻塞事件处理流程。建议只进行简单的判断和计算。 |
| [IntentionCode](arkts-intentioncode-t.md) | 按键对应的意图。 |
| [Matrix4Transit](arkts-matrix4transit-t.md) | 为普通方法导入Matrix4Transit类型对象。 |
| [MonitorDecorator](arkts-monitordecorator-t.md) | Defines Monitor Decorator type |
| [NavDestinationInfo](arkts-navdestinationinfo-t.md) | NavDestinationInfo实例对象。 |
| [NavigationInfo](arkts-navigationinfo-t.md) | NavigationInfo实例对象。 |
| [OnDidStopDraggingCallback](arkts-ondidstopdraggingcallback-t.md) | On scroll callback using in scrollable onDidStopDragging. |
| [OnDragEventCallback](arkts-ondrageventcallback-t.md) | 拖拽事件的回调函数。 |
| [OnGetPreviewBadgeCallback](arkts-ongetpreviewbadgecallback-t.md) | 定义EditModeOptions的onGetPreviewBadge中使用的回调类型。 |
| [OnItemDragStartCallback](arkts-onitemdragstartcallback-t.md) | 定义在onItemDragStart中使用的回调类型。 |
| [OnMoveHandler](arkts-onmovehandler-t.md) | Defines the onMove callback. |
| [OnNeedSoftkeyboardCallback](arkts-onneedsoftkeyboardcallback-t.md) | 定义了在onNeedSoftkeyboard中被使用的回调函数类型。 组件获焦时回调函数被调用，返回值表示是否需要拉起键盘。 |
| [OnScrollCallback](arkts-onscrollcallback-t.md) | On scroll callback using in scrollable onDidScroll. |
| [OnVisibleIndexesChangeCallback](arkts-onvisibleindexeschangecallback-t.md) | 定义onScrollIndex的回调类型。 |
| [OnWillScrollCallback](arkts-onwillscrollcallback-t.md) | Called before scroll to allow developer to control real offset the Scrollable can scroll. |
| [OnWillStopDraggingCallback](arkts-onwillstopdraggingcallback-t.md) | On scroll callback using in scrollable onWillStopDragging. |
| [Optional](arkts-optional-t.md) | 定义可选类型，其值可以是undefined。 |
| [PathShape](arkts-pathshape-t.md) | 导入PathShape类型对象。 |
| [PixelMap](arkts-pixelmap-t.md) | Defines the PixelMap type object for ui component. |
| [PointerStyle](arkts-pointerstyle-t.md) | 光标样式。 > **说明：** > > 直接使用cursorControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取 > [UIContext]{@link @ohos.arkui.UIContext}实例，并使用 > [getCursorController]{@link @ohos.arkui.UIContext:UIContext#getcursorcontroller}获取绑定实例 > 的cursorControl。 |
| [PopupStateChangeCallback](arkts-popupstatechangecallback-t.md) | 气泡状态变化事件回调。 |
| [PromptActionDialogController](arkts-promptactiondialogcontroller-t.md) | 从promptAction导入弹出框控制器类型 |
| [RectShape](arkts-rectshape-t.md) | 导入RectShape类型对象。 |
| [ReuseIdCallback](arkts-reuseidcallback-t.md) | ReuseId callback type. It is used to compute reuseId. |
| [ReusePoolOwnership](arkts-reusepoolownership-t.md) | 定义自定义组件的重用类型。 |
| [RouterPageInfo](arkts-routerpageinfo-t.md) | RouterPageInfo实例对象。 |
| [ShouldBuiltInRecognizerParallelWithCallback](arkts-shouldbuiltinrecognizerparallelwithcallback-t.md) | 系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。 |
| [ShouldRecognizerParallelWithCallback](arkts-shouldrecognizerparallelwithcallback-t.md) | 手势与响应链上其他组件的手势设置并行关系的回调事件类型。 |
| [SizeChangeCallback](arkts-sizechangecallback-t.md) | 组件区域变化时的回调类型。 oldValue表示目标元素变化之前的宽高。 newValue表示目标元素变化之后的宽高。 |
| [SpringLoadingContext](arkts-springloadingcontext-t.md) | 定义回调上下文信息的类，用于在悬停检测回调中传递给应用程序，使其能访问拖拽状态。 |
| [Summary](arkts-summary-t.md) | 拖拽相关数据的简介。 |
| [SymbolGlyphModifier](arkts-symbolglyphmodifier-t.md) | SymbolGlyphModifier |
| [SystemUiMaterial](arkts-systemuimaterial-t.md) | 系统材质对象基类。 |
| [Theme](arkts-theme-t.md) | 主题。 |
| [TipsMessageType](arkts-tipsmessagetype-t.md) | 悬浮气泡弹窗信息。 |
| [TouchTestDoneCallback](arkts-touchtestdonecallback-t.md) | 动态指定手势识别器是否参与手势处理的回调事件类型，回调内参数的生命周期跟随回调本身，参数内的方法仅支持在回调内同步使用。 |
| [TransitionEffects](arkts-transitioneffects-t.md) | 定义所有转场效果。 |
| [TransitionFinishCallback](arkts-transitionfinishcallback-t.md) | 组件转场动画的结束回调类型。 |
| [UIContext](arkts-uicontext-t.md) | UIContext |
| [UnifiedData](arkts-unifieddata-t.md) | 拖拽相关的数据。 |
| [UniformDataType](arkts-uniformdatatype-t.md) | 标准化数据类型。 |
| [VisibleAreaChangeCallback](arkts-visibleareachangecallback-t.md) | 组件可见区域变化事件的回调类型。 |
| [VisualEffect](arkts-visualeffect-t.md) | 导入VisualEffect类型对象。 |
| [window](arkts-window-t.md) |  |

### Constants

| Name | Description |
| --- | --- |
| [Common](arkts-common-con.md#Common) | Common通用接口 |
| [CommonInstance](arkts-common-con.md#CommonInstance) | 公共通用属性实例 |

