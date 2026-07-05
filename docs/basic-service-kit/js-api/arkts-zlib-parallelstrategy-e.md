# ParallelStrategy

```TypeScript
export enum ParallelStrategy
```

ParallelStrategy作为[Options]zlib.Options的一个属性，用于指定压缩或解压时的串行或并行策略。

**Since:** 18

**System capability:** SystemCapability.BundleManager.Zlib

## PARALLEL_STRATEGY_SEQUENTIAL

```TypeScript
PARALLEL_STRATEGY_SEQUENTIAL = 0
```

默认值，串行压缩/解压策略。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## PARALLEL_STRATEGY_PARALLEL_DECOMPRESSION

```TypeScript
PARALLEL_STRATEGY_PARALLEL_DECOMPRESSION = 1
```

并行解压策略。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

