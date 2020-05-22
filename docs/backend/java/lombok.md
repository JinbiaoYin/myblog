---
title: lombok
---

## 快速入门

### POJO 类常用注解

- `@Getter`/`@Setter`：作用类上，生成所有成员变量的 getter/setter 方法。
- `@ToString`：作用于类上，覆盖默认的 toString() 方法，可以通过 of 属性限定某些字段，通过 exclude 属性排除某些字段。
- `@EqualsAndHashCode`：作用于类上，覆盖默认的 equals() 和 hashCode() 。
- `@NonNull`: 主要作用于成员变量和参数中，标识不能为空，否则抛出空指针异常。
- `@NoArgsConstructor`：作用于类上，生成无参构造。
- `@RequiredArgsConstructor`：作用于类上生成包含final和`@NonNull`注解的成员变量的构造器。
- `@AllArgsConstructor`: 作用于类上，生成全参构造。
- `@Data`: 作用于类上，是以下注解的集合：
  - `@ToString` 
  - `@EqualsAndHashCode` 
  - `@Getter` 
  - `@Setter`
  - `@RequiredArgsConstructor`
- `@Builder`：作用于类上，将类转变为建造者模式
- `@Log`：作用于类上，生成日志变量。


