# DomainPluginAuthWithTokenFunc

```TypeScript
type DomainPluginAuthWithTokenFunc = (domainAccountInfo: DomainAccountInfo,
    token: Uint8Array, callback: IUserAuthCallback) => void
```

使用授权令牌认证指定的域账号。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| token | Uint8Array | Yes | 表示PIN码或生物识别认证成功时生成的授权令牌。 |
| callback | IUserAuthCallback | Yes | 表示认证结果回调。 |

