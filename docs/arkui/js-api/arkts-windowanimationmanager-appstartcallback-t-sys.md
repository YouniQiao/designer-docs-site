# AppStartCallback

```TypeScript
type AppStartCallback = (startingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on starting an application.

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | Yes | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | Yes | Animation finished callback. |

