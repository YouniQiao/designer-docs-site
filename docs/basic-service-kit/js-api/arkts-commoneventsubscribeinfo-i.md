# CommonEventSubscribeInfo

用于表示订阅者的信息。 > **说明：** > > 订阅自定义公共事件后，任意应用都可以向订阅者发送潜在的恶意公共事件。通过本模块的publisherPermission和publisherBundleName参数，可以限制公共事件发布方的范围。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

## publisherDeviceId

```TypeScript
publisherDeviceId?: string
```

表示设备ID。通过[@ohos.deviceInfo]./../@ohos.deviceInfo:deviceInfo获取udid，作为订阅者的设备ID。预留能力，暂不支持。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## priority

```TypeScript
priority?: int
```

表示订阅者的优先级。值的范围是-100到1000，超过上下限的优先级将被设置为上下限值。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## publisherPermission

```TypeScript
publisherPermission?: string
```

表示发布者的权限，订阅方将只能接收到具有该权限的发送方发布的事件。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## userId

```TypeScript
userId?: int
```

表示用户ID。此参数是可选的，默认值当前用户的ID。如果指定了此参数，则该值必须是系统中现有的用户ID。通过 [getOsAccountLocalId]./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>) 获取系统账号ID，作为订阅者的用户ID。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## events

```TypeScript
events: Array<string>
```

表示要订阅的公共事件。

**Type:** Array<string>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## publisherBundleName

```TypeScript
publisherBundleName?: string
```

表示要订阅的发布者的bundleName。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

