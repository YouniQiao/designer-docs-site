# OnFileReadyBatch

```TypeScript
type OnFileReadyBatch = (error: BusinessError<void>, files: Array<File>) => void
```

Function that returns array of file handle.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| error | BusinessError&lt;void> | 是 | the error that triggers the callback. |
| files | Array&lt;File> | 是 | file handle. |

