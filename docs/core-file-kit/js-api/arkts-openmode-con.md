# Constants

## READ_ONLY

```TypeScript
const READ_ONLY = 0o0
```

只读打开。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## WRITE_ONLY

```TypeScript
const WRITE_ONLY = 0o1
```

只写打开。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## READ_WRITE

```TypeScript
const READ_WRITE = 0o2
```

读写打开。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## CREATE

```TypeScript
const CREATE = 0o100
```

若文件不存在，则创建文件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## TRUNC

```TypeScript
const TRUNC = 0o1000
```

如果文件存在且以只写或读写的方式打开，则将其长度裁剪为零。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## APPEND

```TypeScript
const APPEND = 0o2000
```

以追加方式打开，后续写将追加到文件末尾。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## NONBLOCK

```TypeScript
const NONBLOCK = 0o4000
```

如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## DIR

```TypeScript
const DIR = 0o200000
```

如果path不指向目录，则出错。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## NOFOLLOW

```TypeScript
const NOFOLLOW = 0o400000
```

如果path指向符号链接，则出错。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## SYNC

```TypeScript
const SYNC = 0o4010000
```

以同步IO的方式打开文件。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## UNCACHE

```TypeScript
const UNCACHE = 0o10000000000
```

UNCACHE IO。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

