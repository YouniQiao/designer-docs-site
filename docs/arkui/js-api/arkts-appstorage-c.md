# AppStorage

AppStorage具体UI使用说明，详见[AppStorage(应用全局的UI状态存储)](docroot://ui/state-management/arkts-appstorage.md)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Clear

```TypeScript
static Clear(): boolean
```

删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，Clear将 不会生效并返回false。如果没有订阅者且删除成功则返回true。 订阅者的含义参考[delete](arkts-appstorage-c.md#delete)。

**Since:** 9

**Deprecated since:** 10

**Substitute:** AppStorage#clear

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中的属性已经没有订阅者则删除成功，返回true。否则返回false。 |

## clear

```TypeScript
static clear(): boolean
```

删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，clear将 不会生效并返回false。如果没有订阅者，则删除成功，并返回true。 订阅者的含义参考[delete](arkts-appstorage-c.md#delete)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中的属性已经没有订阅者则删除成功，返回true；如果当前仍有订阅者，返回false。 |

## Delete

```TypeScript
static Delete(propName: string): boolean
```

在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中删除propName对应的属性。 在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。 属性的订阅者为[Link](arkts-appstorage-c.md#Link)、[Prop](arkts-appstorage-c.md#Prop)等接口绑定的propName，以及 [@StorageLink('propName')](docroot://ui/state-management/arkts-appstorage.md#storagelink)和 [@StorageProp('propName')](docroot://ui/state-management/arkts-appstorage.md#storageprop)。如果自定义组件中使用@StorageLink( 'propName')和@StorageProp('propName')或者SubscribedAbstractProperty实例依旧对propName有同步关系，则该属性不能从AppStorage中删除。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#delete

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。 |

## delete

```TypeScript
static delete(propName: string): boolean
```

在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中删除propName对应的属性。 在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者，则删除成功并返回true。 属性的订阅者为： 1. [@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink)、[@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop)装饰的变量。 2. 通过[link](arkts-appstorage-c.md#link)、[prop](arkts-appstorage-c.md#prop)、[setAndLink](arkts-appstorage-c.md#setAndLink)、[setAndProp](arkts-appstorage-c.md#setAndProp)接口返回的[SubscribedAbstractProperty](arkts-subscribedabstractproperty-c-sys.md#SubscribedAbstractProperty)的实例。 如果想要删除这些订阅者，可以通过以下方式： 1. 删除@StorageLink、@StorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。 2. 对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用[aboutToBeDeleted](arkts-subscribedabstractproperty-c-sys.md#aboutToBeDeleted)接口。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。 |

## Get

```TypeScript
static Get<T>(propName: string): T | undefined
```

获取propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的属性值。如果不存在则返回undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#get

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Value of the property corresponding to propName in AppStorage, or undefined if  it does not exist. |

## get

```TypeScript
static get<T>(propName: string): T | undefined
```

获取propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的属性值。如果不存在则返回undefined。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Value of the property corresponding to propName in AppStorage, or undefined if  it does not exist. |

## Has

```TypeScript
static Has(propName: string): boolean
```

判断propName对应的属性是否在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#has

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。 |

## has

```TypeScript
static has(propName: string): boolean
```

判断propName对应的属性是否在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。 |

## IsMutable

```TypeScript
static IsMutable(propName: string): boolean
```

返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中propName对应的属性是否是可变的。

**Since:** 7

**Deprecated since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回AppStorage中propName对应的属性是否是可变的。当前该返回值恒为true。 |

## Keys

```TypeScript
static Keys(): IterableIterator<string>
```

返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有的属性名。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#keys

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | AppStorage中所有的属性名。 |

## keys

```TypeScript
static keys(): IterableIterator<string>
```

返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有的属性名。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | AppStorage中所有的属性名。 |

## Link

```TypeScript
static Link(propName: string): any
```

与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回 与AppStorage中propName对应属性的双向绑定数据。 双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。 如果AppStorage中不存在propName，则返回undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#link

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| any | 返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。 |

## link

```TypeScript
static link<T>(propName: string): SubscribedAbstractProperty<T>
```

与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回 AppStorage中propName对应属性的双向绑定数据。 双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。 如果AppStorage中不存在propName，则返回undefined。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | 返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。 |

## Prop

```TypeScript
static Prop(propName: string): any
```

与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。 > **说明：** > Prop仅支持简单类型。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#prop

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| any | 返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。 |

## prop

```TypeScript
static prop<T>(propName: string): SubscribedAbstractProperty<T>
```

与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | 返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。 |

## ref

```TypeScript
static ref<T>(propName: string): AbstractProperty<T> | undefined
```

如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则返回AppStorage中propName对应属性的引用。否则，返 回undefined。 与[link](arkts-appstorage-c.md#link)的功能基本一致，但不需要手动释放返回的 [AbstractProperty<T>](@link AbstractProperty)类型的变量。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T> | A reference to the property in AppStorage, or undefined if the  property does not exist. |

## Set

```TypeScript
static Set<T>(propName: string, newValue: T): boolean
```

在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值，如果newValue的值和propName对应属性的值相同，即不需 要做赋值操作，状态变量不会通知UI刷新propName对应属性的值，从API version 12开始，newValue可以为null或undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#set

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| newValue | T | Yes | 属性值，从API version 12开始可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中不存在propName对应的属性，返回false。设置成功则返回true。 |

## set

```TypeScript
static set<T>(propName: string, newValue: T): boolean
```

在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值。如果newValue的值和propName对应属性的值相同，即不需 要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。 > **说明：** > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| newValue | T | Yes | 属性值，从API version 12开始可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果AppStorage中不存在propName对应的属性，或设值失败，则返回false。设置成功则返回true。 |

## SetAndLink

```TypeScript
static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
```

与[Link](arkts-appstorage-c.md#Link)接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存 在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其双向绑定数据。defaultValue必须为T类型，且不能为 null或undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#setAndLink

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在AppStorage中不存在，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为  null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | SubscribedAbstractProperty 的实例，和AppStorage中propName对应属性的双向绑定的数据。 |

## setAndLink

```TypeScript
static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
```

与[link](arkts-appstorage-c.md#link)接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存 在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其双向绑定数据。 > **说明：** > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开  始，defaultValue可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | SubscribedAbstractProperty 的实例，为AppStorage中propName对应属性的双向绑定的数据。 |

## SetAndProp

```TypeScript
static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>
```

与[Prop](arkts-appstorage-c.md#Prop)接口类似。如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。defaultValue必须为S类型，且不能为 null或undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#setAndProp

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| defaultValue | S | Yes | 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为  null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;S> | SubscribedAbstractProperty 的实例。 |

## setAndProp

```TypeScript
static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
```

与[prop](arkts-appstorage-c.md#prop)接口类似。如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。 > **说明：** > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开  始，defaultValue可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | SubscribedAbstractProperty 的实例。 |

## setAndRef

```TypeScript
static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>
```

与[ref](arkts-appstorage-c.md#ref)接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则 返回AppStorage中propName对应属性的引用。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其引用。 与[setAndLink](arkts-appstorage-c.md#setAndLink)的功能基本一致，但不需要手动释放返回的 [AbstractProperty<T>](@link AbstractProperty)类型的变量。 > **说明：** > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue可以为  null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T> | AbstractProperty 的实例，为AppStorage中propName对应属性的引用。 |

## SetOrCreate

```TypeScript
static SetOrCreate<T>(propName: string, newValue: T): void
```

如果propName已经在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则设置propName对应的属性值为newValue。如果不存在，则创 建propName属性，值为newValue。 newValue不能为null或undefined。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#setOrCreate

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| newValue | T | Yes | 属性值，不能为null或undefined。 |

## setOrCreate

```TypeScript
static setOrCreate<T>(propName: string, newValue: T): void
```

如果propName已经在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，并且newValue和propName对应属性的值不同，则设置 propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。 如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个AppStorage的键值对，如果想创建多个AppStorage键值对，可以多次调用此方法。 > **说明：** > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | AppStorage中的属性名。 |
| newValue | T | Yes | 属性值，从API version 12开始可以为null或undefined。 |

## Size

```TypeScript
static Size(): number
```

返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中的属性数量。

**Since:** 7

**Deprecated since:** 10

**Substitute:** AppStorage#size

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回AppStorage中属性的数量。 |

## size

```TypeScript
static size(): number
```

返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中的属性数量。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回AppStorage中属性的数量。 |

## staticClear

```TypeScript
static staticClear(): boolean
```

删除所有的属性。

**Since:** 7

**Deprecated since:** 9

**Substitute:** AppStorage.Clear

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 删除所有的属性。如果删除成功，返回true；如果当前有状态变量依旧引用此属性，返回false。 |

