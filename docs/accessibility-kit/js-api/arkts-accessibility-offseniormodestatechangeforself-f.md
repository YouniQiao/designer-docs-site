# offSeniorModeStateChangeForSelf

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## offSeniorModeStateChangeForSelf

```TypeScript
function offSeniorModeStateChangeForSelf(callback?: Callback<boolean>): void
```

Unregister the observer for this application's senior mode state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | No | Asynchronous callback interface.<br>Default behavior: Unregister all callbacks for app senior mode state changes. |

