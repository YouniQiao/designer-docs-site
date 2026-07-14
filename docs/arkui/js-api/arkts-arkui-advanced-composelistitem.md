# @ohos.arkui.advanced.ComposeListItem

###### Child Components
 Not supported
 ###### Events
 The [universal events](./@internal/component/ets/common) are not supported.


## Modules to Import

```TypeScript
import { OperateCheck, OperateIcon, ComposeListItem, OperateItem, IconType, ContentItem, OperateButton } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ContentItem](arkts-arkui-contentitem-c.md) | Defines elements for the left and center areas of the **ComposeListItem** component. |
| [OperateButton](arkts-arkui-operatebutton-c.md) | Defines the type of the button element on the right of the **ComposeListItem** component. |
| [OperateCheck](arkts-arkui-operatecheck-c.md) | Defines the type where the element on the right of the **ComposeListItem** component is **Switch**, **CheckBox**, or **Radio**. |
| [OperateIcon](arkts-arkui-operateicon-c.md) | Defines the type of the icon element on the right of the **ComposeListItem** component. |
| [OperateItem](arkts-arkui-operateitem-c.md) | Defines the type of the element on the right of the **ComposeListItem** component. |

### Structs

| Name | Description |
| --- | --- |
| [ComposeListItem](arkts-arkui-composelistitem-s.md) | The **ComposeListItem** component is a container that presents a series of items arranged in a column with the same width. You can use it to present data of the same type in a multiple and coherent row style, for example, images or text. &gt; **NOTE** &gt; &gt; - This component can be used only in the stage model. &gt; &gt; - If the **ComposeListItem** component has [universal attributes](./@internal/component/ets/common) and &gt; [universal events](./@internal/component/ets/common) configured, the compiler toolchain automatically &gt; generates an additional **__Common__** node and mounts the universal attributes and universal events on this node &gt; rather than the **ComposeListItem** component itself. As a result, the configured universal attributes and &gt; universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes &gt; and events with the **ComposeListItem** component. |

### Enums

| Name | Description |
| --- | --- |
| [IconType](arkts-arkui-icontype-e.md) | Defines the icon type of the element on the left of the **ComposeListItem** component. |

