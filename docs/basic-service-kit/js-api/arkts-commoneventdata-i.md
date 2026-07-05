# CommonEventData

表示公共事件的数据。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

## code

```TypeScript
code?: int
```

表示订阅者接收到的公共事件数据（number类型）。该字段取值与发布者使用 [commonEventManager.publish]./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>) 发布公共事件时，通过[CommonEventPublishData](arkts-commoneventpublishdata-i.md#CommonEventPublishData)中的`code`字段传递的数据一致。默认值为0。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## data

```TypeScript
data?: string
```

表示订阅者接收到的公共事件数据（string类型）。该字段取值与发布者使用 [commonEventManager.publish]./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>) 发布公共事件时，通过[CommonEventPublishData](arkts-commoneventpublishdata-i.md#CommonEventPublishData)中的`data`字段传递的数据一致。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## bundleName

```TypeScript
bundleName?: string
```

表示包名称，默认为空字符串。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## event

```TypeScript
event: string
```

表示当前接收的公共事件名称。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

## parameters

```TypeScript
parameters?: { [key: string]: any }
```

表示订阅者接收到的公共事件的附加信息。该字段取值与发布者使用 [commonEventManager.publish]./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>) 发布公共事件时，通过[CommonEventPublishData](arkts-commoneventpublishdata-i.md#CommonEventPublishData)中的`parameters`字段传递的数据一致。

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

```TypeScript
parameters?: Record<string, RecordData>
```

表示订阅者接收到的公共事件的附加信息。该字段取值与发布者使用 [commonEventManager.publish]./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>) 发布公共事件时，通过[CommonEventPublishData](arkts-commoneventpublishdata-i.md#CommonEventPublishData)中的`parameters`字段传递的数据一致。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Notification.CommonEvent

