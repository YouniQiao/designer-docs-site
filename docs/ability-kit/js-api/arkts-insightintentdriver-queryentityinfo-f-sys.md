# queryEntityInfo

## queryEntityInfo

```TypeScript
function queryEntityInfo(param: QueryParam): Promise<Array<Record<string, Object>>>
```

查询意图实体信息。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.EXECUTE_INSIGHT_INTENT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | QueryParam | Yes | 查询参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Record&lt;string, Object>>> | - Returns the insight intent entity information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

