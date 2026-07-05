# SelectionChangeCallback

```TypeScript
export type SelectionChangeCallback = (oldBegin: int, oldEnd: int, newBegin: int, newEnd: int) => void
```

The callback of 'selectionChange' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldBegin | int | Yes | the old begin of the selected text. |
| oldEnd | int | Yes | the old end of the selected text. |
| newBegin | int | Yes | the new begin of the selected text. |
| newEnd | int | Yes | the new end of the selected text. |

