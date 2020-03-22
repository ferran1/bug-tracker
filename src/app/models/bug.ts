import {User} from './user';

export enum BugSeverity {
  CRITICAL  = "Critical",
  MAJOR = "Major",
  MINOR = "Minor"
}

/**
 * Represents object data of an issue
 */
export class Bug {

  private _id: number;
  private _title: string;
  private _description: string;
  private _assignedMembers?: User[] = [];

  constructor(title: string, description: string, assignedMembers: User[]) {
    this._title = title;
    this._description = description;
    this._assignedMembers = assignedMembers;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get assignedMembers(): User[] {
    return this._assignedMembers;
  }

  set assignedMembers(value: User[]) {
    this._assignedMembers = value;
  }
}
