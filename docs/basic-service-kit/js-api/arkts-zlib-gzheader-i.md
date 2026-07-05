# GzHeader

传递从zlib例程中获取的Gzip头部信息。

**Since:** 12

**System capability:** SystemCapability.BundleManager.Zlib

## Modules to Import

```TypeScript
import { zlib } from '@kit.BasicServicesKit';
```

## os

```TypeScript
os?: int
```

操作系统。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## extra

```TypeScript
extra?: ArrayBuffer
```

额外字段。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## name

```TypeScript
name?: ArrayBuffer
```

文件名。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## comment

```TypeScript
comment?: ArrayBuffer
```

注释。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## xflags

```TypeScript
xflags?: int
```

额外标志。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## time

```TypeScript
time?: long
```

修改时间。

**Type:** long

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## hcrc

```TypeScript
hcrc?: boolean
```

如果存在crc标头，则为True。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## done

```TypeScript
done?: boolean
```

读取gzip标头后为True。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## extraLen

```TypeScript
extraLen?: int
```

额外字段的长度。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## isText

```TypeScript
isText?: boolean
```

如果压缩数据被认为是文本，则为True。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

