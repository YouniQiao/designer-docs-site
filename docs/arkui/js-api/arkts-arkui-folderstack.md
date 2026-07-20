# FolderStack

**FolderStack** extends the [Stack]{@link stack} container, adding the <!--RP1-->foldable phone hover<!--RP1End-->
capability. Child components specified in the **upperItems** array of [FolderStackOptions]{@link FolderStackOptions}
automatically avoid the screen crease area and reposition to the upper display.
> **NOTE**
>
> The hover capability is designed for and only works on <!--RP2-->dual-fold devices<!--RP2End-->.
>
> When the component's parent is an
> [if/else conditional render](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) node, the foldable
> hover feature is disabled.
>
> **Child Components**
>
> Multiple child components are supported.


## FolderStack

```TypeScript
FolderStack(options?: FolderStackOptions)
```

Defines the constructor of FolderStack component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FolderStackInterface-(options?: FolderStackOptions): FolderStackAttribute--><!--Device-FolderStackInterface-(options?: FolderStackOptions): FolderStackAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FolderStackOptions | No | Configuration of the **FolderStack** component. |

## Summary

- [FolderStackOptions](arkts-arkui-folderstack-folderstackoptions-i.md)
- [HoverEventParam](arkts-arkui-folderstack-hovereventparam-i.md)
- [OnFoldStatusChangeInfo](arkts-arkui-folderstack-onfoldstatuschangeinfo-i.md)
- [OnFoldStatusChangeCallback](arkts-arkui-folderstack-onfoldstatuschangecallback-t.md)
- [OnHoverStatusChangeCallback](arkts-arkui-folderstack-onhoverstatuschangecallback-t.md)
- [WindowStatusType](arkts-arkui-folderstack-windowstatustype-t.md)
