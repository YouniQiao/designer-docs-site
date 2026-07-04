# GenerateTextTaskPartialResult (System API)

Configuration stream result for AI-generated text tasks.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { imageGeneration } from '@ohos.arkui.intelligence.imageGeneration';
```

## content

```TypeScript
content?: string
```

Final data in AI-generated text task, available in partial result.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## partialFail

```TypeScript
partialFail?: BusinessError
```

Information of the partial error corresponding to AI-generated text task, available in partial error result.

**Type:** BusinessError

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## reasoningContent

```TypeScript
reasoningContent?: string
```

Think information in AI-generated text task, available in partial result.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## type

```TypeScript
type: PartialResultType
```

The type information used for AI-generated text task.

**Type:** PartialResultType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

