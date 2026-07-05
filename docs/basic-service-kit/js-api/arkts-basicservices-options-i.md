# Options

Defines options used to compress or decompress a ZIP file.

**Since:** 7

**System capability:** SystemCapability.BundleManager.Zlib

## Modules to Import

```TypeScript
import { zlib } from '@ohos.zlib';
```

## keepTopLevelFolder

```TypeScript
keepTopLevelFolder?: boolean
```

Indicates whether to keep the top-level source folder in the compressed file.The default value is false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.BundleManager.Zlib

## level

```TypeScript
level?: CompressLevel
```

Compression level specified for compression or decompression.

**Type:** CompressLevel

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.BundleManager.Zlib

## memLevel

```TypeScript
memLevel?: MemLevel
```

Memory level specified for compression.

**Type:** MemLevel

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.BundleManager.Zlib

## parallel

```TypeScript
parallel?: ParallelStrategy
```

Serial or parallel strategy specified for compression or decompression.

**Type:** ParallelStrategy

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.BundleManager.Zlib

## pathSeparatorStrategy

```TypeScript
pathSeparatorStrategy?: PathSeparatorStrategy
```

Separator strategy for the file path in the compressed package specified for decompression.

**Type:** PathSeparatorStrategy

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.BundleManager.Zlib

## strategy

```TypeScript
strategy?: CompressStrategy
```

Compression strategy specified for compression.

**Type:** CompressStrategy

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.BundleManager.Zlib

