# LazyForEachOptions

配置LazyForEach的参数。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## memoryOptimizationStrategy

```TypeScript
memoryOptimizationStrategy?: LazyForEachMemOptStrategy
```

LazyForEach的内存优化策略。该参数在创建LazyForEach时设定，不支持动态修改。 默认值：[DEFAULT]。

**Type:** LazyForEachMemOptStrategy

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## customComponentFreezeMode

```TypeScript
customComponentFreezeMode?: LazyForEachCustomComponentFreezeMode
```

已移出组件树的缓存自定义节点的冻结模式。默认值：LazyForEachCustomComponentFreezeMode.AUTO。

**Type:** LazyForEachCustomComponentFreezeMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## releaseStrategy

```TypeScript
releaseStrategy?: LazyForEachReleaseStrategy
```

LazyForEach缓存节点的资源释放策略。默认值：LazyForEachReleaseStrategy.BATCH。 <br>默认值:默认值：LazyForEachReleaseStrategy.BATCH。

**Type:** LazyForEachReleaseStrategy

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

