# GenerateImageTaskPartialResult

Configuration stream result for AI-generated image tasks.

**起始版本：** 23

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## partialFail

```TypeScript
partialFail?: BusinessError
```

Information of the partial error corresponding to AI-generated image task, available in partial error result.

**类型：** BusinessError

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## imageData

```TypeScript
imageData?: string
```

Image data of the image corresponding to AI-generated image task, available in partial result.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## totalCount

```TypeScript
totalCount?: int
```

Total number of the image corresponding to AI-generated image task, available in completed result.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: PartialResultType
```

The type information used for AI-generated image task.

**类型：** PartialResultType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## imageIndex

```TypeScript
imageIndex?: int
```

Sequence number of the image corresponding to AI-generated image task, available in partial and partial error result.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

