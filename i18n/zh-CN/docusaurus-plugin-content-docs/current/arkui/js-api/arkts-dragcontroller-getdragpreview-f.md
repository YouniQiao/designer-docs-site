# getDragPreview

## getDragPreview

```TypeScript
function getDragPreview(): DragPreview
```

返回一个代表拖拽背板的对象。 > **说明：** > > 从API version 11开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getDragController](arkts-uicontext-c.md#getDragController)方法获取当前UI > 上下文关联的[DragController](arkts-dragcontroller-c.md#DragController)对象。

**起始版本：** 11

**废弃版本：** 18

**替代接口：** ohos.arkui.UIContext.DragController#getDragPreview

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DragPreview | 一个代表拖拽背板的对象，提供背板样式设置的接口，在OnDrop和OnDragEnd回调中使用不生效。 |

