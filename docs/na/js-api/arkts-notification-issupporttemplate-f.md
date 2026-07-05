# isSupportTemplate

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void
```

在使用[通知模板]./notification/notificationTemplate:NotificationTemplate发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isSupportTemplate

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | 模板名称。当前仅支持'downloadTemplate'。 |
| callback | AsyncCallback&lt;boolean> | Yes | 查询模板是否存在的回调函数。 |

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string): Promise<boolean>
```

在使用[通知模板]./notification/notificationTemplate:NotificationTemplate发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isSupportTemplate

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | 模板名称。当前仅支持'downloadTemplate'。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise方式返回模板是否存在的结果。 |

