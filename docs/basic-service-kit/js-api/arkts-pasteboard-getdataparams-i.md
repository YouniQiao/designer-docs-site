# GetDataParams

Defines parameters when an application obtains the Data from the pasteboard, including the destination path, file conflict options, and progress indicator types.

**Since:** 15

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## progressListener

```TypeScript
progressListener?: ProgressListener
```

Defines a listener for progress data changes. If the default progress indicator is not used, you can set this type to obtain the paste progress. This parameter is left empty by default.

**Type:** ProgressListener

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## progressIndicator

```TypeScript
progressIndicator: ProgressIndicator
```

Progress indicator options. You can choose whether to use the default progress indicator.

**Type:** ProgressIndicator

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## fileConflictOptions

```TypeScript
fileConflictOptions?: FileConflictOptions
```

File conflict options for a paste task. The default value is **OVERWRITE**.

**Type:** FileConflictOptions

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## destUri

```TypeScript
destUri?: string
```

Destination path for copying files. If file processing is not supported, this parameter is not required. If the application involves complex file processing policies or needs to distinguish file multipathing storage, you are advised not to set this parameter but let the application copy files by itself. This parameter is left empty by default.

**Type:** string

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## progressSignal

```TypeScript
progressSignal?: ProgressSignal
```

Function for canceling the paste task. This parameter is valid only when [ProgressIndicator]pasteboard.ProgressIndicator is set to **NONE**. This parameter is left empty by default.

**Type:** ProgressSignal

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

