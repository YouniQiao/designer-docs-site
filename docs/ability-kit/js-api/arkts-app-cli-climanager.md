# @ohos.app.cli.cliManager

The module provides the capability to interact with cli tools in the system.

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [clearSession](arkts-ability-clearsession-f-sys.md#clearsession-1) | Close session and force kill tool process. |
| [execCmd](arkts-ability-execcmd-f-sys.md#execcmd-1) | Execute a command. This API uses a promise to return the result. |
| [execTool](arkts-ability-exectool-f-sys.md#exectool-1) | Execute a CLI command |
| [getToolInfoByName](arkts-ability-gettoolinfobyname-f-sys.md#gettoolinfobyname-1) | Get detailed information of a single tool by its name |
| [querySession](arkts-ability-querysession-f-sys.md#querysession-1) | Query session status. |
| [queryToolSummaries](arkts-ability-querytoolsummaries-f-sys.md#querytoolsummaries-1) | Query all tool summary information. The summary information only contains the fields: name, description, version. |
| [queryTools](arkts-ability-querytools-f-sys.md#querytools-1) | Query all detailed information of tools |
| [sendMessage](arkts-ability-sendmessage-f-sys.md#sendmessage-1) | Send event to target process. |
| [subscribeSession](arkts-ability-subscribesession-f-sys.md#subscribesession-1) | Subscribe session event. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CliSessionInfo](arkts-ability-clisessioninfo-i-sys.md) | Session information of a tool execution. |
| [ExecCmdOptions](arkts-ability-execcmdoptions-i-sys.md) | Options for executing a command. |
| [ExecOptions](arkts-ability-execoptions-i-sys.md) | Tool execution options. |
| [ExecResult](arkts-ability-execresult-i-sys.md) | Execute result of a tool execution. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SessionStatus](arkts-ability-sessionstatus-e-sys.md) | Enum for session status. |
<!--DelEnd-->

