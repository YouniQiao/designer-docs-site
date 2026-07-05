# navigator

Defines Navigator Component instance.

## navigator

```TypeScript
navigator(value?: { target: string; type?: NavigationType })
```

在路由跳转时调用。

**起始版本：** 7

**废弃版本：** 13

**替代接口：** NavPathInfo

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | { target: string; type?: NavigationType } | 否 | 跳转页面的信息。 target：指定跳转目标页面的路径。 type：指定路由方式。 默认值：NavigationType.Push |

```TypeScript
navigator()
```

在使用Navigator时调用。 NavigationAttribute为Navigation组件的属性。

**起始版本：** 7

**废弃版本：** 13

**替代接口：** NavigationAttribute

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [NavigatorAttribute](arkts-navigatorattribute-c.md) | Navigator的属性。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [NavigatorInterface](arkts-navigatorinterface-i.md) | 路由容器组件，提供路由跳转能力。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [NavigationType](arkts-navigationtype-e.md) | 路由的跳转方式。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Navigator](arkts-navigator-con.md#Navigator) | 路由容器组件，提供路由跳转能力。 > **说明：** ###### 子组件 可以包含子组件。 |
| [NavigatorInstance](arkts-navigator-con.md#NavigatorInstance) | Defines Navigator Component instance. |

