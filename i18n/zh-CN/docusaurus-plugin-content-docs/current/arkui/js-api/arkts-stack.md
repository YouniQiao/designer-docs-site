# stack

Defines Stack Component instance.

## stack

```TypeScript
stack(options?: StackOptions)
```

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > > 过多的组件嵌套会导致性能劣化。在部分场景中，直接使用组件属性或借助系统API的能力可以替代层叠容器的效果，减少了嵌套组件数进而优化性能。最佳实践请参考 > [组件嵌套优化-优先使用组件属性代替嵌套组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-nesting-optimization#section78181114123811)。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | StackOptions | 否 | 设置子组件在容器内的对齐方式。 [since 18] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [StackAttribute](arkts-stackattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [StackInterface](arkts-stackinterface-i.md) | 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。 |
| [StackOptions](arkts-stackoptions-i.md) | 设置堆叠容器的子组件对齐方式。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Stack](arkts-stack-con.md#Stack) | 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。 > **说明：** > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。 ###### 子组件 可以包含子组件。 |
| [StackInstance](arkts-stack-con.md#StackInstance) | Defines Stack Component instance. |

