# repeat

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [RepeatAttribute](arkts-repeatattribute-c.md) | 除支持[拖拽排序]{@link common}属性外，还支持以下属性。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [RepeatItem](arkts-repeatitem-i.md) | 数据项类型。 |
| [TemplateOptions](arkts-templateoptions-i.md) | 当cachedCount值被设置为当前template在容器组件显示区域的最大节点数量时，Repeat会做到最大程度的复用。当容器组件显示区域内没有当前template的节点时，缓存列表不会释放，同时应用内存增大。开发者需要根据具体情 况自行把控，推荐cachedCount值设置为容器组件显示区域内节点个数。需要注意，不建议设置cachedCount小于2，这会导致在快速滑动场景下频繁创建新的节点，从而造成性能劣化。 > **说明：** > > 滚动容器组件属性`.cachedCount()`和Repeat组件属性`.template()`的参数`cachedCount`都是为了平衡性能和内存，但是含义是不同的。 > > - 滚动容器组件`.cachedCount()`：是指在容器组件显示区域外预加载区域的大小，该区域内子组件节点位于组件树上。滚动容器组件会额外渲染这些预加载区域的节点，从而提高列表滑动性能。 > > - `.template()`中的`cachedCount`: 指Repeat每个template的缓存池大小，当渲染新的子组件时，Repeat先判断对应template缓存池中是否有可用节点，有则复用，没有则创建新节点。 |
| [VirtualScrollOptions](arkts-virtualscrolloptions-i.md) | 配置懒加载模式下期望加载的数据项总数、复用能力、数据精准懒加载能力。从API版本26.0.0开始，支持配置内存优化策略。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [RepeatMemOptStrategy](arkts-repeatmemoptstrategy-e.md) | Repeat内存优化策略枚举。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [RepeatArray](arkts-repeatarray-t.md) | Repeat数据源参数联合类型。 |
| [RepeatInterface](arkts-repeatinterface-t.md) | Indicates the type of Repeat. |
| [RepeatItemBuilder](arkts-repeatitembuilder-t.md) | 组件生成函数类型。 |
| [TemplateTypedFunc](arkts-templatetypedfunc-t.md) | 渲染模版类型字符串获取函数类型。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Repeat](arkts-repeat-con.md#Repeat) | Defines Repeat Component. |

