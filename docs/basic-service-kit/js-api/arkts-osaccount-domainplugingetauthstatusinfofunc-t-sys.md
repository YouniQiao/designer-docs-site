# DomainPluginGetAuthStatusInfoFunc

```TypeScript
type DomainPluginGetAuthStatusInfoFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<AuthStatusInfo>) => void
```

查询指定域账号的认证状态信息。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示域账号信息。 |
| callback | AsyncCallback&lt;AuthStatusInfo> | Yes | 表示查询结果回调。 |

