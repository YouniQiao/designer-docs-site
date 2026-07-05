# setSeniorModeStateForSelf

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## setSeniorModeStateForSelf

```TypeScript
function setSeniorModeStateForSelf(state: boolean): Promise<void>
```

Set this application's senior mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | Indicates whether to enable senior mode for this application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality. |

