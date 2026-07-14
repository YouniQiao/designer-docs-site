# Hyperlink

The **Hyperlink** component implements a link from a location in the component to another location. > **NOTE** > > - This component must be used with the system browser.

## Hyperlink

```TypeScript
Hyperlink(address: string | Resource, content?: string | Resource)
```

Defines the constructor of Hyperlink.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string \| Resource | Yes | Web page to which the hyperlink is redirected. |
| content | string \| Resource | No | Text displayed in the hyperlink.<br>Default value: **''**. If this parameteris not passed and the component does not have child components, the value of the **address** parameter isdisplayed by default.<br>**NOTE**<br>If this component has child components, the hyperlink text is notdisplayed. |

## Summary

