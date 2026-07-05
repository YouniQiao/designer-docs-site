# Constants

## ContentSlot

```TypeScript
declare const ContentSlot: ContentSlotInterface
```

用于渲染并管理Native层使用C-API创建的组件。 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

