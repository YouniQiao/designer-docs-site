# getUidForName

## getUidForName

```TypeScript
function getUidForName(v: string): number
```

根据指定的用户名，从系统的用户数据库中获取该用户的 uid。

**Since:** 8

**Deprecated since:** 9

**Substitute:** process.ProcessManager.getUidForName

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| v | string | Yes | 用户名。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回用户 uid。 |

**Example**

```TypeScript
let pres = process.getUidForName("tool");

```

