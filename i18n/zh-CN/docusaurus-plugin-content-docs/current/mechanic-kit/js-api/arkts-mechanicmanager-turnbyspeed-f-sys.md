# turnBySpeed

## turnBySpeed

```TypeScript
function turnBySpeed(mechId: int, angleSpeed: double, duration: int): Promise<Result>
```

Rotate in place according to the speed.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mechId | int | 是 | ID of the mechanical device.  The value should be an integer. |
| angleSpeed | double | 是 | angular velocity. |
| duration | int | 是 | Duration of movement, unit ms.  The value should be an integer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | Promise that returns the execution result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

