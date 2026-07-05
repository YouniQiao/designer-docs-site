# ScopeComparable

ScopeComparable** 类型的值用于实现 **compareTo** 方法。因此，请确保输入参数是可比较的。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## compareTo

```TypeScript
compareTo(other: ScopeComparable): boolean
```

比较两个值并返回布尔值。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| other | ScopeComparable | Yes | 与当前值进行比较的另一个值。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果当前值大于等于输入值，则返回 true；否则返回 false。 |

**Example**

```TypeScript
class Temperature implements util.ScopeComparable {
  private readonly _temp: number;

  constructor(value: number) {
    this._temp = value;
  }

  compareTo(value: Temperature) {
    return this._temp >= value.getTemp();
  }

  getTemp() {
    return this._temp;
  }

  toString(): string {
    return this._temp.toString();
  }
}

```

