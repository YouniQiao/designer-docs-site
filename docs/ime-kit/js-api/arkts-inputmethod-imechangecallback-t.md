# ImeChangeCallback

```TypeScript
export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
```

The callback of 'imeChange' event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | Yes | the property of current inputmethod. |
| inputMethodSubtype | InputMethodSubtype | Yes | the subtype of current inputmethod. |

