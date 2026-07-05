# isSendable

## Modules to Import

```TypeScript
import { ArkTSUtils } from '@arkts.utils';
```

## isSendable

```TypeScript
function isSendable(value: Object | null | undefined): boolean
```

Checks whether an ArkTS value is sendable.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object \| null \| undefined | Yes | The value to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the value is sendable, false otherwise. |

