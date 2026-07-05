# sendPrivateCommand

## sendPrivateCommand

```TypeScript
function sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>
```

Send private command.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| commandData | Record&lt;string, CommandDataType> | 是 | command data which will be sent. Max size 32KB. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800026 | input method system panel error. Possible causes:  1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.  3. the caller is not system panel. |

