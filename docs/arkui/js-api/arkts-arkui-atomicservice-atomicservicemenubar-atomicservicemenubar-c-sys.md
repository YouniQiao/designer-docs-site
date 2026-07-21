# AtomicServiceMenuBar (System API)

Provide configuration capabilities for the menuBar of atomicservice

**Since:** 23

<!--Device-unnamed-export declare class AtomicServiceMenuBar--><!--Device-unnamed-export declare class AtomicServiceMenuBar-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { AtomicServiceMenuBar } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(uiContext: UIContext)
```

The constructor used to create a AtomicServiceMenuBar object.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-AtomicServiceMenuBar-constructor(uiContext: UIContext)--><!--Device-AtomicServiceMenuBar-constructor(uiContext: UIContext)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | The atomicservice context instance. |

<a id="setvisible"></a>
## setVisible

```TypeScript
public setVisible(visible: boolean): void
```

Set the visibility of the atomicservice menubar.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-AtomicServiceMenuBar-public setVisible(visible: boolean): void--><!--Device-AtomicServiceMenuBar-public setVisible(visible: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| visible | boolean | Yes | whether this bar is visible,true indicate the menubar is visible. |

