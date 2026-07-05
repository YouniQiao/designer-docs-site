# SegmentButtonV2Items

分段按钮选项集合。 继承自 Array\<[SegmentButtonV2Item](arkts-segmentbuttonv2items-c.md#SegmentButtonV2Items)>

**继承实现关系：** SegmentButtonV2Items继承自：Array<SegmentButtonV2Item>。

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { OnSelectedIndexesChange,TabSegmentButtonV2,SegmentButtonV2Items,MultiCapsuleSegmentButtonV2,OnSelectedIndexChange,SegmentButtonV2ItemOptions,SegmentButtonV2Item,CapsuleSegmentButtonV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(items: SegmentButtonV2ItemOptions[])
```

构造函数。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | SegmentButtonV2ItemOptions[] | 是 | 分段按钮选项配置参数集合。 |

## hasHybrid

```TypeScript
get hasHybrid(): boolean
```

是否支持图文混合选项。

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

