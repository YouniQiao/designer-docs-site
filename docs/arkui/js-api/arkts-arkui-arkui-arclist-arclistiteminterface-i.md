# ArcListItemInterface

The **ArcListItem** component is used to display individual child components in an [ArcList](arkts-arkui-arclist.md) component and must be used in conjunction with **ArcList**.

> **NOTE**

> - This component can be used only as a child of [ArcList](arkts-arkui-arclist.md).  
>  
> - When this component is used with  
> [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are  
> created when it is created. When this component is used with  
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or  
> [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is  
> [ArcList](arkts-arkui-arclist.md), its child components are created when it is laid out.  
>  
> - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and  
> earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices  
> , tablets, and TVs, but the component can still run properly.

**Since:** 18

<!--Device-unnamed-export interface ArcListItemInterface--><!--Device-unnamed-export interface ArcListItemInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcListItemAttribute, ArcList, ArcListItem, ArcListAttribute } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
(): ArcListItemAttribute
```

Creates an item for the **ArcList** component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcListItemInterface-(): ArcListItemAttribute--><!--Device-ArcListItemInterface-(): ArcListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Return value:**

| Type | Description |
| --- | --- |
| [ArcListItemAttribute](arkts-arkui-arkui-arclist-arclistitemattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

