# ReportDialogCommandEvent

```TypeScript
type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void
```

The report dialog command event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-avMusicTemplate-type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void--><!--Device-avMusicTemplate-type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DialogControlType | Yes | type |
| buttonInfo | DialogInfo | Yes | button info |

