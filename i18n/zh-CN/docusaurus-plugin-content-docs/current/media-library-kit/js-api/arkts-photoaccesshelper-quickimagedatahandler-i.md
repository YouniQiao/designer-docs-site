# QuickImageDataHandler

Data handler when quick request image is finished

**起始版本：** 13

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onDataPrepared

```TypeScript
onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void
```

Indicates required media asset data quickly is prepared

**起始版本：** 13

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | T | 是 | the returned data of picture |
| imageSource | image.ImageSource | 是 | the returned data of imageSource |
| map | Map&lt;string, string> | 是 | additional information for the data |

## onDataPrepared

```TypeScript
onDataPrepared(data: T | undefined, imageSource: image.ImageSource | null, map: Map<string, string>): void
```

Indicates required media asset data quickly is prepared

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | T \| undefined | 是 | the returned data of picture  if data of media asset is invalid,return undefined. |
| imageSource | image.ImageSource \| null | 是 | the returned data of imageSource  if data of imageSource is invalid, return null. |
| map | Map&lt;string, string> | 是 | additional information for the data |

