# SubscribedAbstractProperty

SubscribedAbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中同步的属性。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## aboutToBeDeleted

```TypeScript
abstract aboutToBeDeleted(): void
```

取消[SubscribedAbstractProperty](arkts-subscribedabstractproperty-c-sys.md#SubscribedAbstractProperty)实例对 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)的单/双向同步关系，并无效化SubscribedAbstractProperty实例，即当调用 aboutToBeDeleted方法之后不能再使用SubscribedAbstractProperty实例调用[set](arkts-localstorage-c.md#set)或[get](arkts-localstorage-c.md#get)方 法。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

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

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | 否 | Variable properties. |
| info | string | 否 | Variable information. |

## createOneWaySync

```TypeScript
createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>
```

创建单向同步时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | 否 | 变量属性。 |
| info | string | 否 | 变量信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SyncedPropertyOneWay&lt;T> | 返回单向同步属性。 |

## createTwoWaySync

```TypeScript
createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>
```

创建双向同步时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscribeMe | IPropertySubscriber | 否 | 变量属性。 |
| info | string | 否 | 变量信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SyncedPropertyTwoWay&lt;T> | 返回双向同步属性。 |

## get

```TypeScript
abstract get(): T
```

读取从[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | AppStorage/LocalStorage同步属性的数据。 |

## id

```TypeScript
id(): number
```

当输入用户ID时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## info

```TypeScript
info(): string
```

返回属性名称。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 属性名称。 |

## notifyHasChanged

```TypeScript
protected notifyHasChanged(newValue: T): void
```

通知变化时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| newValue | T | 是 | 更改后的新值。 |

## notifyPropertyRead

```TypeScript
protected notifyPropertyRead(): void
```

通知读取时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## numberOfSubscrbers

```TypeScript
numberOfSubscrbers(): number
```

获取订阅者数量时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 返回订阅者数量。 |

## set

```TypeScript
abstract set(newValue: T): void
```

设置[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据，newValue必须是T类型，从API version 12开始可以为null或 undefined。 > **说明：** > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| newValue | T | 是 | 要设置的数据，从API version 12开始可以为null或undefined。 |

## unlinkSuscriber

```TypeScript
unlinkSuscriber(subscriberId: number): void
```

变量解除订阅时调用。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriberId | number | 是 | 变量id。 |

## id_

```TypeScript
private id_
```

私有成员变量id_。

**类型：** null

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## info_

```TypeScript
private info_?
```

变量信息。

**类型：** null

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## subscribers_

```TypeScript
protected subscribers_: Set<number>
```

订阅者集合。

**类型：** Set<number>

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

