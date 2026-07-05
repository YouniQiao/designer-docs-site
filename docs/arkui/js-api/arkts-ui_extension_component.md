# ui_extension_component

Defines UIExtensionComponent Component instance.

## ui_extension_component

```TypeScript
ui_extension_component(
    want: import('../api/options?: UIExtensionOptions
  )
```

Construct the UIExtensionComponent.<br/> Called when the UIExtensionComponent is used.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | import('../api/@ohos.app.ability.Want').default | Yes | indicates the want of UIExtensionAbility |
| options | UIExtensionOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[UIExtensionComponentAttribute](arkts-uiextensioncomponentattribute-c.md) | Define the attribute functions of UIExtensionComponent. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |
| <!--DelRow-->[UIExtensionComponentInterface](arkts-uiextensioncomponentinterface-i.md) | Provide an interface for the UIExtensionComponent, which is used <br/>to render UI of a remote UIExtensionAbility |
| <!--DelRow-->[UIExtensionOptions](arkts-uiextensionoptions-i.md) | This interface is used to set the options for UIExtensionComponentAttribute during construction |
| <!--DelRow-->[UIExtensionProxy](arkts-uiextensionproxy-i.md) | This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DpiFollowStrategy](arkts-dpifollowstrategy-e.md) | Enumeration of different types of DpiFollowStrategy. |
| <!--DelRow-->[WindowModeFollowStrategy](arkts-windowmodefollowstrategy-e.md) | Enumeration of different types of WindowModeFollowStrategy. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[ReceiveCallback](arkts-receivecallback-t.md) | Get Callback from @ohos.base. AnonyMous Object Rectification |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[UIExtensionComponent](arkts-ui-extension-component-con-sys.md#UIExtensionComponent) | Defines UIExtensionComponent Component. |
| <!--DelRow-->[UIExtensionComponentInstance](arkts-ui-extension-component-con-sys.md#UIExtensionComponentInstance) | Defines UIExtensionComponent Component instance. |

