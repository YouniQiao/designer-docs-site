# @arkts.collections

The collections module provides ArkTS containers for efficient data transfer in concurrency scenarios. The ArkTS
containers provide similar functionalities as their JavaScript counterparts, except that their properties cannot be
added or updated through `.` or `[]`.
By default, ArkTS containers are passed by reference between concurrent instances. This means that multiple
concurrent instances can simultaneously operate the same container instance. Pass-by-copy is also supported. In this
mode, each concurrent instance holds an ArkTS container instance.
ArkTS containers are not thread-safe. They adopt the fail-fast approach. An exception is thrown if multiple
concurrent instances make structural changes to a container instance at the same time. Therefore, in multi-thread
read/write scenarios, you must use the ArkTS asynchronous lock to ensure secure access to the ArkTS containers.
Currently, the following ArkTS containers are provided: [Array](arkts-collections.md),
[Map](arkts-collections.md), [Set](arkts-collections.md), TypedArray
([Int8Array](arkts-collections.md),
[Uint8Array](arkts-collections.md),
[Int16Array](arkts-collections.md),
[Uint16Array](arkts-collections.md),
[Int32Array](arkts-collections.md),
[Uint32Array](arkts-collections.md),
[Uint8ClampedArray](arkts-collections.md) and
[Float32Array](arkts-collections.md)),
[ArrayBuffer](arkts-collections.md),
[BitVector](arkts-collections.md), and
[ConcatArray](arkts-collections.md).

> **NOTE**
>
> - This module can be imported only to ArkTS files (with the file name extension .ets).

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [Array](arkts-arkts-array-c.md) | A linear data structure that is implemented on arrays and can be passed between ArkTS concurrent instances.Pass-by-reference is recommended for better transfer performance.&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; This section uses the following to identify the use of generics:- T: type, which can be any of the[sendable data types](../../../../arkts-utils/arkts-sendable.md#sendable-data-types).**Decorator**: \@Sendable |
| [ArrayBuffer](arkts-arkts-arraybuffer-c.md) | Underlying data structure of the ArkTS TypedArray ([Int8Array](arkts-collections.md),[Uint8Array](arkts-collections.md),[Int16Array](arkts-collections.md),[Uint16Array](arkts-collections.md),[Int32Array](arkts-collections.md),[Uint32Array](arkts-collections.md),[Uint8ClampedArray](arkts-collections.md), and[Float32Array](arkts-collections.md)).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [BitVector](arkts-arkts-bitvector-c.md) | A linear data structure that is implemented on arrays. A bit vector stores bit values and provides bit-levelstorage and processing.&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Float32Array](arkts-arkts-float32array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Int16Array](arkts-arkts-int16array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Int32Array](arkts-arkts-int32array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Int8Array](arkts-arkts-int8array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Map](arkts-arkts-map-c.md) | A non-linear data structure.&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; This section uses the following to identify the use of generics:- K: key.- V: value.The K and V types must be any of the[sendable data types](../../../../arkts-utils/arkts-sendable.md#sendable-data-types).**Decorator**: \@Sendable |
| [Set](arkts-arkts-set-c.md) | A non-linear data structure.&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; This section uses the following to identify the use of generics:- T: type, which can be any of the[sendable data types](../../../../arkts-utils/arkts-sendable.md#sendable-data-types).**Decorator**: \@Sendable |
| [Uint16Array](arkts-arkts-uint16array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Uint32Array](arkts-arkts-uint32array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Uint8Array](arkts-arkts-uint8array-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |
| [Uint8ClampedArray](arkts-arkts-uint8clampedarray-c.md) | A linear data structure that is implemented on [ArkTS ArrayBuffer](arkts-collections.md).&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; **Decorator**: \@Sendable |

### Interfaces

| Name | Description |
| --- | --- |
| [ConcatArray](arkts-arkts-concatarray-i.md) | An array-like object that can be concatenated. This API extends **ISendable**.&gt; **NOTE**&gt;&gt; - This module can be imported only to ArkTS files (with the file name extension .ets).&gt; This section uses the following to identify the use of generics:- T: type, which can be any of the[sendable data types](../../../../arkts-utils/arkts-sendable.md#sendable-data-types). |

### Types

| Name | Description |
| --- | --- |
| [ArrayFromMapFn](arkts-arkts-arrayfrommapfn-t.md) | Defines the ArkTS Array reduction function, which is used by the 'from' API of the Array class. |
| [ArrayPredicateFn](arkts-arkts-arraypredicatefn-t.md) | Defines the ArkTS Array reduction function, which is used by the 'some' and 'every'APIs of the Array class to determine whether array elements meet certain test conditions. |
| [ArrayReduceCallback](arkts-arkts-arrayreducecallback-t.md) | Defines the ArkTS Array reduction function, which is used by the 'reduceRight' API of the Array class. |
| [ISendable](arkts-arkts-isendable-t.md) | 'ISendable' is the parent type of all sendable types except null and undefined.It does not have any necessary methods or properties. |
| [TypedArrayCompareFn](arkts-arkts-typedarraycomparefn-t.md) | Describes the sort function of the ArkTS typed array. |
| [TypedArrayForEachCallback](arkts-arkts-typedarrayforeachcallback-t.md) | Describes the traversal function of the ArkTS typed array. |
| [TypedArrayFromMapFn](arkts-arkts-typedarrayfrommapfn-t.md) | Describes the mapping function of the ArkTS typed array. |
| [TypedArrayMapCallback](arkts-arkts-typedarraymapcallback-t.md) | Describes the conversion mapping function of the ArkTS typed array. |
| [TypedArrayPredicateFn](arkts-arkts-typedarraypredicatefn-t.md) | Describes the assertion function of the ArkTS typed array. |
| [TypedArrayReduceCallback](arkts-arkts-typedarrayreducecallback-t.md) | Describes the reduce function of the ArkTS typed array. |

