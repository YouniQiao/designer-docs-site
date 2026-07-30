# SubscribedAbstractProperty (System API)

Represents a synchronized property from [AppStorage](../../../ui/state-management/arkts-appstorage.md) or [LocalStorage](../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

<!--Device-unnamed-declare abstract class SubscribedAbstractProperty<T>--><!--Device-unnamed-declare abstract class SubscribedAbstractProperty<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## constructor

```TypeScript
constructor(
    /**
     * Subscriber IPropertySubscriber.
     *
     **** 
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * Subscriber info.
     *
     **** 
     */
    info?: string,
  )
```

Constructor.

**Since:** 7

<!--Device-SubscribedAbstractProperty-constructor(    /**     * Subscriber IPropertySubscriber.     *     ****      */    subscribeMe?: IPropertySubscriber,    /**     * Subscriber info.     *     ****      */    info?: string,  )--><!--Device-SubscribedAbstractProperty-constructor(    /**     * Subscriber IPropertySubscriber.     *     ****      */    subscribeMe?: IPropertySubscriber,    /**     * Subscriber info.     *     ****      */    info?: string,  )-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Variable properties. |
| info | string | No | Variable information. |

## createOneWaySync

```TypeScript
createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>
```

Creates one-way synchronization.

**Since:** 7

<!--Device-SubscribedAbstractProperty-createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>--><!--Device-SubscribedAbstractProperty-createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Variable properties. |
| info | string | No | Variable information. |

**Return value:**

| Type | Description |
| --- | --- |
| [SyncedPropertyOneWay](arkts-arkui-syncedpropertyoneway-c-sys.md)&lt;T&gt; | One-way synchronized property. |

## createTwoWaySync

```TypeScript
createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>
```

Creates two-way synchronization.

**Since:** 7

<!--Device-SubscribedAbstractProperty-createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>--><!--Device-SubscribedAbstractProperty-createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Variable properties. |
| info | string | No | Variable information. |

**Return value:**

| Type | Description |
| --- | --- |
| [SyncedPropertyTwoWay](arkts-arkui-syncedpropertytwoway-c-sys.md)&lt;T&gt; | Two-way synchronized property. |

## id

```TypeScript
id(): number
```

Called when the subscriber ID is entered.

**Since:** 7

<!--Device-SubscribedAbstractProperty-id(): number--><!--Device-SubscribedAbstractProperty-id(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | @syscap SystemCapability.ArkUI.ArkUI.Full@systemapi@FaAndStageModel |

## notifyHasChanged

```TypeScript
protected notifyHasChanged(newValue: T): void
```

Notifies subscribers that the value has changed.

**Since:** 7

<!--Device-SubscribedAbstractProperty-protected notifyHasChanged(newValue: T): void--><!--Device-SubscribedAbstractProperty-protected notifyHasChanged(newValue: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | New value after the change. |

## notifyPropertyRead

```TypeScript
protected notifyPropertyRead(): void
```

Notifies subscribers that the property has been read.

**Since:** 7

<!--Device-SubscribedAbstractProperty-protected notifyPropertyRead(): void--><!--Device-SubscribedAbstractProperty-protected notifyPropertyRead(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## numberOfSubscrbers

```TypeScript
numberOfSubscrbers(): number
```

Obtains the number of subscribers.

**Since:** 7

<!--Device-SubscribedAbstractProperty-numberOfSubscrbers(): number--><!--Device-SubscribedAbstractProperty-numberOfSubscrbers(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of subscribers. |

## unlinkSuscriber

```TypeScript
unlinkSuscriber(subscriberId: number): void
```

Removes a subscriber.

**Since:** 7

<!--Device-SubscribedAbstractProperty-unlinkSuscriber(subscriberId: number): void--><!--Device-SubscribedAbstractProperty-unlinkSuscriber(subscriberId: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriberId | number | Yes | ID of the subscriber to remove. |

## id_

```TypeScript
private id_
```

Private member variable ID.

**Since:** 7

<!--Device-SubscribedAbstractProperty-private id_--><!--Device-SubscribedAbstractProperty-private id_-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## info_

```TypeScript
private info_?
```

Variable information.

**Since:** 7

<!--Device-SubscribedAbstractProperty-private info_?--><!--Device-SubscribedAbstractProperty-private info_?-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## subscribers_

```TypeScript
protected subscribers_: Set<number>
```

A set of subscribers.

**Type:** Set&lt;number&gt;

**Since:** 7

<!--Device-SubscribedAbstractProperty-protected subscribers_: Set<number>--><!--Device-SubscribedAbstractProperty-protected subscribers_: Set<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

