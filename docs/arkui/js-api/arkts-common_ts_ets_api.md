# common_ts_ets_api

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppStorage](arkts-appstorage-c.md) | AppStorage具体UI使用说明，详见[AppStorage(应用全局的UI状态存储)](docroot://ui/state-management/arkts-appstorage.md) |
| [Environment](arkts-environment-c.md) | Environment具体使用说明，详见[Environment(设备环境查询)](docroot://ui/state-management/arkts-environment.md) ###### 内置环境变量说明 | key | 类型 | 说明 | | -------------------- | --------------- | ------------------------------------------------------------ | | accessibilityEnabled | string | 无障碍屏幕朗读是否启用。当无法获取环境变量中的accessibilityEnabled的值时，将通过envProp、envProps等接口传入的开发者指定的默认值添加到AppStorage中。 | | colorMode | [ColorMode](@link ColorMode) | 深浅色模式，可选值为：<br/>- ColorMode.LIGHT：浅色模式；<br/>- ColorMode.DARK：深色模式。 | | fontScale | number | 字体大小比例。 | | fontWeightScale | number | 字重比例。 | | layoutDirection | [LayoutDirection](@link LayoutDirection) | 布局方向类型，可选值为：<br/>- LayoutDirection.LTR：从左到右；<br/>- LayoutDirection.RTL：从右到左。<br/>- Auto：跟随系统。 | | languageCode | string | 当前系统语言，小写字母，例如zh。 |
| [LocalStorage](arkts-localstorage-c.md) | LocalStorage具体UI使用说明，详见[LocalStorage(页面级UI状态存储)](docroot://ui/state-management/arkts-localstorage.md) |
| [PersistentStorage](arkts-persistentstorage-c.md) | PersistentStorage具体UI使用说明，详见[PersistentStorage(持久化存储UI状态)](docroot://ui/state-management/arkts-persiststorage.md) > **说明：** > 从API version 12开始，PersistentStorage支持null、undefined。 |
| <!--DelRow-->[SubscribaleAbstract](arkts-subscribaleabstract-c.md) | 定义Subscribale基类。 |
| <!--DelRow-->[SubscribedAbstractProperty](arkts-subscribedabstractproperty-c.md) | SubscribedAbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中同步的属性。 |
| <!--DelRow-->[SyncedPropertyOneWay](arkts-syncedpropertyoneway-c.md) | 继承自[SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}。用来定义父组件的状态值。 |
| <!--DelRow-->[SyncedPropertyTwoWay](arkts-syncedpropertytwoway-c.md) | 继承自[SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}。用来定义变量状态的值。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AbstractProperty](arkts-abstractproperty-i.md) | AbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中属性的引用。 |
| [EnvPropsOptions](arkts-envpropsoptions-i.md) | 用于指定环境变量名称及其默认值的键值对对象，作为[envProps]{@link Environment#envProps}参数传入。 |
| <!--DelRow-->[IPropertySubscriber](arkts-ipropertysubscriber-i.md) | 提供属性订阅者的接口。 |
| <!--DelRow-->[ISinglePropertyChangeSubscriber](arkts-isinglepropertychangesubscriber-i.md) | 继承自[IPropertySubscriber]{@link IPropertySubscriber}。用来定义变量。 |
| [PersistPropsOptions](arkts-persistpropsoptions-i.md) | 用于指定持久化属性及其默认值的键值对对象，作为[persistProps]{@link PersistentStorage#persistProps}参数传入。 |

