# DragAction

Implements a **DragAction** object to subscribe to drag state changes and start the drag service.

**Since:** 11

<!--Device-dragController-interface DragAction--><!--Device-dragController-interface DragAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## off('statusChange')

```TypeScript
off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void
```

Unsubscribes from drag state changes.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DragAction-off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void--><!--Device-DragAction-off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'statusChange' | Yes | for status changing |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<DragAndDropInfo> | No | with drag event and status information |

## on('statusChange')

```TypeScript
on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void
```

Subscribes to drag state changes.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DragAction-on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void--><!--Device-DragAction-on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'statusChange' | Yes | for status changing |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<DragAndDropInfo> | Yes | with drag event and status information |

## startDrag

```TypeScript
startDrag(): Promise<void>
```

Starts the drag service. This API uses a promise to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DragAction-startDrag(): Promise<void>--><!--Device-DragAction-startDrag(): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal handling failed. |

