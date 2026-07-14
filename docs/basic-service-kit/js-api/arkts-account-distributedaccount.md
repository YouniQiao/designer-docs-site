# @ohos.account.distributedAccount

The **distributedAccount** module provides APIs for managing distributed accounts, including querying and updating account login states.

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getDistributedAccountAbility](arkts-basicservices-getdistributedaccountability-f.md#getdistributedaccountability-1) | Obtains a **DistributedAccountAbility** instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [DistributedAccountAbility](arkts-basicservices-distributedaccountability-i.md) | Provides APIs for querying and updating the login state of a distributed account. You must obtain a **DistributedAccountAbility** instance first. |
| [DistributedInfo](arkts-basicservices-distributedinfo-i.md) | Represents the distributed information about an OS account. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DistributedAccountAbility](arkts-basicservices-distributedaccountability-i-sys.md) | Provides APIs for querying and updating the login state of a distributed account. You must obtain a **DistributedAccountAbility** instance first. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [DistributedAccountStatus](arkts-basicservices-distributedaccountstatus-e.md) | Enumerates the statuses of a distributed account. |

