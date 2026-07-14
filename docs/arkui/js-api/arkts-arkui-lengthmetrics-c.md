# LengthMetrics

Defines the length attribute. When the length unit is PERCENT, the value **1** indicates 100%.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoRefresh

```TypeScript
autoRefresh?(value: boolean): LengthMetrics
```

Sets automatic refresh for the LengthMetrics object. When enabled, the length value of the object created by LengthMetrics.resource() is automatically updated when the system configuration changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | whether to automatically update the length value when the system configuration changes.<br>If set to true, the length value of the object created by LengthMetrics.resource() is automatically updatedwhen the system configuration changes. If set to false, the length value of the object created byLengthMetrics.resource() is automatically updated when the system configuration changes.The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Returns the LengthMetrics object for chaining. |

## constructor

```TypeScript
constructor(value: number, unit?:LengthUnit)
```

A constructor used to create a **LengthMetrics** instance. If the **unit** parameter is omitted or explicitly set to **undefined**, the default unit VP is used. If it is set to a value that is not of the LengthUnit type, the default value 0 VP is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: [0, +∞). |
| unit | LengthUnit | No | Unit of the length property. |

## fp

```TypeScript
static fp(value: number): LengthMetrics
```

Creates a length property in fp.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## lpx

```TypeScript
static lpx(value: number): LengthMetrics
```

Creates a length property in lpx.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## percent

```TypeScript
static percent(value: number): LengthMetrics
```

Creates a length property in percent. The value **1** indicates 100%.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: [0, 1]. |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## px

```TypeScript
static px(value: number): LengthMetrics
```

Creates a length property in px.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## resource

```TypeScript
static resource(value: Resource): LengthMetrics
```

Represents the length of a resource of the Resource type.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Resource | Yes | Value of the length property. |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## vp

```TypeScript
static vp(value: number): LengthMetrics
```

Creates a length property in vp.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the length property.<br>Value range: (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | Instance of the **LengthMetrics** class. |

## unit

```TypeScript
public unit: LengthUnit
```

Unit of the length property. The default value is VP.

**Type:** LengthUnit

**Default:** VP

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
public value: number
```

Value of the length property.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

