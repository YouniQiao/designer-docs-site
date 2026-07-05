# getDistributedAccountAbility

## getDistributedAccountAbility

```TypeScript
function getDistributedAccountAbility(): DistributedAccountAbility
```

获取分布式账号单实例对象。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| DistributedAccountAbility | 返回一个实例，实例提供查询和更新分布式账号登录状态方法。 |

**Example**

```TypeScript
// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();

```

