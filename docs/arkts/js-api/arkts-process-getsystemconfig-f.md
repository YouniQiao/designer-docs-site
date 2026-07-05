# getSystemConfig

## getSystemConfig

```TypeScript
function getSystemConfig(name: number): number
```

获取系统配置信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** process.ProcessManager.getSystemConfig

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | number | Yes | 指定系统配置参数名。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回系统配置信息。 |

**Example**

```TypeScript
let _SC_ARG_MAX = 0;
let pres = process.getSystemConfig(_SC_ARG_MAX);

```

