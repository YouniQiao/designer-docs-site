# AttributeWithTagCb

```TypeScript
type AttributeWithTagCb = (tagName: string, key: string, value: string) => boolean
```

ParseOptions中attributeWithTagCallbackFunction的回调方法，三个字符串参数都是由XML解析器在解析过程中自动提取的，开发者无法直接自定义这些值。开发者只能在回调函数中通过返回值来决定如何处 理这些已存在的属性。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagName | string | Yes | 当前属性所属XML元素的标签名。 |
| key | string | Yes | 当前属性所属XML元素的名称。 |
| value | string | Yes | 当前属性所属XML元素的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否继续解析xml数据，true表示继续解析数据，false表示结束解析。 |

