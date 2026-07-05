# AnimatableArithmetic

该接口定义非number数据类型的动画运算规则。对非number类型的数据（如数组、结构体、颜色等）做动画，需要实现AnimatableArithmetic\<T\>接口中加法、减法、乘法和判断相等函数，使得该数据能参与动画的插值运算 和识别该数据是否发生改变。即定义它们为实现了AnimatableArithmetic\<T\>接口的类型。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## equals

```TypeScript
equals(rhs: AnimatableArithmetic<T>): boolean
```

定义该数据类型的相等判断规则。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rhs | AnimatableArithmetic&lt;T> | Yes | 和自身比较相等的另一个数据对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否相等。返回true表示相等，返回false表示不相等。 |

## multiply

```TypeScript
multiply(scale: number): AnimatableArithmetic<T>
```

定义该数据类型的乘法运算规则。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | 乘法运算的系数。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatableArithmetic&lt;T> | 乘法运算的结果。 |

## plus

```TypeScript
plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>
```

定义数据类型的加法运算规则。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rhs | AnimatableArithmetic&lt;T> | Yes | 加法运算的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatableArithmetic&lt;T> | 加法运算的结果。 |

## subtract

```TypeScript
subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>
```

定义该数据类型的减法运算规则。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rhs | AnimatableArithmetic&lt;T> | Yes | 减法运算的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| AnimatableArithmetic&lt;T> | 减法运算的结果。 |

