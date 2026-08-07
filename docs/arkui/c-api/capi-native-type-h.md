# native_type.h

## Overview

Defines the common types for the native module.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_ContextCallback](capi-arkui-nativemodule-arkui-contextcallback.md) | ArkUI_ContextCallback | Defines the event callback type. |
| [ArkUI_NumberValue](capi-arkui-nativemodule-arkui-numbervalue.md) | ArkUI_NumberValue | Provides the number types of ArkUI in the native code. |
| [ArkUI_ColorStop](capi-arkui-nativemodule-arkui-colorstop.md) | ArkUI_ColorStop | Defines the gradient color stop structure. |
| [ArkUI_Rect](capi-arkui-nativemodule-arkui-rect.md) | ArkUI_Rect | Defines a mask area. |
| [ArkUI_IntSize](capi-arkui-nativemodule-arkui-intsize.md) | ArkUI_IntSize | Describes the width and height of a component. |
| [ArkUI_IntOffset](capi-arkui-nativemodule-arkui-intoffset.md) | ArkUI_IntOffset | Describes the position of a component. |
| [ArkUI_Node](capi-arkui-nativemodule-arkui-node.md) | - | Defines the ArkUI native component object. |
| [ArkUI_NodeContent*](capi-arkui-nativemodule-arkui-nodecontent8h.md) | ArkUI_NodeContentHandle | Defines the pointer type of the ArkUI node content |
| [ArkUI_NativeDialog](capi-arkui-nativemodule-arkui-nativedialog.md) | - | Defines the custom dialog box controller of ArkUI on the native side. |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md) | ArkUI_LayoutConstraint | Sets the size constraints of a component during component layout. |
| [ArkUI_DrawContext](capi-arkui-nativemodule-arkui-drawcontext.md) | ArkUI_DrawContext | Defines the structure of the component drawing context. |
| [ArkUI_Node*](capi-arkui-nativemodule-arkui-node8h.md) | ArkUI_NodeHandle | Defines the pointer to the ArkUI native component object. |
| [ArkUI_NativeDialog*](capi-arkui-nativemodule-arkui-nativedialog8h.md) | ArkUI_NativeDialogHandle | Defines the pointer to the custom dialog box controller of ArkUI on the native side. |
| [ArkUI_GestureCollectInterceptInfo](capi-arkui-nativemodule-arkui-gesturecollectinterceptinfo.md) | ArkUI_GestureCollectInterceptInfo | Defines information about gesture collection interception. |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md) | ArkUI_ListItemSwipeActionItem | Define the configuration information of the Item within the ListitemSwipeActionOption method. |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md) | ArkUI_ListItemSwipeActionOption | Define the configuration information for the ListitemSwipeActionOption method. |
| [ArkUI_Context](capi-arkui-nativemodule-arkui-context.md) | - | Defines the ArkUI native context object. |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md) | ArkUI_AccessibilityState | Defines the accessibility state for the component. |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md) | ArkUI_AccessibilityValue | Defines the accessibility value for the component. |
| [ArkUI_CustomProperty](capi-arkui-nativemodule-arkui-customproperty.md) | ArkUI_CustomProperty | Define the information of the Custom Property class for custom properties. |
| [ArkUI_HostWindowInfo](capi-arkui-nativemodule-arkui-hostwindowinfo.md) | ArkUI_HostWindowInfo | Define the information of the HostWindowInfo class for window properties. |
| [ArkUI_ActiveChildrenInfo](capi-arkui-nativemodule-arkui-activechildreninfo.md) | ArkUI_ActiveChildrenInfo | Define ActiveChildenInfo class information. |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md) | ArkUI_CrossLanguageOption | The cross-language option. |
| [ArkUI_SelectedDragPreviewStyle](capi-arkui-nativemodule-arkui-selecteddragpreviewstyle.md) | ArkUI_SelectedDragPreviewStyle | Defines the selected drag preview style configuration. |
| [ArkUI_SystemFontStyleEvent](capi-arkui-nativemodule-arkui-systemfontstyleevent.md) | ArkUI_SystemFontStyleEvent | Defines parameter used by the system font style callback event. |
| [ArkUI_SelectionOptions](capi-arkui-nativemodule-arkui-selectionoptions.md) | ArkUI_SelectionOptions | Defines the options for selection operation. |
| [ArkUI_ContentTransitionEffect](capi-arkui-nativemodule-arkui-contenttransitioneffect.md) | ArkUI_ContentTransitionEffect | Set the types and parameters related to content transition effects. |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md) | OH_ArkUI_LinearGradientOptions | Defines linear gradient options. |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md) | OH_ArkUI_RadialGradientOptions | Defines radial gradient options. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_CopyOptions](#arkui_copyoptions) | ArkUI_CopyOptions | Enumerates the text copy and paste modes. |
| [ArkUI_FocusWrapMode](#arkui_focuswrapmode) | ArkUI_FocusWrapMode | Enumerates the focus wrap mode of components. |
| [ArkUI_ItemFillPolicy](#arkui_itemfillpolicy) | ArkUI_ItemFillPolicy | Specifies the number of columns for different responsive breakpoint specifications. |
| [ArkUI_BorderStyle](#arkui_borderstyle) | ArkUI_BorderStyle | Enumerates the border styles. |
| [ArkUI_AccessibilityMode](#arkui_accessibilitymode) | ArkUI_AccessibilityMode | Enumerates the accessibility modes. |
| [ArkUI_AdaptiveColor](#arkui_adaptivecolor) | ArkUI_AdaptiveColor | Enumerates the adaptive color modes. |
| [ArkUI_ColorMode](#arkui_colormode) | ArkUI_ColorMode | Enumerates the color modes. |
| [ArkUI_SystemColorMode](#arkui_systemcolormode) | ArkUI_SystemColorMode | Enumerates the system color modes. |
| [ArkUI_ListItemSwipeActionState](#arkui_listitemswipeactionstate) | ArkUI_ListItemSwipeActionState | Define the pattern of element arrangement in the main axis direction of the Swiper component. |
| [ArkUI_ListItemSwipeEdgeEffect](#arkui_listitemswipeedgeeffect) | ArkUI_ListItemSwipeEdgeEffect | Define the explicit and implicit mode of the SwipeAction method for the Listitem component. |
| [ArkUI_LengthMetricUnit](#arkui_lengthmetricunit) | ArkUI_LengthMetricUnit | Enumerates the component units. |
| [ArkUI_AccessibilityCheckedState](#arkui_accessibilitycheckedstate) | ArkUI_AccessibilityCheckedState | Defines the state type for the accessibility checkbox. |
| [ArkUI_AccessibilityActionType](#arkui_accessibilityactiontype) | ArkUI_AccessibilityActionType | Define accessible action types. |
| [ArkUI_SafeAreaType](#arkui_safeareatype) | ArkUI_SafeAreaType | defines the enumerated value of the extended security zone. |
| [ArkUI_KeyboardAvoidMode](#arkui_keyboardavoidmode) | ArkUI_KeyboardAvoidMode | defines the enumerated value of the customDialog's keyboard avoid mode. |
| [ArkUI_HoverModeAreaType](#arkui_hovermodeareatype) | ArkUI_HoverModeAreaType | defines the enumerated value of area in hover mode. |
| [ArkUI_ExpandMode](#arkui_expandmode) | ArkUI_ExpandMode | Enumerates the expand modes. |
| [ArkUI_EdgeDirection](#arkui_edgedirection) | ArkUI_EdgeDirection | Enumerates the edge direction. |
| [ArkUI_CornerDirection](#arkui_cornerdirection) | ArkUI_CornerDirection | Enumerates the corner direction. |
| [ArkUI_MenuPolicy](#arkui_menupolicy) | ArkUI_MenuPolicy | Menu pop-up strategy. |
| [ArkUI_ListItemSwipeActionDirection](#arkui_listitemswipeactiondirection) | ArkUI_ListItemSwipeActionDirection | Define the direction to expand the swipe action. |
| [ArkUI_RenderStrategy](#arkui_renderstrategy) | ArkUI_RenderStrategy | Enumerates the graphics rendering strategy. |
| [OH_ArkUI_CrossLanguageOperatingStatus](#oh_arkui_crosslanguageoperatingstatus) | OH_ArkUI_CrossLanguageOperatingStatus | Enumerates the tree operating status for the cross-language option. |
| [OH_ArkUI_NodeMountPolicy](#oh_arkui_nodemountpolicy) | OH_ArkUI_NodeMountPolicy | Enumeration of the policy for mounting child node to the target node. |
| [OH_ArkUI_ArcDirection](#oh_arkui_arcdirection) | OH_ArkUI_ArcDirection | Enumerates the ArcDirection. |

### Function

| Name | Description |
| -- | -- |
| [ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Create()](#oh_arkui_layoutconstraint_create) | Creates a size constraint. |
| [ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Copy(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_copy) | Creates a deep copy of a size constraint. |
| [void* OH_ArkUI_LayoutConstraint_Dispose(ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_dispose) | Destroys the pointer to a size constraint. |
| [int32_t OH_ArkUI_LayoutConstraint_GetMaxWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getmaxwidth) | Obtains the maximum width for a size constraint, in px. |
| [int32_t OH_ArkUI_LayoutConstraint_GetMinWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getminwidth) | Obtains the minimum width for a size constraint, in px. |
| [int32_t OH_ArkUI_LayoutConstraint_GetMaxHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getmaxheight) | Obtains the maximum height for a size constraint, in px. |
| [int32_t OH_ArkUI_LayoutConstraint_GetMinHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getminheight) | Obtains the minimum height for a size constraint, in px. |
| [int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getpercentreferencewidth) | Obtains the width percentage reference for a size constraint, in px. |
| [int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getpercentreferenceheight) | Obtains the height percentage reference for a size constraint, in px. |
| [void OH_ArkUI_LayoutConstraint_SetMaxWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setmaxwidth) | Sets the maximum width. |
| [void OH_ArkUI_LayoutConstraint_SetMinWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setminwidth) | Sets the minimum width. |
| [void OH_ArkUI_LayoutConstraint_SetMaxHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setmaxheight) | Sets the maximum height. |
| [void OH_ArkUI_LayoutConstraint_SetMinHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setminheight) | Sets the minimum height. |
| [void OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setpercentreferencewidth) | Sets the width percentage reference. |
| [void OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setpercentreferenceheight) | Sets the height percentage reference. |
| [void* OH_ArkUI_DrawContext_GetCanvas(ArkUI_DrawContext* context)](#oh_arkui_drawcontext_getcanvas) | Obtains the pointer to a canvas for drawing, which can be converted into the <b>OH_Drawing_Canvas</b> pointerin the <b>Drawing</b> module. |
| [ArkUI_IntSize OH_ArkUI_DrawContext_GetSize(ArkUI_DrawContext* context)](#oh_arkui_drawcontext_getsize) | Obtains the size of a drawing area. |
| [void OH_ArkUI_SwiperDigitIndicator_SetFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight fontWeight)](#oh_arkui_swiperdigitindicator_setfontweight) | Sets the font weight of total count in the digital indicator. |
| [ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetFontWeight(ArkUI_SwiperDigitIndicator* indicator)](#oh_arkui_swiperdigitindicator_getfontweight) | Gets the font weight of total count in the digital indicator. |
| [void OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight selectedFontWeight)](#oh_arkui_swiperdigitindicator_setselectedfontweight) | Sets the font weight of selected index in the digital indicator. |
| [ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight(ArkUI_SwiperDigitIndicator* indicator)](#oh_arkui_swiperdigitindicator_getselectedfontweight) | Gets the font weight of selected index in the digital indicator. |
| [ArkUI_ContentTransitionEffect* OH_ArkUI_ContentTransitionEffect_Create(int32_t type)](#oh_arkui_contenttransitioneffect_create) | creates content switching animation effects. |
| [ArkUI_ListItemSwipeActionItem* OH_ArkUI_ListItemSwipeActionItem_Create()](#oh_arkui_listitemswipeactionitem_create) | Create a configuration item for the ListitemSwipeActionItem interface settings. |
| [void OH_ArkUI_ListItemSwipeActionItem_Dispose(ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionitem_dispose) | Destroy the ListitemSwipeActionItem instance. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetContent(ArkUI_ListItemSwipeActionItem* item, ArkUI_NodeHandle node)](#oh_arkui_listitemswipeactionitem_setcontent) | Set the layout content of ListItem SwipeActionItem. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item, float distance)](#oh_arkui_listitemswipeactionitem_setactionareadistance) | Set the threshold for long-distance sliding deletion distance of components. |
| [float OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionitem_getactionareadistance) | Obtain the threshold for long-distance sliding deletion distance of components. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea(ArkUI_ListItemSwipeActionItem* item, void (\*callback)())](#oh_arkui_listitemswipeactionitem_setonenteractionarea) | Set the event to be called when a sliding entry enters the deletion area. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (\*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonenteractionareawithuserdata) | Set the event triggered when a sliding entry enters the deletion area. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnAction(ArkUI_ListItemSwipeActionItem* item, void (\*callback)())](#oh_arkui_listitemswipeactionitem_setonaction) | Set the event to be called when a component enters the long-range deletion area and deletes a ListItem. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (\*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonactionwithuserdata) | Set the event triggered when a component enters the long-range deletion area and deletes a ListItem. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea(ArkUI_ListItemSwipeActionItem* item, void (\*callback)())](#oh_arkui_listitemswipeactionitem_setonexitactionarea) | Set the event to be called when a sliding entry exits the deletion area. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (\*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonexitactionareawithuserdata) | Set the event triggered when a sliding entry exits the deletion area. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange(ArkUI_ListItemSwipeActionItem* item, void (\*callback)(ArkUI_ListItemSwipeActionState swipeActionState))](#oh_arkui_listitemswipeactionitem_setonstatechange) | Set the event triggered when the sliding state of a list item changes. |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (\*callback)(ArkUI_ListItemSwipeActionState swipeActionState, void* userData))](#oh_arkui_listitemswipeactionitem_setonstatechangewithuserdata) | Set the event triggered when the sliding state of a list item changes. |
| [ArkUI_ListItemSwipeActionOption* OH_ArkUI_ListItemSwipeActionOption_Create()](#oh_arkui_listitemswipeactionoption_create) | Create a configuration item for the ListitemSwipeActionOption interface settings. |
| [void OH_ArkUI_ListItemSwipeActionOption_Dispose(ArkUI_ListItemSwipeActionOption* option)](#oh_arkui_listitemswipeactionoption_dispose) | Destroy the ListitemSwipeActionOption instance. |
| [void OH_ArkUI_ListItemSwipeActionOption_SetStart(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionoption_setstart) | Set the layout content on the left (vertical layout) or top (horizontal layout)of the ListItem SwipeActionItem. |
| [void OH_ArkUI_ListItemSwipeActionOption_SetEnd(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionoption_setend) | Set the layout content on the right (vertical layout) or bottom (horizontal layout)of the ListItem SwipeActionItem. |
| [void OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeEdgeEffect edgeEffect)](#oh_arkui_listitemswipeactionoption_setedgeeffect) | Set the sliding effect. |
| [int32_t OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect(ArkUI_ListItemSwipeActionOption* option)](#oh_arkui_listitemswipeactionoption_getedgeeffect) | Get the sliding effect. |
| [void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange(ArkUI_ListItemSwipeActionOption* option, void (\*callback)(float offset))](#oh_arkui_listitemswipeactionoption_setonoffsetchange) | The event called when the sliding operation offset changes. |
| [void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData(ArkUI_ListItemSwipeActionOption* option, void* userData, void (\*callback)(float offset, void* userData))](#oh_arkui_listitemswipeactionoption_setonoffsetchangewithuserdata) | Set the event triggered when the sliding operation offset changes. |
| [ArkUI_AccessibilityState* OH_ArkUI_AccessibilityState_Create(void)](#oh_arkui_accessibilitystate_create) | Create accessibility state. |
| [void OH_ArkUI_AccessibilityState_Dispose(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_dispose) | Dispose accessibility state. |
| [void OH_ArkUI_AccessibilityState_SetDisabled(ArkUI_AccessibilityState* state, int32_t isDisabled)](#oh_arkui_accessibilitystate_setdisabled) | Set accessibility state disabled. |
| [int32_t OH_ArkUI_AccessibilityState_IsDisabled(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_isdisabled) | Get accessibility state disabled. |
| [void OH_ArkUI_AccessibilityState_SetSelected(ArkUI_AccessibilityState* state, int32_t isSelected)](#oh_arkui_accessibilitystate_setselected) | Set accessibility state selected. |
| [int32_t OH_ArkUI_AccessibilityState_IsSelected(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_isselected) | Get accessibility state selected. |
| [void OH_ArkUI_AccessibilityState_SetCheckedState(ArkUI_AccessibilityState* state, int32_t checkedState)](#oh_arkui_accessibilitystate_setcheckedstate) | Set accessibility checked state. |
| [int32_t OH_ArkUI_AccessibilityState_GetCheckedState(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_getcheckedstate) | Get accessibility checked state. |
| [ArkUI_AccessibilityValue* OH_ArkUI_AccessibilityValue_Create(void)](#oh_arkui_accessibilityvalue_create) | Create accessibility value. |
| [void OH_ArkUI_AccessibilityValue_Dispose(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_dispose) | Dispose accessibility value. |
| [void OH_ArkUI_AccessibilityValue_SetMin(ArkUI_AccessibilityValue* value, int32_t min)](#oh_arkui_accessibilityvalue_setmin) | Set accessibility minimum value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetMin(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getmin) | Get accessibility minimum value. |
| [void OH_ArkUI_AccessibilityValue_SetMax(ArkUI_AccessibilityValue* value, int32_t max)](#oh_arkui_accessibilityvalue_setmax) | Set accessibility minimum value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetMax(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getmax) | Get accessibility minimum value. |
| [void OH_ArkUI_AccessibilityValue_SetCurrent(ArkUI_AccessibilityValue* value, int32_t current)](#oh_arkui_accessibilityvalue_setcurrent) | Set accessibility current value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetCurrent(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getcurrent) | Get accessibility current value. |
| [void OH_ArkUI_AccessibilityValue_SetRangeMin(ArkUI_AccessibilityValue* value, int32_t rangeMin)](#oh_arkui_accessibilityvalue_setrangemin) | Set accessibility minimum value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeMin(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangemin) | Get accessibility minimum value. |
| [void OH_ArkUI_AccessibilityValue_SetRangeMax(ArkUI_AccessibilityValue* value, int32_t rangeMax)](#oh_arkui_accessibilityvalue_setrangemax) | Set accessibility maximum value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeMax(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangemax) | Get accessibility maximum value. |
| [void OH_ArkUI_AccessibilityValue_SetRangeCurrent(ArkUI_AccessibilityValue* value, int32_t rangeCurrent)](#oh_arkui_accessibilityvalue_setrangecurrent) | Set accessibility current value. |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeCurrent(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangecurrent) | Get accessibility current value. |
| [void OH_ArkUI_AccessibilityValue_SetText(ArkUI_AccessibilityValue* value, const char* text)](#oh_arkui_accessibilityvalue_settext) | Set accessibility text value. |
| [const char* OH_ArkUI_AccessibilityValue_GetText(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_gettext) | Get accessibility text value. |
| [void OH_ArkUI_CustomProperty_Destroy(ArkUI_CustomProperty* handle)](#oh_arkui_customproperty_destroy) | Destroy the instance of Customs Property. |
| [const char* OH_ArkUI_CustomProperty_GetStringValue(ArkUI_CustomProperty* handle)](#oh_arkui_customproperty_getstringvalue) | Get custom attribute value information. |
| [const char* OH_ArkUI_HostWindowInfo_GetName(ArkUI_HostWindowInfo* info)](#oh_arkui_hostwindowinfo_getname) | Get window name from HostWindowInfo. |
| [void OH_ArkUI_HostWindowInfo_Destroy(ArkUI_HostWindowInfo* info)](#oh_arkui_hostwindowinfo_destroy) | Destroy the instance of HostWindowInfo. |
| [void OH_ArkUI_ActiveChildrenInfo_Destroy(ArkUI_ActiveChildrenInfo* handle)](#oh_arkui_activechildreninfo_destroy) | Destroy ActiveChildenInfo instance. |
| [ArkUI_NodeHandle OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex(ArkUI_ActiveChildrenInfo* handle, int32_t index)](#oh_arkui_activechildreninfo_getnodebyindex) | Retrieve the child nodes of ActiveChildenInfo with the structure index. |
| [int32_t OH_ArkUI_ActiveChildrenInfo_GetCount(ArkUI_ActiveChildrenInfo* handle)](#oh_arkui_activechildreninfo_getcount) | Retrieve the number of nodes within the structure of ActiveChildenInfo. |
| [ArkUI_CrossLanguageOption* OH_ArkUI_CrossLanguageOption_Create(void)](#oh_arkui_crosslanguageoption_create) | Create a cross-language option instance. |
| [void OH_ArkUI_CrossLanguageOption_Destroy(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_destroy) | Destroy the cross-language option instance. |
| [void OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus(ArkUI_CrossLanguageOption* option, bool enabled)](#oh_arkui_crosslanguageoption_setattributesettingstatus) | Enable the attribute setting in the cross-language option. |
| [bool OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_getattributesettingstatus) | Get the attribute setting enable of the cross-language option. |
| [int32_t OH_ArkUI_ListItemSwipeAction_Expand(ArkUI_NodeHandle node, ArkUI_ListItemSwipeActionDirection direction)](#oh_arkui_listitemswipeaction_expand) | Expand the swipe action. |
| [int32_t OH_ArkUI_ListItemSwipeAction_Collapse(ArkUI_NodeHandle node)](#oh_arkui_listitemswipeaction_collapse) | Collapse the swipe action. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetContent(ArkUI_TextMenuItem* item, const char* content)](#oh_arkui_textmenuitem_setcontent) | Set text menu item title. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetContent(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_getcontent) | Get text menu item title. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetIcon(ArkUI_TextMenuItem* item, const char* icon)](#oh_arkui_textmenuitem_seticon) | Set text menu item icon. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetIcon(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_geticon) | Get text menu item icon. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetLabelInfo(ArkUI_TextMenuItem* item, const char* labelInfo)](#oh_arkui_textmenuitem_setlabelinfo) | Set text menu item label info for keyboard shortcut. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetLabelInfo(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_getlabelinfo) | Get text menu item label info for keyboard shortcut.. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetId(ArkUI_TextMenuItem* item, int32_t id)](#oh_arkui_textmenuitem_setid) | Set text menu item id. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetId(const ArkUI_TextMenuItem* item, int32_t* id)](#oh_arkui_textmenuitem_getid) | Get text menu item id. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetSize(ArkUI_TextMenuItemArray* items, int32_t* size)](#oh_arkui_textmenuitemarray_getsize) | Get the size of text menu items. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetItem(ArkUI_TextMenuItemArray* items, int32_t index, ArkUI_TextMenuItem** item)](#oh_arkui_textmenuitemarray_getitem) | Get text menu item at index. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Insert(ArkUI_TextMenuItemArray* items, ArkUI_TextMenuItem* item, int32_t index)](#oh_arkui_textmenuitemarray_insert) | Insert text menu item at index. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Erase(ArkUI_TextMenuItemArray* items, int32_t index)](#oh_arkui_textmenuitemarray_erase) | Erase text menu item at index. |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Clear(ArkUI_TextMenuItemArray* items)](#oh_arkui_textmenuitemarray_clear) | Clear all the items. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextCreateMenuCallback cb)](#oh_arkui_texteditmenuoptions_registeroncreatemenucallback) | Set the event to be called when text menu create. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextPrepareMenuCallback cb)](#oh_arkui_texteditmenuoptions_registeronpreparemenucallback) | Set the event to be called when menu prepare. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextMenuItemClickCallback cb)](#oh_arkui_texteditmenuoptions_registeronmenuitemclickcallback) | Set the event to be called when menu item click. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType textSpanType)](#oh_arkui_textselectionmenuoptions_setspantype) | Sets the recognition types of a configuration object for selected text recognition. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType* spanType)](#oh_arkui_textselectionmenuoptions_getspantype) | Gets the span type select menu options. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle node)](#oh_arkui_textselectionmenuoptions_setcontentnode) | Set custom text menu node of text. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle* node)](#oh_arkui_textselectionmenuoptions_getcontentnode) | Get custom text menu node of text. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType responseType)](#oh_arkui_textselectionmenuoptions_setresponsetype) | Sets the recognition types of a configuration object for selected text recognition. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType* responseType)](#oh_arkui_textselectionmenuoptions_getresponsetype) | Gets the response type select menu options. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (\*callback)(int32_t start, int32_t end, void* userData))](#oh_arkui_textselectionmenuoptions_registeronmenushowcallback) | Set the event to be called when selection menu show. |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (\*callback)(int32_t start, int32_t end, void* userData))](#oh_arkui_textselectionmenuoptions_registeronmenuhidecallback) | Set the event to be called when selection menu hide. |
| [ArkUI_SelectionOptions* OH_ArkUI_SelectionOptions_Create()](#oh_arkui_selectionoptions_create) | Create selection options. |
| [void OH_ArkUI_SelectionOptions_Dispose(ArkUI_SelectionOptions* options)](#oh_arkui_selectionoptions_dispose) | Dispose selection options object. |
| [void OH_ArkUI_SelectionOptions_SetMenuPolicy(ArkUI_SelectionOptions* options, ArkUI_MenuPolicy menuPolicy)](#oh_arkui_selectionoptions_setmenupolicy) | Sets the menu policy for selection options. |
| [ArkUI_MenuPolicy OH_ArkUI_SelectionOptions_GetMenuPolicy(ArkUI_SelectionOptions* options)](#oh_arkui_selectionoptions_getmenupolicy) | Gets the menu policy of selection options. |
| [ArkUI_SelectedDragPreviewStyle* OH_ArkUI_SelectedDragPreviewStyle_Create()](#oh_arkui_selecteddragpreviewstyle_create) | Create a configuration object for selected drag preview style. |
| [void OH_ArkUI_SelectedDragPreviewStyle_Dispose(ArkUI_SelectedDragPreviewStyle* config)](#oh_arkui_selecteddragpreviewstyle_dispose) | Dispose a configuration object for selected drag preview style. |
| [void OH_ArkUI_SelectedDragPreviewStyle_SetColor(ArkUI_SelectedDragPreviewStyle* config, uint32_t color)](#oh_arkui_selecteddragpreviewstyle_setcolor) | Sets the color of background for selected drag preview style. |
| [uint32_t OH_ArkUI_SelectedDragPreviewStyle_GetColor(ArkUI_SelectedDragPreviewStyle* config)](#oh_arkui_selecteddragpreviewstyle_getcolor) | Gets the color of background for selected drag preview style. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType type)](#oh_arkui_decorationstyleoptions_settextdecorationtype) | Sets the decoration type of the decorative line style. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType* type)](#oh_arkui_decorationstyleoptions_gettextdecorationtype) | Obtains the decoration type of the decorative line style. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t color)](#oh_arkui_decorationstyleoptions_setcolor) | Sets the color of the decorative line. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t* color)](#oh_arkui_decorationstyleoptions_getcolor) | Obtains the color of the decorative line. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle style)](#oh_arkui_decorationstyleoptions_settextdecorationstyle) | Sets the style of the decorative line. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle* style)](#oh_arkui_decorationstyleoptions_gettextdecorationstyle) | Obtains the style of the decorative line. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float thicknessScale)](#oh_arkui_decorationstyleoptions_setthicknessscale) | Sets the scale factor of the decorative line thickness. |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float* thicknessScale)](#oh_arkui_decorationstyleoptions_getthicknessscale) | Obtains the scale factor of the decorative line thickness. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetTypes(OH_ArkUI_TextDataDetectorConfig* config, const ArkUI_TextDataDetectorType* types, int32_t length)](#oh_arkui_textdatadetectorconfig_settypes) | Sets the types of the text entity recognition configuration. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetTypes(OH_ArkUI_TextDataDetectorConfig* config, ArkUI_TextDataDetectorType* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textdatadetectorconfig_gettypes) | Obtains the types of the text entity recognition configuration. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback(OH_ArkUI_TextDataDetectorConfig* config, void* userData, void (\*callback)(const char* result, int32_t length, void* userData))](#oh_arkui_textdatadetectorconfig_registerondetectresultupdatecallback) | Sets the callback for text entity recognition result updates. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t color)](#oh_arkui_textdatadetectorconfig_setcolor) | Sets the color of the recognized content. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t* color)](#oh_arkui_textdatadetectorconfig_getcolor) | Obtains the color of the recognized content. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)](#oh_arkui_textdatadetectorconfig_setdecorationstyleoptions) | Sets the decoration style of the recognized content. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)](#oh_arkui_textdatadetectorconfig_getdecorationstyleoptions) | Obtains the decoration style of the recognized content. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool enablePreviewMenu)](#oh_arkui_textdatadetectorconfig_setenablepreviewmenu) | Sets whether to display the preview menu when the recognized content is long-pressed. |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool* enablePreviewMenu)](#oh_arkui_textdatadetectorconfig_getenablepreviewmenu) | Obtains whether the preview menu is displayed when the recognized content is long-pressed. |
| [ArkUI_ErrorCode OH_ArkUI_TextController_SetStyledString(OH_ArkUI_TextController* controller, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_textcontroller_setstyledstring) | Set the StyledString of the text. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* value)](#oh_arkui_texteditorplaceholderoptions_setvalue) | Sets the text for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorplaceholderoptions_getvalue) | Obtains the text for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float fontSize)](#oh_arkui_texteditorplaceholderoptions_setfontsize) | Sets the font size for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float* fontSize)](#oh_arkui_texteditorplaceholderoptions_getfontsize) | Obtains the font size for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontWeight)](#oh_arkui_texteditorplaceholderoptions_setfontweight) | Sets the font weight for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontWeight)](#oh_arkui_texteditorplaceholderoptions_getfontweight) | Obtains the font weight for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* fontFamily)](#oh_arkui_texteditorplaceholderoptions_setfontfamily) | Sets the font family for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorplaceholderoptions_getfontfamily) | Obtains the font family for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle fontStyle)](#oh_arkui_texteditorplaceholderoptions_setfontstyle) | Sets the font style for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle* fontStyle)](#oh_arkui_texteditorplaceholderoptions_getfontstyle) | Obtains the font style for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontColor)](#oh_arkui_texteditorplaceholderoptions_setfontcolor) | Sets the font color for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontColor)](#oh_arkui_texteditorplaceholderoptions_getfontcolor) | Obtains the font color for the placeholder text options used when there is no input. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t caretOffset)](#oh_arkui_texteditorstyledstringcontroller_setcaretoffset) | Sets the caret offset using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t* caretOffset)](#oh_arkui_texteditorstyledstringcontroller_getcaretoffset) | Obtains the caret offset using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetSelection(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t start, uint32_t end, ArkUI_MenuPolicy menuPolicy)](#oh_arkui_texteditorstyledstringcontroller_setselection) | Sets the selected area using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_IsEditing(OH_ArkUI_TextEditorStyledStringController* controller, bool* isEditing)](#oh_arkui_texteditorstyledstringcontroller_isediting) | Obtains the editing status of the text editor using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_StopEditing(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_stopediting) | Exits the editing status of the text editor using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetPreviewText(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* offset, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorstyledstringcontroller_getpreviewtext) | Obtains the preview text using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretRect(OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_Rect* rect)](#oh_arkui_texteditorstyledstringcontroller_getcaretrect) | Obtains the caret-selected rectangle using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_DeleteBackward(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_deletebackward) | Deletes characters using the styled string controller. If no content is selected, one character before thecurrent caret position is deleted. If content is selected, the selected content is deleted. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment align)](#oh_arkui_texteditorparagraphstyle_settextalign) | Sets the text alignment mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment* align)](#oh_arkui_texteditorparagraphstyle_gettextalign) | Obtains the text alignment mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative* pixelmap)](#oh_arkui_texteditorparagraphstyle_setleadingmarginpixelmap) | Sets the PixelMap for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative** pixelmap)](#oh_arkui_texteditorparagraphstyle_getleadingmarginpixelmap) | Obtains the PixelMap for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t width)](#oh_arkui_texteditorparagraphstyle_setleadingmarginwidth) | Sets the width for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* width)](#oh_arkui_texteditorparagraphstyle_getleadingmarginwidth) | Obtains the width for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t height)](#oh_arkui_texteditorparagraphstyle_setleadingmarginheight) | Sets the height for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* height)](#oh_arkui_texteditorparagraphstyle_getleadingmarginheight) | Obtains the height for paragraph indentation in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak wordBreak)](#oh_arkui_texteditorparagraphstyle_setwordbreak) | Sets the word breaking mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak* wordBreak)](#oh_arkui_texteditorparagraphstyle_getwordbreak) | Obtains the word breaking mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy lineBreakStrategy)](#oh_arkui_texteditorparagraphstyle_setlinebreakstrategy) | Sets the line breaking strategy in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy* lineBreakStrategy)](#oh_arkui_texteditorparagraphstyle_getlinebreakstrategy) | Obtains the line breaking strategy in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t paragraphSpacing)](#oh_arkui_texteditorparagraphstyle_setparagraphspacing) | Sets the paragraph spacing in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* paragraphSpacing)](#oh_arkui_texteditorparagraphstyle_getparagraphspacing) | Obtains the paragraph spacing in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment verticalAlignment)](#oh_arkui_texteditorparagraphstyle_settextverticalalign) | Sets the text vertical alignment mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment* verticalAlignment)](#oh_arkui_texteditorparagraphstyle_gettextverticalalign) | Obtains the text vertical alignment mode in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection textDirection)](#oh_arkui_texteditorparagraphstyle_settextdirection) | Sets the text direction in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection* textDirection)](#oh_arkui_texteditorparagraphstyle_gettextdirection) | Obtains the text direction in the paragraph style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorParagraphStyle* style)](#oh_arkui_texteditorstyledstringcontroller_settypingparagraphstyle) | Sets the typing paragraph style using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)](#oh_arkui_texteditortextstyle_setfontcolor) | Sets the font color of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)](#oh_arkui_texteditortextstyle_getfontcolor) | Obtains the font color of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontSize(OH_ArkUI_TextEditorTextStyle* style, float size)](#oh_arkui_texteditortextstyle_setfontsize) | Sets the font size of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontSize(OH_ArkUI_TextEditorTextStyle* style, float* size)](#oh_arkui_texteditortextstyle_getfontsize) | Obtains the font size of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle fontStyle)](#oh_arkui_texteditortextstyle_setfontstyle) | Sets the font style of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle* fontStyle)](#oh_arkui_texteditortextstyle_getfontstyle) | Obtains the font style of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t fontWeight)](#oh_arkui_texteditortextstyle_setfontweight) | Sets the font weight of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t* fontWeight)](#oh_arkui_texteditortextstyle_getfontweight) | Obtains the font weight of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFamily(OH_ArkUI_TextEditorTextStyle* style, const char* fontFamily)](#oh_arkui_texteditortextstyle_setfontfamily) | Sets the font family of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFamily(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditortextstyle_getfontfamily) | Obtains the font family of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)](#oh_arkui_texteditortextstyle_setdecoration) | Sets the text decoration options of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)](#oh_arkui_texteditortextstyle_getdecoration) | Obtains the text decoration options of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextShadows(OH_ArkUI_TextEditorTextStyle* style, const OH_ArkUI_ShadowOptions** options, int32_t length)](#oh_arkui_texteditortextstyle_settextshadows) | Sets the text shadow options of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextShadows(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)](#oh_arkui_texteditortextstyle_gettextshadows) | Obtains the text shadow options of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t lineHeight)](#oh_arkui_texteditortextstyle_setlineheight) | Sets the line height of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t* lineHeight)](#oh_arkui_texteditortextstyle_getlineheight) | Obtains the line height of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t letterSpacing)](#oh_arkui_texteditortextstyle_setletterspacing) | Sets the letter spacing of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t* letterSpacing)](#oh_arkui_texteditortextstyle_getletterspacing) | Obtains the letter spacing of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFeature(OH_ArkUI_TextEditorTextStyle* style, const char* fontFeature)](#oh_arkui_texteditortextstyle_setfontfeature) | Sets the font feature of the text style, such as monospaced digits. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFeature(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditortextstyle_getfontfeature) | Obtains the font feature of the text style, such as monospaced digits. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool halfLeading)](#oh_arkui_texteditortextstyle_sethalfleading) | Sets whether to evenly distribute the line spacing to the top and bottom of each line in the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool* halfLeading)](#oh_arkui_texteditortextstyle_gethalfleading) | Obtains whether the line spacing is evenly distributed to the top and bottom of each line in the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)](#oh_arkui_texteditortextstyle_settextbackgroundcolor) | Sets the text background color of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)](#oh_arkui_texteditortextstyle_gettextbackgroundcolor) | Obtains the text background color of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)](#oh_arkui_texteditortextstyle_settextbackgroundradius) | Sets the radius of the rounded corner of the text background of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)](#oh_arkui_texteditortextstyle_gettextbackgroundradius) | Obtains the radius of the rounded corner of the text background of the text style. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)](#oh_arkui_texteditorstyledstringcontroller_settypingstyle) | Sets the typing style using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)](#oh_arkui_texteditorstyledstringcontroller_gettypingstyle) | Obtains the typing style using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType textEditorSpanType)](#oh_arkui_texteditorselectionmenuoptions_setspantype) | Sets the span type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType* textEditorSpanType)](#oh_arkui_texteditorselectionmenuoptions_getspantype) | Obtains the span type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle node)](#oh_arkui_texteditorselectionmenuoptions_setcontentnode) | Sets the content node of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle* node)](#oh_arkui_texteditorselectionmenuoptions_getcontentnode) | Obtains the content node of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType responseType)](#oh_arkui_texteditorselectionmenuoptions_setresponsetype) | Sets the response type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType* responseType)](#oh_arkui_texteditorselectionmenuoptions_getresponsetype) | Obtains the response type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType menuType)](#oh_arkui_texteditorselectionmenuoptions_setmenutype) | Sets the type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType* menuType)](#oh_arkui_texteditorselectionmenuoptions_getmenutype) | Obtains the type of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (\*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenushowcallback) | Sets the callback triggered when the text selection menu is displayed. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (\*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenuhidecallback) | Sets the callback triggered when the text selection menu is hidden. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (\*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenuappearcallback) | Sets the callback triggered when the text selection menu appears. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (\*callback)(void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenudisappearcallback) | Sets the callback triggered when the text selection menu disappears. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode mode)](#oh_arkui_texteditorselectionmenuoptions_sethapticfeedbackmode) | Sets the haptic feedback mode of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode* mode)](#oh_arkui_texteditorselectionmenuoptions_gethapticfeedbackmode) | Obtains the haptic feedback mode of the text selection menu in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_closeselectionmenu) | Closes the text selection menu of the styled string controller in the text editor. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetSelection(const OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* start, uint32_t* end)](#oh_arkui_texteditorstyledstringcontroller_getselection) | Obtains the selected area using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_setstyledstring) | Sets the styled string displayed using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_getstyledstring) | Obtains the styled string displayed using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_setstyledplaceholder) | Sets the placeholder text in the styled string style using the styled string controller. |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_ScrollToVisible(const OH_ArkUI_TextEditorStyledStringController* controller, int32_t start, int32_t end)](#oh_arkui_texteditorstyledstringcontroller_scrolltovisible) | Scroll the text editor component to make the specified content visible. |
| [ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureBackground(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorBackground* background)](#oh_arkui_pickerindicatorstyle_configurebackground) | Set the parameters of background style. |
| [ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureDivider(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorDivider* divider)](#oh_arkui_pickerindicatorstyle_configuredivider) | Set the parameters of divider style. |
| [void OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus(ArkUI_CrossLanguageOption* option, OH_ArkUI_CrossLanguageOperatingStatus status)](#oh_arkui_crosslanguageoption_settreeoperatingstatus) | Sets the tree operating status for the cross-language option. |
| [OH_ArkUI_CrossLanguageOperatingStatus OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_gettreeoperatingstatus) | Gets the tree operating status of the cross-language option. |
| [OH_ArkUI_LinearGradientOptions* OH_ArkUI_LinearGradientOptions_Create()](#oh_arkui_lineargradientoptions_create) | Creates a linear gradient options object.The returned object must be released by calling <b>OH_ArkUI_LinearGradientOptions_Destroy</b>. |
| [void OH_ArkUI_LinearGradientOptions_Destroy(OH_ArkUI_LinearGradientOptions* options)](#oh_arkui_lineargradientoptions_destroy) | Destroys a linear gradient options object. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetAngle(OH_ArkUI_LinearGradientOptions* options, float angle)](#oh_arkui_lineargradientoptions_setangle) | Sets angle of linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetAngle(const OH_ArkUI_LinearGradientOptions* options, float* angle)](#oh_arkui_lineargradientoptions_getangle) | Gets angle of linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetDirection(OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection direction)](#oh_arkui_lineargradientoptions_setdirection) | Sets direction of linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetDirection(const OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection* direction)](#oh_arkui_lineargradientoptions_getdirection) | Gets direction of linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetRepeating(OH_ArkUI_LinearGradientOptions* options, bool repeating)](#oh_arkui_lineargradientoptions_setrepeating) | Sets whether colors are repeated in linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetRepeating(const OH_ArkUI_LinearGradientOptions* options, bool* repeating)](#oh_arkui_lineargradientoptions_getrepeating) | Gets whether colors are repeated in linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetColorStop(OH_ArkUI_LinearGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)](#oh_arkui_lineargradientoptions_setcolorstop) | Sets color stops of linear gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetColorStop(const OH_ArkUI_LinearGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)](#oh_arkui_lineargradientoptions_getcolorstop) | Gets color stops of linear gradient options. |
| [OH_ArkUI_RadialGradientOptions* OH_ArkUI_RadialGradientOptions_Create()](#oh_arkui_radialgradientoptions_create) | Creates a radial gradient options object.The returned object must be released by calling <b>OH_ArkUI_RadialGradientOptions_Destroy</b>. |
| [void OH_ArkUI_RadialGradientOptions_Destroy(OH_ArkUI_RadialGradientOptions* options)](#oh_arkui_radialgradientoptions_destroy) | Destroys a radial gradient options object. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterX(OH_ArkUI_RadialGradientOptions* options, float centerX)](#oh_arkui_radialgradientoptions_setcenterx) | Sets centerX of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterX(const OH_ArkUI_RadialGradientOptions* options, float* centerX)](#oh_arkui_radialgradientoptions_getcenterx) | Gets centerX of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterY(OH_ArkUI_RadialGradientOptions* options, float centerY)](#oh_arkui_radialgradientoptions_setcentery) | Sets centerY of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterY(const OH_ArkUI_RadialGradientOptions* options, float* centerY)](#oh_arkui_radialgradientoptions_getcentery) | Gets centerY of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRadius(OH_ArkUI_RadialGradientOptions* options, float radius)](#oh_arkui_radialgradientoptions_setradius) | Sets radius of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRadius(const OH_ArkUI_RadialGradientOptions* options, float* radius)](#oh_arkui_radialgradientoptions_getradius) | Gets radius of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRepeating(OH_ArkUI_RadialGradientOptions* options, bool repeating)](#oh_arkui_radialgradientoptions_setrepeating) | Sets whether colors are repeated in radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRepeating(const OH_ArkUI_RadialGradientOptions* options, bool* repeating)](#oh_arkui_radialgradientoptions_getrepeating) | Gets whether colors are repeated in radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetColorStop(OH_ArkUI_RadialGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)](#oh_arkui_radialgradientoptions_setcolorstop) | Sets color stops of radial gradient options. |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetColorStop(const OH_ArkUI_RadialGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)](#oh_arkui_radialgradientoptions_getcolorstop) | Gets color stops of radial gradient options. |

## Enum type description

### ArkUI_CopyOptions

```c
enum ArkUI_CopyOptions
```

**Description**

Enumerates the text copy and paste modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_COPY_OPTIONS_NONE = 0 | Copy is not allowed. |
| ARKUI_COPY_OPTIONS_IN_APP | Intra-application copy is allowed. |
| ARKUI_COPY_OPTIONS_LOCAL_DEVICE | Intra-device copy is allowed. |
| ARKUI_COPY_OPTIONS_CROSS_DEVICE | Cross-device copy is allowed. |

### ArkUI_FocusWrapMode

```c
enum ArkUI_FocusWrapMode
```

**Description**

Enumerates the focus wrap mode of components.

**Since**: 20

| Enum item | Description |
| -- | -- |
| ARKUI_FOCUS_WRAP_MODE_DEFAULT = 0 | Default mode, where focus does not wrap when arrow keys are used. |
| ARKUI_FOCUS_WRAP_WITH_ARROW = 1 | Focus wraps automatically when arrow keys are used. |

### ArkUI_ItemFillPolicy

```c
enum ArkUI_ItemFillPolicy
```

**Description**

Specifies the number of columns for different responsive breakpoint specifications.

**Since**: 22

| Enum item | Description |
| -- | -- |
| ARKUI_ITEMFILLPOLICY_NONE = -1 | No responsive breakpoint configuration. |
| ARKUI_ITEMFILLPOLICY_DEFAULT = 0 | Default responsive layout:<b>List</b> or <b>Swiper</b> component: 1 column (SM or smaller), 2 columns (MD), 3 columns (LG or larger).<b>Grid</b> or <b>WaterFlow</b> component: 2 columns (SM or smaller), 3 columns (MD), 5 columns (LG or larger). |
| ARKUI_ITEMFILLPOLICY_SM1MD2LG3 = 1 | 1 column (SM or smaller), 2 columns (MD), 3 columns (LG or larger). |
| ARKUI_ITEMFILLPOLICY_SM2MD3LG5 = 2 | 2 columns (SM or smaller), 3 columns (MD), 5 columns (LG or larger). |

### ArkUI_BorderStyle

```c
enum ArkUI_BorderStyle
```

**Description**

Enumerates the border styles.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_BORDER_STYLE_SOLID = 0 | Solid border. |
| ARKUI_BORDER_STYLE_DASHED | Dashed border. |
| ARKUI_BORDER_STYLE_DOTTED | Dotted border. |

### ArkUI_AccessibilityMode

```c
enum ArkUI_AccessibilityMode
```

**Description**

Enumerates the accessibility modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_ACCESSIBILITY_MODE_AUTO = 0 | Whether the component can be identified by the accessibility service is dependent on the component. |
| ARKUI_ACCESSIBILITY_MODE_ENABLED | The component can be identified by the accessibility service. |
| ARKUI_ACCESSIBILITY_MODE_DISABLED | The component cannot be identified by the accessibility service. |
| ARKUI_ACCESSIBILITY_MODE_DISABLED_FOR_DESCENDANTS | The component and all its child components cannot be identified by the accessibility service. |

### ArkUI_AdaptiveColor

```c
enum ArkUI_AdaptiveColor
```

**Description**

Enumerates the adaptive color modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_ADAPTIVE_COLOR_DEFAULT = 0 | Adaptive color mode is not used. |
| ARKUI_ADAPTIVE_COLOR_AVERAGE | Adaptive color mode is used. |

### ArkUI_ColorMode

```c
enum ArkUI_ColorMode
```

**Description**

Enumerates the color modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_COLOR_MODE_SYSTEM = 0 | Following the system color mode. |
| ARKUI_COLOR_MODE_LIGHT | Light color mode. |
| ARKUI_COLOR_MODE_DARK | Dark color mode. |

### ArkUI_SystemColorMode

```c
enum ArkUI_SystemColorMode
```

**Description**

Enumerates the system color modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_SYSTEM_COLOR_MODE_LIGHT = 0 | Light color mode. |
| ARKUI_SYSTEM_COLOR_MODE_DARK | Dark color mode. |

### ArkUI_ListItemSwipeActionState

```c
enum ArkUI_ListItemSwipeActionState
```

**Description**

Define the pattern of element arrangement in the main axis direction of the Swiper component.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_COLLAPSED = 0 | In the folded state, when the ListItem slides in the opposite direction to the main axis, |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_EXPANDED | In the folded state, when the ListItem slides in the opposite direction to the spindle, |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_ACTIONING | Long distance state, the state of deleting a ListItem after it enters the long distance deletion area. |

### ArkUI_ListItemSwipeEdgeEffect

```c
enum ArkUI_ListItemSwipeEdgeEffect
```

**Description**

Define the explicit and implicit mode of the SwipeAction method for the Listitem component.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_SPRING = 0 | The ListItem can continue to be scratched after the distance exceeds the size of the scratched component. |
| ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_NONE | The sliding distance of the ListItem cannot exceed the size of the scratched component. |

### ArkUI_LengthMetricUnit

```c
enum ArkUI_LengthMetricUnit
```

**Description**

Enumerates the component units.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_LENGTH_METRIC_UNIT_DEFAULT = -1 | Default, which is fp for fonts and vp for non-fonts. |
| ARKUI_LENGTH_METRIC_UNIT_PX = 0 | px. |
| ARKUI_LENGTH_METRIC_UNIT_VP | vp. |
| ARKUI_LENGTH_METRIC_UNIT_FP | fp. |

### ArkUI_AccessibilityCheckedState

```c
enum ArkUI_AccessibilityCheckedState
```

**Description**

Defines the state type for the accessibility checkbox.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_ACCESSIBILITY_UNCHECKED = 0 | The Checkbox unchecked. |
| ARKUI_ACCESSIBILITY_CHECKED | The Checkbox checked. |

### ArkUI_AccessibilityActionType

```c
enum ArkUI_AccessibilityActionType
```

**Description**

Define accessible action types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_ACCESSIBILITY_ACTION_CLICK = 1 << 0 | click action. |
| ARKUI_ACCESSIBILITY_ACTION_LONG_CLICK = 1 << 1 | long click action. |
| ARKUI_ACCESSIBILITY_ACTION_CUT = 1 << 2 | cut action. |
| ARKUI_ACCESSIBILITY_ACTION_COPY = 1 << 3 | copy action. |
| ARKUI_ACCESSIBILITY_ACTION_PASTE = 1 << 4 | paste action. |

### ArkUI_SafeAreaType

```c
enum ArkUI_SafeAreaType
```

**Description**

defines the enumerated value of the extended security zone.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_SAFE_AREA_TYPE_SYSTEM = 1 | The default security zone includes the status bar and navigation bar. |
| ARKUI_SAFE_AREA_TYPE_CUTOUT = 1 << 1 | Non-secure areas of the device, such as bangs or hole holes. |
| ARKUI_SAFE_AREA_TYPE_KEYBOARD = 1 << 2 | Soft keyboard area. |

### ArkUI_KeyboardAvoidMode

```c
enum ArkUI_KeyboardAvoidMode
```

**Description**

defines the enumerated value of the customDialog's keyboard avoid mode.

**Since**: 15

| Enum item | Description |
| -- | -- |
| ARKUI_KEYBOARD_AVOID_MODE_DEFAULT = 0 | Defines avoid keyboard when keyboard shows. |
| ARKUI_KEYBOARD_AVOID_MODE_NONE | Defines not avoid keyboard when keyboard shows. |

### ArkUI_HoverModeAreaType

```c
enum ArkUI_HoverModeAreaType
```

**Description**

defines the enumerated value of area in hover mode.

**Since**: 15

| Enum item | Description |
| -- | -- |
| ARKUI_HOVER_MODE_AREA_TYPE_TOP = 0 | Layout top half screen when the phone in hover mode. |
| ARKUI_HOVER_MODE_AREA_TYPE_BOTTOM | Layout bottom half screen when the phone in hover mode. |

### ArkUI_ExpandMode

```c
enum ArkUI_ExpandMode
```

**Description**

Enumerates the expand modes.

**Since**: 15

| Enum item | Description |
| -- | -- |
| ARKUI_NOT_EXPAND = 0 | Not expand. |
| ARKUI_EXPAND = 1 | Expand. |
| ARKUI_LAZY_EXPAND = 2 | Lazy expand. Expand the children of node if needed. |

### ArkUI_EdgeDirection

```c
enum ArkUI_EdgeDirection
```

**Description**

Enumerates the edge direction.

**Since**: 20

| Enum item | Description |
| -- | -- |
| ARKUI_EDGE_DIRECTION_ALL = 0 | Set all edge direction. |
| ARKUI_EDGE_DIRECTION_LEFT | Set left edge direction. |
| ARKUI_EDGE_DIRECTION_RIGHT | Set right edge direction. |
| ARKUI_EDGE_DIRECTION_TOP | Set top edge direction. |
| ARKUI_EDGE_DIRECTION_BOTTOM | Set bottom edge direction. |

### ArkUI_CornerDirection

```c
enum ArkUI_CornerDirection
```

**Description**

Enumerates the corner direction.

**Since**: 20

| Enum item | Description |
| -- | -- |
| ARKUI_CORNER_DIRECTION_ALL = 0 | Set all corner direction. |
| ARKUI_CORNER_DIRECTION_TOP_LEFT | Set top left corner direction. |
| ARKUI_CORNER_DIRECTION_TOP_RIGHT | Set top right corner direction. |
| ARKUI_CORNER_DIRECTION_BOTTOM_LEFT | Set bottom left corner direction. |
| ARKUI_CORNER_DIRECTION_BOTTOM_RIGHT | Set bottom right corner direction. |

### ArkUI_MenuPolicy

```c
enum ArkUI_MenuPolicy
```

**Description**

Menu pop-up strategy.

**Since**: 23

| Enum item | Description |
| -- | -- |
| ARKUI_MENU_POLICY_DEFAULT = 0 | Determine whether to pop up the menu according to the underlying default logic. |
| ARKUI_MENU_POLICY_HIDE = 1 | Never pop up the menu. |
| ARKUI_MENU_POLICY_SHOW = 2 | Always pop up the menu. |

### ArkUI_ListItemSwipeActionDirection

```c
enum ArkUI_ListItemSwipeActionDirection
```

**Description**

Define the direction to expand the swipe action.

**Since**: 21

| Enum item | Description |
| -- | -- |
| ARKUI_LIST_ITEM_SWIPE_ACTION_DIRECTION_START = 0 | When the List direction is vertical, it indicates the left in LTR mode and right in RTL mode.When the List direction is horizontal, it indicates the top. |
| ARKUI_LIST_ITEM_SWIPE_ACTION_DIRECTION_END = 1 | When the List direction is vertical, it indicates the right in LTR mode and left in RTL mode.When the List direction is horizontal, it indicates the bottom. |

### ArkUI_RenderStrategy

```c
enum ArkUI_RenderStrategy
```

**Description**

Enumerates the graphics rendering strategy.

**Since**: 23

| Enum item | Description |
| -- | -- |
| ARKUI_RENDERSTRATEGY_FAST = 0 | The current component and its child components will be drawn directly onto the screen canvas. |
| ARKUI_RENDERSTRATEGY_OFFSCREEN | The current component and its child components will first be drawn onto an off-screen canvas,then undergo some graphic rendering operations, and finally be drawn onto the main canvas. |

### OH_ArkUI_CrossLanguageOperatingStatus

```c
enum OH_ArkUI_CrossLanguageOperatingStatus
```

**Description**

Enumerates the tree operating status for the cross-language option.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_ARKUI_TREE_OPERATING_STATUS_UNDEFINED = 0 |  |
| OH_ARKUI_TREE_OPERATING_STATUS_ENABLE = 1 |  |
| OH_ARKUI_TREE_OPERATING_STATUS_DISABLE = 2 |  |

### OH_ArkUI_NodeMountPolicy

```c
enum OH_ArkUI_NodeMountPolicy
```

**Description**

Enumeration of the policy for mounting child node to the target node.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_ARKUI_NODE_MOUNT_POLICY_SINGLE_IF_RENDER_NODE = 0 |  |
| OH_ARKUI_NODE_MOUNT_POLICY_MIXED = 1 |  |

### OH_ArkUI_ArcDirection

```c
enum OH_ArkUI_ArcDirection
```

**Description**

Enumerates the ArcDirection.

**Since**: 26.1.0

| Enum item | Description |
| -- | -- |
| OH_ARKUI_ARCDIRECTION_THREE_CLOCK_DIRECTION = 0 |  |
| OH_ARKUI_ARCDIRECTION_SIX_CLOCK_DIRECTION = 1 |  |
| OH_ARKUI_ARCDIRECTION_NINE_CLOCK_DIRECTION = 2 |  |


## Function description

### OH_ArkUI_LayoutConstraint_Create()

```c
ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Create()
```

**Description**

Creates a size constraint.

**Since**: 12

### OH_ArkUI_LayoutConstraint_Copy()

```c
ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Copy(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Creates a deep copy of a size constraint.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_LayoutConstraint*](capi-arkui-nativemodule-arkui-layoutconstraint.md) | Returns the pointer to the new size constraint. |

### OH_ArkUI_LayoutConstraint_Dispose()

```c
void* OH_ArkUI_LayoutConstraint_Dispose(ArkUI_LayoutConstraint* Constraint)
```

**Description**

Destroys the pointer to a size constraint.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

### OH_ArkUI_LayoutConstraint_GetMaxWidth()

```c
int32_t OH_ArkUI_LayoutConstraint_GetMaxWidth(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the maximum width for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the maximum width. |

### OH_ArkUI_LayoutConstraint_GetMinWidth()

```c
int32_t OH_ArkUI_LayoutConstraint_GetMinWidth(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the minimum width for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the minimum width. |

### OH_ArkUI_LayoutConstraint_GetMaxHeight()

```c
int32_t OH_ArkUI_LayoutConstraint_GetMaxHeight(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the maximum height for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the maximum height. |

### OH_ArkUI_LayoutConstraint_GetMinHeight()

```c
int32_t OH_ArkUI_LayoutConstraint_GetMinHeight(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the minimum height for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the minimum height. |

### OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth()

```c
int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the width percentage reference for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the width percentage reference. |

### OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight()

```c
int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight(const ArkUI_LayoutConstraint* Constraint)
```

**Description**

Obtains the height percentage reference for a size constraint, in px.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the height percentage reference. |

### OH_ArkUI_LayoutConstraint_SetMaxWidth()

```c
void OH_ArkUI_LayoutConstraint_SetMaxWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the maximum width.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the maximum width, in px. |

### OH_ArkUI_LayoutConstraint_SetMinWidth()

```c
void OH_ArkUI_LayoutConstraint_SetMinWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the minimum width.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the minimum width, in px. |

### OH_ArkUI_LayoutConstraint_SetMaxHeight()

```c
void OH_ArkUI_LayoutConstraint_SetMaxHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the maximum height.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the maximum height, in px. |

### OH_ArkUI_LayoutConstraint_SetMinHeight()

```c
void OH_ArkUI_LayoutConstraint_SetMinHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the minimum height.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the minimum height, in px. |

### OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth()

```c
void OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the width percentage reference.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the width percentage reference, in px. |

### OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight()

```c
void OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```

**Description**

Sets the height percentage reference.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the pointer to the size constraint. |
| int32_t value | Indicates the height percentage reference, in px. |

### OH_ArkUI_DrawContext_GetCanvas()

```c
void* OH_ArkUI_DrawContext_GetCanvas(ArkUI_DrawContext* context)
```

**Description**

Obtains the pointer to a canvas for drawing, which can be converted into the <b>OH_Drawing_Canvas</b> pointerin the <b>Drawing</b> module.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawContext](capi-arkui-nativemodule-arkui-drawcontext.md)* context | Indicates the pointer to the drawing context. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | Returns the pointer to the canvas for drawing. |

### OH_ArkUI_DrawContext_GetSize()

```c
ArkUI_IntSize OH_ArkUI_DrawContext_GetSize(ArkUI_DrawContext* context)
```

**Description**

Obtains the size of a drawing area.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawContext](capi-arkui-nativemodule-arkui-drawcontext.md)* context | Indicates the pointer to the drawing context. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_IntSize](capi-arkui-nativemodule-arkui-intsize.md) | Returns the size of the drawing area. |

### OH_ArkUI_SwiperDigitIndicator_SetFontWeight()

```c
void OH_ArkUI_SwiperDigitIndicator_SetFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight fontWeight)
```

**Description**

Sets the font weight of total count in the digital indicator.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_SwiperDigitIndicator *indicator | The pointer to the digital indicator. |
| ArkUI_FontWeight fontWeight | font weight [ArkUI_FontWeight](capi-text-h.md#arkui_fontweight). The default value is <b>ARKUI_FONT_WEIGHT_NORMAL</b>. |

### OH_ArkUI_SwiperDigitIndicator_GetFontWeight()

```c
ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetFontWeight(ArkUI_SwiperDigitIndicator* indicator)
```

**Description**

Gets the font weight of total count in the digital indicator.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_SwiperDigitIndicator* indicator | The pointer to the digital indicator. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_FontWeight | font weight [ArkUI_FontWeight](capi-text-h.md#arkui_fontweight). |

### OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight()

```c
void OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight selectedFontWeight)
```

**Description**

Sets the font weight of selected index in the digital indicator.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_SwiperDigitIndicator *indicator | The pointer to the digital indicator. |
| ArkUI_FontWeight selectedFontWeight | font weight [ArkUI_FontWeight](capi-text-h.md#arkui_fontweight). The default value is <b>ARKUI_FONT_WEIGHT_NORMAL</b>. |

### OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight()

```c
ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight(ArkUI_SwiperDigitIndicator* indicator)
```

**Description**

Gets the font weight of selected index in the digital indicator.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_SwiperDigitIndicator* indicator | The pointer to the digital indicator. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_FontWeight | font weight [ArkUI_FontWeight](capi-text-h.md#arkui_fontweight). |

### OH_ArkUI_ContentTransitionEffect_Create()

```c
ArkUI_ContentTransitionEffect* OH_ArkUI_ContentTransitionEffect_Create(int32_t type)
```

**Description**

creates content switching animation effects.

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t type | content transition type: 0-identity, 1-opacity. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ContentTransitionEffect*](capi-arkui-nativemodule-arkui-contenttransitioneffect.md) | content transition effect. |

### OH_ArkUI_ListItemSwipeActionItem_Create()

```c
ArkUI_ListItemSwipeActionItem* OH_ArkUI_ListItemSwipeActionItem_Create()
```

**Description**

Create a configuration item for the ListitemSwipeActionItem interface settings.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem*](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md) | List Item SwipeActionItem configuration item instance. If the object returns a null pointer,<br>         it indicates creation failure, and the reason for the failure may be that the address space is full. |

### OH_ArkUI_ListItemSwipeActionItem_Dispose()

```c
void OH_ArkUI_ListItemSwipeActionItem_Dispose(ArkUI_ListItemSwipeActionItem* item)
```

**Description**

Destroy the ListitemSwipeActionItem instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | List Item SwipeActionItem instance to be destroyed. |

### OH_ArkUI_ListItemSwipeActionItem_SetContent()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetContent(ArkUI_ListItemSwipeActionItem* item, ArkUI_NodeHandle node)
```

**Description**

Set the layout content of ListItem SwipeActionItem.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | List Item SwipeActionItem instance. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Layout information. |

### OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item, float distance)
```

**Description**

Set the threshold for long-distance sliding deletion distance of components.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | List Item SwipeActionItem instance. |
| float distance | Component long-distance sliding deletion distance threshold. |

### OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance()

```c
float OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item)
```

**Description**

Obtain the threshold for long-distance sliding deletion distance of components.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | List Item SwipeActionItem instance. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Component long-distance sliding deletion distance threshold. If -1.0f is returned, the return fails.<br>         The possible cause of the failure is that the item parameter is abnormal, such as a null pointer. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```

**Description**

Set the event to be called when a sliding entry enters the deletion area.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void (\*callback)() | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (*callback)(void* userData))
```

**Description**

Set the event triggered when a sliding entry enters the deletion area.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void\* userData | User defined data. |
| void (\*callback)(void\* userData) | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnAction()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnAction(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```

**Description**

Set the event to be called when a component enters the long-range deletion area and deletes a ListItem.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void (\*callback)() | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (*callback)(void* userData))
```

**Description**

Set the event triggered when a component enters the long-range deletion area and deletes a ListItem.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void\* userData | User defined data. |
| void (\*callback)(void\* userData) | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```

**Description**

Set the event to be called when a sliding entry exits the deletion area.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void (\*callback)() | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (*callback)(void* userData))
```

**Description**

Set the event triggered when a sliding entry exits the deletion area.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void\* userData | User defined data. |
| void (\*callback)(void\* userData) | Callback Events. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange(ArkUI_ListItemSwipeActionItem* item, void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState))
```

**Description**

Set the event triggered when the sliding state of a list item changes.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void (\*callback)(ArkUI_ListItemSwipeActionState swipeActionState) | Callback Events.swipeActionState The changed state. |

### OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData()

```c
void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData(ArkUI_ListItemSwipeActionItem* item, void* userData, void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState, void* userData))
```

**Description**

Set the event triggered when the sliding state of a list item changes.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)\* item | List Item SwipeActionItem instance. |
| void\* userData | User defined data. |
| void (\*callback)(ArkUI_ListItemSwipeActionState swipeActionState | Callback Events.swipeActionState The changed state. |

### OH_ArkUI_ListItemSwipeActionOption_Create()

```c
ArkUI_ListItemSwipeActionOption* OH_ArkUI_ListItemSwipeActionOption_Create()
```

**Description**

Create a configuration item for the ListitemSwipeActionOption interface settings.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption*](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md) | List Item SwipeActionOption configuration item instance.If the object returns a null pointer,<br>         it indicates a creation failure, and the reason for the failure may be that the address space is full. |

### OH_ArkUI_ListItemSwipeActionOption_Dispose()

```c
void OH_ArkUI_ListItemSwipeActionOption_Dispose(ArkUI_ListItemSwipeActionOption* option)
```

**Description**

Destroy the ListitemSwipeActionOption instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)* option | List Item SwipeActionOption instance to be destroyed. |

### OH_ArkUI_ListItemSwipeActionOption_SetStart()

```c
void OH_ArkUI_ListItemSwipeActionOption_SetStart(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)
```

**Description**

Set the layout content on the left (vertical layout) or top (horizontal layout)of the ListItem SwipeActionItem.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)* option | List Item SwipeActionItem instance. |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | Layout information. |

### OH_ArkUI_ListItemSwipeActionOption_SetEnd()

```c
void OH_ArkUI_ListItemSwipeActionOption_SetEnd(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)
```

**Description**

Set the layout content on the right (vertical layout) or bottom (horizontal layout)of the ListItem SwipeActionItem.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)* option | List Item SwipeActionItem instance. |
| [ArkUI_ListItemSwipeActionItem](capi-arkui-nativemodule-arkui-listitemswipeactionitem.md)* item | Layout information. |

### OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect()

```c
void OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeEdgeEffect edgeEffect)
```

**Description**

Set the sliding effect.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)* option | List Item SwipeActionItem instance. |
| [ArkUI_ListItemSwipeEdgeEffect](capi-native-type-h.md#arkui_listitemswipeedgeeffect) edgeEffect | Sliding effect. |

### OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect()

```c
int32_t OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect(ArkUI_ListItemSwipeActionOption* option)
```

**Description**

Get the sliding effect.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)* option | List Item SwipeActionItem instance. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Sliding effect. The default return value is 0. If -1 is returned, the return fails.<br>         The possible cause of the failure is that the option parameter is abnormal, such as a null pointer. |

### OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange()

```c
void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange(ArkUI_ListItemSwipeActionOption* option, void (*callback)(float offset))
```

**Description**

The event called when the sliding operation offset changes.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)\* option | List Item SwipeActionItem instance. |
| void (\*callback)(float offset) | Callback Events.offset Slide offset. |

### OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData()

```c
void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData(ArkUI_ListItemSwipeActionOption* option, void* userData, void (*callback)(float offset, void* userData))
```

**Description**

Set the event triggered when the sliding operation offset changes.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ListItemSwipeActionOption](capi-arkui-nativemodule-arkui-listitemswipeactionoption.md)\* option | List Item SwipeActionItem instance. |
| void\* userData | User defined data. |
| void (\*callback)(float offset | Callback Events.offset Slide offset. |

### OH_ArkUI_AccessibilityState_Create()

```c
ArkUI_AccessibilityState* OH_ArkUI_AccessibilityState_Create(void)
```

**Description**

Create accessibility state.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_AccessibilityState*](capi-arkui-nativemodule-arkui-accessibilitystate.md) | Returns the pointer to the accessibility state object.<br> If a null pointer is returned, the object fails to be created. The possible cause is that the address space is full. |

### OH_ArkUI_AccessibilityState_Dispose()

```c
void OH_ArkUI_AccessibilityState_Dispose(ArkUI_AccessibilityState* state)
```

**Description**

Dispose accessibility state.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |

### OH_ArkUI_AccessibilityState_SetDisabled()

```c
void OH_ArkUI_AccessibilityState_SetDisabled(ArkUI_AccessibilityState* state, int32_t isDisabled)
```

**Description**

Set accessibility state disabled.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |
| int32_t isDisabled | accessibility state disabled, Value 1 indicates disabled and 0 indicates enbled. |

### OH_ArkUI_AccessibilityState_IsDisabled()

```c
int32_t OH_ArkUI_AccessibilityState_IsDisabled(ArkUI_AccessibilityState* state)
```

**Description**

Get accessibility state disabled.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | accessibility state disabled, Value 1 indicates disabled and 0 indicates enbled. The default value is 0.<br>         If the function parameter is abnormal, return the default value. |

### OH_ArkUI_AccessibilityState_SetSelected()

```c
void OH_ArkUI_AccessibilityState_SetSelected(ArkUI_AccessibilityState* state, int32_t isSelected)
```

**Description**

Set accessibility state selected.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |
| int32_t isSelected | accessibility state selected, Value 1 indicates selected, and 0 indicates not selected.The default value is 0. |

### OH_ArkUI_AccessibilityState_IsSelected()

```c
int32_t OH_ArkUI_AccessibilityState_IsSelected(ArkUI_AccessibilityState* state)
```

**Description**

Get accessibility state selected.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | accessibility state selected, Value 1 indicates selected, and 0 indicates not selected.<br>         The default value is 0.<br>         If the function parameter is abnormal, return the default value. |

### OH_ArkUI_AccessibilityState_SetCheckedState()

```c
void OH_ArkUI_AccessibilityState_SetCheckedState(ArkUI_AccessibilityState* state, int32_t checkedState)
```

**Description**

Set accessibility checked state.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |
| int32_t checkedState | checked state, and uses the [ArkUI_AccessibilityCheckedState](capi-native-type-h.md#arkui_accessibilitycheckedstate) enumeration value,The default value is ARKUI_ACCESSIBILITY_UNCHECKED. |

### OH_ArkUI_AccessibilityState_GetCheckedState()

```c
int32_t OH_ArkUI_AccessibilityState_GetCheckedState(ArkUI_AccessibilityState* state)
```

**Description**

Get accessibility checked state.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityState](capi-arkui-nativemodule-arkui-accessibilitystate.md)* state | accessibility state object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | checked state, and uses the [ArkUI_AccessibilityCheckedState](capi-native-type-h.md#arkui_accessibilitycheckedstate) enumeration value,<br>         The default value is ARKUI_ACCESSIBILITY_UNCHECKED.<br>         If the function parameter is abnormal, return the default value. |

### OH_ArkUI_AccessibilityValue_Create()

```c
ArkUI_AccessibilityValue* OH_ArkUI_AccessibilityValue_Create(void)
```

**Description**

Create accessibility value.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_AccessibilityValue*](capi-arkui-nativemodule-arkui-accessibilityvalue.md) | Returns the pointer to the accessibility state object.<br> If a null pointer is returned, the object fails to be created. The possible cause is that the address space is full. |

### OH_ArkUI_AccessibilityValue_Dispose()

```c
void OH_ArkUI_AccessibilityValue_Dispose(ArkUI_AccessibilityValue* value)
```

**Description**

Dispose accessibility value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

### OH_ArkUI_AccessibilityValue_SetMin()

```c
void OH_ArkUI_AccessibilityValue_SetMin(ArkUI_AccessibilityValue* value, int32_t min)
```

**Description**

Set accessibility minimum value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t min | minimum value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetMin()

```c
int32_t OH_ArkUI_AccessibilityValue_GetMin(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility minimum value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | minimum value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetMax()

```c
void OH_ArkUI_AccessibilityValue_SetMax(ArkUI_AccessibilityValue* value, int32_t max)
```

**Description**

Set accessibility minimum value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t max | maximum value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetMax()

```c
int32_t OH_ArkUI_AccessibilityValue_GetMax(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility minimum value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | maximum value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetCurrent()

```c
void OH_ArkUI_AccessibilityValue_SetCurrent(ArkUI_AccessibilityValue* value, int32_t current)
```

**Description**

Set accessibility current value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t current | value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetCurrent()

```c
int32_t OH_ArkUI_AccessibilityValue_GetCurrent(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility current value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | current value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetRangeMin()

```c
void OH_ArkUI_AccessibilityValue_SetRangeMin(ArkUI_AccessibilityValue* value, int32_t rangeMin)
```

**Description**

Set accessibility minimum value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t rangeMin | minimum value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetRangeMin()

```c
int32_t OH_ArkUI_AccessibilityValue_GetRangeMin(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility minimum value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | minimum value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetRangeMax()

```c
void OH_ArkUI_AccessibilityValue_SetRangeMax(ArkUI_AccessibilityValue* value, int32_t rangeMax)
```

**Description**

Set accessibility maximum value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t rangeMax | maximum value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetRangeMax()

```c
int32_t OH_ArkUI_AccessibilityValue_GetRangeMax(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility maximum value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | maximum value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetRangeCurrent()

```c
void OH_ArkUI_AccessibilityValue_SetRangeCurrent(ArkUI_AccessibilityValue* value, int32_t rangeCurrent)
```

**Description**

Set accessibility current value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| int32_t rangeCurrent | value based on range components, The default value is -1. |

### OH_ArkUI_AccessibilityValue_GetRangeCurrent()

```c
int32_t OH_ArkUI_AccessibilityValue_GetRangeCurrent(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility current value.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | current value based on range components, The default value is -1.<br>         If the function parameter is abnormal, return -1. |

### OH_ArkUI_AccessibilityValue_SetText()

```c
void OH_ArkUI_AccessibilityValue_SetText(ArkUI_AccessibilityValue* value, const char* text)
```

**Description**

Set accessibility text value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |
| const char* text | The textual description information of the component, which defaults to an empty string. |

### OH_ArkUI_AccessibilityValue_GetText()

```c
const char* OH_ArkUI_AccessibilityValue_GetText(ArkUI_AccessibilityValue* value)
```

**Description**

Get accessibility text value.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_AccessibilityValue](capi-arkui-nativemodule-arkui-accessibilityvalue.md)* value | accessibility value object. |

**Returns**:

| Type | Description |
| -- | -- |
| const char* | The textual description information of the component, which defaults to an empty string;<br>         If the function parameter is abnormal, return null. |

### OH_ArkUI_CustomProperty_Destroy()

```c
void OH_ArkUI_CustomProperty_Destroy(ArkUI_CustomProperty* handle)
```

**Description**

Destroy the instance of Customs Property.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CustomProperty](capi-arkui-nativemodule-arkui-customproperty.md)* handle | The instance of Customs Property to be destroyed. |

### OH_ArkUI_CustomProperty_GetStringValue()

```c
const char* OH_ArkUI_CustomProperty_GetStringValue(ArkUI_CustomProperty* handle)
```

**Description**

Get custom attribute value information.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CustomProperty](capi-arkui-nativemodule-arkui-customproperty.md)* handle | Custom attribute object pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| const char* | Customize the value information within the attribute structure. |

### OH_ArkUI_HostWindowInfo_GetName()

```c
const char* OH_ArkUI_HostWindowInfo_GetName(ArkUI_HostWindowInfo* info)
```

**Description**

Get window name from HostWindowInfo.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_HostWindowInfo](capi-arkui-nativemodule-arkui-hostwindowinfo.md)* info | HostWindowInfo object pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| const char* | Window name in HostWindowInfo. |

### OH_ArkUI_HostWindowInfo_Destroy()

```c
void OH_ArkUI_HostWindowInfo_Destroy(ArkUI_HostWindowInfo* info)
```

**Description**

Destroy the instance of HostWindowInfo.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_HostWindowInfo](capi-arkui-nativemodule-arkui-hostwindowinfo.md)* info | Instance of HostWindowInfo to be destroyed. |

### OH_ArkUI_ActiveChildrenInfo_Destroy()

```c
void OH_ArkUI_ActiveChildrenInfo_Destroy(ArkUI_ActiveChildrenInfo* handle)
```

**Description**

Destroy ActiveChildenInfo instance.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ActiveChildrenInfo](capi-arkui-nativemodule-arkui-activechildreninfo.md)* handle | ActiveChild instance to be destroyed. |

### OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex()

```c
ArkUI_NodeHandle OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex(ArkUI_ActiveChildrenInfo* handle, int32_t index)
```

**Description**

Retrieve the child nodes of ActiveChildenInfo with the structure index.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ActiveChildrenInfo](capi-arkui-nativemodule-arkui-activechildreninfo.md)* handle | The ActiveChildenInfo instance for obtaining information. |
| int32_t index | The index of child nodes. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | The child node pointer corresponding to the index. Return nullptr in case of exception. |

### OH_ArkUI_ActiveChildrenInfo_GetCount()

```c
int32_t OH_ArkUI_ActiveChildrenInfo_GetCount(ArkUI_ActiveChildrenInfo* handle)
```

**Description**

Retrieve the number of nodes within the structure of ActiveChildenInfo.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ActiveChildrenInfo](capi-arkui-nativemodule-arkui-activechildreninfo.md)* handle | The ActiveChildenInfo instance for obtaining information. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Number of child nodes. Default value: 0. |

### OH_ArkUI_CrossLanguageOption_Create()

```c
ArkUI_CrossLanguageOption* OH_ArkUI_CrossLanguageOption_Create(void)
```

**Description**

Create a cross-language option instance.

**Since**: 15

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption*](capi-arkui-nativemodule-arkui-crosslanguageoption.md) | Returns a cross-language option instance. If the result is a null pointer, it may be out of memory. |

### OH_ArkUI_CrossLanguageOption_Destroy()

```c
void OH_ArkUI_CrossLanguageOption_Destroy(ArkUI_CrossLanguageOption* option)
```

**Description**

Destroy the cross-language option instance.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md)* option | The cross-language option instance. |

### OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus()

```c
void OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus(ArkUI_CrossLanguageOption* option, bool enabled)
```

**Description**

Enable the attribute setting in the cross-language option.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md)* option | The cross-language option. |
| bool enabled | The attribute setting in the cross-language option.Default value: false. |

### OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus()

```c
bool OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus(ArkUI_CrossLanguageOption* option)
```

**Description**

Get the attribute setting enable of the cross-language option.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md)* option | The cross-language option. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | The attribute setting enable of the cross-language option. |

### OH_ArkUI_ListItemSwipeAction_Expand()

```c
int32_t OH_ArkUI_ListItemSwipeAction_Expand(ArkUI_NodeHandle node, ArkUI_ListItemSwipeActionDirection direction)
```

**Description**

Expand the swipe action.

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | List Item node. |
| [ArkUI_ListItemSwipeActionDirection](capi-native-type-h.md#arkui_listitemswipeactiondirection) direction | expand direction of swipeAction. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) success.<br>         [ARKUI_ERROR_CODE_PARAM_ERROR](capi-error-code-h.md#arkui_errorcode) The component type of the node is incorrect.<br>         [ARKUI_ERROR_CODE_NODE_NOT_ON_MAIN_TREE](capi-error-code-h.md#arkui_errorcode) The node not mounted to component tree. |

### OH_ArkUI_ListItemSwipeAction_Collapse()

```c
int32_t OH_ArkUI_ListItemSwipeAction_Collapse(ArkUI_NodeHandle node)
```

**Description**

Collapse the swipe action.

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | List Item node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) success.<br>         [ARKUI_ERROR_CODE_PARAM_ERROR](capi-error-code-h.md#arkui_errorcode) The component type of the node is incorrect.<br>         [ARKUI_ERROR_CODE_NODE_NOT_ON_MAIN_TREE](capi-error-code-h.md#arkui_errorcode) The node not mounted to component tree. |

### OH_ArkUI_TextMenuItem_SetContent()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetContent(ArkUI_TextMenuItem* item, const char* content)
```

**Description**

Set text menu item title.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item. |
| const char* content | The name of the text menu item, which defaults to an empty string. The string will copy to framework. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItem_GetContent()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetContent(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Get text menu item title.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item object. |
| char* buffer | The buffer of the text menu content, memory space needs to be allocated by the developer. |
| int32_t bufferSize | The name of the text menu item, which defaults to an empty string; |
| int32_t* writeLength | Indicates the string length actually written to the bufferwhen returning [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode).Indicates the minimum buffer size that can accommodate the targetwhen [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) is returned. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | The error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if the node, buffer or writeLength is null.<br>         [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) If the buffer size is less than the minimum buffer size. |

### OH_ArkUI_TextMenuItem_SetIcon()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetIcon(ArkUI_TextMenuItem* item, const char* icon)
```

**Description**

Set text menu item icon.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item. |
| const char* icon | The text menu item icon resource, which defaults to an empty string. The string will copy to framework. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItem_GetIcon()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetIcon(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Get text menu item icon.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item object |
| char* buffer | The buffer of the text menu content, memory space needs to be allocated by the developer. |
| int32_t bufferSize | The icon of the text menu item, which defaults to an empty string; |
| int32_t* writeLength | Indicates the string length actually written to the bufferwhen returning [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode).Indicates the minimum buffer size that can accommodate the targetwhen [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) is returned. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | The error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if the node, buffer or writeLength is null.<br>         [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) If the buffer size is less than the minimum buffer size. |

### OH_ArkUI_TextMenuItem_SetLabelInfo()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetLabelInfo(ArkUI_TextMenuItem* item, const char* labelInfo)
```

**Description**

Set text menu item label info for keyboard shortcut.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item. |
| const char* labelInfo | The text menu item shortcut displays, which defaults to an empty string.The string will copy to framework. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItem_GetLabelInfo()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetLabelInfo(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Get text menu item label info for keyboard shortcut..

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item object |
| char* buffer | The buffer of the text menu content, memory space needs to be allocated by the developer. |
| int32_t bufferSize | The shortcuts of the text menu item, which defaults to an empty string; |
| int32_t* writeLength | Indicates the string length actually written to the bufferwhen returning [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode).Indicates the minimum buffer size that can accommodate the targetwhen [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) is returned. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | The error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if the node, buffer or writeLength is null.<br>         [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) If the buffer size is less than the minimum buffer size. |

### OH_ArkUI_TextMenuItem_SetId()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetId(ArkUI_TextMenuItem* item, int32_t id)
```

**Description**

Set text menu item id.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item. |
| int32_t id | The text menu id. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItem_GetId()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetId(const ArkUI_TextMenuItem* item, int32_t* id)
```

**Description**

Get text menu item id.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item object |
| int32_t* id | The text menu item id; |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItemArray_GetSize()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetSize(ArkUI_TextMenuItemArray* items, int32_t* size)
```

**Description**

Get the size of text menu items.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItemArray](capi-arkui-nativemodule-arkui-textmenuitemarray.md)* items | The text menu items. |
| int32_t* size | The size of text menu items. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItemArray_GetItem()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetItem(ArkUI_TextMenuItemArray* items, int32_t index, ArkUI_TextMenuItem** item)
```

**Description**

Get text menu item at index.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItemArray](capi-arkui-nativemodule-arkui-textmenuitemarray.md)* items | The text menu items. |
| int32_t index | The index of text menu items. |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)** item | The text menu item at index of array. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItemArray_Insert()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Insert(ArkUI_TextMenuItemArray* items, ArkUI_TextMenuItem* item, int32_t index)
```

**Description**

Insert text menu item at index.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItemArray](capi-arkui-nativemodule-arkui-textmenuitemarray.md)* items | The text menu items. |
| [ArkUI_TextMenuItem](capi-arkui-nativemodule-arkui-textmenuitem.md)* item | The text menu item at index of array. The item will copy by framework. |
| int32_t index | The index of text menu items. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItemArray_Erase()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Erase(ArkUI_TextMenuItemArray* items, int32_t index)
```

**Description**

Erase text menu item at index.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItemArray](capi-arkui-nativemodule-arkui-textmenuitemarray.md)* items | The text menu items. |
| int32_t index | The index of text menu items. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextMenuItemArray_Clear()

```c
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Clear(ArkUI_TextMenuItemArray* items)
```

**Description**

Clear all the items.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextMenuItemArray](capi-arkui-nativemodule-arkui-textmenuitemarray.md)* items | The text menu items. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextCreateMenuCallback cb)
```

**Description**

Set the event to be called when text menu create.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextEditMenuOptions](capi-arkui-nativemodule-arkui-texteditmenuoptions.md)* editMenuOptions | Pointer to the ArkUI_TextEditMenuOptions object. |
| void* userData | The user data. |
| [ArkUI_TextCreateMenuCallback](capi-text-common-h.md#arkui_textcreatemenucallback) cb | The create callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextPrepareMenuCallback cb)
```

**Description**

Set the event to be called when menu prepare.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextEditMenuOptions](capi-arkui-nativemodule-arkui-texteditmenuoptions.md)* editMenuOptions | Pointer to the ArkUI_TextEditMenuOptions object. |
| void* userData | The user data. |
| [ArkUI_TextPrepareMenuCallback](capi-text-common-h.md#arkui_textpreparemenucallback) cb | The prepare callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextMenuItemClickCallback cb)
```

**Description**

Set the event to be called when menu item click.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextEditMenuOptions](capi-arkui-nativemodule-arkui-texteditmenuoptions.md)* editMenuOptions | Pointer to the ArkUI_TextEditMenuOptions object. |
| void* userData | The user data. |
| [ArkUI_TextMenuItemClickCallback](capi-text-common-h.md#arkui_textmenuitemclickcallback) cb | The menu item click callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_SetSpanType()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType textSpanType)
```

**Description**

Sets the recognition types of a configuration object for selected text recognition.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_TextSpanType](capi-text-common-h.md#arkui_textspantype) textSpanType | The span type of [ArkUI_TextSpanType](capi-text-common-h.md#arkui_textspantype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_GetSpanType()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType* spanType)
```

**Description**

Gets the span type select menu options.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_TextSpanType](capi-text-common-h.md#arkui_textspantype)* spanType | the text span type [ArkUI_TextSpanType](capi-text-common-h.md#arkui_textspantype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_SetContentNode()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle node)
```

**Description**

Set custom text menu node of text.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | The custom menu node. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_GetContentNode()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle* node)
```

**Description**

Get custom text menu node of text.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md)* node | The custom menu node. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_SetResponseType()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType responseType)
```

**Description**

Sets the recognition types of a configuration object for selected text recognition.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_TextResponseType](capi-text-common-h.md#arkui_textresponsetype) responseType | The response type of [ArkUI_TextResponseType](capi-text-common-h.md#arkui_textresponsetype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_GetResponseType()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType* responseType)
```

**Description**

Gets the response type select menu options.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| [ArkUI_TextResponseType](capi-text-common-h.md#arkui_textresponsetype)* responseType | The text response type [ArkUI_TextResponseType](capi-text-common-h.md#arkui_textresponsetype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))
```

**Description**

Set the event to be called when selection menu show.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)\* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| void\* userData | The user data. |
| void (\*callback)(int32_t start | The callback function of menu show.start The start offset of the selected content.end The end offset of the selected content.userData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))
```

**Description**

Set the event to be called when selection menu hide.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_TextSelectionMenuOptions](capi-arkui-nativemodule-arkui-textselectionmenuoptions.md)\* selectionMenuOptions | Pointer to the ArkUI_TextSelectionMenuOptions object. |
| void\* userData | The user data. |
| void (\*callback)(int32_t start | The callback function of menu hide.start The start offset of the selected content.end The end offset of the selected content.userData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_SelectionOptions_Create()

```c
ArkUI_SelectionOptions* OH_ArkUI_SelectionOptions_Create()
```

**Description**

Create selection options.

**Since**: 23

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_SelectionOptions*](capi-arkui-nativemodule-arkui-selectionoptions.md) | A pointer to the selection options object. |

### OH_ArkUI_SelectionOptions_Dispose()

```c
void OH_ArkUI_SelectionOptions_Dispose(ArkUI_SelectionOptions* options)
```

**Description**

Dispose selection options object.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| {ArkUI_SelectionOptions*} | options Pointer to the selection options object. to be disposed. |

### OH_ArkUI_SelectionOptions_SetMenuPolicy()

```c
void OH_ArkUI_SelectionOptions_SetMenuPolicy(ArkUI_SelectionOptions* options, ArkUI_MenuPolicy menuPolicy)
```

**Description**

Sets the menu policy for selection options.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| {ArkUI_SelectionOptions*} | options Pointer to the selection options. |
| {ArkUI_MenuPolicy} | menuPolicy The menu policy. |

### OH_ArkUI_SelectionOptions_GetMenuPolicy()

```c
ArkUI_MenuPolicy OH_ArkUI_SelectionOptions_GetMenuPolicy(ArkUI_SelectionOptions* options)
```

**Description**

Gets the menu policy of selection options.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| {ArkUI_SelectionOptions*} | options Pointer to the selection options object. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_MenuPolicy](capi-native-type-h.md#arkui_menupolicy) | Returns the menu policy. |

### OH_ArkUI_SelectedDragPreviewStyle_Create()

```c
ArkUI_SelectedDragPreviewStyle* OH_ArkUI_SelectedDragPreviewStyle_Create()
```

**Description**

Create a configuration object for selected drag preview style.

**Since**: 23

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_SelectedDragPreviewStyle*](capi-arkui-nativemodule-arkui-selecteddragpreviewstyle.md) | A pointer to the configuration object. |

### OH_ArkUI_SelectedDragPreviewStyle_Dispose()

```c
void OH_ArkUI_SelectedDragPreviewStyle_Dispose(ArkUI_SelectedDragPreviewStyle* config)
```

**Description**

Dispose a configuration object for selected drag preview style.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_SelectedDragPreviewStyle](capi-arkui-nativemodule-arkui-selecteddragpreviewstyle.md)* config | Pointer to the configuration object to be disposed. |

### OH_ArkUI_SelectedDragPreviewStyle_SetColor()

```c
void OH_ArkUI_SelectedDragPreviewStyle_SetColor(ArkUI_SelectedDragPreviewStyle* config, uint32_t color)
```

**Description**

Sets the color of background for selected drag preview style.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_SelectedDragPreviewStyle](capi-arkui-nativemodule-arkui-selecteddragpreviewstyle.md)* config | Pointer to the configuration object to be modified. |
| uint32_t color | Background color. |

### OH_ArkUI_SelectedDragPreviewStyle_GetColor()

```c
uint32_t OH_ArkUI_SelectedDragPreviewStyle_GetColor(ArkUI_SelectedDragPreviewStyle* config)
```

**Description**

Gets the color of background for selected drag preview style.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_SelectedDragPreviewStyle](capi-arkui-nativemodule-arkui-selecteddragpreviewstyle.md)* config | Pointer to the configuration object. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns the background color. |

### OH_ArkUI_DecorationStyleOptions_SetTextDecorationType()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType type)
```

**Description**

Sets the decoration type of the decorative line style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| [ArkUI_TextDecorationType](capi-text-common-h.md#arkui_textdecorationtype) type | Decoration type ([ArkUI_TextDecorationType](capi-text-common-h.md#arkui_textdecorationtype)). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_GetTextDecorationType()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType* type)
```

**Description**

Obtains the decoration type of the decorative line style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| [ArkUI_TextDecorationType](capi-text-common-h.md#arkui_textdecorationtype)* type | Pointer to the decoration type ([ArkUI_TextDecorationType](capi-text-common-h.md#arkui_textdecorationtype)). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_SetColor()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t color)
```

**Description**

Sets the color of the decorative line.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| uint32_t color | Color of the decorative line, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_GetColor()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t* color)
```

**Description**

Obtains the color of the decorative line.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| uint32_t* color | Pointer to the color of the decorative line, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle style)
```

**Description**

Sets the style of the decorative line.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| [ArkUI_TextDecorationStyle](capi-text-common-h.md#arkui_textdecorationstyle) style | Style of the decorative line ([ArkUI_TextDecorationStyle](capi-text-common-h.md#arkui_textdecorationstyle)). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle* style)
```

**Description**

Obtains the style of the decorative line.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| [ArkUI_TextDecorationStyle](capi-text-common-h.md#arkui_textdecorationstyle)* style | Pointer to the style of the decorative line ([ArkUI_TextDecorationStyle](capi-text-common-h.md#arkui_textdecorationstyle)). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_SetThicknessScale()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float thicknessScale)
```

**Description**

Sets the scale factor of the decorative line thickness.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| float thicknessScale | Scale factor of the decorative line thickness. The value range is [0, +∞). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_DecorationStyleOptions_GetThicknessScale()

```c
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float* thicknessScale)
```

**Description**

Obtains the scale factor of the decorative line thickness.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |
| float* thicknessScale | Pointer to the scale factor of the decorative line thickness. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_SetTypes()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetTypes(OH_ArkUI_TextDataDetectorConfig* config, const ArkUI_TextDataDetectorType* types, int32_t length)
```

**Description**

Sets the types of the text entity recognition configuration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| const ArkUI_TextDataDetectorType* types | Pointer to the types of the text entity recognition configuration. The value is an enumerated value of { |
| int32_t length | Type quantity. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_GetTypes()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetTypes(OH_ArkUI_TextDataDetectorConfig* config, ArkUI_TextDataDetectorType* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the types of the text entity recognition configuration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| ArkUI_TextDataDetectorType* buffer | Pointer to the buffer of the type array. |
| int32_t bufferSize | Maximum number of types that can be written to the buffer reserved for the types. |
| int32_t* writeLength | Pointer to the number of types that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>     <br>Returns [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) if the value of bufferSize is less than that of <br>     writeLength. |

### OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback(OH_ArkUI_TextDataDetectorConfig* config, void* userData, void (*callback)(const char* result, int32_t length, void* userData))
```

**Description**

Sets the callback for text entity recognition result updates.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig\* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| void\* userData | Pointer to the user data. |
| void (\*callback)(const char\* result | detect result update callback. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_SetColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t color)
```

**Description**

Sets the color of the recognized content.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| uint32_t color | Color of the recognized content, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_GetColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t* color)
```

**Description**

Obtains the color of the recognized content.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| uint32_t* color | Pointer to the color of the recognized content, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)
```

**Description**

Sets the decoration style of the recognized content.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* decoration | Pointer to the decoration style of the recognized content. The value is an enumerated value of[OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)
```

**Description**

Obtains the decoration style of the recognized content.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* decoration | Pointer to the decoration style of the recognized content. The value is an enumerated value of[OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool enablePreviewMenu)
```

**Description**

Sets whether to display the preview menu when the recognized content is long-pressed.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| bool enablePreviewMenu | Whether to display the preview menu when the recognized content is long-pressed. **truemeans to display the preview menu, and **false** means the opposite. The default value is **false**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu()

```c
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool* enablePreviewMenu)
```

**Description**

Obtains whether the preview menu is displayed when the recognized content is long-pressed.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextDataDetectorConfig* config | Pointer to the [OH_ArkUI_TextDataDetectorConfig](capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig.md) object. |
| bool* enablePreviewMenu | Pointer to the **enablePreviewMenu** parameter indicating whether the preview menu isdisplayed when the recognized content is long-pressed. **true** means that the preview menu is displayed, and false** means the opposite. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextController_SetStyledString()

```c
ArkUI_ErrorCode OH_ArkUI_TextController_SetStyledString(OH_ArkUI_TextController* controller, ArkUI_StyledString_Descriptor* descriptor)
```

**Description**

Set the StyledString of the text.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_ArkUI_TextController* controller | the controller of the text. |
| [ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md)* descriptor | Pointer to an <b>ArkUI_StyledString_Descriptor</b> object, which will be set to Text. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetValue()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* value)
```

**Description**

Sets the text for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| const char* value | Pointer to the placeholder text. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetValue()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the text for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| char* buffer | Pointer to the buffer for storing the placeholder text in the memory. You need to allocate the memory. |
| int32_t bufferSize | Maximum number of characters that can be written to the buffer. |
| int32_t* writeLength | Pointer to the number of characters that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>     <br>Returns [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) if the value of bufferSize is less than that of <br>     writeLength. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float fontSize)
```

**Description**

Sets the font size for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| float fontSize | Font size, in fp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float* fontSize)
```

**Description**

Obtains the font size for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| float* fontSize | Pointer to the font size, in fp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontWeight)
```

**Description**

Sets the font weight for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| uint32_t fontWeight | Font weight. The value is an integer multiple of 100 within the [100, 900] range, for example, 100** or **900**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontWeight)
```

**Description**

Obtains the font weight for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| uint32_t* fontWeight | Pointer to the font weight. The value is an integer multiple of 100 within the [100, 900] range,for example, **100** or **900**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* fontFamily)
```

**Description**

Sets the font family for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| const char* fontFamily | Pointer to the font family, containing the font names to be set. Different font names areseparated by commas (,). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the font family for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| char* buffer | Pointer to the buffer for storing the font family in the memory. You need to allocate the memory. |
| int32_t bufferSize | Maximum number of characters that can be written to the buffer. |
| int32_t* writeLength | Pointer to the number of characters that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>     <br>Returns [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](capi-error-code-h.md#arkui_errorcode) if the value of bufferSize is less than that of <br>     writeLength. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle fontStyle)
```

**Description**

Sets the font style for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| ArkUI_FontStyle fontStyle | Font style. The value is an enumerated value of [ArkUI_FontStyle](capi-text-h.md#arkui_fontstyle). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle* fontStyle)
```

**Description**

Obtains the font style for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| ArkUI_FontStyle* fontStyle | Pointer to the font style. The value is an enumerated value of [ArkUI_FontStyle](capi-text-h.md#arkui_fontstyle). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontColor)
```

**Description**

Sets the font color for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| uint32_t fontColor | Font color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontColor)
```

**Description**

Obtains the font color for the placeholder text options used when there is no input.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorPlaceholderOptions](capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions.md) object. |
| uint32_t* fontColor | Pointer to the font color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetCaretOffset()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t caretOffset)
```

**Description**

Sets the caret offset using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| int32_t caretOffset | Caret offset. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetCaretOffset()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t* caretOffset)
```

**Description**

Obtains the caret offset using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| int32_t* caretOffset | Pointer to the caret offset. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetSelection()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetSelection(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t start, uint32_t end, ArkUI_MenuPolicy menuPolicy)
```

**Description**

Sets the selected area using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| uint32_t start | Start position of the selected area. |
| uint32_t end | End position of the selected area. |
| [ArkUI_MenuPolicy](capi-native-type-h.md#arkui_menupolicy) menuPolicy | Policy for displaying the menu in the selected area. The value is an enumerated value of[ArkUI_MenuPolicy](capi-native-type-h.md#arkui_menupolicy). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_IsEditing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_IsEditing(OH_ArkUI_TextEditorStyledStringController* controller, bool* isEditing)
```

**Description**

Obtains the editing status of the text editor using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| bool* isEditing | Pointer to the **isEditing** parameter indicating whether the text editor is in the editing state. *true** means that the text editor is in the editing state, and **false** means the opposite. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_StopEditing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_StopEditing(OH_ArkUI_TextEditorStyledStringController* controller)
```

**Description**

Exits the editing status of the text editor using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetPreviewText()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetPreviewText(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* offset, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the preview text using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| uint32_t* offset | Pointer to the preview text offset. |
| char* buffer | Pointer to the buffer for storing the preview text in the memory. You need to allocate the memory. |
| int32_t bufferSize | Maximum number of characters that can be written to the buffer. |
| int32_t* writeLength | Pointer to the number of characters that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetCaretRect()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretRect(OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_Rect* rect)
```

**Description**

Obtains the caret-selected rectangle using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [ArkUI_Rect](capi-arkui-nativemodule-arkui-rect.md)* rect | Pointer to the caret-selected rectangle information. The value is an enumerated value of[ArkUI_Rect](capi-arkui-nativemodule-arkui-rect.md). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_DeleteBackward()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_DeleteBackward(OH_ArkUI_TextEditorStyledStringController* controller)
```

**Description**

Deletes characters using the styled string controller. If no content is selected, one character before thecurrent caret position is deleted. If content is selected, the selected content is deleted.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetTextAlign()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment align)
```

**Description**

Sets the text alignment mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextAlignment](capi-text-common-h.md#arkui_textalignment) align | Text alignment mode. The value is an enumerated value of [ArkUI_TextAlignment](capi-text-common-h.md#arkui_textalignment). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetTextAlign()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment* align)
```

**Description**

Obtains the text alignment mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextAlignment](capi-text-common-h.md#arkui_textalignment)* align | Pointer to the text alignment mode. The value is an enumerated value of [ArkUI_TextAlignment](capi-text-common-h.md#arkui_textalignment). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative* pixelmap)
```

**Description**

Sets the PixelMap for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| struct OH_PixelmapNative* pixelmap | Pointer to the PixelMap for paragraph indentation. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative** pixelmap)
```

**Description**

Obtains the PixelMap for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| struct OH_PixelmapNative** pixelmap | Double pointer to the PixelMap for paragraph indentation. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t width)
```

**Description**

Sets the width for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t width | Width for paragraph indentation, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* width)
```

**Description**

Obtains the width for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t* width | Pointer to the width for paragraph indentation, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t height)
```

**Description**

Sets the height for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t height | Height for paragraph indentation, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* height)
```

**Description**

Obtains the height for paragraph indentation in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t* height | Pointer to the height for paragraph indentation, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetWordBreak()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak wordBreak)
```

**Description**

Sets the word breaking mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_WordBreak](capi-text-common-h.md#arkui_wordbreak) wordBreak | Word breaking mode. The value is an enumerated value of [ArkUI_WordBreak](capi-text-common-h.md#arkui_wordbreak). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetWordBreak()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak* wordBreak)
```

**Description**

Obtains the word breaking mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_WordBreak](capi-text-common-h.md#arkui_wordbreak)* wordBreak | Pointer to the word breaking mode. The value is an enumerated value of [ArkUI_WordBreak](capi-text-common-h.md#arkui_wordbreak). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy lineBreakStrategy)
```

**Description**

Sets the line breaking strategy in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [OH_ArkUI_LineBreakStrategy](capi-text-common-h.md#oh_arkui_linebreakstrategy) lineBreakStrategy | Line breaking strategy. The value is an enumerated value of[OH_ArkUI_LineBreakStrategy](capi-text-common-h.md#oh_arkui_linebreakstrategy). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy* lineBreakStrategy)
```

**Description**

Obtains the line breaking strategy in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [OH_ArkUI_LineBreakStrategy](capi-text-common-h.md#oh_arkui_linebreakstrategy)* lineBreakStrategy | Pointer to the line breaking strategy. The value is an enumerated value of[OH_ArkUI_LineBreakStrategy](capi-text-common-h.md#oh_arkui_linebreakstrategy). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t paragraphSpacing)
```

**Description**

Sets the paragraph spacing in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t paragraphSpacing | Paragraph spacing, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* paragraphSpacing)
```

**Description**

Obtains the paragraph spacing in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| uint32_t* paragraphSpacing | Pointer to the paragraph spacing, in vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment verticalAlignment)
```

**Description**

Sets the text vertical alignment mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextVerticalAlignment](capi-text-common-h.md#arkui_textverticalalignment) verticalAlignment | Text vertical alignment mode. The value is an enumerated value of[ArkUI_TextVerticalAlignment](capi-text-common-h.md#arkui_textverticalalignment). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment* verticalAlignment)
```

**Description**

Obtains the text vertical alignment mode in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextVerticalAlignment](capi-text-common-h.md#arkui_textverticalalignment)* verticalAlignment | Text vertical alignment mode. The value is an enumerated value of[ArkUI_TextVerticalAlignment](capi-text-common-h.md#arkui_textverticalalignment). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_SetTextDirection()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection textDirection)
```

**Description**

Sets the text direction in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextDirection](capi-text-common-h.md#arkui_textdirection) textDirection | Text direction. The value is an enumerated value of [ArkUI_TextDirection](capi-text-common-h.md#arkui_textdirection). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorParagraphStyle_GetTextDirection()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection* textDirection)
```

**Description**

Obtains the text direction in the paragraph style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md) object. |
| [ArkUI_TextDirection](capi-text-common-h.md#arkui_textdirection)* textDirection | Pointer to the text direction. The value is an enumerated value of [ArkUI_TextDirection](capi-text-common-h.md#arkui_textdirection). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorParagraphStyle* style)
```

**Description**

Sets the typing paragraph style using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [OH_ArkUI_TextEditorParagraphStyle](capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle.md)* style | Pointer to the typing paragraph style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)
```

**Description**

Sets the font color of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t color | Font color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)
```

**Description**

Obtains the font color of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t* color | Pointer to the font color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontSize()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontSize(OH_ArkUI_TextEditorTextStyle* style, float size)
```

**Description**

Sets the font size of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| float size | Font size, in fp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontSize()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontSize(OH_ArkUI_TextEditorTextStyle* style, float* size)
```

**Description**

Obtains the font size of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| float* size | Pointer to the font size, in fp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle fontStyle)
```

**Description**

Sets the font style of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| ArkUI_FontStyle fontStyle | Font style. The value is an enumerated value of [ArkUI_FontStyle](capi-text-h.md#arkui_fontstyle). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle* fontStyle)
```

**Description**

Obtains the font style of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| ArkUI_FontStyle* fontStyle | Pointer to the font style. The value is an enumerated value of [ArkUI_FontStyle](capi-text-h.md#arkui_fontstyle). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontWeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t fontWeight)
```

**Description**

Sets the font weight of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t fontWeight | Font weight. The value is an integer multiple of 100 within the [100, 900] range, for example, 100** or **900**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontWeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t* fontWeight)
```

**Description**

Obtains the font weight of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t* fontWeight | Pointer to the font weight. The value is an integer multiple of 100 within the [100, 900] range,for example, **100** or **900**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontFamily()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFamily(OH_ArkUI_TextEditorTextStyle* style, const char* fontFamily)
```

**Description**

Sets the font family of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| const char* fontFamily | Pointer to the font family, containing the font names to be set. Different font names areseparated by commas (,). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontFamily()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFamily(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the font family of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| char* buffer | Pointer to the buffer for storing the font family in the memory. You need to allocate the memory. |
| int32_t bufferSize | Maximum number of characters that can be written to the buffer. |
| int32_t* writeLength | Pointer to the number of characters that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetDecoration()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)
```

**Description**

Sets the text decoration options of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetDecoration()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)
```

**Description**

Obtains the text decoration options of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md)* options | Pointer to the [OH_ArkUI_DecorationStyleOptions](capi-arkui-nativemodule-oh-arkui-decorationstyleoptions.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetTextShadows()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextShadows(OH_ArkUI_TextEditorTextStyle* style, const OH_ArkUI_ShadowOptions** options, int32_t length)
```

**Description**

Sets the text shadow options of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| const OH_ArkUI_ShadowOptions** options | Double pointer to the text shadow options. |
| int32_t length | Length of the text shadow options. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetTextShadows()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextShadows(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)
```

**Description**

Obtains the text shadow options of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| OH_ArkUI_ShadowOptions** shadowOptions | Double pointer to the text shadow options. |
| uint32_t shadowOptionsSize | Size of the shadow option buffer. |
| uint32_t* writeLength | Pointer to the number of actual text shadow options in the text style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetLineHeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t lineHeight)
```

**Description**

Sets the line height of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| int32_t lineHeight | Line height. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetLineHeight()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t* lineHeight)
```

**Description**

Obtains the line height of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| int32_t* lineHeight | Pointer to the line height. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetLetterSpacing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t letterSpacing)
```

**Description**

Sets the letter spacing of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| int32_t letterSpacing | Letter spacing. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetLetterSpacing()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t* letterSpacing)
```

**Description**

Obtains the letter spacing of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| int32_t* letterSpacing | Pointer to the letter spacing. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetFontFeature()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFeature(OH_ArkUI_TextEditorTextStyle* style, const char* fontFeature)
```

**Description**

Sets the font feature of the text style, such as monospaced digits.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| const char* fontFeature | Pointer to the font features, containing font features to be set. Multiple features are separatedby commas (,). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetFontFeature()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFeature(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)
```

**Description**

Obtains the font feature of the text style, such as monospaced digits.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| char* buffer | Pointer to the buffer for storing the font features in the memory. You need to allocate the memory. |
| int32_t bufferSize | Maximum number of characters that can be written to the buffer. |
| int32_t* writeLength | Pointer to the number of characters that are actually written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetHalfLeading()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool halfLeading)
```

**Description**

Sets whether to evenly distribute the line spacing to the top and bottom of each line in the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| bool halfLeading | Whether to enable half leading.<br>*true** means to enable, and **false** means the opposite. The default value is **false**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetHalfLeading()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool* halfLeading)
```

**Description**

Obtains whether the line spacing is evenly distributed to the top and bottom of each line in the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| bool* halfLeading | Pointer to the **halfLeading** parameter indicating whether to enable half leading.<br>*true** means to enable, and **false** means the opposite. The default value is **false**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)
```

**Description**

Sets the text background color of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t color | Text background color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)
```

**Description**

Obtains the text background color of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| uint32_t* color | Pointer to the text background color, in 0xARGB format. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)
```

**Description**

Sets the radius of the rounded corner of the text background of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| float topLeft | Radius of the rounded corner in the upper left corner of the text background. The unit is vp. |
| float topRight | Radius of the rounded corner in the upper right corner of the text background. The unit is vp. |
| float bottomLeft | Radius of the rounded corner in the lower left corner of the text background. The unit is vp. |
| float bottomRight | Radius of the rounded corner in the lower right corner of the text background. The unit is vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)
```

**Description**

Obtains the radius of the rounded corner of the text background of the text style.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the text style of the **TextEditor** component. |
| float* topLeft | Pointer to the radius of the rounded corner in the upper left corner of the text background. The unitis vp. |
| float* topRight | Pointer to the radius of the rounded corner in the upper right corner of the text background. Theunit is vp. |
| float* bottomLeft | Pointer to the radius of the rounded corner in the lower left corner of the text background. Theunit is vp. |
| float* bottomRight | Pointer to the radius of the rounded corner in the lower right corner of the text background. Theunit is vp. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetTypingStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)
```

**Description**

Sets the typing style using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the typing style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetTypingStyle()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)
```

**Description**

Obtains the typing style using the styled string controller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [OH_ArkUI_TextEditorTextStyle](capi-arkui-nativemodule-oh-arkui-texteditortextstyle.md)* style | Pointer to the typing style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType textEditorSpanType)
```

**Description**

Sets the span type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextEditorSpanType](capi-rich-editor-h.md#oh_arkui_texteditorspantype) textEditorSpanType | Span type. The value is an enumerated value of [OH_ArkUI_TextEditorSpanType](capi-rich-editor-h.md#oh_arkui_texteditorspantype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType* textEditorSpanType)
```

**Description**

Obtains the span type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextEditorSpanType](capi-rich-editor-h.md#oh_arkui_texteditorspantype)* textEditorSpanType | Pointer to the span type. The value is an enumerated value of[OH_ArkUI_TextEditorSpanType](capi-rich-editor-h.md#oh_arkui_texteditorspantype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle node)
```

**Description**

Sets the content node of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Content node. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle* node)
```

**Description**

Obtains the content node of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md)* node | Pointer to the content node. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType responseType)
```

**Description**

Sets the response type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextEditorResponseType](capi-rich-editor-h.md#oh_arkui_texteditorresponsetype) responseType | Response type. The value is an enumerated value of [OH_ArkUI_TextEditorResponseType](capi-rich-editor-h.md#oh_arkui_texteditorresponsetype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType* responseType)
```

**Description**

Obtains the response type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextEditorResponseType](capi-rich-editor-h.md#oh_arkui_texteditorresponsetype)* responseType | Pointer to the response type. The value is an enumerated value of[OH_ArkUI_TextEditorResponseType](capi-rich-editor-h.md#oh_arkui_texteditorresponsetype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType menuType)
```

**Description**

Sets the type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextMenuType](capi-rich-editor-h.md#oh_arkui_textmenutype) menuType | Menu type. The value is an enumerated value of [OH_ArkUI_TextMenuType](capi-rich-editor-h.md#oh_arkui_textmenutype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType* menuType)
```

**Description**

Obtains the type of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_TextMenuType](capi-rich-editor-h.md#oh_arkui_textmenutype)* menuType | Pointer to the menu type. The value is an enumerated value of [OH_ArkUI_TextMenuType](capi-rich-editor-h.md#oh_arkui_textmenutype). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```

**Description**

Sets the callback triggered when the text selection menu is displayed.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)\* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| void\* userData | Pointer to the user data. |
| void (\*callback)(int32_t start | The callback function of menu show.start The start offset of the selected content.end The end offset of the selected content.callbackUserData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```

**Description**

Sets the callback triggered when the text selection menu is hidden.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)\* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| void\* userData | Pointer to the user data. |
| void (\*callback)(int32_t start | The callback function of menu hide.start The start offset of the selected content.end The end offset of the selected content.userData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```

**Description**

Sets the callback triggered when the text selection menu appears.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)\* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| void\* userData | Pointer to the user data. |
| void (\*callback)(int32_t start | The callback function of menu appear.start The start offset of the selected content.end The end offset of the selected content.userData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(void* callbackUserData))
```

**Description**

Sets the callback triggered when the text selection menu disappears.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)\* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| void\* userData | Pointer to the user data. |
| void (\*callback)(void\* callbackUserData) | The callback function of menu disappear.userData The user data. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode mode)
```

**Description**

Sets the haptic feedback mode of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_HapticFeedbackMode](capi-rich-editor-h.md#oh_arkui_hapticfeedbackmode) mode | Haptic feedback mode. The value is an enumerated value of [OH_ArkUI_HapticFeedbackMode](capi-rich-editor-h.md#oh_arkui_hapticfeedbackmode). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode* mode)
```

**Description**

Obtains the haptic feedback mode of the text selection menu in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md)* options | Pointer to the [OH_ArkUI_TextEditorSelectionMenuOptions](capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions.md) object. |
| [OH_ArkUI_HapticFeedbackMode](capi-rich-editor-h.md#oh_arkui_hapticfeedbackmode)* mode | Pointer to the haptic feedback mode. The value is an enumerated value of[OH_ArkUI_HapticFeedbackMode](capi-rich-editor-h.md#oh_arkui_hapticfeedbackmode). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu(OH_ArkUI_TextEditorStyledStringController* controller)
```

**Description**

Closes the text selection menu of the styled string controller in the text editor.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetSelection()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetSelection(const OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* start, uint32_t* end)
```

**Description**

Obtains the selected area using the styled string controller.

>**Note**: 
>All input pointer parameters must be allocated, managed, and released by the caller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| uint32_t* start | Pointer to the start position of the selected area. |
| uint32_t* end | Pointer to the end position of the selected area. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetStyledString()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)
```

**Description**

Sets the styled string displayed using the styled string controller.

>**Note**: 
>All input pointer parameters must be allocated, managed, and released by the caller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [const ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md)* descriptor | Pointer to the [ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_GetStyledString()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_StyledString_Descriptor* descriptor)
```

**Description**

Obtains the styled string displayed using the styled string controller.

>**Note**: 
>All input pointer parameters must be allocated, managed, and released by the caller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md)* descriptor | Pointer to the [ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)
```

**Description**

Sets the placeholder text in the styled string style using the styled string controller.

>**Note**: 
>All input pointer parameters must be allocated, managed, and released by the caller.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | Pointer to the [OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md) object. |
| [const ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md)* descriptor | Pointer to the [ArkUI_StyledString_Descriptor](capi-arkui-nativemodule-arkui-styledstring-descriptor.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Result code.<br>     <br>Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>     <br>Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TextEditorStyledStringController_ScrollToVisible()

```c
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_ScrollToVisible(const OH_ArkUI_TextEditorStyledStringController* controller, int32_t start, int32_t end)
```

**Description**

Scroll the text editor component to make the specified content visible.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_TextEditorStyledStringController](capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller.md)* controller | <b>TextEditor</b> styled string controller. |
| int32_t start | The start offset of the content to be made visible. |
| int32_t end | The end offset of the content to be made visible |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_PickerIndicatorStyle_ConfigureBackground()

```c
ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureBackground(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorBackground* background)
```

**Description**

Set the parameters of background style.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_PickerIndicatorStyle* style | The ArkUI_PickerIndicatorStyle instance. |
| ArkUI_PickerIndicatorBackground* background | The parameters of background style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) The parameters set need to be consistent with<br>        the type of the created instance. If they are not consistent, this error code will be returned.<br>        This interface only takes effect when the type is "background". |

### OH_ArkUI_PickerIndicatorStyle_ConfigureDivider()

```c
ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureDivider(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorDivider* divider)
```

**Description**

Set the parameters of divider style.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_PickerIndicatorStyle* style | The ArkUI_PickerIndicatorStyle instance. |
| ArkUI_PickerIndicatorDivider* divider | The parameters of divider style. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) The parameters set need to be consistent with<br>        the type of the created instance. If they are not consistent, this error code will be returned.<br>        This interface only takes effect when the type is "divider". |

### OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus()

```c
void OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus(ArkUI_CrossLanguageOption* option, OH_ArkUI_CrossLanguageOperatingStatus status)
```

**Description**

Sets the tree operating status for the cross-language option.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md)* option | The cross-language option. |
| [OH_ArkUI_CrossLanguageOperatingStatus](capi-native-type-h.md#oh_arkui_crosslanguageoperatingstatus) status | The tree operating status to be set for the cross-language option.Default value: OH_ARKUI_TREE_OPERATING_STATUS_UNDEFINED. |

### OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus()

```c
OH_ArkUI_CrossLanguageOperatingStatus OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus(ArkUI_CrossLanguageOption* option)
```

**Description**

Gets the tree operating status of the cross-language option.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CrossLanguageOption](capi-arkui-nativemodule-arkui-crosslanguageoption.md)* option | The cross-language option. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_ArkUI_CrossLanguageOperatingStatus](capi-native-type-h.md#oh_arkui_crosslanguageoperatingstatus) | Return the tree operating status of the cross-language option. |

### OH_ArkUI_LinearGradientOptions_Create()

```c
OH_ArkUI_LinearGradientOptions* OH_ArkUI_LinearGradientOptions_Create()
```

**Description**

Creates a linear gradient options object.The returned object must be released by calling <b>OH_ArkUI_LinearGradientOptions_Destroy</b>.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions*](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md) | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |

### OH_ArkUI_LinearGradientOptions_Destroy()

```c
void OH_ArkUI_LinearGradientOptions_Destroy(OH_ArkUI_LinearGradientOptions* options)
```

**Description**

Destroys a linear gradient options object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |

### OH_ArkUI_LinearGradientOptions_SetAngle()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetAngle(OH_ArkUI_LinearGradientOptions* options, float angle)
```

**Description**

Sets angle of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| float angle | Start angle of linear gradient. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_GetAngle()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetAngle(const OH_ArkUI_LinearGradientOptions* options, float* angle)
```

**Description**

Gets angle of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| float* angle | Pointer to the start angle of linear gradient. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_SetDirection()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetDirection(OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection direction)
```

**Description**

Sets direction of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| ArkUI_LinearGradientDirection direction | Direction of linear gradient.The parameter type is [ArkUI_LinearGradientDirection](capi-native-type-visual-h.md#arkui_lineargradientdirection). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_GetDirection()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetDirection(const OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection* direction)
```

**Description**

Gets direction of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| ArkUI_LinearGradientDirection* direction | Pointer to the direction of linear gradient.The parameter type is [ArkUI_LinearGradientDirection](capi-native-type-visual-h.md#arkui_lineargradientdirection). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_SetRepeating()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetRepeating(OH_ArkUI_LinearGradientOptions* options, bool repeating)
```

**Description**

Sets whether colors are repeated in linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| bool repeating | Whether colors are repeated. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_GetRepeating()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetRepeating(const OH_ArkUI_LinearGradientOptions* options, bool* repeating)
```

**Description**

Gets whether colors are repeated in linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| bool* repeating | Pointer to whether colors are repeated. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_SetColorStop()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetColorStop(OH_ArkUI_LinearGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)
```

**Description**

Sets color stops of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| const uint32_t* colors | Pointer to the color array. |
| const float* stops | Pointer to the stop array. |
| int32_t colorsAndStopsSize | Number of elements in colors and stops.The number of elements in colors and stops must be the same. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_LinearGradientOptions_GetColorStop()

```c
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetColorStop(const OH_ArkUI_LinearGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)
```

**Description**

Gets color stops of linear gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_LinearGradientOptions](capi-arkui-nativemodule-oh-arkui-lineargradientoptions.md)* options | Pointer to the <b>OH_ArkUI_LinearGradientOptions</b> object. |
| uint32_t* colors | Buffer pointer to the color array. |
| float* stops | Buffer pointer to the stop array. |
| int32_t colorsAndStopsSize | Buffer size reserved for color stops by developer.The number of elements in colors and stops must be the same.It should be larger than writeLength,otherwise the operation will return ARKUI_ERROR_CODE_PARAM_INVALID. |
| int32_t* writeLength | Number of color stops actually written. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_RadialGradientOptions_Create()

```c
OH_ArkUI_RadialGradientOptions* OH_ArkUI_RadialGradientOptions_Create()
```

**Description**

Creates a radial gradient options object.The returned object must be released by calling <b>OH_ArkUI_RadialGradientOptions_Destroy</b>.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions*](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md) | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |

### OH_ArkUI_RadialGradientOptions_Destroy()

```c
void OH_ArkUI_RadialGradientOptions_Destroy(OH_ArkUI_RadialGradientOptions* options)
```

**Description**

Destroys a radial gradient options object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |

### OH_ArkUI_RadialGradientOptions_SetCenterX()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterX(OH_ArkUI_RadialGradientOptions* options, float centerX)
```

**Description**

Sets centerX of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float centerX | X-coordinate of center point. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_GetCenterX()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterX(const OH_ArkUI_RadialGradientOptions* options, float* centerX)
```

**Description**

Gets centerX of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float* centerX | Pointer to the X-coordinate of center point. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_SetCenterY()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterY(OH_ArkUI_RadialGradientOptions* options, float centerY)
```

**Description**

Sets centerY of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float centerY | Y-coordinate of center point. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_GetCenterY()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterY(const OH_ArkUI_RadialGradientOptions* options, float* centerY)
```

**Description**

Gets centerY of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float* centerY | Pointer to the Y-coordinate of center point. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_SetRadius()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRadius(OH_ArkUI_RadialGradientOptions* options, float radius)
```

**Description**

Sets radius of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float radius | Radius of radial gradient. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_GetRadius()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRadius(const OH_ArkUI_RadialGradientOptions* options, float* radius)
```

**Description**

Gets radius of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| float* radius | Pointer to the radius of radial gradient. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_SetRepeating()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRepeating(OH_ArkUI_RadialGradientOptions* options, bool repeating)
```

**Description**

Sets whether colors are repeated in radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| bool repeating | Whether colors are repeated. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_GetRepeating()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRepeating(const OH_ArkUI_RadialGradientOptions* options, bool* repeating)
```

**Description**

Gets whether colors are repeated in radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| bool* repeating | Pointer to whether colors are repeated. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_SetColorStop()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetColorStop(OH_ArkUI_RadialGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)
```

**Description**

Sets color stops of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| const uint32_t* colors | Pointer to the color array. |
| const float* stops | Pointer to the stop array. |
| int32_t colorsAndStopsSize | Number of elements in colors and stops.The number of elements in colors and stops must be the same. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code. |

### OH_ArkUI_RadialGradientOptions_GetColorStop()

```c
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetColorStop(const OH_ArkUI_RadialGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)
```

**Description**

Gets color stops of radial gradient options.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_ArkUI_RadialGradientOptions](capi-arkui-nativemodule-oh-arkui-radialgradientoptions.md)* options | Pointer to the <b>OH_ArkUI_RadialGradientOptions</b> object. |
| uint32_t* colors | Buffer pointer to the color array. |
| float* stops | Buffer pointer to the stop array. |
| int32_t colorsAndStopsSize | Buffer size reserved for color stops by developer.The number of elements in colors and stops must be the same.It should be larger than writeLength,otherwise the operation will return ARKUI_ERROR_CODE_PARAM_INVALID. |
| int32_t* writeLength | Number of color stops actually written. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_ErrorCode | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |


