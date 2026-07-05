# IDataSource

LazyForEach的数据源。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getData

```TypeScript
getData(index: number): any
```

获取索引值index对应的数据。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 获取数据对应的索引值。取值范围是[0, 数据源长度-1]。 |

**Return value:**

| Type | Description |
| --- | --- |
| any | 获取索引值index对应的数据，由数据源决定具体类型。 |

## registerDataChangeListener

```TypeScript
registerDataChangeListener(listener: DataChangeListener): void
```

注册数据改变的监听器。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | DataChangeListener | Yes | 数据变化监听器。 |

## totalCount

```TypeScript
totalCount(): number
```

获得数据总数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 获得数据总数，由数据源决定实际大小。 |

## unregisterDataChangeListener

```TypeScript
unregisterDataChangeListener(listener: DataChangeListener): void
```

注销数据改变的监听器。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | DataChangeListener | Yes | 数据变化监听器。 |

