# @ohos.file.securityLabel

该模块提供文件数据安全等级的相关功能：向应用程序提供查询、设置文件数据安全等级的JS接口。

**起始版本：** 9

**系统能力：** SystemCapability.FileManagement.File.FileIO

## 导入模块

```TypeScript
import { securityLabel } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getSecurityLabel](arkts-securitylabel-getsecuritylabel-f.md#getSecurityLabel-1) | 获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用Promise异步回调。 |
| [getSecurityLabel](arkts-securitylabel-getsecuritylabel-f.md#getSecurityLabel-2) | 获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用callback异步回调。 |
| [getSecurityLabelSync](arkts-securitylabel-getsecuritylabelsync-f.md#getSecurityLabelSync-1) | 以同步方法获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。 |
| [setSecurityLabel](arkts-securitylabel-setsecuritylabel-f.md#setSecurityLabel-1) | 设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。使用Promise异步回调。 |
| [setSecurityLabel](arkts-securitylabel-setsecuritylabel-f.md#setSecurityLabel-2) | 设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。使用callback异步回调。 |
| [setSecurityLabelSync](arkts-securitylabel-setsecuritylabelsync-f.md#setSecurityLabelSync-1) | 以同步方法设置文件或目录的数据安全等级。数据安全等级仅可由低向高或平级设置。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [DataLevel](arkts-securitylabel-datalevel-t.md) | 数据安全等级。 |

