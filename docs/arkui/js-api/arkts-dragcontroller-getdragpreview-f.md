# getDragPreview

## getDragPreview

```TypeScript
function getDragPreview(): DragPreview
```

返回一个代表拖拽背板的对象。 > **说明：** > > 从API version 11开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getDragController](arkts-uicontext-c.md#getDragController)方法获取当前UI > 上下文关联的[DragController](arkts-dragcontroller-c.md#DragController)对象。

**Since:** 11

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.DragController#getDragPreview

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DragPreview | 一个代表拖拽背板的对象，提供背板样式设置的接口，在OnDrop和OnDragEnd回调中使用不生效。 |

