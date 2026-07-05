# AccessibilityExtensionContext

The accessibility extension context. Used to configure, query information, and inject gestures.

**继承实现关系：** AccessibilityExtensionContext继承自：ExtensionContext。

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## addAccessibilityVirtualNodes

```TypeScript
addAccessibilityVirtualNodes(elementId: long, windowId: int, nodes: Array<AccessibilityVirtualNode>): Promise<OperateVirtualNodeResult>
```

Add accessibility virtual nodes.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementId | long | 是 | Indicates the id of the node to which the accessibility virtual node tree belongs |
| windowId | int | 是 | Indicates the window id  The value range is all integers. |
| nodes | Array&lt;AccessibilityVirtualNode> | 是 | Indicates accessibility virtual node tree. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult> | Promise used to return the result code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300000 | System abnormality.Possible causes:  1.Internal operation failed.  2.Failed to obtain the required service or client object (null pointer).  3.IPC communication failed.  4.Failed to obtain the accessibility service proxy.  5.Timed out while waiting for the result of an asynchronous operation. |

## getAccessibilityFocusedElement

```TypeScript
getAccessibilityFocusedElement(): Promise<AccessibilityElement>
```

Obtains the element that is currently focused. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300003 | No accessibility permission to perform the operation. |
| 9300006 | The target application failed to connect to accessibility service. |

## getAccessibilityWindowsSync

```TypeScript
getAccessibilityWindowsSync(displayId?: long): Array<AccessibilityElement>
```

Obtains the accessibility windows.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 否 | Indicates the display ID. If this parameter is not provided, indicates the default  displayId. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;AccessibilityElement> | List of windows. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300003 | No accessibility permission to perform the operation. |

## getDefaultFocusedElementIds

```TypeScript
getDefaultFocusedElementIds(windowId: int): Promise<Array<long>>
```

Obtains the custom default focuses of an application. This API uses a promise to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | Window ID to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;long>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getElements

```TypeScript
getElements(windowId: int, elementId?: long): Promise<Array<AccessibilityElement>>
```

Obtains node elements in batches. This API uses a promise to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | Window ID to be obtained. |
| elementId | long | 否 | Element ID to be obtained. If this parameter is passed in, the list of all child nodes  under the current node is obtained. Otherwise, all nodes in the window are obtained. The default value is  -1. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getFocusElement

```TypeScript
getFocusElement(isAccessibilityFocus: boolean, callback: AsyncCallback<AccessibilityElement>): void
```

Obtains the focus element. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAccessibilityFocus | boolean | 是 | Whether the obtained focus element is an accessibility focus. The value  True means that the obtained focus element is an accessibility focus, and False means the opposite. |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the current focus element. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getFocusElement

```TypeScript
getFocusElement(isAccessibilityFocus?: boolean): Promise<AccessibilityElement>
```

Obtains the focus element. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAccessibilityFocus | boolean | 否 | Whether the obtained element is an accessibility focus. The value  true indicates that the element is an accessibility focus, and false indicates the opposite. Default  value: false. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the current focus element. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getFocusElement

```TypeScript
getFocusElement(callback: AsyncCallback<AccessibilityElement>): void
```

Obtains the focus element. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the current focus element. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getRootInActiveWindow

```TypeScript
getRootInActiveWindow(windowId?: int): Promise<AccessibilityElement>
```

Obtains the root element of an active window. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 否 | Indicates the window ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300003 | No accessibility permission to perform the operation. |
| 9300006 | The target application failed to connect to accessibility service. |

## getWindowRootElement

```TypeScript
getWindowRootElement(windowId: int, callback: AsyncCallback<AccessibilityElement>): void
```

Obtains the root element of a window. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | ID of the window whose root element is to be obtained. If this parameter is not specified  , it indicates the current active window. |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the root element. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getWindowRootElement

```TypeScript
getWindowRootElement(windowId?: int): Promise<AccessibilityElement>
```

Obtains the root element of a window. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 否 | ID of the window whose root element is to be obtained. If this parameter is not specified  , it indicates the current active window. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the root element of the specified window. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getWindowRootElement

```TypeScript
getWindowRootElement(callback: AsyncCallback<AccessibilityElement>): void
```

Obtains the root element of a window. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the root element. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getWindows

```TypeScript
getWindows(displayId: long, callback: AsyncCallback<Array<AccessibilityElement>>): void
```

Obtains the list of windows on a display. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 是 | ID of the display from which the window information is obtained. If this parameter is  not specified, it indicates the default main display. |
| callback | AsyncCallback&lt;Array&lt;AccessibilityElement>> | 是 | Callback used to return the window list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getWindows

```TypeScript
getWindows(displayId?: long): Promise<Array<AccessibilityElement>>
```

Obtains the list of windows on a display. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 否 | ID of the display from which the window information is obtained. If this parameter is  not specified, it indicates the default main display. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the window list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## getWindows

```TypeScript
getWindows(callback: AsyncCallback<Array<AccessibilityElement>>): void
```

Obtains the list of windows on a display. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AccessibilityElement>> | 是 | Callback used to return the window list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## holdRunningLockSync

