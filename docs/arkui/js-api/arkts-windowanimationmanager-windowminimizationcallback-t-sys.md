# WindowMinimizationCallback

```TypeScript
type WindowMinimizationCallback = (minimizingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on minimizing a window.

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minimizingWindowTarget | WindowAnimationTarget | Yes | Window target of the minimizing window. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

