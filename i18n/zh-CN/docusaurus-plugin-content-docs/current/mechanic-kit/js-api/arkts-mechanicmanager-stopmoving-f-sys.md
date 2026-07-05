# stopMoving

## stopMoving

```TypeScript
function stopMoving(mechId: int): Promise<void>
```

Stops a mechanical device from moving.

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
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**示例：**

```TypeScript
console.info('Stop moving');
mechanicManager.stopMoving(0)
  .then(() => {
    console.info('Get stop complete');
  });
console.info('Stop succeeded');

```

