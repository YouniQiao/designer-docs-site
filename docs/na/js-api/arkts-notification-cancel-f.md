# cancel

## cancel

```TypeScript
function cancel(id: number, callback: AsyncCallback<void>): void
```

取消与指定通知ID相匹配的已发布通知（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 通知ID。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

## cancel

```TypeScript
function cancel(id: number, label: string, callback: AsyncCallback<void>): void
```

通过通知ID和通知标签取消已发布的通知（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 通知ID。 |
| label | string | Yes | 通知标签。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

## cancel

```TypeScript
function cancel(id: number, label?: string): Promise<void>
```

取消与指定通知ID相匹配的已发布通知，label可以指定也可以不指定（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancel

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 通知ID。 |
| label | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

