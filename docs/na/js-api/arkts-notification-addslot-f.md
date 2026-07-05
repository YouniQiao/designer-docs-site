# addSlot

## addSlot

```TypeScript
function addSlot(type: SlotType, callback: AsyncCallback<void>): void
```

创建指定类型的通知通道（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SlotType | Yes | 要创建的通知通道的类型。 |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

## addSlot

```TypeScript
function addSlot(type: SlotType): Promise<void>
```

创建指定类型的通知通道（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#addSlot

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SlotType | Yes | 要创建的通知通道的类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

