# UIContext

UIContext实例对象。 > **说明：** > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。 > > - 以下API需要通过对应的UIContext实例调用。获取UIContext分为三种方式，第一种是使用ohos.window中的 > [getUIContext()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10)方法获取UIContext实例，第二种是通过自定 > 义组件内置方法[getUIContext()](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-api.md#getuicontext)获取UIContext > 实例，第三种是通过UIContext类的静态方法如[getCallingScopeUIContext](arkts-uicontext-c.md#getCallingScopeUIContext)获取UIContext实例。本文中 > UIContext对象以uiContext表示。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## addLocalInputEventMonitor

```TypeScript
addLocalInputEventMonitor(eventMask: int, listener: InputEventListener): InputEventMonitor
```

注册本地输入事件监视器。 接口名中的“Local”表示监视器只在当前UIContext内有效。 并且不影响其他UIContext实例。每个UIContext都维护自己独立的监视器列表。 > **说明** > >性能警告：不要在回调中执行耗时操作！ > >监控对象注释： > > > -返回的Monitor对象是系统创建的唯一标识符。 > > > -开发人员不能主动构造或伪造此对象。 > > > -必须保存返回的监控对象引用，以便后续取消。 > > > -建议使用变量来保存，以免丢失引用。 > >使用示例： > >。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventMask | int | 是 | 事件类型掩码，指定要监视的事件类型  位运算。  取值限定为整数。 |
| listener | InputEventListener | 是 | 事件监听器回调函数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputEventMonitor | Unique identifier object for the monitor, used for subsequent  cancellation of registration. |

## animateTo

```TypeScript
animateTo(value: AnimateParam, event: () => void): void
```

提供animateTo接口，用于为闭包代码中的状态变化添加过渡动画效果。 > **说明：** > > - 不推荐在aboutToAppear、aboutToDisappear中调用动画。 > > - 如果在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中调用动 > 画，自定义组件内的build还未执行，内部组件还未创建，动画时机过早，动画属性没有初值无法对组件产生动画。 > > - 执行[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear) > 时，组件即将销毁，不能在aboutToDisappear里面做动画。 > > - 在组件出现和消失时，可以通过[组件内转场]common添加动画效果。 > > - 组件内转场不支持的属性，可以参考[显式动画]common中的 > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#示例2动画执行结束后组件消失)，使用animateTo实现动画执行结束后组件消失的效 > 果。 > > - 某些场景下，在[状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)中使用animateTo动画，会产生异常效果， > 具体可参考：[在状态管理V2中使用animateTo动画效果异常](docroot://ui/state-management/arkts-new-local.md#在状态管理v2中使用animateto动画效果异常)。 > > - UIAbility从前台切换至后台时会立即结束仍在步进中的有限循环动画，从而触发动画播放完成回调[onFinish]AnimateParam。 > > - 在设置的开发者选项中关闭过渡动画，动画会当帧结束，onFinish动画播放完成回调会立即执行，请避免在回调中加入时序相关的功能逻辑。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | AnimateParam | 是 | 设置动画效果相关参数。 |
| event | () => void | 是 | 指定显示动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。 |

## animateToImmediately

```TypeScript
animateToImmediately(param: AnimateParam, processor: Callback<void>): void
```

通过UIContext对象指定明确的动画主实例上下文，并触发显式动画立即下发。避免由于找不到实例或实例不对，导致的动画不执行或动画结束回调不执行问题。使用callback异步回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | AnimateParam | 是 | 设置动画效果相关参数。 |
| processor | Callback&lt;void> | 是 | 回调函数。指定显示动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。 |

## bindTabsToNestedScrollable

```TypeScript
bindTabsToNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void
```

Bind tabs to nested scrollable container components to automatically hide tab bar.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabsController | TabsController | 是 | The controller of the tabs. |
| parentScroller | Scroller | 是 | The controller of the parent scrollable container component. |
| childScroller | Scroller | 是 | The controller of the child scrollable container component. |

## bindTabsToScrollable

```TypeScript
bindTabsToScrollable(tabsController: TabsController, scroller: Scroller): void
```

Bind tabs to scrollable container component to automatically hide tab bar.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabsController | TabsController | 是 | The controller of the tabs. |
| scroller | Scroller | 是 | The controller of the scrollable container component. |

## clearResourceCache

```TypeScript
clearResourceCache(): void
```

清除跨模块（[HSP](docroot://quick-start/in-app-hsp.md)包）访问资源时生成的资源对象缓存。清除缓存后，下次访问该模块资源的加载时间会增加。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12 - 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. [since 12 - 22] |

**示例：**

```TypeScript
@Entry
@Component
struct MyStateSample {
  build() {
    Column() {
      Button("clearResourceCache")
        .onClick((event: ClickEvent) => {
          this.getUIContext().clearResourceCache()
        })
        .width('100%')
    }
  }
}

```

## closeBindSheet

```TypeScript
closeBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>): Promise<void>
```

关闭bindSheetContent对应的半模态页面，使用Promise异步回调。 > **说明：** > > 使用此接口关闭半模态页面时，不会触发shouldDismiss回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bindSheetContent | ComponentContent&lt;T> | 是 | 半模态页面中显示的组件内容。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 120001 | The bindSheetContent is incorrect. |
| 120003 | The bindSheetContent cannot be found. |

## constructor

```TypeScript
constructor()
```

构造UIContext对象。 > **说明：** > > 通过构造函数创建的UIContext对象指向不明确的UI上下文，即不指向任何UI实例。该UIContext对应实例的唯一标识ID为-1。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## createAnimator

```TypeScript
createAnimator(options: AnimatorOptions): AnimatorResult
```

定义Animator类。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AnimatorOptions | 是 | 定义动画选项。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AnimatorResult | Animator结果接口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## createAnimator

```TypeScript
createAnimator(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult
```

创建animator动画结果对象（AnimatorResult）。与[createAnimator](arkts-uicontext-c.md#createAnimator)相比，新增对 [SimpleAnimatorOptions](arkts-simpleanimatoroptions-c.md#SimpleAnimatorOptions)类型入参的支持。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AnimatorOptions \| SimpleAnimatorOptions | 是 | 定义动画选项。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AnimatorResult | Animator结果接口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## createUIContextWithoutWindow

```TypeScript
static createUIContextWithoutWindow(context: common.UIAbilityContext | common.ExtensionContext) : UIContext | undefined
```

创建一个不依赖窗口的UI实例，并返回其UI上下文。该接口所创建的UI实例是单例。 > **说明：** > > 返回的UI上下文只可用于创建[自定义节点](docroot://ui/arkts-user-defined-node.md)，不能执行其他UI操作。

**起始版本：** 17

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.UIAbilityContext \| common.ExtensionContext | 是 | [UIAbility]@ohos.app.ability.UIAbility或  [ExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-extensionability-c.md#ExtensionAbility)所对应的上下文环境。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext | Context of the created UI instance, or undefined if creation fails. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. The number of parameters is incorrect.  2. Invalid parameter type of context. |
| 100001 | Internal error. |

## destroyUIContextWithoutWindow

```TypeScript
static destroyUIContextWithoutWindow(): void
```

销毁[createUIContextWithoutWindow](arkts-uicontext-c.md#createUIContextWithoutWindow)创建的UI实例。

**起始版本：** 17

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## dispatchKeyEvent

```TypeScript
dispatchKeyEvent(node: number | string, event: KeyEvent): boolean
```

Dispach keyboard event to the frameNode with inspector key.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| node | number \| string | 是 | The uniqueId or inspector key of the target FrameNode. |
| event | KeyEvent | 是 | The keyboard event. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns whether the key event is consumed. |

## enableEventPassthrough

```TypeScript
enableEventPassthrough(enabled: boolean, eventType: RawInputEventType): void
```

是否启用或禁用事件直通。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 启用或禁用事件透传。默认值为false。 |
| eventType | RawInputEventType | 是 | 原始输入事件的类型。 |

## enableSwipeBack

```TypeScript
enableSwipeBack(enabled: Optional<boolean>): void
```

whether to enable or disable swipe to back event.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | 是 | enable or disable swipe to back event. |

## fp2px

```TypeScript
fp2px(value: number): number
```

将fp单位的数值转换为以px为单位的数值。 转换公式为：px值 = fp值 × 像素密度 × 字体缩放比例 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig](arkts-display-virtualscreenconfig-i.md#VirtualScreenConfig).density。 字体缩放比例：系统设置的字体缩放系数，对应 [Configuration.fontScale](docroot://reference/apis-arkui/arkui-ts/ts-types.md#configuration)。 > **说明：** > > getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

## freezeUINode

```TypeScript
freezeUINode(id: string, isFrozen: boolean): void
```

通过id设置组件冻结状态，防止组件被标记为脏从而触发布局更新。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件的id。 |
| isFrozen | boolean | 是 | 是否设置冻结。 true表示设置冻结，false表示设置不冻结。 默认值为false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. |

## freezeUINode

```TypeScript
freezeUINode(uniqueId: number, isFrozen: boolean): void
```

通过uniqueId设置组件的冻结状态，防止组件被标记为脏从而触发布局更新。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | 组件的uniqueId。 |
| isFrozen | boolean | 是 | 是否设置冻结。 true表示设置冻结，false表示设置不冻结。 默认值为false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. |

## getAllUIContexts

```TypeScript
static getAllUIContexts(): UIContext[]
```

获取所有当前有效的UIContext实例。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext[] | Array of all currently valid UIContext instances. Returns an empty array if no valid  UIContext instance exists. |

## getAtomicServiceBar

```TypeScript
getAtomicServiceBar(): Nullable<AtomicServiceBar>
```

Get AtomicServiceBar.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Nullable&lt;AtomicServiceBar> | The atomic service bar. |

## getAttachedFrameNodeById

```TypeScript
getAttachedFrameNodeById(id: string): FrameNode | null
```

通过组件的id获取当前窗口上的实体节点。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 节点对应的[组件标识]common。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FrameNode | The instance of FrameNode. |

## getCallingScopeUIContext

```TypeScript
static getCallingScopeUIContext(): UIContext | undefined
```

获取当前[调用作用域](docroot://ui/arkts-global-interface.md#基本概念)的UIContext，调用作用域不明确时返回undefined。 > **说明：** > > 返回的UIContext对象可能指向一个已销毁的UI实例，通常在由已销毁的实例抛出异步任务时出现。建议通过[isAvailable](arkts-uicontext-c.md#isAvailable)接口判断其有效性。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext | UIContext of the current  [calling scope](docroot://ui/arkts-global-interface.md#basic-concepts). Returns undefined if the calling  scope is ambiguous. |

## getComponentSnapshot

```TypeScript
getComponentSnapshot(): ComponentSnapshot
```

获取组件快照。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ComponentSnapshot | 组件快照。 |

## getComponentUtils

```TypeScript
getComponentUtils(): ComponentUtils
```

get object ComponentUtils.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ComponentUtils | object ComponentUtils. |

## getContextMenuController

```TypeScript
getContextMenuController(): ContextMenuController
```

Get object context menu controller.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ContextMenuController | object context menu controller. |

## getCursorController

```TypeScript
getCursorController(): CursorController
```

Get object cursor controller.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CursorController | object cursor controller. |

## getDialogPresenter

```TypeScript
getDialogPresenter(): DialogPresenter
```

获取Dialog对象。

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DialogPresenter | Dialog对象。 |

## getDragController

```TypeScript
getDragController(): DragController
```

Get DragController.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DragController | the DragController |

## getFilteredInspectorTree

```TypeScript
getFilteredInspectorTree(filters?: Array<string>): string
```

get the filtered attributes of the component tree.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filters | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | JSON string of the component tree and component attributes. For details about each field in  the component, see the return value description of [getInspectorInfo]FrameNode#getInspectorInfo. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## getFilteredInspectorTreeById

```TypeScript
getFilteredInspectorTreeById(id: string, depth: number, filters?: Array<string>): string
```

get the filtered attributes of the component tree with the specified id and depth

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | [ID]CommonMethod#id of the target component. |
| depth | number | 是 | Number of layers of child components. If the value is 0, the attributes of the  specified component and all its child components are obtained. If the value is 1, only the attributes of  the specified component are obtained. If the value is 2, the attributes of  the specified component and its  level-1 child components are obtained. The rest can be deduced by analogy. |
| filters | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | JSON string of the attributes of the specified component and its child components. For details  about each field in the component, see the return value  description of [getInspectorInfo]FrameNode#getInspectorInfo. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## getFocusController

```TypeScript
getFocusController(): FocusController
```

获取焦点控制器。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FocusController | 焦点控制器 |

## getFont

```TypeScript
getFont(): Font
```

get object font.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Font | object Font. |

## getFrameNodeById

```TypeScript
getFrameNodeById(id: string): FrameNode | null
```

通过组件的id获取组件树的实体节点。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 节点对应的[组件标识]common。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FrameNode | The instance of FrameNode. |

## getFrameNodeByUniqueId

```TypeScript
getFrameNodeByUniqueId(id: number): FrameNode | null
```

提供getFrameNodeByUniqueId接口通过组件的uniqueId获取组件树的实体节点。 1. 当uniqueId对应的是系统组件时，返回组件所对应的FrameNode； 2. 当uniqueId对应的是自定义组件时： - 若其有渲染内容，且没有被[@Reusable装饰器](docroot://ui/state-management/arkts-reusable.md)修饰时，返回该自定义组件的根节点，类型为__Common__。 - 若其无渲染内容，或者被[@Reusable装饰器](docroot://ui/state-management/arkts-reusable.md)修饰时，在该自定义组件的子组件创建完成前调用此接口，将返回null；在该自定义组件的子组件创建完成后调用，返回其第一个子组件的FrameNode。 3. 当uniqueId无对应的组件时，返回null。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 节点对应的UniqueId |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FrameNode | - The FrameNode with the target uniqueId, or null if the frameNode is not existed. |

## getHostContext

```TypeScript
getHostContext(): Context | undefined
```

获得当前元能力的Context。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | Context of the ability. The context type depends on the ability type. For example,  if this API is called in a page within a UIAbility window, the returned context type is  [UIAbilityContext](../../apis-ability-kit/arkts-apis/arkts-uiabilitycontext-c.md#UIAbilityContext). If this API is called in a page within an  ExtensionAbility window, the returned context type is  [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-extensioncontext-c.md#ExtensionContext). If the ability context does not exist,  undefined is returned. |

## getId

```TypeScript
getId(): number
```

获取UI实例对象唯一标识，多实例场景下，开发者可使用此唯一标识区分多个UI实例对象，便于管理。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 后端实例的唯一标识。取值范围为[-1, +∞)。 |

## getKeyboardAvoidMode

```TypeScript
getKeyboardAvoidMode(): KeyboardAvoidMode
```

返回虚拟键盘抬起时页面的避让模式。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| KeyboardAvoidMode | 返回虚拟键盘抬起时的页面避让模式。 |

## getLastFocusedUIContext

```TypeScript
static getLastFocusedUIContext(): UIContext | undefined
```

获取最近一次切换到获焦状态的UI实例的UIContext。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext | UIContext of the UI instance that most recently switched to the focused state.  Returns undefined if the most recently focused instance has been destroyed or if no instance has ever been  focused. |

## getLastForegroundUIContext

```TypeScript
static getLastForegroundUIContext(): UIContext | undefined
```

获取最近一次切换到前台状态的UI实例的UIContext。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext | UIContext of the UI instance that most recently switched to the foreground  state. Returns undefined if the most recently foreground UI instance has been destroyed or if no UI  instance has ever been in the foreground. |

## getLuminanceSampler

```TypeScript
getLuminanceSampler(target: TargetInfo): LuminanceSampler | undefined
```

获取[LuminanceSampler]@ohos.arkui.UIContext取色对象，通过该对象设置背景亮度取色参数、注册亮度变化监听回调、取消注册监听回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | TargetInfo | 是 | 目标组件的标识。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LuminanceSampler | the luminance sampler or undefined. |

## getMagnifier

```TypeScript
getMagnifier(): Magnifier
```

获取[Magnifier]@ohos.arkui.UIContext对象，可控制放大镜显示和隐藏。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Magnifier | Magnifier对象，可用于控制放大镜的显示和隐藏。 |

## getMaxFontScale

```TypeScript
getMaxFontScale(): number
```

Get the max font scale.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | The max font scale. |

## getMeasureUtils

```TypeScript
getMeasureUtils(): MeasureUtils
```

Get MeasureUtils.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MeasureUtils | the MeasureUtils |

## getMediaQuery

```TypeScript
getMediaQuery(): MediaQuery
```

get object mediaQuery.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaQuery | object MediaQuery. |

## getNavigationInfoByUniqueId

```TypeScript
getNavigationInfoByUniqueId(id: number): observer.NavigationInfo | undefined
```

Get navigation information of the frameNode with uniqueId.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | The uniqueId of the target FrameNode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| observer.NavigationInfo | - The navigation information of the frameNode with the  target uniqueId, or undefined if the frameNode is not existed or does not have navigation information. |

## getOverlayManager

```TypeScript
getOverlayManager(): OverlayManager
```

Obtains the OverlayManager object.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OverlayManager | OverlayManager instance obtained. |

## getOverlayManagerOptions

```TypeScript
getOverlayManagerOptions(): OverlayManagerOptions
```

Get object OverlayManagerOptions.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OverlayManagerOptions | object OverlayManagerOptions. |

## getPageInfoByUniqueId

```TypeScript
getPageInfoByUniqueId(id: number): PageInfo
```

Get page information of the frameNode with uniqueId.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | The uniqueId of the target FrameNode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PageInfo | - The page information of the frameNode with the target uniqueId, includes  navDestination and router page information. If the frame node does not have navDestination and  router page information, it will return an empty object. |

## getPageRootNode

```TypeScript
getPageRootNode(): FrameNode | null
```

获取UIContext对应页面的根节点。

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FrameNode | FrameNode of the root node of the page or null.  If no valid FrameNode is available, null is returned.  If no page is loaded in the window, null is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 120007 | The UIContext is not available. |

## getPixelRoundMode

```TypeScript
getPixelRoundMode(): PixelRoundMode
```

获取当前应用的像素取整模式。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PixelRoundMode | Pixel rounding mode of the current page. |

## getPromptAction

```TypeScript
getPromptAction(): PromptAction
```

get object PromptAction.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PromptAction | PromptAction object. |

## getRouter

```TypeScript
getRouter(): Router
```

Obtains a Router object.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Router | Router object. |

## getSharedLocalStorage

```TypeScript
getSharedLocalStorage(): LocalStorage | undefined
```

获取当前stage共享的LocalStorage实例。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LocalStorage | LocalStorage instance if it exists; undefined if it does not exist. |

## getSmartGestureController

```TypeScript
getSmartGestureController(): SmartGestureController
```

获取对象智能手势控制器。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SmartGestureController | 智能手势控制器对象。 |

## getTextMenuController

```TypeScript
getTextMenuController(): TextMenuController
```

Get object text menu controller.

**起始版本：** 16

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextMenuController | object text menu controller. |

## getUIInspector

```TypeScript
getUIInspector(): UIInspector
```

get object UIInspector.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIInspector | UIInspector object. |

## getUIObserver

```TypeScript
getUIObserver(): UIObserver
```

获取UIObserver对象。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIObserver | 返回UIObserver实例对象。 |

## getWindowHeightBreakpoint

```TypeScript
getWindowHeightBreakpoint(): HeightBreakpoint
```

获取当前实例所在窗口的高度断点。具体枚举值根据窗口高宽比确定，详见 [HeightBreakpoint]HeightBreakpoint。

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HeightBreakpoint | 当前实例所在窗口的宽高比对应的高度断点枚举值。若窗口高宽比为0，则返回HEIGHT_SM。 |

## getWindowId

```TypeScript
getWindowId(): number | undefined
```

获取当前应用实例所属的窗口ID。 > **说明：** > > 若UIContext位于主应用程序进程中的[UIExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-uiextensionability-c.md#UIExtensionAbility)内，则返回主应用程 > 序的顶层窗口ID。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | ID of the window to which the current application instance belongs. If the window  does not exist, undefined is returned. |

## getWindowName

```TypeScript
getWindowName(): string | undefined
```

获取当前实例所在窗口的名称。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Name of the window where the current instance is located. If the window does not  exist, undefined is returned. |

## getWindowWidthBreakpoint

```TypeScript
getWindowWidthBreakpoint(): WidthBreakpoint
```

获取当前实例所在窗口的宽度断点枚举值。具体枚举值根据窗口宽度vp值确定，详见 [WidthBreakpoint]WidthBreakpoint。

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WidthBreakpoint | 当前实例所在窗口的宽度断点枚举值。若窗口宽度为 0vp，则返回WIDTH_XS。 |

## isAvailable

```TypeScript
isAvailable(): boolean
```

判断UIContext对象对应的UI实例是否有效。使用 [getUIContext](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10)方法获取UIContext对象。后端UI实例存在时， 该UI实例有效。通过new UIContext()创建的UIContext对象无对应的UI实例；多次 [loadContent](docroot://reference/apis-arkui/arkts-apis-window-Window.md#loadcontent9)后，旧的UI实例会失效。多窗口应用场景，当窗口关闭后，该窗 口的UI实例失效。总而言之，当UIContext对象没有对应的后端UI实例时，该对象是无效的。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 返回UIContext对象对应的UI实例是否有效。true表示有效，false表示无效。 |

## isEasySplit

```TypeScript
isEasySplit(): boolean
```

检查当前UI实例是否处于分栏模式。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 返回当前UI实例是否处于分栏模式。true表示处于分栏模式，false表示未处于分栏模式。 |

## isFollowingSystemFontScale

```TypeScript
isFollowingSystemFontScale(): boolean
```

Checks whether current font scale follows the system.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if current font scale follows the system; returns false otherwise. |

## keyframeAnimateTo

```TypeScript
keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void
```

产生关键帧动画。该接口的使用说明请参考[keyframeAnimateTo]common。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | KeyframeAnimateParam | 是 | 关键帧动画的整体动画参数。 |
| keyframes | Array&lt;KeyframeState> | 是 | 所有的关键帧状态的列表。 |

## lpx2px

```TypeScript
lpx2px(value: number): number
```

将lpx单位的数值转换为以px为单位的数值。 转换公式为：px值 = lpx值 × 实际屏幕宽度与逻辑宽度（通过[designWidth](docroot://quick-start/module-configuration-file.md#pages标签)配置）的比值。 > **说明：** > > getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

## openBindSheet

```TypeScript
openBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>, sheetOptions?: SheetOptions, targetId?: number): Promise<void>
```

创建并弹出以bindSheetContent作为内容的半模态页面，使用Promise异步回调。通过该接口弹出的半模态页面样式完全按照bindSheetContent中设置的样式显示。 > **说明：** > > 1. 使用该接口时，若未传入有效的targetId，则不支持设置SheetOptions.preferType为POPUP模式、不支持设置SheetOptions.mode为EMBEDDED模式。 > > 2. 由于[updateBindSheet](arkts-uicontext-c.md#updateBindSheet)和[closeBindSheet](arkts-uicontext-c.md#closeBindSheet)依赖 > bindSheetContent去更新或者关闭指定的半模态页面，开发者需自行维护传入的bindSheetContent。 > > 3. 不支持设置SheetOptions.UIContext。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bindSheetContent | ComponentContent&lt;T> | 是 | 半模态页面中显示的组件内容。 |
| sheetOptions | SheetOptions | 否 | 半模态页面样式。 说明： 1. 不支持设置SheetOptions.uiContext，该属性的值固定为当前实例的  UIContext。 2. 若不传递targetId，则不支持设置SheetOptions.preferType为POPUP样式，若设置了POPUP样式则使用CENTER样式替代。 3. 若不传递  targetId，则不支持设置SheetOptions.mode为EMBEDDED模式，默认为OVERLAY模式。 4. 其余属性的默认值参考[SheetOptions]SheetOptions文  档。 |
| targetId | number | 否 | 需要绑定组件的ID，若不指定则不绑定任何组件。id不存在时返回错误码120004。在传入undefined时返回错误码401。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 120001 | The bindSheetContent is incorrect. |
| 120002 | The bindSheetContent already exists. |
| 120004 | The targetId does not exist. |
| 120005 | The node of targetId is not in the component tree. |
| 120006 | The node of targetId is not a child of the page node or NavDestination node. |

## postDelayedFrameCallback

```TypeScript
postDelayedFrameCallback(frameCallback: FrameCallback, delayTime: number): void
```

注册一个回调，在延迟一段时间后的下一帧进行渲染时执行。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frameCallback | FrameCallback | 是 | 下一帧需要执行的回调。 |
| delayTime | number | 是 | 延迟的时间，以毫秒为单位。传入null、undefined或小于0的值，会按0处理。 |

## postFrameCallback

```TypeScript
postFrameCallback(frameCallback: FrameCallback): void
```

注册一个回调，仅在下一帧渲染时调用。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frameCallback | FrameCallback | 是 | 下一帧需要执行的回调。 |

## px2fp

```TypeScript
px2fp(value: number): number
```

将px单位的数值转换为以fp为单位的数值。 转换公式为：fp值 = px值 ÷ 像素密度 ÷ 字体缩放比例 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig](arkts-display-virtualscreenconfig-i.md#VirtualScreenConfig).density。 字体缩放比例：系统设置的字体缩放系数，对应 [Configuration.fontScale](docroot://reference/apis-arkui/arkui-ts/ts-types.md#configuration)。 > **说明：** > > getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

## px2lpx

```TypeScript
px2lpx(value: number): number
```

将px单位的数值转换为以lpx为单位的数值。 转换公式为：lpx值 = px值 ÷ 实际屏幕宽度与逻辑宽度（通过[designWidth](docroot://quick-start/module-configuration-file.md#pages标签)配置）的比值。 > **说明：** > > getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

## px2vp

```TypeScript
px2vp(value: number): number
```

将px单位的数值转换为以vp为单位的数值。 转换公式为：vp值 = px值 ÷ 像素密度 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig](arkts-display-virtualscreenconfig-i.md#VirtualScreenConfig).density。 > **说明：** > > 1. getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。 > > 2. UI实例未创建时，[像素单位]common中的px2vp接口使用默认屏幕的虚拟像素比进行转换。在该场景下，开发者使用UIContext接口替换时，可参考 > [像素单位转换接口替换为UIContext接口](docroot://ui/arkts-global-interface.md#像素单位转换接口替换为uicontext接口)。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

## recycleInvisibleImageMemory

```TypeScript
recycleInvisibleImageMemory(enabled: boolean): void
```

设置不可见Image节点内存回收配置开关，由系统应用配置，默认不开启；开启后，在应用退后台不可见页面下挂载的Image节点会进行内存回收。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 使能开关项：true开启，false关闭；  默认不开启，由系统应用按需开启。  默认值：false  默认值：false  默认值：false  默认值：false  配置为异常undefined时，恢复为默认值false |

**示例：**

```TypeScript
@Entry
@Component
struct ImageRecycleSample {
  build() {
    Column({ space: 12 }) {
      Button('Enable recycle invisible image memory')
        .onClick(() => {
          this.getUIContext().recycleInvisibleImageMemory(true)
        })

      Button('Disable recycle invisible image memory')
        .onClick(() => {
          this.getUIContext().recycleInvisibleImageMemory(false)
        })
    }
    .width('100%')
    .padding(16)
  }
}

```

## removeLocalInputEventMonitor

```TypeScript
removeLocalInputEventMonitor(monitor: InputEventMonitor): void
```

删除本地输入事件监视器。 **重要说明**： -只能移除addLocalInputEventMonitor返回的Monitor对象。 -无法通过手动构造对象来注销监视器。 -如果传递了一个无效的对象，系统会默默地忽略它。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | InputEventMonitor | 是 | 监控标识对象（由addLocalInputEventMonitor返回）。 |

## requireDynamicSyncScene

```TypeScript
requireDynamicSyncScene(id: string): Array<DynamicSyncScene>
```

请求组件的动态帧率场景，用于自定义场景相关帧率配置。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 节点对应的[组件标识]common。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;DynamicSyncScene> | The instance of SwiperDynamicSyncScene. |

## resolveUIContext

```TypeScript
static resolveUIContext(): ResolvedUIContext
```

使用优先级策略获取带有解析策略的UIContext实例对象。 > **说明：** > > 按照预定义的优先级顺序解析并返回UIContext实例和UIContext的解析策略。 > > 解析规则按顺序如下： > > 1. 当前调用作用域中的UIContext。 > > 2. 如果只存在一个UI实例，则返回其UIContext。 > > 3. 如果存在UI实例切换到获焦状态，且最近一次切换到获焦状态的UI实例未销毁，则返回最近一次获焦UI实例的UIContext。 > > 4. 如果存在UI实例切换到前台状态，且最近一次切换到前台状态的UI实例未销毁，则返回最近一次切换到前台状态的UI实例的UIContext。 > > 5. 如果存在多个UI实例，则返回实例唯一标识的ID最大的UIContext。 > > 6. 如果以上条件均不满足，则返回一个无效的UIContext实例。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResolvedUIContext | 返回带有解析策略的UIContext实例对象。 |

## runScopedTask

```TypeScript
runScopedTask(callback: () => void): void
```

在当前UI上下文执行传入的回调函数。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | () => void | 是 | 回调函数 |

## setCustomKeyboardContinueFeature

```TypeScript
setCustomKeyboardContinueFeature(feature: CustomKeyboardContinueFeature): void
```

设置自定义键盘接续特性。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| feature | CustomKeyboardContinueFeature | 是 | 自定义键盘接续特性。 |

## setDynamicDimming

```TypeScript
setDynamicDimming(id: string, value: number): void
```

通过该方法设置组件的压暗程度。 > **说明：** > > 设置该属性后设置其他效果类属性会导致效果冲突。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件id。 |
| value | number | 是 | 组件压暗程度取值范围[0,1], 由0到1逐渐变亮。 |

**示例：**

```TypeScript
@Entry
@Component
struct Index {
  @State
  myCount : number = 100

  build() {
    Column(){
      Image($r('app.media.testImage')).width(500).height(800).id("test")
    }.width("100%").height("100%").onClick(()=>{
      this.getUIContext().setDynamicDimming("test",1)
      this.getUIContext()?.animateTo({duration:5000 },()=>{
        this.getUIContext().setDynamicDimming("test",0)
      })
    })
  }
}

```

## setImageCacheCount

```TypeScript
setImageCacheCount(value: number): void
```

设置内存中缓存解码后图片的数量上限，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果超过缓存上限，会删除最久未再次加载的缓存。建议根据应用内存需求，设置合理缓存数量，数字过大可能导致内存使用过高。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 内存中缓存解码后图片的数量上限 |

## setImageRawDataCacheSize

```TypeScript
setImageRawDataCacheSize(value: number): void
```

设置内存中缓存解码前图片数据的大小上限，单位为字节，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果解码前数据超过缓存上限，会删除最久未再次加载的图片数据缓存。建议根据应用内存需求，设置合理缓存上限，过大可能导致应用内存使用过高。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | capacity of raw image data size in bytes. |

## setKeyboardAppearanceConfig

```TypeScript
setKeyboardAppearanceConfig(uniqueId: number, config: KeyboardAppearanceConfig): void
```

在输入框绑定输入法前设置键盘样式配置

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | The unique id of the input component. |
| config | KeyboardAppearanceConfig | 是 | The config of keyboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. |

## setKeyboardAvoidMode

```TypeScript
setKeyboardAvoidMode(value: KeyboardAvoidMode): void
```

控制虚拟键盘抬起时页面的避让模式。 > **说明：** > > KeyboardAvoidMode.RESIZE模式会压缩页面大小，页面中设置百分比宽高的组件会跟随页面压缩，而直接设置宽高的组件会按设置的固定大小布局。设置KeyboardAvoidMode的RESIZE模式时，expandSa feArea([SafeAreaType.KEYBOARD],[SafeAreaEdge.BOTTOM])不生效。 > > KeyboardAvoidMode.NONE模式配置页面不避让键盘，页面会被抬起的键盘遮盖。 > > setKeyboardAvoidMode针对页面生效，对于弹窗类组件不生效，比如Dialog、Popup、Menu、BindSheet、BindContentCover、Toast、OverlayManager。弹窗类组件的避让模 式可以参考CustomDialogControllerOptions对象说明。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | KeyboardAvoidMode | 是 | 配置虚拟键盘抬起时页面的避让模式。 默认值：KeyboardAvoidMode.OFFSET，键盘抬起时默认避让模式为上抬。setKeyboardAvoidMode传入异常值时，该属性设置不生效。 |

## setOverlayManagerOptions

```TypeScript
setOverlayManagerOptions(options: OverlayManagerOptions): boolean
```

Init OverlayManager.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | OverlayManagerOptions | 是 | Options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if it is called first and before getting an OverlayManager instance; returns  false otherwise. |

## setPixelRoundMode

```TypeScript
setPixelRoundMode(mode: PixelRoundMode): void
```

设置当前页面的像素取整模式。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | PixelRoundMode | 是 | 像素取整模式。 默认值：PixelRoundMode.PIXEL_ROUND_ON_LAYOUT_FINISH 设置异常值时，该属性为默认值。 |

## setResourceManagerCacheMaxCountForHSP

```TypeScript
static setResourceManagerCacheMaxCountForHSP(count: number): void
```

设置HSP资源管理对象的缓存数量上限。 如果缓存的上限设置得过高，可能会导致内存开销过大，存在内存过载的风险。 建议根据实际需求进行配置。

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| count | number | 是 | HSP资源管理器的缓存限制必须为非负整数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 100101 | The parameter is less than 0. |
| 100102 | The parameter value cannot be a floating point number. |
| 100103 | The function cannot be called from a non main thread. |

## setTextSelectionClearPolicy

```TypeScript
setTextSelectionClearPolicy(policy: TextSelectionClearPolicy): void
```

设置文本组件的文本选择清除策略。 默认策略：**TextSelectionClearPolicy.KEEP_ON_EXTERNAL_CLICK**。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policy | TextSelectionClearPolicy | 是 | 文本选择清除策略。 |

## showActionSheet

```TypeScript
showActionSheet(value: ActionSheetOptions): void
```

Shows an action sheet in the given settings.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ActionSheetOptions | 是 | Parameters of the action sheet. |

## showAlertDialog

```TypeScript
showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void
```

alertDialog display.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AlertDialogParamWithConfirm \| AlertDialogParamWithButtons \| AlertDialogParamWithOptions | 是 | Shows  an AlertDialog component in the given settings. |

## showDatePickerDialog

```TypeScript
showDatePickerDialog(options: DatePickerDialogOptions): void
```

datePickerDialog display.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DatePickerDialogOptions | 是 | Options. |

## showTextPickerDialog

```TypeScript
showTextPickerDialog(options: TextPickerDialogOptions): void
```

textPickerDialog display.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | TextPickerDialogOptions | 是 | Options. |

## showTextPickerDialog

```TypeScript
showTextPickerDialog(style: TextPickerDialogOptions | TextPickerDialogOptionsExt): void
```

textPickerDialog display.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| style | TextPickerDialogOptions \| TextPickerDialogOptionsExt | 是 | Dialog style. |

## showTimePickerDialog

```TypeScript
showTimePickerDialog(options: TimePickerDialogOptions): void
```

timePickerDialog display.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | TimePickerDialogOptions | 是 | Options. |

## unbindTabsFromNestedScrollable

```TypeScript
unbindTabsFromNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void
```

Unbind tabs from nested scrollable container components.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabsController | TabsController | 是 | The controller of the tabs. |
| parentScroller | Scroller | 是 | The controller of the parent scrollable container component. |
| childScroller | Scroller | 是 | The controller of the child scrollable container component. |

## unbindTabsFromScrollable

```TypeScript
unbindTabsFromScrollable(tabsController: TabsController, scroller: Scroller): void
```

Unbind tabs from scrollable container component.

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabsController | TabsController | 是 | The controller of the tabs. |
| scroller | Scroller | 是 | The controller of the scrollable container component. |

## updateBindSheet

```TypeScript
updateBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>, sheetOptions: SheetOptions, partialUpdate?: boolean): Promise<void>
```

更新bindSheetContent对应的半模态页面的样式，使用Promise异步回调。 > **说明：** > > 不支持更新SheetOptions.UIContext、SheetOptions.mode、回调函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bindSheetContent | ComponentContent&lt;T> | 是 | 半模态页面中显示的组件内容。 |
| sheetOptions | SheetOptions | 是 | 半模态页面样式。 说明： 不支持更新SheetOptions.uiContext、SheetOptions.mode、回调函  数。 |
| partialUpdate | boolean | 否 | 半模态页面更新方式, 默认值为false。 说明： 1. true为增量更新，保留当前值，更新SheetOptions中的指定属性。  2. false为全量更新，除SheetOptions中的指定属性，其他属性恢复默认值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 120001 | The bindSheetContent is incorrect. |
| 120003 | The bindSheetContent cannot be found. |

## vp2px

```TypeScript
vp2px(value: number): number
```

将vp单位的数值转换为以px为单位的数值。 转换公式为：px值 = vp值 × 像素密度 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig](arkts-display-virtualscreenconfig-i.md#VirtualScreenConfig).density。 > **说明：** > > 1. getUIContext需在windowStage. > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后 > 调用此接口，否则无法返回准确结果。 > > 2. UI实例未创建时，[像素单位]common中的vp2px接口使用默认屏幕的虚拟像素比进行转换。在该场景下，开发者使用UIContext接口替换时，可参考 > [像素单位转换接口替换为UIContext接口](docroot://ui/arkts-global-interface.md#像素单位转换接口替换为uicontext接口)。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 转换后的数值。 取值范围：(-∞, +∞)  @stagemodelonly  @crossplatform [since 22]  @atomicservice |

