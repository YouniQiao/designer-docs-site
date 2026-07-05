# native_render.h

## Overview

Provides type definitions for <b>NativeRenderNode</b> APIs.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 20

**Related module**: [ArkUI_RenderNodeUtils](capi-arkui-rendernodeutils.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_RenderNode*](capi-arkui-rendernodeutils-arkui-rendernode8h.md) | ArkUI_RenderNodeHandle | Handle to ArkUI native render node object. |
| [ArkUI_RenderContentModifier*](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) | ArkUI_RenderContentModifierHandle | Handle to ArkUI native render content modifier. |
| [ArkUI_FloatProperty*](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) | ArkUI_FloatPropertyHandle | Handle to the ArkUI native float render property. |
| [ArkUI_Vector2Property*](capi-arkui-rendernodeutils-arkui-vector2property8h.md) | ArkUI_Vector2PropertyHandle | Handle to the ArkUI native vector2 render property. |
| [ArkUI_ColorProperty*](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) | ArkUI_ColorPropertyHandle | Handle to the ArkUI native color render property. |
| [ArkUI_FloatAnimatableProperty*](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) | ArkUI_FloatAnimatablePropertyHandle | Handle to the ArkUI native animatable float render property. |
| [ArkUI_Vector2AnimatableProperty*](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) | ArkUI_Vector2AnimatablePropertyHandle | Handle to the ArkUI native animatable vector2 render property. |
| [ArkUI_ColorAnimatableProperty*](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) | ArkUI_ColorAnimatablePropertyHandle | Handle to the ArkUI native animatable color render property. |
| [ArkUI_RectShape](capi-arkui-rendernodeutils-arkui-rectshape.md) | ArkUI_RectShapeOption | Rectangle shape option. |
| [ArkUI_NodeBorderStyle](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md) | ArkUI_NodeBorderStyleOption | Node border style option. |
| [ArkUI_NodeBorderWidth](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md) | ArkUI_NodeBorderWidthOption | Node border width option. |
| [ArkUI_NodeBorderColor](capi-arkui-rendernodeutils-arkui-nodebordercolor.md) | ArkUI_NodeBorderColorOption | Node border color option. |
| [ArkUI_NodeBorderRadius](capi-arkui-rendernodeutils-arkui-nodeborderradius.md) | ArkUI_NodeBorderRadiusOption | Node border radius option. |
| [ArkUI_CircleShape](capi-arkui-rendernodeutils-arkui-circleshape.md) | ArkUI_CircleShapeOption | Circle shape option. |
| [ArkUI_RoundRectShape](capi-arkui-rendernodeutils-arkui-roundrectshape.md) | ArkUI_RoundRectShapeOption | Round rect shape option. |
| [ArkUI_CommandPath](capi-arkui-rendernodeutils-arkui-commandpath.md) | ArkUI_CommandPathOption | Command path option. |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | ArkUI_RenderNodeMaskOption | Render node mask option. |
| [ArkUI_RenderNodeClipOption](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | ArkUI_RenderNodeClipOption | Render node clip option. |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md) | ArkUI_RenderBlurStyleOption | Handle to ArkUI render blur style option. |

### Function

