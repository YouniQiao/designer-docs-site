# getScannerParameter

## getScannerParameter

```TypeScript
function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>
```

获取扫描仪参数。使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scannerId | string | 是 | 扫描仪的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ScannerParameter[]> | Promise used to return the scanner parameters. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

