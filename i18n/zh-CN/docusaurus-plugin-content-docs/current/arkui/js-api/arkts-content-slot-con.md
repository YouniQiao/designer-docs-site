# Constants

## ContentSlot

```TypeScript
declare const ContentSlot: ContentSlotInterface
```

用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

