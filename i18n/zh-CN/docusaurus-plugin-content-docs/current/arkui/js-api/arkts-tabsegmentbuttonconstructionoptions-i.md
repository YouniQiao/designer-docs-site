# TabSegmentButtonConstructionOptions

构建页签类的SegmentButtonOptions对象。 继承[CommonSegmentButtonOptions](arkts-commonsegmentbuttonoptions-i.md#CommonSegmentButtonOptions)。

**继承实现关系：** TabSegmentButtonConstructionOptions继承自：CommonSegmentButtonOptions。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { CommonSegmentButtonOptions,SegmentButtonItemOptionsConstructorOptions,SegmentButtonIconTextItem,SegmentButtonItemOptions,SegmentButtonTextItem,CapsuleSegmentButtonOptions,SegmentButtonOptions,CapsuleSegmentButtonConstructionOptions,SegmentButtonItemTuple,SegmentButton,SegmentButtonItemArray,SegmentButtonItemOptionsArray,SegmentButtonIconItem,BorderRadiusMode,TabSegmentButtonConstructionOptions,TabSegmentButtonOptions,ItemRestriction,DimensionNoPercentage } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons: ItemRestriction<SegmentButtonTextItem>
```

按钮信息。

**类型：** ItemRestriction<SegmentButtonTextItem>

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