| Name | Description |
| -- | -- |
| [ArkUI_RenderBlurStyleOption* OH_ArkUI_RenderNodeUtils_CreateBlurStyleOption()](#oh_arkui_rendernodeutils_createblurstyleoption) | Create a BlurStyleOption handle. The initial blur radius value is 0.0. |
| [void OH_ArkUI_RenderNodeUtils_DisposeBlurStyleOption(ArkUI_RenderBlurStyleOption* option)](#oh_arkui_rendernodeutils_disposeblurstyleoption) | Dispose a blur style option handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBlurStyleOptionRadius(ArkUI_RenderBlurStyleOption* option, float radius)](#oh_arkui_rendernodeutils_setblurstyleoptionradius) | Set blur radius to the target blur style option. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)](#oh_arkui_rendernodeutils_setbackgroundbluroption) | set a background blur style option to the render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_ResetBackgroundBlurOption(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_resetbackgroundbluroption) | reset the background blur option of render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetForegroundBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)](#oh_arkui_rendernodeutils_setforegroundbluroption) | set a foreground blur style option to the render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_ResetForegroundBlurOption(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_resetforegroundbluroption) | reset the foreground blur option of render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetContentBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)](#oh_arkui_rendernodeutils_setcontentbluroption) | set a content blur style option to the render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_ResetContentBlurOption(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_resetcontentbluroption) | reset the content blur option of render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_AddRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_addrendernode) | Adds a child render node to a parent node. |
| [int32_t OH_ArkUI_RenderNodeUtils_RemoveRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_removerendernode) | Remove the specified child node from its parent node. |
| [int32_t OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren(ArkUI_NodeHandle node)](#oh_arkui_rendernodeutils_clearrendernodechildren) | Clear all child render nodes from the specified parent node. |
| [int32_t OH_ArkUI_RenderNodeUtils_Invalidate(ArkUI_NodeHandle node)](#oh_arkui_rendernodeutils_invalidate) | Mark dirty the node handle. Invalidate the specified node, causing its lifecycle and triggering arerender of its child render nodes. |
| [ArkUI_RenderNodeHandle OH_ArkUI_RenderNodeUtils_CreateNode()](#oh_arkui_rendernodeutils_createnode) | Create a new RenderNode handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_DisposeNode(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_disposenode) | Dispose a RenderNode handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_AddChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_addchild) | Add a child node to the specified RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_InsertChildAfter(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child, ArkUI_RenderNodeHandle sibling)](#oh_arkui_rendernodeutils_insertchildafter) | Insert a child node after the specified sibling node in RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_RemoveChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)](#oh_arkui_rendernodeutils_removechild) | Remove a child node from the specified RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_ClearChildren(ArkUI_RenderNodeHandle node)](#oh_arkui_rendernodeutils_clearchildren) | Clear all children from the specified RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetChild(ArkUI_RenderNodeHandle node, int32_t index, ArkUI_RenderNodeHandle* child)](#oh_arkui_rendernodeutils_getchild) | Get a child node at the specified index position. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetFirstChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* child)](#oh_arkui_rendernodeutils_getfirstchild) | Get the first child node of the specified RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetNextSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)](#oh_arkui_rendernodeutils_getnextsibling) | Get the next sibling node of the specified node. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetPreviousSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)](#oh_arkui_rendernodeutils_getprevioussibling) | Get the previous sibling node of the specified node. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetChildren(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle** children, int32_t* count)](#oh_arkui_rendernodeutils_getchildren) | Retrieve all child render nodes of a parent render node.This function populates a list of child render nodes for the specified parent node.The caller is responsible for freeing the allocated child node array. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetChildrenCount(ArkUI_RenderNodeHandle node, int32_t* count)](#oh_arkui_rendernodeutils_getchildrencount) | Retrieve render child nodes count of a render node. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t color)](#oh_arkui_rendernodeutils_setbackgroundcolor) | Set the background color for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t* color)](#oh_arkui_rendernodeutils_getbackgroundcolor) | Get the background color of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetClipToFrame(ArkUI_RenderNodeHandle node, int32_t clipToFrame)](#oh_arkui_rendernodeutils_setcliptoframe) | Set whether to clip content to the node's frame. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetClipToFrame(ArkUI_RenderNodeHandle node, int32_t* clipToFrame)](#oh_arkui_rendernodeutils_getcliptoframe) | Get the clip-to-frame status of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetClipToBounds(ArkUI_RenderNodeHandle node, int32_t clipToBounds)](#oh_arkui_rendernodeutils_setcliptobounds) | Set whether to clip content to the node's Bounds. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetClipToBounds(ArkUI_RenderNodeHandle node, int32_t* clipToBounds)](#oh_arkui_rendernodeutils_getcliptobounds) | Get whether to clip content to the node's Bounds. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetOpacity(ArkUI_RenderNodeHandle node, float opacity)](#oh_arkui_rendernodeutils_setopacity) | Set the opacity value for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetOpacity(ArkUI_RenderNodeHandle node, float* opacity)](#oh_arkui_rendernodeutils_getopacity) | Get the opacity value of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetSize(ArkUI_RenderNodeHandle node, int32_t width, int32_t height)](#oh_arkui_rendernodeutils_setsize) | Set the dimensions for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetSize(ArkUI_RenderNodeHandle node, int32_t* width, int32_t* height)](#oh_arkui_rendernodeutils_getsize) | Get the dimensions of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetPosition(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)](#oh_arkui_rendernodeutils_setposition) | Set the position coordinates for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetPosition(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)](#oh_arkui_rendernodeutils_getposition) | Get the position coordinates of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetPivot(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_setpivot) | Set the pivot point for transformations of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetPivot(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_getpivot) | Get the pivot point coordinates of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetScale(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_setscale) | Set the scaling factors for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetScale(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_getscale) | Get the scaling factors of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetTranslation(ArkUI_RenderNodeHandle node, float x, float y)](#oh_arkui_rendernodeutils_settranslation) | Set the translation offset for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetTranslation(ArkUI_RenderNodeHandle node, float* x, float* y)](#oh_arkui_rendernodeutils_gettranslation) | Get the translation offset of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetRotation(ArkUI_RenderNodeHandle node, float x, float y, float z)](#oh_arkui_rendernodeutils_setrotation) | Set the rotation angles for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetRotation(ArkUI_RenderNodeHandle node, float* x, float* y, float* z)](#oh_arkui_rendernodeutils_getrotation) | Get the rotation angles of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetTransform(ArkUI_RenderNodeHandle node, float* matrix)](#oh_arkui_rendernodeutils_settransform) | Set the transformation matrix for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetShadowColor(ArkUI_RenderNodeHandle node, uint32_t color)](#oh_arkui_rendernodeutils_setshadowcolor) | Set the shadow color for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetShadowColor(ArkUI_RenderNodeHandle node, uint32_t* color)](#oh_arkui_rendernodeutils_getshadowcolor) | Get the shadow color of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetShadowOffset(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)](#oh_arkui_rendernodeutils_setshadowoffset) | Set the shadow offset for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetShadowOffset(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)](#oh_arkui_rendernodeutils_getshadowoffset) | Get the shadow offset of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetShadowAlpha(ArkUI_RenderNodeHandle node, float alpha)](#oh_arkui_rendernodeutils_setshadowalpha) | Set the shadow transparency for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetShadowAlpha(ArkUI_RenderNodeHandle node, float* alpha)](#oh_arkui_rendernodeutils_getshadowalpha) | Get the shadow transparency of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetShadowElevation(ArkUI_RenderNodeHandle node, float elevation)](#oh_arkui_rendernodeutils_setshadowelevation) | Set the shadow elevation for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetShadowElevation(ArkUI_RenderNodeHandle node, float* elevation)](#oh_arkui_rendernodeutils_getshadowelevation) | Get the shadow elevation of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetShadowRadius(ArkUI_RenderNodeHandle node, float radius)](#oh_arkui_rendernodeutils_setshadowradius) | Set the shadow radius of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetShadowRadius(ArkUI_RenderNodeHandle node, float* radius)](#oh_arkui_rendernodeutils_getshadowradius) | Get the shadow radius of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption* borderStyle)](#oh_arkui_rendernodeutils_setborderstyle) | Set the border style for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption** borderStyle)](#oh_arkui_rendernodeutils_getborderstyle) | Get the border style of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption* borderWidth)](#oh_arkui_rendernodeutils_setborderwidth) | Set the border widths for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption** borderWidth)](#oh_arkui_rendernodeutils_getborderwidth) | Get the border widths of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption* borderColor)](#oh_arkui_rendernodeutils_setbordercolor) | Set the border colors for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption** borderColor)](#oh_arkui_rendernodeutils_getbordercolor) | Get the border colors of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption* borderRadius)](#oh_arkui_rendernodeutils_setborderradius) | Set the border corner radius for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption** borderRadius)](#oh_arkui_rendernodeutils_getborderradius) | Get the border corner radius of a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetMask(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeMaskOption* mask)](#oh_arkui_rendernodeutils_setmask) | Apply a mask to a render node using the mask option. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetClip(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeClipOption* clip)](#oh_arkui_rendernodeutils_setclip) | Apply a clip to a render node using the clip option. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup(ArkUI_RenderNodeHandle node, bool markNodeGroup)](#oh_arkui_rendernodeutils_setmarknodegroup) | Mark whether to preferentially draw the node and its children. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetBounds(ArkUI_RenderNodeHandle node, int32_t x, int32_t y, int32_t width, int32_t height)](#oh_arkui_rendernodeutils_setbounds) | Set the bounds for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetBounds(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y, int32_t* width, int32_t* height)](#oh_arkui_rendernodeutils_getbounds) | Get the bounds for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetDrawRegion(ArkUI_RenderNodeHandle node, float x, float y, float w, float h)](#oh_arkui_rendernodeutils_setdrawregion) | Set the draw region for a RenderNode. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachContentModifier(ArkUI_RenderNodeHandle node, ArkUI_RenderContentModifierHandle modifier)](#oh_arkui_rendernodeutils_attachcontentmodifier) | Attach a content modifier for the render node. |
| [ArkUI_RenderContentModifierHandle OH_ArkUI_RenderNodeUtils_CreateContentModifier()](#oh_arkui_rendernodeutils_createcontentmodifier) | Create a content modifier handle. |
| [void OH_ArkUI_RenderNodeUtils_DisposeContentModifier(ArkUI_RenderContentModifierHandle modifier)](#oh_arkui_rendernodeutils_disposecontentmodifier) | Dispose the content modifier handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachFloatProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatPropertyHandle property)](#oh_arkui_rendernodeutils_attachfloatproperty) | Attach a float property to the target content modifier. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachVector2Property(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2PropertyHandle property)](#oh_arkui_rendernodeutils_attachvector2property) | Attach a vector2 property to the target content modifier. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachColorProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorPropertyHandle property)](#oh_arkui_rendernodeutils_attachcolorproperty) | Attach a color property to the target content modifier. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachfloatanimatableproperty) | Attach a float animatable property to the target content modifier. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2AnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachvector2animatableproperty) | Attach a vector2 animatable property to the target content modifier. |
| [int32_t OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_attachcoloranimatableproperty) | Attach a color property to the target content modifier. |
| [ArkUI_FloatPropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatProperty(float value)](#oh_arkui_rendernodeutils_createfloatproperty) | Create a float property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float value)](#oh_arkui_rendernodeutils_setfloatpropertyvalue) | Set value of the float property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float* value)](#oh_arkui_rendernodeutils_getfloatpropertyvalue) | Get value of the float property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeFloatProperty(ArkUI_FloatPropertyHandle property)](#oh_arkui_rendernodeutils_disposefloatproperty) | Dispose the float property handle. |
| [ArkUI_Vector2PropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2Property(float x, float y)](#oh_arkui_rendernodeutils_createvector2property) | Create a vector2 property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float x, float y)](#oh_arkui_rendernodeutils_setvector2propertyvalue) | Set value of the vector2 property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float* x, float* y)](#oh_arkui_rendernodeutils_getvector2propertyvalue) | Get value of the vector2 property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeVector2Property(ArkUI_Vector2PropertyHandle property)](#oh_arkui_rendernodeutils_disposevector2property) | Dispose the vector2 property handle. |
| [ArkUI_ColorPropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorProperty(uint32_t value)](#oh_arkui_rendernodeutils_createcolorproperty) | Create a color property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t value)](#oh_arkui_rendernodeutils_setcolorpropertyvalue) | Set value of the color property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t* value)](#oh_arkui_rendernodeutils_getcolorpropertyvalue) | Get value of the color property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeColorProperty(ArkUI_ColorPropertyHandle property)](#oh_arkui_rendernodeutils_disposecolorproperty) | Dispose the color property handle. |
| [ArkUI_FloatAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(float value)](#oh_arkui_rendernodeutils_createfloatanimatableproperty) | Create a float animatable property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float value)](#oh_arkui_rendernodeutils_setfloatanimatablepropertyvalue) | Set value of the float animatable property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float* value)](#oh_arkui_rendernodeutils_getfloatanimatablepropertyvalue) | Get value of the float animatable property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty(ArkUI_FloatAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposefloatanimatableproperty) | Dispose the float animatable property handle. |
| [ArkUI_Vector2AnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty(float x, float y)](#oh_arkui_rendernodeutils_createvector2animatableproperty) | Create a vector2 animatable property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float x, float y)](#oh_arkui_rendernodeutils_setvector2animatablepropertyvalue) | Set value of the vector2 animatable property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float* x, float* y)](#oh_arkui_rendernodeutils_getvector2animatablepropertyvalue) | Get value of the vector2 animatable property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty(ArkUI_Vector2AnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposevector2animatableproperty) | Dispose the vector2 animatable property handle. |
| [ArkUI_ColorAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty(uint32_t value)](#oh_arkui_rendernodeutils_createcoloranimatableproperty) | Create a color animatable property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t value)](#oh_arkui_rendernodeutils_setcoloranimatablepropertyvalue) | Set value of the color animatable property. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t* value)](#oh_arkui_rendernodeutils_getcoloranimatablepropertyvalue) | Get value of the color animatable property. |
| [void OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty(ArkUI_ColorAnimatablePropertyHandle property)](#oh_arkui_rendernodeutils_disposecoloranimatableproperty) | Dispose the color animatable property handle. |
| [int32_t OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw(ArkUI_RenderContentModifierHandle modifier, void* userData, void (\*callback)(ArkUI_DrawContext* context, void* userData))](#oh_arkui_rendernodeutils_setcontentmodifierondraw) | Set the onDraw function of the content modifier. |
| [ArkUI_RectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()](#oh_arkui_rendernodeutils_createrectshapeoption) | Create a RectShape option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption(ArkUI_RectShapeOption* option)](#oh_arkui_rendernodeutils_disposerectshapeoption) | Dispose the RectShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue(ArkUI_RectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setrectshapeoptionedgevalue) | Set the edge value of RectShape option. |
| [ArkUI_NodeBorderStyleOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()](#oh_arkui_rendernodeutils_createnodeborderstyleoption) | Create a NodeBorderStyle option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption(ArkUI_NodeBorderStyleOption* option)](#oh_arkui_rendernodeutils_disposenodeborderstyleoption) | Dispose the NodeBorderStyle option. |
| [void OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle(ArkUI_NodeBorderStyleOption* option, ArkUI_BorderStyle edgeStyle, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodeborderstyleoptionedgestyle) | Set the edge value of NodeBorderStyle option. |
| [ArkUI_NodeBorderWidthOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()](#oh_arkui_rendernodeutils_createnodeborderwidthoption) | Create a NodeBorderWidth option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption(ArkUI_NodeBorderWidthOption* option)](#oh_arkui_rendernodeutils_disposenodeborderwidthoption) | Dispose the NodeBorderWidth option. |
| [void OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth(ArkUI_NodeBorderWidthOption* option, float edgeWidth, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodeborderwidthoptionedgewidth) | Set the edge value of NodeBorderWidth option. |
| [ArkUI_NodeBorderColorOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()](#oh_arkui_rendernodeutils_createnodebordercoloroption) | Create a NodeBorderColor option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption(ArkUI_NodeBorderColorOption* option)](#oh_arkui_rendernodeutils_disposenodebordercoloroption) | Dispose the NodeBorderColor option. |
| [void OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor(ArkUI_NodeBorderColorOption* option, uint32_t edgeColor, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setnodebordercoloroptionedgecolor) | Set the edge value of NodeBorderColor option. |
| [ArkUI_NodeBorderRadiusOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()](#oh_arkui_rendernodeutils_createnodeborderradiusoption) | Create a NodeBorderRadius option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption(ArkUI_NodeBorderRadiusOption* option)](#oh_arkui_rendernodeutils_disposenodeborderradiusoption) | Dispose the NodeBorderRadius option. |
| [void OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius(ArkUI_NodeBorderRadiusOption* option, uint32_t cornerRadius, ArkUI_CornerDirection direction)](#oh_arkui_rendernodeutils_setnodeborderradiusoptioncornerradius) | Set the corner value of NodeBorderRadius option. |
| [ArkUI_CircleShapeOption* OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()](#oh_arkui_rendernodeutils_createcircleshapeoption) | Create a CircleShape option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption(ArkUI_CircleShapeOption* option)](#oh_arkui_rendernodeutils_disposecircleshapeoption) | Dispose the CircleShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX(ArkUI_CircleShapeOption* option, float centerX)](#oh_arkui_rendernodeutils_setcircleshapeoptioncenterx) | Set the centerX value of CircleShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY(ArkUI_CircleShapeOption* option, float centerY)](#oh_arkui_rendernodeutils_setcircleshapeoptioncentery) | Set the centerY value of CircleShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius(ArkUI_CircleShapeOption* option, float radius)](#oh_arkui_rendernodeutils_setcircleshapeoptionradius) | Set the radius value of CircleShape option. |
| [ArkUI_RoundRectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()](#oh_arkui_rendernodeutils_createroundrectshapeoption) | Create a RoundRectShape option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption(ArkUI_RoundRectShapeOption* option)](#oh_arkui_rendernodeutils_disposeroundrectshapeoption) | Dispose the RoundRectShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue(ArkUI_RoundRectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)](#oh_arkui_rendernodeutils_setroundrectshapeoptionedgevalue) | Set the edge value of RoundRectShape option. |
| [void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY(ArkUI_RoundRectShapeOption* option, float x, float y, ArkUI_CornerDirection direction)](#oh_arkui_rendernodeutils_setroundrectshapeoptioncornerxy) | Set the coordinate value of the target corner. |
| [ArkUI_CommandPathOption* OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()](#oh_arkui_rendernodeutils_createcommandpathoption) | Create a CommandPath option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption(ArkUI_CommandPathOption* option)](#oh_arkui_rendernodeutils_disposecommandpathoption) | Dispose the CommandPath option. |
| [void OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands(ArkUI_CommandPathOption* option, char* commands)](#oh_arkui_rendernodeutils_setcommandpathoptioncommands) | Set the commands value of CommandPath option. |
| [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromrectshape) | Create a mask option from a RectShape option. |
| [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromroundrectshape) | Create a mask option from a RoundRectShape option. |
| [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape(ArkUI_CircleShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromcircleshape) | Create a mask option from a CircleShape option. |
| [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromovalshape) | Create a mask option from a OvalShape option. |
| [ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath(ArkUI_CommandPathOption* path)](#oh_arkui_rendernodeutils_createrendernodemaskoptionfromcommandpath) | Create a mask option from a CommandPath option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption(ArkUI_RenderNodeMaskOption* option)](#oh_arkui_rendernodeutils_disposerendernodemaskoption) | Dispose the RenderNodeMask option. |
| [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor(ArkUI_RenderNodeMaskOption* mask, uint32_t fillColor)](#oh_arkui_rendernodeutils_setrendernodemaskoptionfillcolor) | Set the fill color of RenderNodeMask option. |
| [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor(ArkUI_RenderNodeMaskOption* mask, uint32_t strokeColor)](#oh_arkui_rendernodeutils_setrendernodemaskoptionstrokecolor) | Set the stroke color of RenderNodeMask option. |
| [void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth(ArkUI_RenderNodeMaskOption* mask, float strokeWidth)](#oh_arkui_rendernodeutils_setrendernodemaskoptionstrokewidth) | Set the stroke width of RenderNodeMask option. |
| [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromrectshape) | Create a clip option from a RectShape option. |
| [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromroundrectshape) | Create a clip option from a RoundRectShape option. |
| [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape(ArkUI_CircleShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromcircleshape) | Create a clip option from a CircleShape option. |
| [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape(ArkUI_RectShapeOption* shape)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromovalshape) | Create a clip option from a OvalShape option. |
| [ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath(ArkUI_CommandPathOption* path)](#oh_arkui_rendernodeutils_createrendernodeclipoptionfromcommandpath) | Create a clip option from a CommandPath option. |
| [void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption(ArkUI_RenderNodeClipOption* option)](#oh_arkui_rendernodeutils_disposerendernodeclipoption) | Dispose the RenderNodeClip option. |
| [int32_t OH_ArkUI_RenderNodeUtils_GetRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle* renderNode)](#oh_arkui_rendernodeutils_getrendernode) | Get the RenderNode of the target node. The target node should be adopted. |
| [void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionValue(ArkUI_RoundRectShapeOption* option, float x, float y, float width, float height)](#oh_arkui_rendernodeutils_setroundrectshapeoptionvalue) | Sets the bounding rectangle for a rounded rectangle shape optionThis function defines the geometric frame of a rounded rectangle by specifying its position and dimensions. |
| [void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionValue(ArkUI_RectShapeOption* option, float x, float y, float width, float height)](#oh_arkui_rendernodeutils_setrectshapeoptionvalue) | Sets the bounding rectangle for a rectangle shape optionThis function defines the geometric frame of a rectangle by specifying its position and dimensions. |
| [ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_InsertRenderNodeAt(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child, int32_t position)](#oh_arkui_rendernodeutils_insertrendernodeat) | Insert a child render node at the specified position in the parent node. |
| [ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_GetRenderNodeChildrenCount(ArkUI_NodeHandle node, int32_t* count)](#oh_arkui_rendernodeutils_getrendernodechildrencount) | Get the number of child render nodes of the specified parent node. |
| [ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_GetRenderNodeAt(ArkUI_NodeHandle node, int32_t position, ArkUI_RenderNodeHandle* child)](#oh_arkui_rendernodeutils_getrendernodeat) | Get the child render node at the specified position from the parent node. |

## Function description

### OH_ArkUI_RenderNodeUtils_CreateBlurStyleOption()

```c
ArkUI_RenderBlurStyleOption* OH_ArkUI_RenderNodeUtils_CreateBlurStyleOption()
```

**Description**

Create a BlurStyleOption handle. The initial blur radius value is 0.0.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderBlurStyleOption*](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md) | The BlurStyleOption handle |

### OH_ArkUI_RenderNodeUtils_DisposeBlurStyleOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeBlurStyleOption(ArkUI_RenderBlurStyleOption* option)
```

**Description**

Dispose a blur style option handle.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md)* option | Handle option to be dispose. |

### OH_ArkUI_RenderNodeUtils_SetBlurStyleOptionRadius()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBlurStyleOptionRadius(ArkUI_RenderBlurStyleOption* option, float radius)
```

**Description**

Set blur radius to the target blur style option.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md)* option | [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md) target blur style option. |
| float radius | the blur radius. the value should be in [0.0, +∞) |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception. |

### OH_ArkUI_RenderNodeUtils_SetBackgroundBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)
```

**Description**

set a background blur style option to the render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md)* option | the handle of background blur style option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_ResetBackgroundBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_ResetBackgroundBlurOption(ArkUI_RenderNodeHandle node)
```

**Description**

reset the background blur option of render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_SetForegroundBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetForegroundBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)
```

**Description**

set a foreground blur style option to the render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md)* option | the handle of foreground blur style option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_ResetForegroundBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_ResetForegroundBlurOption(ArkUI_RenderNodeHandle node)
```

**Description**

reset the foreground blur option of render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_SetContentBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetContentBlurOption(ArkUI_RenderNodeHandle node, ArkUI_RenderBlurStyleOption* option)
```

**Description**

set a content blur style option to the render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |
| [ArkUI_RenderBlurStyleOption](capi-arkui-rendernodeutils-arkui-renderblurstyleoption.md)* option | the handle of content blur style option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_ResetContentBlurOption()

```c
int32_t OH_ArkUI_RenderNodeUtils_ResetContentBlurOption(ArkUI_RenderNodeHandle node)
```

**Description**

reset the content blur option of render node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the target render node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AddRenderNode()

```c
int32_t OH_ArkUI_RenderNodeUtils_AddRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)
```

**Description**

Adds a child render node to a parent node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | the target parent node.- Only customNode type parent nodes are supported.- Each customNode can mount only one ArkUI_RenderNodeHandle.- customNode cannot mount other ArkUI_NodeHandle. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to add. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](capi-error-code-h.md#arkui_errorcode) The node is not a customNode.<br>         [ARKUI_ERROR_CODE_CHILD_EXISTED](capi-error-code-h.md#arkui_errorcode) The node already has a child.<br>         [ARKUI_ERROR_CODE_RENDER_PARENT_EXISTED](capi-error-code-h.md#arkui_errorcode) The child already has a parent node.<br>         [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the child is obtained from a FrameNode, and its<br>         corresponding FrameNode is no longer in the adopted state. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_RemoveRenderNode()

```c
int32_t OH_ArkUI_RenderNodeUtils_RemoveRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child)
```

**Description**

Remove the specified child node from its parent node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | the parent node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](capi-error-code-h.md#arkui_errorcode) The node is not a customNode. |

### OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren()

```c
int32_t OH_ArkUI_RenderNodeUtils_ClearRenderNodeChildren(ArkUI_NodeHandle node)
```

**Description**

Clear all child render nodes from the specified parent node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | the target parent node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](capi-error-code-h.md#arkui_errorcode) The node is not a customNode. |

### OH_ArkUI_RenderNodeUtils_Invalidate()

```c
int32_t OH_ArkUI_RenderNodeUtils_Invalidate(ArkUI_NodeHandle node)
```

**Description**

Mark dirty the node handle. Invalidate the specified node, causing its lifecycle and triggering arerender of its child render nodes.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Target node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_RenderNodeUtils_CreateNode()

```c
ArkUI_RenderNodeHandle OH_ArkUI_RenderNodeUtils_CreateNode()
```

**Description**

Create a new RenderNode handle.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) | ArkUI_RenderNodeHandle pointer to receive the new node handle. |

### OH_ArkUI_RenderNodeUtils_DisposeNode()

```c
int32_t OH_ArkUI_RenderNodeUtils_DisposeNode(ArkUI_RenderNodeHandle node)
```

**Description**

Dispose a RenderNode handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the render node to dispose. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AddChild()

```c
int32_t OH_ArkUI_RenderNodeUtils_AddChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)
```

**Description**

Add a child node to the specified RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the parent RenderNode. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to add. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22.<br>         [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the child is obtained from a FrameNode, and its<br>         corresponding FrameNode is no longer in the adopted state. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_InsertChildAfter()

```c
int32_t OH_ArkUI_RenderNodeUtils_InsertChildAfter(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child, ArkUI_RenderNodeHandle sibling)
```

**Description**

Insert a child node after the specified sibling node in RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the parent RenderNode. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to insert. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) sibling | the reference sibling node. If the sibling node does not exist in the children,the child component will be added to the end. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22.<br>         [ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the child is obtained from a FrameNode, and its<br>         corresponding FrameNode is no longer in the adopted state. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_RemoveChild()

```c
int32_t OH_ArkUI_RenderNodeUtils_RemoveChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle child)
```

**Description**

Remove a child node from the specified RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the parent RenderNode. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_ClearChildren()

```c
int32_t OH_ArkUI_RenderNodeUtils_ClearChildren(ArkUI_RenderNodeHandle node)
```

**Description**

Clear all children from the specified RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the RenderNode is obtained from a FrameNode. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetChild()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetChild(ArkUI_RenderNodeHandle node, int32_t index, ArkUI_RenderNodeHandle* child)
```

**Description**

Get a child node at the specified index position.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the parent RenderNode. |
| int32_t index | Zero-based index of the child node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* child | ArkUI_RenderNodeHandle pointer to receive the child node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](capi-error-code-h.md#arkui_errorcode) The child does not exist.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the RenderNode is obtained from a FrameNode. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetFirstChild()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetFirstChild(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* child)
```

**Description**

Get the first child node of the specified RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* child | ArkUI_RenderNodeHandle pointer to receive the first child. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](capi-error-code-h.md#arkui_errorcode) The child does not exist.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetNextSibling()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetNextSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)
```

**Description**

Get the next sibling node of the specified node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the reference node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* sibling | ArkUI_RenderNodeHandle pointer to receive the next sibling. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](capi-error-code-h.md#arkui_errorcode) The child does not exist. |

### OH_ArkUI_RenderNodeUtils_GetPreviousSibling()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetPreviousSibling(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle* sibling)
```

**Description**

Get the previous sibling node of the specified node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | the reference node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* sibling | ArkUI_RenderNodeHandle pointer to receive the previous sibling. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_CHILD_NOT_EXIST](capi-error-code-h.md#arkui_errorcode) The child does not exist. |

### OH_ArkUI_RenderNodeUtils_GetChildren()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetChildren(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeHandle** children, int32_t* count)
```

**Description**

Retrieve all child render nodes of a parent render node.This function populates a list of child render nodes for the specified parent node.The caller is responsible for freeing the allocated child node array.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target parent render node. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)** children | Pointer to an array of child render node handles. |
| int32_t* count | Pointer to store the number of child nodes retrieved. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode. Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetChildrenCount()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetChildrenCount(ArkUI_RenderNodeHandle node, int32_t* count)
```

**Description**

Retrieve render child nodes count of a render node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target parent render node. |
| int32_t* count | Pointer to store the number of child nodes retrieved. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBackgroundColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t color)
```

**Description**

Set the background color for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node |
| uint32_t color | Packed ARGB color value (32-bit unsigned integer)Color byte layout:- Bits 24-31: Alpha channel (0x00 fully transparent, 0xFF fully opaque)- Bits 16-23: Red channel- Bits 8-15: Green channel- Bits 0-7: Blue channel |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBackgroundColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBackgroundColor(ArkUI_RenderNodeHandle node, uint32_t* color)
```

**Description**

Get the background color of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node |
| uint32_t* color | Integer pointer to store the retrieved RGBA color value.The retrieved color is a packed 32-bit value with the following byte layout:- Bits 24-31: Alpha channel (0x00 fully transparent, 0xFF fully opaque)- Bits 16-23: Red channel- Bits 8-15: Green channel- Bits 0-7: Blue channel |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetClipToFrame()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetClipToFrame(ArkUI_RenderNodeHandle node, int32_t clipToFrame)
```

**Description**

Set whether to clip content to the node's frame.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t clipToFrame | Integer (1 = clip to frame, 0 = do not clip). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetClipToFrame()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetClipToFrame(ArkUI_RenderNodeHandle node, int32_t* clipToFrame)
```

**Description**

Get the clip-to-frame status of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* clipToFrame | Integer pointer to receive clip status (1 or 0). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetClipToBounds()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetClipToBounds(ArkUI_RenderNodeHandle node, int32_t clipToBounds)
```

**Description**

Set whether to clip content to the node's Bounds.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t clipToBounds | Clipping flag (1: clip to bounds, 0: do not clip) |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetClipToBounds()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetClipToBounds(ArkUI_RenderNodeHandle node, int32_t* clipToBounds)
```

**Description**

Get whether to clip content to the node's Bounds.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* clipToBounds | Integer pointer (1 = clip to bounds, 0 = do not clip). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetOpacity()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetOpacity(ArkUI_RenderNodeHandle node, float opacity)
```

**Description**

Set the opacity value for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float opacity | Opacity value (0.0-1.0). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetOpacity()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetOpacity(ArkUI_RenderNodeHandle node, float* opacity)
```

**Description**

Get the opacity value of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* opacity | Pointer to receive opacity value (0.0-1.0). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetSize()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetSize(ArkUI_RenderNodeHandle node, int32_t width, int32_t height)
```

**Description**

Set the dimensions for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t width | Width value in pixels. |
| int32_t height | Height value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetSize()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetSize(ArkUI_RenderNodeHandle node, int32_t* width, int32_t* height)
```

**Description**

Get the dimensions of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* width | Pointer to receive width value in pixels. |
| int32_t* height | Pointer to receive height value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetPosition()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetPosition(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)
```

**Description**

Set the position coordinates for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t x | X-coordinate value in pixels. |
| int32_t y | Y-coordinate value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetPosition()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetPosition(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)
```

**Description**

Get the position coordinates of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* x | Pointer to receive X-coordinate value in pixels. |
| int32_t* y | Pointer to receive Y-coordinate value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetPivot()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetPivot(ArkUI_RenderNodeHandle node, float x, float y)
```

**Description**

Set the pivot point for transformations of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float x | The X-coordinate of pivot (normalized 0.0-1.0). |
| float y | The Y-coordinate of pivot (normalized 0.0-1.0). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetPivot()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetPivot(ArkUI_RenderNodeHandle node, float* x, float* y)
```

**Description**

Get the pivot point coordinates of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* x | Pointer to receive the X-coordinate of pivot. |
| float* y | Pointer to receive the Y-coordinate of pivot. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetScale()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetScale(ArkUI_RenderNodeHandle node, float x, float y)
```

**Description**

Set the scaling factors for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float x | Horizontal scale factor. |
| float y | Vertical scale factor. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetScale()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetScale(ArkUI_RenderNodeHandle node, float* x, float* y)
```

**Description**

Get the scaling factors of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* x | Pointer to receive horizontal scale factor. |
| float* y | Pointer to receive vertical scale factor. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetTranslation()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetTranslation(ArkUI_RenderNodeHandle node, float x, float y)
```

**Description**

Set the translation offset for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float x | Horizontal translation in pixels. |
| float y | Vertical translation in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetTranslation()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetTranslation(ArkUI_RenderNodeHandle node, float* x, float* y)
```

**Description**

Get the translation offset of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* x | Pointer to receive horizontal translation. |
| float* y | Pointer to receive vertical translation. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetRotation()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetRotation(ArkUI_RenderNodeHandle node, float x, float y, float z)
```

**Description**

Set the rotation angles for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float x | Rotation angle around X-axis in degrees. |
| float y | Rotation angle around Y-axis in degrees. |
| float z | Rotation angle around Z-axis in degrees. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetRotation()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetRotation(ArkUI_RenderNodeHandle node, float* x, float* y, float* z)
```

**Description**

Get the rotation angles of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* x | Pointer to receive X-axis rotation angle in degrees. |
| float* y | Pointer to receive Y-axis rotation angle in degrees. |
| float* z | Pointer to receive Z-axis rotation angle in degrees. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetTransform()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetTransform(ArkUI_RenderNodeHandle node, float* matrix)
```

**Description**

Set the transformation matrix for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* matrix | Pointer to a 4x4 transformation matrix (16 consecutive values).The transformation matrix should be provided as 16 consecutive floating-point values in row-major order:[m00, m01, m02, m03,m10, m11, m12, m13,m20, m21, m22, m23,m30, m31, m32, m33]Where the matrix represents:| m00 m01 m02 m03 || m10 m11 m12 m13 || m20 m21 m22 m23 || m30 m31 m32 m33 |Matrix components:| m00  | Scaling value of the x-axis. The default value is **1** for the identity matrix.     || m01  | The second value, which is affected by the rotation or tilt of the x, y, and z axes.  || m02  | The third value, which is affected by the rotation of the x, y, and z axes.  || m03  | The fourth value, which is affected by perspective projection.              || m10  | The fifth value, which is affected by the rotation or tilt of the x, y, and z axes.  || m11  | Scaling value of the y-axis. The default value is **1** for the identity matrix.     || m12  | The seventh value, which is affected by the rotation of the x, y, and z axes.  || m13  | The eighth value, which is affected by perspective projection.              || m20  | The ninth value, which is affected by the rotation of the x, y, and z axes.  || m21  | The tenth value, which is affected by the rotation of the x, y, and z axes. || m22  | Scaling value of the z-axis. The default value is **1** for the identity matrix.     || m23  | The 12th value, which is affected by perspective projection.              || m30  | Translation value of the x-axis, in px. The default value is **0** for the identity matrix.|| m31  | Translation value of the y-axis, in px. The default value is **0** for the identity matrix.|| m32  | Translation value of the z-axis, in px. The default value is **0** for the identity matrix.|| m33  | Valid in homogeneous coordinates, presenting the perspective projection effect.   | |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetShadowColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetShadowColor(ArkUI_RenderNodeHandle node, uint32_t color)
```

**Description**

Set the shadow color for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| uint32_t color | Packed ARGB color value (32-bit unsigned integer)Color byte layout:- Bits 24-31: Alpha channel (0x00 fully transparent, 0xFF fully opaque)- Bits 16-23: Red channel- Bits 8-15: Green channel- Bits 0-7: Blue channel |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetShadowColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetShadowColor(ArkUI_RenderNodeHandle node, uint32_t* color)
```

**Description**

Get the shadow color of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| uint32_t* color | Integer pointer to store the retrieved RGBA color value.The retrieved color is a packed 32-bit value with the following byte layout:- Bits 24-31: Alpha channel (0x00 fully transparent, 0xFF fully opaque)- Bits 16-23: Red channel- Bits 8-15: Green channel- Bits 0-7: Blue channel |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetShadowOffset()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetShadowOffset(ArkUI_RenderNodeHandle node, int32_t x, int32_t y)
```

**Description**

Set the shadow offset for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t x | Horizontal offset value in pixels. |
| int32_t y | Vertical offset value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetShadowOffset()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetShadowOffset(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y)
```

**Description**

Get the shadow offset of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* x | Pointer to receive horizontal offset value. |
| int32_t* y | Pointer to receive vertical offset value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetShadowAlpha()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetShadowAlpha(ArkUI_RenderNodeHandle node, float alpha)
```

**Description**

Set the shadow transparency for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float alpha | Shadow alpha value (0.0-1.0). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetShadowAlpha()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetShadowAlpha(ArkUI_RenderNodeHandle node, float* alpha)
```

**Description**

Get the shadow transparency of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* alpha | Pointer to receive shadow alpha value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetShadowElevation()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetShadowElevation(ArkUI_RenderNodeHandle node, float elevation)
```

**Description**

Set the shadow elevation for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float elevation | Elevation value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetShadowElevation()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetShadowElevation(ArkUI_RenderNodeHandle node, float* elevation)
```

**Description**

Get the shadow elevation of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* elevation | Pointer to receive elevation value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetShadowRadius()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetShadowRadius(ArkUI_RenderNodeHandle node, float radius)
```

**Description**

Set the shadow radius of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float radius | Radius value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetShadowRadius()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetShadowRadius(ArkUI_RenderNodeHandle node, float* radius)
```

**Description**

Get the shadow radius of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float* radius | Pointer to receive radius value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBorderStyle()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption* borderStyle)
```

**Description**

Set the border style for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderStyleOption](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md)* borderStyle | Handle to border style option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBorderStyle()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBorderStyle(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderStyleOption** borderStyle)
```

**Description**

Get the border style of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderStyleOption](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md)** borderStyle | Pointer to receive border style option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBorderWidth()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption* borderWidth)
```

**Description**

Set the border widths for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderWidthOption](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md)* borderWidth | Handle to border width option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBorderWidth()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBorderWidth(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderWidthOption** borderWidth)
```

**Description**

Get the border widths of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderWidthOption](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md)** borderWidth | Pointer to receive border width option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBorderColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption* borderColor)
```

**Description**

Set the border colors for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderColorOption](capi-arkui-rendernodeutils-arkui-nodebordercolor.md)* borderColor | Handle to border color option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBorderColor()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBorderColor(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderColorOption** borderColor)
```

**Description**

Get the border colors of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderColorOption](capi-arkui-rendernodeutils-arkui-nodebordercolor.md)** borderColor | Pointer to receive border color option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBorderRadius()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption* borderRadius)
```

**Description**

Set the border corner radius for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderRadiusOption](capi-arkui-rendernodeutils-arkui-nodeborderradius.md)* borderRadius | Handle to border radius option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBorderRadius()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBorderRadius(ArkUI_RenderNodeHandle node, ArkUI_NodeBorderRadiusOption** borderRadius)
```

**Description**

Get the border corner radius of a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_NodeBorderRadiusOption](capi-arkui-rendernodeutils-arkui-nodeborderradius.md)** borderRadius | Pointer to receive border radius option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetMask()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetMask(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeMaskOption* mask)
```

**Description**

Apply a mask to a render node using the mask option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md)* mask | Handle to the mask option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetClip()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetClip(ArkUI_RenderNodeHandle node, ArkUI_RenderNodeClipOption* clip)
```

**Description**

Apply a clip to a render node using the clip option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_RenderNodeClipOption](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md)* clip | Handle to the clip option. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetMarkNodeGroup(ArkUI_RenderNodeHandle node, bool markNodeGroup)
```

**Description**

Mark whether to preferentially draw the node and its children.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| bool markNodeGroup | Boolean flag indicates whether to preferentially draw the node and its children. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetBounds()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetBounds(ArkUI_RenderNodeHandle node, int32_t x, int32_t y, int32_t width, int32_t height)
```

**Description**

Set the bounds for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t x | X-coordinate of the bounds's top-left corner (in pixels) |
| int32_t y | Y-coordinate of the bounds's top-left corner (in pixels) |
| int32_t width | Width of the bounds (in pixels). |
| int32_t height | Height of the bounds (in pixels). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_PARAM_OUT_OF_RANGE](capi-error-code-h.md#arkui_errorcode) Parameter out of range.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_GetBounds()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetBounds(ArkUI_RenderNodeHandle node, int32_t* x, int32_t* y, int32_t* width, int32_t* height)
```

**Description**

Get the bounds for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| int32_t* x | Pointer to receive x-coordinate value of the bounds's top-left corner (in pixels) |
| int32_t* y | Pointer to receive y-coordinate value of the bounds's top-left corner (in pixels) |
| int32_t* width | Pointer to receive width value in pixels. |
| int32_t* height | Pointer to receive height value in pixels. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_SetDrawRegion()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetDrawRegion(ArkUI_RenderNodeHandle node, float x, float y, float w, float h)
```

**Description**

Set the draw region for a RenderNode.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| float x | X-coordinate of the bounds's top-left corner (in pixels). |
| float y | Y-coordinate of the bounds's top-left corner (in pixels). |
| float w | Width of the bounds (in pixels). |
| float h | Height of the bounds (in pixels). |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_AttachContentModifier()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachContentModifier(ArkUI_RenderNodeHandle node, ArkUI_RenderContentModifierHandle modifier)
```

**Description**

Attach a content modifier for the render node.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) node | Handle to the target render node. |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) The content modifier handle. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_IS_FROM_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the node is obtained from a FrameNode.<br>         Add since api 22. |

### OH_ArkUI_RenderNodeUtils_CreateContentModifier()

```c
ArkUI_RenderContentModifierHandle OH_ArkUI_RenderNodeUtils_CreateContentModifier()
```

**Description**

Create a content modifier handle.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) A content modifier handle. |

### OH_ArkUI_RenderNodeUtils_DisposeContentModifier()

```c
void OH_ArkUI_RenderNodeUtils_DisposeContentModifier(ArkUI_RenderContentModifierHandle modifier)
```

**Description**

Dispose the content modifier handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Handle to the content modifier. |

### OH_ArkUI_RenderNodeUtils_AttachFloatProperty()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachFloatProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatPropertyHandle property)
```

**Description**

Attach a float property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set float property to the target content modifier. |
| [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) property | [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) Handle to the float property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AttachVector2Property()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachVector2Property(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2PropertyHandle property)
```

**Description**

Attach a vector2 property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set vector2 property to the target content modifier. |
| [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) property | [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) Handle to the vector2 property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AttachColorProperty()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachColorProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorPropertyHandle property)
```

**Description**

Attach a color property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set color property to the target content modifier. |
| [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) property | [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) Handle to the color property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_FloatAnimatablePropertyHandle property)
```

**Description**

Attach a float animatable property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set float animatable property to the target contentmodifier. |
| [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) property | [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) Handle to the float animatable property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_Vector2AnimatablePropertyHandle property)
```

**Description**

Attach a vector2 animatable property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set vector2 animatable property to the target contentmodifier. |
| [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) property | [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) Handle to the vector2 animatable property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty()

```c
int32_t OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty(ArkUI_RenderContentModifierHandle modifier, ArkUI_ColorAnimatablePropertyHandle property)
```

**Description**

Attach a color property to the target content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) Set color animatable property to the target contentmodifier. |
| [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) property | [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) Handle to the color animatable property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_CreateFloatProperty()

```c
ArkUI_FloatPropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatProperty(float value)
```

**Description**

Create a float property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| float value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) | Handle to the float property. |

### OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float value)
```

**Description**

Set value of the float property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) property | [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) The float property handle. |
| float value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetFloatPropertyValue(ArkUI_FloatPropertyHandle property, float* value)
```

**Description**

Get value of the float property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) property | [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) The float property handle. |
| float* value | The pointer to receive property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeFloatProperty()

```c
void OH_ArkUI_RenderNodeUtils_DisposeFloatProperty(ArkUI_FloatPropertyHandle property)
```

**Description**

Dispose the float property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) property | [ArkUI_FloatPropertyHandle](capi-arkui-rendernodeutils-arkui-floatproperty8h.md) Handle to the float property. |

### OH_ArkUI_RenderNodeUtils_CreateVector2Property()

```c
ArkUI_Vector2PropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2Property(float x, float y)
```

**Description**

Create a vector2 property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| float x | X-coordinate value of the property. |
| float y | Y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) | Handle to the vector2 property. |

### OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float x, float y)
```

**Description**

Set value of the vector2 property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) property | [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) The vector2 property handle. |
| float x | X-coordinate value of the property. |
| float y | Y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetVector2PropertyValue(ArkUI_Vector2PropertyHandle property, float* x, float* y)
```

**Description**

Get value of the vector2 property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) property | [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) The Vector2 property handle. |
| float* x | The pointer to receive x-coordinate value of the property. |
| float* y | The pointer to receive y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeVector2Property()

```c
void OH_ArkUI_RenderNodeUtils_DisposeVector2Property(ArkUI_Vector2PropertyHandle property)
```

**Description**

Dispose the vector2 property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) property | [ArkUI_Vector2PropertyHandle](capi-arkui-rendernodeutils-arkui-vector2property8h.md) Handle to the vector2 property. |

### OH_ArkUI_RenderNodeUtils_CreateColorProperty()

```c
ArkUI_ColorPropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorProperty(uint32_t value)
```

**Description**

Create a color property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) | Handle to the color property. |

### OH_ArkUI_RenderNodeUtils_SetColorPropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t value)
```

**Description**

Set value of the color property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) property | [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) The color property handle. |
| uint32_t value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetColorPropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetColorPropertyValue(ArkUI_ColorPropertyHandle property, uint32_t* value)
```

**Description**

Get value of the color property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) property | [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) The color property handle. |
| uint32_t* value | The pointer to receive property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeColorProperty()

```c
void OH_ArkUI_RenderNodeUtils_DisposeColorProperty(ArkUI_ColorPropertyHandle property)
```

**Description**

Dispose the color property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) property | [ArkUI_ColorPropertyHandle](capi-arkui-rendernodeutils-arkui-colorproperty8h.md) Handle to the color property. |

### OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty()

```c
ArkUI_FloatAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(float value)
```

**Description**

Create a float animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| float value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) | Handle to the float animatable property. |

### OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float value)
```

**Description**

Set value of the float animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) property | [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) The float animatable property handle. |
| float value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetFloatAnimatablePropertyValue(ArkUI_FloatAnimatablePropertyHandle property, float* value)
```

**Description**

Get value of the float animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) property | [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) The float animatable property handle. |
| float* value | The pointer to receive property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty()

```c
void OH_ArkUI_RenderNodeUtils_DisposeFloatAnimatableProperty(ArkUI_FloatAnimatablePropertyHandle property)
```

**Description**

Dispose the float animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) property | [ArkUI_FloatAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-floatanimatableproperty8h.md) Handle to the float animatable property. |

### OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty()

```c
ArkUI_Vector2AnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty(float x, float y)
```

**Description**

Create a vector2 animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| float x | X-coordinate value of the property. |
| float y | Y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) | Handle to the vector2 animatable property. |

### OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float x, float y)
```

**Description**

Set value of the vector2 animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) property | [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) The vector2 animatable property handle. |
| float x | X-coordinate value of the property. |
| float y | Y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue(ArkUI_Vector2AnimatablePropertyHandle property, float* x, float* y)
```

**Description**

Get value of the vector2 animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) property | [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) The Vector2 animatable property handle. |
| float* x | The pointer to receive x-coordinate value of the property. |
| float* y | The pointer to receive y-coordinate value of the property. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty()

```c
void OH_ArkUI_RenderNodeUtils_DisposeVector2AnimatableProperty(ArkUI_Vector2AnimatablePropertyHandle property)
```

**Description**

Dispose the vector2 animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) property | [ArkUI_Vector2AnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-vector2animatableproperty8h.md) Handle to the vector2 animatable property. |

### OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty()

```c
ArkUI_ColorAnimatablePropertyHandle OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty(uint32_t value)
```

**Description**

Create a color animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) | Handle to the color animatable property. |

### OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t value)
```

**Description**

Set value of the color animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) property | [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) The color animatable property handle. |
| uint32_t value | The property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue(ArkUI_ColorAnimatablePropertyHandle property, uint32_t* value)
```

**Description**

Get value of the color animatable property.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) property | [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) The color animatable property handle. |
| uint32_t* value | The pointer to receive property value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty()

```c
void OH_ArkUI_RenderNodeUtils_DisposeColorAnimatableProperty(ArkUI_ColorAnimatablePropertyHandle property)
```

**Description**

Dispose the color animatable property handle.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) property | [ArkUI_ColorAnimatablePropertyHandle](capi-arkui-rendernodeutils-arkui-coloranimatableproperty8h.md) Handle to the color animatable property. |

### OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw()

```c
int32_t OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw(ArkUI_RenderContentModifierHandle modifier, void* userData, void (*callback)(ArkUI_DrawContext* context, void* userData))
```

**Description**

Set the onDraw function of the content modifier.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderContentModifierHandle](capi-arkui-rendernodeutils-arkui-rendercontentmodifier8h.md) modifier | The target content modifier handle. |
| void\* userData | Custom data to be passed to the callback. |
| void (\*callback)(ArkUI_DrawContext\* context | The draw event receiver callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error. |

### OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()

```c
ArkUI_RectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRectShapeOption()
```

**Description**

Create a RectShape option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RectShapeOption*](capi-arkui-rendernodeutils-arkui-rectshape.md) | A pointer to the RectShape option. |

### OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeRectShapeOption(ArkUI_RectShapeOption* option)
```

**Description**

Dispose the RectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* option | Pointer to the RectShape option. |

### OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue()

```c
void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionEdgeValue(ArkUI_RectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)
```

**Description**

Set the edge value of RectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* option | Pointer to the RectShape option. |
| float edgeValue | The edge value of the RectShape. |
| [ArkUI_EdgeDirection](capi-native-type-h.md#arkui_edgedirection) direction | {@Link ArkUI_EdgeDirection} The direction of the edge. |

### OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()

```c
ArkUI_NodeBorderStyleOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption()
```

**Description**

Create a NodeBorderStyle option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeBorderStyleOption*](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md) | A pointer to the NodeBorderStyle option. |

### OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption(ArkUI_NodeBorderStyleOption* option)
```

**Description**

Dispose the NodeBorderStyle option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderStyleOption](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md)* option | Pointer to the NodeBorderStyle option. |

### OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle()

```c
void OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle(ArkUI_NodeBorderStyleOption* option, ArkUI_BorderStyle edgeStyle, ArkUI_EdgeDirection direction)
```

**Description**

Set the edge value of NodeBorderStyle option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderStyleOption](capi-arkui-rendernodeutils-arkui-nodeborderstyle.md)* option | Pointer to the NodeBorderStyle option. |
| [ArkUI_BorderStyle](capi-native-type-h.md#arkui_borderstyle) edgeStyle | {@Link ArkUI_BorderStyle} The edge border style value of the NodeBorderStyle option. |
| [ArkUI_EdgeDirection](capi-native-type-h.md#arkui_edgedirection) direction | {@Link ArkUI_EdgeDirection} The direction of the edge. |

### OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()

```c
ArkUI_NodeBorderWidthOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption()
```

**Description**

Create a NodeBorderWidth option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeBorderWidthOption*](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md) | A pointer to the NodeBorderWidth option. |

### OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption(ArkUI_NodeBorderWidthOption* option)
```

**Description**

Dispose the NodeBorderWidth option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderWidthOption](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md)* option | Pointer to the NodeBorderWidth option. |

### OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth()

```c
void OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth(ArkUI_NodeBorderWidthOption* option, float edgeWidth, ArkUI_EdgeDirection direction)
```

**Description**

Set the edge value of NodeBorderWidth option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderWidthOption](capi-arkui-rendernodeutils-arkui-nodeborderwidth.md)* option | Pointer to the NodeBorderWidth option. |
| float edgeWidth | The edge width value of the NodeBorderWidth option. |
| [ArkUI_EdgeDirection](capi-native-type-h.md#arkui_edgedirection) direction | {@Link ArkUI_EdgeDirection} The direction of the edge. |

### OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()

```c
ArkUI_NodeBorderColorOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption()
```

**Description**

Create a NodeBorderColor option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeBorderColorOption*](capi-arkui-rendernodeutils-arkui-nodebordercolor.md) | A pointer to the NodeBorderColor option. |

### OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption(ArkUI_NodeBorderColorOption* option)
```

**Description**

Dispose the NodeBorderColor option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderColorOption](capi-arkui-rendernodeutils-arkui-nodebordercolor.md)* option | Pointer to the NodeBorderColor option. |

### OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor()

```c
void OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor(ArkUI_NodeBorderColorOption* option, uint32_t edgeColor, ArkUI_EdgeDirection direction)
```

**Description**

Set the edge value of NodeBorderColor option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderColorOption](capi-arkui-rendernodeutils-arkui-nodebordercolor.md)* option | Pointer to the NodeBorderColor option. |
| uint32_t edgeColor | The edge color value of the NodeBorderColor option. |
| [ArkUI_EdgeDirection](capi-native-type-h.md#arkui_edgedirection) direction | {@Link ArkUI_EdgeDirection} The direction of the edge. |

### OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()

```c
ArkUI_NodeBorderRadiusOption* OH_ArkUI_RenderNodeUtils_CreateNodeBorderRadiusOption()
```

**Description**

Create a NodeBorderRadius option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeBorderRadiusOption*](capi-arkui-rendernodeutils-arkui-nodeborderradius.md) | A pointer to the NodeBorderRadius option. |

### OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeNodeBorderRadiusOption(ArkUI_NodeBorderRadiusOption* option)
```

**Description**

Dispose the NodeBorderRadius option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderRadiusOption](capi-arkui-rendernodeutils-arkui-nodeborderradius.md)* option | Pointer to the NodeBorderRadius option. |

### OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius()

```c
void OH_ArkUI_RenderNodeUtils_SetNodeBorderRadiusOptionCornerRadius(ArkUI_NodeBorderRadiusOption* option, uint32_t cornerRadius, ArkUI_CornerDirection direction)
```

**Description**

Set the corner value of NodeBorderRadius option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeBorderRadiusOption](capi-arkui-rendernodeutils-arkui-nodeborderradius.md)* option | Pointer to the NodeBorderRadius option. |
| uint32_t cornerRadius | The corner radius value of the NodeBorderRadius option. |
| [ArkUI_CornerDirection](capi-native-type-h.md#arkui_cornerdirection) direction | {@Link ArkUI_CornerDirection} The direction of the corner. |

### OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()

```c
ArkUI_CircleShapeOption* OH_ArkUI_RenderNodeUtils_CreateCircleShapeOption()
```

**Description**

Create a CircleShape option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_CircleShapeOption*](capi-arkui-rendernodeutils-arkui-circleshape.md) | A pointer to the CircleShape option. |

### OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeCircleShapeOption(ArkUI_CircleShapeOption* option)
```

**Description**

Dispose the CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* option | Pointer to the CircleShape option. |

### OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX()

```c
void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterX(ArkUI_CircleShapeOption* option, float centerX)
```

**Description**

Set the centerX value of CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* option | Pointer to the CircleShape option. |
| float centerX | The centerX value. |

### OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY()

```c
void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionCenterY(ArkUI_CircleShapeOption* option, float centerY)
```

**Description**

Set the centerY value of CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* option | Pointer to the CircleShape option. |
| float centerY | The centerY value. |

### OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius()

```c
void OH_ArkUI_RenderNodeUtils_SetCircleShapeOptionRadius(ArkUI_CircleShapeOption* option, float radius)
```

**Description**

Set the radius value of CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* option | Pointer to the CircleShape option. |
| float radius | The radius value. |

### OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()

```c
ArkUI_RoundRectShapeOption* OH_ArkUI_RenderNodeUtils_CreateRoundRectShapeOption()
```

**Description**

Create a RoundRectShape option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption*](capi-arkui-rendernodeutils-arkui-roundrectshape.md) | A pointer to the RoundRectShape option. |

### OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeRoundRectShapeOption(ArkUI_RoundRectShapeOption* option)
```

**Description**

Dispose the RoundRectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* option | Pointer to the RoundRectShape option. |

### OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue()

```c
void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionEdgeValue(ArkUI_RoundRectShapeOption* option, float edgeValue, ArkUI_EdgeDirection direction)
```

**Description**

Set the edge value of RoundRectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* option | Pointer to the RoundRectShape option. |
| float edgeValue | The edge value of the RoundRectShape. |
| [ArkUI_EdgeDirection](capi-native-type-h.md#arkui_edgedirection) direction | {@Link ArkUI_EdgeDirection} The direction of the edge. |

### OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY()

```c
void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionCornerXY(ArkUI_RoundRectShapeOption* option, float x, float y, ArkUI_CornerDirection direction)
```

**Description**

Set the coordinate value of the target corner.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* option | Pointer to the RoundRectShape option. |
| float x | X-coordinate of the target corner (in pixels). |
| float y | Y-coordinate of the target corner (in pixels). |
| [ArkUI_CornerDirection](capi-native-type-h.md#arkui_cornerdirection) direction | {@Link ArkUI_CornerDirection} The direction of the corner. |

### OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()

```c
ArkUI_CommandPathOption* OH_ArkUI_RenderNodeUtils_CreateCommandPathOption()
```

**Description**

Create a CommandPath option.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_CommandPathOption*](capi-arkui-rendernodeutils-arkui-commandpath.md) | A pointer to the CommandPath option. |

### OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeCommandPathOption(ArkUI_CommandPathOption* option)
```

