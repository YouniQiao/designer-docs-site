# ArcListItemInterface

用来展示列表具体子组件，必须配合[ArcList]@ohos.arkui.ArcList来使用。 > **说明：** > - 该组件的父组件只能是[ArcList]@ohos.arkui.ArcList。 > > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ArcListItem > 子组件在ArcListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为 > [ArcList]@ohos.arkui.ArcList时，ArcListItem子组件在ArcListItem布局时创建。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

## 导入模块

```TypeScript
import { ArcListItemAttribute,ArcList,ArcListItem,ArcListAttribute } from '@kit.ArkUI';
```

## constructor

```TypeScript
(): ArcListItemAttribute
```

创建弧形列表子组件。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArcListItemAttribute |  |

