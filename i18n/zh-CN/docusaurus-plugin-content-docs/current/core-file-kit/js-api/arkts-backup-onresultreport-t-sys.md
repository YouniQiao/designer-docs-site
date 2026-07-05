# OnResultReport

```TypeScript
type OnResultReport = (bundleName: string, result: string) => void
```

Callback called when the backup service return result information. The first return string parameter indicates the bundleName that triggers the callback. The second return string parameter indicates the result of the bundle.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Backup

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | the bundleName that triggers the callback. |
| result | string | 是 | the result of the bundle. |

