# MediaAssetDataHandler

Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onDataPrepared

```TypeScript
onDataPrepared(data: T, map?: Map<string, string>): void
```

Indicates required media asset data is prepared

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | T | 是 | the returned data of media asset |
| map | Map&lt;string, string> | 否 |  |

## onDataPrepared

```TypeScript
onDataPrepared(data: T | undefined, map?: Map<string, string>): void
```

Indicates required media asset data is prepared

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | T \| undefined | 是 | the returned data of media asset  if data of media asset is invalid, return undefined. |
| map | Map&lt;string, string> | 否 |  |

