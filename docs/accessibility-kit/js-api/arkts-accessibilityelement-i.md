# AccessibilityElement

Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()](arkts-accessibilityextensioncontext-c.md#getFocusElement) or [AccessibilityExtensionContext.getWindowRootElement()](arkts-accessibilityextensioncontext-c.md#getWindowRootElement) to obtain an **AccessibilityElement** instance.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## actionNames

```TypeScript
actionNames(callback: AsyncCallback<Array<string>>): void
```

Obtains the names of all actions supported by this element. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | Callback used to return the names of all actions supported by  the element. |

## actionNames

```TypeScript
actionNames(): Promise<Array<string>>
```

Obtains the names of all actions supported by this element. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the names of all actions supported by the element. |

## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void
```

Obtains all attribute names of this element. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;T>> | Yes | Callback used to return all attribute names of the element. |

## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>
```

Obtains all attribute names of this element. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T>> | Promise used to return all attribute names of the element. |

## attributeValue

```TypeScript
attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void
```

Obtains the attribute value based on an attribute name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attributeName | T | Yes | Attribute name. |
| callback | AsyncCallback&lt;ElementAttributeValues[T]> | Yes | Callback used to return the attribute value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300004 | This property does not exist. |

## attributeValue

```TypeScript
attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>
```

Obtains the attribute value based on an attribute name. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attributeName | T | Yes | Attribute name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ElementAttributeValues[T]> | Promise used to return the attribute value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300004 | This property does not exist. |

## enableScreenCurtain

```TypeScript
enableScreenCurtain(isEnable: boolean): void
```

Enables or disables the screen curtain.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnable | boolean | Yes | The value true indicates enabled; false indicates disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## executeAction

```TypeScript
executeAction(action: AccessibilityAction, parameters?: Parameter): Promise<void>
```

Executes a specific action based on the specified action type and input parameters. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| action | AccessibilityAction | Yes | Executable action for the accessibility node. |
| parameters | Parameter | No | Parameters set for the action. This parameter is left empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300005 | This action is not supported. |

## findElement

```TypeScript
findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void
```

Finds an element based on the content type. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'content' | Yes | Type of element finding. The value is fixed at 'content'. |
| condition | string | Yes | Search criteria. |
| callback | AsyncCallback&lt;Array&lt;AccessibilityElement>> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>
```

Finds an element based on the content type. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'content' | Yes | Type of element finding. The value is fixed at 'content'. |
| condition | string | Yes | Search criteria. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus type. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusType' | Yes | Type of element finding. The value is fixed at 'focusType'. |
| condition | FocusType | Yes | Focus type. |
| callback | AsyncCallback&lt;AccessibilityElement> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>
```

Finds an element based on the focus type. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusType' | Yes | Type of element finding. The value is fixed at 'focusType'. |
| condition | FocusType | Yes | Focus type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus direction. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusDirection' | Yes | Type of element finding. The value is fixed at 'focusDirection'. |
| condition | FocusDirection | Yes | Direction of the next focus element. |
| callback | AsyncCallback&lt;AccessibilityElement> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>
```

Finds an element based on the focus direction. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusDirection' | Yes | Type of element finding. The value is fixed at 'focusDirection'. |
| condition | FocusDirection | Yes | Focus direction. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'textType', condition: string): Promise<Array<AccessibilityElement>>
```

Finds all node elements based on the **accessibilityTextHint** text type configured for a node. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textType' | Yes | Type of element finding. The value is fixed at 'textType'. |
| condition | string | Yes | Search criteria. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'elementId', condition: long): Promise<AccessibilityElement>
```

Finds the node element of the current active window based on the element ID. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'elementId' | Yes | Type of element finding. The value is fixed at 'elementId'. |
| condition | long | Yes | elementId of the node element. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElementByContent

```TypeScript
findElementByContent(condition: string): Promise<Array<AccessibilityElement>>
```

Finds elements based on the content. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | Content. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByElementId

```TypeScript
findElementByElementId(condition: long): Promise<AccessibilityElement>
```

Find elements that match the condition.

**Since:** 23

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | long | Yes | Indicates the specific content to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementByFocusDirection

```TypeScript
findElementByFocusDirection(condition: FocusDirection): Promise<AccessibilityElement>
```

Finds elements based on the focus direction. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | FocusDirection | Yes | Focus direction. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByFocusDirection

```TypeScript
findElementByFocusDirection(condition: FocusDirection, type: FocusRuleType): Promise<AccessibilityElement>
```

Finds elements based on the focus direction. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | FocusDirection | Yes | Focus direction. |
| type | FocusRuleType | Yes | Type for finding a focusable node. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementById

```TypeScript
findElementById(condition: long): Promise<AccessibilityElement>
```

Finds elements based on element ID. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | long | Yes | Element ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByTextType

```TypeScript
findElementByTextType(condition: string): Promise<Array<AccessibilityElement>>
```

Find elements that match the condition.

**Since:** 23

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | Indicates the specific content to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementsByAccessibilityHintText

```TypeScript
findElementsByAccessibilityHintText(condition: string): Promise<Array<AccessibilityElement>>
```

Finds elements based on the hint text. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | Hint text. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementsByCondition

```TypeScript
findElementsByCondition(rule: FocusRule, condition: FocusCondition): Promise<FocusMoveResult>
```

Finds a focusable node by conditions. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | FocusRule | Yes | Rule for checking the current node and its descendants. |
| condition | FocusCondition | Yes | Condition for finding a focusable node. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FocusMoveResult> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementsByCondition

```TypeScript
findElementsByCondition(rule: FocusRule, condition: FocusCondition, type: FocusRuleType): Promise<FocusMoveResult>
```

Finds a focusable node by conditions. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | FocusRule | Yes | Rule for checking the current node and its descendants. |
| condition | FocusCondition | Yes | Condition for finding a focusable node. |
| type | FocusRuleType | Yes | Type for finding a focusable node. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FocusMoveResult> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getChildren

```TypeScript
getChildren(): Promise<Array<AccessibilityElement>>
```

Obtains the child elements of an element. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getCursorPosition

```TypeScript
getCursorPosition(callback: AsyncCallback<int>): void
```

Obtains the cursor position in the **Text** component. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | Callback function used to return the result. |

## getCursorPosition

```TypeScript
getCursorPosition(): Promise<int>
```

Obtains the cursor position in the **Text** component. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the result. |

## getParent

```TypeScript
getParent(): Promise<AccessibilityElement>
```

Obtains the parent element of an accessibility node. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getRoot

```TypeScript
getRoot(): Promise<AccessibilityElement>
```

Obtains the root element of an active window. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## performAction

```TypeScript
performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| parameters | object | Yes | Parameters required for performing the target action. Empty by default. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## performAction

