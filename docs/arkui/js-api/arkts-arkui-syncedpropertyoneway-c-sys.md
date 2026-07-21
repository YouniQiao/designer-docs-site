# SyncedPropertyOneWay (System API)

Inherits from [SubscribedAbstractProperty<T>](arkts-arkui-subscribedabstractproperty-c-sys.md). Represents a property with one-way synchronization.

**Inheritance/Implementation:** SyncedPropertyOneWay extends [SubscribedAbstractProperty<T>](SubscribedAbstractProperty<T>) and implements [ISinglePropertyChangeSubscriber<T>](ISinglePropertyChangeSubscriber<T>)

**Since:** 7

<!--Device-unnamed-declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>  implements ISinglePropertyChangeSubscriber<T>--><!--Device-unnamed-declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>  implements ISinglePropertyChangeSubscriber<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="abouttobedeleted"></a>
## aboutToBeDeleted

```TypeScript
aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void
```

Called when the object is about to be destroyed.

**Since:** 7

<!--Device-SyncedPropertyOneWay-aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void--><!--Device-SyncedPropertyOneWay-aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unsubscribeMe | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Subscriber to remove. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string)
```

Constructor.

**Since:** 7

<!--Device-SyncedPropertyOneWay-constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string)--><!--Device-SyncedPropertyOneWay-constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | [SubscribedAbstractProperty](arkts-arkui-subscribedabstractproperty-c-sys.md)&lt;T&gt; | Yes | Data source for the one-way synchronized property. |
| subscribeMe | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Subscriber. |
| info | string | No | Additional information about the subscriber. |

<a id="get"></a>
## get

```TypeScript
get(): T
```

Obtains the current value of the property.

**Since:** 7

<!--Device-SyncedPropertyOneWay-get(): T--><!--Device-SyncedPropertyOneWay-get(): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| T | - Instance of the T type. |

<a id="haschanged"></a>
## hasChanged

```TypeScript
hasChanged(newValue: T): void
```

Notifies subscribers that the property value has changed.

**Since:** 7

<!--Device-SyncedPropertyOneWay-hasChanged(newValue: T): void--><!--Device-SyncedPropertyOneWay-hasChanged(newValue: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | Instance of the T type. |

<a id="set"></a>
## set

```TypeScript
set(newValue: T): void
```

Sets a new value for the property.

**Since:** 7

<!--Device-SyncedPropertyOneWay-set(newValue: T): void--><!--Device-SyncedPropertyOneWay-set(newValue: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | Instance of the T type. |

## source_

```TypeScript
private source_
```

Data source for the two-way synchronized property.

**Since:** 7

<!--Device-SyncedPropertyOneWay-private source_--><!--Device-SyncedPropertyOneWay-private source_-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## wrappedValue_

```TypeScript
private wrappedValue_
```

Value used for one-way binding.

**Since:** 7

<!--Device-SyncedPropertyOneWay-private wrappedValue_--><!--Device-SyncedPropertyOneWay-private wrappedValue_-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

