# permitInjection

## permitInjection

```TypeScript
function permitInjection(result: boolean): void
```

允许事件注入权限。

**起始版本：** 12

**需要权限：** 

 ohos.permission.INJECT_INPUT_EVENT

**系统能力：** SystemCapability.MultimodalInput.Input.InputSimulator

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | boolean | 是 | 授权结果（true表示：允许事件注入，false表示：不允许事件注入）。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permission error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

