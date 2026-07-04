---
last_update:
  date: 2026-07-04
---

# PasteButtonCallback

```TypeScript
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void
```

Callback function when the paste button is clicked.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | The click event. |
| result | PasteButtonOnClickResult | Yes | The result of click event. |
| error | BusinessError&lt;void&gt; | No | The error code and message of click event. |

