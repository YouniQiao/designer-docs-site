# CommonEventSubscribeInfo

The **CommonEventSubscribeInfo** module provides APIs for providing subscriber information.

> **NOTE**  
>  
> After users subscribing to custom common events, any application can send potential malicious common events to  
> subscribers. Use the **publisherPermission** and **publisherBundleName** parameters of this module to restrict the  
> publishing scope of common events.

**Since:** 7

<!--Device-unnamed-export interface CommonEventSubscribeInfo--><!--Device-unnamed-export interface CommonEventSubscribeInfo-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## events

```TypeScript
events: Array<string>
```

Common events to subscribe to.

**Type:** Array<string>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-events: Array<string>--><!--Device-CommonEventSubscribeInfo-events: Array<string>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## priority

```TypeScript
priority?: number
```

Subscriber priority. The value ranges from –100 to +1000. If the value exceeds the upper or lower limit, the upper or lower limit is used.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-priority?: int--><!--Device-CommonEventSubscribeInfo-priority?: int-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## publisherBundleName

```TypeScript
publisherBundleName?: string
```

Bundle name of the publisher to subscribe to.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-publisherBundleName?: string--><!--Device-CommonEventSubscribeInfo-publisherBundleName?: string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## publisherDeviceId

```TypeScript
publisherDeviceId?: string
```

Device ID. Use [@ohos.deviceInfo](arkts-deviceinfo.md) to obtain the UDID as the device ID of the subscriber. Not supported currently.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-publisherDeviceId?: string--><!--Device-CommonEventSubscribeInfo-publisherDeviceId?: string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## publisherPermission

```TypeScript
publisherPermission?: string
```

Permission of the publisher. The subscriber can receive only the events from the publisher with this permission.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-publisherPermission?: string--><!--Device-CommonEventSubscribeInfo-publisherPermission?: string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## userId

```TypeScript
userId?: number
```

User ID. If this parameter is not specified, the default value, which is the ID of the current user, will be used.The value must be an existing user ID in the system. Use [getOsAccountLocalId](arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1)to obtain the system account ID and use it as the user ID of the subscriber.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscribeInfo-userId?: int--><!--Device-CommonEventSubscribeInfo-userId?: int-End-->

**System capability:** SystemCapability.Notification.CommonEvent

