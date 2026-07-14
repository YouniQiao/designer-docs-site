# ComposeListItem

The **ComposeListItem** component is a container that presents a series of items arranged in a column with the same width. You can use it to present data of the same type in a multiple and coherent row style, for example, images or text. > **NOTE** > > - This component can be used only in the stage model. > > - If the **ComposeListItem** component has [universal attributes](./@internal/component/ets/common) and > [universal events](./@internal/component/ets/common) configured, the compiler toolchain automatically > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node > rather than the **ComposeListItem** component itself. As a result, the configured universal attributes and > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes > and events with the **ComposeListItem** component.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OperateCheck, OperateIcon, ComposeListItem, OperateItem, IconType, ContentItem, OperateButton } from '@kit.ArkUI';
```

## contentItem

```TypeScript
@Prop contentItem?: ContentItem
```

Elements on the left and in the center.

**Type:** ContentItem

**Since:** 10

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operateItem

```TypeScript
@Prop operateItem?: OperateItem
```

Element on the right.

**Type:** OperateItem

**Since:** 10

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

