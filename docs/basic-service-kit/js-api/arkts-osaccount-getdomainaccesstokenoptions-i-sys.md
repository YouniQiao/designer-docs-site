# GetDomainAccessTokenOptions

表示获取域访问令牌的选项。

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## domainAccountInfo

```TypeScript
domainAccountInfo: DomainAccountInfo
```

域账号的信息。

**Type:** DomainAccountInfo

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## domainAccountToken

```TypeScript
domainAccountToken: Uint8Array
```

域账号的令牌。

**Type:** Uint8Array

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## businessParams

```TypeScript
businessParams: Record<string, Object>
```

业务参数，由业务方根据请求协议自定义。

**Type:** Record<string, Object>

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

```TypeScript
businessParams: Record<string, RecordData>
```

业务参数，由业务方根据请求协议自定义。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## callerUid

```TypeScript
callerUid: int
```

调用方唯一标识符。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

