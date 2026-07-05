# sharing

提供端云共享的方法，包括发起共享、取消共享、退出共享、更改共享数据权限、查找共享参与者、确认邀请、更改已确认的邀请、查找共享资源。

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[allocResourceAndShare](arkts-sharing-allocresourceandshare-f-sys.md#allocResourceAndShare-1) | 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集。 如果指定了列字段，则返回的结果集中同时包含对应列的字段值，使用Promise异步回调。 |
| <!--DelRow-->[allocResourceAndShare](arkts-sharing-allocresourceandshare-f-sys.md#allocResourceAndShare-2) | 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集，使用callback异步回调。 |
| <!--DelRow-->[allocResourceAndShare](arkts-sharing-allocresourceandshare-f-sys.md#allocResourceAndShare-3) | 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集 并根据指定的列字段，返回的结果集中同时包含对应列的字段值，使用callback异步回调。 |
| <!--DelRow-->[changeConfirmation](arkts-sharing-changeconfirmation-f-sys.md#changeConfirmation-1) | 根据共享资源标识更改共享邀请的状态，使用callback异步回调。 |
| <!--DelRow-->[changeConfirmation](arkts-sharing-changeconfirmation-f-sys.md#changeConfirmation-2) | 根据共享资源标识更改共享邀请的状态，使用Promise异步回调。 |
| <!--DelRow-->[changePrivilege](arkts-sharing-changeprivilege-f-sys.md#changePrivilege-1) | 根据指定的共享资源标识更改共享参与者对共享数据的操作权限，使用callback异步回调。 |
| <!--DelRow-->[changePrivilege](arkts-sharing-changeprivilege-f-sys.md#changePrivilege-2) | 根据指定的共享资源标识更改共享参与者对共享数据的操作权限，使用Promise异步回调。 |
| <!--DelRow-->[confirmInvitation](arkts-sharing-confirminvitation-f-sys.md#confirmInvitation-1) | 被邀请者根据共享邀请码确认当前邀请，并获取当前邀请的共享资源标识，使用callback异步回调。 |
| <!--DelRow-->[confirmInvitation](arkts-sharing-confirminvitation-f-sys.md#confirmInvitation-2) | 被邀请者根据共享邀请码确认当前邀请，并获取当前邀请的共享资源标识，使用Promise异步回调。 |
| <!--DelRow-->[exit](arkts-sharing-exit-f-sys.md#exit-1) | 根据指定的共享资源标识退出共享，使用callback异步回调。 |
| <!--DelRow-->[exit](arkts-sharing-exit-f-sys.md#exit-2) | 根据指定的共享资源标识退出共享，使用Promise异步回调。 |
| <!--DelRow-->[queryParticipants](arkts-sharing-queryparticipants-f-sys.md#queryParticipants-1) | 根据指定的共享资源标识查询当前共享的参与者，使用callback异步回调。 |
| <!--DelRow-->[queryParticipants](arkts-sharing-queryparticipants-f-sys.md#queryParticipants-2) | 根据指定的共享资源标识查询当前共享的参与者，使用Promise异步回调。 |
| <!--DelRow-->[queryParticipantsByInvitation](arkts-sharing-queryparticipantsbyinvitation-f-sys.md#queryParticipantsByInvitation-1) | 根据指定的共享邀请码查询当前共享的参与者，使用callback异步回调。 |
| <!--DelRow-->[queryParticipantsByInvitation](arkts-sharing-queryparticipantsbyinvitation-f-sys.md#queryParticipantsByInvitation-2) | 根据指定的共享邀请码查询当前共享的参与者，使用Promise异步回调。 |
| <!--DelRow-->[share](arkts-sharing-share-f-sys.md#share-1) | 根据指定的共享资源标识和共享参与者发起共享邀请，使用callback异步回调。 |
| <!--DelRow-->[share](arkts-sharing-share-f-sys.md#share-2) | 根据指定的共享资源标识和共享参与者发起共享邀请，使用Promise异步回调。 |
| <!--DelRow-->[unshare](arkts-sharing-unshare-f-sys.md#unshare-1) | 根据指定的共享资源标识和共享参与者发起共享邀请，使用callback异步回调。 |
| <!--DelRow-->[unshare](arkts-sharing-unshare-f-sys.md#unshare-2) | 根据指定的共享资源标识和共享参与者发起共享邀请，使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Participant](arkts-sharing-participant-i-sys.md) | 端云共享的参与者。 |
| <!--DelRow-->[Privilege](arkts-sharing-privilege-i-sys.md) | 指定的端云共享数据的权限。 |
| <!--DelRow-->[Result](arkts-sharing-result-i-sys.md) | 端云共享结果的返回值。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Role](arkts-sharing-role-e-sys.md) | 端云共享参与者的角色。 |
| <!--DelRow-->[SharingCode](arkts-sharing-sharingcode-e-sys.md) | 端云共享错误码。 |
| <!--DelRow-->[State](arkts-sharing-state-e-sys.md) | 端云共享状态。 |

