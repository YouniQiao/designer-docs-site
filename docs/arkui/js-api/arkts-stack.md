# stack

Defines Stack Component instance.

## stack

```TypeScript
stack(options?: StackOptions)
```

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > > 过多的组件嵌套会导致性能劣化。在部分场景中，直接使用组件属性或借助系统API的能力可以替代层叠容器的效果，减少了嵌套组件数进而优化性能。最佳实践请参考 > [组件嵌套优化-优先使用组件属性代替嵌套组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-nesting-optimization#section78181114123811)。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StackOptions | No | 设置子组件在容器内的对齐方式。 [since 18] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [StackAttribute](arkts-stackattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [StackInterface](arkts-stackinterface-i.md) | 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。 |
| [StackOptions](arkts-stackoptions-i.md) | 设置堆叠容器的子组件对齐方式。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Stack](arkts-stack-con.md#Stack) | 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。 ###### 子组件 可以包含子组件。 |
| [StackInstance](arkts-stack-con.md#StackInstance) | Defines Stack Component instance. |

