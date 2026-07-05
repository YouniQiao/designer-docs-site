# CachedCountOptions

预加载子组件的配置选项。

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## independent

```TypeScript
independent?: boolean
```

[cachedCount](arkts-swiperattribute-c.md#cachedCount)是否按组计算。 设置为true时，cachedCount按实际子组件个数计算，不按组计算。 设置为false时，如果displayCount.swipeByGroup=true，则cachedCount按组计算，否则按实际子组件个数计算。 默认值：false

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isShown

```TypeScript
isShown?: boolean
```

预加载范围内的节点是否进行绘制。 设置为true时，预加载范围内的节点进行绘制。 设置为false时，预加载范围内的节点不进行绘制。 默认值：false

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