```TypeScript
holdRunningLockSync(): void
```

Holds the running lock. After the lock is held, the screen will not turn off automatically.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## injectGesture

```TypeScript
injectGesture(gesturePath: GesturePath, callback: AsyncCallback<void>): void
```

Injects a gesture. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** AccessibilityExtensionContext.injectGestureSync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesturePath | GesturePath | 是 | Path of the gesture to inject. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## injectGesture

```TypeScript
injectGesture(gesturePath: GesturePath): Promise<void>
```

Injects a gesture. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** AccessibilityExtensionContext.injectGestureSync

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesturePath | GesturePath | 是 | Path of the gesture to inject. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## injectGestureSync

```TypeScript
injectGestureSync(gesturePath: GesturePath): void
```

Injects a gesture.

**起始版本：** 10

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesturePath | GesturePath | 是 | Path of the gesture to inject. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## notifyDisconnect

```TypeScript
notifyDisconnect(): void
```

Notifies the accessibility service that the accessibility extension service can be disconnected. This API must be used together with the [on('preDisconnect')](arkts-accessibilityextensioncontext-c.md#on) API. If the **on('preDisconnect')** API is not called, this API does not take effect.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## off('preDisconnect')

```TypeScript
off(type: 'preDisconnect', callback?: Callback<void>): void
```

Unsubscribes from the pre-disconnection event of the accessibility extension service. This API is not called until the accessibility extension service is disconnected. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preDisconnect' | 是 | Name of the event to listen for. The value is fixed at 'preDisconnect',  indicating that the accessibility extension service is about to be disconnected. |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## offPreDisconnect

```TypeScript
offPreDisconnect(callback?: Callback<void>): void
```

Unregister accessibilityExtensionAbility disconnect callback.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## on('preDisconnect')

```TypeScript
on(type: 'preDisconnect', callback: Callback<void>): void
```

Subscribes to the pre-disconnection event of the accessibility extension service. This API is called when the accessibility extension service is about to be disconnected. This API uses an asynchronous callback to return the result. Used together with [notifyDisconnect](arkts-accessibilityextensioncontext-c.md#notifyDisconnect); otherwise, the accessibility extension service is automatically disconnected 30 seconds later by default.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'preDisconnect' | 是 | Name of the event to listen for. The value is fixed at 'preDisconnect',  indicating that the accessibility extension service is about to be disconnected. |
| callback | Callback&lt;void> | 是 | Callback to be invoked when the accessibility extension service is about to be  disconnected. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## onPreDisconnect

```TypeScript
onPreDisconnect(callback: Callback<void>): void
```

Register accessibilityExtensionAbility disconnect callback.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | Indicates the callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## removeAccessibilityVirtualNodes

```TypeScript
removeAccessibilityVirtualNodes(elementId: long, windowId: int): Promise<OperateVirtualNodeResult>
```

Remove accessibility virtual nodes.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementId | long | 是 | Indicates the id of the accessibility element to be removed. |
| windowId | int | 是 | Indicates the window id.  The value range is all integers. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult> | Promise used to return the result code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300000 | System abnormality.Possible causes:  1.Internal operation failed.  2.Failed to obtain the required service or client object (null pointer).  3.IPC communication failed.  4.Failed to obtain the accessibility service proxy.  5.Timed out while waiting for the result of an asynchronous operation. |

## setTargetBundleName

```TypeScript
setTargetBundleName(targetNames: Array<string>, callback: AsyncCallback<void>): void
```

Sets the concerned target bundle. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetNames | Array&lt;string> | 是 | Bundle name of the concerned target application. The service receives  accessibility events of the concerned application. By default, accessibility events of all applications are  received. Pass in an empty array if there is no concerned application. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation fails, err that  contains data is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## setTargetBundleName

```TypeScript
setTargetBundleName(targetNames: Array<string>): Promise<void>
```

Sets the concerned target bundle. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetNames | Array&lt;string> | 是 | Bundle name of the concerned target application. The service receives  accessibility events of the concerned application. By default, accessibility events of all applications are  received. Pass in an empty array if there is no concerned application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts the foreground page. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information about the target ability, such as the ability name and bundle name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## unholdRunningLockSync

```TypeScript
unholdRunningLockSync(): void
```

Releases the running lock. After the lock is released, the screen will automatically turn off.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## updateAccessibilityElementProperty

```TypeScript
updateAccessibilityElementProperty(elementId: long, windowId: int, node: AccessibilityVirtualNode): Promise<OperateVirtualNodeResult>
```

Update accessibility element property.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementId | long | 是 | Indicates the id of the accessibility element to be updated |
| windowId | int | 是 | Indicates the window id  The value range is all integers. |
| node | AccessibilityVirtualNode | 是 | Indicates accessibility virtual node to be updated. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult> | Promise used to return the result code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300000 | System abnormality.Possible causes:  1.Internal operation failed.  2.Failed to obtain the required service or client object (null pointer).  3.IPC communication failed.  4.Failed to obtain the accessibility service proxy.  5.Timed out while waiting for the result of an asynchronous operation. |

