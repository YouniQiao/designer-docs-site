# @ohos.arkui.ArcList

## Modules to Import

```TypeScript
import { ArcListItemAttribute, ArcList, ArcListItem, ArcListAttribute } from '@ohos.arkui.ArcList';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ArcListAttribute](arkts-arkui-arclistattribute-c.md) | In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following attributes are supported. |
| [ArcListItemAttribute](arkts-arkui-arclistitemattribute-c.md) | In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following attributes are supported. |

### Interfaces

| Name | Description |
| --- | --- |
| [ArcListInterface](arkts-arkui-arclistinterface-i.md) | The **ArcList** component is a circular layout container that displays a series of list items in an arc shape. It is suitable for presenting homogeneous data, such as images and text, in a continuous, multi-row format. |
| [ArcListItemInterface](arkts-arkui-arclistiteminterface-i.md) | The **ArcListItem** component is used to display individual child components in an [ArcList](arkts-arkui-arclist.md) component and must be used in conjunction with **ArcList**. &gt; **NOTE** &gt; - This component can be used only as a child of [ArcList](arkts-arkui-arclist.md). &gt; &gt; - When this component is used with &gt; [LazyForEach](../../../../ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are &gt; created when it is created. When this component is used with &gt; [if/else](../../../../ui/rendering-control/arkts-rendering-control-ifelse.md) or &gt; [ForEach](../../../../ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is &gt; [ArcList](arkts-arkui-arclist.md), its child components are created when it is laid out. &gt; &gt; - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and &gt; earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices &gt; , tablets, and TVs, but the component can still run properly. |
| [ArkListOptions](arkts-arkui-arklistoptions-i.md) | Provides basic parameters for creating an **ArcList** component. |

### Types

| Name | Description |
| --- | --- |
| [ArcScrollIndexHandler](arkts-arkui-arcscrollindexhandler-t.md) | Represents the callback triggered when a child component enters or leaves the visible area of the **ArcList** component. |

### Constants

| Name | Description |
| --- | --- |
| [ArcList](arkts-arkui-arkui-arclist-con.md#arclist) | The **ArcList** component is a circular layout container that displays a series of list items in an arc shape. It is suitable for presenting homogeneous data, such as images and text, in a continuous, multi-row format. &gt; **NOTE** &gt; - This component is supported since API version 18. Updates will be marked with a &gt; superscript to indicate their earliest API version. &gt; &gt; - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. &gt; In API version 22 and earlier versions, a compilation warning will be reported when this &gt; component is used on phones, PCs, 2-in-1 devices, tablets, and TVs, but the component can &gt; still run properly. ###### Child Components Only the [ArcListItem](arkts-arkui-arclist.md) component is supported. |
| [ArcListInstance](arkts-arkui-arkui-arclist-con.md#arclistinstance) | Defines ArcList Component instance. |
| [ArcListItem](arkts-arkui-arkui-arclist-con.md#arclistitem) | The **ArcListItem** component is used to display individual child components in an [ArcList](arkts-arkui-arclist.md) component and must be used in conjunction with **ArcList**. &gt; **NOTE** &gt; - This component can be used only as a child of [ArcList](arkts-arkui-arclist.md). &gt; &gt; - When this component is used with &gt; [LazyForEach](../../../../ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are &gt; created when it is created. When this component is used with &gt; [if/else](../../../../ui/rendering-control/arkts-rendering-control-ifelse.md) or &gt; [ForEach](../../../../ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is &gt; [ArcList](arkts-arkui-arclist.md), its child components are created when it is laid out. &gt; &gt; - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and &gt; earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices &gt; , tablets, and TVs, but the component can still run properly. ###### Child Components This component can contain a single child component. |
| [ArcListItemInstance](arkts-arkui-arkui-arclist-con.md#arclistiteminstance) | Defines ArcListItem Component instance. |

