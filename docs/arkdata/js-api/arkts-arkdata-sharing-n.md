# sharing

Provides APIs for device-cloud data sharing, including sharing or unsharing data, exiting a share, changing the privilege on the shared data, querying participants, confirming an invitation, changing the invitation confirmation state, and querying the shared resource.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [allocResourceAndShare](arkts-arkdata-allocresourceandshare-f-sys.md#allocresourceandshare-1) | Allocates a shared resource ID based on the data that matches the specified predicates. This API uses a promise to return the result set of the data to share, which also includes the column names if they are specified. |
| [allocResourceAndShare](arkts-arkdata-allocresourceandshare-f-sys.md#allocresourceandshare-2) | Allocates a shared resource ID based on the data that matches the specified predicates. This API uses an asynchronous callback to return the result. |
| [allocResourceAndShare](arkts-arkdata-allocresourceandshare-f-sys.md#allocresourceandshare-3) | Allocates a shared resource ID based on the data that matches the specified predicates. This API uses an asynchronous callback to return the result set of the data to share, which includes the shared resource ID and column names. |
| [share](arkts-arkdata-share-f-sys.md#share-1) | Shares data based on the specified shared resource ID and participants. This API uses an asynchronous callback to return the result. |
| [share](arkts-arkdata-share-f-sys.md#share-2) | Shares data based on the specified shared resource ID and participants. This API uses a promise to return the result. |
| [unshare](arkts-arkdata-unshare-f-sys.md#unshare-1) | Unshares data based on the specified shared resource ID and participants. This API uses an asynchronous callback to return the result. |
| [unshare](arkts-arkdata-unshare-f-sys.md#unshare-2) | Unshares data based on the specified shared resource ID and participants. This API uses a promise to return the result. |
| [exit](arkts-arkdata-exit-f-sys.md#exit-1) | Exits the share of the specified shared resource. This API uses an asynchronous callback to return the result. |
| [exit](arkts-arkdata-exit-f-sys.md#exit-2) | Exits the share of the specified shared resource. This API uses a promise to return the result. |
| [changePrivilege](arkts-arkdata-changeprivilege-f-sys.md#changeprivilege-1) | Changes the privilege on the shared data. This API uses an asynchronous callback to return the result. |
| [changePrivilege](arkts-arkdata-changeprivilege-f-sys.md#changeprivilege-2) | Changes the privilege on the shared data. This API uses a promise to return the result. |
| [queryParticipants](arkts-arkdata-queryparticipants-f-sys.md#queryparticipants-1) | Queries the participants of the specified shared data. This API uses an asynchronous callback to return the result. |
| [queryParticipants](arkts-arkdata-queryparticipants-f-sys.md#queryparticipants-2) | Queries the participants of the specified shared data. This API uses a promise to return the result. |
| [queryParticipantsByInvitation](arkts-arkdata-queryparticipantsbyinvitation-f-sys.md#queryparticipantsbyinvitation-1) | Queries the participants based on the sharing invitation code. This API uses an asynchronous callback to return the result. |
| [queryParticipantsByInvitation](arkts-arkdata-queryparticipantsbyinvitation-f-sys.md#queryparticipantsbyinvitation-2) | Queries the participants based on the sharing invitation code. This API uses a promise to return the result. |
| [confirmInvitation](arkts-arkdata-confirminvitation-f-sys.md#confirminvitation-1) | Confirms the invitation based on the sharing invitation code and obtains the shared resource ID. This API uses an asynchronous callback to return the result. |
| [confirmInvitation](arkts-arkdata-confirminvitation-f-sys.md#confirminvitation-2) | Confirms the invitation based on the sharing invitation code and obtains the shared resource ID. This API uses a promise to return the result. |
| [changeConfirmation](arkts-arkdata-changeconfirmation-f-sys.md#changeconfirmation-1) | Changes the invitation confirmation state based on the shared resource ID. This API uses an asynchronous callback to return the result. |
| [changeConfirmation](arkts-arkdata-changeconfirmation-f-sys.md#changeconfirmation-2) | Changes the invitation confirmation state based on the shared resource ID. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Result](arkts-arkdata-result-i-sys.md) | Represents the device-cloud sharing result. |
| [Privilege](arkts-arkdata-privilege-i-sys.md) | Defines the privilege (permissions) on the shared data. |
| [Participant](arkts-arkdata-participant-i-sys.md) | Represents information about a participant of device-cloud sharing. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [Role](arkts-arkdata-role-e-sys.md) | Enumerates the roles of the participants in a device-cloud share. |
| [State](arkts-arkdata-state-e-sys.md) | Enumerates the device-cloud sharing states. |
| [SharingCode](arkts-arkdata-sharingcode-e-sys.md) | Enumerates the error codes for device-cloud sharing. |
<!--DelEnd-->

