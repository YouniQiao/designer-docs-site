# DomainPluginGetAccountInfoFunc

```TypeScript
type DomainPluginGetAccountInfoFunc = (options: GetDomainAccountInfoPluginOptions,
    callback: AsyncCallback<DomainAccountInfo>) => void
```

查询指定域账号的信息。

**起始版本：** 23

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | GetDomainAccountInfoPluginOptions | 是 | 表示域账号信息。 |
| callback | AsyncCallback&lt;DomainAccountInfo> | 是 | 表示查询结果回调。 |

