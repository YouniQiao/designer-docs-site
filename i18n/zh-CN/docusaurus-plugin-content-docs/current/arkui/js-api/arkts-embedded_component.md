# embedded_component

Defines EmbeddedComponent Component instance.

## embedded_component

```TypeScript
embedded_component(
    loader: import('../api/type: EmbeddedType
  )
```

Construct the EmbeddedComponent.<br/> Called when the EmbeddedComponent is used.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | 是 | indicates initialization parameter |
| type | EmbeddedType | 是 | indicates type of the EmbeddedComponent |

```TypeScript
embedded_component(
    loader: import('../api/type: EmbeddedType,
    options?: EmbeddedOptions
  )
```

Construct the EmbeddedComponent.<br/> Called when the EmbeddedComponent is used.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | 是 | indicates initialization parameter |
| type | EmbeddedType | 是 | indicates type of the EmbeddedComponent |
| options | EmbeddedOptions | 否 | construction configuration of EmbeddedComponent |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [EmbeddedComponentAttribute](arkts-embeddedcomponentattribute-c.md) | Define the attribute functions of EmbeddedComponent. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [EmbeddedComponentInterface](arkts-embeddedcomponentinterface-i.md) | Provide an interface for the EmbeddedComponent, which is used <br/>to render UI asynchronously |
| [EmbeddedOptions](arkts-embeddedoptions-i.md) | This interface is used to set the options for EmbeddedComponentAttribute during construction |
| [TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [EmbeddedDpiFollowStrategy](arkts-embeddeddpifollowstrategy-e.md) | Enumeration of different types of EmbeddedDpiFollowStrategy. |
| [EmbeddedWindowModeFollowStrategy](arkts-embeddedwindowmodefollowstrategy-e.md) | Enumeration of different types of EmbeddedWindowModeFollowStrategy. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [EmbeddedComponent](arkts-embedded-component-con.md#EmbeddedComponent) | Defines EmbeddedComponent Component. |
| [EmbeddedComponentInstance](arkts-embedded-component-con.md#EmbeddedComponentInstance) | Defines EmbeddedComponent Component instance. |

