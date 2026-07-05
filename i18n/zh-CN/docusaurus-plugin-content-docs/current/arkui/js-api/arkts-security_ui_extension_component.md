# security_ui_extension_component

Defines UIExtensionComponent Component instance.

## security_ui_extension_component

```TypeScript
security_ui_extension_component(
    want: import('../api/options?: SecurityUIExtensionOptions
  )
```

Construct the UIExtensionComponent.<br/> Called when the UIExtensionComponent is used.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | import('../api/@ohos.app.ability.Want').default | 是 | indicates the want of UIExtensionAbility |
| options | SecurityUIExtensionOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponentAttribute](arkts-securityuiextensioncomponentattribute-c.md) | Define the attribute functions of UIExtensionComponent. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponentInterface](arkts-securityuiextensioncomponentinterface-i.md) | Provide an interface for the UIExtensionComponent, which is used <br/>to render UI of a remote UIExtensionAbility |
| <!--DelRow-->[SecurityUIExtensionOptions](arkts-securityuiextensionoptions-i.md) | This interface is used to set the options for UIExtensionComponentAttribute during construction |
| <!--DelRow-->[SecurityUIExtensionProxy](arkts-securityuiextensionproxy-i.md) | This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully |
| <!--DelRow-->[TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SecurityDpiFollowStrategy](arkts-securitydpifollowstrategy-e.md) | Enumeration of different types of DpiFollowStrategy. |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponent](arkts-security-ui-extension-component-con-sys.md#SecurityUIExtensionComponent) | Defines SecurityUIExtensionComponent Component. |
| <!--DelRow-->[SecurityUIExtensionComponentInstance](arkts-security-ui-extension-component-con-sys.md#SecurityUIExtensionComponentInstance) | Defines UIExtensionComponent Component instance. |

