# getCurrentInputMethod

## getCurrentInputMethod

```TypeScript
function getCurrentInputMethod(userId?: int): InputMethodProperty
```

Get the current input method of a specified user.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodProperty | the property of the current input method. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

**示例：**

```TypeScript
try {
  let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod(100);
  console.info('Succeeded in getting current input method, name: ' + currentIme.name + ', id: ' + currentIme.id);
} catch (err) {
  console.error(`Failed to getCurrentInputMethod. Code: ${err.code}, message: ${err.message}`);
}

```

