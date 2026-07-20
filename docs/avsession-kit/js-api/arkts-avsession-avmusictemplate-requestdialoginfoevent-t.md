# RequestDialogInfoEvent

```TypeScript
type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>
```

The request dialog info event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-avMusicTemplate-type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>--><!--Device-avMusicTemplate-type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | DialogActionType | Yes | action type |
| actionInfo | DialogActionInfo | No | action info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogInfo&gt; | (DialogInfo) returned through promise |

