# EditableLeftIconV2

Declaration of the left icon configuration.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { EditableSaveButtonV2,EditableTitleBarStyleV2Options,EditableTitleBarStyleV2,EditableTitleBarItemV2,EditableLeftIconV2Options,EditableTitleBarMenuItemV2,EditableTitleBarV2,EditableTitleBarMenuItemV2Options,EditableSaveButtonV2Options,EditableTitleBarItemV2Options,EditableTitleV2Options,EditableTitleV2,EditableLeftIconV2,EditableLeftIconTypeV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: EditableLeftIconV2Options)
```

Constructor of EditableLeftIconV2.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | EditableLeftIconV2Options | 否 |  |

## onAction

```TypeScript
public onAction?: OnActionCallback
```

Callback function when click on the left icon.

**类型：** OnActionCallback

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## iconType

```TypeScript
public iconType: EditableLeftIconTypeV2
```

Icon type, Back or Cancel.

**类型：** EditableLeftIconTypeV2

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
public defaultFocus: boolean
```

Whether to get focus by default.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

