# MediaAssetProgressHandler

Data handler used to notify the progress of required media asset data

**起始版本：** 15

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onProgress

```TypeScript
onProgress(progress: int): void
```

Indicates the progress of required media asset data

**起始版本：** 15

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | int | 是 | Progress in percentage. Value range: 0 to 100 |

