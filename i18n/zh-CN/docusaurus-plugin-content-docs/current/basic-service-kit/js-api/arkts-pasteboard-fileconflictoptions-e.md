# FileConflictOptions

```TypeScript
enum FileConflictOptions
```

Enumerates options for file copy conflicts.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.Pasteboard

## OVERWRITE

```TypeScript
OVERWRITE = 0
```

Overwrites the file with the same name in the destination path.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## SKIP

```TypeScript
SKIP = 1
```

Skips the file with the same name in the destination path. If **SKIP** is set, the copied data of the skipped file is not pasted to the application.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

