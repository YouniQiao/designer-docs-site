# LazyForEachReleaseStrategy

```TypeScript
declare enum LazyForEachReleaseStrategy
```

资源释放策略枚举，用于配置LazyForEach待销毁节点的资源释放策略。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## BATCH

```TypeScript
BATCH = 0
```

在下一次空闲时段内释放所有被丢弃的节点。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PROGRESSIVE

```TypeScript
PROGRESSIVE = 1
```

在下一次空闲时段内，根据当前帧剩余时间逐个释放被丢弃的节点。未释放的节点将在后续空闲时段根据可用空闲时间继续释放。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

