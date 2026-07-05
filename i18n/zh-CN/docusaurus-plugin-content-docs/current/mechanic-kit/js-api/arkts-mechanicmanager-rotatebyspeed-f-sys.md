# rotateBySpeed

## rotateBySpeed

```TypeScript
function rotateBySpeed(mechId: int, speed: RotationSpeed, duration: int): Promise<Result>
```

Rotates a mechanical device at the specified speed.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mechId | int | 是 | ID of the mechanical device. |
| speed | RotationSpeed | 是 | Rotation speed. |
| duration | int | 是 | Rotation duration. Unit: millisecond. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | Promise that return the execution result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**示例：**

```TypeScript
console.info('Start rotate');
let degree: mechanicManager.RotationSpeed = {
  yawSpeed: 3 * Math.PI,
  rollSpeed: 3 * Math.PI,
  pitchSpeed: 3 * Math.PI
}
mechanicManager.rotateBySpeed(0, degree, 500)
  .then((result) => {
    console.info(`'Rotate result:' ${result}`);
  });
console.info('Rotate finish');

```

