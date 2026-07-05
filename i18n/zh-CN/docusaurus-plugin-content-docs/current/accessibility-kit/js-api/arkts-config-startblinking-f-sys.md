# startBlinking

## startBlinking

```TypeScript
function startBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode
```

Enable the flash or screen to blink for flash alert.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | BlinkingMode | 是 | Indicates the mode of screen flickering or flash light flashing. |
| scenario | BlinkingScenario | 是 | Indicates the scenario that blinking is triggered. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| BlinkResultCode | Returns the result code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed.  A non-system application calls a system API. |
| 9300000 | System abnormality.Possible causes:  1.Internal operation failed.  2.Failed to obtain the required service or client object (null pointer).  3.IPC communication failed.  4.Failed to obtain the accessibility service proxy. |

