# ReportCustomElementsChangeEvent

```TypeScript
type ReportCustomElementsChangeEvent = (actionType: ActionType, customType: CustomType,
    customElement: CustomElement) => void
```

The report custom elements change event.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | ActionType | Yes | action type |
| customType | CustomType | Yes | custom type |
| customElement | CustomElement | Yes | custom element |

