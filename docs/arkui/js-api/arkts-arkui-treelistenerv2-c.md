# TreeListenerV2

Declare class TreeListenerV2

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TreeListenerManagerV2, NodeParamV2, CallbackParamV2, TreeControllerV2, TreeViewV2, TreeListenerV2 } from '@ohos.arkui.advanced.TreeViewV2';
```

## offNodeAdd

```TypeScript
offNodeAdd(callback?: OnChangedCallback): void
```

Destroy node add callback event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | No |  |

## offNodeClick

```TypeScript
offNodeClick(callback?: OnChangedCallback): void
```

Destroy node click callback event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | No |  |

## offNodeDelete

```TypeScript
offNodeDelete(callback?: OnChangedCallback): void
```

Destroy node delete callback event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | No |  |

## offNodeModify

```TypeScript
offNodeModify(callback?: OnChangedCallback): void
```

Destroy node modify callback event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | No |  |

## offNodeMove

```TypeScript
offNodeMove(callback?: OnChangedCallback): void
```

Destroy node move callback event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | No |  |

## onNodeAdd

```TypeScript
onNodeAdd(callback: OnChangedCallback): void
```

Node add event registration and processing. The event will not be destroyed after being processed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onNodeClick

```TypeScript
onNodeClick(callback: OnChangedCallback): void
```

Node click event registration and processing. The event will not be destroyed after being processed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onNodeDelete

```TypeScript
onNodeDelete(callback: OnChangedCallback): void
```

Node delete event registration and processing. The event will not be destroyed after being processed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onNodeModify

```TypeScript
onNodeModify(callback: OnChangedCallback): void
```

Node modify event registration and processing. The event will not be destroyed after being processed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onNodeMove

```TypeScript
onNodeMove(callback: OnChangedCallback): void
```

Node move event registration and processing. The event will not be destroyed after being processed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onceNodeAdd

```TypeScript
onceNodeAdd(callback: OnChangedCallback): void
```

Node add event registration and processing. After the event is processed once, it will be destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onceNodeClick

```TypeScript
onceNodeClick(callback: OnChangedCallback): void
```

Node click event registration and processing. After the event is processed once, it will be destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onceNodeDelete

```TypeScript
onceNodeDelete(callback: OnChangedCallback): void
```

Node delete event registration and processing. After the event is processed once, it will be destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onceNodeModify

```TypeScript
onceNodeModify(callback: OnChangedCallback): void
```

Node modify event registration and processing. After the event is processed once, it will be destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

## onceNodeMove

```TypeScript
onceNodeMove(callback: OnChangedCallback): void
```

Node move event registration and processing. After the event is processed once, it will be destroyed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnChangedCallback | Yes |  |

