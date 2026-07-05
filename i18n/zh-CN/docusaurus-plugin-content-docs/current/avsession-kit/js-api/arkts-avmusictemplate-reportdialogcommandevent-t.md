# ReportDialogCommandEvent

```TypeScript
type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void
```

The report dialog command event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | DialogControlType | 是 | type |
| buttonInfo | DialogInfo | 是 | button info |

