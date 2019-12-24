import { EventEmitter } from "events";
import {
  DidChangeTextDocumentParams,
  DocumentFormattingParams,
  Connection,
} from "vscode-languageserver";
import { URI } from "vscode-uri";
import { Subject } from "rxjs";

export class ProviderResolver extends EventEmitter {
  public formattingRequested: Subject = new Subject<DocumentFormattingParams>();

  constructor(private connection: Connection, elmWorkspace: URI) {
    super();

    connection.onDocumentFormatting(event =>
      this.emit(event, elmWorkspace, "formatting"),
    );
  }

  private emit(event: any, eventType: string): void {
    this.connection.console.log(
      `Received ${eventType} for ${documentUri.toString()}`,
    );
    this.emit(eventType, event);
  }
}
