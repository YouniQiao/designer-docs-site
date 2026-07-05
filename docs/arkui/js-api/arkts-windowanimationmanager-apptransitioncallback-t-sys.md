# AppTransitionCallback

```TypeScript
type AppTransitionCallback = (fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on application transition.

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromWindowTarget | WindowAnimationTarget | Yes | Window target of the source application. |
| toWindowTarget | WindowAnimationTarget | Yes | Window target of the destination application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

