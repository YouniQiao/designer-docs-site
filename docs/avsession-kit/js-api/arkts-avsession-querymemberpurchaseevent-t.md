# QueryMemberPurchaseEvent

```TypeScript
type QueryMemberPurchaseEvent = (memberPurchaseType: MemberPurchaseType) => Promise<MemberPurchaseInfo[]>
```

The query member purchase event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| memberPurchaseType | MemberPurchaseType | Yes | memberPurchaseType |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MemberPurchaseInfo[]&gt; | (MemberPurchaseInfo[]) returned through promise |

