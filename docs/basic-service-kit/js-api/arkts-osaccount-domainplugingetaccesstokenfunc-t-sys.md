# DomainPluginGetAccessTokenFunc

```TypeScript
type DomainPluginGetAccessTokenFunc = (options: GetDomainAccessTokenOptions,
    callback: AsyncCallback<Uint8Array>) => void
```

根据指定的选项获取域访问令牌。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetDomainAccessTokenOptions | Yes | 表示获取域访问令牌的选项。 |
| callback | AsyncCallback&lt;Uint8Array> | Yes | 表示结果回调。 |

