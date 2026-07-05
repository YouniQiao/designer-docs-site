# Set

一种非线性数据结构。 > **说明** > > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。 > 本节使用以下标识来表示泛型的使用： - T：Type，支持[Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)。 **装饰器类型：** \@Sendable

**起始版本：** 12

**装饰器类型：** @Sendable

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { collections } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个迭代器，迭代器的每一项都是一个JavaScript对象。 说明： 本接口不支持在.ets文件中使用。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;T> | 迭代器对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

## add

```TypeScript
add(value: T): Set<T>
```

检查此Set中是否存在指定值，如果不存在，则将该值添加到Set中。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 目标值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Set&lt;T> | Set对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The add method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## clear

```TypeScript
clear(): void
```

删除此Set中的所有元素。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The clear method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## constructor

```TypeScript
constructor(values?: readonly T[] | null)
```

构造函数，用于创建ArkTS Set对象。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | readonly T[] \| null | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200012 | The ArkTS Set's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(iterable: Iterable<T>)
```

创建ArkTS Set对象的构造函数。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iterable | Iterable&lt;T> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200012 | The ArkTS Set's constructor cannot be directly invoked. |

## delete

```TypeScript
delete(value: T): boolean
```

删除此Set中的指定元素。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 目标值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 操作结果。成功删除返回true，否则返回false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The delete method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

返回一个Set迭代器对象，该对象包含了此Set中每个元素的键值对。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;[T, T]> | 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键值对。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The entries method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## forEach

```TypeScript
forEach(callbackFn: (value: T, value2: T, set: Set<T>) => void): void
```

对此Set中的每个键值对执行一次回调函数。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackFn | (value: T, value2: T, set: Set&lt;T>) => void | 是 | 对每个键值对运行的回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The forEach method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## has

```TypeScript
has(value: T): boolean
```

判断此Set中是否存在指定值。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 目标键。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 检查结果。如果存在指定元素，则返回true，否则返回false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The has method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## keys

```TypeScript
keys(): IterableIterator<T>
```

返回一个Set迭代器对象，该对象包含了此Set中每个元素的键。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;T> | 返回一个Set迭代器对象，该对象包含了此Set中每个元素的键。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The keys method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## values

```TypeScript
values(): IterableIterator<T>
```

返回一个Set迭代器对象，该对象包含了此Set中每个元素的值。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;T> | 返回一个Set迭代器对象，该对象包含了此Set中每个元素的值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The values method cannot be bound with non-sendable. |
| 10200201 | Concurrent modification error. |

## size

```TypeScript
readonly size: number
```

Set的元素个数。

**类型：** number

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

