# sendSystemCommonCommand

## sendSystemCommonCommand

```TypeScript
function sendSystemCommonCommand(command: string, args: ExtraInfo): Promise<string>
```

Send system control command. The system automatically selects the recipient.

**起始版本：** 24

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | string | 是 | The command name to be sent. |
| args | ExtraInfo | 是 | The parameters of command info |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | callback info for sync command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