```TypeScript
performAction(actionName: string, parameters?: object): Promise<void>
```

Performs an action based on the specified action name. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| parameters | object | No | Parameters required for performing the target action. Empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## performAction

```TypeScript
performAction(actionName: string, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## accessibilityFocused

```TypeScript
accessibilityFocused?: boolean
```

Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused , and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## lastContent

```TypeScript
lastContent?: string
```

Last item.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## clickable

```TypeScript
clickable?: boolean
```

Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## textMoveUnit

```TypeScript
textMoveUnit?: accessibility.TextMoveUnit
```

Movement unit for traversing and reading text. Default value: **char**.

**Type:** accessibility.TextMoveUnit

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## hotArea

```TypeScript
hotArea?: Rect
```

Hot area of an element.

**Type:** Rect

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityVisible

```TypeScript
accessibilityVisible?: boolean
```

Whether the component is visible for accessibility purposes. The value **true** indicates that the component is visible, and **false** indicates the opposite.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Accessibility level of a component. **auto**: The accessibility grouping service and ArkUI jointly determine whether the current component can be identified by accessibility services. **yes**: The component can be identified by accessibility services. **no**: The component cannot be identified by accessibility services. **no-hide-descendants**: The current component and all its child components cannot be identified by accessibility services.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## type

```TypeScript
type?: WindowType
```

Window type of an element.

**Type:** WindowType

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isActive

```TypeScript
isActive?: boolean
```

Whether the element is active. The value **true** indicates that the element is active, and **false** indicates the opposite. Default value: **true**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## currentIndex

```TypeScript
currentIndex?: int
```

Index of the current item. Default value: **0**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isEnable

```TypeScript
isEnable?: boolean
```

Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## startIndex

```TypeScript
startIndex?: int
```

Index of the first item on the screen. Default value: **0**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## navDestinationId

```TypeScript
navDestinationId?: long
```

Destination ID of a component for navigation.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## endIndex

```TypeScript
endIndex?: int
```

Index of the last list item displayed on the screen. Default value: **0**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## checked

```TypeScript
checked?: boolean
```

Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## inputType

```TypeScript
inputType?: int
```

Type of the input text. Default value: **0**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## text

```TypeScript
text?: string
```

Text content of an element.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId?: long
```

ID of the next component to obtain the focus. Default value: **-1**.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## selected

```TypeScript
selected?: boolean
```

Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## offset

```TypeScript
offset?: double
```

Pixel offset of the content area relative to the top coordinate of a scrollable component (such as List and Grid). The unit is pixel (px). Default value: **0**.

**Type:** double

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isPassword

```TypeScript
isPassword?: boolean
```

Whether the element is a password. The value **true** indicates that the element is a password, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## checkable

```TypeScript
checkable?: boolean
```

Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## customActions

```TypeScript
customActions?: Array<string>
```

Indicates the custom actions supported by the component.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## childrenIds

```TypeScript
childrenIds?: Array<long>
```

List of child element IDs of a component.

**Type:** Array<long>

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## childrenTreeId

