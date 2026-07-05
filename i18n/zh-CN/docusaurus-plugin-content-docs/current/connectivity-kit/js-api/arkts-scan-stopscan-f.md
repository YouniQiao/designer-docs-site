# stopScan

## stopScan

```TypeScript
function stopScan(): Promise<void>
```

停止扫描。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NearLink.Base

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | 权限被拒绝。 |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

