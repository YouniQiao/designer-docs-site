---
last_update:
  date: 2026-07-04
---

# PasteButton

Defines the interface for setting a paste button.

## PasteButton

```TypeScript
PasteButton()
```

Creates a paste button.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PasteButton

```TypeScript
PasteButton(options: PasteButtonOptions)
```

Creates a paste button with the specified composition. If an attribute is not set, the corresponding element will not be drawn.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PasteButtonOptions | Yes | Indicates the options of the paste button. |

## Summary

- [PasteButtonOptions](arkts-arkui-pastebutton-pastebuttonoptions-i.md)
- [PasteButtonCallback](arkts-arkui-pastebutton-pastebuttoncallback-t.md)
- [PasteButtonOnClickResult](arkts-arkui-pastebutton-pastebuttononclickresult-e.md)
- [PasteDescription](arkts-arkui-pastebutton-pastedescription-e.md)
- [PasteIconStyle](arkts-arkui-pastebutton-pasteiconstyle-e.md)
