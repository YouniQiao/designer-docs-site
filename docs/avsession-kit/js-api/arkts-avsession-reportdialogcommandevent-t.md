# ReportDialogCommandEvent

```TypeScript
type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void
```

The report dialog command event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DialogControlType | Yes | type |
| buttonInfo | DialogInfo | Yes | button info |

