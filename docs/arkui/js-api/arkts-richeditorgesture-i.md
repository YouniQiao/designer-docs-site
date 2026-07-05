# RichEditorGesture

用户手势事件。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onLongPress

```TypeScript
onLongPress?: Callback<GestureEvent>
```

[GestureEvent](docroot://reference/apis-arkui/arkui-ts/ts-gesture-common.md#gestureevent对象说明)为用户长按事件。 长按完成时回调事件。

**Type:** Callback<GestureEvent>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClick

```TypeScript
onClick?: Callback<ClickEvent>
```

[ClickEvent](arkts-clickevent-i.md#ClickEvent)为用户点击事件。 点击完成时回调事件。 双击时，第一次点击触发回调事件。

**Type:** Callback<ClickEvent>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDoubleClick

```TypeScript
onDoubleClick?: Callback<GestureEvent>
```

[GestureEvent](docroot://reference/apis-arkui/arkui-ts/ts-gesture-common.md#gestureevent对象说明)为用户双击事件。 双击完成时回调事件。

**Type:** Callback<GestureEvent>

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

