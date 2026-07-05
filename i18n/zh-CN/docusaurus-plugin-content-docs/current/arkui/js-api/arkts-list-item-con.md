# Constants

## ListItemInstance

```TypeScript
declare const ListItemInstance: ListItemAttribute
```

ListItem组件实例。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## ListItem

```TypeScript
declare const ListItem: ListItemInterface
```

用来展示列表具体item，必须配合[List]list来使用。 > **说明：** > > * > > * 该组件的父组件只能是[List]list或者[ListItemGroup]list_item_group。 > > * 当ListItem配合LazyForEach使用时，ListItem子组件在ListItem创建时创建。配合if/else、ForEach使用时，或父组件为List/ListItemGroup时，ListItem子组件在ListItem布局时创建。 ###### 子组件 可以包含单个子组件。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

