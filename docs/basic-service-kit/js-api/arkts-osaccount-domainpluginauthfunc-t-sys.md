# DomainPluginAuthFunc

```TypeScript
type DomainPluginAuthFunc = (domainAccountInfo: DomainAccountInfo,
    credential: Uint8Array, callback: IUserAuthCallback) => void
```

认证指定的域账号。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| credential | Uint8Array | Yes | 表示域账号的凭据。 |
| callback | IUserAuthCallback | Yes | 表示认证结果回调。 |

