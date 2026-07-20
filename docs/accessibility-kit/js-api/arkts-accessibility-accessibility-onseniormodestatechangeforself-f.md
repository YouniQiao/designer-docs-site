# onSeniorModeStateChangeForSelf

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## onSeniorModeStateChangeForSelf

```TypeScript
function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void
```

Register an observer for this application's senior mode state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-accessibility-function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void--><!--Device-accessibility-function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | Yes | Asynchronous callback interface. |

