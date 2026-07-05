# GetDataParams

Defines parameters when an application obtains the Data from the pasteboard, including the destination path, file conflict options, and progress indicator types.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## progressListener

```TypeScript
progressListener?: ProgressListener
```

Defines a listener for progress data changes. If the default progress indicator is not used, you can set this type to obtain the paste progress. This parameter is left empty by default.

**类型：** ProgressListener

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## progressIndicator

```TypeScript
progressIndicator: ProgressIndicator
```

Progress indicator options. You can choose whether to use the default progress indicator.

**类型：** ProgressIndicator

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## fileConflictOptions

```TypeScript
fileConflictOptions?: FileConflictOptions
```

File conflict options for a paste task. The default value is **OVERWRITE**.

**类型：** FileConflictOptions

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## destUri

```TypeScript
destUri?: string
```

Destination path for copying files. If file processing is not supported, this parameter is not required. If the application involves complex file processing policies or needs to distinguish file multipathing storage, you are advised not to set this parameter but let the application copy files by itself. This parameter is left empty by default.

**类型：** string

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## progressSignal

```TypeScript
progressSignal?: ProgressSignal
```

Function for canceling the paste task. This parameter is valid only when [ProgressIndicator]pasteboard.ProgressIndicator is set to **NONE**. This parameter is left empty by default.

**类型：** ProgressSignal

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

