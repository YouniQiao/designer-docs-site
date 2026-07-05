# ASON

ArkTS JSON工具。

**起始版本：** 12

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [parse](arkts-ason-parse-f.md#parse-1) | 将JavaScript对象表示法（JSON）字符串转换为ArkTS值。 |
| [stringify](arkts-ason-stringify-f.md#stringify-1) | 将ArkTS值转换为JavaScript对象表示法（JSON）字符串。 额外支持Map和Set。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ParseOptions](arkts-ason-parseoptions-i.md) | 解析的选项。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ISendable](arkts-ason-isendable-t.md) | 为方便起见，重新定义ISendable。 |
| [Transformer](arkts-ason-transformer-t.md) | 转换结果函数的类型。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BigIntMode](arkts-ason-bigintmode-e.md) | 定义处理BigInt模式的枚举。 |
| [ParseReturnType](arkts-ason-parsereturntype-e.md) | 解析结果的返回类型。 |

