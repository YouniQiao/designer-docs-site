# gesture

## gesture

## tag

```TypeScript
tag(tag: string): T
```

设置手势的标志。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tag | string | 是 | 手势的标志。 |

## allowedTypes

```TypeScript
allowedTypes(types: Array<SourceTool>): T
```

设置手势响应的输入类型。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| types | Array&lt;SourceTool> | 是 | 手势响应的输入类型。 |

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [GestureControl](arkts-gesturecontrol-n.md) | 定义手势竞争结果。 |

### 类

| 名称 | 描述 |
| --- | --- |
| [EventTargetInfo](arkts-eventtargetinfo-c.md) | 手势识别器对应组件的信息。 |
| [GestureGroupHandler](arkts-gesturegrouphandler-c.md) | 手势组处理器对象类型。 |
| [GestureHandler](arkts-gesturehandler-c.md) | 手势处理器的基础类型。 |
| [GestureRecognizer](arkts-gesturerecognizer-c.md) | 手势识别器对象。 |
| [LongPressGestureHandler](arkts-longpressgesturehandler-c.md) | 长按手势处理器对象类型。 |
| [LongPressRecognizer](arkts-longpressrecognizer-c.md) | 长按手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。 |
| [PanGestureHandler](arkts-pangesturehandler-c.md) | 滑动手势处理器对象类型。 |
| [PanGestureOptions](arkts-pangestureoptions-c.md) | 定义PanGesture配置参数选项。 |
| [PanRecognizer](arkts-panrecognizer-c.md) | 手势识别器对象。 |
| [PinchGestureHandler](arkts-pinchgesturehandler-c.md) | 捏合手势处理器对象类型。 |
| [PinchRecognizer](arkts-pinchrecognizer-c.md) | 捏合手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。 |
| [RotationGestureHandler](arkts-rotationgesturehandler-c.md) | 旋转手势处理器对象类型。 |
| [RotationRecognizer](arkts-rotationrecognizer-c.md) | 旋转手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。 |
| [ScrollableTargetInfo](arkts-scrollabletargetinfo-c.md) | 手势识别器对应的滚动类容器组件的信息，继承于[EventTargetInfo]{@link EventTargetInfo}。 |
| [SwipeGestureHandler](arkts-swipegesturehandler-c.md) | 快滑手势处理器对象类型。 |
| [SwipeRecognizer](arkts-swiperecognizer-c.md) | 快滑手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。 |
| [TapGestureHandler](arkts-tapgesturehandler-c.md) | 点击手势处理器对象类型。 |
| [TapRecognizer](arkts-taprecognizer-c.md) | 点击手势识别器对象，继承自[GestureRecognizer]{@link GestureRecognizer}。 |
| [TouchRecognizer](arkts-touchrecognizer-c.md) | 触摸识别器对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BaseGestureEvent](arkts-basegestureevent-i.md) | 基础手势事件类型。继承自[BaseEvent]{@link BaseEvent}。 |
| [BaseHandlerOptions](arkts-basehandleroptions-i.md) | 基础手势处理器配置参数。 |
| [EventLocationInfo](arkts-eventlocationinfo-i.md) | 用于点击手势获取点击位置坐标。 |
| [FingerInfo](arkts-fingerinfo-i.md) | 手指信息类型。 |
| [GestureEvent](arkts-gestureevent-i.md) | 定义手势的事件信息。继承自[BaseEvent]{@link BaseEvent}。 |
| [GestureGroupGestureHandlerOptions](arkts-gesturegroupgesturehandleroptions-i.md) | 手势组处理器配置参数。 |
| [GestureGroupInterface](arkts-gesturegroupinterface-i.md) | 手势识别组合，即两种及以上手势组合为复合手势，支持顺序识别、并发识别和互斥识别。 |
| [GestureInfo](arkts-gestureinfo-i.md) | 手势信息类型。 |
| [GestureInterface](arkts-gestureinterface-i.md) | 定义Gesture接口。 |
| [LongPressGestureEvent](arkts-longpressgestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [LongPressGestureHandlerOptions](arkts-longpressgesturehandleroptions-i.md) | 长按手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [LongPressGestureInterface](arkts-longpressgestureinterface-i.md) | 用于触发长按手势事件，触发长按手势的最少手指数为1，默认最短长按时间为500毫秒。可配置duration参数控制最短长按时长。 > **说明：** > > 从API version 18开始，部分设备会优先响应系统的双指长按手势，导致应用的双指长按手势不生效。 |
| [PanGestureEvent](arkts-pangestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [PanGestureHandlerOptions](arkts-pangesturehandleroptions-i.md) | 滑动手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [PanGestureInterface](arkts-pangestureinterface-i.md) | 滑动手势事件，当滑动的最小距离达到设定的最小值时触发滑动手势事件。 |
| [PinchGestureEvent](arkts-pinchgestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [PinchGestureHandlerOptions](arkts-pinchgesturehandleroptions-i.md) | 捏合手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [PinchGestureInterface](arkts-pinchgestureinterface-i.md) | 用于触发捏合手势，最少需要2指，最多5指，最小识别距离为5vp。在支持鼠标和键盘输入的设备上，通过“Ctrl+鼠标滚轮”也可以触发捏合手势。 > **说明：** > > 捏合手势触发成功后，抬起手指直至不再满足触发条件。再次满足条件时，可重新触发捏合手势。 |
| [RotationGestureEvent](arkts-rotationgestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [RotationGestureHandlerOptions](arkts-rotationgesturehandleroptions-i.md) | 旋转手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [RotationGestureInterface](arkts-rotationgestureinterface-i.md) | 用于触发旋转手势，最少需要2指，最多5指，最小改变度数为1度。该手势不支持通过触控板双指旋转操作触发。 |
| [SwipeGestureEvent](arkts-swipegestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [SwipeGestureHandlerOptions](arkts-swipegesturehandleroptions-i.md) | 快滑手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [SwipeGestureInterface](arkts-swipegestureinterface-i.md) | 用于触发快滑手势，滑动速度需大于速度阈值，默认最小速度为100vp/s。 |
| [TapGestureEvent](arkts-tapgestureevent-i.md) | 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod#onGestureJudgeBegin}的 event参数来传递。 |
| [TapGestureHandlerOptions](arkts-tapgesturehandleroptions-i.md) | 点击手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 |
| [TapGestureInterface](arkts-tapgestureinterface-i.md) | 支持单击、双击和多次点击事件的识别。 > **说明：** > > 当组件同时绑定双击和单击手势且双击手势先绑定时，单击手势会有300ms的延时。 |
| [TapGestureParameters](arkts-tapgestureparameters-i.md) | 点击手势参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。 > **说明：** > > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [GestureJudgeResult](arkts-gesturejudgeresult-e.md) | 定义手势竞争结果。 |
| [GestureMask](arkts-gesturemask-e.md) | 定义是否屏蔽子组件手势。 |
| [GestureMode](arkts-gesturemode-e.md) | 定义手势组的识别模式。 |
| [GesturePriority](arkts-gesturepriority-e.md) | 绑定手势的优先级。 |
| [GestureRecognizerState](arkts-gesturerecognizerstate-e.md) | 定义手势识别器状态。 |
| [PanDirection](arkts-pandirection-e.md) | 与SwipeDirection不同，PanDirection没有角度限制。 |
| [SwipeDirection](arkts-swipedirection-e.md) | 定义滑动手势的触发方向。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [GestureType](arkts-gesturetype-t.md) | Defines the Gesture Type. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [GestureGroup](arkts-gesture-con.md#GestureGroup) | Defines GestureGroup Component. |
| [LongPressGesture](arkts-gesture-con.md#LongPressGesture) | Defines LongPressGesture Component. |
| [PanGesture](arkts-gesture-con.md#PanGesture) | Defines PanGesture Component. |
| [PinchGesture](arkts-gesture-con.md#PinchGesture) | Defines PinchGesture Component. |
| [RotationGesture](arkts-gesture-con.md#RotationGesture) | Defines RotationGesture Component. |
| [SwipeGesture](arkts-gesture-con.md#SwipeGesture) | Defines SwipeGesture Component. |
| [TapGesture](arkts-gesture-con.md#TapGesture) | Defines TapGesture Component. |

