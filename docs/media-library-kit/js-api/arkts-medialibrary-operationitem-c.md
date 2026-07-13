# OperationItem

Operation item

**Since:** 22

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## field

```TypeScript
field?: PhotoKeys
```

The field of the operation.

**Type:** PhotoKeys

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## operationType

```TypeScript
operationType: OperationType
```

The type of the operation

**Type:** OperationType

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## value

```TypeScript
value?: Array<OperationValueType>
```

The value of the operation. The value length follows operationType-specific limit N (max 10),
truncated to first N if exceeded.

**Type:** Array<OperationValueType>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

