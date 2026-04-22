/**
 * @file icu/types.ts
 * @description ICU MessageFormat AST type definitions
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.1.0
 *
 * Based on Unicode ICU MessageFormat2 specification.
 * @see https://unicode.org/reports/tr35/tr35-messages.html
 */

export type ICUNodeType =
  | "literal"
  | "argument"
  | "plural"
  | "select"
  | "selectOrdinal"
  | "number"
  | "date"
  | "time";

export interface ICULiteral {
  type: "literal";
  value: string;
}

export interface ICUArgument {
  type: "argument";
  name: string;
}

export interface ICUPluralClause {
  selector: string;
  content: ICUNode[];
}

export interface ICUPlural {
  type: "plural";
  name: string;
  offset: number;
  clauses: ICUPluralClause[];
}

export interface ICUSelectClause {
  selector: string;
  content: ICUNode[];
}

export interface ICUSelect {
  type: "select";
  name: string;
  clauses: ICUSelectClause[];
}

export interface ICUSelectOrdinal {
  type: "selectOrdinal";
  name: string;
  clauses: ICUSelectClause[];
}

export interface ICUNumber {
  type: "number";
  name: string;
  format?: string;
}

export interface ICUDate {
  type: "date";
  name: string;
  format?: "short" | "medium" | "long" | "full";
}

export interface ICUTime {
  type: "time";
  name: string;
  format?: "short" | "medium" | "long" | "full";
}

export type ICUNode =
  | ICULiteral
  | ICUArgument
  | ICUPlural
  | ICUSelect
  | ICUSelectOrdinal
  | ICUNumber
  | ICUDate
  | ICUTime;

export interface ICUParseError {
  message: string;
  position: number;
}

export interface ICUParseResult {
  nodes: ICUNode[];
  errors: ICUParseError[];
}
