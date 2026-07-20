# KeyCommandCallback (System API)

```TypeScript
type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void
```

Callback function when the shortcut key registered by the system application meets the conditions.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputConsumer-type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void--><!--Device-inputConsumer-type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOptions | KeyOptions | Yes | Options for registering shortcut keys when the system applies. |
| keyEvent | KeyEvent | Yes | Key event when a shortcut key is triggered. |