```TypeScript
childrenTreeId?: int
```

Child component tree ID of the element. The default value is **-1**.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isEssential

```TypeScript
isEssential?: boolean
```

Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the value **false** indicates that the element is not mandatory. The default value is **false**.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## textType

```TypeScript
textType?: string
```

Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the component.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## resourceName

```TypeScript
resourceName?: string
```

Resource name of the element.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## focusable

```TypeScript
focusable?: boolean
```

Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isVisible

```TypeScript
isVisible?: boolean
```

Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## pageId

```TypeScript
pageId?: int
```

Page ID. Default value: **-1**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isFocused

```TypeScript
isFocused?: boolean
```

Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## windowId

```TypeScript
windowId?: int
```

Window ID. Default value: **-1**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## longClickable

```TypeScript
longClickable?: boolean
```

Whether the element can be long-pressed. The value **true** indicates that the element can be long-pressed, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## supportedActionNames

```TypeScript
supportedActionNames?: Array<string>
```

Supported action names.

**Type:** Array<string>

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## sourceType

```TypeScript
sourceType?: AccessibilitySourceType
```

Indicates the source of this element.

**Type:** AccessibilitySourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## mainWindowId

```TypeScript
mainWindowId?: int
```

Main window ID of a component.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## contents

```TypeScript
contents?: Array<string>
```

Content displayed in the element.

**Type:** Array<string>

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## customComponentType

```TypeScript
customComponentType?: string
```

Custom component type.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName?: string
```

Bundle name.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## extraInfo

```TypeScript
extraInfo?: string
```

Additional information about an element. The value is a JSON string.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## triggerAction

```TypeScript
triggerAction?: AccessibilityAction
```

Action that triggers the element event.

**Type:** AccessibilityAction

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## valueMax

```TypeScript
valueMax?: double
```

Maximum value. Default value: **0**.

**Type:** double

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## componentId

```TypeScript
componentId?: long
```

ID of the component to which the element belongs. Default value: **-1**.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## description

```TypeScript
description?: string
```

Description of the element.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## error

```TypeScript
error?: string
```

Error status of the element.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityGroup

```TypeScript
accessibilityGroup?: boolean
```

Whether the element is an accessibility group. The value **true** indicates that the element is an accessibility group, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## layer

```TypeScript
layer?: int
```

Display layer of the element.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## pluralLineSupported

```TypeScript
pluralLineSupported?: boolean
```

Whether the element supports multiple lines of text. The value **true** indicates that the element supports multiple lines of text, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## rect

```TypeScript
rect?: Rect
```

Rectangular area for the element.

**Type:** Rect

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## valueMin

```TypeScript
valueMin?: double
```

Minimum value. Default value: **0**.

**Type:** double

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## valueNow

```TypeScript
valueNow?: double
```

Current value. Default value: **0**.

**Type:** double

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityStateDescription

```TypeScript
accessibilityStateDescription?: string
```

Custom accessibility state broadcast text of an element.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## inspectorKey

```TypeScript
inspectorKey?: string
```

Inspector key.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityScrollable

```TypeScript
accessibilityScrollable?: boolean
```

Whether the element can be scrolled for accessibility purposes. This attribute has a higher priority than **scrollable**. The value **true** indicates that the element is scrollable, and **false** indicates the opposite. Default value: **true**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## scrollable

```TypeScript
scrollable?: boolean
```

Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## spans

```TypeScript
spans?: AccessibilitySpan[]
```

Span array of a component.

**Type:** AccessibilitySpan[]

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityPreviousFocusId

```TypeScript
accessibilityPreviousFocusId?: long
```

ID of the previous component to obtain the focus. Default value: **-1**.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## componentType

```TypeScript
componentType?: string
```

Type of the component to which the element belongs.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## editable

```TypeScript
editable?: boolean
```

Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## textLengthLimit

```TypeScript
textLengthLimit?: int
```

Maximum text length of an element.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## belongTreeId

```TypeScript
belongTreeId?: int
```

Component tree ID that the element belongs to. The default value is **-1**.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## accessibilityText

```TypeScript
accessibilityText?: string
```

Accessibility text information of an element.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## parentId

```TypeScript
parentId?: long
```

Parent element ID of a component.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## screenRect

```TypeScript
screenRect?: Rect
```

Rectangular area for the element to display.

**Type:** Rect

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## itemCount

```TypeScript
itemCount?: int
```

Total number of items. Default value: **0**.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## isHint

```TypeScript
isHint?: boolean
```

Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the opposite. Default value: **false**.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## hintText

```TypeScript
hintText?: string
```

Hint text.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## currentItem

```TypeScript
currentItem?: AccessibilityGrid
```

Current item in the component grid.

**Type:** AccessibilityGrid

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## clip

```TypeScript
clip?: boolean
```

Whether the component needs to be clipped. The value **true** indicates that the component needs to be clipped, and **false** indicates the opposite.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

