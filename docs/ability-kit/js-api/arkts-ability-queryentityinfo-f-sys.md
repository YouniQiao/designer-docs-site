# queryEntityInfo (System API)

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@ohos.app.ability.insightIntentDriver';
```

## queryEntityInfo

```TypeScript
function queryEntityInfo(param: QueryParam): Promise<Array<Record<string, Object>>>
```

Query insight intent entity information.

**Since:** 26.0.0

**Required permissions:** ohos.permission.EXECUTE_INSIGHT_INTENT

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | QueryParam | Yes | Query parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Record&lt;string, Object&gt;&gt;&gt; | - Returns the insight intent entity information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Connect to system service failed;2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

