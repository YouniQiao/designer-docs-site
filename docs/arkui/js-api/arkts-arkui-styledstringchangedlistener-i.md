# StyledStringChangedListener

Defines the listener for changes of the styled string text content.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidChange

```TypeScript
onDidChange?: OnDidChangeCallback
```

Callback invoked when text is changed.

**Type:** OnDidChangeCallback

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillChange

```TypeScript
onWillChange?: Callback<StyledStringChangeValue, boolean>
```

Callback invoked when text is about to change.

**Type:** Callback<StyledStringChangeValue, boolean>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

