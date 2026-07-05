# ZStream

处理所有用于压缩和解压缩所需的信息。

**Since:** 12

**System capability:** SystemCapability.BundleManager.Zlib

## Modules to Import

```TypeScript
import { zlib } from '@kit.BasicServicesKit';
```

## adler

```TypeScript
adler?: long
```

未压缩数据的Adler-32或CRC-32值。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## availableOut

```TypeScript
availableOut?: int
```

nextOut的剩余可用字节数。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## totalIn

```TypeScript
totalIn?: long
```

到目前为止读取的输入字节总数。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## availableIn

```TypeScript
availableIn?: int
```

nextIn可用的字节数。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## nextIn

```TypeScript
nextIn?: ArrayBuffer
```

需要压缩的输入字节。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## dataType

```TypeScript
dataType?: int
```

关于数据类型的最佳猜测：deflate的二进制或文本，或inflate的解码状态。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## nextOut

```TypeScript
nextOut?: ArrayBuffer
```

压缩后的输出字节。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## totalOut

```TypeScript
totalOut?: long
```

到目前为止输出字节总数。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

