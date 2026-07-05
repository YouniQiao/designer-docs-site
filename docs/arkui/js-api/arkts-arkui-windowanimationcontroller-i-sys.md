# WindowAnimationController (System API)

Window animation controller.

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { windowAnimationManager } from '@ohos.animation.windowAnimationManager';
```

## onAppTransition

```TypeScript
onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on application transition.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromWindowTarget | WindowAnimationTarget | Yes | Window target of the source application. |
| toWindowTarget | WindowAnimationTarget | Yes | Window target of the destination application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onCloseWindow

```TypeScript
onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void
```

Called on closing a window.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| closingWindowTarget | WindowAnimationTarget | Yes |  |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onMinimizeWindow

```TypeScript
onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on minimizing a window.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minimizingWindowTarget | WindowAnimationTarget | Yes | Window target of the minimizing window. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onScreenUnlock

```TypeScript
onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void
```

Called on unlocking the screen.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

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

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | indicates Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onStartAppFromOther

```TypeScript
onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form other.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onStartAppFromRecent

```TypeScript
onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void
```

Called on starting an application form recent.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

## onWindowAnimationTargetsUpdate

```TypeScript
onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void
```

Called on window animation targets update.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullScreenWindowTarget | WindowAnimationTarget | Yes | The fullscreen window target. |
| floatingWindowTargets | Array&lt;WindowAnimationTarget&gt; | Yes | All the floating window targets. |

**Example**

For details, see the sample code under [windowAnimationManager.setController](#windowanimationmanagersetcontroller).

