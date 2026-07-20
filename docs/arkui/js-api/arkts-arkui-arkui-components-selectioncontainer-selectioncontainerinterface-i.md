# SelectionContainerInterface

Provides a SelectionContainer component interface.

**Since:** 26.0.0

<!--Device-unnamed-export interface SelectionContainerInterface--><!--Device-unnamed-export interface SelectionContainerInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectionContainerInstance, SelectionContainer, OnMenuItemClickWithTextCallback, SelectionContainerOptions, SelectionContainerAttribute, SelectionContainerEditMenuOptions, SelectionContainerTextJoinStyle, SelectionContainerController, SelectionContainerMenuOptions } from '@kit.ArkUI';
```

## constructor

```TypeScript
(value?: SelectionContainerOptions): SelectionContainerAttribute
```

Defines the constructor of SelectionContainer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerInterface-(value?: SelectionContainerOptions): SelectionContainerAttribute--><!--Device-SelectionContainerInterface-(value?: SelectionContainerOptions): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SelectionContainerOptions](arkts-arkui-arkui-components-selectioncontainer-selectioncontaineroptions-i.md) | No | Initialization options of the component. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

