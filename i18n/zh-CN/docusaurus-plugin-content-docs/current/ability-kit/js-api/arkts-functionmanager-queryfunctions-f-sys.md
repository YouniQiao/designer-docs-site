# queryFunctions

## queryFunctions

```TypeScript
function queryFunctions(): Promise<Array<FunctionInfo>>
```

Query all available functions.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.ACCESS_FUNCTION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;FunctionInfo>> | The promise used to return available functions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

