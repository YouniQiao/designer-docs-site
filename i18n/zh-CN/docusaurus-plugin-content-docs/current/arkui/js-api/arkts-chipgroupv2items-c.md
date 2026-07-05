# ChipGroupV2Items

ChipGroupV2Items定义了芯片组项的数组类，继承自Array<[ChipGroupV2Item](arkts-chipgroupv2item-c.md#ChipGroupV2Item)>。

**继承实现关系：** ChipGroupV2Items继承自：Array<ChipGroupV2Item>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(items: ChipGroupV2ItemConfig[])
```

ChipGroupV2Items的构造函数。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | ChipGroupV2ItemConfig[] | 是 | 芯片组项配置数组。 |

