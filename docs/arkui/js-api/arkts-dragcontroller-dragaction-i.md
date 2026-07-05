# DragAction

监听状态改变，启动拖拽服务的对象。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## off('statusChange')

```TypeScript
off(type: 'statusChange', callback?: Callback<DragAndDropInfo>): void
```

取消注册监听拖拽状态改变事件。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'statusChange' | Yes | for status changing |
| callback | Callback&lt;DragAndDropInfo> | No | with drag event and status information |

## on('statusChange')

```TypeScript
on(type: 'statusChange', callback: Callback<DragAndDropInfo>): void
```

注册监听拖拽状态改变事件。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'statusChange' | Yes | for status changing |
| callback | Callback&lt;DragAndDropInfo> | Yes | with drag event and status information |

## startDrag

```TypeScript
startDrag(): Promise<void>
```

启动拖拽服务。使用Promise异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100001 | Internal handling failed. |

