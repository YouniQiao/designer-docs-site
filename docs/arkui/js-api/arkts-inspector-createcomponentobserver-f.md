# createComponentObserver

## createComponentObserver

```TypeScript
function createComponentObserver(id: string): ComponentObserver
```

**Since:** 10

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIInspector#createComponentObserver

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

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

