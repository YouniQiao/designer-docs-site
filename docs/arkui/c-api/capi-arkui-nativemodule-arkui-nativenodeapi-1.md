# ArkUI_NativeNodeAPI_1

```c
typedef struct ArkUI_NativeNodeAPI_1 {...} ArkUI_NativeNodeAPI_1
```

## Overview

Declares a collection of native node APIs provided by ArkUI.The APIs related to the native node must be called in the main thread.

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_node.h](capi-native-node-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t version | Struct version.<br>**Since**: 12 |


### Member functions

| Name | Description |
| -- | -- |
| [ArkUI_NodeHandle (\*createNode)(ArkUI_NodeType type)](#createnode) | Creates a component based on [ArkUI_NodeType](capi-native-node-h.md#arkui_nodetype) and returns the pointer to the created component. |
| [void (\*disposeNode)(ArkUI_NodeHandle node)](#disposenode) | Destroys the component to which the specified pointer points. |
| [int32_t (\*addChild)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child)](#addchild) | Adds a component to a parent node. |
| [int32_t (\*removeChild)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child)](#removechild) | Removes a component from its parent node. |
| [int32_t (\*insertChildAfter)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, ArkUI_NodeHandle sibling)](#insertchildafter) | Inserts a component to a parent node after the specified <b>sibling</b> node. |
| [int32_t (\*insertChildBefore)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, ArkUI_NodeHandle sibling)](#insertchildbefore) | Inserts a component to a parent node before the specified <b>sibling</b> node. |
| [int32_t (\*insertChildAt)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, int32_t position)](#insertchildat) | Inserts a component to the specified position in a parent node. |
| [int32_t (\*setAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute, const ArkUI_AttributeItem* item)](#setattribute) | Sets the attribute of a node. |
| [const ArkUI_AttributeItem* (\*getAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute)](#getattribute) | Obtains an attribute.The pointer returned by this API is an internal buffer pointer of the ArkUI framework. As such, you do not needto call <b>delete</b> to release the memory. However, the pointer must be used before this API is called nexttime. Otherwise, the pointer may be overwritten by other values. |
| [int32_t (\*resetAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute)](#resetattribute) | Resets an attribute. |
| [int32_t (\*registerNodeEvent)(ArkUI_NodeHandle node, ArkUI_NodeEventType eventType,int32_t targetId, void* userData)](#registernodeevent) | Registers an event for the specified node.When the component is being displayed, this API must be called in the main thread. |
| [void (\*unregisterNodeEvent)(ArkUI_NodeHandle node, ArkUI_NodeEventType eventType)](#unregisternodeevent) | Unregisters an event for the specified node.When the component is being displayed, this API must be called in the main thread. |
| [void (\*registerNodeEventReceiver)(void (\*eventReceiver)(ArkUI_NodeEvent* event))](#registernodeeventreceiver) | Registers an event receiver.The ArkUI framework collects component events generated during the process and calls back the events throughthe registered event receiver. <br> A new call to this API will overwrite the previously registered event receiver. <br> Do not directly save the <b>ArkUI_NodeEvent</b> object pointer. The data will be destroyed after thecallback is complete. <br> To bind with a component instance, you can use the <b>addNodeEventReceiver</b> function. <br> |
| [void (\*unregisterNodeEventReceiver)()](#unregisternodeeventreceiver) | Unregisters the event receiver. |
| [void (\*markDirty)(ArkUI_NodeHandle node, ArkUI_NodeDirtyFlag dirtyFlag)](#markdirty) | Forcibly marks the current node that needs to be measured, laid out, or rendered again.Regarding updates to system attributes, the ArkUI framework automatically marks the dirty area and performsmeasuring, layout, or rendering again. In this case, you do not need to call this API. |
| [uint32_t (\*getTotalChildCount)(ArkUI_NodeHandle node)](#gettotalchildcount) | Obtains the number of subnodes. |
| [ArkUI_NodeHandle (\*getChildAt)(ArkUI_NodeHandle node, int32_t position)](#getchildat) | Obtains a subnode. |
| [ArkUI_NodeHandle (\*getFirstChild)(ArkUI_NodeHandle node)](#getfirstchild) | Obtains the first subnode. |
| [ArkUI_NodeHandle (\*getLastChild)(ArkUI_NodeHandle node)](#getlastchild) | Obtains the last subnode. |
| [ArkUI_NodeHandle (\*getPreviousSibling)(ArkUI_NodeHandle node)](#getprevioussibling) | Obtains the previous sibling node. |
| [ArkUI_NodeHandle (\*getNextSibling)(ArkUI_NodeHandle node)](#getnextsibling) | Obtains the next sibling node. |
| [int32_t (\*registerNodeCustomEvent)(ArkUI_NodeHandle node, ArkUI_NodeCustomEventType eventType, int32_t targetId, void* userData)](#registernodecustomevent) | Registers a custom event for a node. When the event is triggered, the value is returned through the entrypoint function registered by <b>registerNodeCustomEventReceiver</b>. |
| [void (\*unregisterNodeCustomEvent)(ArkUI_NodeHandle node, ArkUI_NodeCustomEventType eventType)](#unregisternodecustomevent) | Unregisters a custom event for a node. |
| [void (\*registerNodeCustomEventReceiver)(void (\*eventReceiver)(ArkUI_NodeCustomEvent* event))](#registernodecustomeventreceiver) | Registers a unified entry point function for custom node event callbacks.The ArkUI framework collects custom component events generated during the process and calls back the eventsthrough the registered <b>registerNodeCustomEventReceiver</b>. <br> A new call to this API will overwrite the previously registered event receiver.Do not directly save the <b>ArkUI_NodeCustomEvent</b> object pointer.The data will be destroyed after the callback is complete. <br> To bind with a component instance, you can use the <b>addNodeCustomEventReceiver</b> function. <br> |
| [void (\*unregisterNodeCustomEventReceiver)()](#unregisternodecustomeventreceiver) | Unregisters the unified entry point function for custom node event callbacks. |
| [int32_t (\*setMeasuredSize)(ArkUI_NodeHandle node, int32_t width, int32_t height)](#setmeasuredsize) | Sets the width and height for a component after the measurement. |
| [int32_t (\*setLayoutPosition)(ArkUI_NodeHandle node, int32_t positionX, int32_t positionY)](#setlayoutposition) | Sets the position for a component. |
| [ArkUI_IntSize (\*getMeasuredSize)(ArkUI_NodeHandle node)](#getmeasuredsize) | Obtains the width and height of a component after measurement. |
| [ArkUI_IntOffset (\*getLayoutPosition)(ArkUI_NodeHandle node)](#getlayoutposition) | Obtains the position of a component after the layout is complete. |
| [int32_t (\*measureNode)(ArkUI_NodeHandle node, ArkUI_LayoutConstraint* Constraint)](#measurenode) | Measures a node. You can use the <b>getMeasuredSize</b> API to obtain the size after the measurement. |
| [int32_t (\*layoutNode)(ArkUI_NodeHandle node, int32_t positionX, int32_t positionY)](#layoutnode) | Lays outs a component and passes the expected position of the component relative to its parent component.When the component is being displayed, this API must be called in the main thread. |
| [int32_t (\*addNodeEventReceiver)(ArkUI_NodeHandle node, void (\*eventReceiver)(ArkUI_NodeEvent* event))](#addnodeeventreceiver) | Adds a component event callback function to a component to receive component events generatedby the component.Unlike the global registration function <b>registerNodeEventReceiver</b>, this API allows multiple eventreceivers to be added to the same component. <br> The callback added by this API is triggered before the global callback registered by<b>registerNodeEventReceiver</b>. <br> Do not directly save the <b>ArkUI_NodeEvent</b> object pointer.The data will be destroyed after the callback is complete. <br> |
| [int32_t (\*removeNodeEventReceiver)(ArkUI_NodeHandle node, void (\*eventReceiver)(ArkUI_NodeEvent* event))](#removenodeeventreceiver) | Removes the registered component event callback function from a component. |
| [int32_t (\*addNodeCustomEventReceiver)(ArkUI_NodeHandle node, void (\*eventReceiver)(ArkUI_NodeCustomEvent* event))](#addnodecustomeventreceiver) | Adds a custom event callback function to a component to receive custom events(such as layout and drawing events) generated by the component.Unlike the global registration function <b>registerNodeCustomEventReceiver</b>, this API allowsmultiple event receivers to be added to the same component. <br> The callback added by this API is triggered before the global callback registered by<b>registerNodeCustomEventReceiver</b>. <br> Do not directly save the <b>ArkUI_NodeCustomEvent</b> object pointer.The data will be destroyed after the callback is complete. <br> |
| [int32_t (\*removeNodeCustomEventReceiver)(ArkUI_NodeHandle node,void (\*eventReceiver)(ArkUI_NodeCustomEvent* event))](#removenodecustomeventreceiver) | Removes a registered custom event callback function from a component. |
| [int32_t (\*setUserData)(ArkUI_NodeHandle node, void* userData)](#setuserdata) | Saves custom data on the specified component. |
| [void* (\*getUserData)(ArkUI_NodeHandle node)](#getuserdata) | Obtains the custom data saved on the specified component. |
| [int32_t (\*setLengthMetricUnit)(ArkUI_NodeHandle node, ArkUI_LengthMetricUnit unit)](#setlengthmetricunit) | Sets the unit for a component. |
| [ArkUI_NodeHandle (\*getParent)(ArkUI_NodeHandle node)](#getparent) | Get the parent node. |
| [int32_t (\*removeAllChildren)(ArkUI_NodeHandle parent)](#removeallchildren) | Uninstall all child nodes from the parent component. |

## Member function description

### createNode()

```c
ArkUI_NodeHandle (*createNode)(ArkUI_NodeType type)
```

**Description**

Creates a component based on [ArkUI_NodeType](capi-native-node-h.md#arkui_nodetype) and returns the pointer to the created component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeType](capi-native-node-h.md#arkui_nodetype) type | Indicates the type of component to create. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the created component. If the component fails to be created, NULL is returned. |

### disposeNode()

```c
void (*disposeNode)(ArkUI_NodeHandle node)
```

**Description**

Destroys the component to which the specified pointer points.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the pointer. |

### addChild()

```c
int32_t (*addChild)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child)
```

**Description**

Adds a component to a parent node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | Indicates the pointer to the parent node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) child | Indicates the pointer to the child node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed on<br>                 BuilderNode generated nodes: setting or resetting attributes, setting events, or adding or editing subnodes.<br>             Returns [ARKUI_ERROR_CODE_NODE_IS_ADOPTED](capi-error-code-h.md#arkui_errorcode) if the child node has already been adopted. Add since api 22. |

### removeChild()

```c
int32_t (*removeChild)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child)
```

**Description**

Removes a component from its parent node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | Indicates the pointer to the parent node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) child | Indicates the pointer to the child node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed<br>     on BuilderNode generated nodes:<br>             setting or resetting attributes, setting events, or adding or editing subnodes. |

### insertChildAfter()

```c
int32_t (*insertChildAfter)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, ArkUI_NodeHandle sibling)
```

**Description**

Inserts a component to a parent node after the specified <b>sibling</b> node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | Indicates the pointer to the parent node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) child | Indicates the pointer to the child node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) sibling | Indicates the pointer to the sibling node after which the target node is to be inserted.If the value is null, the node is inserted at the start of the parent node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed on BuilderNode generated<br>                 nodes: setting or resetting attributes, setting events, or adding or editing subnodes.<br>             Returns [ARKUI_ERROR_CODE_NODE_IS_ADOPTED](capi-error-code-h.md#arkui_errorcode) if the child node has already been adopted. Add since api 22. |

### insertChildBefore()

```c
int32_t (*insertChildBefore)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, ArkUI_NodeHandle sibling)
```

**Description**

Inserts a component to a parent node before the specified <b>sibling</b> node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | Indicates the pointer to the parent node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) child | Indicates the pointer to the child node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) sibling | Indicates the pointer to the sibling node before which the target node is to be inserted.If the value is null, the node is inserted at the end of the parent node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed on BuilderNode generated<br>                 nodes: setting or resetting attributes, setting events, or adding or editing subnodes.<br>             Returns [ARKUI_ERROR_CODE_NODE_IS_ADOPTED](capi-error-code-h.md#arkui_errorcode) if the child node has already been adopted. Add since api 22. |

### insertChildAt()

```c
int32_t (*insertChildAt)(ArkUI_NodeHandle parent, ArkUI_NodeHandle child, int32_t position)
```

**Description**

Inserts a component to the specified position in a parent node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | Indicates the pointer to the parent node. |
|  [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) child | Indicates the pointer to the child node. |
|  int32_t position | Indicates the position to which the target child node is to be inserted. If the value is anegative number or invalid, the node is inserted at the end of the parent node. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed on BuilderNode generated<br>                 nodes: setting or resetting attributes, setting events, or adding or editing subnodes.<br>             Returns [ARKUI_ERROR_CODE_NODE_IS_ADOPTED](capi-error-code-h.md#arkui_errorcode) if the child node has already been adopted. Add since api 22. |

### setAttribute()

```c
int32_t (*setAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute, const ArkUI_AttributeItem* item)
```

**Description**

Sets the attribute of a node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node whose attribute needs to be set. |
|  [ArkUI_NodeAttributeType](capi-native-node-h.md#arkui_nodeattributetype) attribute | Indicates the type of attribute to set. |
| value | Indicates the attribute value. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ATTRIBUTE_OR_EVENT_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the dynamic implementation library<br>             of the native API was not found.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed<br>             on BuilderNode generated nodes:<br>             setting or resetting attributes, setting events, or adding or editing subnodes. |

### getAttribute()

```c
const ArkUI_AttributeItem* (*getAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute)
```

**Description**

Obtains an attribute.The pointer returned by this API is an internal buffer pointer of the ArkUI framework. As such, you do not needto call <b>delete</b> to release the memory. However, the pointer must be used before this API is called nexttime. Otherwise, the pointer may be overwritten by other values.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node whose attribute needs to be obtained. |
|  [ArkUI_NodeAttributeType](capi-native-node-h.md#arkui_nodeattributetype) attribute | Indicates the type of attribute to obtain. |

**Returns**:

| Type | Description |
| -- | -- |
| [const ArkUI_AttributeItem*](capi-arkui-nativemodule-arkui-attributeitem.md) | Returns the attribute value. If the operation fails, a null pointer is returned. |

### resetAttribute()

```c
int32_t (*resetAttribute)(ArkUI_NodeHandle node, ArkUI_NodeAttributeType attribute)
```

**Description**

Resets an attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node whose attribute needs to be reset. |
|  [ArkUI_NodeAttributeType](capi-native-node-h.md#arkui_nodeattributetype) attribute | Indicates the type of attribute to reset. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ATTRIBUTE_OR_EVENT_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the dynamic implementation library<br>             of the native API was not found.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed<br>             on BuilderNode generated nodes:<br>             setting or resetting attributes, setting events, or adding or editing subnodes. |

### registerNodeEvent()

```c
int32_t (*registerNodeEvent)(ArkUI_NodeHandle node, ArkUI_NodeEventType eventType,int32_t targetId, void* userData)
```

**Description**

Registers an event for the specified node.When the component is being displayed, this API must be called in the main thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  [ArkUI_NodeEventType](capi-native-node-h.md#arkui_nodeeventtype) eventType | Indicates the type of event to register. |
| int32_t targetId | Indicates the custom event ID, which is passed in the callback of [ArkUI_NodeEvent](capi-arkui-nativemodule-arkui-nodeevent.md)when the event is triggered. |
|  void* userData | Indicates the custom event parameter, which is passed in the callback of [ArkUI_NodeEvent](capi-arkui-nativemodule-arkui-nodeevent.md) |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ATTRIBUTE_OR_EVENT_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the dynamic implementation library<br>             of the native API was not found.<br>             Returns [ARKUI_ERROR_CODE_ARKTS_NODE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the following operations are not allowed<br>             on BuilderNode generated nodes:<br>             setting or resetting attributes, setting events, or adding or editing subnodes. |

### unregisterNodeEvent()

```c
void (*unregisterNodeEvent)(ArkUI_NodeHandle node, ArkUI_NodeEventType eventType)
```

**Description**

Unregisters an event for the specified node.When the component is being displayed, this API must be called in the main thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  [ArkUI_NodeEventType](capi-native-node-h.md#arkui_nodeeventtype) eventType | Indicates the type of event to unregister. |

### registerNodeEventReceiver()

```c
void (*registerNodeEventReceiver)(void (*eventReceiver)(ArkUI_NodeEvent* event))
```

**Description**

Registers an event receiver.The ArkUI framework collects component events generated during the process and calls back the events throughthe registered event receiver. <br> A new call to this API will overwrite the previously registered event receiver. <br> Do not directly save the <b>ArkUI_NodeEvent</b> object pointer. The data will be destroyed after thecallback is complete. <br> To bind with a component instance, you can use the <b>addNodeEventReceiver</b> function. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| eventReceiver | Indicates the event receiver to register. |

### unregisterNodeEventReceiver()

```c
void (*unregisterNodeEventReceiver)()
```

**Description**

Unregisters the event receiver.

**Since**: 12

### markDirty()

```c
void (*markDirty)(ArkUI_NodeHandle node, ArkUI_NodeDirtyFlag dirtyFlag)
```

**Description**

Forcibly marks the current node that needs to be measured, laid out, or rendered again.Regarding updates to system attributes, the ArkUI framework automatically marks the dirty area and performsmeasuring, layout, or rendering again. In this case, you do not need to call this API.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node for which you want to mark as dirty area. |
|  [ArkUI_NodeDirtyFlag](capi-native-node-h.md#arkui_nodedirtyflag) dirtyFlag | Indicates type of dirty area. |

### getTotalChildCount()

```c
uint32_t (*getTotalChildCount)(ArkUI_NodeHandle node)
```

**Description**

Obtains the number of subnodes.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | the number of subnodes. If not, returns 0. |

### getChildAt()

```c
ArkUI_NodeHandle (*getChildAt)(ArkUI_NodeHandle node, int32_t position)
```

**Description**

Obtains a subnode.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  int32_t position | Indicates the position of the subnode. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the subnode if the subnode exists; returns <b>NULL</b> otherwise. |

### getFirstChild()

```c
ArkUI_NodeHandle (*getFirstChild)(ArkUI_NodeHandle node)
```

**Description**

Obtains the first subnode.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the subnode if the subnode exists; returns <b>NULL</b> otherwise. |

### getLastChild()

```c
ArkUI_NodeHandle (*getLastChild)(ArkUI_NodeHandle node)
```

**Description**

Obtains the last subnode.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the subnode if the subnode exists; returns <b>NULL</b> otherwise. |

### getPreviousSibling()

```c
ArkUI_NodeHandle (*getPreviousSibling)(ArkUI_NodeHandle node)
```

**Description**

Obtains the previous sibling node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the subnode if the subnode exists; returns <b>NULL</b> otherwise. |

### getNextSibling()

```c
ArkUI_NodeHandle (*getNextSibling)(ArkUI_NodeHandle node)
```

**Description**

Obtains the next sibling node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer to the subnode if the subnode exists; returns <b>NULL</b> otherwise. |

### registerNodeCustomEvent()

```c
int32_t (*registerNodeCustomEvent)(ArkUI_NodeHandle node, ArkUI_NodeCustomEventType eventType, int32_t targetId, void* userData)
```

**Description**

Registers a custom event for a node. When the event is triggered, the value is returned through the entrypoint function registered by <b>registerNodeCustomEventReceiver</b>.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  ArkUI_NodeCustomEventType eventType | Indicates the type of event to register. |
|  int32_t targetId | Indicates the custom event ID, which is passed in the callback of [ArkUI_NodeCustomEvent](capi-arkui-nativemodule-arkui-nodecustomevent.md)when the event is triggered. |
|  void* userData | Indicates the custom event parameter, which is passed in the callback of[ArkUI_NodeCustomEvent](capi-arkui-nativemodule-arkui-nodecustomevent.md) when the event is triggered. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>             Returns [ARKUI_ERROR_CODE_ATTRIBUTE_OR_EVENT_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the dynamic implementation library<br>             of the native API was not found. |

### unregisterNodeCustomEvent()

```c
void (*unregisterNodeCustomEvent)(ArkUI_NodeHandle node, ArkUI_NodeCustomEventType eventType)
```

**Description**

Unregisters a custom event for a node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  ArkUI_NodeCustomEventType eventType | Indicates the type of event to unregister. |

### registerNodeCustomEventReceiver()

```c
void (*registerNodeCustomEventReceiver)(void (*eventReceiver)(ArkUI_NodeCustomEvent* event))
```

**Description**

Registers a unified entry point function for custom node event callbacks.The ArkUI framework collects custom component events generated during the process and calls back the eventsthrough the registered <b>registerNodeCustomEventReceiver</b>. <br> A new call to this API will overwrite the previously registered event receiver.Do not directly save the <b>ArkUI_NodeCustomEvent</b> object pointer.The data will be destroyed after the callback is complete. <br> To bind with a component instance, you can use the <b>addNodeCustomEventReceiver</b> function. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| eventReceiver | Indicates the event receiver to register. |

### unregisterNodeCustomEventReceiver()

```c
void (*unregisterNodeCustomEventReceiver)()
```

**Description**

Unregisters the unified entry point function for custom node event callbacks.

**Since**: 12

### setMeasuredSize()

```c
int32_t (*setMeasuredSize)(ArkUI_NodeHandle node, int32_t width, int32_t height)
```

**Description**

Sets the width and height for a component after the measurement.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  int32_t width | Indicates the width. |
|  int32_t height | Indicates the height. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### setLayoutPosition()

```c
int32_t (*setLayoutPosition)(ArkUI_NodeHandle node, int32_t positionX, int32_t positionY)
```

**Description**

Sets the position for a component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  int32_t positionX | Indicates the X coordinate. |
|  int32_t positionY | Indicates the Y coordinate. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### getMeasuredSize()

```c
ArkUI_IntSize (*getMeasuredSize)(ArkUI_NodeHandle node)
```

**Description**

Obtains the width and height of a component after measurement.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_IntSize](capi-arkui-nativemodule-arkui-intsize.md) | Returns the width and height of the component. |

### getLayoutPosition()

```c
ArkUI_IntOffset (*getLayoutPosition)(ArkUI_NodeHandle node)
```

**Description**

Obtains the position of a component after the layout is complete.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_IntOffset](capi-arkui-nativemodule-arkui-intoffset.md) | Returns the position of the component. |

### measureNode()

```c
int32_t (*measureNode)(ArkUI_NodeHandle node, ArkUI_LayoutConstraint* Constraint)
```

**Description**

Measures a node. You can use the <b>getMeasuredSize</b> API to obtain the size after the measurement.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  [ArkUI_LayoutConstraint](capi-arkui-nativemodule-arkui-layoutconstraint.md)* Constraint | Indicates the size constraint. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### layoutNode()

```c
int32_t (*layoutNode)(ArkUI_NodeHandle node, int32_t positionX, int32_t positionY)
```

**Description**

Lays outs a component and passes the expected position of the component relative to its parent component.When the component is being displayed, this API must be called in the main thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target node. |
|  int32_t positionX | Indicates the X coordinate. |
|  int32_t positionY | Indicates the Y coordinate. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### addNodeEventReceiver()

```c
int32_t (*addNodeEventReceiver)(ArkUI_NodeHandle node, void (*eventReceiver)(ArkUI_NodeEvent* event))
```

**Description**

Adds a component event callback function to a component to receive component events generatedby the component.Unlike the global registration function <b>registerNodeEventReceiver</b>, this API allows multiple eventreceivers to be added to the same component. <br> The callback added by this API is triggered before the global callback registered by<b>registerNodeEventReceiver</b>. <br> Do not directly save the <b>ArkUI_NodeEvent</b> object pointer.The data will be destroyed after the callback is complete. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the component for which you want to add the event callback function. |
| eventReceiver | Indicates the component event callback function to add. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### removeNodeEventReceiver()

```c
int32_t (*removeNodeEventReceiver)(ArkUI_NodeHandle node, void (*eventReceiver)(ArkUI_NodeEvent* event))
```

**Description**

Removes the registered component event callback function from a component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the component from which you want to remove the event callback function. |
| eventReceiver | Indicates the component event callback function to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### addNodeCustomEventReceiver()

```c
int32_t (*addNodeCustomEventReceiver)(ArkUI_NodeHandle node, void (*eventReceiver)(ArkUI_NodeCustomEvent* event))
```

**Description**

Adds a custom event callback function to a component to receive custom events(such as layout and drawing events) generated by the component.Unlike the global registration function <b>registerNodeCustomEventReceiver</b>, this API allowsmultiple event receivers to be added to the same component. <br> The callback added by this API is triggered before the global callback registered by<b>registerNodeCustomEventReceiver</b>. <br> Do not directly save the <b>ArkUI_NodeCustomEvent</b> object pointer.The data will be destroyed after the callback is complete. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the component for which you want to add the custom event callback function. |
| eventReceiver | Indicates the custom event callback function to add. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### removeNodeCustomEventReceiver()

```c
int32_t (*removeNodeCustomEventReceiver)(ArkUI_NodeHandle node,void (*eventReceiver)(ArkUI_NodeCustomEvent* event))
```

**Description**

Removes a registered custom event callback function from a component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the component from which you want to remove the custom event callback function. |
| eventReceiver | Indicates the custom event callback function to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### setUserData()

```c
int32_t (*setUserData)(ArkUI_NodeHandle node, void* userData)
```

**Description**

Saves custom data on the specified component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the component on which the custom data will be saved. |
|  void* userData | Indicates the custom data to be saved. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### getUserData()

```c
void* (*getUserData)(ArkUI_NodeHandle node)
```

**Description**

Obtains the custom data saved on the specified component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the target component. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | Returns the custom data. |

### setLengthMetricUnit()

```c
int32_t (*setLengthMetricUnit)(ArkUI_NodeHandle node, ArkUI_LengthMetricUnit unit)
```

**Description**

Sets the unit for a component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the component for which you want to set the unit. |
|  [ArkUI_LengthMetricUnit](capi-native-type-h.md#arkui_lengthmetricunit) unit | Indicates the unit, which is an enumerated value of [ArkUI_LengthMetricUnit](capi-native-type-h.md#arkui_lengthmetricunit).The default value is <b>ARKUI_LENGTH_METRIC_UNIT_DEFAULT</b>. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>             Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### getParent()

```c
ArkUI_NodeHandle (*getParent)(ArkUI_NodeHandle node)
```

**Description**

Get the parent node.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | target node object. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Returns the pointer of the component, if not return NULL |

### removeAllChildren()

```c
int32_t (*removeAllChildren)(ArkUI_NodeHandle parent)
```

**Description**

Uninstall all child nodes from the parent component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) parent | target node object. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the error code.<br>            Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>            Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |


