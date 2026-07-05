# DomainPluginUnbindAccountFunc

```TypeScript
type DomainPluginUnbindAccountFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<void>) => void
```

解绑指定的域账号。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| callback | AsyncCallback&lt;void> | Yes | 表示绑定结果回调。 |

