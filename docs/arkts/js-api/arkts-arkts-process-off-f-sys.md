# off (System API)

## Modules to Import

```TypeScript
import { process } from '@kit.ArkTS';
```

<a id="off"></a>
## off

```TypeScript
function off(type: string): boolean
```

Remove registered event

**Since:** 7

<!--Device-process-function off(type: string): boolean--><!--Device-process-function off(type: string): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Remove the type of registered event. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return removed result. |

