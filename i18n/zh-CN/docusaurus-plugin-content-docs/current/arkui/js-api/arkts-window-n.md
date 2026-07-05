# window

Window manager.

**起始版本：** 6

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [create](arkts-window-create-f.md#create-1) | 创建子窗口，使用callback异步回调。 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，参数id传入null或undefined时，可能会导致callback无法得到执行，建议使用 > [createWindow()](arkts-window-createwindow-f.md#createWindow-1)替代。 |
| [create](arkts-window-create-f.md#create-2) | 创建子窗口，使用Promise异步回调。 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[createWindow()](arkts-window-createwindow-f.md#createWindow-2)替代。 |
| [create](arkts-window-create-f.md#create-3) | 创建系统窗口，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[createWindow()](arkts-window-createwindow-f.md#createWindow-2)替代。 |
| [create](arkts-window-create-f.md#create-4) | 创建系统窗口，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [createWindow()](arkts-window-createwindow-f.md#createWindow-1)替代。 |
| <!--DelRow-->[createSubWindowAndBindParent](arkts-window-createsubwindowandbindparent-f-sys.md#createSubWindowAndBindParent-1) | 创建一个子窗，并绑定父窗。使用Promise异步回调。 子窗跟随父窗显示/隐藏，但并不跟随父窗销毁，子窗通过回调函数监听父窗生命周期变化。 建议在父窗销毁后主动销毁创建的子窗。 |
| [createWindow](arkts-window-createwindow-f.md#createWindow-1) | 创建子窗口或者系统窗口，使用callback异步回调。 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是 [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 自由窗口状态下，子窗口参数[decorEnabled](arkts-window-configuration-i.md#Configuration)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口 创建后为非沉浸式布局。 |
| [createWindow](arkts-window-createwindow-f.md#createWindow-2) | 创建子窗口或者系统窗口，使用Promise异步回调。 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是 [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 自由窗口状态下，子窗口参数[decorEnabled](arkts-window-configuration-i.md#Configuration)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口 创建后为非沉浸式布局。 |
| [find](arkts-window-find-f.md#find-1) | 查找id所对应的窗口，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[findWindow()](arkts-window-findwindow-f.md#findWindow-1)替代。 |
| [find](arkts-window-find-f.md#find-2) | 查找id所对应的窗口，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[findWindow()](arkts-window-findwindow-f.md#findWindow-1)替代。 |
| [findWindow](arkts-window-findwindow-f.md#findWindow-1) | 查找指定名称对应的窗口。 |
| [getAllMainWindowInfo](arkts-window-getallmainwindowinfo-f.md#getAllMainWindowInfo-1) | 获取全部主窗口信息，使用Promise异步回调。 |
| [getAllWindowLayoutInfo](arkts-window-getallwindowlayoutinfo-f.md#getAllWindowLayoutInfo-1) | 获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。 |
| [getAllWindowLayoutInfo](arkts-window-getallwindowlayoutinfo-f.md#getAllWindowLayoutInfo-2) | 根据option指定的过滤条件获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。当未传入option或其中 的字段都为默认值时，当前接口与[getAllWindowLayoutInfo](arkts-window-getallwindowlayoutinfo-f.md#getAllWindowLayoutInfo-1)等价。 |
| [getGlobalWindowMode](arkts-window-getglobalwindowmode-f.md#getGlobalWindowMode-1) | 获取指定屏幕上生命周期位于前台的窗口对应的窗口模式，使用Promise异步回调。 |
| [getLastWindow](arkts-window-getlastwindow-f.md#getLastWindow-1) | 获取当前应用内层级最高的子窗口，使用callback异步回调。 若无应用子窗口或子窗口未调用[showWindow()](arkts-window-window-i.md#showWindow)进行显示，则返回应用主 窗口。 |
| [getLastWindow](arkts-window-getlastwindow-f.md#getLastWindow-2) | 获取当前应用内层级最高的子窗口，使用Promise异步回调。 若无应用子窗口或子窗口未调用[showWindow()](arkts-window-window-i.md#showWindow)进行显示，则返回应用主 窗口。 |
| [getMainWindowSnapshot](arkts-window-getmainwindowsnapshot-f.md#getMainWindowSnapshot-1) | 获取一个或多个指定windowId的主窗口截图，使用Promise异步回调。 |
| <!--DelRow-->[getSnapshot](arkts-window-getsnapshot-f-sys.md#getSnapshot-1) | 获取指定窗口相同尺寸截图，使用Promise异步回调。若当前窗口设置为隐私模式（可通过 [setWindowPrivacyMode](arkts-window-window-i.md#setWindowPrivacyMode) 接口设置），截图结果为白屏。 |
| <!--DelRow-->[getTopNavDestinationName](arkts-window-gettopnavdestinationname-f-sys.md#getTopNavDestinationName-1) | 获取指定的前台窗口当前栈顶[Navigation]./@internal/component/ets/navigation中的 [NavDestination]./@internal/component/ets/nav_destination名称，使用Promise异步回调。 |
| [getTopWindow](arkts-window-gettopwindow-f.md#getTopWindow-1) | 获取当前应用内最后显示的窗口，使用callback异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-1)替代。 |
| [getTopWindow](arkts-window-gettopwindow-f.md#getTopWindow-2) | 获取当前应用内最后显示的窗口，使用Promise异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-2)替代。 |
| [getTopWindow](arkts-window-gettopwindow-f.md#getTopWindow-3) | 获取当前应用内最后显示的窗口，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-2)替代。 |
| [getTopWindow](arkts-window-gettopwindow-f.md#getTopWindow-4) | 获取当前应用内最后显示的窗口，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，参数ctx传入null或undefined时，可能会导致callback无法得到执行，建议使用 > [getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-1)替代。 |
| <!--DelRow-->[getVisibleWindowInfo](arkts-window-getvisiblewindowinfo-f-sys.md#getVisibleWindowInfo-1) | 获取当前屏幕的可见主窗口（未退至后台的主窗口）信息。使用Promise异步回调。 |
| [getWindowsByCoordinate](arkts-window-getwindowsbycoordinate-f.md#getWindowsByCoordinate-1) | 查询本应用指定坐标下的可见窗口数组，按当前窗口层级排列，层级最高的窗口对应数组下标为0，使用Promise异步回调。 |
| <!--DelRow-->[minimizeAll](arkts-window-minimizeall-f-sys.md#minimizeAll-1) | 最小化指定ID的屏幕中的所有主窗口。 |
| <!--DelRow-->[minimizeAll](arkts-window-minimizeall-f-sys.md#minimizeAll-2) | 最小化指定ID的屏幕中的所有主窗口，使用Promise异步回调。 |
| <!--DelRow-->[minimizeAllWithExclusion](arkts-window-minimizeallwithexclusion-f-sys.md#minimizeAllWithExclusion-1) | 最小化指定ID的屏幕中除指定窗口之外的所有主窗口，使用Promise异步回调。 |
| <!--DelRow-->[moveMainWindowToTargetDisplay](arkts-window-movemainwindowtotargetdisplay-f-sys.md#moveMainWindowToTargetDisplay-1) | 将指定的主窗口迁移到指定的屏幕上。使用Promise异步回调。 - 对于[主屏](docroot://displaymanager/display-terminology.md#主屏)/ [扩展屏](docroot://displaymanager/display-terminology.md#扩展屏)与 [虚拟屏](docroot://displaymanager/display-terminology.md#虚拟屏)之间以及虚拟屏与虚拟屏之间的窗口迁移，仅主窗及其子窗会一起被迁移到对应屏幕上且被抬升，如果存在子窗，最上层可获焦子 窗会获取焦点，否则主窗口获焦。 - 对于主屏与扩展屏之间的窗口迁移，只会将主窗口迁移到对应屏幕，抬升并获取焦点。 <!--RP3--><!--RP3End--> |
| <!--DelRow-->[notifyScreenshotEvent](arkts-window-notifyscreenshotevent-f-sys.md#notifyScreenshotEvent-1) | 通知屏幕截屏的事件类型，使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-window-off-f-sys.md#off-1) | 关闭状态栏、导航栏属性变化的监听。 |
| <!--DelRow-->[off](arkts-window-off-f-sys.md#off-2) | 移除手势导航启用状态变化的监听。 |
| <!--DelRow-->[off](arkts-window-off-f-sys.md#off-3) | 移除水印启用状态变化的监听。 |
| [offApplicationFocusStateChange](arkts-window-offapplicationfocusstatechange-f.md#offApplicationFocusStateChange-1) | 关闭应用进程获焦状态变化的监听。 |
| <!--DelRow-->[offGestureNavigationEnabledChange](arkts-window-offgesturenavigationenabledchange-f-sys.md#offGestureNavigationEnabledChange-1) | 移除手势导航启用状态变化的监听。 |
| <!--DelRow-->[offSystemBarTintChange](arkts-window-offsystembartintchange-f-sys.md#offSystemBarTintChange-1) | 关闭状态栏、导航栏属性变化的监听。 |
| <!--DelRow-->[offWaterMarkFlagChange](arkts-window-offwatermarkflagchange-f-sys.md#offWaterMarkFlagChange-1) | 移除水印启用状态变化的监听。 |
| <!--DelRow-->[on](arkts-window-on-f-sys.md#on-1) | 开启状态栏、导航栏属性变化的监听。 |
| <!--DelRow-->[on](arkts-window-on-f-sys.md#on-2) | 添加手势导航启用状态变化的监听。 |
| <!--DelRow-->[on](arkts-window-on-f-sys.md#on-3) | 添加水印启用状态变化的监听。 |
| [onApplicationFocusStateChange](arkts-window-onapplicationfocusstatechange-f.md#onApplicationFocusStateChange-1) | 开启应用进程获焦状态变化的监听。此监听针对应用间的获焦状态变化，若同应用内窗口间的获焦状态发生变化，则不会触发回调函数。 |
| <!--DelRow-->[onGestureNavigationEnabledChange](arkts-window-ongesturenavigationenabledchange-f-sys.md#onGestureNavigationEnabledChange-1) | 添加手势导航启用状态变化的监听。 |
| <!--DelRow-->[onSystemBarTintChange](arkts-window-onsystembartintchange-f-sys.md#onSystemBarTintChange-1) | 开启状态栏、导航栏属性变化的监听。 |
| <!--DelRow-->[onWaterMarkFlagChange](arkts-window-onwatermarkflagchange-f-sys.md#onWaterMarkFlagChange-1) | 添加水印启用状态变化的监听。 |
| <!--DelRow-->[setGestureNavigationEnabled](arkts-window-setgesturenavigationenabled-f-sys.md#setGestureNavigationEnabled-1) | 设置手势导航启用状态。使用callback异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。 |
| <!--DelRow-->[setGestureNavigationEnabled](arkts-window-setgesturenavigationenabled-f-sys.md#setGestureNavigationEnabled-2) | 设置手势导航启用状态。使用Promise异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。 |
| <!--DelRow-->[setSpecificSystemWindowZIndex](arkts-window-setspecificsystemwindowzindex-f-sys.md#setSpecificSystemWindowZIndex-1) | 设置系统窗口的窗口层级。使用Promise异步回调。 将所有该类型系统窗口zIndex调整为所设置的值，调整前后，该类型窗口之间相对层级保持不变，焦点窗口不发生变化。当应用关闭之后该类型窗口层级恢复默认值。 推荐不同类型窗口设置不同的zIndex，如果已经存在相同zIndex的窗口，设置前后，窗口之间的相对层级保持不变。 |
| [setStartWindowBackgroundColor](arkts-window-setstartwindowbackgroundcolor-f.md#setStartWindowBackgroundColor-1) | 设置同一应用包名下指定moduleName、abilityName对应UIAbility的启动页背景色，使用Promise异步回调。 该接口对同一应用包名下的所有进程生效，例如多实例或应用分身场景。 |
| <!--DelRow-->[setWaterMarkImage](arkts-window-setwatermarkimage-f-sys.md#setWaterMarkImage-1) | 设置屏幕水印图片显示状态。使用Promise异步回调。 |
| <!--DelRow-->[setWaterMarkImage](arkts-window-setwatermarkimage-f-sys.md#setWaterMarkImage-2) | 设置屏幕水印图片的显示状态，并设定水印的优先级。使用Promise异步回调。当priority等于0时，当前接口与 [setWaterMarkImage](arkts-window-setwatermarkimage-f-sys.md#setWaterMarkImage-3) 等价。 |
| <!--DelRow-->[setWaterMarkImage](arkts-window-setwatermarkimage-f-sys.md#setWaterMarkImage-3) | 设置屏幕水印图片显示状态。使用callback异步回调。 |
| [setWatermarkImageForAppWindows](arkts-window-setwatermarkimageforappwindows-f.md#setWatermarkImageForAppWindows-1) | 设置或取消本应用进程下窗口的水印图片，使用Promise异步回调。该接口需要在 [loadContent()](arkts-window-window-i.md#loadContent) 或[setUIContent()](arkts-window-window-i.md#setUIContent)调用生效后使 用。 |
| <!--DelRow-->[setWindowLayoutMode](arkts-window-setwindowlayoutmode-f-sys.md#setWindowLayoutMode-1) | 设置窗口布局模式，使用callback异步回调。 |
| <!--DelRow-->[setWindowLayoutMode](arkts-window-setwindowlayoutmode-f-sys.md#setWindowLayoutMode-2) | 设置窗口布局模式，使用Promise异步回调。 |
| [shiftAppWindowFocus](arkts-window-shiftappwindowfocus-f.md#shiftAppWindowFocus-1) | 在同应用内将窗口焦点从源窗口转移到目标窗口，仅支持应用主窗、子窗范围内的焦点转移。使用Promise异步回调。 目标窗口需确保具有获得焦点的能力（可通过 [setWindowFocusable()](arkts-window-window-i.md#setWindowFocusable) 设置），并确保调用[showWindow()](arkts-window-window-i.md#showWindow)成功且执行完毕。 > **说明：** > > 在调用shiftAppWindowFocus()前，建议确保目标窗口已调用 > [loadContent()](arkts-window-window-i.md#loadContent) > 或[setUIContent()](arkts-window-window-i.md#setUIContent)并生效， > 否则可能会导致不可见窗口获取焦点，造成功能异常或影响用户体验。 |
| [shiftAppWindowPointerEvent](arkts-window-shiftappwindowpointerevent-f.md#shiftAppWindowPointerEvent-1) | 主窗口和子窗口可正常调用，用于将鼠标输入事件从源窗口转移到目标窗口。使用Promise异步回调。 源窗口仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)事件（事件类型必须为 TouchType.Down）的回调方法中调用此接口才会有鼠标输入事件转移效果，成功调用此接口后，系统会向源窗口补发鼠标按键抬起（TouchType.Up）事件，并且向目标窗口补发鼠标按键按下（TouchType.Down）事件。 |
| [shiftAppWindowTouchEvent](arkts-window-shiftappwindowtouchevent-f.md#shiftAppWindowTouchEvent-1) | 主窗口和子窗口可正常调用，用于将触屏输入事件从源窗口转移到目标窗口。使用Promise异步回调。 源窗口仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)事件（事件类型必须为 TouchType.Down）的回调方法中调用此接口才会有触屏输入事件转移效果，成功调用此接口后，系统会向源窗口补发触屏抬起（TouchType.Up）事件，并且向目标窗口补发触屏按下（TouchType.Down）事件。 |
| <!--DelRow-->[toggleShownStateForAllAppWindows](arkts-window-toggleshownstateforallappwindows-f-sys.md#toggleShownStateForAllAppWindows-1) | 多窗口快速切换时隐藏或者恢复应用窗口。 |
| <!--DelRow-->[toggleShownStateForAllAppWindows](arkts-window-toggleshownstateforallappwindows-f-sys.md#toggleShownStateForAllAppWindows-2) | 多窗口快速切换时隐藏或者恢复应用窗口，使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AvoidArea](arkts-window-avoidarea-i.md) | 窗口内容的避让区域。 窗口内容做[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时，需要按照 [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)对应的AvoidArea做窗口内容避让。 在避让区域内，应用窗口内容被遮挡且无法响应用户点击事件。 > **说明：** > > 示意图展示了leftRect、topRect、rightRect、bottomRect的含义。 > > ![avoidArea](docroot://reference/apis-arkui/figures/avoidArea.png) |
| [AvoidAreaOptions](arkts-window-avoidareaoptions-i.md) | 系统避让区变化后返回当前避让区域以及避让区域类型。 |
| [Configuration](arkts-window-configuration-i.md) | 创建子窗口或系统窗口时的参数。 |
| [DecorButtonStyle](arkts-window-decorbuttonstyle-i.md) | 系统装饰栏按钮样式。 |
| <!--DelRow-->[ExtensionWindowConfig](arkts-window-extensionwindowconfig-i-sys.md) | 创建扩展窗口时需要配置的参数。 |
| [FrameMetrics](arkts-window-framemetrics-i.md) | 帧率指标。 |
| [KeyboardInfo](arkts-window-keyboardinfo-i.md) | 软键盘窗口信息。 |
| [KeyFramePolicy](arkts-window-keyframepolicy-i.md) | 关键帧的策略配置。 |
| [MainWindowInfo](arkts-window-mainwindowinfo-i.md) | 主窗口信息。 |
| [MaximizeOptions](arkts-window-maximizeoptions-i.md) | 最大化窗口时的可选配置。 |
| [MoveConfiguration](arkts-window-moveconfiguration-i.md) | 窗口移动选项。 |
| [OrientationResult](arkts-window-orientationresult-i.md) | 设置窗口显示方向的执行结果。 |
| [Position](arkts-window-position-i.md) | 窗口或组件的位置。 |
| [Rect](arkts-window-rect-i.md) | 窗口矩形区域。 |
| [RectChangeOptions](arkts-window-rectchangeoptions-i.md) | 窗口矩形（窗口位置及窗口大小）变化返回的值及变化原因。 |
| [RectInVP](arkts-window-rectinvp-i.md) | 窗口矩形区域，单位为vp。 |
| <!--DelRow-->[RotateOptions](arkts-window-rotateoptions-i-sys.md) | 旋转参数。 |
| [RotationChangeInfo](arkts-window-rotationchangeinfo-i.md) | 窗口旋转变化时的窗口信息。 |
| [RotationChangeResult](arkts-window-rotationchangeresult-i.md) | 应用在窗口旋转变化时返回的信息，系统会根据此信息改变当前窗口矩形区域大小。当返回主窗口旋转变化的信息时，系统不改变主窗口的大小。 应用窗口与系统窗口大小存在限制，具体限制与相关规则可见 [resize](arkts-window-window-i.md#resize)。 |
| <!--DelRow-->[ScaleOptions](arkts-window-scaleoptions-i-sys.md) | 缩放参数。 |
| [ShowWindowOptions](arkts-window-showwindowoptions-i.md) | 显示子窗口或系统窗口时的参数。 |
| [Size](arkts-window-size-i.md) | 窗口大小，单位为px。 |
| [SizeInVP](arkts-window-sizeinvp-i.md) | 窗口大小，单位为vp。 |
| [StartAnimationParams](arkts-window-startanimationparams-i.md) | 启动动画配置。 仅对同应用的不同ability间跳转生效。 仅对全屏应用生效。 |
| <!--DelRow-->[StartAnimationSystemParams](arkts-window-startanimationsystemparams-i-sys.md) | 启动动画配置，仅对全屏应用生效。 不同应用间跳转场景不生效，仍保持系统默认动效。 |
| [StatusBarProperty](arkts-window-statusbarproperty-i.md) | 状态栏的属性。在获取状态栏属性信息时返回。 |
| <!--DelRow-->[SubWindowAttachOptions](arkts-window-subwindowattachoptions-i-sys.md) | 子窗与主窗保持相对位置不变时的参数。 |
| [SubWindowOptions](arkts-window-subwindowoptions-i.md) | 子窗口创建参数。 |
| [SystemBarProperties](arkts-window-systembarproperties-i.md) | 状态栏<!--Del-->、三键导航栏的<!--DelEnd-->属性。 |
| <!--DelRow-->[SystemBarRegionTint](arkts-window-systembarregiontint-i-sys.md) | 单个导航栏或状态栏回调信息。 |
| [SystemBarStyle](arkts-window-systembarstyle-i.md) | 状态栏的属性。在设置页面级状态栏属性时使用。 |
| <!--DelRow-->[SystemBarTintState](arkts-window-systembartintstate-i-sys.md) | 当前系统栏回调信息集合。 |
| <!--DelRow-->[SystemWindowOptions](arkts-window-systemwindowoptions-i-sys.md) | 系统窗口的创建参数。 |
| [TitleButtonRect](arkts-window-titlebuttonrect-i.md) | 标题栏上的最小化、最大化、关闭按钮矩形区域，该区域位置坐标相对窗口右上角。 |
| [TransitionAnimation](arkts-window-transitionanimation-i.md) | 窗口转场动画配置。 |
| <!--DelRow-->[TransitionContext](arkts-window-transitioncontext-i-sys.md) | 属性转换的上下文信息。 |
| <!--DelRow-->[TransitionController](arkts-window-transitioncontroller-i-sys.md) | 属性转换控制器。使用其子接口之前得先创建系统窗口，参照示例代码。 |
| <!--DelRow-->[TranslateOptions](arkts-window-translateoptions-i-sys.md) | 平移参数。 |
| [UIEnvAvoidAreaVP](arkts-window-uienvavoidareavp-i.md) | 以vp为单位表示的窗口避让区域信息，在进行[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时需关注。 |
| [UIEnvWindowAvoidAreaInfoPX](arkts-window-uienvwindowavoidareainfopx-i.md) | 窗口不同类型避让区域信息组成的[环境变量](docroot://ui/arkts-env-system-property.md)数据类型，每种类型避让区域单位为px。 |
| [UIEnvWindowAvoidAreaInfoVP](arkts-window-uienvwindowavoidareainfovp-i.md) | 窗口不同类型避让区域信息组成的[环境变量](docroot://ui/arkts-env-system-property.md)数据类型，每种类型避让区域单位为vp。 |
| [Window](arkts-window-window-i.md) | 当前窗口实例，窗口管理器管理的基本单元。 下列API示例中都需先使用 [getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-1)、 [createWindow()](arkts-window-createwindow-f.md#createWindow-1)、 [findWindow()](arkts-window-findwindow-f.md#findWindow-1)中的任一方法获取到Window实例（windowClass），再通过此实例调用对应方法。 |
| <!--DelRow-->[WindowAnchorInfo](arkts-window-windowanchorinfo-i-sys.md) | 一级子窗与主窗保持相对位置的窗口锚点参数信息。 |
| [WindowAnimationConfig](arkts-window-windowanimationconfig-i.md) | 窗口动画参数配置。 |
| [WindowCreateParams](arkts-window-windowcreateparams-i.md) | 应用启动时的窗口参数配置。 |
| [WindowDensityInfo](arkts-window-windowdensityinfo-i.md) | 窗口所在显示设备和窗口自定义的显示密度信息，是与像素单位无关的缩放系数，即显示大小缩放系数。 |
| <!--DelRow-->[WindowInfo](arkts-window-windowinfo-i-sys.md) | 当前窗口的详细信息。 |
| [WindowInfoOptions](arkts-window-windowinfooptions-i.md) | 窗口布局信息过滤选项。 |
| [WindowLayoutInfo](arkts-window-windowlayoutinfo-i.md) | 窗口布局信息。 |
| [WindowLimits](arkts-window-windowlimits-i.md) | 窗口尺寸限制参数，应用可以通过[getWindowLimits](arkts-window-window-i.md#getWindowLimits)获得当前窗口的尺寸限制（单位为px）；从API version 2 2开始，还可以通过[getWindowLimitsVP](arkts-window-window-i.md#getWindowLimitsVP)获取窗口尺寸限制（单位为vp）。 窗口尺寸限制的最终生效结果由默认系统限制、应用配置和运行时设置的数据取交集得到，优先级从高到低依次为： 1. 应用通过[setWindowLimits](arkts-window-window-i.md#setWindowLimits)设置窗口尺寸限制。 2. 应用在[startAbility]./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, options?: StartOptions)拉起窗口时通过[StartOptions](../../apis-ability-kit/arkts-apis/arkts-startoptions-c.md#StartOptions)指定窗口尺寸限制（API version 17开始支持）。 3. 应用在[module.json5配置文件中的abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)中配置windowLimits。 4. 默认系统限制（基于不同产品和窗口类型，其windowLimits系统默认限制存在差异）。 > **说明：** > > 针对maxWidth、maxHeight、minWidth、minHeight属性： > > - 默认单位为px，从API version 22开始支持通过pixelUnit设置单位为px或vp。 > > - 参数为整数，浮点数会向下取整。 > > - 默认值为0，表示属性不发生变化。 > > - 可生效范围下限值：系统限定的最小高度/宽度。 > > - 可生效范围上限值：系统限定的最大高度/宽度。 |
| [WindowProperties](arkts-window-windowproperties-i.md) | 窗口属性。 |
| [WindowSnapshotAnimationConfig](arkts-window-windowsnapshotanimationconfig-i.md) | 窗口截图动效的配置。 |
| [WindowSnapshotConfiguration](arkts-window-windowsnapshotconfiguration-i.md) | 主窗口截图的配置项。 |
| [WindowStage](arkts-window-windowstage-i.md) | 窗口管理器。管理各个基本窗口单元，即[Window]@ohos.window实例。 下列API示例中都需在[onWindowStageCreate()](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#onWindowStageCreate)函数中使用WindowStage 的实例调用对应方法。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [RotationChangeCallback](arkts-window-rotationchangecallback-t.md) | 旋转事件通知通用回调函数。 开发者在使用时，回调函数参数类型为[RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)，返回值类型为 [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult) \| void。 |
| [SpecificSystemBar](arkts-window-specificsystembar-t.md) | 当前支持显示或隐藏的系统栏类型。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AcrossDisplayPresentation](arkts-window-acrossdisplaypresentation-e.md) | 在可折叠的2in1设备的半折叠状态下，最大化窗口时用于控制瀑布流模式切换策略的枚举。 |
| [AnimationType](arkts-window-animationtype-e.md) | 窗口动画类型枚举。 |
| [AvoidAreaType](arkts-window-avoidareatype-e.md) | 窗口内容的避让区域的类型枚举。 窗口内容做[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时，需要按照AvoidAreaType对应的 [AvoidArea](arkts-window-avoidarea-i.md#AvoidArea)做窗口内容避让。 <!--RP13--> <!--RP13End--> |
| <!--DelRow-->[BlurStyle](arkts-window-blurstyle-e-sys.md) | 窗口模糊类型枚举。 |
| [ColorSpace](arkts-window-colorspace-e.md) | 色域模式。 |
| <!--DelRow-->[ExtensionWindowAttribute](arkts-window-extensionwindowattribute-e-sys.md) | 扩展窗口的属性枚举。 |
| [GlobalWindowMode](arkts-window-globalwindowmode-e.md) | 窗口模式。 |
| [MaximizePresentation](arkts-window-maximizepresentation-e.md) | 窗口最大化时的布局枚举。 |
| [ModalityType](arkts-window-modalitytype-e.md) | 子窗口模态类型枚举。 |
| [OcclusionState](arkts-window-occlusionstate-e.md) | 窗口可见性状态枚举。 |
| [Orientation](arkts-window-orientation-e.md) | 窗口显示方向类型枚举。<!--Del-->不同枚举值之间的区别可查询 [窗口Orientation枚举值8\~10或12和枚举值13\~16的区别(API9)](docroot://faqs/faqs-window-manager.md#窗口orientation枚举值810或12和枚举值1316的区别api9) 。<!--DelEnd--> |
| [OrientationExecutionResult](arkts-window-orientationexecutionresult-e.md) | 窗口显示方向的执行结果枚举。 |
| [PixelUnit](arkts-window-pixelunit-e.md) | 像素单位枚举。 物理像素单位和虚拟像素单位换算可使用[px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12)和 [vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)。 |
| [RectChangeReason](arkts-window-rectchangereason-e.md) | 窗口矩形（窗口位置及窗口大小）变化的原因。 |
| [RectType](arkts-window-recttype-e.md) | 窗口矩形区域坐标系类型。 |
| [RotationChangeType](arkts-window-rotationchangetype-e.md) | 窗口旋转事件类型。 |
| [RotationInfoType](arkts-window-rotationinfotype-e.md) | 旋转信息类型枚举。 |
| [ScreenshotEventType](arkts-window-screenshoteventtype-e.md) | 截屏事件类型枚举。 |
| [SplitRatioPreference](arkts-window-splitratiopreference-e.md) | 描述分屏窗口分屏比例 |
| [WindowAnchor](arkts-window-windowanchor-e.md) | 窗口锚点枚举。 |
| [WindowAnimationCurve](arkts-window-windowanimationcurve-e.md) | 窗口动画曲线类型。 |
| [WindowEventType](arkts-window-windoweventtype-e.md) | 窗口生命周期。 |
| <!--DelRow-->[WindowLayoutMode](arkts-window-windowlayoutmode-e-sys.md) | 窗口布局模式枚举。 |
| <!--DelRow-->[WindowMode](arkts-window-windowmode-e-sys.md) | 窗口模式枚举。 |
| [WindowStageEventType](arkts-window-windowstageeventtype-e.md) | WindowStage生命周期状态枚举。 |
| [WindowStageLifecycleEventType](arkts-window-windowstagelifecycleeventtype-e.md) | WindowStage生命周期的状态类型枚举。 |
| [WindowStatusType](arkts-window-windowstatustype-e.md) | 窗口模式枚举。 |
| [WindowTransitionType](arkts-window-windowtransitiontype-e.md) | 窗口转场动画类型枚举。 |
| [WindowType](arkts-window-windowtype-e.md) | 窗口类型枚举。 |

