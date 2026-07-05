# ImeChangeWithUserIdCallback (System API)

```TypeScript
export type ImeChangeWithUserIdCallback =
      (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, userId: number) => void
```

The callback of the inputmethod change event which carries the user ID whose inputmethod is changed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | Yes | the property of current inputmethod. |
| inputMethodSubtype | InputMethodSubtype | Yes | the subtype of current inputmethod. |
| userId | int | Yes | the user ID whose inputmethod is changed. |

