# GetDataParams

Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving file conflicts, and progress indicator type. For details, see [Obtaining Data Asynchronously Through Drag-and-Drop].

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## acceptableInfo

```TypeScript
acceptableInfo?: DataLoadInfo
```

Indicates the supported data information.

**Type:** DataLoadInfo

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## dataProgressListener

```TypeScript
dataProgressListener: DataProgressListener
```

Indicates progress and data listener when getting unified data.

**Type:** DataProgressListener

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## destUri

```TypeScript
destUri?: string
```

Indicates the dest path uri where copy file will be copied to sandbox of application.

**Type:** string

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## fileConflictOptions

```TypeScript
fileConflictOptions?: FileConflictOptions
```

Indicates file conflict options when dest path has file with same name.

**Type:** FileConflictOptions

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## progressIndicator

```TypeScript
progressIndicator: ProgressIndicator
```

Indicates whether to use default system progress indicator.

**Type:** ProgressIndicator

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

