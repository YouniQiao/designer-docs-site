# AuthOptions

表示 [认证用户]osAccount.UserAuth.auth( challenge: Uint8Array, authType: AuthType, authTrustLevel: AuthTrustLevel, options: AuthOptions, callback: IUserAuthCallback ) 的可选参数集合。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## accountId

```TypeScript
accountId?: int
```

系统账号标识，默认为undefined。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## authIntent

```TypeScript
authIntent?: AuthIntent
```

认证意图，默认为undefined。

**Type:** AuthIntent

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## additionalInfo

```TypeScript
additionalInfo?: string
```

表示有关身份验证选项的附加信息。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## remoteAuthOptions

```TypeScript
remoteAuthOptions?: RemoteAuthOptions
```

远程认证选项，默认为undefined。

**Type:** RemoteAuthOptions

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

