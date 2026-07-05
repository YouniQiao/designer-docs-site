# createAtManager

## createAtManager

```TypeScript
function createAtManager(): AtManager
```

创建程序访问控制管理实例，用于权限校验、运行时权限申请、设置页授权引导和权限状态变化监听等场景。调用成功后返回AtManager实例，可用于后续的权限管理操作。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Return value:**

| Type | Description |
| --- | --- |
| AtManager | 获取程序访问控制模块的实例。 |

**Example**

```TypeScript
// Create a permission management instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();

```

