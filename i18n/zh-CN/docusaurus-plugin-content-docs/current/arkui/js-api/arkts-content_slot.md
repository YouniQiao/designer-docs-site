# content_slot

## content_slot

```TypeScript
content_slot(content: Content)
```

当内容添加到占位符组件时调用。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | Content | 是 | Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树事件回调以及管理ContentSlot的子组件。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ContentSlotAttribute](arkts-contentslotattribute-c.md) | 定义ContentSlot属性，以防止不当的递归使用ContentSlot。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ContentSlotInterface](arkts-contentslotinterface-i.md) | 用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [Content](arkts-content-t.md) |  |

### 常量

| 名称 | 描述 |
| --- | --- |
| [ContentSlot](arkts-content-slot-con.md#ContentSlot) | 用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。 |

