# AccessibilityElement

Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()](arkts-accessibilityextensioncontext-c.md#getFocusElement) or [AccessibilityExtensionContext.getWindowRootElement()](arkts-accessibilityextensioncontext-c.md#getWindowRootElement) to obtain an **AccessibilityElement** instance.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## actionNames

```TypeScript
actionNames(callback: AsyncCallback<Array<string>>): void
```

Obtains the names of all actions supported by this element. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | 是 | Callback used to return the names of all actions supported by  the element. |

## actionNames

```TypeScript
actionNames(): Promise<Array<string>>
```

Obtains the names of all actions supported by this element. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the names of all actions supported by the element. |

## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void
```

Obtains all attribute names of this element. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;T>> | 是 | Callback used to return all attribute names of the element. |

## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>
```

Obtains all attribute names of this element. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
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

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attributeName | T | 是 | Attribute name. |
| callback | AsyncCallback&lt;ElementAttributeValues[T]> | 是 | Callback used to return the attribute value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300004 | This property does not exist. |

## attributeValue

```TypeScript
attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>
```

Obtains the attribute value based on an attribute name. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attributeName | T | 是 | Attribute name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ElementAttributeValues[T]> | Promise used to return the attribute value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300004 | This property does not exist. |

## enableScreenCurtain

```TypeScript
enableScreenCurtain(isEnable: boolean): void
```

Enables or disables the screen curtain.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnable | boolean | 是 | The value true indicates enabled; false indicates disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300003 | No accessibility permission to perform the operation. |

## executeAction

```TypeScript
executeAction(action: AccessibilityAction, parameters?: Parameter): Promise<void>
```

Executes a specific action based on the specified action type and input parameters. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | AccessibilityAction | 是 | Executable action for the accessibility node. |
| parameters | Parameter | 否 | Parameters set for the action. This parameter is left empty by default. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300005 | This action is not supported. |

## findElement

```TypeScript
findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void
```

Finds an element based on the content type. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'content' | 是 | Type of element finding. The value is fixed at 'content'. |
| condition | string | 是 | Search criteria. |
| callback | AsyncCallback&lt;Array&lt;AccessibilityElement>> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>
```

Finds an element based on the content type. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'content' | 是 | Type of element finding. The value is fixed at 'content'. |
| condition | string | 是 | Search criteria. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus type. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusType' | 是 | Type of element finding. The value is fixed at 'focusType'. |
| condition | FocusType | 是 | Focus type. |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>
```

Finds an element based on the focus type. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusType' | 是 | Type of element finding. The value is fixed at 'focusType'. |
| condition | FocusType | 是 | Focus type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus direction. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusDirection' | 是 | Type of element finding. The value is fixed at 'focusDirection'. |
| condition | FocusDirection | 是 | Direction of the next focus element. |
| callback | AsyncCallback&lt;AccessibilityElement> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>
```

Finds an element based on the focus direction. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusDirection' | 是 | Type of element finding. The value is fixed at 'focusDirection'. |
| condition | FocusDirection | 是 | Focus direction. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'textType', condition: string): Promise<Array<AccessibilityElement>>
```

Finds all node elements based on the **accessibilityTextHint** text type configured for a node. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'textType' | 是 | Type of element finding. The value is fixed at 'textType'. |
| condition | string | 是 | Search criteria. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElement

```TypeScript
findElement(type: 'elementId', condition: long): Promise<AccessibilityElement>
```

Finds the node element of the current active window based on the element ID. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'elementId' | 是 | Type of element finding. The value is fixed at 'elementId'. |
| condition | long | 是 | elementId of the node element. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## findElementByContent

```TypeScript
findElementByContent(condition: string): Promise<Array<AccessibilityElement>>
```

Finds elements based on the content. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | string | 是 | Content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByElementId

```TypeScript
findElementByElementId(condition: long): Promise<AccessibilityElement>
```

Find elements that match the condition.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | long | 是 | Indicates the specific content to be queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementByFocusDirection

```TypeScript
findElementByFocusDirection(condition: FocusDirection): Promise<AccessibilityElement>
```

Finds elements based on the focus direction. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | FocusDirection | 是 | Focus direction. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByFocusDirection

```TypeScript
findElementByFocusDirection(condition: FocusDirection, type: FocusRuleType): Promise<AccessibilityElement>
```

Finds elements based on the focus direction. This API uses a promise to return the result.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | FocusDirection | 是 | Focus direction. |
| type | FocusRuleType | 是 | Type for finding a focusable node. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementById

```TypeScript
findElementById(condition: long): Promise<AccessibilityElement>
```

Finds elements based on element ID. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | long | 是 | Element ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AccessibilityElement> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementByTextType

```TypeScript
findElementByTextType(condition: string): Promise<Array<AccessibilityElement>>
```

Find elements that match the condition.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | string | 是 | Indicates the specific content to be queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementsByAccessibilityHintText

```TypeScript
findElementsByAccessibilityHintText(condition: string): Promise<Array<AccessibilityElement>>
```

Finds elements based on the hint text. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | string | 是 | Hint text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300006 | The target application failed to connect to accessibility service. |

## findElementsByCondition

```TypeScript
findElementsByCondition(rule: FocusRule, condition: FocusCondition): Promise<FocusMoveResult>
```

Finds a focusable node by conditions. This API uses a promise to return the result.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | FocusRule | 是 | Rule for checking the current node and its descendants. |
| condition | FocusCondition | 是 | Condition for finding a focusable node. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FocusMoveResult> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## findElementsByCondition

```TypeScript
findElementsByCondition(rule: FocusRule, condition: FocusCondition, type: FocusRuleType): Promise<FocusMoveResult>
```

Finds a focusable node by conditions. This API uses a promise to return the result.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rule | FocusRule | 是 | Rule for checking the current node and its descendants. |
| condition | FocusCondition | 是 | Condition for finding a focusable node. |
| type | FocusRuleType | 是 | Type for finding a focusable node. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FocusMoveResult> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getChildren

```TypeScript
getChildren(): Promise<Array<AccessibilityElement>>
```

Obtains the child elements of an element. This API uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement>> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getCursorPosition

```TypeScript
getCursorPosition(callback: AsyncCallback<int>): void
```

Obtains the cursor position in the **Text** component. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | Callback function used to return the result. |

## getCursorPosition

```TypeScript
getCursorPosition(): Promise<int>
```

Obtains the cursor position in the **Text** component. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the result. |

## getParent

```TypeScript
getParent(): Promise<AccessibilityElement>
```

Obtains the parent element of an accessibility node. This API uses a promise to return the result.

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

## getRoot

```TypeScript
getRoot(): Promise<AccessibilityElement>
```

Obtains the root element of an active window. This API uses a promise to return the result.

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

## performAction

```TypeScript
performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionName | string | 是 | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| parameters | object | 是 | Parameters required for performing the target action. Empty by default. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## performAction

```TypeScript
performAction(actionName: string, parameters?: object): Promise<void>
```

Performs an action based on the specified action name. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionName | string | 是 | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| parameters | object | 否 | Parameters required for performing the target action. Empty by default. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## performAction

```TypeScript
performAction(actionName: string, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionName | string | 是 | Action name. For details, see  [Action]./../@ohos.accessibility:accessibility.Action. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 9300005 | This action is not supported. |

## accessibilityFocused

```TypeScript
accessibilityFocused?: boolean
```

Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused , and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## lastContent

```TypeScript
lastContent?: string
```

Last item.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## clickable

```TypeScript
clickable?: boolean
```

Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## textMoveUnit

```TypeScript
textMoveUnit?: accessibility.TextMoveUnit
```

Movement unit for traversing and reading text. Default value: **char**.

**类型：** accessibility.TextMoveUnit

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## hotArea

```TypeScript
hotArea?: Rect
```

Hot area of an element.

**类型：** Rect

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityVisible

```TypeScript
accessibilityVisible?: boolean
```

Whether the component is visible for accessibility purposes. The value **true** indicates that the component is visible, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Accessibility level of a component. **auto**: The accessibility grouping service and ArkUI jointly determine whether the current component can be identified by accessibility services. **yes**: The component can be identified by accessibility services. **no**: The component cannot be identified by accessibility services. **no-hide-descendants**: The current component and all its child components cannot be identified by accessibility services.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type?: WindowType
```

Window type of an element.

**类型：** WindowType

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isActive

```TypeScript
isActive?: boolean
```

Whether the element is active. The value **true** indicates that the element is active, and **false** indicates the opposite. Default value: **true**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## currentIndex

```TypeScript
currentIndex?: int
```

Index of the current item. Default value: **0**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isEnable

```TypeScript
isEnable?: boolean
```

Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## startIndex

```TypeScript
startIndex?: int
```

Index of the first item on the screen. Default value: **0**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## navDestinationId

```TypeScript
navDestinationId?: long
```

Destination ID of a component for navigation.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## endIndex

```TypeScript
endIndex?: int
```

Index of the last list item displayed on the screen. Default value: **0**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## checked

```TypeScript
checked?: boolean
```

Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## inputType

```TypeScript
inputType?: int
```

Type of the input text. Default value: **0**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## text

```TypeScript
text?: string
```

Text content of an element.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId?: long
```

ID of the next component to obtain the focus. Default value: **-1**.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## selected

```TypeScript
selected?: boolean
```

Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## offset

```TypeScript
offset?: double
```

Pixel offset of the content area relative to the top coordinate of a scrollable component (such as List and Grid). The unit is pixel (px). Default value: **0**.

**类型：** double

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isPassword

```TypeScript
isPassword?: boolean
```

Whether the element is a password. The value **true** indicates that the element is a password, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## checkable

```TypeScript
checkable?: boolean
```

Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## customActions

```TypeScript
customActions?: Array<string>
```

Indicates the custom actions supported by the component.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## childrenIds

```TypeScript
childrenIds?: Array<long>
```

List of child element IDs of a component.

**类型：** Array<long>

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## childrenTreeId

```TypeScript
childrenTreeId?: int
```

Child component tree ID of the element. The default value is **-1**.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isEssential

```TypeScript
isEssential?: boolean
```

Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the value **false** indicates that the element is not mandatory. The default value is **false**.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## textType

```TypeScript
textType?: string
```

Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the component.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## resourceName

```TypeScript
resourceName?: string
```

Resource name of the element.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## focusable

```TypeScript
focusable?: boolean
```

Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isVisible

```TypeScript
isVisible?: boolean
```

Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## pageId

```TypeScript
pageId?: int
```

Page ID. Default value: **-1**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isFocused

```TypeScript
isFocused?: boolean
```

Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
windowId?: int
```

Window ID. Default value: **-1**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## longClickable

```TypeScript
longClickable?: boolean
```

Whether the element can be long-pressed. The value **true** indicates that the element can be long-pressed, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## supportedActionNames

```TypeScript
supportedActionNames?: Array<string>
```

Supported action names.

**类型：** Array<string>

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## sourceType

```TypeScript
sourceType?: AccessibilitySourceType
```

Indicates the source of this element.

**类型：** AccessibilitySourceType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## mainWindowId

```TypeScript
mainWindowId?: int
```

Main window ID of a component.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## contents

```TypeScript
contents?: Array<string>
```

Content displayed in the element.

**类型：** Array<string>

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## customComponentType

```TypeScript
customComponentType?: string
```

Custom component type.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
bundleName?: string
```

Bundle name.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## extraInfo

```TypeScript
extraInfo?: string
```

Additional information about an element. The value is a JSON string.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## triggerAction

```TypeScript
triggerAction?: AccessibilityAction
```

Action that triggers the element event.

**类型：** AccessibilityAction

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## valueMax

```TypeScript
valueMax?: double
```

Maximum value. Default value: **0**.

**类型：** double

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## componentId

```TypeScript
componentId?: long
```

ID of the component to which the element belongs. Default value: **-1**.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## description

```TypeScript
description?: string
```

Description of the element.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## error

```TypeScript
error?: string
```

Error status of the element.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityGroup

```TypeScript
accessibilityGroup?: boolean
```

Whether the element is an accessibility group. The value **true** indicates that the element is an accessibility group, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## layer

```TypeScript
layer?: int
```

Display layer of the element.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## pluralLineSupported

```TypeScript
pluralLineSupported?: boolean
```

Whether the element supports multiple lines of text. The value **true** indicates that the element supports multiple lines of text, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## rect

```TypeScript
rect?: Rect
```

Rectangular area for the element.

**类型：** Rect

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## valueMin

```TypeScript
valueMin?: double
```

Minimum value. Default value: **0**.

**类型：** double

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## valueNow

```TypeScript
valueNow?: double
```

Current value. Default value: **0**.

**类型：** double

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityStateDescription

```TypeScript
accessibilityStateDescription?: string
```

Custom accessibility state broadcast text of an element.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## inspectorKey

```TypeScript
inspectorKey?: string
```

Inspector key.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityScrollable

```TypeScript
accessibilityScrollable?: boolean
```

Whether the element can be scrolled for accessibility purposes. This attribute has a higher priority than **scrollable**. The value **true** indicates that the element is scrollable, and **false** indicates the opposite. Default value: **true**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## scrollable

```TypeScript
scrollable?: boolean
```

Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## spans

```TypeScript
spans?: AccessibilitySpan[]
```

Span array of a component.

**类型：** AccessibilitySpan[]

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityPreviousFocusId

```TypeScript
accessibilityPreviousFocusId?: long
```

ID of the previous component to obtain the focus. Default value: **-1**.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## componentType

```TypeScript
componentType?: string
```

Type of the component to which the element belongs.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## editable

```TypeScript
editable?: boolean
```

Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## textLengthLimit

```TypeScript
textLengthLimit?: int
```

Maximum text length of an element.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## belongTreeId

```TypeScript
belongTreeId?: int
```

Component tree ID that the element belongs to. The default value is **-1**.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## accessibilityText

```TypeScript
accessibilityText?: string
```

Accessibility text information of an element.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## parentId

```TypeScript
parentId?: long
```

Parent element ID of a component.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## screenRect

```TypeScript
screenRect?: Rect
```

Rectangular area for the element to display.

**类型：** Rect

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## itemCount

```TypeScript
itemCount?: int
```

Total number of items. Default value: **0**.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## isHint

```TypeScript
isHint?: boolean
```

Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the opposite. Default value: **false**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## hintText

```TypeScript
hintText?: string
```

Hint text.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## currentItem

```TypeScript
currentItem?: AccessibilityGrid
```

Current item in the component grid.

**类型：** AccessibilityGrid

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## clip

```TypeScript
clip?: boolean
```

Whether the component needs to be clipped. The value **true** indicates that the component needs to be clipped, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

