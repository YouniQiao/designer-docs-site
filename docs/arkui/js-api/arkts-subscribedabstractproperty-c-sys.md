# SubscribedAbstractProperty

SubscribedAbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中同步的属性。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## aboutToBeDeleted

```TypeScript
abstract aboutToBeDeleted(): void
```

取消[SubscribedAbstractProperty](arkts-subscribedabstractproperty-c-sys.md#SubscribedAbstractProperty)实例对 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)的单/双向同步关系，并无效化SubscribedAbstractProperty实例，即当调用 aboutToBeDeleted方法之后不能再使用SubscribedAbstractProperty实例调用[set](arkts-localstorage-c.md#set)或[get](arkts-localstorage-c.md#get)方 法。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | No | Variable properties. |
| info | string | No | Variable information. |

## createOneWaySync

```TypeScript
createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>
```

创建单向同步时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | No | 变量属性。 |
| info | string | No | 变量信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| SyncedPropertyOneWay&lt;T> | 返回单向同步属性。 |

## createTwoWaySync

```TypeScript
createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>
```

创建双向同步时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | No | 变量属性。 |
| info | string | No | 变量信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| SyncedPropertyTwoWay&lt;T> | 返回双向同步属性。 |

## get

```TypeScript
abstract get(): T
```

读取从[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| T | AppStorage/LocalStorage同步属性的数据。 |

## id

```TypeScript
id(): number
```

当输入用户ID时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## info

```TypeScript
info(): string
```

返回属性名称。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 属性名称。 |

## notifyHasChanged

```TypeScript
protected notifyHasChanged(newValue: T): void
```

通知变化时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | 更改后的新值。 |

## notifyPropertyRead

```TypeScript
protected notifyPropertyRead(): void
```

通知读取时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## numberOfSubscrbers

```TypeScript
numberOfSubscrbers(): number
```

获取订阅者数量时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回订阅者数量。 |

## set

```TypeScript
abstract set(newValue: T): void
```

设置[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据，newValue必须是T类型，从API version 12开始可以为null或 undefined。 > **说明：** > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | 要设置的数据，从API version 12开始可以为null或undefined。 |

## unlinkSuscriber

```TypeScript
unlinkSuscriber(subscriberId: number): void
```

变量解除订阅时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriberId | number | Yes | 变量id。 |

## id_

```TypeScript
private id_
```

私有成员变量id_。

**Type:** null

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## info_

```TypeScript
private info_?
```

变量信息。

**Type:** null

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## subscribers_

```TypeScript
protected subscribers_: Set<number>
```

订阅者集合。

**Type:** Set<number>

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

