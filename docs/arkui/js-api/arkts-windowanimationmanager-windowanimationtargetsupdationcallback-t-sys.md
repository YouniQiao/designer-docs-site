# WindowAnimationTargetsUpdationCallback

```TypeScript
type WindowAnimationTargetsUpdationCallback = (fullScreenWindowTarget: WindowAnimationTarget,
    floatingWindowTargets: Array<WindowAnimationTarget>) => void
```

Callback function on window animation targets update.

**Since:** 23

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullScreenWindowTarget | WindowAnimationTarget | Yes | The fullscreen window target. |
| floatingWindowTargets | Array&lt;WindowAnimationTarget> | Yes | All the floating window targets. |

