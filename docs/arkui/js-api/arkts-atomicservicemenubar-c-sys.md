# AtomicServiceMenuBar

Provide configuration capabilities for the menuBar of atomicservice

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { AtomicServiceMenuBar } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(uiContext: UIContext)
```

The constructor used to create a AtomicServiceMenuBar object.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | The atomicservice context instance. |

## setVisible

```TypeScript
public setVisible(visible: boolean): void
```

Set the visibility of the atomicservice menubar.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| visible | boolean | Yes | whether this bar is visible,true indicate the menubar is visible. |

