export class RustPanic extends Error {
  public request: any
  public rustStack: string
  public schemaPath?: string
  public area: ErrorArea
  public sqlDump?: string
  public schema?: string
  constructor(
    message: string,
    rustStack: string,
    request: any,
    area: ErrorArea,
    schemaPath?: string,
    schema?: string,
    sqlDump?: string,
  ) {
    super(message)
    this.rustStack = rustStack
    this.request = request
    this.schemaPath = schemaPath
    this.area = area
    this.schema = schema
    this.sqlDump = sqlDump
  }
}

export enum ErrorArea {
  LIFT_CLI = 'LIFT_CLI',
  PHOTON_STUDIO = 'PHOTON_STUDIO',
  INTROSPECTION_CLI = 'INTROSPECTION_CLI',
}
