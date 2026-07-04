# RichEditorGesture

User gesture event.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClick

```TypeScript
onClick?: Callback<ClickEvent>
```

Triggered when [ClickEvent](arkts-arkui-clickevent-i.md#clickevent) occurs. It is executed on completion of a single click. On a double-click, the first click triggers the callback event.

**Type:** Callback<ClickEvent>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onLongPress

```TypeScript
onLongPress?: Callback<GestureEvent>
```

Triggered when the user performs a long press. It is executed on completion of a long press.

**Type:** Callback<GestureEvent>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

