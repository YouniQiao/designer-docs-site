# Constants

## ListItemGroupInstance

```TypeScript
declare const ListItemGroupInstance: ListItemGroupAttribute
```

定义ListItemGroup组件实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ListItemGroup

```TypeScript
declare const ListItemGroup: ListItemGroupInterface
```

该组件用来展示列表item分组，宽度默认充满[List]list组件，必须配合List组件来使用。 ListItemGroup的懒加载是指组件按需加载可见区域可见的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。ListItemGroup和 [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、 [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、 [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，懒加载能力存在差异： - 当ListItemGroup和ForEach结合，会一次性创建所有的子节点，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，划出屏幕范围的节点不会下树销毁，划入屏幕范围的节点会布局和渲染。 - 当ListItemGroup和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，划出屏幕范围的节点会下树销毁，划入屏幕范围的节点会创建、布局、渲染。 - 当ListItemGroup和带[virtualScroll]RepeatAttribute#virtualScroll的Repeat结合，它的懒加载行为和LazyForEach一致。当ListItemGroup和 不带virtualScroll的Repeat结合，它的懒加载行为和ForEach一致。 ListItemGroup的预加载是指除了加载显示区域内可见的子组件外，还支持空闲时隙提前加载部分显示区域外不可见的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。ListItemGroup和 [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、 [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、 [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，预加载能力存在差异： - 当ListItemGroup和ForEach结合，如果设置了[cachedCount]ListAttribute#cachedCount(value: number)，除了会布局显示区域内子组件外，还会在空闲时隙根 据List组件的cachedCount属性预布局显示区域外cachedCount范围内的子节点。 - 当ListItemGroup和LazyForEach结合，如果设置了[cachedCount]ListAttribute#cachedCount(value: number)，除了会创建和布局显示区域内子组件外，还 会在空闲时隙根据List组件的cachedCount属性预创建和预布局显示区域外cachedCount范围内的子节点。 - 当ListItemGroup和带[virtualScroll]RepeatAttribute#virtualScroll的Repeat结合，它的预加载行为和LazyForEach一致。当ListItemGroup和 不带virtualScroll的Repeat结合，它的预加载行为和ForEach一致。 > **说明：** > - 该组件的父组件只能是[List]list。 > > - ListItemGroup组件不支持设置[通用属性aspectRatio]CommonMethod#aspectRatio。 > > - 当ListItemGroup的父组件List的[listDirection]ListAttribute#listDirection属性为Axis.Vertical时，设置 > [通用属性height]CommonMethod#height(value: Length)属性不生效。ListItemGroup的高度为header高度、footer高度和所有ListItem布局后总高度之和。 > > - 当父组件List的listDirection属性为Axis.Horizontal时，设置[通用属性width]CommonMethod#width(value: Length)属性不生效。 > ListItemGroup的宽度为header宽度、footer宽度和所有ListItem布局后总宽度之和。 > > - 当前ListItemGroup内部的ListItem组件不支持编辑、拖拽功能，即ListItem组件的[editable]ListItemAttribute#editable属性不生效。 > > - ListItemGroup使用direction属性设置布局方向不生效，ListItemGroup组件布局方向跟随父容器List组件的布局方向。 ###### 子组件 包含[ListItem]list_item子组件。支持通过渲染控制类型（ [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、 [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和 [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

