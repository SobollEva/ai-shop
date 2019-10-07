export interface EditorDraft {
  created_at: string;
  id: number;
  modified_at: string;
  params: EditorDraftParams;
  template: null;
  title: string;
}

export interface EditorDraftParams {
  size: number[];
  slides: any[];
}
