# Intention

```TypeScript
enum Intention
```

Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## DATA_HUB

```TypeScript
DATA_HUB = 'DataHub'
```

Public data channel.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## DRAG

```TypeScript
DRAG = 'Drag'
```

Channel in which data can be dragged and dropped. **Use scenario**: This API is used to share data across applications in drag-and-drop scenarios.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**系统接口：** 此接口为系统接口。

## SYSTEM_SHARE

```TypeScript
SYSTEM_SHARE = 'SystemShare'
```

Data channel of the system sharing type. **Use scenario**: This API is used to share data across applications in system sharing scenarios.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## PICKER

```TypeScript
PICKER = 'Picker'
```

Data channel of the picker type. **Use scenario**: This API is used to share data across applications in the scenarios where a picker is used.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## MENU

```TypeScript
MENU = 'Menu'
```

Data channel of the menu type. **Use scenario**: This API is used to share data across applications in the shortcut menu.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

