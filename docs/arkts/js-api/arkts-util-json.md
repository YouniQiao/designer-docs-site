# @ohos.util.json

JSON模块提供了一系列API，用于将JSON文本转换为JSON对象或值，以及将对象转换为JSON文本。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { JSON } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [has](arkts-json-has-f.md#has-1) | 检查ArkTS对象中是否包含某个键。此API可用于[JSON.parse]{@link json.parse}解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。 |
| [parse](arkts-json-parse-f.md#parse-1) | 将JSON字符串解析为ArkTS对象或null。 |
| [remove](arkts-json-remove-f.md#remove-1) | 从ArkTS对象中删除一个键。此API可用于[JSON.parse]{@link json.parse}解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。 |
| [stringify](arkts-json-stringify-f.md#stringify-1) | 将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。 |
| [stringify](arkts-json-stringify-f.md#stringify-2) | 将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ParseOptions](arkts-json-parseoptions-i.md) | 描述解析选项，可定义BigInt的处理模式。 |

### Types

| Name | Description |
| --- | --- |
| [Transformer](arkts-json-transformer-t.md) | 定义转换结果函数的类型。 当作为[JSON.parse]{@link json.parse}的参数时，对象的每个成员都会调用此函数，可在解析期间进行自定义数据处理或转换。 当作为 [JSON.stringify]{@link json.stringify(value: Object, replacer?: Transformer, space?: string | number)}的参数时， 在序列化期间用于转换和处理每个属性。 |

### Enums

| Name | Description |
| --- | --- |
| [BigIntMode](arkts-json-bigintmode-e.md) | 枚举BigInt的处理模式。 |

