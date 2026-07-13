# TreeListener

Declare class TreeListener

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TreeListener, NodeParam, CallbackParam, TreeListenType, TreeView, TreeController, TreeListenerManager } from '@kit.ArkUI';
```

## off

```TypeScript
off(type: TreeListenType, callback?: (callbackParam: CallbackParam) => void): void
```

Destroy event.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TreeListenType | Yes |  |
| callback | (callbackParam: CallbackParam) =&gt; void | No |  |

## on

```TypeScript
on(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void
```

Event registration and processing.
The event will not be destroyed after being processed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TreeListenType | Yes |  |
| callback | (callbackParam: CallbackParam) =&gt; void | Yes |  |

## once

```TypeScript
once(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void
```

Event registration and processing.
After the event is processed once, it will be destroyed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TreeListenType | Yes |  |
| callback | (callbackParam: CallbackParam) =&gt; void | Yes |  |

