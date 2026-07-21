# IDataSource

Data source of **LazyForEach**.

**Since:** 7

<!--Device-unnamed-declare interface IDataSource--><!--Device-unnamed-declare interface IDataSource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getdata"></a>
## getData

```TypeScript
getData(index: number): any
```

Obtains the data item that matches the specified index.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-IDataSource-getData(index: number): any--><!--Device-IDataSource-getData(index: number): any-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the data record to obtain. The value range is [0, data source length - 1]. |

**Return value:**

| Type | Description |
| --- | --- |
| any | Data item that matches the specified index. The actual type is determined by the data source implementation. |

<a id="registerdatachangelistener"></a>
## registerDataChangeListener

```TypeScript
registerDataChangeListener(listener: DataChangeListener): void
```

Registers a listener for data changes.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-IDataSource-registerDataChangeListener(listener: DataChangeListener): void--><!--Device-IDataSource-registerDataChangeListener(listener: DataChangeListener): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | [DataChangeListener](arkts-arkui-datachangelistener-i.md) | Yes | Listener for data changes. |

<a id="totalcount"></a>
## totalCount

```TypeScript
totalCount(): number
```

Obtains the total number of data items.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-IDataSource-totalCount(): number--><!--Device-IDataSource-totalCount(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of data items, which is subject to the data source. |

<a id="unregisterdatachangelistener"></a>
## unregisterDataChangeListener

```TypeScript
unregisterDataChangeListener(listener: DataChangeListener): void
```

Unregisters the listener for data changes.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-IDataSource-unregisterDataChangeListener(listener: DataChangeListener): void--><!--Device-IDataSource-unregisterDataChangeListener(listener: DataChangeListener): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | [DataChangeListener](arkts-arkui-datachangelistener-i.md) | Yes | Listener for data changes. |

