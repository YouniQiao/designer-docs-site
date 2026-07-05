# @ohos.app.cli.cliManager

The module provides the capability to interact with cli tools in the system.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[clearSession](arkts-climanager-clearsession-f-sys.md#clearSession-1) | Close session and force kill tool process. |
| <!--DelRow-->[execCmd](arkts-climanager-execcmd-f-sys.md#execCmd-1) | Execute a command. This API uses a promise to return the result. |
| <!--DelRow-->[execTool](arkts-climanager-exectool-f-sys.md#execTool-1) | Execute a CLI command |
| <!--DelRow-->[getToolInfoByName](arkts-climanager-gettoolinfobyname-f-sys.md#getToolInfoByName-1) | Get detailed information of a single tool by its name |
| <!--DelRow-->[querySession](arkts-climanager-querysession-f-sys.md#querySession-1) | Query session status. |
| <!--DelRow-->[queryToolSummaries](arkts-climanager-querytoolsummaries-f-sys.md#queryToolSummaries-1) | Query all tool summary information. The summary information only contains the fields: name, description, version. |
| <!--DelRow-->[queryTools](arkts-climanager-querytools-f-sys.md#queryTools-1) | Query all detailed information of tools |
| <!--DelRow-->[sendMessage](arkts-climanager-sendmessage-f-sys.md#sendMessage-1) | Send event to target process. |
| <!--DelRow-->[subscribeSession](arkts-climanager-subscribesession-f-sys.md#subscribeSession-1) | Subscribe session event. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CliSessionInfo](arkts-climanager-clisessioninfo-i-sys.md) | Session information of a tool execution. |
| <!--DelRow-->[ExecCmdOptions](arkts-climanager-execcmdoptions-i-sys.md) | Options for executing a command. |
| <!--DelRow-->[ExecOptions](arkts-climanager-execoptions-i-sys.md) | Tool execution options. |
| <!--DelRow-->[ExecResult](arkts-climanager-execresult-i-sys.md) | Execute result of a tool execution. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SessionStatus](arkts-climanager-sessionstatus-e-sys.md) | Enum for session status. |

