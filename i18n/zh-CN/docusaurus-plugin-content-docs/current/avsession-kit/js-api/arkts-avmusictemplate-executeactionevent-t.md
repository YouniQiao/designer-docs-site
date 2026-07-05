# ExecuteActionEvent

```TypeScript
type ExecuteActionEvent = (actionType: string, params: string) => Promise<string>
```

The execute action event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | string | 是 | action type |
| params | string | 是 | params |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | (string) returned through promise |

