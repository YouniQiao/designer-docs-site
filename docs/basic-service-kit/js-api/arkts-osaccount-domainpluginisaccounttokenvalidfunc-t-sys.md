# DomainPluginIsAccountTokenValidFunc

```TypeScript
type DomainPluginIsAccountTokenValidFunc = (
    domainAccountInfo: DomainAccountInfo,
    token: Uint8Array,
    callback: AsyncCallback<boolean>
  ) => void
```

检查指定的域账号令牌是否有效。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| token | Uint8Array | Yes | 表示域账号令牌。 |
| callback | AsyncCallback&lt;boolean> | Yes | 表示检查结果回调。true表示指定的域账号令牌是有效的；false表示指定的域账号令牌是无效的。 |

