# Constants

## SideBarContainer

```TypeScript
declare const SideBarContainer: SideBarContainerInterface
```

提供侧边栏可以显示和隐藏的容器，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区。 > **说明：** ###### 子组件 可以包含子组件。 > **说明：** > > - 子组件类型：系统组件和自定义组件，不支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和 > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。 > > - 子组件个数：必须且仅包含2个子组件。 > > - 子组件个数异常时：3个或以上子组件，显示第一个和第二个。1个子组件，显示侧边栏，内容区为空白。 > > - SideBarContainer走焦时，先在内容区走焦，再在侧边栏走焦。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## SideBarContainerInstance

```TypeScript
declare const SideBarContainerInstance: SideBarContainerAttribute
```

Defines SideBarContainer Component instance.

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

