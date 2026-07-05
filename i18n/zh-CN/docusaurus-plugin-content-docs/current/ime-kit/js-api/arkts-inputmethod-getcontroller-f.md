# getController

## getController

```TypeScript
function getController(): InputMethodController
```

Input method controller

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodController | the object of InputMethodController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800006 | input method controller error. Possible cause:  create InputMethodController object failed. |

**示例：**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getController();

```

