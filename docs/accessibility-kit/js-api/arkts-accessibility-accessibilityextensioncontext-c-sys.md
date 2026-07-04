# AccessibilityExtensionContext

The accessibility extension context. Used to configure, query information, and inject gestures.

**Inheritance/Implementation:** AccessibilityExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md#extensioncontext)

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## addAccessibilityVirtualNodes

```TypeScript
addAccessibilityVirtualNodes(elementId: number, windowId: number, nodes: Array<AccessibilityVirtualNode>): Promise<OperateVirtualNodeResult>
```

Add accessibility virtual nodes.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementId | number | Yes | Indicates the id of the node to which the accessibility virtual node tree belongs |
| windowId | number | Yes | Indicates the window id<br>The value range is all integers. |
| nodes | Array&lt;AccessibilityVirtualNode&gt; | Yes | Indicates accessibility virtual node tree. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult&gt; | Promise used to return the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality.Possible causes:<br>1.Internal operation failed.<br>2.Failed to obtain the required service or client object (null pointer).<br>3.IPC communication failed.<br>4.Failed to obtain the accessibility service proxy.<br>5.Timed out while waiting for the result of an asynchronous operation. |

## getAccessibilityFocusedElement

```TypeScript
getAccessibilityFocusedElement(): Promise<AccessibilityElement>
```

Obtains the element that is currently focused. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300003](../errorcode-accessibility.md#9300003-no-accessibility-permission-to-perform-the-operation) | No accessibility permission to perform the operation. |
| [9300006](../errorcode-accessibility.md#9300006-failed-to-connect-the-target-application-and-accessibility-services) | The target application failed to connect to accessibility service. |

## getAccessibilityWindowsSync

```TypeScript
getAccessibilityWindowsSync(displayId?: number): Array<AccessibilityElement>
```

Obtains the accessibility windows.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | No | Indicates the display ID. If this parameter is not provided, indicates the default |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AccessibilityElement&gt; | List of windows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300003](../errorcode-accessibility.md#9300003-no-accessibility-permission-to-perform-the-operation) | No accessibility permission to perform the operation. |

## getDefaultFocusedElementIds

```TypeScript
getDefaultFocusedElementIds(windowId: number): Promise<Array<number>>
```

Obtains the custom default focuses of an application. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | number | Yes | Window ID to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300003](../errorcode-accessibility.md#9300003-no-accessibility-permission-to-perform-the-operation) | No accessibility permission to perform the operation. |

## getElements

```TypeScript
getElements(windowId: number, elementId?: number): Promise<Array<AccessibilityElement>>
```

Obtains node elements in batches. This API uses a promise to return the result.

**Since:** 18

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | number | Yes | Window ID to be obtained. |
| elementId | number | No | Element ID to be obtained. If this parameter is passed in, the list of all child nodesunder the current node is obtained. Otherwise, all nodes in the window are obtained. The default value is**-1**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement&gt;&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300003](../errorcode-accessibility.md#9300003-no-accessibility-permission-to-perform-the-operation) | No accessibility permission to perform the operation. |

## getRootInActiveWindow

```TypeScript
getRootInActiveWindow(windowId?: number): Promise<AccessibilityElement>
```

Obtains the root element of an active window. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | number | No | Indicates the window ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300003](../errorcode-accessibility.md#9300003-no-accessibility-permission-to-perform-the-operation) | No accessibility permission to perform the operation. |
| [9300006](../errorcode-accessibility.md#9300006-failed-to-connect-the-target-application-and-accessibility-services) | The target application failed to connect to accessibility service. |

## holdRunningLockSync

```TypeScript
holdRunningLockSync(): void
```

Holds the running lock. After the lock is held, the screen will not turn off automatically.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## notifyDisconnect

```TypeScript
notifyDisconnect(): void
```

Notifies the accessibility service that the accessibility extension service can be disconnected. This API must be used together with the [on('preDisconnect')](arkts-accessibility-accessibilityextensioncontext-c-sys.md#on-1) API. If the **on('preDisconnect')** API is not called, this API does not take effect.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## off('preDisconnect')

```TypeScript
off(type: 'preDisconnect', callback?: Callback<void>): void
```

Unsubscribes from the pre-disconnection event of the accessibility extension service. This API is not called until the accessibility extension service is disconnected. This API uses an asynchronous callback to return the result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preDisconnect' | Yes | Name of the event to listen for. The value is fixed at **'preDisconnect'**,indicating that the accessibility extension service is about to be disconnected. |
| callback | Callback&lt;void&gt; | No | Callback to unregister, which must be the same as that of[on('preDisconnect')](arkts-accessibility-accessibilityextensioncontext-c-sys.md#on-1).If this parameter is not specified, listening will be disabled for all callbacks corresponding to the specifiedtype. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## on('preDisconnect')

```TypeScript
on(type: 'preDisconnect', callback: Callback<void>): void
```

Subscribes to the pre-disconnection event of the accessibility extension service. This API is called when the accessibility extension service is about to be disconnected. This API uses an asynchronous callback to return the result. Used together with [notifyDisconnect](arkts-accessibility-accessibilityextensioncontext-c-sys.md#notifydisconnect-1); otherwise, the accessibility extension service is automatically disconnected 30 seconds later by default.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'preDisconnect' | Yes | Name of the event to listen for. The value is fixed at **'preDisconnect'**,indicating that the accessibility extension service is about to be disconnected. |
| callback | Callback&lt;void&gt; | Yes | Callback to be invoked when the accessibility extension service is about to bedisconnected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## removeAccessibilityVirtualNodes

```TypeScript
removeAccessibilityVirtualNodes(elementId: number, windowId: number): Promise<OperateVirtualNodeResult>
```

Remove accessibility virtual nodes.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementId | number | Yes | Indicates the id of the accessibility element to be removed. |
| windowId | number | Yes | Indicates the window id.<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult&gt; | Promise used to return the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality.Possible causes:<br>1.Internal operation failed.<br>2.Failed to obtain the required service or client object (null pointer).<br>3.IPC communication failed.<br>4.Failed to obtain the accessibility service proxy.<br>5.Timed out while waiting for the result of an asynchronous operation. |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts the foreground page. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information about the target ability, such as the ability name and bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

## unholdRunningLockSync

```TypeScript
unholdRunningLockSync(): void
```

Releases the running lock. After the lock is released, the screen will automatically turn off.

**Since:** 20

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

## updateAccessibilityElementProperty

```TypeScript
updateAccessibilityElementProperty(elementId: number, windowId: number, node: AccessibilityVirtualNode): Promise<OperateVirtualNodeResult>
```

Update accessibility element property.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementId | number | Yes | Indicates the id of the accessibility element to be updated |
| windowId | number | Yes | Indicates the window id<br>The value range is all integers. |
| node | AccessibilityVirtualNode | Yes | Indicates accessibility virtual node to be updated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperateVirtualNodeResult&gt; | Promise used to return the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality.Possible causes:<br>1.Internal operation failed.<br>2.Failed to obtain the required service or client object (null pointer).<br>3.IPC communication failed.<br>4.Failed to obtain the accessibility service proxy.<br>5.Timed out while waiting for the result of an asynchronous operation. |

