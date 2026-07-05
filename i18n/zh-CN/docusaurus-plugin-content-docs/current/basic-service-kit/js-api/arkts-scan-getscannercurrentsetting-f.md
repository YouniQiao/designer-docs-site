# getScannerCurrentSetting

## getScannerCurrentSetting

```TypeScript
function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>
```

获取当前扫描仪设置。使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scannerId | string | 是 | 扫描仪的ID。 |
| optionIndex | int | 是 | 要获取的选项的索引。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ScannerOptionValue> | Promise对象，返回扫描仪选项值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

