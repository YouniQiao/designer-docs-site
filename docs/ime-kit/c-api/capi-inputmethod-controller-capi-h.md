# inputmethod_controller_capi.h

## Overview

Provides the functions for using input method.

**Library**: libohinputmethod.so

**System capability**: SystemCapability.MiscServices.InputMethodFramework

**Since**: 12

**Related module**: [InputMethod](capi-inputmethod.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)](#oh_inputmethodcontroller_attach) | Attach application to the input method service. |
| [InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)](#oh_inputmethodcontroller_attachwithuicontext) | Attach application to the input method service. |
| [InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)](#oh_inputmethodcontroller_detach) | Detach application from the input method service. |

## Function description

### OH_InputMethodController_Attach()

```c
InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```

**Description**

Attach application to the input method service.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| InputMethod_TextEditorProxy *textEditorProxy | Represents a pointer to an [InputMethod_TextEditorProxy](capi-inputmethod-inputmethod-texteditorproxy.md) instance.The caller needs to manage the lifecycle of textEditorProxy.If the call succeeds, caller cannot release textEditorProxy until the next attach or detach call. |
| [InputMethod_AttachOptions](capi-inputmethod-inputmethod-attachoptions.md) *options | Represents a pointer to an [InputMethod_AttachOptions](capi-inputmethod-inputmethod-attachoptions.md) instance.The options when attaching input method. |
| [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) **inputMethodProxy | Represents a pointer to an [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) instance.Lifecycle is maintained until the next attach or detach call. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_PARAMCHECK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - parameter check failed.<br>     [IME_ERR_IMCLIENT](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method client error.<br>     [IME_ERR_IMMS](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method manager service error.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_InputMethodController_AttachWithUIContext()

```c
InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```

**Description**

Attach application to the input method service.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_ContextHandle context | UIContext pointer of the page where the attach will be performed. |
| InputMethod_TextEditorProxy *textEditorProxy | Represents a pointer to an [InputMethod_TextEditorProxy](capi-inputmethod-inputmethod-texteditorproxy.md) instance.The caller needs to manage the lifecycle of textEditorProxy.If the call succeeds, caller cannot release textEditorProxy until the next attach or detach call. |
| [InputMethod_AttachOptions](capi-inputmethod-inputmethod-attachoptions.md) *options | Represents a pointer to an [InputMethod_AttachOptions](capi-inputmethod-inputmethod-attachoptions.md) instance.The options when attaching input method. |
| [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) **inputMethodProxy | Represents a pointer to an [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) instance.Lifecycle is maintained until the next attach or detach call. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_PARAMCHECK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - parameter check failed.<br>     [IME_ERR_IMCLIENT](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method client error.<br>     [IME_ERR_IMMS](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method manager service error.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_InputMethodController_Detach()

```c
InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)
```

**Description**

Detach application from the input method service.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) *inputMethodProxy | Represents a pointer to an [InputMethod_InputMethodProxy](capi-inputmethod-inputmethod-inputmethodproxy.md) instance.The inputMethodProxy is obtained from [OH_InputMethodController_Attach](capi-inputmethod-controller-capi-h.md#oh_inputmethodcontroller_attach). |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_IMCLIENT](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method client error.<br>     [IME_ERR_IMMS](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - input method manager service error.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |


