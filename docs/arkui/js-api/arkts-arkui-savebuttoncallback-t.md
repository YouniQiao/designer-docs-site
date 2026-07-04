# SaveButtonCallback

```TypeScript
type SaveButtonCallback = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void
```

Callback function when the save button is clicked.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | The click event. |
| result | SaveButtonOnClickResult | Yes | The result of click event. |
| error | BusinessError&lt;void&gt; | No | The error code and message of click event. |

