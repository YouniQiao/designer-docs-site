# SubHeaderV2OperationItem

Declare the SubHeaderV2OperationItem

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SubHeaderV2Select,SubHeaderV2,SubHeaderV2IconType,SubHeaderV2OperationItemType,SubHeaderV2OperationType,SubHeaderV2Title,SubHeaderV2OperationItem } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: SubHeaderV2OperationItemOptions)
```

The constructor of SubHeaderV2OperationItem

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubHeaderV2OperationItemOptions | 是 |  |

## action

```TypeScript
@Trace action?: SubHeaderV2OperationItemAction
```

callback function when operate the text or icon.

**类型：** SubHeaderV2OperationItemAction

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for SubHeaderV2OperationItem.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
@Trace accessibilityLevel?: string
```

The accessibilityLevel of this text or icon.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
@Trace defaultFocus?: boolean
```

Sets the default focus state of the text or icon.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
@Trace accessibilityText?: ResourceStr
```

The accessibilityText of this text or icon.

**类型：** ResourceStr

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@Trace content: SubHeaderV2OperationItemType
```

The content of text or the address of icon.

**类型：** SubHeaderV2OperationItemType

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
@Trace accessibilityDescription?: ResourceStr
```

The accessibilityDescription of this text or icon.

**类型：** ResourceStr

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

