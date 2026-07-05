# invokeFunction

## invokeFunction

```TypeScript
function invokeFunction(functionNamespace: string, functionName: string,
    args: Record<string, Object>, options?: InvokeOptions): Promise<InvokeResult>
```

Invoke a function by functionNamespace and functionName.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.ACCESS_FUNCTION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| functionNamespace | string | 是 | The namespace of the target function. |
| functionName | string | 是 | The name of the target function. |
| args | Record&lt;string, Object> | 是 | The input arguments for the function. |
| options | InvokeOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;InvokeResult> | The promise used to return the result of function invocation. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |
| 35600060 | The function does not exist. |
| 35600061 | The function execute failed. |
| 35600062 | The function execute timeout. |

