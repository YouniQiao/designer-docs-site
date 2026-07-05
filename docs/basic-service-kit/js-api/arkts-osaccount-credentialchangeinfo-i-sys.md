# CredentialChangeInfo

表示凭据变更信息。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## addedCredentialId

```TypeScript
addedCredentialId?: Uint8Array
```

表示添加的凭据ID，添加凭据和更新凭据操作都会返回该ID。默认为undefined。

**Type:** Uint8Array

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## credentialType

```TypeScript
credentialType: AuthType
```

表示凭据类型。

**Type:** AuthType

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## accountId

```TypeScript
accountId: int
```

表示系统账号标识。

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## changeType

```TypeScript
changeType: CredentialChangeType
```

表示凭据变更的类型。

**Type:** CredentialChangeType

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## isSilent

```TypeScript
isSilent: boolean
```

表示是否为静默变更，静默变更表示变更由系统在后台自动地发起。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## deletedCredentialId

```TypeScript
deletedCredentialId?: Uint8Array
```

表示删除的凭据ID，删除凭据和更新凭据操作都会返回该ID。默认为undefined。

**Type:** Uint8Array

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

