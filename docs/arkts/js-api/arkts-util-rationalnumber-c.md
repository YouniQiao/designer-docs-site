# RationalNumber

提供比较有理数、获取分子和分母的 API。例如，可以使用 **toString()** API 将有理数转换为字符串。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## compare

```TypeScript
compare(another: RationalNumber): number
```

将当前的 RationalNumber 对象与给定对象进行比较。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| another | RationalNumber | Yes | 表示其他有理数的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 根据比较结果返回 0、1 或 -1。 |

## compareTo

```TypeScript
compareTo(another: RationalNumber): number
```

将当前的 RationalNumber 对象与给定对象进行比较。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.compare

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| another | RationalNumber | Yes | 表示其他有理数的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 根据比较结果返回 0、1 或 -1。 |

## constructor

```TypeScript
constructor(numerator: number, denominator: number)
```

用于创建 **RationalNumber** 对象的构造函数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.RationalNumber.parseRationalNumber

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| numerator | number | Yes | 分子，为整数。 |
| denominator | number | Yes | 分母，为整数。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);

```

## constructor

```TypeScript
constructor()
```

用于创建 **RationalNumber** 对象的构造函数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber();

```

## createRationalFromString

```TypeScript
static createRationalFromString(rationalString: string): RationalNumber
```

根据给定的字符串创建一个 **RationalNumber** 对象。 > **NOTE** > > **rationalString** 参数必须为字符串。如果传入小数字符串，该函数不会被拦截，但会显示错误信息 > "createRationalFromString: The type of Parameter must be integer string"。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rationalString | string | Yes | 用于创建 RationalNumber 对象的字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| RationalNumber | 返回根据给定字符串生成的 RationalNumber 对象。 |

**Example**

```TypeScript
let rational = util.RationalNumber.createRationalFromString("3/4");

```

## equals

```TypeScript
equals(obj: Object): boolean
```

判断此 **RationalNumber** 对象与给定对象是否相等。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object | Yes | 用于与此 RationalNumber 对象进行比较的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果两个对象相等，则返回 true；否则返回 false。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let rational = util.RationalNumber.createRationalFromString("3/4");
let result = rationalNumber.equals(rational);
console.info("result = " + result);
// Output: result = false


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let rational = util.RationalNumber.createRationalFromString("3/4");
let result = rationalNumber.equals(rational);
console.info("result = " + result);
// Output: result = false

```

## getCommonDivisor

```TypeScript
static getCommonDivisor(number1: number, number2: number): number
```

获取两个指定整数的最大公约数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.RationalNumber.getCommonFactor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| number1 | number | Yes | 用于获取最大公约数的第一个整数。 |
| number2 | number | Yes | 用于获取最大公约数的第二个整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 获取到的最大公约数。 |

## getCommonFactor

```TypeScript
static getCommonFactor(number1: number, number2: number): number
```

获取两个指定整数的最大公约数。 > **NOTE** > > **number1** 和 **number2** 参数必须为整数。如果传入小数，该函数不会被拦截，但会显示错误信息 > "getCommonFactor: The type of Parameter must be integer"。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| number1 | number | Yes | 用于获取最大公约数的第一个整数。取值范围：-Number.MAX_VALUE &lt;= number1 &lt;=  Number.MAX_VALUE。 |
| number2 | number | Yes | 用于获取最大公约数的第二个整数。取值范围：-Number.MAX_VALUE &lt;= number2 &lt;=  Number.MAX_VALUE。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 获取到的最大公约数。 |

**Example**

```TypeScript
let result = util.RationalNumber.getCommonFactor(4,6);
console.info("result = " + result);
// Output: result = 2

```

## getDenominator

```TypeScript
getDenominator(): number
```

获取此 **RationalNumber** 对象的分母。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 此 RationalNumber 对象的分母。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.getDenominator();
console.info("result = " + result);
// Output: result = 2


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2)
let result = rationalNumber.getDenominator();
console.info("result = " + result);
// Output: result = 2

```

## getNumerator

```TypeScript
getNumerator(): number
```

获取此 **RationalNumber** 对象的分子。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 此 RationalNumber 对象的分子。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.getNumerator();
console.info("result = " + result);
// Output: result = 1


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.getNumerator();
console.info("result = " + result);
// Output: result = 1

```

## isFinite

```TypeScript
isFinite(): boolean
```

判断此 **RationalNumber** 对象表示的是否为有限值。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果此 RationalNumber 对象表示有限值（分母不为 0），则返回 true；  否则返回 false。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isFinite();
console.info("result = " + result);
// Output: result = true


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isFinite();
console.info("result = " + result);
// Output: result = true

```

## isNaN

```TypeScript
isNaN(): boolean
```

判断此 **RationalNumber** 对象是否为非数字（NaN）。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果此 RationalNumber 对象为 NaN（分母和分子都为 0），则返回 true；  否则返回 false。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isNaN();
console.info("result = " + result);
// Output: result = false


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isNaN();
console.info("result = " + result);
// Output: result = false

```

## isZero

```TypeScript
isZero(): boolean
```

判断此 **RationalNumber** 对象的值是否为 **0**。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果此 RationalNumber 对象的值为 0，则返回 true；否则返回  false。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isZero();
console.info("result = " + result);
// Output: result = false


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isZero();
console.info("result = " + result);
// Output: result = false

```

## parseRationalNumber

```TypeScript
static parseRationalNumber(numerator: number, denominator: number): RationalNumber
```

根据给定的分子和分母创建一个 **RationalNumber** 实例。 > **NOTE** > > **numerator** 和 **denominator** 参数必须为整数。如果传入小数，该函数不会被拦截，但会显示错误信息 > "parseRationalNumber: The type of Parameter must be integer"。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| numerator | number | Yes | 分子，为整数。取值范围：-Number.MAX_VALUE &lt;= numerator &lt;= Number.MAX_VALUE。 |
| denominator | number | Yes | 分母，为整数。取值范围：-Number.MAX_VALUE &lt;= denominator &lt;= Number.MAX_VALUE。 |

**Return value:**

| Type | Description |
| --- | --- |
| RationalNumber | 获取到的 RationalNumber 对象。 |

**Example**

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);

```

## toString

```TypeScript
toString(): string
```

获取此 **RationalNumber** 对象的字符串表示形式。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 正常情况下返回以分子/分母格式的字符串，例如 3/5；如果此对象的分子为 0，则返回  0/1；如果分母为 0，则返回 Infinity；如果分子和分母都为 0，则返回 NaN。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.toString();
console.info("result = " + result);
// Output: result = 1/2


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.toString();
console.info("result = " + result);
// Output: result = 1/2

```

## valueOf

```TypeScript
valueOf(): number
```

获取此 **RationalNumber** 对象的整数或浮点数值。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 整数或浮点数。 |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.valueOf();
console.info("result = " + result);
// Output: result = 0.5


let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.valueOf();
console.info("result = " + result);
// Output: result = 0.5

```

