# Intention

```TypeScript
enum Intention
```

Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## DATA_HUB

```TypeScript
DATA_HUB = 'DataHub'
```

Public data channel.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## DRAG

```TypeScript
DRAG = 'Drag'
```

Channel in which data can be dragged and dropped. **Use scenario**: This API is used to share data across applications in drag-and-drop scenarios.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**System API:** This is a system API.

## SYSTEM_SHARE

```TypeScript
SYSTEM_SHARE = 'SystemShare'
```

Data channel of the system sharing type. **Use scenario**: This API is used to share data across applications in system sharing scenarios.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## PICKER

```TypeScript
PICKER = 'Picker'
```

Data channel of the picker type. **Use scenario**: This API is used to share data across applications in the scenarios where a picker is used.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## MENU

```TypeScript
MENU = 'Menu'
```

Data channel of the menu type. **Use scenario**: This API is used to share data across applications in the shortcut menu.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

