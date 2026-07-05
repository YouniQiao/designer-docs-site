# AccessModeType

```TypeScript
declare enum AccessModeType
```

枚举，表示需要校验的具体权限。若不填，默认校验文件是否存在。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## EXIST

```TypeScript
EXIST = 0
```

文件是否存在。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## WRITE

```TypeScript
WRITE = 2
```

文件是否具有写入权限。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## READ

```TypeScript
READ = 4
```

文件是否具有读取权限。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

## READ_WRITE

```TypeScript
READ_WRITE = 6
```

文件是否具有读写权限。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

