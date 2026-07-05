# DragAndDropInfo

Provides the data reported when the state changes during dragging.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@ohos.arkui.dragController';
```

## event

```TypeScript
event: DragEvent
```

Drag event corresponding to the current state. The drag event initiated by **dragController** only supports the APIs for obtaining the result and behavior, and is used exclusively for the dragging end state.

**Type:** DragEvent

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraParams

```TypeScript
extraParams?: string
```

Additional information about the drag action. Not supported currently. The default value is null.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## status

```TypeScript
status: DragStatus
```

Current dragging state (started or ended).

**Type:** DragStatus

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

