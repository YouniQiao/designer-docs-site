# security_ui_extension_component

Defines UIExtensionComponent Component instance.

## security_ui_extension_component

```TypeScript
security_ui_extension_component(
    want: import('../api/options?: SecurityUIExtensionOptions
  )
```

Construct the UIExtensionComponent.<br/> Called when the UIExtensionComponent is used.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | import('../api/@ohos.app.ability.Want').default | Yes | indicates the want of UIExtensionAbility |
| options | SecurityUIExtensionOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponentAttribute](arkts-securityuiextensioncomponentattribute-c.md) | Define the attribute functions of UIExtensionComponent. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponentInterface](arkts-securityuiextensioncomponentinterface-i.md) | Provide an interface for the UIExtensionComponent, which is used <br/>to render UI of a remote UIExtensionAbility |
| <!--DelRow-->[SecurityUIExtensionOptions](arkts-securityuiextensionoptions-i.md) | This interface is used to set the options for UIExtensionComponentAttribute during construction |
| <!--DelRow-->[SecurityUIExtensionProxy](arkts-securityuiextensionproxy-i.md) | This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully |
| <!--DelRow-->[TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[SecurityDpiFollowStrategy](arkts-securitydpifollowstrategy-e.md) | Enumeration of different types of DpiFollowStrategy. |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[SecurityUIExtensionComponent](arkts-security-ui-extension-component-con-sys.md#SecurityUIExtensionComponent) | Defines SecurityUIExtensionComponent Component. |
| <!--DelRow-->[SecurityUIExtensionComponentInstance](arkts-security-ui-extension-component-con-sys.md#SecurityUIExtensionComponentInstance) | Defines UIExtensionComponent Component instance. |

