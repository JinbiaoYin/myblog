---
title: 注解的继承
---

只有被 `@Inherited` 标识的自定义注解 `@MyAnnotation`，才能被继承。

例如：当 Son extends Parent ,Parent 被 `@MyAnnotation` 标识,Son 也会获得该注解，如果方法上被 `@MyAnnotation` 标识，只有 Son 继承的方法会获得该注解。重写与实现的方法都不会获得该注解。