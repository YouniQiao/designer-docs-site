# SideBarContainer

The **SideBarContainer** component contains a sidebar and content area as its child components. The sidebar is the
first child component and can be shown or hidden as needed. The content area is the second child component.

> **NOTE**

> The APIs of this module are supported since API version 8. Updates will be marked with a superscript to indicate
> their

## Child Components

Supported

> **NOTE**  
>  
> - Allowed child component types: built-in and custom components, excluding rendering control types (  
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),  
> [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and  
> [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)).  
>  
> - This component must contain two child components.  
>  
> - If there are three or more child components, only the first and second child components are displayed. If there  
> is only one child component, the sidebar is displayed, and the content area is blank.  
>  
> - The focus navigation is performed in the content area and then in the sidebar of the **SideBarContainer**  
> component.

## SideBarContainer

```TypeScript
SideBarContainer(type?: SideBarContainerType)
```

Creates a sidebar container.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SideBarContainerInterface-(type?: SideBarContainerType): SideBarContainerAttribute--><!--Device-SideBarContainerInterface-(type?: SideBarContainerType): SideBarContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SideBarContainerType](arkts-arkui-sidebarcontainertype-e.md) | No | Display type of the sidebar.<br>Default value: **SideBarContainerType.Embed**  |

## Summary

- [ButtonIconOptions](arkts-arkui-sidebarcontainer-buttoniconoptions-i.md)
- [ButtonStyle](arkts-arkui-sidebarcontainer-buttonstyle-i.md)
- [DividerStyle](arkts-arkui-sidebarcontainer-dividerstyle-i.md)
- [SideBarContainerType](arkts-arkui-sidebarcontainer-sidebarcontainertype-e.md)
- [SideBarPosition](arkts-arkui-sidebarcontainer-sidebarposition-e.md)
