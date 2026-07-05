# queryFunctions

## queryFunctions

```TypeScript
function queryFunctions(): Promise<Array<FunctionInfo>>
```

Query all available functions.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.ACCESS_FUNCTION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;FunctionInfo>> | The promise used to return available functions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

