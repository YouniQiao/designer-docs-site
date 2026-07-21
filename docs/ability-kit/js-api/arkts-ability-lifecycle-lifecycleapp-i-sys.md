# LifecycleApp

interface of app lifecycle.

**Since:** 7

<!--Device-unnamed-export declare interface LifecycleApp--><!--Device-unnamed-export declare interface LifecycleApp-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

<a id="onwindowdisplaymodechanged"></a>
## onWindowDisplayModeChanged

```TypeScript
onWindowDisplayModeChanged?(isShownInMultiWindow: boolean, newConfig: resourceManager.Configuration): void
```

Called when the window display mode of this ability changes, for example, from fullscreen mode to multi-window mode or from multi-window mode to fullscreen mode.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-LifecycleApp-onWindowDisplayModeChanged?(isShownInMultiWindow: boolean, newConfig: resourceManager.Configuration): void--><!--Device-LifecycleApp-onWindowDisplayModeChanged?(isShownInMultiWindow: boolean, newConfig: resourceManager.Configuration): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShownInMultiWindow | boolean | Yes | Specifies whether this ability is currently in multi-window mode.The value {@code true} indicates the multi-window mode, and {@code false}indicates another mode. |
| newConfig | resourceManager.Configuration | Yes | Indicates the new configuration information about Page ability. |

