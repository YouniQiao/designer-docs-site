# WindowAnimationController

Window animation controller.

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { windowAnimationManager } from '@kit.ArkUI';
```

## onAppTransition

```TypeScript
onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on application transition.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fromWindowTarget | WindowAnimationTarget | 是 | Window target of the source application. |
| toWindowTarget | WindowAnimationTarget | 是 | Window target of the destination application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onCloseWindow

```TypeScript
onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void
```

Called on closing a window.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| closingWindowTarget | WindowAnimationTarget | 是 |  |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onMinimizeWindow

```TypeScript
onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on minimizing a window.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| minimizingWindowTarget | WindowAnimationTarget | 是 | Window target of the minimizing window. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onScreenUnlock

```TypeScript
onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void
```

Called on unlocking the screen.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onStartAppFromLauncher

```TypeScript
onStartAppFromLauncher(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form launcher.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | 是 | indicates Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onStartAppFromOther

```TypeScript
onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form other.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | 是 | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onStartAppFromRecent

```TypeScript
onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form recent.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | 是 | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

## onWindowAnimationTargetsUpdate

```TypeScript
onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void
```

Called on window animation targets update.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fullScreenWindowTarget | WindowAnimationTarget | 是 | The fullscreen window target. |
| floatingWindowTargets | Array&lt;WindowAnimationTarget> | 是 | All the floating window targets. |

## onStartAppFromOther

```TypeScript
onStartAppFromOther?: AppStartCallback
```

Callback function on starting an application form other.

**类型：** AppStartCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onMinimizeWindow

```TypeScript
onMinimizeWindow?: WindowMinimizationCallback
```

Callback function on minimizing a window.

**类型：** WindowMinimizationCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onWindowAnimationTargetsUpdate

```TypeScript
onWindowAnimationTargetsUpdate?: WindowAnimationTargetsUpdationCallback
```

Callback function on window animation targets update.

**类型：** WindowAnimationTargetsUpdationCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onScreenUnlock

```TypeScript
onScreenUnlock?: ScreenUnlockCallback
```

Callback function on unlocking the screen.

**类型：** ScreenUnlockCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onStartAppFromRecent

```TypeScript
onStartAppFromRecent?: AppStartCallback
```

Callback function on starting an application form recent.

**类型：** AppStartCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onCloseWindow

```TypeScript
onCloseWindow?: WindowCloseCallback
```

Callback function on closing a window.

**类型：** WindowCloseCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onStartAppFromLauncher

```TypeScript
onStartAppFromLauncher?: AppStartCallback
```

Callback function on starting an application form launcher.

**类型：** AppStartCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

## onAppTransition

```TypeScript
onAppTransition?: AppTransitionCallback
```

Callback function on application transition.

**类型：** AppTransitionCallback

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

