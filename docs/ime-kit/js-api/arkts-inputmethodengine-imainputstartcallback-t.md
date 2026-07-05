# IMAInputStartCallback

```TypeScript
export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void
```

The callback of 'inputStart' event.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| kbController | KeyboardController | Yes | keyboard controller. |
| inputClient | InputClient | Yes | input client. |

