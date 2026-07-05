# MenuItemConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** MenuItemConfigurationextends: CommonConfiguration<MenuItemConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerSelect

```TypeScript
triggerSelect(index: number, value: string): void
```

下拉菜单选中某一项的回调函数。 <br/>**说明：** <br/>index会赋值给事件[onSelect](arkts-selectattribute-c.md#onSelect) 回调中的索引参数； value会返回给Select组件显示，同时会赋值给事件 [onSelect](arkts-selectattribute-c.md#onSelect)回调中的文本参数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 选中菜单项的索引。 |
| value | string | Yes | 选中菜单项的文本。 |

## symbolIcon

```TypeScript
symbolIcon?: SymbolGlyphModifier
```

下拉选项Symbol图片。 symbolIcon优先级高于icon。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

下拉菜单项的图片内容。 **说明：** string格式可用于加载网络图片和本地图片。

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

下拉菜单项的索引，索引值从0开始。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: ResourceStr
```

下拉菜单项的文本内容。 **说明：** 当文本字符的长度超过菜单项文本区域的宽度时，文本将会被截断。

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected: boolean
```

下拉菜单项是否被选中。值为true表示选中，值为false表示未选中。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

