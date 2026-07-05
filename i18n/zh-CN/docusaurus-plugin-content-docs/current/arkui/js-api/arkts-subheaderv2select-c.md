# SubHeaderV2Select

Declare the SubHeaderV2Select

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SubHeaderV2Select,SubHeaderV2,SubHeaderV2IconType,SubHeaderV2OperationItemType,SubHeaderV2OperationType,SubHeaderV2Title,SubHeaderV2OperationItem } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: SubHeaderV2SelectOptions)
```

The constructor of SubHeaderV2Select

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubHeaderV2SelectOptions | 是 |  |

## selectedContent

```TypeScript
@Trace selectedContent?: ResourceStr
```

Sets the selected content of the SubHeaderV2SelectOptions.

**类型：** ResourceStr

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
@Trace options: SelectOption[]
```

Sets the options of the SubHeaderV2SelectOptions.

**类型：** SelectOption[]

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for the SubHeaderV2Select.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
@Trace defaultFocus?: boolean
```

Sets the default focus state of SubHeaderV2SelectOptions.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onSelect

```TypeScript
@Trace onSelect?: SubHeaderV2SelectOnSelect
```

Sets the onSelect of the SubHeaderV2SelectOptions.

**类型：** SubHeaderV2SelectOnSelect

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectedIndex

```TypeScript
@Trace selectedIndex?: number
```

Sets the selected index of the SubHeaderV2SelectOptions.

**类型：** number

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

