# DomainPluginGetAccountInfoFunc

```TypeScript
type DomainPluginGetAccountInfoFunc = (options: GetDomainAccountInfoPluginOptions,
    callback: AsyncCallback<DomainAccountInfo>) => void
```

查询指定域账号的信息。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetDomainAccountInfoPluginOptions | Yes | 表示域账号信息。 |
| callback | AsyncCallback&lt;DomainAccountInfo> | Yes | 表示查询结果回调。 |

