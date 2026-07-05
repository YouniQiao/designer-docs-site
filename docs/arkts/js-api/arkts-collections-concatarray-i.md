# ConcatArray

该接口定义了支持数组连接操作的对象，并继承了`ISendable`接口，使其兼具高效数组拼接和跨线程传递能力。 > **说明** > > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。 > 文档中存在泛型的使用，涉及以下泛型标记符： - T：Type，支持[Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。

**Inheritance:** ConcatArrayextends: ISendable.

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@kit.ArkTS';
```

## join

```TypeScript
join(separator?: string): string
```

将ConcatArray的所有元素连接成一个字符串，元素之间可以用指定的分隔符分隔。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| separator | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 包含所有ConcatArray元素连接成的字符串。如果ConcatArray为空，则返回空字符串。 |

## slice

```TypeScript
slice(start?: number, end?: number): ConcatArray<T>
```

返回一个新的ConcatArray，该ConcatArray是原始ConcatArray的切片。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ConcatArray&lt;T> |  |

## length

```TypeScript
readonly length: number
```

ConcatArray的元素个数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
readonly [index: number]: T
```

返回ConcatArray指定索引位置的元素。

**Type:** T

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