**Description**

Dispose the CommandPath option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md)* option | Pointer to the CommandPath option. |

### OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands()

```c
void OH_ArkUI_RenderNodeUtils_SetCommandPathOptionCommands(ArkUI_CommandPathOption* option, char* commands)
```

**Description**

Set the commands value of CommandPath option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md)* option | Pointer to the CommandPath option. |
| char* commands | The commands value. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape()

```c
ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRectShape(ArkUI_RectShapeOption* shape)
```

**Description**

Create a mask option from a RectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* shape | [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md) Pointer to the RectShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption*](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | A pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape()

```c
ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)
```

**Description**

Create a mask option from a RoundRectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* shape | [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md) Pointer to the RoundRectShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption*](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | A pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape()

```c
ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCircleShape(ArkUI_CircleShapeOption* shape)
```

**Description**

Create a mask option from a CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* shape | [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md) Pointer to the CircleShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption*](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | A pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape()

```c
ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromOvalShape(ArkUI_RectShapeOption* shape)
```

**Description**

Create a mask option from a OvalShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* shape | [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md) Pointer to the OvalShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption*](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | A pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath()

```c
ArkUI_RenderNodeMaskOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeMaskOptionFromCommandPath(ArkUI_CommandPathOption* path)
```

**Description**

Create a mask option from a CommandPath option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md)* path | [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md) Pointer to the CommandPath option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption*](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md) | A pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeMaskOption(ArkUI_RenderNodeMaskOption* option)
```

**Description**

Dispose the RenderNodeMask option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md)* option | Pointer to the RenderNodeMask option. |

### OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor()

```c
void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionFillColor(ArkUI_RenderNodeMaskOption* mask, uint32_t fillColor)
```

**Description**

Set the fill color of RenderNodeMask option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md)* mask | Pointer to the RenderNodeMask option. |
| uint32_t fillColor | The fill color of the mask. |

### OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor()

```c
void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeColor(ArkUI_RenderNodeMaskOption* mask, uint32_t strokeColor)
```

**Description**

Set the stroke color of RenderNodeMask option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md)* mask | Pointer to the RenderNodeMask option. |
| uint32_t strokeColor | The stroke color of the mask. |

### OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth()

```c
void OH_ArkUI_RenderNodeUtils_SetRenderNodeMaskOptionStrokeWidth(ArkUI_RenderNodeMaskOption* mask, float strokeWidth)
```

**Description**

Set the stroke width of RenderNodeMask option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeMaskOption](capi-arkui-rendernodeutils-arkui-rendernodemaskoption.md)* mask | Pointer to the RenderNodeMask option. |
| float strokeWidth | The stroke width of the mask. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape()

```c
ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRectShape(ArkUI_RectShapeOption* shape)
```

**Description**

Create a clip option from a RectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* shape | [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md) Pointer to the RectShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption*](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | A pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape()

```c
ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromRoundRectShape(ArkUI_RoundRectShapeOption* shape)
```

**Description**

Create a clip option from a RoundRectShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* shape | [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md) Pointer to the RoundRectShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption*](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | A pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape()

```c
ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCircleShape(ArkUI_CircleShapeOption* shape)
```

**Description**

Create a clip option from a CircleShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md)* shape | [ArkUI_CircleShapeOption](capi-arkui-rendernodeutils-arkui-circleshape.md) Pointer to the CircleShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption*](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | A pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape()

```c
ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromOvalShape(ArkUI_RectShapeOption* shape)
```

**Description**

Create a clip option from a OvalShape option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* shape | [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md) Pointer to the OvalShape option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption*](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | A pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath()

```c
ArkUI_RenderNodeClipOption* OH_ArkUI_RenderNodeUtils_CreateRenderNodeClipOptionFromCommandPath(ArkUI_CommandPathOption* path)
```

**Description**

Create a clip option from a CommandPath option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md)* path | [ArkUI_CommandPathOption](capi-arkui-rendernodeutils-arkui-commandpath.md) Pointer to the CommandPath option. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption*](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md) | A pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption()

```c
void OH_ArkUI_RenderNodeUtils_DisposeRenderNodeClipOption(ArkUI_RenderNodeClipOption* option)
```

**Description**

Dispose the RenderNodeClip option.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RenderNodeClipOption](capi-arkui-rendernodeutils-arkui-rendernodeclipoption.md)* option | Pointer to the RenderNodeClip option. |

### OH_ArkUI_RenderNodeUtils_GetRenderNode()

```c
int32_t OH_ArkUI_RenderNodeUtils_GetRenderNode(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle* renderNode)
```

**Description**

Get the RenderNode of the target node. The target node should be adopted.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | ArkUI_NodeHandle pointer. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* renderNode | ArkUI_RenderNodeHandle* pointer, the RenderNode of the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Error code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>         [ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if the CAPI init error.<br>         [ARKUI_ERROR_CODE_RENDER_NOT_ADOPTED_NODE](capi-error-code-h.md#arkui_errorcode) The node is not adopted. |

### OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionValue()

```c
void OH_ArkUI_RenderNodeUtils_SetRoundRectShapeOptionValue(ArkUI_RoundRectShapeOption* option, float x, float y, float width, float height)
```

**Description**

Sets the bounding rectangle for a rounded rectangle shape optionThis function defines the geometric frame of a rounded rectangle by specifying its position and dimensions.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RoundRectShapeOption](capi-arkui-rendernodeutils-arkui-roundrectshape.md)* option | Pointer to the rounded rectangle shape option to be configured |
| float x | X-coordinate of the rectangle's top-left corner, determining the left boundary position |
| float y | Y-coordinate of the rectangle's top-left corner, determining the top boundary position |
| float width | Width of the rectangle, representing the horizontal extent from the X-coordinate,which determines the right boundary position (right = x + width) |
| float height | Height of the rectangle, representing the vertical extent from the Y-coordinate,which determines the bottom boundary position (bottom = y + height) |

### OH_ArkUI_RenderNodeUtils_SetRectShapeOptionValue()

```c
void OH_ArkUI_RenderNodeUtils_SetRectShapeOptionValue(ArkUI_RectShapeOption* option, float x, float y, float width, float height)
```

**Description**

Sets the bounding rectangle for a rectangle shape optionThis function defines the geometric frame of a rectangle by specifying its position and dimensions.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_RectShapeOption](capi-arkui-rendernodeutils-arkui-rectshape.md)* option | Pointer to the rectangle shape option to be configured |
| float x | X-coordinate of the rectangle's top-left corner, determining the left boundary position |
| float y | Y-coordinate of the rectangle's top-left corner, determining the top boundary position |
| float width | Width of the rectangle, representing the horizontal extent from the X-coordinate,which determines the right boundary position (right = x + width) |
| float height | Height of the rectangle, representing the vertical extent from the Y-coordinate,which determines the bottom boundary position (bottom = y + height) |

### OH_ArkUI_RenderNodeUtils_InsertRenderNodeAt()

```c
ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_InsertRenderNodeAt(ArkUI_NodeHandle node, ArkUI_RenderNodeHandle child, int32_t position)
```

**Description**

Insert a child render node at the specified position in the parent node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | the target parent node. Only customNode type parent nodes are supported. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md) child | the child RenderNode to insert. |
| int32_t position | the index at which to insert the child node.The position must be within the range [0, currentChildCount].If the position equals currentChildCount, it is equivalent to an add operation. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Error code.<br>     <ul><li>[ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>     </li><li>[ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>     </li><li>[ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.<br>     </li><li>[ARKUI_ERROR_CODE_NOT_CUSTOM_NODE](capi-error-code-h.md#arkui_errorcode) The node is not a customNode.<br>     </li><li>[ARKUI_ERROR_CODE_CHILD_EXISTED](capi-error-code-h.md#arkui_errorcode) The node already has a child.<br>     </li><li>[ARKUI_ERROR_CODE_RENDER_PARENT_EXISTED](capi-error-code-h.md#arkui_errorcode) The child already has a parent node.<br>     </li><li>[ARKUI_ERROR_CODE_RENDER_HAS_INVALID_FRAME_NODE](capi-error-code-h.md#arkui_errorcode) if the child is obtained from a FrameNode,<br>     and its corresponding FrameNode is no longer in the adopted state.</li></ul> |

### OH_ArkUI_RenderNodeUtils_GetRenderNodeChildrenCount()

```c
ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_GetRenderNodeChildrenCount(ArkUI_NodeHandle node, int32_t* count)
```

**Description**

Get the number of child render nodes of the specified parent node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | the parent node to query. |
| int32_t* count | the count of the child render node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Error code.<br>     <ul><li>[ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>     </li><li>[ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>     </li><li>[ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.</li></ul> |

### OH_ArkUI_RenderNodeUtils_GetRenderNodeAt()

```c
ArkUI_ErrorCode OH_ArkUI_RenderNodeUtils_GetRenderNodeAt(ArkUI_NodeHandle node, int32_t position, ArkUI_RenderNodeHandle* child)
```

**Description**

Get the child render node at the specified position from the parent node.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target parent node. |
| int32_t position | Index location. The position must be in the range [0, childCount-1]. |
| [ArkUI_RenderNodeHandle](capi-arkui-rendernodeutils-arkui-rendernode8h.md)* child | the output parameter that will receive the child render node handle. Cannot be null. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Error code.<br>     <ul><li>[ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) Success.<br>     </li><li>[ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) Function parameter exception.<br>     </li><li>[ARKUI_ERROR_CODE_CAPI_INIT_ERROR](capi-error-code-h.md#arkui_errorcode) if CAPI init error.</li></ul> |


