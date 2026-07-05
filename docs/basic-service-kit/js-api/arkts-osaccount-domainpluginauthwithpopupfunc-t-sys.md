# DomainPluginAuthWithPopupFunc

```TypeScript
type DomainPluginAuthWithPopupFunc = (domainAccountInfo: DomainAccountInfo,
    callback: IUserAuthCallback) => void
```

弹窗认证指定的域账号。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| callback | IUserAuthCallback | Yes | 表示认证结果回调。 |

