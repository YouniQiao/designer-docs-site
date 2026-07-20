# SizeUpdateCallback (System API)

```TypeScript
export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void
```

Callback triggered when the size of the input method panel changes.

**Since:** 14

<!--Device-inputMethodEngine-export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void--><!--Device-inputMethodEngine-export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | window.Size | Yes | Panel size. |
| keyboardArea | KeyboardArea | Yes | Size of the keyboard area. |

