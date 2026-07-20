# @ohos.account.distributedAccount

The **distributedAccount** module provides APIs for managing distributed accounts, including querying and updating account login states.

**Since:** 7

<!--Device-unnamed-declare namespace distributedAccount--><!--Device-unnamed-declare namespace distributedAccount-End-->

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getDistributedAccountAbility](arkts-basicservices-distributedaccount-getdistributedaccountability-f.md#getdistributedaccountability-1) | Obtains a **DistributedAccountAbility** instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [DistributedAccountAbility](arkts-basicservices-distributedaccount-distributedaccountability-i.md) | Provides APIs for querying and updating the login state of a distributed account. You must obtain a **DistributedAccountAbility** instance first. |
| [DistributedInfo](arkts-basicservices-distributedaccount-distributedinfo-i.md) | Represents the distributed information about an OS account. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DistributedAccountAbility](arkts-basicservices-distributedaccount-distributedaccountability-i-sys.md) | Provides APIs for querying and updating the login state of a distributed account. You must obtain a **DistributedAccountAbility** instance first. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [DistributedAccountStatus](arkts-basicservices-distributedaccount-distributedaccountstatus-e.md) | Enumerates the statuses of a distributed account. |

