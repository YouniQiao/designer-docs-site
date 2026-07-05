# CompressFlushMode

```TypeScript
export enum CompressFlushMode
```

压缩刷新模式。

**Since:** 12

**System capability:** SystemCapability.BundleManager.Zlib

## NO_FLUSH

```TypeScript
NO_FLUSH = 0
```

默认值，表示正常操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## PARTIAL_FLUSH

```TypeScript
PARTIAL_FLUSH = 1
```

在流中生成部分刷新点。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## SYNC_FLUSH

```TypeScript
SYNC_FLUSH = 2
```

在保持压缩流状态的同时强制输出所有压缩数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## FULL_FLUSH

```TypeScript
FULL_FLUSH = 3
```

重置压缩状态。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## FINISH

```TypeScript
FINISH = 4
```

压缩或解压缩过程结束。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## BLOCK

```TypeScript
BLOCK = 5
```

允许更精确的控制。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## TREES

```TypeScript
TREES = 6
```

实施过程中有特殊目的。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

