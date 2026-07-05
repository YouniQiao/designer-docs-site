# rotate

## rotate

```TypeScript
function rotate(mechId: int, angles: RotationAngles, duration: int): Promise<Result>
```

Rotates a mechanical device to the relative angles.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mechId | int | 是 | ID of the mechanical device. |
| angles | RotationAngles | 是 | Relative angles. |
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
let degree: mechanicManager.RotationAngles = {
  yaw: 0.1 * Math.PI,
  roll: 0.0,
  pitch: 0.0
}
mechanicManager.rotate(0, degree, 500)
  .then((result: mechanicManager.Result) => {
    console.info(`'Rotate result:' ${result}`);
  });
console.info('End rotation');

```

