# @ohos.arkui.UIContext

## 导入模块

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [BackPressActionProposal](arkts-backpressactionproposal-c.md) | 智慧手势返回动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会返回上一页面。 |
| [BaseGestureHandlingProposal](arkts-basegesturehandlingproposal-c.md) | 智慧手势处理基类。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，其回调参数类型为具体的子类类型实例。 |
| [ClickActionProposal](arkts-clickactionproposal-c.md) | 智慧手势点击动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的点击操作。 > **说明：** > > - 该动作处理遵循“先选中，再点击”的处理语义。 > > - 当目标节点尚未被选中时，本次处理会优先建立选中态，而不会立即触发点击。 |
| [ComponentSnapshot](arkts-componentsnapshot-c.md) | 提供获取组件截图的能力，包括已加载的组件的截图和没有加载的组件的截图。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 以下API需先使用UIContext中的[getComponentSnapshot()]{@link UIContext#getComponentSnapshot}方法获取ComponentSnapshot对象，再通过此实例调用对应方法。 > > - 缩放、平移、旋转等图形变换属性只对被截图组件的子组件生效；对目标组件本身应用图形变换属性不生效，显示的还是图形变换前的效果。 |
| [ComponentUtils](arkts-componentutils-c.md) | 提供获取组件绘制区域坐标和大小的能力。 > **说明：** > > - 本Class首批接口从API version 10开始支持。 > > - 以下API需先使用UIContext中的[getComponentUtils()]{@link UIContext#getComponentUtils}方法获取到ComponentUtils对象，再通过该对象调用对应方法。 |
| [ContextMenuController](arkts-contextmenucontroller-c.md) | class ContextMenuController |
| [CursorController](arkts-cursorcontroller-c.md) | 提供光标样式设置的能力。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 以下API需先使用UIContext中的[getCursorController()]{@link UIContext#getCursorController}方法获取CursorController实例，再通过此实例调用对应方法。 |
| [DialogPresenter](arkts-dialogpresenter-c.md) | 提供统一的Dialog API。 |
| [DragController](arkts-dragcontroller-c.md) | 提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。 > **说明：** > > 以下API需先使用UIContext中的[getDragController()]{@link UIContext#getDragController}方法获取DragController实例，再通过此实例调用对应方法。 |
| [DynamicSyncScene](arkts-dynamicsyncscene-c.md) | Represents a dynamic synchronization scene. |
| [FocusController](arkts-focuscontroller-c.md) | 提供控制焦点的能力，如清除、移动和激活焦点等功能。 > **说明：** > > 以下API需先使用UIContext中的[getFocusController()]{@link UIContext#getFocusController}方法获取FocusController实例，再通过该实例调用对应方法。 |
| [Font](arkts-font-c.md) | class Font |
| [FrameCallback](arkts-framecallback-c.md) | 用于设置下一帧渲染时需要执行的任务。 > **说明：** > > - 以下API需要配合[UIContext]{@link @ohos.arkui.UIContext}中的[postFrameCallback]{@link UIContext#postFrameCallback}和 > [postDelayedFrameCallback]{@link UIContext#postDelayedFrameCallback}使用。开发者需要继承该类并重写 > [onFrame]{@link FrameCallback#onFrame}或[onIdle]{@link FrameCallback#onIdle}方法，实现具体的业务逻辑。 |
| [GestureHandlingResolution](arkts-gesturehandlingresolution-c.md) | 智慧手势处理结果声明类。 |
| <!--DelRow-->[LuminanceSampler](arkts-luminancesampler-c.md) | 设置背景亮度取色参数、注册亮度变化监听回调、取消注册监听回调。 > **说明：** > > 以下API需先使用UIContext中的[getLuminanceSampler]{@link UIContext#getLuminanceSampler}方法获取到LuminanceSampler对象，再通过该对象调用对应方法。 |
| [Magnifier](arkts-magnifier-c.md) | 提供控制放大镜的能力。 |
| [MarqueeDynamicSyncScene](arkts-marqueedynamicsyncscene-c.md) | Represents a dynamic synchronization scene of Marquee. |
| [MeasureUtils](arkts-measureutils-c.md) | class MeasureUtils <p><strong>NOTE</strong>: <br>You must first use getMeasureUtils() in UIContext to obtain a MeasureUtils instance, and then call the APIs using the obtained instance. </p> |
| [MediaQuery](arkts-mediaquery-c.md) | class MediaQuery |
| [NoneActionProposal](arkts-noneactionproposal-c.md) | 智慧手势空动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，不会触发任何动作。 |
| [OverlayManager](arkts-overlaymanager-c.md) | class OverlayManager |
| [PageSwitchActionProposal](arkts-pageswitchactionproposal-c.md) | 智慧手势翻页动作处理，默认方向为向前翻页，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的翻页操作。 |
| [PromptAction](arkts-promptaction-c.md) | class PromptAction |
| [ResolvedUIContext](arkts-resolveduicontext-c.md) | ResolvedUIContext实例对象。 > **说明：** > > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。 > > - ResolvedUIContext继承自[UIContext]{@link @ohos.arkui.UIContext}，该类对象包含[UIContext]{@link @ohos.arkui.UIContext}实例和 > [UIContext]{@link @ohos.arkui.UIContext}的解析策略。 |
| [Router](arkts-router-c.md) | class Router |
| [ScrollActionProposal](arkts-scrollactionproposal-c.md) | 智慧手势滚动动作处理，默认方向为向前滚动，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的滚动操作。 |
| [SelectActionProposal](arkts-selectactionproposal-c.md) | 智慧手势选中动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会使目标组件被选中。 |
| [SmartGestureController](arkts-smartgesturecontroller-c.md) | 提供智慧手势使能、监听、选中态控制，以及动态决策智慧手势行为的能力。 > **说明：** > > 以下API需先使用UIContext中的[getSmartGestureController()]{@link UIContext#getSmartGestureController}方法获取SmartGestureController实例， > 再通过该实例调用对应方法。 |
| [SwiperDynamicSyncScene](arkts-swiperdynamicsyncscene-c.md) | 提供Swiper组件相关帧率的配置。 > **说明** > SwiperDynamicSyncScene继承自[DynamicSyncScene]{@link @ohos.arkui.UIContext}，对应Swiper的动态帧率场景。 |
| [TargetedGestureProposal](arkts-targetedgestureproposal-c.md) | 带目标节点的智慧手势处理基类。 |
| [TextMenuController](arkts-textmenucontroller-c.md) | class TextMenuController |
| [UIContext](arkts-uicontext-c.md) | UIContext实例对象。 > **说明：** > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。 > > - 以下API需要通过对应的UIContext实例调用。获取UIContext分为三种方式，第一种是使用ohos.window中的 > [getUIContext()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10)方法获取UIContext实例，第二种是通过自定 > 义组件内置方法[getUIContext()](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-api.md#getuicontext)获取UIContext > 实例，第三种是通过UIContext类的静态方法如[getCallingScopeUIContext]{@link UIContext#getCallingScopeUIContext}获取UIContext实例。本文中 > UIContext对象以uiContext表示。 |
| [UIInspector](arkts-uiinspector-c.md) | class UIInspector |
| [UIObserver](arkts-uiobserver-c.md) | 提供UI组件行为变化的无感监听能力。 > **说明：** > - 以下API需先使用UIContext中的[getUIObserver()]{@link UIContext#getUIObserver}方法获取到UIObserver对象，再通过该对象调用对应方法。 > > - UIObserver仅能监听到本进程内的相关信息，不支持获取<!--Del-->[UIExtensionComponent]{@link ui_extension_component}等<!--DelEnd-->跨进程场景的信 > 息。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AtomicServiceBar](arkts-atomicservicebar-i.md) | interface AtomicServiceBar |
| <!--DelRow-->[BackgroundLuminanceSamplingConfigs](arkts-backgroundluminancesamplingconfigs-i.md) | 背景取色参数配置。 |
| [GestureObserverConfigs](arkts-gestureobserverconfigs-i.md) | 该参数用于指定需要监听的手势回调阶段（传入空数组将无效），仅当手势触发指定阶段时才会发送通知。 |
| [GestureTriggerInfo](arkts-gesturetriggerinfo-i.md) | 特定手势回调函数触发时的信息。 |
| [OrderOverlayOptions](arkts-orderoverlayoptions-i.md) | 使用顺序打开浮层的选项。 |
| [OverlayManagerOptions](arkts-overlaymanageroptions-i.md) | the property of OverlayManager. |
| [PageInfo](arkts-pageinfo-i.md) | Defines the PageInfo type. The value of routerPageInfo indicates the information of the router page, or undefined if the frameNode does not have router page information. And the value of navDestinationInfo indicates the information of the navDestination, or undefined if the frameNode does not have navDestination information. |
| [SwiperContentInfo](arkts-swipercontentinfo-i.md) | Swiper组件的内容区信息。 |
| [SwiperItemInfo](arkts-swiperiteminfo-i.md) | Swiper子组件的信息。 |
| [TargetInfo](arkts-targetinfo-i.md) | Defines the target info. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CustomKeyboardContinueFeature](arkts-customkeyboardcontinuefeature-e.md) | 自定义键盘接续特性的枚举。 |
| [GestureActionPhase](arkts-gestureactionphase-e.md) | 此枚举类型表示手势回调触发阶段，对应gesture.d.ts中定义的动作回调，但不同手势类型支持的阶段不同（如SwipeGesture仅包含WILL_START枚举值）。 |
| [GestureListenerType](arkts-gesturelistenertype-e.md) | 此枚举类型用于指定需要监控的手势类型。 |
| [KeyboardAvoidMode](arkts-keyboardavoidmode-e.md) | 配置键盘弹出时页面的避让模式。 |
| [MarqueeDynamicSyncSceneType](arkts-marqueedynamicsyncscenetype-e.md) | Marquee的动态帧率场景的类型枚举 |
| [NodeRenderState](arkts-noderenderstate-e.md) | An enumeration type that identifies the current node's rendering state. The UI components used in the application are automatically managed by the system and controlled for participation in graphical rendering by either mounting them onto the render tree or removing them from it. Only nodes that participate in graphical rendering have the potential to be displayed. However, participating in rendering does not equal to the node's visibility, as there may be many occlusion scenarios in the actual implementation of the application. Nevertheless, if a node does not participate in rendering, it will definitely not be visible. |
| [ResolveStrategy](arkts-resolvestrategy-e.md) | UIContext对象的解析策略。 |
| [SwiperDynamicSyncSceneType](arkts-swiperdynamicsyncscenetype-e.md) | 枚举值，表示动态帧率场景的类型。 |
| [TextSelectionClearPolicy](arkts-textselectionclearpolicy-e.md) | TextSelectionClearPolicy的枚举 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ClickEventListenerCallback](arkts-clickeventlistenercallback-t.md) | 定义了用于在UIObserver中监听点击事件的回调类型。 |
| [Context](arkts-context-t.md) | 当前组件所在Ability的上下文。 |
| [CustomBuilderWithId](arkts-custombuilderwithid-t.md) | 组件属性、方法参数可使用CustomBuilderWithId类型来自定义UI描述，并且可以指定组件ID生成用户自定义组件。 |
| [GestureEventListenerCallback](arkts-gestureeventlistenercallback-t.md) | 定义了用于在UIObserver中监听手势的回调类型。 |
| [GestureListenerCallback](arkts-gesturelistenercallback-t.md) | 定义了用于在UIObserver中监控特定手势触发信息的回调类型。 |
| [NodeIdentity](arkts-nodeidentity-t.md) | 定义节点标识类型。对于string类型，代表指定组件id，该id通过通用属性[id]{@link CommonMethod#id}设置。对于number类型， 代表系统分配的唯一标识的节点UniqueID，可通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。 |
| [NodeRenderStateChangeCallback](arkts-noderenderstatechangecallback-t.md) | 定义了用于在UIObserver中监控某个特定节点渲染状态的回调类型。 |
| [PanListenerCallback](arkts-panlistenercallback-t.md) | Pan手势事件监听函数类型。 |
| [PointerStyle](arkts-pointerstyle-t.md) | 光标样式。 |

