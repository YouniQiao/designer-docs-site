# isAppUid

## isAppUid

```TypeScript
function isAppUid(v: number): boolean
```

判断 uid 是否属于应用程序。

**Since:** 8

**Deprecated since:** 9

**Substitute:** process.ProcessManager.isAppUid

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| v | number | Yes | 应用程序的 uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回判断结果。如果是应用程序的 uid 则返回 true；  否则返回 false。 |

**Example**

```TypeScript
let result = process.isAppUid(688);

```

