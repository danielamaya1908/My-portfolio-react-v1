import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../../data/projects";

const projectsSlice = createSlice({
  name: "projects",
  initialState: projectsData,
  reducers: {},
});

export default projectsSlice.reducer;
