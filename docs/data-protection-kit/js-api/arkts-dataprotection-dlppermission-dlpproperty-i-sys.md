# DLPProperty (System API)

Represents the authorization information.

**Since:** 21

<!--Device-dlpPermission-export interface DLPProperty--><!--Device-dlpPermission-export interface DLPProperty-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## actionUponExpiry

```TypeScript
actionUponExpiry?: ActionType
```

Whether the file can be opened after the permission expires (with the editing permission). This parameter is valid only when **expireTime** is not empty. This parameter is left empty by default.

**Type:** ActionType

**Since:** 21

<!--Device-DLPProperty-actionUponExpiry?: ActionType--><!--Device-DLPProperty-actionUponExpiry?: ActionType-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## authUserList

```TypeScript
authUserList?: Array<AuthUser>
```

List of users who are authorized to access the DLP file. By default, this parameter is left blank.

**Type:** Array<AuthUser>

**Since:** 21

<!--Device-DLPProperty-authUserList?: Array<AuthUser>--><!--Device-DLPProperty-authUserList?: Array<AuthUser>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## contactAccount

```TypeScript
contactAccount: string
```

Account of the contact. The value contains 1 to 255 bytes. If the value is out of range, error code 401is thrown.

**Type:** string

**Since:** 21

<!--Device-DLPProperty-contactAccount: string--><!--Device-DLPProperty-contactAccount: string-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## everyoneAccessList

```TypeScript
everyoneAccessList?: Array<DLPFileAccess>
```

Permission granted to everyone. This parameter is left blank by default.

**Type:** Array<DLPFileAccess>

**Since:** 21

<!--Device-DLPProperty-everyoneAccessList?: Array<DLPFileAccess>--><!--Device-DLPProperty-everyoneAccessList?: Array<DLPFileAccess>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## expireTime

```TypeScript
expireTime?: number
```

Timestamp when the file permission has expired. This parameter is left blank by default. The value must be greater than or equal to 0. If the value is out of range, an error code is thrown. Unit: s.

**Type:** number

**Since:** 21

<!--Device-DLPProperty-expireTime?: number--><!--Device-DLPProperty-expireTime?: number-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## offlineAccess

```TypeScript
offlineAccess: boolean
```

Whether the file can be accessed offline. **true**: yes; **false**: no.

**Type:** boolean

**Since:** 21

<!--Device-DLPProperty-offlineAccess: boolean--><!--Device-DLPProperty-offlineAccess: boolean-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## ownerAccount

```TypeScript
ownerAccount: string
```

Account of the owner who can set the permission. The value contains 1 to 255 bytes. If the value is out of range, error code 401 is thrown.

**Type:** string

**Since:** 21

<!--Device-DLPProperty-ownerAccount: string--><!--Device-DLPProperty-ownerAccount: string-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## ownerAccountID

```TypeScript
ownerAccountID: string
```

Account ID of the owner. The value contains a maximum of 255 bytes. If the value is out of range, error code401 is thrown.

**Type:** string

**Since:** 21

<!--Device-DLPProperty-ownerAccountID: string--><!--Device-DLPProperty-ownerAccountID: string-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## ownerAccountType

```TypeScript
ownerAccountType: AccountType
```

Account type of the owner.

**Type:** AccountType

**Since:** 21

<!--Device-DLPProperty-ownerAccountType: AccountType--><!--Device-DLPProperty-ownerAccountType: AccountType-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

