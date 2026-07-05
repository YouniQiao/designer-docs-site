# SyncedPropertyTwoWay

继承自[SubscribedAbstractProperty<T>](arkts-subscribedabstractproperty-c-sys.md#SubscribedAbstractProperty)。用来定义变量状态的值。

**Inheritance:** SyncedPropertyTwoWayextends: SubscribedAbstractProperty<T>, implements: ISinglePropertyChangeSubscriber<T>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## aboutToBeDeleted

```TypeScript
aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void
```

销毁时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unsubscribeMe | IPropertySubscriber | No | 被取消的订阅者。 |

## constructor

```TypeScript
constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string)
```

构造函数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | SubscribedAbstractProperty&lt;T> | Yes | 双向同步属性的数据源。 |
| subscribeMe | IPropertySubscriber | No | 订阅者。 |
| info | string | No | 订阅者信息。 |

## get

```TypeScript
get(): T
```

获取数据时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| T | T类型实例。 |

## hasChanged

```TypeScript
hasChanged(newValue: T): void
```

变化时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | T类型实例。 |

## set

```TypeScript
set(newValue: T): void
```

赋值时调用。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | T类型实例。 |

## source_

```TypeScript
private source_
```

双向同步属性的数据源。

**Type:** null

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

