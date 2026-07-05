# isConcurrent

## isConcurrent

```TypeScript
function isConcurrent(func: Function): boolean
```

检查函数是否为并发函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| func | Function | Yes | 需要检查的函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果被检查函数标注了  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)，则返回true；  否则返回false。 |

**Example**

```TypeScript
@Concurrent
function test() {}

let result: Boolean = taskpool.isConcurrent(test);
console.info("result is: " + result);

```

