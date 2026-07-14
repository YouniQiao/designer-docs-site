# @ohos.app.ability.appMemoryOptimizer

appMemoryOptimizer provides application memory optimization capabilities, including performing file page cache eviction on specified files, performing file page cache eviction on specified modules.

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appMemoryOptimizer } from '@kit.AbilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [evictFilePages](arkts-ability-evictfilepages-f-sys.md#evictfilepages-1) | Sends a request to the system to release file page cache of specified files. The system determines whether to actually perform the release based on the current memory status, and success is not guaranteed. |
| [evictModuleFilePages](arkts-ability-evictmodulefilepages-f-sys.md#evictmodulefilepages-1) | Sends a request to the system to release file page cache of specified modules. The system determines whether to actually perform the release based on the current memory status, and success is not guaranteed. The system reads the memory_optimizer.json configuration file of the corresponding module, obtains the evictFilePages array, and performs file page cache eviction on the files in the array. Configuration file path: {Module directory}/src/main/resources/rawfile/memory_optimizer.json File names in the evictFilePages array of the configuration file must end with .so, .hap, or .hsp. |
<!--DelEnd-->

