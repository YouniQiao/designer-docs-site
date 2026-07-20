# HandleMemberPurchaseEvent

```TypeScript
type HandleMemberPurchaseEvent = (info: MemberPurchaseInfo) => Promise<DialogInfo>
```

The handle member purchase event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-avMusicTemplate-type HandleMemberPurchaseEvent = (info: MemberPurchaseInfo) => Promise<DialogInfo>--><!--Device-avMusicTemplate-type HandleMemberPurchaseEvent = (info: MemberPurchaseInfo) => Promise<DialogInfo>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | MemberPurchaseInfo | Yes | info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogInfo&gt; | (DialogInfo) returned through promise |

