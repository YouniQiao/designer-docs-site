# RecentPhotoCheckInfoCallback

```TypeScript
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void
```

The callback of onRecentPhotoCheckInfo event

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recentPhotoExists | boolean | 是 | Does the recent photo exist? |
| info | RecentPhotoInfo | 是 | the recent photo info |

