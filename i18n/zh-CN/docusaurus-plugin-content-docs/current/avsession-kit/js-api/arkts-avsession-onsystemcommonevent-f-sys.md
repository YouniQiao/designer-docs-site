# onSystemCommonEvent

## onSystemCommonEvent

```TypeScript
function onSystemCommonEvent(callback: EventProcess): void
```

Register system common event callback

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | EventProcess | 是 | Used to handle event when the common command is received |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 6600101 | Session service exception. |

