# getEnvironmentVar

## getEnvironmentVar

```TypeScript
function getEnvironmentVar(name: string): string
```

获取环境变量名对应的值。

**Since:** 8

**Deprecated since:** 9

**Substitute:** process.ProcessManager.getEnvironmentVar

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 环境变量名。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回环境变量名对应的值。 |

**Example**

```TypeScript
let pres = process.getEnvironmentVar("PATH");

```

