# @ohos.arkui.advanced.SegmentButton

## 导入模块

```TypeScript
import { CommonSegmentButtonOptions,SegmentButtonItemOptionsConstructorOptions,SegmentButtonIconTextItem,SegmentButtonItemOptions,SegmentButtonTextItem,CapsuleSegmentButtonOptions,SegmentButtonOptions,CapsuleSegmentButtonConstructionOptions,SegmentButtonItemTuple,SegmentButton,SegmentButtonItemArray,SegmentButtonItemOptionsArray,SegmentButtonIconItem,BorderRadiusMode,TabSegmentButtonConstructionOptions,TabSegmentButtonOptions,ItemRestriction,DimensionNoPercentage } from '@kit.ArkUI';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [SegmentButtonItemOptions](arkts-segmentbuttonitemoptions-c.md) | 分段按钮中的按钮选项。 |
| [SegmentButtonItemOptionsArray](arkts-segmentbuttonitemoptionsarray-c.md) | 用于保存按钮信息的数组。 > **说明：** > > SegmentButtonItemOptionsArray仅支持保存2到5个按钮信息元素。 |
| [SegmentButtonOptions](arkts-segmentbuttonoptions-c.md) | > **说明：** > > 不支持设置字体类型。 分段按钮选项类用于提供初始数据和自定义属性。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CapsuleSegmentButtonConstructionOptions](arkts-capsulesegmentbuttonconstructionoptions-i.md) | 用于构建胶囊类的SegmentButtonOptions对象。 继承[CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}。 |
| [CapsuleSegmentButtonOptions](arkts-capsulesegmentbuttonoptions-i.md) | 胶囊类分段按钮选项。继承自[CapsuleSegmentButtonConstructionOptions]{@link CapsuleSegmentButtonConstructionOptions}。 |
| [CommonSegmentButtonOptions](arkts-commonsegmentbuttonoptions-i.md) | 定义分段按钮组件的可自定义的属性。 |
| [SegmentButtonIconItem](arkts-segmentbuttoniconitem-i.md) | 图标按钮信息。 > **说明：** > > 未选中态的图标`icon`和选中态的图标`selectedIcon`都需设置，单独设置无效。 |
| [SegmentButtonIconTextItem](arkts-segmentbuttonicontextitem-i.md) | 图标与文本按钮信息。 > **说明：** > > 未选中态的图标`icon`和选中态的图标`selectedIcon`都需设置，单独设置无效。 |
| [SegmentButtonItemOptionsConstructorOptions](arkts-segmentbuttonitemoptionsconstructoroptions-i.md) | 构造参数用于SegmentButtonItemOptions。 |
| [SegmentButtonTextItem](arkts-segmentbuttontextitem-i.md) | 文本按钮信息。 |
| [TabSegmentButtonConstructionOptions](arkts-tabsegmentbuttonconstructionoptions-i.md) | 构建页签类的SegmentButtonOptions对象。 继承[CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}。 |
| [TabSegmentButtonOptions](arkts-tabsegmentbuttonoptions-i.md) | 页签类分段按钮选项。继承自[TabSegmentButtonConstructionOptions]{@link TabSegmentButtonConstructionOptions}。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BorderRadiusMode](arkts-borderradiusmode-e.md) | 边框圆角模式枚举，用于控制分段按钮的圆角计算方式。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [DimensionNoPercentage](arkts-dimensionnopercentage-t.md) | 不支持百分比类型的长度联合类型。 |
| [ItemRestriction](arkts-itemrestriction-t.md) | 保存按钮信息的元组类型。 > **说明：** > > 分段按钮组件仅支持2到5个按钮。 |
| [SegmentButtonItemArray](arkts-segmentbuttonitemarray-t.md) | 用于保存按钮信息的数组的联合类型。 |
| [SegmentButtonItemTuple](arkts-segmentbuttonitemtuple-t.md) | 用于保存按钮信息的元组的联合类型。 |

