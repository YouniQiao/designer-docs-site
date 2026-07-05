# ContainerSpanModifier

Defines ContainerSpan modifier, the base class for quick use modifier ability

**继承实现关系：** ContainerSpanModifier继承自：ContainerSpanAttribute， 实现：AttributeModifier<ContainerSpanAttribute>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## applyNormalAttribute

```TypeScript
applyNormalAttribute?(containerSpanAttribute: ContainerSpanAttribute): void
```

Defines the normal update attribute function.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| containerSpanAttribute | ContainerSpanAttribute | 是 | The instance of ContainerSpanAttribute |

