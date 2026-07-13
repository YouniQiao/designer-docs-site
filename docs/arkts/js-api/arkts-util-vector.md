# @ohos.util.Vector

## Modules to Import

```TypeScript
import { Vector } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [Vector](arkts-arkts-vector-c.md) | Vector is a linear data structure that is implemented based on arrays. When the memory of a vector is used up, alarger contiguous memory area is automatically allocated, all the elements are copied to the new memory area, and thecurrent memory area is reclaimed. Vector can be used to efficiently access elements.Both Vector and [ArrayList](arkts-util-arraylist.md) are implemented based on arrays, but Vector provides moreinterfaces for operating the arrays. Both of them can dynamically adjust the capacity. Vector doubles the capacityeach time, whereas ArrayList increases the capacity by 50%.**Recommended use case**: Use Vector when the data volume is large.This topic uses the following to identify the use of generics:- T: Type&gt; **NOTE**&gt;&gt; - The APIs provided by this module are deprecated since API version 9. You are advised to use&gt; [@ohos.util.ArrayList](arkts-util-arraylist.md). |

