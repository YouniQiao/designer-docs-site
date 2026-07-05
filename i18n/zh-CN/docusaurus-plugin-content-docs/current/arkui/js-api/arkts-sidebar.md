# sidebar

Defines SideBarContainer Component instance.

## sidebar

```TypeScript
sidebar(type?: SideBarContainerType)
```

创建侧边栏容器。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SideBarContainerType | 否 | 设置侧边栏的显示类型。 默认值：SideBarContainerType.Embed |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [SideBarContainerAttribute](arkts-sidebarcontainerattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ButtonIconOptions](arkts-buttoniconoptions-i.md) | 设置侧边栏控制按钮的图标。 > **说明：** > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [ButtonStyle](arkts-buttonstyle-i.md) | 设置侧边栏控制按钮的样式。 |
| [DividerStyle](arkts-dividerstyle-i.md) | 设置分割线的样式。 > **说明：** > 针对侧边栏子组件设置[通用属性宽高]{@link common}时，宽高都不生效。 > 针对侧边栏内容区设置[通用属性宽高]{@link common}时，宽高都不生效，默认占满SideBarContainer的剩余空间。 > 当[showSideBar]{@link SideBarContainerAttribute#showSideBar}属性未设置时，依据组件大小进行自动显示： > - 小于[minSideBarWidth]{@link SideBarContainerAttribute#minSideBarWidth(value: number)} + > [minContentWidth]{@link SideBarContainerAttribute#minContentWidth}：默认不显示侧边栏。 > > - 大于等于minSideBarWidth + minContentWidth：默认显示侧边栏。 |
| [SideBarContainerInterface](arkts-sidebarcontainerinterface-i.md) | 提供侧边栏可以显示和隐藏的容器，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区。 > **说明： |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SideBarContainerType](arkts-sidebarcontainertype-e.md) | 容器内侧边栏样式枚举。 |
| [SideBarPosition](arkts-sidebarposition-e.md) | 侧边栏显示位置。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [SideBarContainer](arkts-sidebar-con.md#SideBarContainer) | 提供侧边栏可以显示和隐藏的容器，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区。 > **说明：** ###### 子组件 可以包含子组件。 > **说明：** > > - 子组件类型：系统组件和自定义组件，不支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和 > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。 > > - 子组件个数：必须且仅包含2个子组件。 > > - 子组件个数异常时：3个或以上子组件，显示第一个和第二个。1个子组件，显示侧边栏，内容区为空白。 > > - SideBarContainer走焦时，先在内容区走焦，再在侧边栏走焦。 |
| [SideBarContainerInstance](arkts-sidebar-con.md#SideBarContainerInstance) | Defines SideBarContainer Component instance. |

