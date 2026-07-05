# onSystemPrivateCommand

## onSystemPrivateCommand

```TypeScript
function onSystemPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void
```

Subscribe to the event when the input method application sends private data commands.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, CommandDataType>> | 是 | callback triggered when  an input method application sends a private data command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |

