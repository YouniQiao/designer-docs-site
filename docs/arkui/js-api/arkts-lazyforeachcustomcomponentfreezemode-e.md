# LazyForEachCustomComponentFreezeMode

```TypeScript
declare enum LazyForEachCustomComponentFreezeMode
```

冻结模式枚举，用于配置LazyForEach中已移出组件树的缓存自定义节点的冻结行为。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AUTO

```TypeScript
AUTO = 0
```

遵循Metadata中enableCustomComponentFreeze字段的配置来决定是否启用冻结。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DISABLED

```TypeScript
DISABLED = 1
```

禁用已移出组件树的缓存自定义节点的冻结。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLED

```TypeScript
ENABLED = 2
```

启用已移出组件树的缓存自定义节点的冻结。开启后，缓存自定义组件的状态更新将被冻结。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

