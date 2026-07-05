# Scope

Scope 接口用于描述字段的有效范围。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.ScopeHelper

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## clamp

```TypeScript
clamp(value: ScopeType): ScopeType
```

将一个值限制在此 **Scope** 范围内。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.ScopeHelper.clamp

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScopeType | Yes | 指定的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| ScopeType | 如果指定值小于下限，则返回 lowerObj；如果指定值大于上限，则返回 upperObj；如果  在此 Scope 范围内，则返回指定值。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let range = new util.Scope(tempLower, tempUpper);
let result = range.clamp(tempMiDF);
console.info("result = " + result);
// Output: result = 35

```

## constructor

```TypeScript
constructor(lowerObj: ScopeType, upperObj: ScopeType)
```

用于创建具有指定上下限的 **Scope** 对象的构造函数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.constructor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lowerObj | ScopeType | Yes | Scope 对象的下限。 |
| upperObj | ScopeType | Yes | Scope 对象的上限。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
console.info("range = " + range);
// Output: range = [30, 40]

```

## contains

```TypeScript
contains(value: ScopeType): boolean
```

判断一个值是否在此 **Scope** 范围内。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.contains

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScopeType | Yes | 指定的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果值在此 Scope 范围内，则返回 true；否则返回 false。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let range = new util.Scope(tempLower, tempUpper);
let result = range.contains(tempMiDF);
console.info("result = " + result);
// Output: result = true

```

## contains

```TypeScript
contains(range: Scope): boolean
```

判断一个范围是否在此 **Scope** 范围内。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.contains

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Scope | Yes | 指定的 Scope。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果范围在此 Scope 范围内，则返回 true；否则返回 false。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
let tempLess = new Temperature(20);
let tempMore = new Temperature(45);
let rangeSec = new util.Scope(tempLess, tempMore);
let result = range.contains(rangeSec);
console.info("result = " + result);
// Output: result = false

```

## expand

```TypeScript
expand(lowerObj: ScopeType, upperObj: ScopeType): Scope
```

获取此 **Scope** 与给定上下限的并集。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.expand

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lowerObj | ScopeType | Yes | 下限。 |
| upperObj | ScopeType | Yes | 上限。 |

**Return value:**

| Type | Description |
| --- | --- |
| Scope | 此 Scope 与给定上下限的并集。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let tempMidS = new Temperature(39);
let range = new util.Scope(tempLower, tempUpper);
let result = range.expand(tempMiDF, tempMidS);
console.info("result = " + result);
// Output: result = [30, 40]

```

## expand

```TypeScript
expand(range: Scope): Scope
```

获取此 **Scope** 与给定 **Scope** 的并集。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.expand

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Scope | Yes | 指定的 Scope。 |

**Return value:**

| Type | Description |
| --- | --- |
| Scope | 此 Scope 与给定 Scope 的并集。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let tempMidS = new Temperature(39);
let range = new util.Scope(tempLower, tempUpper);
let rangeFir = new util.Scope(tempMiDF, tempMidS);
let result = range.expand(rangeFir);
console.info("result = " + result);
// Output: result = [30, 40]

```

## expand

```TypeScript
expand(value: ScopeType): Scope
```

获取此 **Scope** 与给定值的并集。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.expand

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScopeType | Yes | 指定的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Scope | 此 Scope 与给定值的并集。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let range = new util.Scope(tempLower, tempUpper);
let result = range.expand(tempMiDF);
console.info("result = " + result);
// Output: result = [30, 40]

```

## getLower

```TypeScript
getLower(): ScopeType
```

获取此 **Scope** 的下限。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.ScopeHelper.getLower

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| ScopeType | 此 Scope 的下限。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
let result = range.getLower();
console.info("result = " + result);
// Output: result = 30

```

## getUpper

```TypeScript
getUpper(): ScopeType
```

获取此 **Scope** 的上限。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.ScopeHelper.getUpper

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| ScopeType | 此 Scope 的上限。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
let result = range.getUpper();
console.info("result = " + result);
// Output: result = 40

```

## intersect

```TypeScript
intersect(range: Scope): Scope
```

获取此 **Scope** 与给定 **Scope** 的交集。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.intersect

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Scope | Yes | 指定的 Scope。 |

**Return value:**

| Type | Description |
| --- | --- |
| Scope | 此 Scope 与给定 Scope 的交集。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
let tempMiDF = new Temperature(35);
let tempMidS = new Temperature(39);
let rangeFir = new util.Scope(tempMiDF, tempMidS);
let result = range.intersect(rangeFir );
console.info("result = " + result);
  // Output: result = [35, 39]

```

## intersect

```TypeScript
intersect(lowerObj: ScopeType, upperObj: ScopeType): Scope
```

获取此 **Scope** 与给定上下限的交集。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ScopeHelper.intersect

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lowerObj | ScopeType | Yes | 下限。 |
| upperObj | ScopeType | Yes | 上限。 |

**Return value:**

| Type | Description |
| --- | --- |
| Scope | 此 Scope 与给定上下限的交集。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let tempMiDF = new Temperature(35);
let tempMidS = new Temperature(39);
let range = new util.Scope(tempLower, tempUpper);
let result = range.intersect(tempMiDF, tempMidS);
console.info("result = " + result);
// Output: result = [35, 39]

```

## toString

```TypeScript
toString(): string
```

获取包含此 **Scope** 的字符串表示形式。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.toString

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 包含此 Scope 的字符串表示形式。 |

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

let tempLower = new Temperature(30);
let tempUpper = new Temperature(40);
let range = new util.Scope(tempLower, tempUpper);
let result = range.toString();
console.info("result = " + result);
// Output: result = [30, 40]

```

