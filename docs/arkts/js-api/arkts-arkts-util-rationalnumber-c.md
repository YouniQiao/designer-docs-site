# RationalNumber

Provides APIs to compare rational numbers and obtain numerators and denominators. For example, the **toString()** API can be used to convert a rational number into a string.

**Since:** 8

<!--Device-util-class RationalNumber--><!--Device-util-class RationalNumber-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

<a id="compare"></a>
## compare

```TypeScript
compare(another: RationalNumber): number
```

Compares the current RationalNumber object to the given object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-compare(another: RationalNumber): number--><!--Device-RationalNumber-compare(another: RationalNumber): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| another | [RationalNumber](arkts-arkts-util-rationalnumber-c.md) | Yes | An object of other rational numbers |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns 0 or 1, or -1, depending on the comparison. |

<a id="compareto"></a>
## compareTo

```TypeScript
compareTo(another: RationalNumber): number
```

Compares the current RationalNumber object to the given object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** compare

<!--Device-RationalNumber-compareTo(another: RationalNumber): number--><!--Device-RationalNumber-compareTo(another: RationalNumber): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| another | [RationalNumber](arkts-arkts-util-rationalnumber-c.md) | Yes | An object of other rational numbers |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns 0 or 1, or -1, depending on the comparison. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor(numerator: number, denominator: number)
```

A constructor used to create a **RationalNumber** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [parseRationalNumber](arkts-arkts-util-rationalnumber-c.md#parserationalnumber-1)

<!--Device-RationalNumber-constructor(numerator: number, denominator: number)--><!--Device-RationalNumber-constructor(numerator: number, denominator: number)-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| numerator | number | Yes | Numerator, which is an integer. |
| denominator | number | Yes | Denominator, which is an integer. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);

```

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **RationalNumber** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-constructor()--><!--Device-RationalNumber-constructor()-End-->

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber();

```

<a id="createrationalfromstring"></a>
## createRationalFromString

```TypeScript
static createRationalFromString(rationalString: string): RationalNumber
```

Creates a **RationalNumber** object based on the given string.

> **NOTE**  
>  
> The **rationalString** parameter must be a string. If a decimal string is passed in, the function is not  
> intercepted, but the error message "createRationalFromString: The type of Parameter must be integer string" is  
> displayed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-static createRationalFromString(rationalString: string): RationalNumber--><!--Device-RationalNumber-static createRationalFromString(rationalString: string): RationalNumber-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rationalString | string | Yes | String used to create the **RationalNumber** object. |

**Return value:**

| Type | Description |
| --- | --- |
| [RationalNumber](arkts-arkts-util-rationalnumber-c.md) | Returns a RationalNumber object generated based on the given string. |

**Example**

```TypeScript
let rational = util.RationalNumber.createRationalFromString("3/4");

```

<a id="equals"></a>
## equals

```TypeScript
equals(obj: Object): boolean
```

Checks whether this **RationalNumber** object equals the given object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-equals(obj: Object): boolean--><!--Device-RationalNumber-equals(obj: Object): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object | Yes | Object used to compare with this **RationalNumber** object. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if the two objects are equal; otherwise,**false** is returned. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let rational = util.RationalNumber.createRationalFromString("3/4");
let result = rationalNumber.equals(rational);
console.info("result = " + result);
// Output: result = false

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let rational = util.RationalNumber.createRationalFromString("3/4");
let result = rationalNumber.equals(rational);
console.info("result = " + result);
// Output: result = false

```

<a id="getcommondivisor"></a>
## getCommonDivisor

```TypeScript
static getCommonDivisor(number1: number, number2: number): number
```

Obtains the greatest common divisor of two specified integers.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getCommonFactor](arkts-arkts-util-rationalnumber-c.md#getcommonfactor-1)

<!--Device-RationalNumber-static getCommonDivisor(number1: number, number2: number): number--><!--Device-RationalNumber-static getCommonDivisor(number1: number, number2: number): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| number1 | number | Yes | The first integer used to get the greatest common divisor. |
| number2 | number | Yes | The second integer used to get the greatest common divisor. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Greatest common divisor obtained. |

<a id="getcommonfactor"></a>
## getCommonFactor

```TypeScript
static getCommonFactor(number1: number, number2: number): number
```

Obtains the greatest common divisor of two specified integers.

> **NOTE**  
>  
> The **number1** and **number2** parameters must be integers. If a decimal number is passed in, the function is  
> not intercepted, but the error message "getCommonFactor: The type of Parameter must be integer" is displayed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-static getCommonFactor(number1: number, number2: number): number--><!--Device-RationalNumber-static getCommonFactor(number1: number, number2: number): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| number1 | number | Yes | The first integer used to get the greatest common divisor. Value range: -Number.MAX_VALUE <= number1 <= Number.MAX_VALUE. |
| number2 | number | Yes | The second integer used to get the greatest common divisor. Value range: -Number.MAX_VALUE <= number2 <= Number.MAX_VALUE. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Greatest common divisor obtained. |

**Example**

```TypeScript
let result = util.RationalNumber.getCommonFactor(4,6);
console.info("result = " + result);
// Output: result = 2

```

<a id="getdenominator"></a>
## getDenominator

```TypeScript
getDenominator(): number
```

Obtains the denominator of this **RationalNumber** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-getDenominator(): number--><!--Device-RationalNumber-getDenominator(): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | Denominator of this **RationalNumber** object. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.getDenominator();
console.info("result = " + result);
// Output: result = 2

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2)
let result = rationalNumber.getDenominator();
console.info("result = " + result);
// Output: result = 2

