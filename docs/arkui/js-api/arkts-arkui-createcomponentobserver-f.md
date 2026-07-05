# createComponentObserver

## Modules to Import

```TypeScript
import { inspector } from '@ohos.arkui.inspector';
```

## createComponentObserver

```TypeScript
function createComponentObserver(id: string): ComponentObserver
```

Sets the component after layout or draw criteria and returns the corresponding listening handle

**Since:** 10

**Deprecated since:** 18

**Substitutes:** createComponentObserver

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | component id. |

**Return value:**

| Type | Description |
| --- | --- |
| ComponentObserver | create listener for observer component event. |

**Example**

```TypeScript
let listener:inspector.ComponentObserver = inspector.createComponentObserver('COMPONENT_ID'); // Listen for callback events for the component whose ID is COMPONENT_ID.

```

