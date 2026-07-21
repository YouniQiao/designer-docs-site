# SubscribedAbstractProperty (System API)

Represents a synchronized property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).

**Since:** 9

<!--Device-unnamed-declare abstract class SubscribedAbstractProperty<T>--><!--Device-unnamed-declare abstract class SubscribedAbstractProperty<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="abouttobedeleted"></a>
## aboutToBeDeleted

```TypeScript
abstract aboutToBeDeleted(): void
```

Cancels the synchronization relationship between the [SubscribedAbstractProperty](arkts-arkui-subscribedabstractproperty-c-sys.md)instance and [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md), whether it is a one-way or two-way binding.After **aboutToBeDeleted** is called, the **SubscribedAbstractProperty** instance is invalidated, meaning it can no longer be used to call the [set](arkts-arkui-localstorage-c.md#set-1) or [get](arkts-arkui-localstorage-c.md#get-1) API.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SubscribedAbstractProperty-abstract aboutToBeDeleted(): void--><!--Device-SubscribedAbstractProperty-abstract aboutToBeDeleted(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="get"></a>
## get

```TypeScript
abstract get(): T
```

Reads the data of the synchronized property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-SubscribedAbstractProperty-abstract get(): T--><!--Device-SubscribedAbstractProperty-abstract get(): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| T | Data of the synchronized property in AppStorage or LocalStorage. |

<a id="info"></a>
## info

```TypeScript
info(): string
```

Property name.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SubscribedAbstractProperty-info(): string--><!--Device-SubscribedAbstractProperty-info(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Property name. |

<a id="set"></a>
## set

```TypeScript
abstract set(newValue: T): void
```

Sets the data of the synchronized property in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The value of **newValue** must be of the **T** type. Since API version 12, it can be **null** or **undefined**.

> **NOTE**

> Since API version 12, AppStorage and LocalStorage support the Map, Set, Date types, as well as **null**,  
> **undefined**, and union types.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-SubscribedAbstractProperty-abstract set(newValue: T): void--><!--Device-SubscribedAbstractProperty-abstract set(newValue: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | Data to set. Since API version 12, the value can be **null** or **undefined**. |

