# alphabet_indexer

Defines AlphabetIndexer Component instance.

## alphabet_indexer

```TypeScript
alphabet_indexer(options: AlphabetIndexerOptions)
```

创建索引条组件。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AlphabetIndexerOptions | 是 | 设置索引条组件参数。 [since 18] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [AlphabetIndexerAttribute](arkts-alphabetindexerattribute-c.md) | [width]{@link CommonMethod#width(value: Length)}属性设置"auto"时表示自适应宽度，宽度会随索引项最大宽度变化。 [padding]{@link CommonMethod#padding}属性默认为4vp。 文本最大的字体缩放倍数[maxFontScale]{@link TextAttribute#maxFontScale}和最小的字体缩放倍数[minFontScale]{@link TextAttribute#minFontScale} 皆为1，不跟随系统字体大小调节变化。 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AlphabetIndexerInterface](arkts-alphabetindexerinterface-i.md) | 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。 > **说明： |
| [AlphabetIndexerOptions](arkts-alphabetindexeroptions-i.md) | 用于设置索引条参数。 > **说明：** > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [IndexerAlign](arkts-indexeralign-e.md) | 索引条提示弹窗的对齐样式枚举。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnAlphabetIndexerPopupSelectCallback](arkts-onalphabetindexerpopupselectcallback-t.md) | 提示弹窗二级索引项被选中时触发的事件。 |
| [OnAlphabetIndexerRequestPopupDataCallback](arkts-onalphabetindexerrequestpopupdatacallback-t.md) | [usingPopup]{@link AlphabetIndexerAttribute#usingPopup}设置值为true，索引项被选中时触发的事件。 |
| [OnAlphabetIndexerSelectCallback](arkts-onalphabetindexerselectcallback-t.md) | 索引项被选中时触发的事件。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [AlphabetIndexer](arkts-alphabet-indexer-con.md#AlphabetIndexer) | 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。 > **说明：** ###### 子组件 无 |
| [AlphabetIndexerInstance](arkts-alphabet-indexer-con.md#AlphabetIndexerInstance) | Defines AlphabetIndexer Component instance. |

