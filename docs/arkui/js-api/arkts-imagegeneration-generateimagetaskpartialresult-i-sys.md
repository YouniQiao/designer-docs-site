# GenerateImageTaskPartialResult

Configuration stream result for AI-generated image tasks.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## partialFail

```TypeScript
partialFail?: BusinessError
```

Information of the partial error corresponding to AI-generated image task, available in partial error result.

**Type:** BusinessError

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## imageData

```TypeScript
imageData?: string
```

Image data of the image corresponding to AI-generated image task, available in partial result.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## totalCount

```TypeScript
totalCount?: int
```

Total number of the image corresponding to AI-generated image task, available in completed result.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## type

```TypeScript
type: PartialResultType
```

The type information used for AI-generated image task.

**Type:** PartialResultType

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## imageIndex

```TypeScript
imageIndex?: int
```

Sequence number of the image corresponding to AI-generated image task, available in partial and partial error result.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

