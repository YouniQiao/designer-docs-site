# ContextRecoveryInfo

Context information of the exit status of PhotoPicker, which can be used for on-site recovery of PhotoPicker next time.

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## albumUri

```TypeScript
albumUri: string
```

The album URI from which the user exited during the last selection. The default value is empty string.

**Type:** string

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## displayName

```TypeScript
displayName: string
```

Filename of the first fully visible photo in the last selection interface. The default value is empty string.

**Type:** string

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fileSize

```TypeScript
fileSize?: number
```

size of the first fully visible photo in the last selection interface. the default value is 0. Unit: Byte, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridLevel

```TypeScript
gridLevel?: GridLevel
```

Enum value of the grid level by the user during the last selection. This information is only included when gridPinchModeType is configured as FULL_FUNCTION_GRID.

**Type:** GridLevel

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationType

```TypeScript
recommendationType: number
```

Enum value of the recommendation content set by the user during the last selection (see `RecommendationType`). The default value is 0.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## selectedRecommendationType

```TypeScript
selectedRecommendationType: number
```

Enum value of the recommendation content selected by the user during the last selection (see `RecommendationType`). The default value is 0.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## sortRule

```TypeScript
sortRule?: string
```

the sort rule by the user during the last selection. The default value is empty string.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## time

```TypeScript
time: number
```

Timestamp of the first fully visible photo in the last selection interface. The default value is 0. Unit: ms, The value must be greater than or equal to 0.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## version

```TypeScript
version: number
```

Context data version number for validating compatibility of context recovery.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

