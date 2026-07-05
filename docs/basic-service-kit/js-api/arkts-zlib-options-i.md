# Options

Options用于指定在压缩或解压Zip文件时的选项。

**Since:** 7

**System capability:** SystemCapability.BundleManager.Zlib

## Modules to Import

```TypeScript
import { zlib } from '@kit.BasicServicesKit';
```

## pathSeparatorStrategy

```TypeScript
pathSeparatorStrategy?: PathSeparatorStrategy
```

并行策略。

**Type:** PathSeparatorStrategy

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## parallel

```TypeScript
parallel?: ParallelStrategy
```

压缩策略。

**Type:** ParallelStrategy

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## level

```TypeScript
level?: CompressLevel
```

压缩或解压时指定的压缩等级。

**Type:** CompressLevel

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## memLevel

```TypeScript
memLevel?: MemLevel
```

压缩时指定的使用内存等级。

**Type:** MemLevel

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## strategy

```TypeScript
strategy?: CompressStrategy
```

压缩时指定的压缩策略。

**Type:** CompressStrategy

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

