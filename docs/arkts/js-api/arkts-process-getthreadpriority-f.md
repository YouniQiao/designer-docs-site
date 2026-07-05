# getThreadPriority

## getThreadPriority

```TypeScript
function getThreadPriority(v: number): number
```

根据指定的 tid 获取线程优先级，优先级顺序取决于当前操作系统。

**Since:** 8

**Deprecated since:** 9

**Substitute:** process.ProcessManager.getThreadPriority

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| v | number | Yes | 指定的线程 tid。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回线程的优先级。优先级顺序取决于当前操作系统。 |

**Example**

```TypeScript
let tid = process.tid;
let pres = process.getThreadPriority(tid);

```

