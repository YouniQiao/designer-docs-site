# DataChangeListener

数据变化监听器。 > **说明：** > > DataChangeListener除onDatasetChange以外的方法中，当参数包含index且值为负数时，会默认用0来替换。onDatasetChange中，当单个DataOperation参数包含index且值在数据源 > 索引范围之外（DataAddOperation中index可以等于数据源长度），则对应DataOperation不会生效。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDataAdd

```TypeScript
onDataAdd(index: number): void
```

通知组件index的位置有数据添加。添加数据完成后调用。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataAdded

```TypeScript
onDataAdded(index: number): void
```

通知组件index的位置有数据添加。添加数据完成后调用。 > **说明：

**Since:** 7

**Deprecated since:** 8

**Substitute:** DataChangeListener.onDataAdd

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataChange

```TypeScript
onDataChange(index: number): void
```

通知组件index的位置有数据有变化。改变数据完成后调用。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataChanged

```TypeScript
onDataChanged(index: number): void
```

通知组件index的位置有数据变化。改变数据完成后调用。 > **说明：

**Since:** 7

**Deprecated since:** 8

**Substitute:** DataChangeListener.onDataChange

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataDelete

```TypeScript
onDataDelete(index: number): void
```

通知组件删除index位置的数据并刷新LazyForEach的展示内容。删除数据完成后调用。 > **说明：** > > 需要保证dataSource中的对应数据已经在调用onDataDelete前删除，否则页面渲染将出现未定义的行为。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataDeleted

```TypeScript
onDataDeleted(index: number): void
```

通知组件删除index位置的数据并刷新LazyForEach的展示内容。删除数据完成后调用。 > **说明：

**Since:** 7

**Deprecated since:** 8

**Substitute:** DataChangeListener.onDataDelete

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataMove

```TypeScript
onDataMove(from: number, to: number): void
```

通知组件数据有移动。将from和to位置的数据进行交换。数据移动起始位置与数据移动目标位置交换完成后调用。 > **说明：** > > 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | number | Yes | 数据移动起始位置。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |
| to | number | Yes | 数据移动目标位置。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataMoved

```TypeScript
onDataMoved(from: number, to: number): void
```

通知组件数据有移动。将from和to位置的数据进行交换。 > **说明：** > > - > > - 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。数据移动起始位置与数据移动目标位置交换完成后调用。

**Since:** 7

**Deprecated since:** 8

**Substitute:** DataChangeListener.onDataMove

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | number | Yes | 数据移动起始位置。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |
| to | number | Yes | 数据移动目标位置。取值范围是[0, 数据源长度-1]。 小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。 |

## onDataReloaded

```TypeScript
onDataReloaded(): void
```

通知组件重新加载所有数据。键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。重新加载数据完成后调用。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDatasetChange

```TypeScript
onDatasetChange(dataOperations: DataOperation[]): void
```

进行批量的数据处理后，调用onDatasetChange接口通知组件按照dataOperations刷新组件。 > **说明：** > > onDatasetChange接口不能与其他DataChangeListener的更新接口混用。例如，在同一个LazyForEach中，调用过onDataAdd接口后，不能再调用onDatasetChange接口；反之，调用过 > onDatasetChange接口后，也不能调用onDataAdd等其他更新接口。页面中不同LazyForEach之间互不影响。在同一个onDatasetChange批量处理数据时，如果多个DataOperation操作同一个 > index，只有第一个DataOperation生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataOperations | DataOperation[] | Yes | 一次处理数据的操作。 |

