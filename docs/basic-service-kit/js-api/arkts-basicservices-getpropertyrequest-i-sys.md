# GetPropertyRequest (System API)

Defines the request for obtaining property information.

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## accountId

```TypeScript
accountId?: number
```

OS account ID, which is **undefined** by default.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## authType

```TypeScript
authType: AuthType
```

Authentication credential type.

**Type:** AuthType

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## keys

```TypeScript
keys: Array<GetPropertyType>
```

An array of the types of the properties to obtain.

**Type:** Array<GetPropertyType>

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

