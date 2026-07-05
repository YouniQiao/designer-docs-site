# RequestDialogInfoEvent

```TypeScript
type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>
```

The request dialog info event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | DialogActionType | 是 | action type |
| actionInfo | DialogActionInfo | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DialogInfo> | (DialogInfo) returned through promise |

