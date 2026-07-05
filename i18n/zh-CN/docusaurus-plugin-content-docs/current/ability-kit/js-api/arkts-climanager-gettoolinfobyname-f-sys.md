# getToolInfoByName

## getToolInfoByName

```TypeScript
function getToolInfoByName(toolName: string): Promise<ToolInfo>
```

Get detailed information of a single tool by its name

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.QUERY_CLI_TOOL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| toolName | string | 是 | The name of target tool. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ToolInfo> | detailed information of tool. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600030 | No tool with the specified name exists. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

