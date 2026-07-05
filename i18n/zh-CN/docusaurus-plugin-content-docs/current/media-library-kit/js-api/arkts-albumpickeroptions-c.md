# AlbumPickerOptions

AlbumPickerOptions Object

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { EmptyAreaClickCallback,AlbumPickerComponent,AlbumInfo,AlbumPickerOptions,AlbumPickerController } from '@kit.MediaLibraryKit';
```

## themeColorMode

```TypeScript
themeColorMode?: PickerColorMode
```

AlbumPickerComponent theme color

**类型：** PickerColorMode

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fontSize

```TypeScript
fontSize?: number | string
```

The size of the font displayed in the album. When `fontSize` is a number type, must use 'fp' unit

**类型：** number | string

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## filterType

```TypeScript
filterType?: photoAccessHelper.PhotoViewMIMETypes
```

The type of the content displayed in the album

**类型：** photoAccessHelper.PhotoViewMIMETypes

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

