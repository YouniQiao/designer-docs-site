# @ohos.account.distributedAccount

本模块提供管理分布式账号的一些基础功能，主要包括查询和更新账号登录状态。

**起始版本：** 7

**系统能力：** SystemCapability.Account.OsAccount

## 导入模块

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getDistributedAccountAbility](arkts-distributedaccount-getdistributedaccountability-f.md#getDistributedAccountAbility-1) | 获取分布式账号单实例对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [DistributedAccountAbility](arkts-distributedaccount-distributedaccountability-i.md) | 提供查询和更新分布式账号登录状态方法（需要先获取分布式账号的单实例对象）。 |
| [DistributedInfo](arkts-distributedaccount-distributedinfo-i.md) | 提供操作系统账号的分布式信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DistributedAccountStatus](arkts-distributedaccount-distributedaccountstatus-e.md) | 表示分布式账号状态枚举。 |

