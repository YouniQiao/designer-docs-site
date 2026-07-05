# content_slot

## content_slot

```TypeScript
content_slot(content: Content)
```

当内容添加到占位符组件时调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | Content | Yes | Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树事件回调以及管理ContentSlot的子组件。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ContentSlotAttribute](arkts-contentslotattribute-c.md) | 定义ContentSlot属性，以防止不当的递归使用ContentSlot。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ContentSlotInterface](arkts-contentslotinterface-i.md) | 用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。 |

### Types

| Name | Description |
| --- | --- |
| [Content](arkts-content-t.md) |  |

### Constants

| Name | Description |
| --- | --- |
| [ContentSlot](arkts-content-slot-con.md#ContentSlot) | 用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。 |

