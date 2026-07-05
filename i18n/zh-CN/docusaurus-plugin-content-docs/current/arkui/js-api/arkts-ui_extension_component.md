# ui_extension_component

Defines UIExtensionComponent Component instance.

## ui_extension_component

```TypeScript
ui_extension_component(
    want: import('../api/options?: UIExtensionOptions
  )
```

Construct the UIExtensionComponent.<br/> Called when the UIExtensionComponent is used.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | import('../api/@ohos.app.ability.Want').default | 是 | indicates the want of UIExtensionAbility |
| options | UIExtensionOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[UIExtensionComponentAttribute](arkts-uiextensioncomponentattribute-c.md) | Define the attribute functions of UIExtensionComponent. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |
| <!--DelRow-->[UIExtensionComponentInterface](arkts-uiextensioncomponentinterface-i.md) | Provide an interface for the UIExtensionComponent, which is used <br/>to render UI of a remote UIExtensionAbility |
| <!--DelRow-->[UIExtensionOptions](arkts-uiextensionoptions-i.md) | This interface is used to set the options for UIExtensionComponentAttribute during construction |
| <!--DelRow-->[UIExtensionProxy](arkts-uiextensionproxy-i.md) | This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DpiFollowStrategy](arkts-dpifollowstrategy-e.md) | Enumeration of different types of DpiFollowStrategy. |
| <!--DelRow-->[WindowModeFollowStrategy](arkts-windowmodefollowstrategy-e.md) | Enumeration of different types of WindowModeFollowStrategy. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ReceiveCallback](arkts-receivecallback-t.md) | Get Callback from @ohos.base. AnonyMous Object Rectification |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[UIExtensionComponent](arkts-ui-extension-component-con-sys.md#UIExtensionComponent) | Defines UIExtensionComponent Component. |
| <!--DelRow-->[UIExtensionComponentInstance](arkts-ui-extension-component-con-sys.md#UIExtensionComponentInstance) | Defines UIExtensionComponent Component instance. |