```

<a id="getnumerator"></a>
## getNumerator

```TypeScript
getNumerator(): number
```

Obtains the numerator of this **RationalNumber** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-getNumerator(): number--><!--Device-RationalNumber-getNumerator(): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | Numerator of this **RationalNumber** object. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.getNumerator();
console.info("result = " + result);
// Output: result = 1

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.getNumerator();
console.info("result = " + result);
// Output: result = 1

```

<a id="isfinite"></a>
## isFinite

```TypeScript
isFinite(): boolean
```

Checks whether this **RationalNumber** object represents a finite value.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-isFinite(): boolean--><!--Device-RationalNumber-isFinite(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if this **RationalNumber** object represents a finite value (the denominator is not **0**); otherwise, **false** is returned. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isFinite();
console.info("result = " + result);
// Output: result = true

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isFinite();
console.info("result = " + result);
// Output: result = true

```

<a id="isnan"></a>
## isNaN

```TypeScript
isNaN(): boolean
```

Checks whether this **RationalNumber** object is a Not a Number (NaN).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-isNaN(): boolean--><!--Device-RationalNumber-isNaN(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if this **RationalNumber** object is a NaN (the denominator and numerator are both **0**); otherwise, **false** is returned. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isNaN();
console.info("result = " + result);
// Output: result = false

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isNaN();
console.info("result = " + result);
// Output: result = false

```

<a id="iszero"></a>
## isZero

```TypeScript
isZero(): boolean
```

Checks whether this **RationalNumber** object is **0**.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-isZero(): boolean--><!--Device-RationalNumber-isZero(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if the value of this **RationalNumber** object is **0**; otherwise, **false** is returned. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.isZero();
console.info("result = " + result);
// Output: result = false

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.isZero();
console.info("result = " + result);
// Output: result = false

```

<a id="parserationalnumber"></a>
## parseRationalNumber

```TypeScript
static parseRationalNumber(numerator: number, denominator: number): RationalNumber
```

Creates a **RationalNumber** instance with a given numerator and denominator.

> **NOTE**  
>  
> The **numerator** and **denominator** parameters must be integers. If a decimal number is passed in, the  
> function is not intercepted, but the error message "parseRationalNumber: The type of Parameter must be integer"  
> is displayed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-static parseRationalNumber(numerator: number, denominator: number): RationalNumber--><!--Device-RationalNumber-static parseRationalNumber(numerator: number, denominator: number): RationalNumber-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| numerator | number | Yes | Numerator, which is an integer. Value range: -Number.MAX_VALUE <= numerator <=Number.MAX_VALUE. |
| denominator | number | Yes | Denominator, which is an integer. Value range: -Number.MAX_VALUE <= denominator <= Number.MAX_VALUE. |

**Return value:**

| Type | Description |
| --- | --- |
| [RationalNumber](arkts-arkts-util-rationalnumber-c.md) | **RationalNumber** object obtained. |

**Example**

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);

```

<a id="tostring"></a>
## toString

```TypeScript
toString(): string
```

Obtains the string representation of this **RationalNumber** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-toString(): string--><!--Device-RationalNumber-toString(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns a string in Numerator/Denominator format in normal cases, for example, 3/5; returns **0/1** if the numerator of this object is **0**; returns **Infinity** if the denominator is **0**; returns **NaN** if the numerator and denominator are both **0**. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.toString();
console.info("result = " + result);
// Output: result = 1/2

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.toString();
console.info("result = " + result);
// Output: result = 1/2

```

<a id="valueof"></a>
## valueOf

```TypeScript
valueOf(): number
```

Obtains the integer or floating-point value of this **RationalNumber** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RationalNumber-valueOf(): number--><!--Device-RationalNumber-valueOf(): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | An integer or a floating-point number. |

**Example**

```TypeScript
let rationalNumber = new util.RationalNumber(1,2);
let result = rationalNumber.valueOf();
console.info("result = " + result);
// Output: result = 0.5

```

You are advised to use the following code snippet for API version 9 and later versions:

```TypeScript
let rationalNumber = util.RationalNumber.parseRationalNumber(1,2);
let result = rationalNumber.valueOf();
console.info("result = " + result);
// Output: result = 0.5

```

