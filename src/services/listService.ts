import { ListModel } from "../models/listModel";

/**
 * Retrive sample data
 * @returns data for list widget
 */
export const getListData = (): ListModel[] => [
  {
    id: "id1",
    title: "Low boot speed score",
    content: "Remove unnecessary startup programs",
  },
  {
    id: "id2",
    title: "High BSOD Score",
    content: "Contact tech support",
  },
  {
    id: "id3",
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
];
