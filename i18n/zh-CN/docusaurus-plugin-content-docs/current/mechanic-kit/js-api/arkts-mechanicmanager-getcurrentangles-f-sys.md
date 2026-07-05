# getCurrentAngles

## getCurrentAngles

```TypeScript
function getCurrentAngles(mechId: int): EulerAngles
```

Obtains the current angles of a mechanical device.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mechId | int | 是 | ID of the mechanical device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| EulerAngles | Rotation angles. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**示例：**

```TypeScript
console.info('Query current location');
let currentAngles: mechanicManager.EulerAngles = mechanicManager.getCurrentAngles(0);
console.info(`'Query current location, location:' ${currentAngles}`);

```

