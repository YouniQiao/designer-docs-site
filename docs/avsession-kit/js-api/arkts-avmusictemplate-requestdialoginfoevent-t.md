# RequestDialogInfoEvent

```TypeScript
type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>
```

The request dialog info event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | DialogActionType | Yes | action type |
| actionInfo | DialogActionInfo | no |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogInfo> | (DialogInfo) returned through promise |

