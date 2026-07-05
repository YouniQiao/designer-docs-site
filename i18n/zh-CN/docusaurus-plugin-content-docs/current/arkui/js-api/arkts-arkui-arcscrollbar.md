# @ohos.arkui.ArcScrollBar

## 导入模块

```TypeScript
import { ArcScrollBarAttribute,ArcScrollBar } from '@kit.ArkUI';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ArcScrollBarAttribute](arkts-arcscrollbarattribute-c.md) |  |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ArcScrollBarInterface](arkts-arcscrollbarinterface-i.md) | 弧形滚动条组件ArcScrollBar，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、 [Grid]{@link grid}、[Scroll]{@link scroll}、 [WaterFlow]{@link water_flow}。 > **说明：** > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - ArcScrollBar不设置宽高时，采用父组件[LayoutConstraint]{@link FrameNode:LayoutConstraint}中的maxSize作为宽高。如果ArcScrollBar的 > 父组件存在可滚动组件，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、 > [Grid]{@link grid}、[Scroll]{@link scroll}、 > [WaterFlow]{@link water_flow}，建议设置ArcScrollBar宽高，否则ArcScrollBar的宽高可能为无穷大。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 |
| [ArcScrollBarOptions](arkts-arcscrollbaroptions-i.md) | ArcScrollBar的构造函数参数。 > **说明：** > > ArcScrollBar与可滚动组件需通过scroller进行绑定后方能实现联动，且ArcScrollBar与可滚动组件仅限于一对一的绑定方式。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [ArcScrollBar](arkts-arkui-arcscrollbar-con.md#ArcScrollBar) | 弧形滚动条组件ArcScrollBar，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、 [Grid]{@link grid}、[Scroll]{@link scroll}、 [WaterFlow]{@link water_flow}。 > **说明：** > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - ArcScrollBar不设置宽高时，采用父组件[LayoutConstraint]{@link FrameNode:LayoutConstraint}中的maxSize作为宽高。如果ArcScrollBar的 > 父组件存在可滚动组件，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、 > [Grid]{@link grid}、[Scroll]{@link scroll}、 > [WaterFlow]{@link water_flow}，建议设置ArcScrollBar宽高，否则ArcScrollBar的宽高可能为无穷大。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。 ###### 子组件 不包含子组件。 |
| [ArcScrollBarInstance](arkts-arkui-arcscrollbar-con.md#ArcScrollBarInstance) | 定义ArcScrollBar组件实例。 |

