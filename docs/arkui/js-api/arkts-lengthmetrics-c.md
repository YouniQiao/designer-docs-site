# LengthMetrics

用于设置长度属性，当长度单位为PERCENT时，值为1表示100%。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoRefresh

```TypeScript
autoRefresh?(value: boolean): LengthMetrics
```

为LengthMetrics对象设置自动刷新。 启用时，由LengthMetrics.resource()创建的对象的长度值将自动更新 当系统配置发生变化时。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当系统配置发生变化时，是否自动更新长度值。 |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | 返回用于链接的LengthMetrics对象。 |

## constructor

```TypeScript
constructor(value: number, unit?:LengthUnit)
```

LengthMetrics的构造函数。若参数unit不传入值或传入undefined，返回值使用默认单位VP；若unit传入非LengthUnit类型的值，返回默认值0VP。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：[0, +∞) |
| unit | LengthUnit | No |  |

## fp

```TypeScript
static fp(value: number): LengthMetrics
```

用于生成单位为FP的长度属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：(-∞, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## lpx

```TypeScript
static lpx(value: number): LengthMetrics
```

用于生成单位为LPX的长度属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：(-∞, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## percent

```TypeScript
static percent(value: number): LengthMetrics
```

用于生成单位为PERCENT的长度属性，值为1表示100%。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：[0, 1] |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## px

```TypeScript
static px(value: number): LengthMetrics
```

用于生成单位为PX的长度属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：(-∞, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## resource

```TypeScript
static resource(value: Resource): LengthMetrics
```

用于生成Resource类型资源的长度属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Resource | Yes | 长度属性的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## vp

```TypeScript
static vp(value: number): LengthMetrics
```

用于生成单位为VP的长度属性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 长度属性的值。 取值范围：(-∞, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | LengthMetrics 类的实例。 |

## unit

```TypeScript
public unit: LengthUnit
```

长度属性的单位，默认为VP。

**Type:** LengthUnit

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
public value: number
```

长度属性的值。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

