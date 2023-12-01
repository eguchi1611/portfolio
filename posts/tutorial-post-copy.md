---
title: "tutorial-ポスト"
createdAt: "2023-11-02"
updatedAt: "2023-11-17"
---

## What is this?

This package is a [unified][] ([rehype][]) plugin that compiles HTML (hast) to
any JSX runtime (preact, react, solid, svelte, vue, etc).

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**rehype** adds support for HTML to unified.
**hast** is the HTML AST that rehype uses.
This is a rehype plugin that adds a compiler to compile hast to a JSX runtime.

## When should I use this?

This plugin adds a compiler for rehype, which means that it turns the final
HTML (hast) syntax tree into something else (in this case, a `JSX.Element`).
It’s useful when you’re already using unified (whether remark or rehype) or are
open to learning about ASTs (they’re powerful!) and want to render content in
your app.
