# Decimal

An arbitrary-precision Decimal type

**Since:** 12

<!--Device-unnamed-declare class Decimal--><!--Device-unnamed-declare class Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { Decimal } from '@kit.ArkTS';
```

<a id="abs"></a>
## abs

```TypeScript
abs(): Decimal
```

Return a new Decimal whose value is the absolute value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-abs(): Decimal--><!--Device-Decimal-abs(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="abs-1"></a>
## abs

```TypeScript
static abs(n: Value): Decimal
```

Return a new Decimal whose value is the absolute value of `n`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static abs(n: Value): Decimal--><!--Device-Decimal-static abs(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="acos"></a>
## acos

```TypeScript
acos(): Decimal
```

Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-acos(): Decimal--><!--Device-Decimal-acos(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="acos-1"></a>
## acos

```TypeScript
static acos(n: Value): Decimal
```

Return a new Decimal whose value is the arccosine in radians of `n`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static acos(n: Value): Decimal--><!--Device-Decimal-static acos(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="acosh"></a>
## acosh

```TypeScript
acosh(): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-acosh(): Decimal--><!--Device-Decimal-acosh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="acosh-1"></a>
## acosh

```TypeScript
static acosh(n: Value): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic cosine of `n`, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static acosh(n: Value): Decimal--><!--Device-Decimal-static acosh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="add"></a>
## add

```TypeScript
add(n: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal plus `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-add(n: Value): Decimal--><!--Device-Decimal-add(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="add-1"></a>
## add

```TypeScript
static add(x: Value, y: Value): Decimal
```

Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static add(x: Value, y: Value): Decimal--><!--Device-Decimal-static add(x: Value, y: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="asin"></a>
## asin

```TypeScript
asin(): Decimal
```

Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-asin(): Decimal--><!--Device-Decimal-asin(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="asin-1"></a>
## asin

```TypeScript
static asin(n: Value): Decimal
```

Return a new Decimal whose value is the arcsine in radians of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static asin(n: Value): Decimal--><!--Device-Decimal-static asin(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="asinh"></a>
## asinh

```TypeScript
asinh(): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-asinh(): Decimal--><!--Device-Decimal-asinh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="asinh-1"></a>
## asinh

```TypeScript
static asinh(n: Value): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic sine of `n`, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static asinh(n: Value): Decimal--><!--Device-Decimal-static asinh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="atan"></a>
## atan

```TypeScript
atan(): Decimal
```

Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-atan(): Decimal--><!--Device-Decimal-atan(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="atan-1"></a>
## atan

```TypeScript
static atan(n: Value): Decimal
```

Return a new Decimal whose value is the arctangent in radians of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static atan(n: Value): Decimal--><!--Device-Decimal-static atan(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="atan2"></a>
## atan2

```TypeScript
static atan2(y: Value, x: Value): Decimal
```

Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi(inclusive), rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static atan2(y: Value, x: Value): Decimal--><!--Device-Decimal-static atan2(y: Value, x: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} The y-coordinate. |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} The x-coordinate. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="atanh"></a>
## atanh

```TypeScript
atanh(): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-atanh(): Decimal--><!--Device-Decimal-atanh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="atanh-1"></a>
## atanh

```TypeScript
static atanh(n: Value): Decimal
```

Return a new Decimal whose value is the inverse of the hyperbolic tangent of `n`, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static atanh(n: Value): Decimal--><!--Device-Decimal-static atanh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="cbrt"></a>
## cbrt

```TypeScript
cbrt(): Decimal
```

Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-cbrt(): Decimal--><!--Device-Decimal-cbrt(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="cbrt-1"></a>
## cbrt

```TypeScript
static cbrt(n: Value): Decimal
```

Return a new Decimal whose value is the cube root of `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static cbrt(n: Value): Decimal--><!--Device-Decimal-static cbrt(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="ceil"></a>
## ceil

```TypeScript
ceil(): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the direction of positive Infinity.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-ceil(): Decimal--><!--Device-Decimal-ceil(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="ceil-1"></a>
## ceil

```TypeScript
static ceil(n: Value): Decimal
```

Return a new Decimal whose value is `n` rounded to an integer using `ROUND_CEIL`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static ceil(n: Value): Decimal--><!--Device-Decimal-static ceil(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="clamp"></a>
## clamp

```TypeScript
clamp(min: Value, max: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal clamped to the range delineated by `min` and `max`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-clamp(min: Value, max: Value): Decimal--><!--Device-Decimal-clamp(min: Value, max: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| min | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| max | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `min` is out of range. |

<a id="clamp-1"></a>
## clamp

```TypeScript
static clamp(n: Value, min: Value, max: Value): Decimal
```

Return a new Decimal whose value is `n` clamped to the range delineated by `min` and `max`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static clamp(n: Value, min: Value, max: Value): Decimal--><!--Device-Decimal-static clamp(n: Value, min: Value, max: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| min | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| max | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `min` is out of range. |

<a id="comparedto"></a>
## comparedTo

```TypeScript
comparedTo(n: Value): number
```

Return1 if the value of this Decimal is greater than the value of `n`,  
-1 if the value of this Decimal is less than the value of `n`,0 if they have the same value,NaN if the value of either Decimal is NaN.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-comparedTo(n: Value): double--><!--Device-Decimal-comparedTo(n: Value): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| number | the number type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor(n: Value)
```

Return a new Decimal whose value is the absolute value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-constructor(n: Value)--><!--Device-Decimal-constructor(n: Value)-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="cos"></a>
## cos

```TypeScript
cos(): Decimal
```

Return a new Decimal whose value is the cosine of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-cos(): Decimal--><!--Device-Decimal-cos(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="cos-1"></a>
## cos

```TypeScript
static cos(n: Value): Decimal
```

Return a new Decimal whose value is the cosine of `n`, rounded to `precision` significant digits using rounding mode `rounding`

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static cos(n: Value): Decimal--><!--Device-Decimal-static cos(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="cosh"></a>
## cosh

```TypeScript
cosh(): Decimal
```

Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-cosh(): Decimal--><!--Device-Decimal-cosh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="cosh-1"></a>
## cosh

```TypeScript
static cosh(n: Value): Decimal
```

Return a new Decimal whose value is the hyperbolic cosine of `n`, rounded to precision significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static cosh(n: Value): Decimal--><!--Device-Decimal-static cosh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="decimalplaces"></a>
## decimalPlaces

```TypeScript
decimalPlaces(): number
```

Return the number of decimal places of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-decimalPlaces(): double--><!--Device-Decimal-decimalPlaces(): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | the number type |

<a id="div"></a>
## div

```TypeScript
div(n: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal divided by `n`, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-div(n: Value): Decimal--><!--Device-Decimal-div(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="div-1"></a>
## div

```TypeScript
static div(x: Value, y: Value): Decimal
```

Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static div(x: Value, y: Value): Decimal--><!--Device-Decimal-static div(x: Value, y: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="dividedtointegerby"></a>
## dividedToIntegerBy

```TypeScript
dividedToIntegerBy(n: Value): Decimal
```

Return a new Decimal whose value is the integer part of dividing the value of this Decimal by the value of `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-dividedToIntegerBy(n: Value): Decimal--><!--Device-Decimal-dividedToIntegerBy(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="equals"></a>
## equals

```TypeScript
equals(n: Value): boolean
```

Return true if the value of this Decimal is equal to the value of `n`, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-equals(n: Value): boolean--><!--Device-Decimal-equals(n: Value): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="exp"></a>
## exp

```TypeScript
exp(): Decimal
```

Return a new Decimal whose value is the natural exponential of the value of this Decimal,i.e. the base e raised to the power the value of this Decimal, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-exp(): Decimal--><!--Device-Decimal-exp(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="exp-1"></a>
## exp

```TypeScript
static exp(n: Value): Decimal
```

Return a new Decimal whose value is the natural exponential of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static exp(n: Value): Decimal--><!--Device-Decimal-static exp(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="floor"></a>
## floor

```TypeScript
floor(): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the direction of negative Infinity.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-floor(): Decimal--><!--Device-Decimal-floor(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="floor-1"></a>
## floor

```TypeScript
static floor(n: Value): Decimal
```

Return a new Decimal whose value is `n` round to an integer using `ROUND_FLOOR`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static floor(n: Value): Decimal--><!--Device-Decimal-static floor(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(n: Value): boolean
```

Return true if the value of this Decimal is greater than the value of `n`, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-greaterThan(n: Value): boolean--><!--Device-Decimal-greaterThan(n: Value): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(n: Value): boolean
```

Return true if the value of this Decimal is greater than or equal to the value of `n`,otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-greaterThanOrEqualTo(n: Value): boolean--><!--Device-Decimal-greaterThanOrEqualTo(n: Value): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="hypot"></a>
## hypot

```TypeScript
static hypot(...n: Value[]): Decimal
```

Return a new Decimal whose value is the square root of the sum of the squares of the arguments,rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static hypot(...n: Value[]): Decimal--><!--Device-Decimal-static hypot(...n: Value[]): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md)[] | Yes | {double \| string \| Decimal} Decimal |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="isfinite"></a>
## isFinite

```TypeScript
isFinite(): boolean
```

Return true if the value of this Decimal is a finite number, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isFinite(): boolean--><!--Device-Decimal-isFinite(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="isinteger"></a>
## isInteger

```TypeScript
isInteger(): boolean
```

Return true if the value of this Decimal is an integer, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isInteger(): boolean--><!--Device-Decimal-isInteger(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="isnan"></a>
## isNaN

```TypeScript
isNaN(): boolean
```

Return true if the value of this Decimal is NaN, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isNaN(): boolean--><!--Device-Decimal-isNaN(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="isnegative"></a>
## isNegative

```TypeScript
isNegative(): boolean
```

Return true if the value of this Decimal is negative, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isNegative(): boolean--><!--Device-Decimal-isNegative(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="ispositive"></a>
## isPositive

```TypeScript
isPositive(): boolean
```

Return true if the value of this Decimal is positive, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isPositive(): boolean--><!--Device-Decimal-isPositive(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="iszero"></a>
## isZero

```TypeScript
isZero(): boolean
```

Return true if the value of this Decimal is 0 or -0, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-isZero(): boolean--><!--Device-Decimal-isZero(): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(n: Value): boolean
```

Return true if the value of this Decimal is less than `n`, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-lessThan(n: Value): boolean--><!--Device-Decimal-lessThan(n: Value): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(n: Value): boolean
```

Return true if the value of this Decimal is less than or equal to `n`, otherwise return false.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-lessThanOrEqualTo(n: Value): boolean--><!--Device-Decimal-lessThanOrEqualTo(n: Value): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | the boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="ln"></a>
## ln

```TypeScript
ln(): Decimal
```

Return a new Decimal whose value is the natural logarithm of the value of this Decimal,rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-ln(): Decimal--><!--Device-Decimal-ln(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="ln-1"></a>
## ln

```TypeScript
static ln(n: Value): Decimal
```

Return a new Decimal whose value is the natural logarithm of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static ln(n: Value): Decimal--><!--Device-Decimal-static ln(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="log"></a>
## log

```TypeScript
log(n: Value): Decimal
```

Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-log(n: Value): Decimal--><!--Device-Decimal-log(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="log-1"></a>
## log

```TypeScript
static log(n: Value, base: Value): Decimal
```

Return a new Decimal whose value is the log of `n` to the base `base`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static log(n: Value, base: Value): Decimal--><!--Device-Decimal-static log(n: Value, base: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| base | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="log10"></a>
## log10

```TypeScript
static log10(n: Value): Decimal
```

Return a new Decimal whose value is the base 10 logarithm of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static log10(n: Value): Decimal--><!--Device-Decimal-static log10(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="log2"></a>
## log2

```TypeScript
static log2(n: Value): Decimal
```

Return a new Decimal whose value is the base 2 logarithm of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static log2(n: Value): Decimal--><!--Device-Decimal-static log2(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="max"></a>
## max

```TypeScript
static max(...n: Value[]): Decimal
```

Return a new Decimal whose value is the maximum of the arguments.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static max(...n: Value[]): Decimal--><!--Device-Decimal-static max(...n: Value[]): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md)[] | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="min"></a>
## min

```TypeScript
static min(...n: Value[]): Decimal
```

Return a new Decimal whose value is the minimum of the arguments.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static min(...n: Value[]): Decimal--><!--Device-Decimal-static min(...n: Value[]): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md)[] | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="mod"></a>
## mod

```TypeScript
mod(n: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal modulo `n`, rounded to`precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-mod(n: Value): Decimal--><!--Device-Decimal-mod(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="mod-1"></a>
## mod

```TypeScript
static mod(x: Value, y: Value): Decimal
```

Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static mod(x: Value, y: Value): Decimal--><!--Device-Decimal-static mod(x: Value, y: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="mul"></a>
## mul

```TypeScript
mul(n: Value): Decimal
```

Return a new Decimal whose value is this Decimal times `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-mul(n: Value): Decimal--><!--Device-Decimal-mul(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="mul-1"></a>
## mul

```TypeScript
static mul(x: Value, y: Value): Decimal
```

Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static mul(x: Value, y: Value): Decimal--><!--Device-Decimal-static mul(x: Value, y: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="negate"></a>
## negate

```TypeScript
negate(): Decimal
```

Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by -1.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-negate(): Decimal--><!--Device-Decimal-negate(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="pow"></a>
## pow

```TypeScript
pow(n: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal raised to the power `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-pow(n: Value): Decimal--><!--Device-Decimal-pow(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="pow-1"></a>
## pow

```TypeScript
static pow(base: Value, exponent: Value): Decimal
```

Return a new Decimal whose value is `base` raised to the power `exponent`, rounded to precision significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static pow(base: Value, exponent: Value): Decimal--><!--Device-Decimal-static pow(base: Value, exponent: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| base | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} The base. |
| exponent | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} The exponent. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200060](../errorcode-utils.md#10200060-precision-limit-is-exceeded) | Precision limit exceeded. |

<a id="precision"></a>
## precision

```TypeScript
precision(): number
```

Return the number of significant digits of the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-precision(): double--><!--Device-Decimal-precision(): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | the number type |

<a id="precision-1"></a>
## precision

```TypeScript
precision(includeZeros: boolean | number): number
```

Return the number of significant digits of the value of this Decimal, whether to count integer-part trailing zeros.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-precision(includeZeros: boolean | int): double--><!--Device-Decimal-precision(includeZeros: boolean | int): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| includeZeros | boolean \| number | Yes | Whether to count integer-part trailing zeros: true, false, |

**Return value:**

| Type | Description |
| --- | --- |
| number | the number type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `includeZeros` is out of range. |

<a id="random"></a>
## random

```TypeScript
static random(): Decimal
```

Returns a new Decimal with a random value equal to or greater than 0 and less than 1.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static random(): Decimal--><!--Device-Decimal-static random(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200061](../errorcode-utils.md#10200061-encryption-method-is-unavailable) | Crypto unavailable |

<a id="random-1"></a>
## random

```TypeScript
static random(significantDigits: number): Decimal
```

Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with`significantDigits` significant digits (or less if trailing zeros are produced).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static random(significantDigits: double): Decimal--><!--Device-Decimal-static random(significantDigits: double): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive. [since 12 - 17] |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200061](../errorcode-utils.md#10200061-encryption-method-is-unavailable) | Crypto unavailable |

<a id="round"></a>
## round

```TypeScript
static round(n: Value): Decimal
```

Return a new Decimal whose value is `n` rounded to an integer using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static round(n: Value): Decimal--><!--Device-Decimal-static round(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="set"></a>
## set

```TypeScript
static set(config: DecimalConfig): void
```

Configures the 'global' settings for this particular Decimal constructor.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static set(config: DecimalConfig): void--><!--Device-Decimal-static set(config: DecimalConfig): void-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [DecimalConfig](arkts-arkts-math-decimal-decimalconfig-i.md) | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `DecimalConfig.properties` is out of range. |
| [10200061](../errorcode-utils.md#10200061-encryption-method-is-unavailable) | Crypto unavailable |

<a id="sign"></a>
## sign

```TypeScript
static sign(n: Value): number
```

Return the sign of the passed value to the method.1 if x > 0,  
-1 if x < 0,0 if x is 0,  
-0 if x is -0,NaN otherwise

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sign(n: Value): double--><!--Device-Decimal-static sign(n: Value): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type<br>**Applicable version:** 12 - 17 |
| number | the Decimal type<br>**Applicable version:** 18 and later |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sin"></a>
## sin

```TypeScript
sin(): Decimal
```

Return a new Decimal whose value is the sine of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-sin(): Decimal--><!--Device-Decimal-sin(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="sin-1"></a>
## sin

```TypeScript
static sin(n: Value): Decimal
```

Return a new Decimal whose value is the sine of `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sin(n: Value): Decimal--><!--Device-Decimal-static sin(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sinh"></a>
## sinh

```TypeScript
sinh(): Decimal
```

Return a new Decimal whose value is the hyperbolic sine of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-sinh(): Decimal--><!--Device-Decimal-sinh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="sinh-1"></a>
## sinh

```TypeScript
static sinh(n: Value): Decimal
```

Return a new Decimal whose value is the hyperbolic sine of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sinh(n: Value): Decimal--><!--Device-Decimal-static sinh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sqrt"></a>
## sqrt

```TypeScript
sqrt(): Decimal
```

Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-sqrt(): Decimal--><!--Device-Decimal-sqrt(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="sqrt-1"></a>
## sqrt

```TypeScript
static sqrt(n: Value): Decimal
```

Return a new Decimal whose value is the square root of `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sqrt(n: Value): Decimal--><!--Device-Decimal-static sqrt(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sub"></a>
## sub

```TypeScript
sub(n: Value): Decimal
```

Return a new Decimal whose value is the value of this Decimal minus `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-sub(n: Value): Decimal--><!--Device-Decimal-sub(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sub-1"></a>
## sub

```TypeScript
static sub(x: Value, y: Value): Decimal
```

Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sub(x: Value, y: Value): Decimal--><!--Device-Decimal-static sub(x: Value, y: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| y | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="sum"></a>
## sum

```TypeScript
static sum(...n: Value[]): Decimal
```

Return a new Decimal whose value is the sum of the arguments, rounded to `precision`significant digits using rounding mode `rounding`.

Only the result is rounded, not the intermediate calculations.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static sum(...n: Value[]): Decimal--><!--Device-Decimal-static sum(...n: Value[]): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md)[] | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="tan"></a>
## tan

```TypeScript
tan(): Decimal
```

Return a new Decimal whose value is the tangent of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-tan(): Decimal--><!--Device-Decimal-tan(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="tan-1"></a>
## tan

```TypeScript
static tan(n: Value): Decimal
```

Return a new Decimal whose value is the tangent of `n`, rounded to `precision` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static tan(n: Value): Decimal--><!--Device-Decimal-static tan(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="tanh"></a>
## tanh

```TypeScript
tanh(): Decimal
```

Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-tanh(): Decimal--><!--Device-Decimal-tanh(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="tanh-1"></a>
## tanh

```TypeScript
static tanh(n: Value): Decimal
```

Return a new Decimal whose value is the hyperbolic tangent of `n`, rounded to `precision`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static tanh(n: Value): Decimal--><!--Device-Decimal-static tanh(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} A value in radians. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="tobinary"></a>
## toBinary

```TypeScript
toBinary(): string
```

Return a string representing the value of this Decimal in base 2.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toBinary(): string--><!--Device-Decimal-toBinary(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="tobinary-1"></a>
## toBinary

```TypeScript
toBinary(significantDigits: number): string
```

Return a string representing the value of this Decimal in base 2, round to `significantDigits`significant digits.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toBinary(significantDigits: double): string--><!--Device-Decimal-toBinary(significantDigits: double): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits` is out of range. |

<a id="tobinary-2"></a>
## toBinary

```TypeScript
toBinary(significantDigits: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal in base 2, round to `significantDigits`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toBinary(significantDigits: double, rounding: Rounding): string--><!--Device-Decimal-toBinary(significantDigits: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits \| rounding` is out of range. |

<a id="todecimalplaces"></a>
## toDecimalPlaces

```TypeScript
toDecimalPlaces(): Decimal
```

Return a new Decimal whose value is the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toDecimalPlaces(): Decimal--><!--Device-Decimal-toDecimalPlaces(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="todecimalplaces-1"></a>
## toDecimalPlaces

```TypeScript
toDecimalPlaces(decimalPlaces: number): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`decimal places.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toDecimalPlaces(decimalPlaces: double): Decimal--><!--Device-Decimal-toDecimalPlaces(decimalPlaces: double): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces` is out of range. |

<a id="todecimalplaces-2"></a>
## toDecimalPlaces

```TypeScript
toDecimalPlaces(decimalPlaces: number, rounding: Rounding): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `decimalPlaces`decimal places using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toDecimalPlaces(decimalPlaces: double, rounding: Rounding): Decimal--><!--Device-Decimal-toDecimalPlaces(decimalPlaces: double, rounding: Rounding): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces \| rounding` is out of range. |

<a id="toexponential"></a>
## toExponential

```TypeScript
toExponential(): string
```

Return a string representing the value of this Decimal in exponential notation.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toExponential(): string--><!--Device-Decimal-toExponential(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="toexponential-1"></a>
## toExponential

```TypeScript
toExponential(decimalPlaces: number): string
```

Return a string representing the value of this Decimal in exponential notation rounded to`decimalPlaces` fixed decimal places.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toExponential(decimalPlaces: double): string--><!--Device-Decimal-toExponential(decimalPlaces: double): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces` is out of range. |

<a id="toexponential-2"></a>
## toExponential

```TypeScript
toExponential(decimalPlaces: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal in exponential notation rounded to`decimalPlaces` fixed decimal places using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toExponential(decimalPlaces: double, rounding: Rounding): string--><!--Device-Decimal-toExponential(decimalPlaces: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces \| rounding` is out of range. |

<a id="tofixed"></a>
## toFixed

```TypeScript
toFixed(): string
```

Return a string representing the value of this Decimal in normal (fixed-point).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toFixed(): string--><!--Device-Decimal-toFixed(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="tofixed-1"></a>
## toFixed

```TypeScript
toFixed(decimalPlaces: number): string
```

Return a string representing the value of this Decimal in normal (fixed-point) notation to`decimalPlaces` fixed decimal places.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toFixed(decimalPlaces: double): string--><!--Device-Decimal-toFixed(decimalPlaces: double): string-End-->

**System capability:** 
- API version 18 and later: SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces` is out of range. |

<a id="tofixed-2"></a>
## toFixed

```TypeScript
toFixed(decimalPlaces: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal in normal (fixed-point) notation to`decimalPlaces` fixed decimal places and rounded using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toFixed(decimalPlaces: double, rounding: Rounding): string--><!--Device-Decimal-toFixed(decimalPlaces: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decimalPlaces | number | Yes | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `decimalPlaces \| rounding` is out of range. |

<a id="tofraction"></a>
## toFraction

```TypeScript
toFraction(): Decimal[]
```

Return an array representing the value of this Decimal as a simple fraction with an integer numerator and an integer denominator.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toFraction(): Decimal[]--><!--Device-Decimal-toFraction(): Decimal[]-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md)[] | the Decimal[] type |

<a id="tofraction-1"></a>
## toFraction

```TypeScript
toFraction(maxDenominator: Value): Decimal[]
```

Return an array representing the value of this Decimal as a simple fraction with an integer numerator and an integer denominator. The denominator will be a positive non-zero value less than or equal to `max_denominator`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toFraction(maxDenominator: Value): Decimal[]--><!--Device-Decimal-toFraction(maxDenominator: Value): Decimal[]-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxDenominator | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md)[] | the Decimal[] type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="tohexadecimal"></a>
## toHexadecimal

```TypeScript
toHexadecimal(): string
```

Return a string representing the value of this Decimal in base 16

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toHexadecimal(): string--><!--Device-Decimal-toHexadecimal(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="tohexadecimal-1"></a>
## toHexadecimal

```TypeScript
toHexadecimal(significantDigits: number): string
```

Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toHexadecimal(significantDigits: double): string--><!--Device-Decimal-toHexadecimal(significantDigits: double): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits` is out of range. |

<a id="tohexadecimal-2"></a>
## toHexadecimal

```TypeScript
toHexadecimal(significantDigits: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal in base 16, round to `significantDigits` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toHexadecimal(significantDigits: double, rounding: Rounding): string--><!--Device-Decimal-toHexadecimal(significantDigits: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits \| rounding` is out of range. |

<a id="tonearest"></a>
## toNearest

```TypeScript
toNearest(n: Value): Decimal
```

Returns a new Decimal whose value is the nearest multiple of `n`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toNearest(n: Value): Decimal--><!--Device-Decimal-toNearest(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="tonearest-1"></a>
## toNearest

```TypeScript
toNearest(n: Value, rounding: Rounding): Decimal
```

Returns a new Decimal whose value is the nearest multiple of `n` in the direction of rounding mode `rounding`, to the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toNearest(n: Value, rounding: Rounding): Decimal--><!--Device-Decimal-toNearest(n: Value, rounding: Rounding): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `rounding` is out of range. |

<a id="tonumber"></a>
## toNumber

```TypeScript
toNumber(): number
```

Return the value of this Decimal converted to a number primitive. Zero keeps its sign.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toNumber(): double--><!--Device-Decimal-toNumber(): double-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | the number type |

<a id="tooctal"></a>
## toOctal

```TypeScript
toOctal(): string
```

Return a string representing the value of this Decimal in base 8.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toOctal(): string--><!--Device-Decimal-toOctal(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="tooctal-1"></a>
## toOctal

```TypeScript
toOctal(significantDigits: number): string
```

Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toOctal(significantDigits: double): string--><!--Device-Decimal-toOctal(significantDigits: double): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits` is out of range. |

<a id="tooctal-2"></a>
## toOctal

```TypeScript
toOctal(significantDigits: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal in base 8, round to `significantDigits` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toOctal(significantDigits: double, rounding: Rounding): string--><!--Device-Decimal-toOctal(significantDigits: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | {double \| string \| Decimal} |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits \| rounding` is out of range. |

<a id="toprecision"></a>
## toPrecision

```TypeScript
toPrecision(): string
```

Return a string representing the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toPrecision(): string--><!--Device-Decimal-toPrecision(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="toprecision-1"></a>
## toPrecision

```TypeScript
toPrecision(significantDigits: number): string
```

Return a string representing the value of this Decimal rounded to `significantDigits` significant digits.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toPrecision(significantDigits: double): string--><!--Device-Decimal-toPrecision(significantDigits: double): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits` is out of range. |

<a id="toprecision-2"></a>
## toPrecision

```TypeScript
toPrecision(significantDigits: number, rounding: Rounding): string
```

Return a string representing the value of this Decimal rounded to `significantDigits` significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toPrecision(significantDigits: double, rounding: Rounding): string--><!--Device-Decimal-toPrecision(significantDigits: double, rounding: Rounding): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits \| rounding` is out of range. |

<a id="tosignificantdigits"></a>
## toSignificantDigits

```TypeScript
toSignificantDigits(): Decimal
```

Return a new Decimal whose value is the value of this Decimal.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toSignificantDigits(): Decimal--><!--Device-Decimal-toSignificantDigits(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="tosignificantdigits-1"></a>
## toSignificantDigits

```TypeScript
toSignificantDigits(significantDigits: number): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`significant digits.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toSignificantDigits(significantDigits: double): Decimal--><!--Device-Decimal-toSignificantDigits(significantDigits: double): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits` is out of range. |

<a id="tosignificantdigits-2"></a>
## toSignificantDigits

```TypeScript
toSignificantDigits(significantDigits: number, rounding: Rounding): Decimal
```

Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `significantDigits`significant digits using rounding mode `rounding`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toSignificantDigits(significantDigits: double, rounding: Rounding): Decimal--><!--Device-Decimal-toSignificantDigits(significantDigits: double, rounding: Rounding): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| significantDigits | number | Yes | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| rounding | [Rounding](arkts-arkts-rounding-t.md) | Yes | Rounding mode. Integer, 0 to 8 inclusive. |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200001](../errorcode-utils.md#10200001-value-out-of-range) | The value of `significantDigits \| rounding` is out of range. |

<a id="tostring"></a>
## toString

```TypeScript
toString(): string
```

Return a string representing the value of this Decimal.Return exponential notation if this Decimal has a positive exponent equal to or greater than`toExpPos`, or a negative exponent equal to or less than `toExpNeg`.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-toString(): string--><!--Device-Decimal-toString(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

<a id="trunc"></a>
## trunc

```TypeScript
trunc(): Decimal
```

Return a new Decimal whose value is the value of this Decimal truncated to a whole number.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-trunc(): Decimal--><!--Device-Decimal-trunc(): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

<a id="trunc-1"></a>
## trunc

```TypeScript
static trunc(n: Value): Decimal
```

Return a new Decimal whose value is `n` truncated to an integer.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static trunc(n: Value): Decimal--><!--Device-Decimal-static trunc(n: Value): Decimal-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | [Value](../../apis-asset-store-kit/arkts-apis/arkts-assetstore-asset-value-t.md) | Yes | {double \| string \| Decimal} |

**Return value:**

| Type | Description |
| --- | --- |
| [Decimal](arkts-arkts-math-decimal-decimal-c.md) | the Decimal type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Incorrect parameter types;2. Parameter verification failed. |

<a id="valueof"></a>
## valueOf

```TypeScript
valueOf(): string
```

Return a string representing the value of this Decimal.Unlike `toString`, negative zero will include the minus sign.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-valueOf(): string--><!--Device-Decimal-valueOf(): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | the string type |

## EUCLIDEAN

```TypeScript
static readonly EUCLIDEAN : 9
```

Not a rounding mode, see modulo

**Type:** 9

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly EUCLIDEAN : 9--><!--Device-Decimal-static readonly EUCLIDEAN : 9-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_CEILING

```TypeScript
static readonly ROUND_CEILING : 2
```

Rounds towards Infinity

**Type:** 2

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_CEILING : 2--><!--Device-Decimal-static readonly ROUND_CEILING : 2-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_DOWN

```TypeScript
static readonly ROUND_DOWN : 1
```

Rounds towards zero

**Type:** 1

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_DOWN : 1--><!--Device-Decimal-static readonly ROUND_DOWN : 1-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_FLOOR

```TypeScript
static readonly ROUND_FLOOR : 3
```

Rounds towards -Infinity

**Type:** 3

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_FLOOR : 3--><!--Device-Decimal-static readonly ROUND_FLOOR : 3-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_HALF_CEILING

```TypeScript
static readonly ROUND_HALF_CEILING : 7
```

Rounds towards nearest neighbour. If equidistant, rounds towards Infinity

**Type:** 7

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_HALF_CEILING : 7--><!--Device-Decimal-static readonly ROUND_HALF_CEILING : 7-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_HALF_DOWN

```TypeScript
static readonly ROUND_HALF_DOWN : 5
```

Rounds towards nearest neighbour. If equidistant, rounds towards zero

**Type:** 5

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_HALF_DOWN : 5--><!--Device-Decimal-static readonly ROUND_HALF_DOWN : 5-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_HALF_EVEN

```TypeScript
static readonly ROUND_HALF_EVEN : 6
```

Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour

**Type:** 6

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_HALF_EVEN : 6--><!--Device-Decimal-static readonly ROUND_HALF_EVEN : 6-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_HALF_FLOOR

```TypeScript
static readonly ROUND_HALF_FLOOR : 8
```

Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity

**Type:** 8

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_HALF_FLOOR : 8--><!--Device-Decimal-static readonly ROUND_HALF_FLOOR : 8-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_HALF_UP

```TypeScript
static readonly ROUND_HALF_UP : 4
```

Rounds towards nearest neighbour. If equidistant, rounds away from zero

**Type:** 4

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_HALF_UP : 4--><!--Device-Decimal-static readonly ROUND_HALF_UP : 4-End-->

**System capability:** SystemCapability.Utils.Lang

## ROUND_UP

```TypeScript
static readonly ROUND_UP : 0
```

Rounds away from zero

**Type:** 0

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-static readonly ROUND_UP : 0--><!--Device-Decimal-static readonly ROUND_UP : 0-End-->

**System capability:** SystemCapability.Utils.Lang

## d

```TypeScript
readonly d: number[]
```

The numbers of decimal digits.

**Type:** number[]

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-readonly d: number[]--><!--Device-Decimal-readonly d: number[]-End-->

**System capability:** SystemCapability.Utils.Lang

## e

```TypeScript
get e(): number
```

The number of decimal exponent.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-get e(): double--><!--Device-Decimal-get e(): double-End-->

**System capability:** SystemCapability.Utils.Lang

## s

```TypeScript
get s(): number
```

The number of decimal sign.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Decimal-get s(): double--><!--Device-Decimal-get s(): double-End-->

**System capability:** SystemCapability.Utils.Lang

