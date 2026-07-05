# WindowAnimationController

Window animation controller.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { windowAnimationManager } from '@kit.ArkUI';
```

## onAppTransition

```TypeScript
onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on application transition.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromWindowTarget | WindowAnimationTarget | Yes | Window target of the source application. |
| toWindowTarget | WindowAnimationTarget | Yes | Window target of the destination application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onCloseWindow

```TypeScript
onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void
```

Called on closing a window.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| closingWindowTarget | WindowAnimationTarget | Yes |  |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onMinimizeWindow

```TypeScript
onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on minimizing a window.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minimizingWindowTarget | WindowAnimationTarget | Yes | Window target of the minimizing window. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onScreenUnlock

```TypeScript
onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void
```

Called on unlocking the screen.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onStartAppFromLauncher

```TypeScript
onStartAppFromLauncher(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form launcher.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | indicates Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onStartAppFromOther

```TypeScript
onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form other.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onStartAppFromRecent

```TypeScript
onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form recent.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

## onWindowAnimationTargetsUpdate

```TypeScript
onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void
```

Called on window animation targets update.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullScreenWindowTarget | WindowAnimationTarget | Yes | The fullscreen window target. |
| floatingWindowTargets | Array&lt;WindowAnimationTarget> | Yes | All the floating window targets. |

## onStartAppFromOther

```TypeScript
onStartAppFromOther?: AppStartCallback
```

Callback function on starting an application form other.

**Type:** AppStartCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onMinimizeWindow

```TypeScript
onMinimizeWindow?: WindowMinimizationCallback
```

Callback function on minimizing a window.

**Type:** WindowMinimizationCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onWindowAnimationTargetsUpdate

```TypeScript
onWindowAnimationTargetsUpdate?: WindowAnimationTargetsUpdationCallback
```

Callback function on window animation targets update.

**Type:** WindowAnimationTargetsUpdationCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onScreenUnlock

```TypeScript
onScreenUnlock?: ScreenUnlockCallback
```

Callback function on unlocking the screen.

**Type:** ScreenUnlockCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onStartAppFromRecent

```TypeScript
onStartAppFromRecent?: AppStartCallback
```

Callback function on starting an application form recent.

**Type:** AppStartCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onCloseWindow

```TypeScript
onCloseWindow?: WindowCloseCallback
```

Callback function on closing a window.

**Type:** WindowCloseCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onStartAppFromLauncher

```TypeScript
onStartAppFromLauncher?: AppStartCallback
```

Callback function on starting an application form launcher.

**Type:** AppStartCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## onAppTransition

```TypeScript
onAppTransition?: AppTransitionCallback
```

Callback function on application transition.

**Type:** AppTransitionCallback

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

