declare module '*.svg' {
  const content: string // SVG 导入后是路径字符串
  export default content
}
declare module '*.svg' {
  const src: string
  export default src
}
