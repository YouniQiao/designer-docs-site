# DomainPluginGetAuthStatusInfoFunc

```TypeScript
type DomainPluginGetAuthStatusInfoFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<AuthStatusInfo>) => void
```

查询指定域账号的认证状态信息。

**起始版本：** 23

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | 是 | 表示域账号信息。 |
| callback | AsyncCallback&lt;AuthStatusInfo> | 是 | 表示查询结果回调。 |

