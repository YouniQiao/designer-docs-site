# alphabet_indexer

Defines AlphabetIndexer Component instance.

## alphabet_indexer

```TypeScript
alphabet_indexer(options: AlphabetIndexerOptions)
```

创建索引条组件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AlphabetIndexerOptions | Yes | 设置索引条组件参数。 [since 18] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AlphabetIndexerAttribute](arkts-alphabetindexerattribute-c.md) | [width]{@link CommonMethod#width(value: Length)}属性设置"auto"时表示自适应宽度，宽度会随索引项最大宽度变化。 [padding]{@link CommonMethod#padding}属性默认为4vp。 文本最大的字体缩放倍数[maxFontScale]{@link TextAttribute#maxFontScale}和最小的字体缩放倍数[minFontScale]{@link TextAttribute#minFontScale} 皆为1，不跟随系统字体大小调节变化。 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [AlphabetIndexerInterface](arkts-alphabetindexerinterface-i.md) | 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。 > **说明： |
| [AlphabetIndexerOptions](arkts-alphabetindexeroptions-i.md) | 用于设置索引条参数。 > **说明：** > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Enums

| Name | Description |
| --- | --- |
| [IndexerAlign](arkts-indexeralign-e.md) | 索引条提示弹窗的对齐样式枚举。 |

### Types

| Name | Description |
| --- | --- |
| [OnAlphabetIndexerPopupSelectCallback](arkts-onalphabetindexerpopupselectcallback-t.md) | 提示弹窗二级索引项被选中时触发的事件。 |
| [OnAlphabetIndexerRequestPopupDataCallback](arkts-onalphabetindexerrequestpopupdatacallback-t.md) | [usingPopup]{@link AlphabetIndexerAttribute#usingPopup}设置值为true，索引项被选中时触发的事件。 |
| [OnAlphabetIndexerSelectCallback](arkts-onalphabetindexerselectcallback-t.md) | 索引项被选中时触发的事件。 |

### Constants

| Name | Description |
| --- | --- |
| [AlphabetIndexer](arkts-alphabet-indexer-con.md#AlphabetIndexer) | 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。 > **说明：** ###### 子组件 无 |
| [AlphabetIndexerInstance](arkts-alphabet-indexer-con.md#AlphabetIndexerInstance) | Defines AlphabetIndexer Component instance. |

