export interface SetUpViewDraft {
  draftView: string;
  productsCount: number;
  draftAction: string;
  formatList: { format: string | any; templateId: number | null }[];
  videoId?: number;
}
