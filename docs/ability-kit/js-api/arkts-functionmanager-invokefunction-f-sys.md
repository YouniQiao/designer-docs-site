# invokeFunction

## invokeFunction

```TypeScript
function invokeFunction(functionNamespace: string, functionName: string,
    args: Record<string, Object>, options?: InvokeOptions): Promise<InvokeResult>
```

Invoke a function by functionNamespace and functionName.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.ACCESS_FUNCTION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| functionNamespace | string | Yes | The namespace of the target function. |
| functionName | string | Yes | The name of the target function. |
| args | Record&lt;string, Object> | Yes | The input arguments for the function. |
| options | InvokeOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InvokeResult> | The promise used to return the result of function invocation. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |
| 35600060 | The function does not exist. |
| 35600061 | The function execute failed. |
| 35600062 | The function execute timeout. |

