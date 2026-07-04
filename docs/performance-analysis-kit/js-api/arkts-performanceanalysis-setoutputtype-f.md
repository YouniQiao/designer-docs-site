# setOutputType

## Modules to Import

```TypeScript
import { hilog } from '@ohos.hilog';
```

## setOutputType

```TypeScript
function setOutputType(type: OutputType): OutputType
```

Sets the output type of hilog.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.HiviewDFX.HiLog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | OutputType | Yes | output type of hilog. |

**Return value:**

| Type | Description |
| --- | --- |
| OutputType | previous output type of hilog. |

**Example**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_ONLY);
hilog.info(0x0001, "testTag", 'sandbox log to share sandbox only');
hilog.flush();

```

Sandbox log output.

```TypeScript
05-15 16:57:04.238 40518 40518 I A00001/testTag: sandbox log to share sandbox only

```

