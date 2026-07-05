# Constants

## ArcListInstance

```TypeScript
export declare const ArcListInstance: ArcListAttribute
```

定义ArcList组件实例。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## ArcListItemInstance

```TypeScript
export declare const ArcListItemInstance: ArcListItemAttribute
```

定义ArcListItem组件实例。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## ArcList

```TypeScript
export declare const ArcList: ArcListInterface
```

弧形列表包含一系列列表项。适合连续、多行呈现同类数据，例如图片和文本。 > **说明：** > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 ###### 子组件 仅支持[ArcListItem]@ohos.arkui.ArcList子组件。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## ArcListItem

```TypeScript
export declare const ArcListItem: ArcListItemInterface
```

用来展示列表具体子组件，必须配合[ArcList]@ohos.arkui.ArcList来使用。 > **说明：** > - 该组件的父组件只能是[ArcList]@ohos.arkui.ArcList。 > > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ArcListItem > 子组件在ArcListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为 > [ArcList]@ohos.arkui.ArcList时，ArcListItem子组件在ArcListItem布局时创建。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 ###### 子组件 可以包含单个子组件。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

