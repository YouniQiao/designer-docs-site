# @ohos.arkui.ArcList

## Modules to Import

```TypeScript
import { ArcListItemAttribute,ArcList,ArcListItem,ArcListAttribute } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ArcListAttribute](arkts-arclistattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |
| [ArcListItemAttribute](arkts-arclistitemattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [ArcListInterface](arkts-arclistinterface-i.md) | 弧形列表包含一系列列表项。适合连续、多行呈现同类数据，例如图片和文本。 |
| [ArcListItemInterface](arkts-arclistiteminterface-i.md) | 用来展示列表具体子组件，必须配合[ArcList]{@link @ohos.arkui.ArcList}来使用。 > **说明：** > - 该组件的父组件只能是[ArcList]{@link @ohos.arkui.ArcList}。 > > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ArcListItem > 子组件在ArcListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为 > [ArcList]{@link @ohos.arkui.ArcList}时，ArcListItem子组件在ArcListItem布局时创建。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 |
| [ArkListOptions](arkts-arklistoptions-i.md) | 包含创建ArcList组件的基础参数。 |

### Types

| Name | Description |
| --- | --- |
| [ArcScrollIndexHandler](arkts-arcscrollindexhandler-t.md) | 有子组件划入或划出ArcList显示区域时触发的回调。 |

### Constants

| Name | Description |
| --- | --- |
| [ArcList](arkts-arkui-arclist-con.md#ArcList) | 弧形列表包含一系列列表项。适合连续、多行呈现同类数据，例如图片和文本。 > **说明：** > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 ###### 子组件 仅支持[ArcListItem]{@link @ohos.arkui.ArcList}子组件。 |
| [ArcListInstance](arkts-arkui-arclist-con.md#ArcListInstance) | 定义ArcList组件实例。 |
| [ArcListItem](arkts-arkui-arclist-con.md#ArcListItem) | 用来展示列表具体子组件，必须配合[ArcList]{@link @ohos.arkui.ArcList}来使用。 > **说明：** > - 该组件的父组件只能是[ArcList]{@link @ohos.arkui.ArcList}。 > > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ArcListItem > 子组件在ArcListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为 > [ArcList]{@link @ohos.arkui.ArcList}时，ArcListItem子组件在ArcListItem布局时创建。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 ###### 子组件 可以包含单个子组件。 |
| [ArcListItemInstance](arkts-arkui-arclist-con.md#ArcListItemInstance) | 定义ArcListItem组件实例。 |

