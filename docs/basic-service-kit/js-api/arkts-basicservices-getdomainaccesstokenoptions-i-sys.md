# GetDomainAccessTokenOptions (System API)

Defines the options for obtaining a domain access token.

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## businessParams

```TypeScript
businessParams: Record<string, Object>
```

Service parameters customized by the service party based on the request protocol.

**Type:** Record<string, Object>

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## callerUid

```TypeScript
callerUid: number
```

Unique identifier of the caller.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## domainAccountInfo

```TypeScript
domainAccountInfo: DomainAccountInfo
```

Domain account information.

**Type:** DomainAccountInfo

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## domainAccountToken

```TypeScript
domainAccountToken: Uint8Array
```

Token of the domain account.

**Type:** Uint8Array

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

